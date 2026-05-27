import { type ReactNode, useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Search,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  Loader2,
  Download,
  FileText,
  TrendingUp,
  AlertCircle,
  Receipt,
  CalendarDays,
  Wallet,
  Check,
  ChevronsUpDown,
  CheckCircle2,
  Hourglass,
  PieChart,
  Coins,
  BarChart3,
  ClipboardList,
  Eye,
} from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { TablePagination, type PageSize } from "@/components/ui/table-pagination";
import { listEmprestimos } from "@/integrations/external-supabase/emprestimos.functions";
import {
  listParcelas,
  type ParcelaListItem,
} from "@/integrations/external-supabase/parcelas.functions";
import { listClientes } from "@/integrations/external-supabase/clientes.functions";
import { ContratoPdfDialog } from "@/components/relatorios/ContratoPdfDialog";
import { exportToCsv } from "@/lib/csv";
import { useAdminName } from "@/hooks/use-admin-name";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

type RelatoriosSearch = {
  tab?: "financeiro" | "contratos" | "inadimplencia";
  contrato?: string;
};

export const Route = createFileRoute("/_authed/relatorios")({
  head: () => ({
    meta: [{ title: "Relatorios - JuroPro" }],
  }),
  validateSearch: (search: Record<string, unknown>): RelatoriosSearch => {
    const out: RelatoriosSearch = {};
    if (
      search.tab === "financeiro" ||
      search.tab === "contratos" ||
      search.tab === "inadimplencia"
    ) {
      out.tab = search.tab;
    }
    if (typeof search.contrato === "string" && search.contrato.trim()) {
      out.contrato = search.contrato.trim();
    }
    return out;
  },
  component: RelatoriosPage,
});

function ActionTooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="top">{label}</TooltipContent>
    </Tooltip>
  );
}
const fmtBRL = (v: number) =>
  Number(v || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const fmtDate = (iso: string | null) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};

const todayIso = () => new Date().toISOString().slice(0, 10);

const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function RelatoriosPage() {
  const searchParams = Route.useSearch();
  const [tab, setTab] = useState<"financeiro" | "contratos" | "inadimplencia">(
    searchParams.tab ?? "financeiro",
  );

  useEffect(() => {
    if (searchParams.tab) setTab(searchParams.tab);
  }, [searchParams.tab]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur">
            <SidebarTrigger />
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success shrink-0">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base font-semibold truncate">Relatórios e Documentos</h1>
                <p className="text-[11px] text-muted-foreground truncate">
                  Análises financeiras e geração de contratos
                </p>
              </div>
            </div>
          </header>

          <main className="flex-1 p-3 sm:p-6 space-y-4 min-w-0 overflow-x-hidden">
            <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="financeiro" className="text-xs sm:text-sm">
                  <TrendingUp className="h-4 w-4 mr-1 sm:mr-1.5" />
                  Financeiro
                </TabsTrigger>
                <TabsTrigger value="contratos" className="text-xs sm:text-sm">
                  <FileText className="h-4 w-4 mr-1 sm:mr-1.5" />
                  Contratos
                </TabsTrigger>
                <TabsTrigger value="inadimplencia" className="text-xs sm:text-sm">
                  <AlertCircle className="h-4 w-4 mr-1 sm:mr-1.5" />
                  Inadimplência
                </TabsTrigger>
              </TabsList>

              <TabsContent value="financeiro" className="mt-4">
                <FinanceiroTab />
              </TabsContent>
              <TabsContent value="contratos" className="mt-4">
                <ContratosTab />
              </TabsContent>
              <TabsContent value="inadimplencia" className="mt-4">
                <InadimplenciaTab />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

// ─────────────────────────────────────────────────────────────
// KPI Card
// ─────────────────────────────────────────────────────────────
function KpiBox({
  label,
  value,
  icon,
  tone,
  sub,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  tone: "primary" | "success" | "info" | "warning" | "destructive";
  sub?: string;
}) {
  const toneMap: Record<string, string> = {
    primary: "border-t-primary",
    success: "border-t-success",
    info: "border-t-info",
    warning: "border-t-warning",
    destructive: "border-t-destructive",
  };
  const iconToneMap: Record<string, string> = {
    primary: "text-primary",
    success: "text-success",
    info: "text-info",
    warning: "text-warning",
    destructive: "text-destructive",
  };
  return (
    <div className={cn("rounded-xl border border-t-4 bg-card p-3 sm:p-4 shadow-sm", toneMap[tone])}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-muted-foreground leading-tight">
          {label}
        </p>
        <span className={cn("shrink-0", iconToneMap[tone])}>{icon}</span>
      </div>
      <p className="mt-1.5 text-lg sm:text-xl font-bold text-foreground truncate">{value}</p>
      {sub ? (
        <p className="text-[10px] sm:text-[11px] text-muted-foreground truncate">{sub}</p>
      ) : null}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sort header helper
// ─────────────────────────────────────────────────────────────
function SortHeader<K extends string>({
  label,
  col,
  current,
  dir,
  onClick,
  className,
}: {
  label: string;
  col: K;
  current: K | null;
  dir: "asc" | "desc";
  onClick: (col: K) => void;
  className?: string;
}) {
  const active = current === col;
  return (
    <th
      className={cn(
        "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors whitespace-nowrap",
        active && "text-primary",
        className,
      )}
      onClick={() => onClick(col)}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        {active ? (
          dir === "asc" ? (
            <ArrowUp className="h-3 w-3" />
          ) : (
            <ArrowDown className="h-3 w-3" />
          )
        ) : (
          <ArrowUpDown className="h-3 w-3 opacity-40" />
        )}
      </span>
    </th>
  );
}

// ─────────────────────────────────────────────────────────────
// Cliente combobox
// ─────────────────────────────────────────────────────────────
function ClienteFilter({
  clientes,
  value,
  onChange,
}: {
  clientes: { id: string | number; nome: string | null }[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = clientes.find((c) => String(c.id) === value);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="h-9 w-full sm:w-[220px] justify-between font-normal"
        >
          <span className="truncate">
            {value === "todos" ? "Todos os clientes" : (selected?.nome ?? "Selecionar...")}
          </span>
          <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[260px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Buscar cliente..." />
          <CommandList>
            <CommandEmpty>Nenhum cliente encontrado.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="todos"
                onSelect={() => {
                  onChange("todos");
                  setOpen(false);
                }}
              >
                <Check
                  className={cn("h-4 w-4 mr-2", value === "todos" ? "opacity-100" : "opacity-0")}
                />
                Todos os clientes
              </CommandItem>
              {clientes.map((c) => (
                <CommandItem
                  key={String(c.id)}
                  value={c.nome ?? String(c.id)}
                  onSelect={() => {
                    onChange(String(c.id));
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "h-4 w-4 mr-2",
                      value === String(c.id) ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {c.nome ?? "—"}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// ============================================================
// TAB FINANCEIRO
// ============================================================
type FinSortKey = "cliente" | "contrato" | "vencimento" | "valor" | "valorPago" | "status";

function FinanceiroTab() {
  const [dataIni, setDataIni] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState<PageSize>(5);
  const [sortKey, setSortKey] = useState<FinSortKey | null>("vencimento");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const empQ = useQuery({
    queryKey: ["emprestimos"],
    queryFn: () => listEmprestimos(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });
  const emprestimos = useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = useMemo(() => parQ.data?.data ?? [], [parQ.data]);

  const parcelasPeriodo = useMemo(() => {
    return parcelas.filter((p) => {
      if (!p.data_vencimento) return false;
      if (dataIni && p.data_vencimento < dataIni) return false;
      if (dataFim && p.data_vencimento > dataFim) return false;
      return true;
    });
  }, [parcelas, dataIni, dataFim]);

  // KPIs
  const kpis = useMemo(() => {
    const totalPrevisto = parcelasPeriodo.reduce((s, p) => s + p.valor_parcela, 0);
    const isPaga = (p: ParcelaListItem) => p.status === "pago" || p.status === "paga";
    const totalRealizado = parcelasPeriodo
      .filter(isPaga)
      .reduce((s, p) => s + (p.valor_pago ?? p.valor_parcela), 0);
    const emAberto = parcelasPeriodo
      .filter((p) => !isPaga(p))
      .reduce((s, p) => s + p.valor_parcela, 0);
    const taxaRealizacao =
      totalPrevisto > 0 ? Math.round((totalRealizado / totalPrevisto) * 100) : 0;
    return { totalPrevisto, totalRealizado, emAberto, taxaRealizacao };
  }, [parcelasPeriodo]);

  // Gráfico mensal (últimos 6 meses): previsto vs realizado
  const dadosMensais = useMemo(() => {
    const now = new Date();
    const buckets: { key: string; label: string; previsto: number; realizado: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const yy = String(d.getFullYear()).slice(-2);
      buckets.push({
        key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
        label: `${MESES[d.getMonth()]}/${yy}`,
        previsto: 0,
        realizado: 0,
      });
    }
    parcelasPeriodo.forEach((p) => {
      if (!p.data_vencimento) return;
      const key = p.data_vencimento.slice(0, 7);
      const b = buckets.find((x) => x.key === key);
      if (!b) return;
      b.previsto += p.valor_parcela;
      if (p.status === "pago" || p.status === "paga") {
        b.realizado += p.valor_pago ?? p.valor_parcela;
      }
    });
    return buckets;
  }, [parcelasPeriodo]);

  // Tabela "Detalhamento de Parcelas"
  const detalhadas = useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = parcelasPeriodo.filter((p) => {
      if (!q) return true;
      const codigo = (p.contrato_codigo ?? "").toLowerCase();
      const nome = (p.cliente_nome ?? "").toLowerCase();
      return codigo.includes(q) || nome.includes(q);
    });

    if (sortKey) {
      arr = [...arr].sort((a, b) => {
        let av: string | number = "";
        let bv: string | number = "";
        switch (sortKey) {
          case "cliente":
            av = a.cliente_nome ?? "";
            bv = b.cliente_nome ?? "";
            break;
          case "contrato":
            av = a.contrato_codigo ?? "";
            bv = b.contrato_codigo ?? "";
            break;
          case "vencimento":
            av = a.data_vencimento ?? "";
            bv = b.data_vencimento ?? "";
            break;
          case "valor":
            av = a.valor_parcela;
            bv = b.valor_parcela;
            break;
          case "valorPago":
            av = a.valor_pago ?? 0;
            bv = b.valor_pago ?? 0;
            break;
          case "status":
            av = a.status ?? "";
            bv = b.status ?? "";
            break;
        }
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return arr;
  }, [parcelasPeriodo, busca, sortKey, sortDir]);

  const total = detalhadas.length;
  const inicio = (pagina - 1) * porPagina;
  const paginadas = detalhadas.slice(inicio, inicio + porPagina);

  const handleSort = (k: FinSortKey) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };

  const isLoading = empQ.isLoading || parQ.isLoading;

  const handleExport = () => {
    exportToCsv(
      `financeiro-${todayIso()}.csv`,
      detalhadas.map((p) => ({
        cliente: p.cliente_nome ?? "—",
        contrato: p.contrato_codigo ?? "",
        vencimento: fmtDate(p.data_vencimento),
        valor: p.valor_parcela.toFixed(2).replace(".", ","),
        valor_pago: (p.valor_pago ?? 0).toFixed(2).replace(".", ","),
        status: p.status ?? "",
      })),
      [
        { key: "cliente", label: "Cliente" },
        { key: "contrato", label: "Contrato" },
        { key: "vencimento", label: "Vencimento" },
        { key: "valor", label: "Valor (R$)" },
        { key: "valor_pago", label: "Valor Pago (R$)" },
        { key: "status", label: "Status" },
      ],
    );
  };

  // Apenas referência (não muda lógica) — manter unused emprestimos sem erro
  void emprestimos;

  return (
    <div className="space-y-4">
      {/* Filtros de período */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:flex-wrap rounded-lg border bg-card p-3">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          Período:
        </div>
        <div className="flex flex-col sm:flex-row gap-2 flex-1">
          <Input
            type="date"
            value={dataIni}
            onChange={(e) => setDataIni(e.target.value)}
            className="h-9 sm:w-[160px]"
          />
          <Input
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
            className="h-9 sm:w-[160px]"
          />
          {(dataIni || dataFim) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setDataIni("");
                setDataFim("");
              }}
            >
              Limpar
            </Button>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleExport}
          disabled={isLoading || detalhadas.length === 0}
          className="sm:ml-auto"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Exportar CSV</span>
          <span className="sm:hidden">CSV</span>
        </Button>
      </div>

      {/* KPIs alinhados às imagens */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiBox
          label="Total Previsto"
          value={fmtBRL(kpis.totalPrevisto)}
          icon={<ClipboardList className="h-4 w-4" />}
          tone="info"
          sub="Soma de todas parcelas"
        />
        <KpiBox
          label="Total Realizado"
          value={fmtBRL(kpis.totalRealizado)}
          icon={<CheckCircle2 className="h-4 w-4" />}
          tone="success"
          sub="Parcelas pagas"
        />
        <KpiBox
          label="Em Aberto"
          value={fmtBRL(kpis.emAberto)}
          icon={<Hourglass className="h-4 w-4" />}
          tone="warning"
          sub="Parcelas pendentes"
        />
        <KpiBox
          label="Taxa Realização"
          value={`${kpis.taxaRealizacao}%`}
          icon={<PieChart className="h-4 w-4" />}
          tone="primary"
          sub="Previsto vs realizado"
        />
      </div>

      {/* Gráfico de barras */}
      <div className="rounded-lg border bg-card p-3 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
          <h3 className="text-sm font-semibold flex items-center gap-1.5">
            <BarChart3 className="h-4 w-4 text-info" />
            Previsto vs Realizado — Últimos 6 Meses
          </h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-sm bg-info" />
              Previsto
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-sm bg-success" />
              Realizado
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <BarChart dados={dadosMensais} />
        )}
      </div>

      {/* Tabela Detalhamento de Parcelas */}
      <div className="rounded-lg border bg-card overflow-hidden">
        <div className="border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center">
          <h3 className="text-sm font-semibold flex items-center gap-1.5">
            <Receipt className="h-4 w-4 text-primary" />
            Detalhamento de Parcelas
          </h3>
          <div className="relative sm:ml-auto sm:w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={busca}
              onChange={(e) => {
                setBusca(e.target.value);
                setPagina(1);
              }}
              placeholder="Buscar cliente ou contrato..."
              className="h-9 pl-9"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : detalhadas.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-4">
            <Receipt className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm font-medium">Nenhuma parcela encontrada</p>
            <p className="text-xs text-muted-foreground">Ajuste o período ou a busca.</p>
          </div>
        ) : (
          <>
            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 border-b">
                  <tr>
                    <SortHeader<FinSortKey>
                      label="Cliente"
                      col="cliente"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<FinSortKey>
                      label="Contrato"
                      col="contrato"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<FinSortKey>
                      label="Vencimento"
                      col="vencimento"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<FinSortKey>
                      label="Valor"
                      col="valor"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<FinSortKey>
                      label="Valor Pago"
                      col="valorPago"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<FinSortKey>
                      label="Status"
                      col="status"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                  </tr>
                </thead>
                <tbody>
                  {paginadas.map((p) => {
                    const paga = p.status === "pago" || p.status === "paga";
                    const atrasada = !paga && p.data_vencimento && p.data_vencimento < todayIso();
                    return (
                      <tr
                        key={String(p.id)}
                        className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-3 py-2.5">{p.cliente_nome ?? "—"}</td>
                        <td className="px-3 py-2.5 font-mono text-xs font-semibold text-primary">
                          {p.contrato_codigo}
                        </td>
                        <td
                          className={cn(
                            "px-3 py-2.5 whitespace-nowrap",
                            atrasada ? "text-destructive font-medium" : "text-muted-foreground",
                          )}
                        >
                          {fmtDate(p.data_vencimento)}
                        </td>
                        <td className="px-3 py-2.5 font-medium">{fmtBRL(p.valor_parcela)}</td>
                        <td
                          className={cn(
                            "px-3 py-2.5",
                            paga ? "text-success font-medium" : "text-muted-foreground",
                          )}
                        >
                          {paga ? fmtBRL(p.valor_pago ?? p.valor_parcela) : "—"}
                        </td>
                        <td className="px-3 py-2.5">
                          <Badge
                            variant="outline"
                            className={cn(
                              "border",
                              paga
                                ? "bg-success/15 text-success border-success/30"
                                : atrasada
                                  ? "bg-destructive/15 text-destructive border-destructive/30"
                                  : "bg-warning/15 text-warning border-warning/30",
                            )}
                          >
                            {paga ? "Pago" : atrasada ? "Atrasado" : "Pendente"}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y">
              {paginadas.map((p) => {
                const paga = p.status === "pago" || p.status === "paga";
                const atrasada = !paga && p.data_vencimento && p.data_vencimento < todayIso();
                return (
                  <div key={String(p.id)} className="p-3 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-sm truncate">{p.cliente_nome ?? "—"}</p>
                      <Badge
                        variant="outline"
                        className={cn(
                          "border shrink-0",
                          paga
                            ? "bg-success/15 text-success border-success/30"
                            : atrasada
                              ? "bg-destructive/15 text-destructive border-destructive/30"
                              : "bg-warning/15 text-warning border-warning/30",
                        )}
                      >
                        {paga ? "Pago" : atrasada ? "Atrasado" : "Pendente"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-semibold text-primary">
                        {p.contrato_codigo}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span
                        className={cn(
                          atrasada ? "text-destructive font-medium" : "text-muted-foreground",
                        )}
                      >
                        {fmtDate(p.data_vencimento)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">{fmtBRL(p.valor_parcela)}</span>
                      {paga ? (
                        <span className="text-success font-medium text-xs">
                          Pago: {fmtBRL(p.valor_pago ?? p.valor_parcela)}
                        </span>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            <TablePagination
              page={pagina}
              pageSize={porPagina}
              totalItems={total}
              onPageChange={setPagina}
              onPageSizeChange={(s) => {
                setPorPagina(s);
                setPagina(1);
              }}
              itemLabel="parcelas"
            />
          </>
        )}
      </div>
    </div>
  );
}

function BarChart({ dados }: { dados: { label: string; previsto: number; realizado: number }[] }) {
  const max = Math.max(...dados.flatMap((d) => [d.previsto, d.realizado]), 1);
  return (
    <div className="flex items-end gap-2 sm:gap-3 h-44 px-1 sm:px-2">
      {dados.map((d, i) => {
        const hp = (d.previsto / max) * 140;
        const hr = (d.realizado / max) * 140;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 min-w-0">
            <div className="flex gap-0.5 sm:gap-1 items-end h-36 w-full justify-center">
              <div
                className="w-3 sm:w-4 rounded-t bg-info hover:opacity-80 transition-opacity"
                style={{ height: `${hp}px` }}
                title={`Previsto: ${fmtBRL(d.previsto)}`}
              />
              <div
                className="w-3 sm:w-4 rounded-t bg-success hover:opacity-80 transition-opacity"
                style={{ height: `${hr}px` }}
                title={`Realizado: ${fmtBRL(d.realizado)}`}
              />
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// TAB CONTRATOS
// ============================================================
type ContratoSortKey =
  | "id"
  | "cliente"
  | "valor"
  | "taxa"
  | "parcelas"
  | "tipo"
  | "data"
  | "status";

function ContratosTab() {
  const searchParams = Route.useSearch();
  const [busca, setBusca] = useState(searchParams.contrato ?? "");
  const [clienteFiltro, setClienteFiltro] = useState("todos");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState<PageSize>(5);
  const [sortKey, setSortKey] = useState<ContratoSortKey | null>("id");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [contratoPdf, setContratoPdf] = useState<{
    id: string | number;
    codigo: string;
  } | null>(null);

  useEffect(() => {
    if (searchParams.contrato) {
      setBusca(searchParams.contrato);
      setPagina(1);
    }
  }, [searchParams.contrato]);

  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const empQ = useQuery({
    queryKey: ["emprestimos"],
    queryFn: () => listEmprestimos(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });
  const cliQ = useQuery({
    queryKey: ["clientes"],
    queryFn: () => listClientes(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });

  const emprestimos = useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const clientes = useMemo(() => cliQ.data?.data ?? [], [cliQ.data]);

  const seqMap = useMemo(() => {
    const m = new Map<string, number>();
    [...emprestimos]
      .sort((a, b) => (a.created_at ?? "").localeCompare(b.created_at ?? ""))
      .forEach((e, i) => m.set(String(e.id), i + 1));
    return m;
  }, [emprestimos]);

  const codigoOf = (id: string | number) =>
    `#${String(seqMap.get(String(id)) ?? 0).padStart(3, "0")}`;

  // KPIs alinhados à imagem 2
  const kpis = useMemo(() => {
    const totalContratos = emprestimos.filter((e) => e.status === "ativo").length;
    const volumeTotal = emprestimos.reduce((s, e) => s + e.valor_principal, 0);
    const ticketMedio = emprestimos.length > 0 ? volumeTotal / emprestimos.length : 0;
    const parcelasAtivas = parcelas.filter(
      (p) => p.status !== "pago" && p.status !== "paga",
    ).length;
    return { totalContratos, volumeTotal, ticketMedio, parcelasAtivas };
  }, [emprestimos, parcelas]);

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = emprestimos.filter((e) => {
      if (clienteFiltro !== "todos" && String(e.cliente_id) !== clienteFiltro) return false;
      if (q) {
        const codigo = codigoOf(e.id).toLowerCase();
        const nome = (e.cliente_nome ?? "").toLowerCase();
        if (!codigo.includes(q) && !nome.includes(q)) return false;
      }
      return true;
    });

    if (sortKey) {
      arr = [...arr].sort((a, b) => {
        let av: string | number = "";
        let bv: string | number = "";
        switch (sortKey) {
          case "id":
            av = seqMap.get(String(a.id)) ?? 0;
            bv = seqMap.get(String(b.id)) ?? 0;
            break;
          case "cliente":
            av = a.cliente_nome ?? "";
            bv = b.cliente_nome ?? "";
            break;
          case "valor":
            av = a.valor_principal;
            bv = b.valor_principal;
            break;
          case "taxa":
            av = a.taxa_juros;
            bv = b.taxa_juros;
            break;
          case "parcelas":
            av = a.numero_parcelas;
            bv = b.numero_parcelas;
            break;
          case "tipo":
            av = a.tipo_juros ?? "";
            bv = b.tipo_juros ?? "";
            break;
          case "data":
            av = a.data_inicio ?? a.created_at ?? "";
            bv = b.data_inicio ?? b.created_at ?? "";
            break;
          case "status":
            av = a.status ?? "";
            bv = b.status ?? "";
            break;
        }
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return arr;
  }, [emprestimos, busca, clienteFiltro, sortKey, sortDir, seqMap]);

  const total = filtrados.length;
  const inicio = (pagina - 1) * porPagina;
  const paginados = filtrados.slice(inicio, inicio + porPagina);

  // Estatística de parcelas pagas/total por contrato
  const parcelasStats = useMemo(() => {
    const m = new Map<string, { pagas: number; total: number }>();
    parcelas.forEach((p) => {
      const k = String(p.emprestimo_id);
      const cur = m.get(k) ?? { pagas: 0, total: 0 };
      cur.total += 1;
      if (p.status === "pago" || p.status === "paga") cur.pagas += 1;
      m.set(k, cur);
    });
    return m;
  }, [parcelas]);

  const handleSort = (k: ContratoSortKey) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };

  const handleExport = () => {
    exportToCsv(
      `contratos-${todayIso()}.csv`,
      filtrados.map((e) => ({
        id: codigoOf(e.id),
        cliente: e.cliente_nome ?? "—",
        valor: e.valor_principal.toFixed(2).replace(".", ","),
        taxa: `${e.taxa_juros}%`,
        parcelas: e.numero_parcelas,
        tipo: e.tipo_juros ?? "",
        data: fmtDate(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null),
        status: e.status ?? "",
      })),
      [
        { key: "id", label: "Contrato" },
        { key: "cliente", label: "Cliente" },
        { key: "valor", label: "Valor (R$)" },
        { key: "taxa", label: "Taxa" },
        { key: "parcelas", label: "Parcelas" },
        { key: "tipo", label: "Tipo" },
        { key: "data", label: "Data" },
        { key: "status", label: "Status" },
      ],
    );
  };

  const isLoading = empQ.isLoading || parQ.isLoading || cliQ.isLoading;

  const contratoSelecionado = contratoPdf
    ? (emprestimos.find((e) => String(e.id) === String(contratoPdf.id)) ?? null)
    : null;
  const clienteSelecionado = contratoSelecionado
    ? clientes.find((c) => String(c.id) === String(contratoSelecionado.cliente_id))
    : null;

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiBox
          label="Total Contratos"
          value={String(kpis.totalContratos)}
          icon={<ClipboardList className="h-4 w-4" />}
          tone="info"
          sub="Contratos ativos"
        />
        <KpiBox
          label="Volume Total"
          value={fmtBRL(kpis.volumeTotal)}
          icon={<Coins className="h-4 w-4" />}
          tone="success"
          sub="Soma dos empréstimos"
        />
        <KpiBox
          label="Ticket Médio"
          value={fmtBRL(kpis.ticketMedio)}
          icon={<BarChart3 className="h-4 w-4" />}
          tone="primary"
          sub="Por contrato"
        />
        <KpiBox
          label="Parcelas Ativas"
          value={String(kpis.parcelasAtivas)}
          icon={<Hourglass className="h-4 w-4" />}
          tone="warning"
          sub="Aguardando pagamento"
        />
      </div>

      {/* Tabela */}
      <div className="rounded-lg border bg-card overflow-hidden">
        <div className="border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center">
          <h3 className="text-sm font-semibold flex items-center gap-1.5">
            <FileText className="h-4 w-4 text-primary" />
            Lista de Contratos
          </h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:ml-auto sm:items-center w-full sm:w-auto">
            <div className="relative flex-1 sm:w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={busca}
                onChange={(e) => {
                  setBusca(e.target.value);
                  setPagina(1);
                }}
                placeholder="Buscar cliente ou contrato..."
                className="h-9 pl-9"
              />
            </div>
            <ClienteFilter
              clientes={clientes}
              value={clienteFiltro}
              onChange={(v) => {
                setClienteFiltro(v);
                setPagina(1);
              }}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              disabled={isLoading || filtrados.length === 0}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar CSV</span>
              <span className="sm:hidden">CSV</span>
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : filtrados.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-4">
            <FileText className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm font-medium">Nenhum contrato encontrado</p>
            <p className="text-xs text-muted-foreground">Ajuste os filtros e tente novamente.</p>
          </div>
        ) : (
          <>
            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 border-b">
                  <tr>
                    <SortHeader<ContratoSortKey>
                      label="Contrato"
                      col="id"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<ContratoSortKey>
                      label="Cliente"
                      col="cliente"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<ContratoSortKey>
                      label="Valor"
                      col="valor"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<ContratoSortKey>
                      label="Taxa"
                      col="taxa"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<ContratoSortKey>
                      label="Parcelas"
                      col="parcelas"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<ContratoSortKey>
                      label="Tipo"
                      col="tipo"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<ContratoSortKey>
                      label="Início"
                      col="data"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <th className="px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground">
                      Status
                    </th>
                    <th className="px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginados.map((e) => {
                    const stats = parcelasStats.get(String(e.id)) ?? {
                      pagas: 0,
                      total: e.numero_parcelas,
                    };
                    return (
                      <tr
                        key={String(e.id)}
                        className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-3 py-2.5 font-mono text-xs font-semibold text-primary">
                          {codigoOf(e.id)}
                        </td>
                        <td className="px-3 py-2.5">{e.cliente_nome ?? "—"}</td>
                        <td className="px-3 py-2.5 font-medium">{fmtBRL(e.valor_principal)}</td>
                        <td className="px-3 py-2.5 text-muted-foreground">{e.taxa_juros}% a.m.</td>
                        <td className="px-3 py-2.5 text-muted-foreground">{e.numero_parcelas}x</td>
                        <td className="px-3 py-2.5">
                          <Badge
                            variant="outline"
                            className="bg-info/10 text-info border-info/30 capitalize"
                          >
                            {e.tipo_juros ?? "—"}
                          </Badge>
                        </td>
                        <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">
                          {fmtDate(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null)}
                        </td>
                        <td className="px-3 py-2.5">
                          <Badge
                            variant="outline"
                            className="bg-success/15 text-success border-success/30"
                          >
                            ● {stats.pagas}/{stats.total} pagas
                          </Badge>
                        </td>
                        <td className="px-3 py-2.5 text-right">
                          <TooltipProvider delayDuration={250}>
                            <div className="flex items-center justify-end gap-1.5">
                              <ActionTooltip label="Visualizar contrato">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8 bg-info/10 hover:bg-info/20 border-info/30 text-info"
                                  onClick={() =>
                                    setContratoPdf({
                                      id: e.id,
                                      codigo: codigoOf(e.id),
                                    })
                                  }
                                  aria-label="Visualizar contrato"
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                </Button>
                              </ActionTooltip>
                              <ActionTooltip label="Gerar PDF">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8 bg-success/10 hover:bg-success/20 border-success/30 text-success"
                                  onClick={() =>
                                    setContratoPdf({
                                      id: e.id,
                                      codigo: codigoOf(e.id),
                                    })
                                  }
                                  aria-label="Gerar PDF"
                                >
                                  <FileText className="h-3.5 w-3.5" />
                                </Button>
                              </ActionTooltip>
                            </div>
                          </TooltipProvider>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y">
              {paginados.map((e) => {
                const stats = parcelasStats.get(String(e.id)) ?? {
                  pagas: 0,
                  total: e.numero_parcelas,
                };
                return (
                  <div key={String(e.id)} className="p-3 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-xs font-semibold text-primary shrink-0">
                          {codigoOf(e.id)}
                        </span>
                        <span className="font-medium text-sm truncate">
                          {e.cliente_nome ?? "—"}
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-success/15 text-success border-success/30 shrink-0 text-[10px]"
                      >
                        {stats.pagas}/{stats.total}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div>
                        <p className="text-muted-foreground">Valor</p>
                        <p className="font-semibold">{fmtBRL(e.valor_principal)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Taxa</p>
                        <p className="font-semibold">{e.taxa_juros}% a.m.</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Parcelas</p>
                        <p className="font-semibold">
                          {e.numero_parcelas}x{" "}
                          <span className="text-muted-foreground capitalize">
                            ({e.tipo_juros ?? "—"})
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Início</p>
                        <p className="font-semibold">
                          {fmtDate(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-info/10 hover:bg-info/20 border-info/30 text-info h-8"
                        onClick={() => setContratoPdf({ id: e.id, codigo: codigoOf(e.id) })}
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Visualizar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-success/10 hover:bg-success/20 border-success/30 text-success h-8"
                        onClick={() => setContratoPdf({ id: e.id, codigo: codigoOf(e.id) })}
                      >
                        <FileText className="h-3.5 w-3.5" />
                        PDF
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <TablePagination
              page={pagina}
              pageSize={porPagina}
              totalItems={total}
              onPageChange={setPagina}
              onPageSizeChange={(s) => {
                setPorPagina(s);
                setPagina(1);
              }}
              itemLabel="contratos"
            />
          </>
        )}
      </div>

      <ContratoPdfDialog
        open={!!contratoPdf}
        onOpenChange={(o) => !o && setContratoPdf(null)}
        contrato={contratoSelecionado}
        contratoCodigo={contratoPdf?.codigo ?? ""}
        parcelas={parcelas}
        cliente={clienteSelecionado ?? null}
      />
    </div>
  );
}

// ============================================================
// TAB INADIMPLÊNCIA — agrupada por cliente
// ============================================================
type InadSortKey = "cliente" | "qtd" | "total" | "atraso";

type ClienteInad = {
  cliente_id: string;
  cliente_nome: string;
  contrato_codigos: string[];
  qtdParcelas: number;
  totalDivida: number;
  diasAtrasoMax: number;
  telefone?: string | null;
  parcelas: ParcelaListItem[];
};

function InadimplenciaTab() {
  const { name: adminName } = useAdminName();
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState<PageSize>(5);
  const [sortKey, setSortKey] = useState<InadSortKey>("atraso");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });
  const cliQ = useQuery({
    queryKey: ["clientes"],
    queryFn: () => listClientes(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });

  const parcelas = useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const clientes = useMemo(() => cliQ.data?.data ?? [], [cliQ.data]);

  const hoje = todayIso();

  const atrasadas = useMemo(() => {
    return parcelas.filter((p) => {
      if (!p.data_vencimento) return false;
      if (p.status === "pago" || p.status === "paga") return false;
      return p.data_vencimento < hoje;
    });
  }, [parcelas, hoje]);

  const diasAtraso = (iso: string | null) => {
    if (!iso) return 0;
    const d = new Date(iso + "T00:00:00").getTime();
    const today = new Date(hoje + "T00:00:00").getTime();
    return Math.floor((today - d) / 86400000);
  };

  // Agrupa por cliente
  const agrupados: ClienteInad[] = useMemo(() => {
    const map = new Map<string, ClienteInad>();
    atrasadas.forEach((p) => {
      const k = String(p.cliente_id ?? "—");
      const cur =
        map.get(k) ??
        ({
          cliente_id: k,
          cliente_nome: p.cliente_nome ?? "—",
          contrato_codigos: [],
          qtdParcelas: 0,
          totalDivida: 0,
          diasAtrasoMax: 0,
          parcelas: [],
        } as ClienteInad);
      cur.qtdParcelas += 1;
      cur.totalDivida += p.valor_parcela;
      const dias = diasAtraso(p.data_vencimento);
      if (dias > cur.diasAtrasoMax) cur.diasAtrasoMax = dias;
      if (p.contrato_codigo && !cur.contrato_codigos.includes(p.contrato_codigo)) {
        cur.contrato_codigos.push(p.contrato_codigo);
      }
      cur.parcelas.push(p);
      map.set(k, cur);
    });
    // anexa telefone
    map.forEach((v) => {
      const cli = clientes.find((c) => String(c.id) === v.cliente_id);
      v.telefone = cli?.telefone ?? null;
    });
    return Array.from(map.values());
  }, [atrasadas, clientes]);

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = agrupados.filter((c) => {
      if (!q) return true;
      const nome = c.cliente_nome.toLowerCase();
      const codigos = c.contrato_codigos.join(" ").toLowerCase();
      return nome.includes(q) || codigos.includes(q);
    });
    arr = [...arr].sort((a, b) => {
      let av: string | number = 0;
      let bv: string | number = 0;
      switch (sortKey) {
        case "cliente":
          av = a.cliente_nome;
          bv = b.cliente_nome;
          break;
        case "qtd":
          av = a.qtdParcelas;
          bv = b.qtdParcelas;
          break;
        case "total":
          av = a.totalDivida;
          bv = b.totalDivida;
          break;
        case "atraso":
          av = a.diasAtrasoMax;
          bv = b.diasAtrasoMax;
          break;
      }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [agrupados, busca, sortKey, sortDir]);

  const total = filtrados.length;
  const inicio = (pagina - 1) * porPagina;
  const paginados = filtrados.slice(inicio, inicio + porPagina);

  // KPIs alinhados à imagem 3
  const kpis = useMemo(() => {
    const inadimplentes = agrupados.length;
    const totalEmAtraso = agrupados.reduce((s, c) => s + c.totalDivida, 0);
    const maiorAtraso = agrupados.reduce((m, c) => Math.max(m, c.diasAtrasoMax), 0);
    const parcelasAtras = atrasadas.length;
    return { inadimplentes, totalEmAtraso, maiorAtraso, parcelasAtras };
  }, [agrupados, atrasadas]);

  const handleSort = (k: InadSortKey) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("desc");
    }
  };

  const handleExport = () => {
    exportToCsv(
      `inadimplencia-${todayIso()}.csv`,
      filtrados.map((c) => ({
        cliente: c.cliente_nome,
        contratos: c.contrato_codigos.join(", "),
        qtd: c.qtdParcelas,
        total: c.totalDivida.toFixed(2).replace(".", ","),
        atraso: c.diasAtrasoMax,
      })),
      [
        { key: "cliente", label: "Cliente" },
        { key: "contratos", label: "Contratos" },
        { key: "qtd", label: "Qtd Parcelas" },
        { key: "total", label: "Total Dívida (R$)" },
        { key: "atraso", label: "Dias em Atraso" },
      ],
    );
  };

  const buildWhatsApp = (c: ClienteInad) => {
    const tel = (c.telefone ?? "").replace(/\D/g, "");
    if (!tel) return null;
    const numero = tel.length === 11 || tel.length === 10 ? `55${tel}` : tel;
    const contratos = c.contrato_codigos.join(", ");
    const msg = `Olá ${c.cliente_nome}, identificamos ${c.qtdParcelas} parcela(s) em atraso do(s) contrato(s) ${contratos}, totalizando ${fmtBRL(c.totalDivida)}. Por favor, entre em contato para regularizarmos a situação. Atenciosamente, ${adminName} - JuroPro.`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  };

  const riscoBadge = (dias: number) => {
    if (dias > 60)
      return {
        label: "Alto Risco",
        cls: "bg-destructive/15 text-destructive border-destructive/30",
      };
    if (dias > 30)
      return { label: "Médio Risco", cls: "bg-warning/15 text-warning border-warning/30" };
    return { label: "Baixo Risco", cls: "bg-info/15 text-info border-info/30" };
  };

  const isLoading = parQ.isLoading || cliQ.isLoading;

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiBox
          label="Inadimplentes"
          value={String(kpis.inadimplentes)}
          icon={<AlertCircle className="h-4 w-4" />}
          tone="destructive"
          sub="Clientes em atraso"
        />
        <KpiBox
          label="Total em Atraso"
          value={fmtBRL(kpis.totalEmAtraso)}
          icon={<Coins className="h-4 w-4" />}
          tone="success"
          sub="Valor total inadimplente"
        />
        <KpiBox
          label="Maior Atraso"
          value={`${kpis.maiorAtraso} dias`}
          icon={<CalendarDays className="h-4 w-4" />}
          tone="warning"
          sub="Parcela mais antiga"
        />
        <KpiBox
          label="Parcelas Atrasadas"
          value={String(kpis.parcelasAtras)}
          icon={<ClipboardList className="h-4 w-4" />}
          tone="primary"
          sub="Total de parcelas"
        />
      </div>

      {/* Tabela */}
      <div className="rounded-lg border bg-card overflow-hidden">
        <div className="border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center">
          <h3 className="text-sm font-semibold flex items-center gap-1.5">
            <AlertCircle className="h-4 w-4 text-warning" />
            Clientes Inadimplentes
          </h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:ml-auto sm:items-center w-full sm:w-auto">
            <div className="relative flex-1 sm:w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={busca}
                onChange={(e) => {
                  setBusca(e.target.value);
                  setPagina(1);
                }}
                placeholder="Buscar cliente ou contrato..."
                className="h-9 pl-9"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              disabled={isLoading || filtrados.length === 0}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar CSV</span>
              <span className="sm:hidden">CSV</span>
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : filtrados.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-4">
            <Check className="h-10 w-10 text-success mb-2" />
            <p className="text-sm font-medium">Nenhum cliente inadimplente 🎉</p>
            <p className="text-xs text-muted-foreground">Tudo em dia neste filtro.</p>
          </div>
        ) : (
          <>
            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 border-b">
                  <tr>
                    <SortHeader<InadSortKey>
                      label="Cliente"
                      col="cliente"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <th className="px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground">
                      Contrato
                    </th>
                    <SortHeader<InadSortKey>
                      label="Qtd Parcelas"
                      col="qtd"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<InadSortKey>
                      label="Total Dívida"
                      col="total"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<InadSortKey>
                      label="Dias em Atraso"
                      col="atraso"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <th className="px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground">
                      Risco
                    </th>
                    <th className="px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginados.map((c) => {
                    const wpp = buildWhatsApp(c);
                    const risco = riscoBadge(c.diasAtrasoMax);
                    return (
                      <tr
                        key={c.cliente_id}
                        className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-3 py-2.5">{c.cliente_nome}</td>
                        <td className="px-3 py-2.5 font-mono text-xs font-semibold text-primary">
                          {c.contrato_codigos.join(", ")}
                        </td>
                        <td className="px-3 py-2.5">{c.qtdParcelas}</td>
                        <td className="px-3 py-2.5 font-medium text-destructive">
                          {fmtBRL(c.totalDivida)}
                        </td>
                        <td className="px-3 py-2.5 font-medium text-warning">
                          {c.diasAtrasoMax} dias
                        </td>
                        <td className="px-3 py-2.5">
                          <Badge variant="outline" className={cn("border", risco.cls)}>
                            ● {risco.label}
                          </Badge>
                        </td>
                        <td className="px-3 py-2.5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {wpp ? (
                              <a
                                href={wpp}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-success/30 bg-success/10 text-success hover:bg-success/20"
                                title="Cobrar via WhatsApp"
                              >
                                <WhatsAppIcon className="h-3.5 w-3.5" />
                              </a>
                            ) : (
                              <span
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-muted bg-muted/30 text-muted-foreground opacity-50"
                                title="Telefone não cadastrado"
                              >
                                <WhatsAppIcon className="h-3.5 w-3.5" />
                              </span>
                            )}
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 bg-info/10 hover:bg-info/20 border-info/30 text-info"
                              title="Ver detalhes em Vencimentos"
                              asChild
                            >
                              <a href={`/vencimentos?status=atrasado`}>
                                <Eye className="h-3.5 w-3.5" />
                              </a>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y">
              {paginados.map((c) => {
                const wpp = buildWhatsApp(c);
                const risco = riscoBadge(c.diasAtrasoMax);
                return (
                  <div key={c.cliente_id} className="p-3 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-sm truncate">{c.cliente_nome}</p>
                      <Badge
                        variant="outline"
                        className={cn("border shrink-0 text-[10px]", risco.cls)}
                      >
                        {risco.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-semibold text-primary">
                        {c.contrato_codigos.join(", ")}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        {c.qtdParcelas} parcela{c.qtdParcelas > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase">Total dívida</p>
                        <p className="font-bold text-destructive">{fmtBRL(c.totalDivida)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-muted-foreground uppercase">Dias atraso</p>
                        <p className="font-bold text-warning">{c.diasAtrasoMax} dias</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      {wpp ? (
                        <a
                          href={wpp}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border border-success/30 bg-success/10 text-success text-xs font-medium hover:bg-success/20"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                      ) : (
                        <span className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border bg-muted/30 text-muted-foreground text-xs opacity-50">
                          <WhatsAppIcon className="h-3.5 w-3.5" />
                          Sem telefone
                        </span>
                      )}
                      <a
                        href="/vencimentos?status=atrasado"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border border-info/30 bg-info/10 text-info text-xs font-medium hover:bg-info/20"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Detalhes
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <TablePagination
              page={pagina}
              pageSize={porPagina}
              totalItems={total}
              onPageChange={setPagina}
              onPageSizeChange={(s) => {
                setPorPagina(s);
                setPagina(1);
              }}
              itemLabel="clientes"
            />
          </>
        )}
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
