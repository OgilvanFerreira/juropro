import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  AlertOctagon,
  Users,
  FileCheck2,
  Bell,
  Search,
} from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { AreaChartCard } from "@/components/dashboard/AreaChartCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JuroPro — Dashboard de Gestão de Empréstimos" },
      {
        name: "description",
        content:
          "JuroPro: plataforma profissional para gestão de empréstimos, contratos, clientes e vencimentos.",
      },
      { property: "og:title", content: "JuroPro — Dashboard de Gestão de Empréstimos" },
      {
        property: "og:description",
        content:
          "Controle clientes, contratos e vencimentos com indicadores em tempo real.",
      },
    ],
  }),
  component: Dashboard,
});

const clientesData = [
  { month: "Mai", value: 32 },
  { month: "Jun", value: 41 },
  { month: "Jul", value: 38 },
  { month: "Ago", value: 55 },
  { month: "Set", value: 62 },
  { month: "Out", value: 58 },
  { month: "Nov", value: 71 },
  { month: "Dez", value: 84 },
  { month: "Jan", value: 79 },
  { month: "Fev", value: 92 },
  { month: "Mar", value: 105 },
  { month: "Abr", value: 118 },
];

const contratosData = [
  { month: "Mai", value: 48 },
  { month: "Jun", value: 52 },
  { month: "Jul", value: 47 },
  { month: "Ago", value: 63 },
  { month: "Set", value: 70 },
  { month: "Out", value: 68 },
  { month: "Nov", value: 81 },
  { month: "Dez", value: 96 },
  { month: "Jan", value: 88 },
  { month: "Fev", value: 102 },
  { month: "Mar", value: 117 },
  { month: "Abr", value: 134 },
];

const volumeData = [
  { month: "Mai", value: 184000 },
  { month: "Jun", value: 212000 },
  { month: "Jul", value: 198000 },
  { month: "Ago", value: 256000 },
  { month: "Set", value: 289000 },
  { month: "Out", value: 274000 },
  { month: "Nov", value: 332000 },
  { month: "Dez", value: 401000 },
  { month: "Jan", value: 372000 },
  { month: "Fev", value: 438000 },
  { month: "Mar", value: 502000 },
  { month: "Abr", value: 587000 },
];

const brl = (v: number) =>
  v >= 1000 ? `R$${(v / 1000).toFixed(0)}k` : `R$${v}`;

function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          {/* Topbar */}
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur md:px-6">
            <SidebarTrigger className="text-foreground" />
            <div className="hidden flex-1 md:block">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar clientes, contratos…"
                  className="h-9 rounded-lg border-border bg-secondary pl-9 text-sm"
                />
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative h-9 w-9 rounded-lg"
                aria-label="Notificações"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
              </Button>
              <Button className="hidden h-9 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex">
                Novo Contrato
              </Button>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Olá, Gilvan 👋
              </h1>
              <p className="text-sm text-muted-foreground">
                Visão geral da operação — atualizado agora.
              </p>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <KpiCard
                label="Vencimentos Hoje"
                value="27"
                delta="+12%"
                icon={AlertTriangle}
                tone="warning"
              />
              <KpiCard
                label="Parcelas Atrasadas"
                value="14"
                delta="+3%"
                icon={AlertOctagon}
                tone="destructive"
              />
              <KpiCard
                label="Total de Clientes"
                value="1.284"
                delta="+8,4%"
                icon={Users}
                tone="info"
              />
              <KpiCard
                label="Contratos Ativos"
                value="892"
                delta="+15%"
                icon={FileCheck2}
                tone="success"
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              <AreaChartCard
                title="Novos Clientes"
                description="Últimos 12 meses"
                data={clientesData}
                colorVar="--color-primary-glow"
                gradientId="grad-clientes"
              />
              <AreaChartCard
                title="Contratos Realizados"
                description="Volume mensal"
                data={contratosData}
                colorVar="--color-success"
                gradientId="grad-contratos"
              />
              <AreaChartCard
                title="Volume Financeiro"
                description="Total em contratos por mês"
                data={volumeData}
                colorVar="--color-primary"
                gradientId="grad-volume"
                valueFormatter={brl}
              />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
