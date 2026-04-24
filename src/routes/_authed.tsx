import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { verifyAuthFromCookie } from "@/integrations/supabase/verify-auth.functions";

/**
 * Layout route SEM segmento de URL (`_authed`) que envolve TODAS as rotas
 * privadas do JuroPro.
 *
 * Cortina de Ferro:
 *   - `beforeLoad` roda no SERVIDOR durante SSR e no CLIENTE em navegações.
 *   - No servidor: lê o cookie de sessão Supabase, valida o JWT e, se inválido,
 *     dispara `throw redirect({ to: '/login' })`. O browser recebe HTTP 302
 *     direto — nenhum HTML protegido é enviado ao browser sem sessão válida.
 *   - No cliente: a mesma checagem roda em transições de rota como camada
 *     extra de defesa.
 *
 * Para proteger uma rota nova, basta criar `src/routes/_authed.{nome}.tsx`.
 */
export const Route = createFileRoute("/_authed")({
  beforeLoad: async ({ location }) => {
    const result = await verifyAuthFromCookie();
    if (!result.authenticated) {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }
    return { userId: result.userId };
  },
  component: AuthedLayout,
});

function AuthedLayout() {
  return <Outlet />;
}
