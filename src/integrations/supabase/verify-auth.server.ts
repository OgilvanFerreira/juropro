import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_AUTH_COOKIE } from "./client";

/**
 * Server function executada em `beforeLoad` da rota `_authed`.
 *
 * Lê o cookie da sessão Supabase, valida o JWT contra o servidor de auth
 * e retorna `{ authenticated: boolean }`. Se o cookie não existir ou o
 * token estiver expirado/inválido, devolve `false` — o `beforeLoad`
 * dispara `throw redirect({ to: '/login' })` ANTES de qualquer HTML
 * privado ser enviado ao browser.
 *
 * Importante: NÃO use `process.env` em escopo de módulo. Acesse apenas
 * dentro do handler para que não vaze pro bundle do client.
 */
export const verifyAuthFromCookie = createServerFn({ method: "GET" }).handler(
  async () => {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      // Sem config, fail-closed.
      return { authenticated: false } as const;
    }

    const raw = getCookie(SUPABASE_AUTH_COOKIE);
    if (!raw) return { authenticated: false } as const;

    let accessToken: string | undefined;
    try {
      // Cookie é o JSON da sessão (encoded URI no client.ts).
      const parsed = JSON.parse(decodeURIComponent(raw));
      accessToken = parsed?.access_token;
      // Checa expiração local primeiro (rápido, evita roundtrip).
      const expiresAt =
        typeof parsed?.expires_at === "number" ? parsed.expires_at : 0;
      if (expiresAt && expiresAt * 1000 < Date.now()) {
        return { authenticated: false } as const;
      }
    } catch {
      return { authenticated: false } as const;
    }

    if (!accessToken) return { authenticated: false } as const;

    // Valida o JWT no Supabase (assinatura + expiração + revogação).
    const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await supabase.auth.getClaims(accessToken);
    if (error || !data?.claims?.sub) {
      return { authenticated: false } as const;
    }

    return { authenticated: true, userId: data.claims.sub as string } as const;
  },
);
