import { createStart } from "@tanstack/react-start";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-client-middleware";

/**
 * Registra middlewares globais para TODAS as server functions.
 *
 * `attachSupabaseAuth` injeta o token de sessão do usuário em cada
 * chamada client → server, garantindo que os middlewares de auth
 * server-side (requireAuthForExternal / requireSupabaseAuth) recebam
 * o Bearer token corretamente.
 */
export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
}));
