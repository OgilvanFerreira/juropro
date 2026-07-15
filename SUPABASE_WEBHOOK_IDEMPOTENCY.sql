-- =====================================================
-- JuroPro - Idempotencia dos webhooks da Kiwify
-- =====================================================
-- Execute este arquivo no SQL Editor do Supabase de producao.
-- Projeto esperado: qshlnjvaxncitywyydwe
--
-- O script e repetivel: pode ser executado novamente sem duplicar objetos.
-- Ele nao armazena payload, email, CPF ou outros dados pessoais.

CREATE TABLE IF NOT EXISTS public.webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider TEXT NOT NULL,
  event_key TEXT NOT NULL,
  event_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'processing'
    CHECK (status IN ('processing', 'processed', 'failed')),
  attempts INTEGER NOT NULL DEFAULT 1 CHECK (attempts > 0),
  last_error TEXT,
  locked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  processed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (provider, event_key, event_type)
);

CREATE INDEX IF NOT EXISTS idx_webhook_events_status_locked
  ON public.webhook_events (status, locked_at);

CREATE INDEX IF NOT EXISTS idx_webhook_events_created_at
  ON public.webhook_events (created_at DESC);

ALTER TABLE public.webhook_events ENABLE ROW LEVEL SECURITY;

-- Nenhum usuario do SaaS acessa esta tabela. Somente o backend com service_role.
REVOKE ALL ON TABLE public.webhook_events FROM anon, authenticated;

CREATE OR REPLACE FUNCTION public.claim_webhook_event(
  p_provider TEXT,
  p_event_key TEXT,
  p_event_type TEXT
)
RETURNS TABLE (claimed BOOLEAN, event_status TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_status TEXT;
  v_locked_at TIMESTAMPTZ;
BEGIN
  IF nullif(trim(p_provider), '') IS NULL
     OR nullif(trim(p_event_key), '') IS NULL
     OR nullif(trim(p_event_type), '') IS NULL THEN
    RAISE EXCEPTION 'provider, event_key e event_type sao obrigatorios';
  END IF;

  INSERT INTO public.webhook_events (
    provider,
    event_key,
    event_type,
    status,
    attempts,
    locked_at,
    updated_at
  )
  VALUES (
    trim(p_provider),
    trim(p_event_key),
    trim(p_event_type),
    'processing',
    1,
    now(),
    now()
  )
  ON CONFLICT (provider, event_key, event_type) DO NOTHING
  RETURNING status INTO v_status;

  IF FOUND THEN
    RETURN QUERY SELECT true, 'processing'::TEXT;
    RETURN;
  END IF;

  SELECT status, locked_at
    INTO v_status, v_locked_at
  FROM public.webhook_events
  WHERE provider = trim(p_provider)
    AND event_key = trim(p_event_key)
    AND event_type = trim(p_event_type)
  FOR UPDATE;

  IF v_status = 'processed' THEN
    RETURN QUERY SELECT false, 'processed'::TEXT;
    RETURN;
  END IF;

  -- Uma chamada em processamento fica reservada por dez minutos.
  IF v_status = 'processing' AND v_locked_at > now() - interval '10 minutes' THEN
    RETURN QUERY SELECT false, 'processing'::TEXT;
    RETURN;
  END IF;

  UPDATE public.webhook_events
  SET status = 'processing',
      attempts = attempts + 1,
      last_error = NULL,
      locked_at = now(),
      updated_at = now()
  WHERE provider = trim(p_provider)
    AND event_key = trim(p_event_key)
    AND event_type = trim(p_event_type);

  RETURN QUERY SELECT true, 'processing'::TEXT;
END;
$$;

CREATE OR REPLACE FUNCTION public.complete_webhook_event(
  p_provider TEXT,
  p_event_key TEXT,
  p_event_type TEXT
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.webhook_events
  SET status = 'processed',
      processed_at = now(),
      last_error = NULL,
      updated_at = now()
  WHERE provider = trim(p_provider)
    AND event_key = trim(p_event_key)
    AND event_type = trim(p_event_type);
END;
$$;

CREATE OR REPLACE FUNCTION public.fail_webhook_event(
  p_provider TEXT,
  p_event_key TEXT,
  p_event_type TEXT,
  p_error TEXT
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.webhook_events
  SET status = 'failed',
      last_error = left(coalesce(p_error, 'Erro nao informado'), 1000),
      updated_at = now()
  WHERE provider = trim(p_provider)
    AND event_key = trim(p_event_key)
    AND event_type = trim(p_event_type);
END;
$$;

REVOKE ALL ON FUNCTION public.claim_webhook_event(TEXT, TEXT, TEXT)
  FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.complete_webhook_event(TEXT, TEXT, TEXT)
  FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.fail_webhook_event(TEXT, TEXT, TEXT, TEXT)
  FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.claim_webhook_event(TEXT, TEXT, TEXT)
  TO service_role;
GRANT EXECUTE ON FUNCTION public.complete_webhook_event(TEXT, TEXT, TEXT)
  TO service_role;
GRANT EXECUTE ON FUNCTION public.fail_webhook_event(TEXT, TEXT, TEXT, TEXT)
  TO service_role;

-- Verificacao esperada: uma linha com table_name = webhook_events.
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name = 'webhook_events';
