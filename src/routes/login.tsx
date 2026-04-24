import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail, Lock, Eye, EyeOff, LogIn, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useBusinessName } from "@/hooks/use-business-info";
import { toast } from "sonner";
import juroproLogo from "@/assets/juropro-logo.png";

interface LoginSearch {
  redirect?: string;
}

/**
 * Aceita apenas paths internos (começando com "/" mas não "//" nem "/\\"),
 * impedindo open-redirect para domínios externos via ?redirect=.
 */
function sanitizeRedirect(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  if (!value.startsWith("/")) return undefined;
  if (value.startsWith("//") || value.startsWith("/\\")) return undefined;
  return value;
}

export const Route = createFileRoute("/login")({
  validateSearch: (s: Record<string, unknown>): LoginSearch => ({
    redirect: sanitizeRedirect(s.redirect),
  }),
  head: () => ({ meta: [{ title: "Entrar — JuroPro" }] }),
  component: LoginPage,
});

const emailValido = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function LoginPage() {
  const { signIn, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();
  const { name: businessName } = useBusinessName();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);
  const [erro, setErro] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errSenha, setErrSenha] = useState("");
  const [loading, setLoading] = useState(false);

  // Se já logado, redireciona (em useEffect para evitar setState no render)
  useEffect(() => {
    if (!authLoading && user) {
      navigate({ to: (redirect as never) ?? "/", replace: true });
    }
  }, [authLoading, user, redirect, navigate]);

  const validar = () => {
    let ok = true;
    setErrEmail("");
    setErrSenha("");
    if (!email) {
      setErrEmail("E-mail é obrigatório");
      ok = false;
    } else if (!emailValido(email)) {
      setErrEmail("E-mail inválido");
      ok = false;
    }
    if (!senha) {
      setErrSenha("Senha é obrigatória");
      ok = false;
    } else if (senha.length < 6) {
      setErrSenha("Mínimo 6 caracteres");
      ok = false;
    }
    return ok;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;
    setLoading(true);
    setErro("");
    const { error } = await signIn(email.trim(), senha);
    setLoading(false);
    if (error) {
      setErro(
        error.toLowerCase().includes("invalid")
          ? "E-mail ou senha incorretos."
          : error,
      );
      return;
    }
    toast.success("Login realizado com sucesso!");
    navigate({ to: "/bem-vindo" });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4">
      {/* círculos decorativos */}
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
          {/* Logo */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={juroproLogo}
                alt={businessName}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
              {businessName}
            </h1>
            <p className="text-xs text-muted-foreground">
              Gestão Profissional de Empréstimos
            </p>
          </div>

          <h2 className="text-center text-lg font-bold text-foreground">
            Bem-vindo de volta! 👋
          </h2>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Entre com suas credenciais para acessar
          </p>

          {erro && (
            <div className="mb-4 flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{erro}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="login-email">E-mail</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrEmail("");
                    setErro("");
                  }}
                  className={`pl-9 ${errEmail ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
              </div>
              {errEmail && <p className="text-xs font-medium text-destructive">{errEmail}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="login-senha">Senha</Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="login-senha"
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value);
                    setErrSenha("");
                    setErro("");
                  }}
                  className={`px-9 ${errSenha ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                >
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errSenha && <p className="text-xs font-medium text-destructive">{errSenha}</p>}
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/recuperar-senha"
                className="text-xs font-semibold text-primary underline-offset-2 hover:underline"
              >
                Esqueci minha senha
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg hover:from-success/90 hover:to-success"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4" />
                  Entrar no {businessName}
                </>
              )}
            </Button>
          </form>

          <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            <span>acesso seguro</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="rounded-lg bg-muted/50 px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground">
              🔐 Acesso restrito. Apenas usuários autorizados.
              <br />
              Dificuldades? Contate o administrador.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
