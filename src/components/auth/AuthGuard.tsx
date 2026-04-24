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
        search: { redirect: pathname },
      });
    } else if (user && pathname === "/login") {
      navigate({ to: "/" });
    }
  }, [user, loading, publica, pathname, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Bloqueia render de conteúdo protegido enquanto não há usuário
  if (!user && !publica) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return <>{children}</>;
}
