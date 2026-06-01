import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";
import { useAdminName } from "@/hooks/use-admin-name";
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
import { NovoEmprestimoDialog } from "@/components/emprestimos/NovoEmprestimoDialog";
import { InstallAppButton } from "@/components/pwa/InstallAppButton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getDailyInspirationalPhrase } from "@/lib/inspirational-phrases";
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

export const Route = createFileRoute("/_authed/")({
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
  // Sem loader SSR: as queries só rodam no client após a sessão Supabase
  // estar hidratada (ver AuthGuard). Isto evita 401 durante SSR.
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
      to: "/vencimentos" as const,
      search: { status: "atrasado" },
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

const formatBRL = (v: number) => {
  if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `R$ ${(v / 1_000).toFixed(0)}k`;
  return `R$ ${v.toLocaleString("pt-BR")}`;
};

function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const { profile } = useProfile();
  const { name: adminName, defaultName } = useAdminName();
  const authReady = !authLoading && !!user;

  const displayName =
    profile?.nome ||
    (adminName && adminName !== defaultName ? adminName : null) ||
    user?.email?.split("@")[0] ||
    "Usuário";
  const firstName = displayName.split(" ")[0];
  const dailyPhrase = getDailyInspirationalPhrase(user?.id ?? displayName);

  const kpisQ = useQuery({
    queryKey: ["dashboard", "kpis"],
    queryFn: () => getDashboardKpis(),
    enabled: authReady,
  });
  const chartsQ = useQuery({
    queryKey: ["dashboard", "charts"],
    queryFn: () => getDashboardCharts(),
    staleTime: 60_000,
    enabled: authReady,
  });
  const [novoEmprestimoOpen, setNovoEmprestimoOpen] = useState(false);
  const [valuesHidden, setValuesHidden] = useState(false);

  // persistência local da preferência de privacidade
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("juropro:hide_values");
      if (saved === "1") setValuesHidden(true);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleValues = () => {
    setValuesHidden((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem("juropro:hide_values", next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  if (!authReady || kpisQ.isLoading || chartsQ.isLoading || !kpisQ.data || !chartsQ.data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const data = kpisQ.data;
  const charts = chartsQ.data;
  const kpis = buildKpis(data);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />

        <div className="flex flex-1 flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-foreground" />
              <h2 className="text-sm font-medium text-muted-foreground">
                Dashboard
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <InstallAppButton />
              <Button
                onClick={() => setNovoEmprestimoOpen(true)}
                className="bg-success text-success-foreground shadow-sm hover:bg-success/90"
              >
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
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  Olá, {firstName} 👋
                </h1>
                <p className="text-sm text-muted-foreground">
                  Visão geral da operação — atualizado agora.
                </p>
                <p className="max-w-2xl text-xs text-muted-foreground/80">
                  {dailyPhrase}
                </p>
              </div>
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleValues}
                      aria-pressed={valuesHidden}
                      aria-label={valuesHidden ? "Mostrar valores" : "Ocultar valores"}
                    >
                      {valuesHidden ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {valuesHidden ? "Mostrar valores" : "Ocultar valores"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {kpis.map((k) => (
                <KpiCard key={k.label} {...k} hidden={valuesHidden} />
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

            <AreaChartCard
              title="Recebimentos"
              subtitle="Total recebido por mês — últimos 12 meses"
              data={charts.recebimentos}
              color={EMERALD}
              colorGlow={EMERALD_GLOW}
              gradientId="recebimentosFill"
              formatValue={formatBRL}
              tooltipLabel="Recebido"
            />
          </main>
        </div>
      </div>
      <NovoEmprestimoDialog
        open={novoEmprestimoOpen}
        onOpenChange={setNovoEmprestimoOpen}
      />
    </SidebarProvider>
  );
}
