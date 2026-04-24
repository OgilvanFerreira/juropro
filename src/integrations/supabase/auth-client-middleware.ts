import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "./client";

/**
 * Middleware GLOBAL aplicado a TODA server function (lado client).
 *
 * Lê o access_token da sessão Supabase no browser e injeta como
 * `Authorization: Bearer <token>` no request HTTP que vai pro servidor.
 *
 * Sem isto, os middlewares server-side (`requireAuthForExternal`,
 * `requireSupabaseAuth`) nunca recebem o token e devolvem 401, o que
 * quebra loaders/queries e dispara "Something went wrong".
 *
 * Durante SSR não há `window`/localStorage — apenas pula injeção
 * (a server function pode então recusar com 401, o que é o esperado).
 */
export const attachSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    if (typeof window === "undefined") {
      return next();
    }
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (token) {
        return next({
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    } catch {
      // ignora — segue sem header
    }
    return next();
  },
);
