import { useMemo, useState } from "react";
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
  DollarSign,
  Receipt,
  CalendarDays,
  Wallet,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  TablePagination,
  type PageSize,
} from "@/components/ui/table-pagination";
import { listEmprestimos } from "@/integrations/external-supabase/emprestimos.functions";
import { listParcelas } from "@/integrations/external-supabase/parcelas.functions";
import { listClientes } from "@/integrations/external-supabase/clientes.functions";
import { ContratoPdfDialog } from "@/components/relatorios/ContratoPdfDialog";
import { exportToCsv } from "@/lib/csv";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/relatorios")({
  head: () => ({
    meta: [{ title: "Relatórios — JuroPro" }],
  }),
  component: RelatoriosPage,
});

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

const MESES = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function RelatoriosPage() {
  const [tab, setTab] = useState<"financeiro" | "contratos" | "inadimplencia">(
    "financeiro",
  );

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h1 className="text-lg font-semibold">Relatórios e Documentos</h1>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6 space-y-4">
            <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
              <TabsList className="grid w-full grid-cols-3 max-w-xl">
                <TabsTrigger value="financeiro">
                  <TrendingUp className="h-4 w-4 mr-1.5" />
                  Financeiro
                </TabsTrigger>
                <TabsTrigger value="contratos">
                  <FileText className="h-4 w-4 mr-1.5" />
                  Contratos
                </TabsTrigger>
                <TabsTrigger value="inadimplencia">
                  <AlertCircle className="h-4 w-4 mr-1.5" />
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
  return (
    <div
      className={cn(
        "rounded-xl border border-t-4 bg-card p-4 shadow-sm",
        toneMap[tone],
      )}
    >
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <span className="text-muted-foreground">{icon}</span>
      </div>
      <p className="mt-1.5 text-xl font-bold text-foreground">{value}</p>
      {sub ? <p className="text-[11px] text-muted-foreground">{sub}</p> : null}
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
          className="h-9 w-full sm:w-[240px] justify-between font-normal"
        >
          <span className="truncate">
            {value === "todos"
              ? "Todos os clientes"
              : (selected?.nome ?? "Selecionar...")}
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
                  className={cn(
                    "h-4 w-4 mr-2",
                    value === "todos" ? "opacity-100" : "opacity-0",
                  )}
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
function FinanceiroTab() {
  const [dataIni, setDataIni] = useState("");
  const [dataFim, setDataFim] = useState("");

  const empQ = useQuery({
    queryKey: ["relatorios", "emprestimos"],
    queryFn: () => listEmprestimos(),
  });
  const parQ = useQuery({
    queryKey: ["relatorios", "parcelas"],
    queryFn: () => listParcelas(),
  });

  const emprestimos = useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = useMemo(() => parQ.data?.data ?? [], [parQ.data]);

  // Filtro por período (data_vencimento das parcelas para realizado/recebido)
  const parcelasFiltradas = useMemo(() => {
    return parcelas.filter((p) => {
      if (!p.data_vencimento) return false;
      if (dataIni && p.data_vencimento < dataIni) return false;
      if (dataFim && p.data_vencimento > dataFim) return false;
      return true;
    });
  }, [parcelas, dataIni, dataFim]);

  const empFiltrados = useMemo(() => {
    return emprestimos.filter((e) => {
      const d = e.data_inicio ?? e.created_at?.slice(0, 10);
      if (!d) return true;
      if (dataIni && d < dataIni) return false;
      if (dataFim && d > dataFim) return false;
      return true;
    });
  }, [emprestimos, dataIni, dataFim]);

  // KPIs
  const kpis = useMemo(() => {
    const totalEmprestado = empFiltrados.reduce(
      (s, e) => s + e.valor_principal,
      0,
    );
    const totalRecebido = parcelasFiltradas
      .filter((p) => p.status === "pago" || p.status === "paga")
      .reduce((s, p) => s + (p.valor_pago ?? p.valor_parcela), 0);
    const totalAReceber = parcelasFiltradas
      .filter((p) => p.status !== "pago" && p.status !== "paga")
      .reduce((s, p) => s + p.valor_parcela, 0);
    // Lucro bruto = juros recebidos = (recebido) - (proporção do principal pago)
    // Aproximação: usa total recebido - parcelas pagas * (principal/numero_parcelas)
    let principalPago = 0;
    parcelasFiltradas
      .filter((p) => p.status === "pago" || p.status === "paga")
      .forEach((p) => {
        const emp = empFiltrados.find(
          (e) => String(e.id) === String(p.emprestimo_id),
        );
        if (emp && emp.numero_parcelas > 0) {
          principalPago += emp.valor_principal / emp.numero_parcelas;
        }
      });
    const lucroBruto = Math.max(0, totalRecebido - principalPago);

    return { totalEmprestado, totalRecebido, totalAReceber, lucroBruto };
  }, [empFiltrados, parcelasFiltradas]);

  // Gráfico mensal (últimos 6 meses): previsto vs realizado
  const dadosMensais = useMemo(() => {
    const now = new Date();
    const buckets: { key: string; label: string; previsto: number; realizado: number }[] =
      [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      buckets.push({
        key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
        label: MESES[d.getMonth()],
        previsto: 0,
        realizado: 0,
      });
    }
    parcelasFiltradas.forEach((p) => {
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
  }, [parcelasFiltradas]);

  const isLoading = empQ.isLoading || parQ.isLoading;

  const handleExport = () => {
    exportToCsv(
      `financeiro-${todayIso()}.csv`,
      dadosMensais.map((d) => ({
        Mes: d.label,
        Previsto: d.previsto.toFixed(2).replace(".", ","),
        Realizado: d.realizado.toFixed(2).replace(".", ","),
      })),
      [
        { key: "Mes", label: "Mês" },
        { key: "Previsto", label: "Previsto (R$)" },
        { key: "Realizado", label: "Realizado (R$)" },
      ],
    );
  };

  return (
    <div className="space-y-4">
      {/* Filtros */}
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
          disabled={isLoading}
          className="sm:ml-auto"
        >
          <Download className="h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiBox
          label="Total Emprestado"
          value={fmtBRL(kpis.totalEmprestado)}
          icon={<Wallet className="h-4 w-4" />}
          tone="primary"
          sub={`${empFiltrados.length} contratos`}
        />
        <KpiBox
          label="Total Recebido"
          value={fmtBRL(kpis.totalRecebido)}
          icon={<DollarSign className="h-4 w-4" />}
          tone="success"
        />
        <KpiBox
          label="A Receber"
          value={fmtBRL(kpis.totalAReceber)}
          icon={<Receipt className="h-4 w-4" />}
          tone="info"
        />
        <KpiBox
          label="Lucro Bruto (Juros)"
          value={fmtBRL(kpis.lucroBruto)}
          icon={<TrendingUp className="h-4 w-4" />}
          tone="warning"
          sub="Recebido − Principal"
        />
      </div>

      {/* Gráfico de barras */}
      <div className="rounded-lg border bg-card p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">
            Fluxo de Caixa — Últimos 6 meses
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
    </div>
  );
}

function BarChart({
  dados,
}: {
  dados: { label: string; previsto: number; realizado: number }[];
}) {
  const max = Math.max(...dados.flatMap((d) => [d.previsto, d.realizado]), 1);
  return (
    <div className="flex items-end gap-2 sm:gap-3 h-44 px-2">
      {dados.map((d, i) => {
        const hp = (d.previsto / max) * 140;
        const hr = (d.realizado / max) * 140;
        return (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-1.5 min-w-0"
          >
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
            <span className="text-[11px] font-medium text-muted-foreground">
              {d.label}
            </span>
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
  | "data";

function ContratosTab() {
  const [busca, setBusca] = useState("");
  const [dataIni, setDataIni] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [clienteFiltro, setClienteFiltro] = useState("todos");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState<PageSize>(10);
  const [sortKey, setSortKey] = useState<ContratoSortKey | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [contratoPdf, setContratoPdf] = useState<{
    id: string | number;
    codigo: string;
  } | null>(null);

  const empQ = useQuery({
    queryKey: ["relatorios", "emprestimos"],
    queryFn: () => listEmprestimos(),
  });
  const parQ = useQuery({
    queryKey: ["relatorios", "parcelas"],
    queryFn: () => listParcelas(),
  });
  const cliQ = useQuery({
    queryKey: ["relatorios", "clientes"],
    queryFn: () => listClientes(),
  });

  const emprestimos = useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const clientes = useMemo(() => cliQ.data?.data ?? [], [cliQ.data]);

  // Sequenciais por created_at ASC (igual ao padrão das outras telas)
  const seqMap = useMemo(() => {
    const m = new Map<string, number>();
    [...emprestimos]
      .sort((a, b) => (a.created_at ?? "").localeCompare(b.created_at ?? ""))
      .forEach((e, i) => m.set(String(e.id), i + 1));
    return m;
  }, [emprestimos]);

  const codigoOf = (id: string | number) =>
    `#${String(seqMap.get(String(id)) ?? 0).padStart(3, "0")}`;

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = emprestimos.filter((e) => {
      if (clienteFiltro !== "todos" && String(e.cliente_id) !== clienteFiltro)
        return false;
      const d = e.data_inicio ?? e.created_at?.slice(0, 10) ?? null;
      if (d) {
        if (dataIni && d < dataIni) return false;
        if (dataFim && d > dataFim) return false;
      }
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
          case "data":
            av = a.data_inicio ?? a.created_at ?? "";
            bv = b.data_inicio ?? b.created_at ?? "";
            break;
        }
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return arr;
  }, [emprestimos, busca, clienteFiltro, dataIni, dataFim, sortKey, sortDir, seqMap]);

  const total = filtrados.length;
  const inicio = (pagina - 1) * porPagina;
  const paginados = filtrados.slice(inicio, inicio + porPagina);

  const handleSort = (k: ContratoSortKey) => {
    if (sortKey === k) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
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
      {/* Filtros */}
      <div className="rounded-lg border bg-card p-3 space-y-2">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={busca}
              onChange={(e) => {
                setBusca(e.target.value);
                setPagina(1);
              }}
              placeholder="Buscar por contrato ou cliente..."
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
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <span className="text-xs text-muted-foreground sm:w-16">Período:</span>
          <Input
            type="date"
            value={dataIni}
            onChange={(e) => {
              setDataIni(e.target.value);
              setPagina(1);
            }}
            className="h-9 sm:w-[160px]"
          />
          <Input
            type="date"
            value={dataFim}
            onChange={(e) => {
              setDataFim(e.target.value);
              setPagina(1);
            }}
            className="h-9 sm:w-[160px]"
          />
          {(dataIni || dataFim || busca || clienteFiltro !== "todos") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setDataIni("");
                setDataFim("");
                setBusca("");
                setClienteFiltro("todos");
                setPagina(1);
              }}
            >
              Limpar filtros
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            disabled={isLoading || filtrados.length === 0}
            className="sm:ml-auto"
          >
            <Download className="h-4 w-4" />
            Exportar CSV
          </Button>
        </div>
      </div>

      {/* Tabela */}
      <div className="rounded-lg border bg-card overflow-hidden">
        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : filtrados.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FileText className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm font-medium">Nenhum contrato encontrado</p>
            <p className="text-xs text-muted-foreground">
              Ajuste os filtros e tente novamente.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
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
                      label="Data"
                      col="data"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <th className="px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginados.map((e) => (
                    <tr
                      key={String(e.id)}
                      className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-3 py-2.5 font-mono text-xs font-semibold text-primary">
                        {codigoOf(e.id)}
                      </td>
                      <td className="px-3 py-2.5">
                        {e.cliente_nome ?? "—"}
                      </td>
                      <td className="px-3 py-2.5 font-medium">
                        {fmtBRL(e.valor_principal)}
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground">
                        {e.taxa_juros}%
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground">
                        {e.numero_parcelas}x
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">
                        {fmtDate(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null)}
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            setContratoPdf({
                              id: e.id,
                              codigo: codigoOf(e.id),
                            })
                          }
                          className="h-8"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">PDF</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
// TAB INADIMPLÊNCIA
// ============================================================
type InadimplenciaSortKey = "contrato" | "cliente" | "valor" | "vencimento" | "atraso";

function InadimplenciaTab() {
  const [busca, setBusca] = useState("");
  const [clienteFiltro, setClienteFiltro] = useState("todos");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState<PageSize>(10);
  const [sortKey, setSortKey] = useState<InadimplenciaSortKey | null>("atraso");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const parQ = useQuery({
    queryKey: ["relatorios", "parcelas"],
    queryFn: () => listParcelas(),
  });
  const cliQ = useQuery({
    queryKey: ["relatorios", "clientes"],
    queryFn: () => listClientes(),
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

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = atrasadas.filter((p) => {
      if (clienteFiltro !== "todos" && String(p.cliente_id) !== clienteFiltro)
        return false;
      if (q) {
        const codigo = (p.contrato_codigo ?? "").toLowerCase();
        const nome = (p.cliente_nome ?? "").toLowerCase();
        if (!codigo.includes(q) && !nome.includes(q)) return false;
      }
      return true;
    });

    arr = [...arr].sort((a, b) => {
      let av: string | number = "";
      let bv: string | number = "";
      switch (sortKey) {
        case "contrato":
          av = a.contrato_codigo;
          bv = b.contrato_codigo;
          break;
        case "cliente":
          av = a.cliente_nome ?? "";
          bv = b.cliente_nome ?? "";
          break;
        case "valor":
          av = a.valor_parcela;
          bv = b.valor_parcela;
          break;
        case "vencimento":
        case "atraso":
        default:
          av = a.data_vencimento ?? "";
          bv = b.data_vencimento ?? "";
          break;
      }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [atrasadas, busca, clienteFiltro, sortKey, sortDir]);

  const total = filtrados.length;
  const inicio = (pagina - 1) * porPagina;
  const paginados = filtrados.slice(inicio, inicio + porPagina);

  const totalAtrasado = useMemo(
    () => filtrados.reduce((s, p) => s + p.valor_parcela, 0),
    [filtrados],
  );
  const clientesAtingidos = useMemo(
    () => new Set(filtrados.map((p) => String(p.cliente_id))).size,
    [filtrados],
  );

  const handleSort = (k: InadimplenciaSortKey) => {
    if (sortKey === k) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(k);
      setSortDir("asc");
    }
  };

  const handleExport = () => {
    exportToCsv(
      `inadimplencia-${todayIso()}.csv`,
      filtrados.map((p) => ({
        contrato: p.contrato_codigo,
        cliente: p.cliente_nome ?? "—",
        parcela: `${p.numero_parcela}/${p.parcelas_total}`,
        vencimento: fmtDate(p.data_vencimento),
        valor: p.valor_parcela.toFixed(2).replace(".", ","),
        atraso: p.data_vencimento
          ? Math.floor(
              (Date.now() - new Date(p.data_vencimento + "T00:00:00").getTime()) /
                86400000,
            )
          : 0,
      })),
      [
        { key: "contrato", label: "Contrato" },
        { key: "cliente", label: "Cliente" },
        { key: "parcela", label: "Parcela" },
        { key: "vencimento", label: "Vencimento" },
        { key: "valor", label: "Valor (R$)" },
        { key: "atraso", label: "Dias em atraso" },
      ],
    );
  };

  const diasAtraso = (iso: string | null) => {
    if (!iso) return 0;
    const d = new Date(iso + "T00:00:00").getTime();
    const today = new Date(hoje + "T00:00:00").getTime();
    return Math.floor((today - d) / 86400000);
  };

  const isLoading = parQ.isLoading || cliQ.isLoading;

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <KpiBox
          label="Parcelas em Atraso"
          value={String(filtrados.length)}
          icon={<AlertCircle className="h-4 w-4" />}
          tone="destructive"
        />
        <KpiBox
          label="Valor Total Atrasado"
          value={fmtBRL(totalAtrasado)}
          icon={<DollarSign className="h-4 w-4" />}
          tone="warning"
        />
        <KpiBox
          label="Clientes Inadimplentes"
          value={String(clientesAtingidos)}
          icon={<Receipt className="h-4 w-4" />}
          tone="info"
        />
      </div>

      {/* Filtros */}
      <div className="rounded-lg border bg-card p-3 flex flex-col sm:flex-row gap-2 sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value);
              setPagina(1);
            }}
            placeholder="Buscar por contrato ou cliente..."
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
          Exportar CSV
        </Button>
      </div>

      {/* Tabela */}
      <div className="rounded-lg border bg-card overflow-hidden">
        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : filtrados.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Check className="h-10 w-10 text-success mb-2" />
            <p className="text-sm font-medium">Nenhuma parcela em atraso 🎉</p>
            <p className="text-xs text-muted-foreground">
              Tudo em dia neste filtro.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 border-b">
                  <tr>
                    <SortHeader<InadimplenciaSortKey>
                      label="Contrato"
                      col="contrato"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<InadimplenciaSortKey>
                      label="Cliente"
                      col="cliente"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <th className="px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground">
                      Parcela
                    </th>
                    <SortHeader<InadimplenciaSortKey>
                      label="Vencimento"
                      col="vencimento"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<InadimplenciaSortKey>
                      label="Valor"
                      col="valor"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                    <SortHeader<InadimplenciaSortKey>
                      label="Atraso"
                      col="atraso"
                      current={sortKey}
                      dir={sortDir}
                      onClick={handleSort}
                    />
                  </tr>
                </thead>
                <tbody>
                  {paginados.map((p) => {
                    const dias = diasAtraso(p.data_vencimento);
                    return (
                      <tr
                        key={String(p.id)}
                        className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-3 py-2.5 font-mono text-xs font-semibold text-primary">
                          {p.contrato_codigo}
                        </td>
                        <td className="px-3 py-2.5">{p.cliente_nome ?? "—"}</td>
                        <td className="px-3 py-2.5 text-muted-foreground">
                          {p.numero_parcela}/{p.parcelas_total}
                        </td>
                        <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">
                          {fmtDate(p.data_vencimento)}
                        </td>
                        <td className="px-3 py-2.5 font-medium">
                          {fmtBRL(p.valor_parcela)}
                        </td>
                        <td className="px-3 py-2.5">
                          <Badge
                            className={cn(
                              "border",
                              dias > 30
                                ? "bg-destructive/15 text-destructive border-destructive/30"
                                : dias > 7
                                  ? "bg-warning/15 text-warning border-warning/30"
                                  : "bg-info/15 text-info border-info/30",
                            )}
                            variant="outline"
                          >
                            {dias} {dias === 1 ? "dia" : "dias"}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
