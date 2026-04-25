import { createFileRoute } from "@tanstack/react-router";
import {
  Headset,
  Mail,
  BookOpen,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authed/suporte")({
  head: () => ({
    meta: [{ title: "Suporte — JuroPro" }],
  }),
  component: SuportePage,
});

const APP_VERSION = "1.0.0";
const WHATSAPP_URL =
  "https://wa.me/5573981444091?text=" +
  encodeURIComponent(
    "Olá, sou usuário do JuroPro e preciso de suporte técnico.",
  );

function SuportePage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col min-w-0">
          <header className="flex h-14 items-center gap-3 border-b bg-card px-4">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <Headset className="h-5 w-5 text-success" />
              <h1 className="text-base font-semibold sm:text-lg">Suporte</h1>
            </div>
          </header>

          <main className="flex-1 p-4 md:p-8">
            <div className="mx-auto w-full max-w-4xl space-y-6">
              {/* Card principal: WhatsApp */}
              <section className="rounded-2xl border bg-card p-6 text-center shadow-sm md:p-10">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success md:h-20 md:w-20">
                  <Headset className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Suporte Técnico
                </h2>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  Estamos aqui para ajudar você. Fale conosco pelo WhatsApp e
                  receba atendimento rápido.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="mt-6 h-14 gap-3 px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Falar no WhatsApp
                  </a>
                </Button>

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground md:text-sm">
                  <Clock className="h-4 w-4" />
                  <span>
                    Horário de atendimento: Segunda a Sexta, das 08h às 18h
                  </span>
                </div>
              </section>

              {/* Cards: e-mail e documentação */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <a
                  href="mailto:suporte@juropro.com.br"
                  className="group rounded-xl border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <p className="mt-0.5 truncate text-sm text-muted-foreground">
                        suporte@juropro.com.br
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Resposta em até 24h úteis
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://docs.juropro.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-info/10 text-info group-hover:bg-info group-hover:text-info-foreground transition-colors">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">
                        Documentação
                      </h3>
                      <p className="mt-0.5 truncate text-sm text-muted-foreground">
                        docs.juropro.com.br
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Guias, tutoriais e perguntas frequentes
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card inferior: versão e status */}
              <section
                className="rounded-2xl border p-5 text-white shadow-md md:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a5f 0%, #16243d 100%)",
                }}
              >
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      Versão do aplicativo
                    </p>
                    <p className="mt-1 text-xl font-bold">JuroPro v{APP_VERSION}</p>
                    <p className="mt-1 text-xs text-white/60">
                      Gestão profissional de empréstimos
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      Sistema Online
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
