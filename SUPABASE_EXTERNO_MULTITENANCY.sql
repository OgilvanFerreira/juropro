-- =====================================================
-- JuroPro — Multi-tenancy no Supabase EXTERNO (Kiwifi/Nexano)
-- VERSÃO 2 — PRESERVA dados existentes vinculando ao ADMIN
-- =====================================================
--
-- COMO USAR:
--   1. Abra o painel do Supabase EXTERNO (o que está em EXTERNAL_SUPABASE_URL).
--   2. Vá em SQL Editor → New query.
--   3. Cole TODO este arquivo e clique em Run.
--
-- O QUE ESTE SCRIPT FAZ:
--   - Cria a coluna `user_id` em clientes/emprestimos/parcelas/configuracoes
--   - Vincula TODOS os dados existentes ao seu usuário ADMIN do Lovable Cloud
--     (UUID: 56e57fc4-8d94-44d1-9a24-5ef1db942531 = fsgilvan@gmail.com)
--   - Marca user_id como NOT NULL
--   - Ativa RLS e cria políticas (cada usuário só vê o que é dele)
--   - Cria trigger que preenche user_id automaticamente em novos INSERTs
--
-- IMPORTANTE — POR QUE FUNCIONA SEM JWT DO EXTERNO:
--   O app NÃO autentica usuários no Supabase externo. Em vez disso, ele usa
--   a service_role (ou anon) e FILTRA no código por `user_id = <usuário Lovable
--   Cloud>`. Logo, o isolamento vem do código + da coluna user_id.
--   As policies RLS são uma CAMADA EXTRA de segurança caso alguém tente
--   acessar diretamente com um JWT válido daquele Supabase.
-- =====================================================

-- =====================================================
-- PASSO 1: Adiciona coluna user_id (sem NOT NULL ainda)
-- =====================================================
ALTER TABLE public.clientes      ADD COLUMN IF NOT EXISTS user_id UUID;
ALTER TABLE public.emprestimos   ADD COLUMN IF NOT EXISTS user_id UUID;
ALTER TABLE public.parcelas      ADD COLUMN IF NOT EXISTS user_id UUID;

-- =====================================================
-- PASSO 2: Vincula dados existentes ao ADMIN (fsgilvan@gmail.com)
-- =====================================================
-- UUID do admin no Lovable Cloud — é o user_id que o app usa para chamar o externo.
UPDATE public.clientes    SET user_id = '56e57fc4-8d94-44d1-9a24-5ef1db942531'::uuid WHERE user_id IS NULL;
UPDATE public.emprestimos SET user_id = '56e57fc4-8d94-44d1-9a24-5ef1db942531'::uuid WHERE user_id IS NULL;
UPDATE public.parcelas    SET user_id = '56e57fc4-8d94-44d1-9a24-5ef1db942531'::uuid WHERE user_id IS NULL;

-- =====================================================
-- PASSO 3: Marca user_id como NOT NULL (segurança)
-- =====================================================
ALTER TABLE public.clientes      ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE public.emprestimos   ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE public.parcelas      ALTER COLUMN user_id SET NOT NULL;

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_clientes_user_id    ON public.clientes(user_id);
CREATE INDEX IF NOT EXISTS idx_emprestimos_user_id ON public.emprestimos(user_id);
CREATE INDEX IF NOT EXISTS idx_parcelas_user_id    ON public.parcelas(user_id);

-- =====================================================
-- PASSO 4: Função utilitária — auto-preenche user_id em INSERT
-- =====================================================
CREATE OR REPLACE FUNCTION public.set_user_id_on_insert()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.user_id IS NULL THEN
    NEW.user_id := auth.uid();
  END IF;
  RETURN NEW;
END;
$$;

-- =====================================================
-- PASSO 5: Tabela CONFIGURACOES (cria se não existir)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.configuracoes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  chave TEXT NOT NULL,
  valor JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, chave)
);
CREATE INDEX IF NOT EXISTS idx_configuracoes_user_id ON public.configuracoes(user_id);

-- =====================================================
-- PASSO 6: Ativa RLS em todas as tabelas
-- =====================================================
ALTER TABLE public.clientes      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emprestimos   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parcelas      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.configuracoes ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- PASSO 7: Policies — cada usuário só vê / mexe no que é dele
-- =====================================================
DO $$
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY['clientes','emprestimos','parcelas','configuracoes']
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS "%1$s_select_own" ON public.%1$I', t);
    EXECUTE format('DROP POLICY IF EXISTS "%1$s_insert_own" ON public.%1$I', t);
    EXECUTE format('DROP POLICY IF EXISTS "%1$s_update_own" ON public.%1$I', t);
    EXECUTE format('DROP POLICY IF EXISTS "%1$s_delete_own" ON public.%1$I', t);

    EXECUTE format('CREATE POLICY "%1$s_select_own" ON public.%1$I
      FOR SELECT TO authenticated USING (auth.uid() = user_id)', t);
    EXECUTE format('CREATE POLICY "%1$s_insert_own" ON public.%1$I
      FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id)', t);
    EXECUTE format('CREATE POLICY "%1$s_update_own" ON public.%1$I
      FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id)', t);
    EXECUTE format('CREATE POLICY "%1$s_delete_own" ON public.%1$I
      FOR DELETE TO authenticated USING (auth.uid() = user_id)', t);

    EXECUTE format('DROP TRIGGER IF EXISTS trg_%1$s_set_user_id ON public.%1$I', t);
    EXECUTE format('CREATE TRIGGER trg_%1$s_set_user_id
      BEFORE INSERT ON public.%1$I
      FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert()', t);
  END LOOP;
END $$;

-- =====================================================
-- PASSO 8: Sistema de ADMIN (chave mestra)
-- =====================================================
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'user');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT public.has_role(auth.uid(), 'admin') $$;

-- Vincula seu usuário admin (Lovable Cloud) como admin no externo também
INSERT INTO public.user_roles (user_id, role)
VALUES ('56e57fc4-8d94-44d1-9a24-5ef1db942531'::uuid, 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- =====================================================
-- PASSO 9: RPCs do dashboard (filtradas por usuário)
-- =====================================================
CREATE OR REPLACE FUNCTION public.get_clientes_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total BIGINT)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path = public AS $$
  SELECT to_char(date_trunc('month', created_at), 'YYYY-MM'), count(*)::bigint
  FROM public.clientes
  WHERE user_id = p_user_id AND created_at >= (now() - interval '12 months')
  GROUP BY 1 ORDER BY 1;
$$;

CREATE OR REPLACE FUNCTION public.get_contratos_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total BIGINT)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path = public AS $$
  SELECT to_char(date_trunc('month', created_at), 'YYYY-MM'), count(*)::bigint
  FROM public.emprestimos
  WHERE user_id = p_user_id AND created_at >= (now() - interval '12 months')
  GROUP BY 1 ORDER BY 1;
$$;

CREATE OR REPLACE FUNCTION public.get_volume_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total NUMERIC)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path = public AS $$
  SELECT to_char(date_trunc('month', created_at), 'YYYY-MM'),
         coalesce(sum(valor_principal), 0)::numeric
  FROM public.emprestimos
  WHERE user_id = p_user_id AND created_at >= (now() - interval '12 months')
  GROUP BY 1 ORDER BY 1;
$$;

CREATE OR REPLACE FUNCTION public.get_recebimentos_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total NUMERIC)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path = public AS $$
  SELECT to_char(date_trunc('month', data_pagamento), 'YYYY-MM'),
         coalesce(sum(valor_pago), 0)::numeric
  FROM public.parcelas
  WHERE user_id = p_user_id AND data_pagamento IS NOT NULL
    AND data_pagamento >= (now() - interval '12 months')::date
  GROUP BY 1 ORDER BY 1;
$$;

-- =====================================================
-- VERIFICAÇÃO FINAL — rode estes SELECTs após o script
-- =====================================================
-- SELECT user_id, COUNT(*) FROM public.clientes    GROUP BY user_id;
-- SELECT user_id, COUNT(*) FROM public.emprestimos GROUP BY user_id;
-- SELECT user_id, COUNT(*) FROM public.parcelas    GROUP BY user_id;
-- (Todos os registros antigos devem aparecer com user_id = 56e57fc4-...)
