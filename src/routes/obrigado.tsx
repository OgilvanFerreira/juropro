import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  LogIn,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import juroproLogo from "@/assets/juropro-logo.png";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Bem-vindo ao JuroPro" },
      {
        name: "description",
        content:
          "Compra aprovada. Bem-vindo ao JuroPro, sua plataforma de gestão de empréstimos.",
      },
    ],
  }),
  component: ObrigadoPage,
});

const nextSteps = [
  {
    icon: LogIn,
    title: "Acesse sua conta",
    description: "Entre no JuroPro usando o e-mail cadastrado na compra.",
  },
  {
    icon: WalletCards,
    title: "Organize sua carteira",
    description: "Cadastre clientes, contratos, parcelas e vencimentos em poucos minutos.",
  },
  {
    icon: ShieldCheck,
    title: "Conte com suporte",
    description: "Se precisar de ajuda no primeiro acesso, nossa equipe pode orientar você.",
  },
];

function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#071927] text-white">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_32%),linear-gradient(135deg,#071927_0%,#0d2638_50%,#071927_100%)]" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <img
                src={juroproLogo}
                alt="JuroPro"
                className="h-16 w-16 rounded-2xl bg-white p-2 shadow-xl"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Compra aprovada
                </p>
                <p className="text-xl font-bold">
                  Juro<span className="text-emerald-400">Pro</span>
                </p>
              </div>
            </div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              Pagamento confirmado com sucesso
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Bem-vindo ao JuroPro.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Sua jornada para organizar clientes, contratos, vencimentos e relatórios financeiros
              começa agora. Preparamos o ambiente para você acessar a plataforma com segurança e
              clareza.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-emerald-500 text-white hover:bg-emerald-400">
                <Link to="/login">
                  Acessar minha conta
                  <LogIn className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href="https://wa.me/5573981444091"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com suporte
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-xl border border-white/10 bg-[#0b2234] p-5">
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Próximos passos</h2>
                  <p className="text-sm text-slate-400">Comece pelo essencial.</p>
                </div>
              </div>

              <div className="space-y-4">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4 rounded-xl bg-white/[0.04] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                          Passo {index + 1}
                        </p>
                        <h3 className="mt-1 font-bold">{step.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-emerald-300/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                Dica: se o acesso ainda não estiver liberado no momento da compra, fale com o suporte
                informando o e-mail usado no pagamento.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
