-- =====================================================
-- MULTI-TENANCY: Tabelas de negócio com isolamento por usuário
-- =====================================================

-- Função utilitária para preencher user_id automaticamente
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
-- TABLE: clientes
-- =====================================================
CREATE TABLE public.clientes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  nome TEXT NOT NULL,
  email TEXT,
  telefone TEXT,
  data_nascimento DATE,
  cpf_cnpj TEXT,
  rg TEXT,
  cep TEXT,
  endereco TEXT,
  numero TEXT,
  complemento TEXT,
  bairro TEXT,
  cidade TEXT,
  uf TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_clientes_user_id ON public.clientes(user_id);
CREATE INDEX idx_clientes_user_cpf ON public.clientes(user_id, cpf_cnpj) WHERE cpf_cnpj IS NOT NULL;

ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "clientes_select_own" ON public.clientes
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "clientes_insert_own" ON public.clientes
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "clientes_update_own" ON public.clientes
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "clientes_delete_own" ON public.clientes
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER trg_clientes_set_user_id
  BEFORE INSERT ON public.clientes
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

CREATE TRIGGER trg_clientes_updated_at
  BEFORE UPDATE ON public.clientes
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =====================================================
-- TABLE: emprestimos
-- =====================================================
CREATE TABLE public.emprestimos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  cliente_id UUID NOT NULL REFERENCES public.clientes(id) ON DELETE CASCADE,
  valor_principal NUMERIC(14,2) NOT NULL,
  taxa_juros NUMERIC(8,4) NOT NULL DEFAULT 0,
  numero_parcelas INTEGER NOT NULL,
  tipo_juros TEXT NOT NULL DEFAULT 'simples',
  data_inicio DATE NOT NULL,
  status TEXT NOT NULL DEFAULT 'ativo',
  observacoes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_emprestimos_user_id ON public.emprestimos(user_id);
CREATE INDEX idx_emprestimos_user_cliente ON public.emprestimos(user_id, cliente_id);

ALTER TABLE public.emprestimos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "emprestimos_select_own" ON public.emprestimos
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "emprestimos_insert_own" ON public.emprestimos
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "emprestimos_update_own" ON public.emprestimos
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "emprestimos_delete_own" ON public.emprestimos
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER trg_emprestimos_set_user_id
  BEFORE INSERT ON public.emprestimos
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

CREATE TRIGGER trg_emprestimos_updated_at
  BEFORE UPDATE ON public.emprestimos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =====================================================
-- TABLE: parcelas
-- =====================================================
CREATE TABLE public.parcelas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  emprestimo_id UUID NOT NULL REFERENCES public.emprestimos(id) ON DELETE CASCADE,
  numero_parcela INTEGER NOT NULL,
  data_vencimento DATE NOT NULL,
  valor_parcela NUMERIC(14,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pendente',
  data_pagamento DATE,
  valor_pago NUMERIC(14,2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_parcelas_user_id ON public.parcelas(user_id);
CREATE INDEX idx_parcelas_user_emprestimo ON public.parcelas(user_id, emprestimo_id);
CREATE INDEX idx_parcelas_user_vencimento ON public.parcelas(user_id, data_vencimento);

ALTER TABLE public.parcelas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "parcelas_select_own" ON public.parcelas
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "parcelas_insert_own" ON public.parcelas
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "parcelas_update_own" ON public.parcelas
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "parcelas_delete_own" ON public.parcelas
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER trg_parcelas_set_user_id
  BEFORE INSERT ON public.parcelas
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

CREATE TRIGGER trg_parcelas_updated_at
  BEFORE UPDATE ON public.parcelas
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =====================================================
-- TABLE: configuracoes (chave/valor por usuário)
-- =====================================================
CREATE TABLE public.configuracoes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  chave TEXT NOT NULL,
  valor JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, chave)
);

CREATE INDEX idx_configuracoes_user_id ON public.configuracoes(user_id);

ALTER TABLE public.configuracoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "configuracoes_select_own" ON public.configuracoes
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "configuracoes_insert_own" ON public.configuracoes
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "configuracoes_update_own" ON public.configuracoes
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "configuracoes_delete_own" ON public.configuracoes
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER trg_configuracoes_set_user_id
  BEFORE INSERT ON public.configuracoes
  FOR EACH ROW EXECUTE FUNCTION public.set_user_id_on_insert();

CREATE TRIGGER trg_configuracoes_updated_at
  BEFORE UPDATE ON public.configuracoes
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();