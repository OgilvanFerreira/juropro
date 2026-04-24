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
