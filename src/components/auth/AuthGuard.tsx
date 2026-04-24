import { useEffect } from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "@/components/ui/skeleton";

const PUBLIC_ROUTES = ["/login", "/recuperar-senha", "/reset-password"];

function isPublicPath(pathname: string) {
  return PUBLIC_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

/**
 * Skeleton ultra-leve com a mesma estrutura visual do app (sidebar + header
 * + conteúdo). Mostrado por milissegundos enquanto a sessão é validada,
 * dando sensação de carregamento instantâneo em vez de tela em branco/spinner.
 */
function AppShellSkeleton() {
  return (
    <div className="flex min-h-screen w-full bg-secondary">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r bg-background p-4 md:block">
        <Skeleton className="mb-6 h-10 w-32" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-full" />
          ))}
        </div>
      </aside>
      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-background/90 px-6 backdrop-blur">
          <Skeleton className="h-5 w-24" />
          <div className="flex gap-2">
            <Skeleton className="h-9 w-36" />
            <Skeleton className="h-9 w-32" />
          </div>
        </header>
        <main className="flex-1 space-y-6 p-6">
          <Skeleton className="h-8 w-64" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full" />
            ))}
          </div>
          <Skeleton className="h-72 w-full" />
        </main>
      </div>
    </div>
  );
}

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading, hasPersistedSession } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const publica = isPublicPath(pathname);

  // Redirecionamento ATÔMICO: dispara assim que confirmamos que NÃO há sessão.
  useEffect(() => {
    if (loading) return;
    if (!user && !publica) {
      navigate({
        to: "/login",
        search: { redirect: pathname } as never,
        replace: true,
      });
    } else if (user && pathname === "/login") {
      navigate({ to: "/", replace: true });
    }
  }, [user, loading, publica, pathname, navigate]);

  // Rotas públicas: sempre renderizam (login, recuperar-senha, etc.)
  if (publica) {
    return <>{children}</>;
  }

  // Rota privada + ainda validando sessão:
  // - Se há token persistido → render otimista (children) para evitar flash.
  //   O AuthProvider já inicia loading=false neste caso, então este branch
  //   raramente é atingido — fica como segurança extra.
  // - Sem token persistido → skeleton no lugar de spinner.
  if (loading) {
    if (hasPersistedSession) {
      return <>{children}</>;
    }
    return <AppShellSkeleton />;
  }

  // Sessão confirmada como ausente: NUNCA renderiza children. O useEffect
  // já está disparando o redirect; mostramos skeleton durante a transição
  // para evitar flash de tela vazia.
  if (!user) {
    return <AppShellSkeleton />;
  }

  return <>{children}</>;
}
