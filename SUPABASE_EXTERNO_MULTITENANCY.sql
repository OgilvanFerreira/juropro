-- =====================================================
-- JuroPro — Multi-tenancy no Supabase EXTERNO (Kiwifi/Nexano)
-- =====================================================
-- COMO USAR:
--   1. Abra o painel do Supabase externo (o que está em EXTERNAL_SUPABASE_URL).
--   2. Vá em SQL Editor → New query.
--   3. Cole TODO este arquivo e clique em Run.
--   4. ATENÇÃO: o bloco "ZERAR DADOS" abaixo APAGA todos os registros existentes
--      em clientes/emprestimos/parcelas/configuracoes. Já que você confirmou
--      "pode apagar", isso garante que nenhum registro fique órfão sem user_id.
-- =====================================================

-- (0) ZERAR DADOS existentes (você confirmou que pode apagar)
TRUNCATE TABLE public.parcelas, public.emprestimos, public.clientes RESTART IDENTITY CASCADE;
-- Se a tabela configuracoes existir, descomente a linha abaixo:
-- TRUNCATE TABLE public.configuracoes RESTART IDENTITY CASCADE;

-- (1) Função utilitária: preenche user_id automaticamente em INSERTs
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
-- TABELA: clientes
-- =====================================================
ALTER TABLE public.clientes ADD COLUMN IF NOT EXISTS user_id UUID;
ALTER TABLE public.clientes ALTER COLUMN user_id SET NOT NULL;
CREATE INDEX IF NOT EXISTS idx_clientes_user_id ON public.clientes(user_id);

ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "clientes_select_own" ON public.clientes;
DROP POLICY IF EXISTS "clientes_insert_own" ON public.clientes;
DROP POLICY IF EXISTS "clientes_update_own" ON public.clientes;
DROP POLICY IF EXISTS "clientes_delete_own" ON public.clientes;

CREATE POLICY "clientes_select_own" ON public.clientes
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "clientes_insert_own" ON public.clientes
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "clientes_update_own" ON public.clientes
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "clientes_delete_own" ON public.clientes
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

DROP TRIGGER IF EXISTS trg_clientes_set_user_id ON public.clientes;
CREATE TRIGGER trg_clientes_set_user_id
  BEFORE INSERT ON public.clientes
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

-- =====================================================
-- TABELA: emprestimos
-- =====================================================
ALTER TABLE public.emprestimos ADD COLUMN IF NOT EXISTS user_id UUID;
ALTER TABLE public.emprestimos ALTER COLUMN user_id SET NOT NULL;
CREATE INDEX IF NOT EXISTS idx_emprestimos_user_id ON public.emprestimos(user_id);

ALTER TABLE public.emprestimos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "emprestimos_select_own" ON public.emprestimos;
DROP POLICY IF EXISTS "emprestimos_insert_own" ON public.emprestimos;
DROP POLICY IF EXISTS "emprestimos_update_own" ON public.emprestimos;
DROP POLICY IF EXISTS "emprestimos_delete_own" ON public.emprestimos;

CREATE POLICY "emprestimos_select_own" ON public.emprestimos
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "emprestimos_insert_own" ON public.emprestimos
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "emprestimos_update_own" ON public.emprestimos
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "emprestimos_delete_own" ON public.emprestimos
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

DROP TRIGGER IF EXISTS trg_emprestimos_set_user_id ON public.emprestimos;
CREATE TRIGGER trg_emprestimos_set_user_id
  BEFORE INSERT ON public.emprestimos
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

-- =====================================================
-- TABELA: parcelas
-- =====================================================
ALTER TABLE public.parcelas ADD COLUMN IF NOT EXISTS user_id UUID;
ALTER TABLE public.parcelas ALTER COLUMN user_id SET NOT NULL;
CREATE INDEX IF NOT EXISTS idx_parcelas_user_id ON public.parcelas(user_id);

ALTER TABLE public.parcelas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "parcelas_select_own" ON public.parcelas;
DROP POLICY IF EXISTS "parcelas_insert_own" ON public.parcelas;
DROP POLICY IF EXISTS "parcelas_update_own" ON public.parcelas;
DROP POLICY IF EXISTS "parcelas_delete_own" ON public.parcelas;

CREATE POLICY "parcelas_select_own" ON public.parcelas
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "parcelas_insert_own" ON public.parcelas
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "parcelas_update_own" ON public.parcelas
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "parcelas_delete_own" ON public.parcelas
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

DROP TRIGGER IF EXISTS trg_parcelas_set_user_id ON public.parcelas;
CREATE TRIGGER trg_parcelas_set_user_id
  BEFORE INSERT ON public.parcelas
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

-- =====================================================
-- TABELA: configuracoes (criar se não existir)
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

ALTER TABLE public.configuracoes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "configuracoes_select_own" ON public.configuracoes;
DROP POLICY IF EXISTS "configuracoes_insert_own" ON public.configuracoes;
DROP POLICY IF EXISTS "configuracoes_update_own" ON public.configuracoes;
DROP POLICY IF EXISTS "configuracoes_delete_own" ON public.configuracoes;

CREATE POLICY "configuracoes_select_own" ON public.configuracoes
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "configuracoes_insert_own" ON public.configuracoes
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "configuracoes_update_own" ON public.configuracoes
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "configuracoes_delete_own" ON public.configuracoes
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

DROP TRIGGER IF EXISTS trg_configuracoes_set_user_id ON public.configuracoes;
CREATE TRIGGER trg_configuracoes_set_user_id
  BEFORE INSERT ON public.configuracoes
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

-- =====================================================
-- (Opcional) RPCs do dashboard de gráficos com filtro por usuário
-- =====================================================
-- Se você usa as RPCs get_clientes_por_mes, get_contratos_por_mes,
-- get_volume_por_mes e get_recebimentos_por_mes, recrie-as aceitando
-- o parâmetro p_user_id para isolar dados.
-- Exemplo de uma delas (adapte o restante seguindo o mesmo padrão):

CREATE OR REPLACE FUNCTION public.get_clientes_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total BIGINT)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT to_char(date_trunc('month', created_at), 'YYYY-MM') AS mes,
         count(*)::bigint AS total
  FROM public.clientes
  WHERE user_id = p_user_id
    AND created_at >= (now() - interval '12 months')
  GROUP BY 1
  ORDER BY 1;
$$;

CREATE OR REPLACE FUNCTION public.get_contratos_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total BIGINT)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT to_char(date_trunc('month', created_at), 'YYYY-MM') AS mes,
         count(*)::bigint AS total
  FROM public.emprestimos
  WHERE user_id = p_user_id
    AND created_at >= (now() - interval '12 months')
  GROUP BY 1
  ORDER BY 1;
$$;

CREATE OR REPLACE FUNCTION public.get_volume_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total NUMERIC)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT to_char(date_trunc('month', created_at), 'YYYY-MM') AS mes,
         coalesce(sum(valor_principal), 0)::numeric AS total
  FROM public.emprestimos
  WHERE user_id = p_user_id
    AND created_at >= (now() - interval '12 months')
  GROUP BY 1
  ORDER BY 1;
$$;

CREATE OR REPLACE FUNCTION public.get_recebimentos_por_mes(p_user_id UUID)
RETURNS TABLE (mes TEXT, total NUMERIC)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT to_char(date_trunc('month', data_pagamento), 'YYYY-MM') AS mes,
         coalesce(sum(valor_pago), 0)::numeric AS total
  FROM public.parcelas
  WHERE user_id = p_user_id
    AND data_pagamento IS NOT NULL
    AND data_pagamento >= (now() - interval '12 months')::date
  GROUP BY 1
  ORDER BY 1;
$$;

-- =====================================================
-- ADMIN (chave mestra) — para o Supabase EXTERNO
-- =====================================================

-- Enum de papéis (idempotente)
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'user');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON public.user_roles(user_id);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(auth.uid(), 'admin')
$$;

-- Policies em user_roles
DROP POLICY IF EXISTS "Usuário vê suas próprias roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admin gerencia roles (insert)" ON public.user_roles;
DROP POLICY IF EXISTS "Admin gerencia roles (update)" ON public.user_roles;
DROP POLICY IF EXISTS "Admin gerencia roles (delete)" ON public.user_roles;

CREATE POLICY "Usuário vê suas próprias roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());
CREATE POLICY "Admin gerencia roles (insert)"
  ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (public.is_admin());
CREATE POLICY "Admin gerencia roles (update)"
  ON public.user_roles FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin gerencia roles (delete)"
  ON public.user_roles FOR DELETE TO authenticated
  USING (public.is_admin());

-- Policies de ADMIN nas tabelas de negócio
-- (usuário comum continua só com as policies *_own; admin ganha acesso total)
DO $$
DECLARE
  t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY['clientes','emprestimos','parcelas','configuracoes']
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS "Admin total %1$s select" ON public.%1$I', t);
    EXECUTE format('DROP POLICY IF EXISTS "Admin total %1$s insert" ON public.%1$I', t);
    EXECUTE format('DROP POLICY IF EXISTS "Admin total %1$s update" ON public.%1$I', t);
    EXECUTE format('DROP POLICY IF EXISTS "Admin total %1$s delete" ON public.%1$I', t);

    EXECUTE format('CREATE POLICY "Admin total %1$s select" ON public.%1$I
      FOR SELECT TO authenticated USING (public.is_admin())', t);
    EXECUTE format('CREATE POLICY "Admin total %1$s insert" ON public.%1$I
      FOR INSERT TO authenticated WITH CHECK (public.is_admin())', t);
    EXECUTE format('CREATE POLICY "Admin total %1$s update" ON public.%1$I
      FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin())', t);
    EXECUTE format('CREATE POLICY "Admin total %1$s delete" ON public.%1$I
      FOR DELETE TO authenticated USING (public.is_admin())', t);
  END LOOP;
END $$;

-- =====================================================
-- Marca seu usuário como ADMIN (chave mestra)
-- IMPORTANTE: o user_id abaixo é o do Lovable Cloud. No Supabase externo,
-- esse ID provavelmente é DIFERENTE (cada projeto Supabase tem seu auth.users).
-- 
-- 1) Crie/garanta seu usuário no painel Auth do Supabase EXTERNO.
-- 2) Pegue o UUID dele em Authentication → Users → copy id.
-- 3) Substitua no INSERT abaixo e rode.
-- =====================================================
-- INSERT INTO public.user_roles (user_id, role)
-- VALUES ('COLE_AQUI_O_UUID_DO_USUARIO_NO_EXTERNO', 'admin')
-- ON CONFLICT (user_id, role) DO NOTHING;
