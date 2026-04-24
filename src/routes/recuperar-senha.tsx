import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Wallet, Mail, KeyRound, Loader2, ArrowLeft, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useBusinessName, useBusinessLogo } from "@/hooks/use-business-info";
import { toast } from "sonner";

export const Route = createFileRoute("/recuperar-senha")({
  head: () => ({ meta: [{ title: "Recuperar senha — JuroPro" }] }),
  component: RecuperarSenhaPage,
});

const emailValido = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function RecuperarSenhaPage() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const { name: businessName, defaultName } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const { logo: businessLogo } = useBusinessLogo();
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    if (!email) {
      setErro("E-mail é obrigatório");
      return;
    }
    if (!emailValido(email)) {
      setErro("E-mail inválido");
      return;
    }
    setLoading(true);
    const { error } = await resetPassword(email.trim());
    setLoading(false);
    if (error) {
      setErro(error);
      return;
    }
    toast.success("Link de recuperação enviado!");
    setEnviado(true);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="rounded-2xl bg-card p-7 shadow-2xl ring-1 ring-border sm:p-9">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-success shadow-lg">
              {businessLogo ? (
                <img src={businessLogo} alt={businessLabel} className="h-full w-full object-cover" />
              ) : (
                <Wallet className="h-7 w-7 text-primary-foreground" />
              )}
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-foreground">{businessLabel}</h1>
          </div>

          {!enviado ? (
            <>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <KeyRound className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-bold text-foreground">Recuperar Senha</h2>
                <p className="text-sm text-muted-foreground">
                  Informe seu e-mail e enviaremos um link para redefinir sua senha
                </p>
              </div>

              {/* Step dots */}
              <div className="mb-5 flex justify-center gap-2">
                <span className="h-2 w-6 rounded-full bg-primary" />
                <span className="h-2 w-2 rounded-full bg-muted" />
                <span className="h-2 w-2 rounded-full bg-muted" />
              </div>

              <form onSubmit={enviar} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <Label htmlFor="rec-email">E-mail cadastrado</Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="rec-email"
                      type="email"
                      autoFocus
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErro("");
                      }}
                      className={`pl-9 ${erro ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {erro && <p className="text-xs font-medium text-destructive">{erro}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4" />
                      Enviar Link de Recuperação
                    </>
                  )}
                </Button>
                <Button asChild variant="outline" className="h-11 w-full">
                  <Link to="/login">
                    <ArrowLeft className="h-4 w-4" />
                    Voltar para Login
                  </Link>
                </Button>
              </form>
            </>
          ) : (
            <>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                  <MailCheck className="h-8 w-8" />
                </div>
                <h2 className="text-lg font-bold text-foreground">E-mail enviado!</h2>
                <p className="text-sm text-muted-foreground">Verifique sua caixa de entrada</p>
              </div>

              <div className="mb-5 flex justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted" />
                <span className="h-2 w-6 rounded-full bg-primary" />
                <span className="h-2 w-2 rounded-full bg-muted" />
              </div>

              <div className="mb-5 rounded-xl border border-success/30 bg-success/10 p-4 text-left">
                <p className="text-sm font-bold text-success">✅ Link enviado para:</p>
                <p className="mt-1 break-all text-sm font-semibold text-foreground">{email}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Se não encontrar na caixa de entrada, verifique a pasta de spam ou lixo eletrônico.
                  O link expira em <b>30 minutos</b>.
                </p>
              </div>

              <Button
                onClick={() => navigate({ to: "/login" })}
                variant="outline"
                className="h-11 w-full"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para Login
              </Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
