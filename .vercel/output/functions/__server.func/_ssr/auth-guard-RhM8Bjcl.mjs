import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { c as createMiddleware } from "./createMiddleware-BvN2ghIY.mjs";
import { a as getRequest } from "./index.mjs";
const requireAuthForExternal = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      throw new Response("Configuração de autenticação ausente.", { status: 500 });
    }
    const request = getRequest();
    const authHeader = request?.headers?.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Response("Não autorizado.", { status: 401 });
    }
    const token = authHeader.replace("Bearer ", "").trim();
    if (!token) {
      throw new Response("Não autorizado.", { status: 401 });
    }
    const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false }
    });
    const { data, error } = await supabase.auth.getClaims(token);
    if (error || !data?.claims?.sub) {
      throw new Response("Sessão inválida.", { status: 401 });
    }
    return next({
      context: {
        userId: data.claims.sub
      }
    });
  }
);
export {
  requireAuthForExternal as r
};
