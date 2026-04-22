import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  CalendarClock,
  AlertTriangle,
  Users,
  FileText,
  Plus,
  UserPlus,
} from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { AreaChartCard } from "@/components/dashboard/AreaChartCard";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Button } from "@/components/ui/button";
import {
  getDashboardKpis,
  getDashboardCharts,
} from "@/integrations/external-supabase/dashboard.functions";

type DashboardKpis = {
  totalClientes: number;
  contratosAtivos: number;
  parcelasAtrasadas: number;
  vencimentosHoje: number;
};

const dashboardKpisQuery = () =>
  queryOptions({
    queryKey: ["dashboard", "kpis"],
    queryFn: () => getDashboardKpis(),
  });

const dashboardChartsQuery = () =>
  queryOptions({
    queryKey: ["dashboard", "charts"],
    queryFn: () => getDashboardCharts(),
    staleTime: 60_000,
  });

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
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(dashboardKpisQuery());
    queryClient.ensureQueryData(dashboardChartsQuery());
  },
  component: Dashboard,
});

const formatNumber = (n: number) =>
  new Intl.NumberFormat("pt-BR").format(n);

function buildKpis(data: DashboardKpis) {
  return [
    {
      label: "Vencimentos Hoje",
      value: formatNumber(data.vencimentosHoje),
      hint: "Parcelas com vencimento hoje",
      icon: CalendarClock,
      tone: "warning" as const,
      empty: data.vencimentosHoje === 0,
      to: "/vencimentos" as const,
    },
    {
      label: "Parcelas Atrasadas",
      value: formatNumber(data.parcelasAtrasadas),
      hint: "Pendentes vencidas + status atrasado",
      icon: AlertTriangle,
      tone: "destructive" as const,
      empty: data.parcelasAtrasadas === 0,
      to: "/relatorios" as const,
    },
    {
      label: "Total de Clientes",
      value: formatNumber(data.totalClientes),
      hint: "Carteira ativa",
      icon: Users,
      tone: "info" as const,
      empty: data.totalClientes === 0,
      to: "/clientes" as const,
    },
    {
      label: "Contratos Ativos",
      value: formatNumber(data.contratosAtivos),
      hint: "Empréstimos com status ativo",
      icon: FileText,
      tone: "success" as const,
      empty: data.contratosAtivos === 0,
      to: "/contratos" as const,
    },
  ];
}

const EMERALD = "oklch(0.62 0.15 160)";
const EMERALD_GLOW = "oklch(0.7 0.16 160)";
const NAVY = "oklch(0.32 0.08 255)";
const NAVY_GLOW = "oklch(0.5 0.14 255)";

const formatBRL = (v: number) =>
  v >= 1000 ? `R$ ${(v / 1000).toFixed(0)}k` : `R$ ${v}`;

function Dashboard() {
  const { data } = useSuspenseQuery(dashboardKpisQuery());
  const { data: charts } = useSuspenseQuery(dashboardChartsQuery());
  const kpis = buildKpis(data);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-foreground" />
              <h2 className="text-sm font-medium text-muted-foreground">
                Dashboard
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Button className="bg-success text-success-foreground shadow-sm hover:bg-success/90">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Novo Empréstimo</span>
              </Button>
              <Button asChild className="bg-success text-success-foreground shadow-sm hover:bg-success/90">
                <Link to="/clientes" search={{ novo: true }}>
                  <UserPlus className="h-4 w-4" />
                  <span className="hidden sm:inline">Novo Cliente</span>
                </Link>
              </Button>
            </div>
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
                <KpiCard key={k.label} {...k} />
              ))}
            </div>

            <AreaChartCard
              title="Evolução de Novos Clientes"
              subtitle="Últimos 12 meses — total por mês"
              data={charts.novosClientes}
              color={EMERALD}
              colorGlow={EMERALD_GLOW}
              gradientId="emeraldFill"
              tooltipLabel="Novos clientes"
            />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <AreaChartCard
                title="Número de Contratos"
                subtitle="Contratos firmados por mês"
                data={charts.contratos}
                color={NAVY}
                colorGlow={NAVY_GLOW}
                gradientId="navyFill"
                tooltipLabel="Contratos"
              />
              <AreaChartCard
                title="Volume Financeiro (R$)"
                subtitle="Valor total emprestado por mês"
                data={charts.volume}
                color={EMERALD}
                colorGlow={EMERALD_GLOW}
                gradientId="volumeFill"
                formatValue={formatBRL}
                tooltipLabel="Volume"
              />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
