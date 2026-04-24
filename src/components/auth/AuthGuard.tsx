import { useEffect } from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";

const PUBLIC_ROUTES = ["/login", "/recuperar-senha", "/reset-password"];

function isPublicPath(pathname: string) {
  return PUBLIC_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const publica = isPublicPath(pathname);

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

  // Rotas públicas: renderizam sempre (login, recuperar-senha…)
  if (publica) {
    return <>{children}</>;
  }

  // Aguardando hidratação da sessão: spinner curto.
  // CRUCIAL: enquanto loading, NÃO renderizamos children — isso impede
  // que loaders de rota disparem queries autenticadas antes do token
  // estar disponível (causa raiz do "Something went wrong").
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Sessão verificada e ausente: não renderiza nada; o useEffect já
  // disparou o redirect para /login.
  if (!user) {
    return null;
  }

  return <>{children}</>;
}
