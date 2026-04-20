import { createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { NewClientsChart } from "@/components/dashboard/NewClientsChart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JuroPro — Dashboard de Gestão de Empréstimos" },
      {
        name: "description",
        content:
          "JuroPro: plataforma profissional para gestão de empréstimos, contratos, clientes e vencimentos.",
      },
    ],
  }),
  component: Dashboard,
});

const kpis = [
  { label: "Vencimentos Hoje", value: "27", hint: "+12% vs. mês anterior" },
  { label: "Parcelas Atrasadas", value: "14", hint: "+3% vs. mês anterior" },
  { label: "Total de Clientes", value: "1.284", hint: "+8,4% vs. mês anterior" },
  { label: "Contratos Ativos", value: "892", hint: "+15% vs. mês anterior" },
];

function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <SidebarTrigger className="text-foreground" />
            <h2 className="text-sm font-medium text-muted-foreground">
              Dashboard
            </h2>
          </header>

          <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Olá, Gilvan 👋
              </h1>
              <p className="text-sm text-muted-foreground">
                Visão geral da operação — atualizado agora.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-lg border bg-card p-5 shadow-sm"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {k.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                    {k.value}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">{k.hint}</p>
                </div>
              ))}
            </div>

            <NewClientsChart />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
