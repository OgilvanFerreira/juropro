import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Wallet, PartyPopper, LogOut, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useBusinessName, useBusinessLogo } from "@/hooks/use-business-info";
import { useProfile } from "@/hooks/use-profile";

export const Route = createFileRoute("/bem-vindo")({
  head: () => ({ meta: [{ title: "Bem-vindo — JuroPro" }] }),
  component: BemVindoPage,
});

function BemVindoPage() {
  const { user, signOut, loading } = useAuth();
  const { profile } = useProfile();
  const navigate = useNavigate();
  const { name: businessName, defaultName } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const { logo: businessLogo } = useBusinessLogo();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  const nome =
    profile?.nome ||
    user?.email?.split("@")[0]?.split(".").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") ||
    "Usuário";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        <div className="rounded-2xl bg-card p-7 text-center shadow-2xl ring-1 ring-border sm:p-9">
          <div className="mb-3 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-success shadow-lg">
              {businessLogo ? (
                <img src={businessLogo} alt={businessLabel} className="h-full w-full object-cover" />
              ) : (
                <Wallet className="h-7 w-7 text-primary-foreground" />
              )}
            </div>
          </div>
          <h1 className="mb-1 text-xl font-extrabold tracking-tight text-foreground">{businessLabel}</h1>
          <p className="mb-5 text-xs text-muted-foreground">Gestão Profissional de Empréstimos</p>

          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success to-success/80 shadow-xl shadow-success/30 animate-in zoom-in duration-500">
            <PartyPopper className="h-10 w-10 text-success-foreground" />
          </div>

          <h2 className="text-2xl font-bold text-foreground">Bem-vindo, {nome}!</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Login realizado com sucesso. Você está no {businessLabel}!
          </p>

          <Button
            onClick={() => navigate({ to: "/" })}
            className="mb-2 h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg"
          >
            Ir para o Dashboard
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={async () => {
              await signOut();
              navigate({ to: "/login" });
            }}
            className="h-11 w-full"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>
    </main>
  );
}
