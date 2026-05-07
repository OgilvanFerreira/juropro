import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Wallet, Lock, Eye, EyeOff, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useBusinessName, useBusinessLogo } from "@/hooks/use-business-info";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Nova senha — JuroPro" }] }),
  component: ResetPasswordPage,
});

interface Forca {
  pct: number;
  label: string;
  cor: string;
  pts: number;
}

function avaliar(s: string): Forca {
  let pts = 0;
  if (s.length >= 8) pts++;
  if (/[A-Z]/.test(s)) pts++;
  if (/[0-9]/.test(s)) pts++;
  if (/[^A-Za-z0-9]/.test(s)) pts++;
  const map: Forca[] = [
    { pct: 0, cor: "bg-muted", label: "", pts: 0 },
    { pct: 25, cor: "bg-destructive", label: "Fraca", pts: 1 },
    { pct: 50, cor: "bg-warning", label: "Regular", pts: 2 },
    { pct: 75, cor: "bg-info", label: "Boa", pts: 3 },
    { pct: 100, cor: "bg-success", label: "Forte", pts: 4 },
  ];
  return map[pts];
}

function ResetPasswordPage() {
  const { updatePassword, signOut, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { name: businessName, defaultName } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const { logo: businessLogo } = useBusinessLogo();

  const [nova, setNova] = useState("");
  const [conf, setConf] = useState("");
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [errNova, setErrNova] = useState("");
  const [errConf, setErrConf] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [recoveryReady, setRecoveryReady] = useState(false);

  const forca = useMemo(() => avaliar(nova), [nova]);
  const senhasOk = nova && conf && nova === conf;

  // Lógica agressiva para capturar o token e evitar redirecionamento precoce
  useEffect(() => {
    if (typeof window === "undefined") return;
    let mounted = true;

    const checkAuth = async () => {
      // 1. Detecção imediata por URL (Hash ou Query)
      const hasToken =
        window.location.hash.includes("access_token=") ||
        window.location.search.includes("code=") ||
        window.location.hash.includes("type=recovery");

      if (hasToken) {
        if (mounted) setRecoveryReady(true);
      }

      // 2. Tenta recuperar sessão existente (caso o Supabase já tenha processado)
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session && mounted) {
        setRecoveryReady(true);
      }

      // 3. Listener para eventos futuros
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, session) => {
        if ((event === "PASSWORD_RECOVERY" || event === "SIGNED_IN" || session) && mounted) {
          setRecoveryReady(true);
        }
      });

      return () => {
        mounted = false;
        subscription.unsubscribe();
      };
    };

    checkAuth();
  }, []);

  // Redirecionamento de segurança (apenas se tivermos certeza que não é um link de recovery)
  useEffect(() => {
    if (authLoading || typeof window === "undefined") return;

    // Aumentamos o tempo para 5 segundos para dar tempo total ao processamento do Supabase
    const timer = setTimeout(() => {
      const isRecoveryURL =
        window.location.hash.includes("access_token=") ||
        window.location.search.includes("code=") ||
        window.location.hash.includes("type=recovery");

      if (!user && !recoveryReady && !isRecoveryURL) {
        navigate({ to: "/login", replace: true });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [authLoading, user, recoveryReady, navigate]);

  const validar = () => {
    let bom = true;
    setErrNova("");
    setErrConf("");
    if (!nova) {
      setErrNova("Nova senha é obrigatória");
      bom = false;
    } else if (nova.length < 8) {
      setErrNova("Mínimo 8 caracteres");
      bom = false;
    } else if (forca.pts < 2) {
      setErrNova("Senha muito fraca — use letras, números e símbolos");
      bom = false;
    }
    if (!conf) {
      setErrConf("Confirme a nova senha");
      bom = false;
    } else if (nova !== conf) {
      setErrConf("Senhas não coincidem");
      bom = false;
    }
    return bom;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;
    setLoading(true);
    const { error } = await updatePassword(nova);
    setLoading(false);
    if (error) {
      toast.error(error);
      return;
    }
    await signOut();
    setNova("");
    setConf("");
    setOk(true);
    toast.success("Senha redefinida com sucesso. Entre com a nova senha.");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="rounded-2xl bg-card p-7 shadow-2xl ring-1 ring-border sm:p-9">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-success shadow-lg">
              {businessLogo ? (
                <img
                  src={businessLogo}
                  alt={businessLabel}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Wallet className="h-7 w-7 text-primary-foreground" />
              )}
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
              {businessLabel}
            </h1>
          </div>

          {!ok ? (
            <>
              <div className="mb-5 text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-bold text-foreground">Nova Senha</h2>
                <p className="text-sm text-muted-foreground">
                  Escolha uma senha forte para proteger sua conta
                </p>
              </div>

              <div className="mb-5 flex justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted" />
                <span className="h-2 w-2 rounded-full bg-muted" />
                <span className="h-2 w-6 rounded-full bg-primary" />
              </div>

              <form onSubmit={submit} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <Label htmlFor="nova">Nova senha</Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="nova"
                      type={showA ? "text" : "password"}
                      placeholder="Mínimo 8 caracteres"
                      value={nova}
                      onChange={(e) => {
                        setNova(e.target.value);
                        setErrNova("");
                      }}
                      className={`px-9 ${errNova ? "border-destructive" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowA((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
                    >
                      {showA ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {nova && (
                    <div className="space-y-1">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full transition-all ${forca.cor}`}
                          style={{ width: `${forca.pct}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold">{forca.label}</span>
                        <span className="text-muted-foreground">
                          {/[A-Z]/.test(nova) ? "✓" : "✗"} Maiúscula{"  "}
                          {/[0-9]/.test(nova) ? "✓" : "✗"} Número{"  "}
                          {/[^A-Za-z0-9]/.test(nova) ? "✓" : "✗"} Símbolo
                        </span>
                      </div>
                    </div>
                  )}
                  {errNova && <p className="text-xs font-medium text-destructive">{errNova}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="conf">Confirmar nova senha</Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="conf"
                      type={showB ? "text" : "password"}
                      placeholder="Repita a nova senha"
                      value={conf}
                      onChange={(e) => {
                        setConf(e.target.value);
                        setErrConf("");
                      }}
                      className={`px-9 ${errConf ? "border-destructive" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowB((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
                    >
                      {showB ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {conf && !errConf && (
                    <p
                      className={`text-xs font-semibold ${
                        senhasOk ? "text-success" : "text-destructive"
                      }`}
                    >
                      {senhasOk ? "✅ Senhas coincidem" : "❌ Senhas não coincidem"}
                    </p>
                  )}
                  {errConf && <p className="text-xs font-medium text-destructive">{errConf}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={loading || !senhasOk}
                  className="h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Redefinindo...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-4 w-4" />
                      Redefinir Senha
                    </>
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Senha redefinida!</h2>
              <p className="mb-5 text-sm text-muted-foreground">
                Sua senha foi alterada com sucesso. Agora entre com a nova senha para confirmar o
                acesso.
              </p>
              <Button
                onClick={() => navigate({ to: "/login", replace: true })}
                className="h-11 w-full"
              >
                Entrar com a nova senha
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
