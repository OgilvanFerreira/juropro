import { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
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
import { getDashboardKpis } from "@/integrations/external-supabase/dashboard.functions";

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
    },
    {
      label: "Parcelas Atrasadas",
      value: formatNumber(data.parcelasAtrasadas),
      hint: "Pendentes vencidas + status atrasado",
      icon: AlertTriangle,
      tone: "destructive" as const,
      empty: data.parcelasAtrasadas === 0,
    },
    {
      label: "Total de Clientes",
      value: formatNumber(data.totalClientes),
      hint: "Carteira ativa",
      icon: Users,
      tone: "info" as const,
      empty: data.totalClientes === 0,
    },
    {
      label: "Contratos Ativos",
      value: formatNumber(data.contratosAtivos),
      hint: "Empréstimos com status ativo",
      icon: FileText,
      tone: "success" as const,
      empty: data.contratosAtivos === 0,
    },
  ];
}

const newClientsData = [
  { month: "Mai", value: 42 },
  { month: "Jun", value: 58 },
  { month: "Jul", value: 71 },
  { month: "Ago", value: 65 },
  { month: "Set", value: 89 },
  { month: "Out", value: 102 },
  { month: "Nov", value: 118 },
  { month: "Dez", value: 134 },
  { month: "Jan", value: 151 },
  { month: "Fev", value: 168 },
  { month: "Mar", value: 192 },
  { month: "Abr", value: 217 },
];

const contractsData = [
  { month: "Mai", value: 28 },
  { month: "Jun", value: 41 },
  { month: "Jul", value: 53 },
  { month: "Ago", value: 47 },
  { month: "Set", value: 68 },
  { month: "Out", value: 82 },
  { month: "Nov", value: 95 },
  { month: "Dez", value: 108 },
  { month: "Jan", value: 121 },
  { month: "Fev", value: 137 },
  { month: "Mar", value: 154 },
  { month: "Abr", value: 178 },
];

const volumeData = [
  { month: "Mai", value: 145000 },
  { month: "Jun", value: 198000 },
  { month: "Jul", value: 252000 },
  { month: "Ago", value: 231000 },
  { month: "Set", value: 318000 },
  { month: "Out", value: 402000 },
  { month: "Nov", value: 478000 },
  { month: "Dez", value: 542000 },
  { month: "Jan", value: 615000 },
  { month: "Fev", value: 702000 },
  { month: "Mar", value: 824000 },
  { month: "Abr", value: 968000 },
];

const EMERALD = "oklch(0.62 0.15 160)";
const EMERALD_GLOW = "oklch(0.7 0.16 160)";
const NAVY = "oklch(0.32 0.08 255)";
const NAVY_GLOW = "oklch(0.5 0.14 255)";

const formatBRL = (v: number) =>
  v >= 1000 ? `R$ ${(v / 1000).toFixed(0)}k` : `R$ ${v}`;

function Dashboard() {
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
              <Button className="bg-success text-success-foreground shadow-sm hover:bg-success/90">
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Novo Cliente</span>
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

            <Suspense fallback={<KpiSkeleton />}>
              <KpiGrid />
            </Suspense>

            <AreaChartCard
              title="Evolução de Novos Clientes"
              subtitle="Últimos 12 meses — total acumulado por mês"
              data={newClientsData}
              color={EMERALD}
              colorGlow={EMERALD_GLOW}
              gradientId="emeraldFill"
              tooltipLabel="Novos clientes"
            />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <AreaChartCard
                title="Número de Contratos"
                subtitle="Contratos firmados por mês"
                data={contractsData}
                color={NAVY}
                colorGlow={NAVY_GLOW}
                gradientId="navyFill"
                tooltipLabel="Contratos"
              />
              <AreaChartCard
                title="Volume Financeiro (R$)"
                subtitle="Valor total emprestado por mês"
                data={volumeData}
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

function KpiGrid() {
  const { data } = useSuspenseQuery(dashboardKpisQuery());
  const kpis = buildKpis(data);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </div>
  );
}

function KpiSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-[112px] animate-pulse rounded-lg border bg-card shadow-sm" />
      ))}
    </div>
  );
}
