import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon, Save, Check } from "lucide-react";
import { toast } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAdminName } from "@/hooks/use-admin-name";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [{ title: "Configurações — JuroPro" }],
  }),
  component: ConfiguracoesPage,
});

function ConfiguracoesPage() {
  const { name, setName, defaultName } = useAdminName();
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setDraft(name === defaultName ? "" : name);
  }, [name, defaultName]);

  const handleSave = () => {
    setName(draft);
    toast.success("Nome do administrador atualizado!");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <SidebarTrigger className="text-foreground" />
            <div className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-medium text-muted-foreground">Configurações</h2>
            </div>
          </header>

          <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Configurações
              </h1>
              <p className="text-sm text-muted-foreground">
                Personalize as preferências da sua operação.
              </p>
            </div>

            <section className="max-w-2xl rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="mb-1 text-base font-semibold text-foreground">
                Identidade do Administrador
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Esse nome será usado como assinatura nas mensagens automáticas
                de cobrança enviadas via WhatsApp.
              </p>

              <div className="space-y-2">
                <Label htmlFor="admin-name">Nome do administrador</Label>
                <Input
                  id="admin-name"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={defaultName}
                  maxLength={60}
                />
                <p className="text-xs text-muted-foreground">
                  Atual:{" "}
                  <span className="font-medium text-foreground">{name}</span>
                  {name === defaultName && " (padrão)"}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar
                </Button>
                {name !== defaultName && (
                  <span className="inline-flex items-center gap-1 text-xs text-success">
                    <Check className="h-3.5 w-3.5" />
                    Personalizado
                  </span>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
