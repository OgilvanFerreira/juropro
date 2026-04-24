-- =====================================================
-- ROLES & ADMIN (chave mestra)
-- =====================================================

-- Enum de papéis
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Tabela de roles (separada de profiles para evitar privilege escalation)
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Função stable + security definer para evitar recursão de RLS
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Atalho para "o usuário logado é admin?"
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(auth.uid(), 'admin')
$$;

-- Policies de user_roles
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

-- =====================================================
-- POLICIES DE ADMIN (chave mestra) nas tabelas existentes
-- =====================================================

-- profiles
CREATE POLICY "Admin vê todos os perfis"
  ON public.profiles FOR SELECT TO authenticated
  USING (public.is_admin());
CREATE POLICY "Admin atualiza qualquer perfil"
  ON public.profiles FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin deleta qualquer perfil"
  ON public.profiles FOR DELETE TO authenticated
  USING (public.is_admin());

-- clientes
CREATE POLICY "Admin acesso total a clientes (select)"
  ON public.clientes FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admin acesso total a clientes (insert)"
  ON public.clientes FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a clientes (update)"
  ON public.clientes FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a clientes (delete)"
  ON public.clientes FOR DELETE TO authenticated USING (public.is_admin());

-- emprestimos
CREATE POLICY "Admin acesso total a emprestimos (select)"
  ON public.emprestimos FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admin acesso total a emprestimos (insert)"
  ON public.emprestimos FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a emprestimos (update)"
  ON public.emprestimos FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a emprestimos (delete)"
  ON public.emprestimos FOR DELETE TO authenticated USING (public.is_admin());

-- parcelas
CREATE POLICY "Admin acesso total a parcelas (select)"
  ON public.parcelas FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admin acesso total a parcelas (insert)"
  ON public.parcelas FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a parcelas (update)"
  ON public.parcelas FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a parcelas (delete)"
  ON public.parcelas FOR DELETE TO authenticated USING (public.is_admin());

-- configuracoes
CREATE POLICY "Admin acesso total a configuracoes (select)"
  ON public.configuracoes FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admin acesso total a configuracoes (insert)"
  ON public.configuracoes FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a configuracoes (update)"
  ON public.configuracoes FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin acesso total a configuracoes (delete)"
  ON public.configuracoes FOR DELETE TO authenticated USING (public.is_admin());

-- =====================================================
-- Marca fsgilvan@gmail.com como ADMIN (chave mestra)
-- =====================================================
INSERT INTO public.user_roles (user_id, role)
VALUES ('56e57fc4-8d94-44d1-9a24-5ef1db942531', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;