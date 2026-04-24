import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Layout route SEM segmento de URL (`_authed`) que envolve TODAS as rotas
 * privadas do JuroPro.
 *
 * A proteção de rota é feita no CLIENTE pelo `<AuthGuard>` em `__root.tsx`,
 * que reage ao `onAuthStateChange` do Supabase e redireciona para `/login`
 * quando não há sessão. Como o Supabase armazena o token em localStorage
 * (não em cookie httpOnly), uma checagem `beforeLoad` no servidor não tem
 * acesso ao token e não consegue proteger SSR — confiar nela criava um
 * loop de re-validação a cada navegação client-side.
 */
export const Route = createFileRoute("/_authed")({
  component: AuthedLayout,
});

function AuthedLayout() {
  return <Outlet />;
}
