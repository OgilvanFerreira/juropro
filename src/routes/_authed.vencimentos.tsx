import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Search,
  Loader2,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  Check,
  CalendarClock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Undo2,
} from "lucide-react";
import { toast } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { TablePagination, type PageSize } from "@/components/ui/table-pagination";
import { useAdminName } from "@/hooks/use-admin-name";
import {
  baixaParcela,
  estornoParcela,
  listParcelas,
  type ParcelaListItem,
} from "@/integrations/external-supabase/parcelas.functions";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

type VencimentosSearch = {
  status?: StatusCalc | "todos";
  contrato?: string;
};

const ALLOWED_STATUS: ReadonlyArray<StatusCalc | "todos"> = [
  "todos",
  "pago",
  "atrasado",
  "hoje",
  "avencer",
];

export const Route = createFileRoute("/_authed/vencimentos")({
  head: () => ({
    meta: [{ title: "Vencimentos — JuroPro" }],
  }),
  validateSearch: (search: Record<string, unknown>): VencimentosSearch => {
    const raw = search.status;
    const out: VencimentosSearch = {};
    if (typeof raw === "string" && (ALLOWED_STATUS as readonly string[]).includes(raw)) {
      out.status = raw as StatusCalc | "todos";
    }
    if (typeof search.contrato === "string" && search.contrato.trim()) {
      out.contrato = search.contrato.trim();
    }
    return out;
  },
  component: VencimentosPage,
});

const fmtBRL = (v: number) =>
  Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const fmtDate = (iso: string | null) => {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return "—";
  return `${d}/${m}/${y}`;
};

const todayISO = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return `${y}-${mo}-${da}`;
};

type StatusCalc = "pago" | "atrasado" | "hoje" | "avencer";

function computeStatus(p: ParcelaListItem): StatusCalc {
  if (p.status === "pago" || p.status === "paga") return "pago";
  const today = todayISO();
  if (!p.data_vencimento) return "avencer";
  if (p.data_vencimento < today) return "atrasado";
  if (p.data_vencimento === today) return "hoje";
  return "avencer";
}

const STATUS_STYLES: Record<StatusCalc, { label: string; cls: string; dot: string }> = {
  pago: {
    label: "Recebido",
    cls: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  atrasado: {
    label: "Atrasado",
    cls: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
    dot: "bg-red-500",
  },
  hoje: {
    label: "Vence Hoje",
    cls: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  avencer: {
    label: "A Vencer",
    cls: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    dot: "bg-blue-500",
  },
};

type SortKey =
  | "cliente_nome"
  | "contrato_codigo"
  | "numero_parcela"
  | "data_vencimento"
  | "valor_parcela"
  | "valor_minimo"
  | "statusCalc"
  | "data_pagamento"
  | "valor_pago";

type SortDir = "asc" | "desc";

type ParcelaProcessada = ParcelaListItem & { statusCalc: StatusCalc };

function VencimentosPage() {
  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const queryClient = useQueryClient();
  const listFn = useServerFn(listParcelas);
  const searchParams = Route.useSearch();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listFn(),
    staleTime: 60_000,
    placeholderData: (prev) => prev,
    enabled: authReady,
  });

  const { name: adminName } = useAdminName();

  const [busca, setBusca] = useState(searchParams.contrato ?? "");
  const [filtroStatus, setFiltroStatus] = useState<StatusCalc | "todos">(
    searchParams.status ?? "todos",
  );
  const [sortKey, setSortKey] = useState<SortKey>("data_vencimento");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState<PageSize>(10);
  const [modalParcela, setModalParcela] = useState<ParcelaProcessada | null>(null);
  const [estornoParcelaState, setEstornoParcelaState] = useState<ParcelaProcessada | null>(null);

  // Sincroniza filtro quando o search param muda (ex: vindo do KPI Dashboard)
  useEffect(() => {
    if (searchParams.status) {
      setFiltroStatus(searchParams.status);
      setPagina(1);
    }
  }, [searchParams.status]);

  useEffect(() => {
    if (searchParams.contrato) {
      setBusca(searchParams.contrato);
      setPagina(1);
    }
  }, [searchParams.contrato]);

  const processadas: ParcelaProcessada[] = useMemo(() => {
    return (data?.data ?? []).map((p) => ({ ...p, statusCalc: computeStatus(p) }));
  }, [data]);

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    let base = processadas;
    if (filtroStatus !== "todos") {
      base = base.filter((p) => p.statusCalc === filtroStatus);
    }
    if (termo) {
      base = base.filter(
        (p) =>
          (p.cliente_nome ?? "").toLowerCase().includes(termo) ||
          p.contrato_codigo.toLowerCase().includes(termo),
      );
    }

    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (p: ParcelaProcessada): string | number => {
      switch (sortKey) {
        case "cliente_nome":
          return (p.cliente_nome ?? "").toLowerCase();
        case "contrato_codigo":
          return p.contrato_codigo.toLowerCase();
        case "numero_parcela":
          return p.numero_parcela;
        case "data_vencimento":
          return p.data_vencimento ? new Date(p.data_vencimento).getTime() : 0;
        case "valor_parcela":
          return p.valor_parcela;
        case "valor_minimo":
          return p.valor_minimo;
        case "statusCalc":
          return p.statusCalc;
        case "data_pagamento":
          return p.data_pagamento ? new Date(p.data_pagamento).getTime() : 0;
        case "valor_pago":
          return p.valor_pago ?? 0;
        default:
          return 0;
      }
    };

    return [...base].sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [processadas, busca, filtroStatus, sortKey, sortDir]);

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / porPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const paginadas = filtradas.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPagina(1);
  };

  // KPIs topo
  const kpis = useMemo(() => {
    const today = todayISO();
    const ano = today.slice(0, 4);
    const mes = today.slice(5, 7);
    const noMes = (iso: string | null) => iso != null && iso.startsWith(`${ano}-${mes}`);

    const aReceber = processadas
      .filter((p) => p.statusCalc !== "pago" && noMes(p.data_vencimento))
      .reduce((s, p) => s + p.valor_parcela, 0);
    const vencendoHoje = processadas
      .filter((p) => p.statusCalc === "hoje")
      .reduce((s, p) => s + p.valor_parcela, 0);
    const atrasadas = processadas.filter((p) => p.statusCalc === "atrasado").length;
    const recebidasMes = processadas.filter(
      (p) => p.statusCalc === "pago" && noMes(p.data_pagamento),
    ).length;
    return { aReceber, vencendoHoje, atrasadas, recebidasMes };
  }, [processadas]);

  // Footer
  const footer = useMemo(() => {
    const pend = processadas.filter((p) => p.statusCalc !== "pago");
    const pago = processadas.filter((p) => p.statusCalc === "pago");
    return {
      emAberto: pend.reduce((s, p) => s + p.valor_parcela, 0),
      minimoTotal: pend.reduce((s, p) => s + p.valor_minimo, 0),
      totalPago: pago.reduce((s, p) => s + (p.valor_pago ?? 0), 0),
    };
  }, [processadas]);

  const baixaMutation = useMutation({
    mutationFn: (input: { id: string | number; data_pagamento: string; valor_pago: number }) =>
      baixaParcela({ data: input }),
    onSuccess: (res) => {
      if (!res.ok) {
        toast.error(res.error ?? "Falha ao registrar baixa.");
        return;
      }
      toast.success("Baixa registrada com sucesso!");
      setModalParcela(null);
      queryClient.invalidateQueries({ queryKey: ["parcelas"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["emprestimos"] });
    },
    onError: (e) => {
      toast.error(e instanceof Error ? e.message : "Erro inesperado.");
    },
  });

  const estornoMutation = useMutation({
    mutationFn: (input: { id: string | number }) => estornoParcela({ data: input }),
    onSuccess: (res) => {
      if (!res.ok) {
        toast.error(res.error ?? "Falha ao estornar pagamento.");
        return;
      }
      toast.success("Pagamento estornado com sucesso!");
      setEstornoParcelaState(null);
      queryClient.invalidateQueries({ queryKey: ["parcelas"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["emprestimos"] });
    },
    onError: (e) => {
      toast.error(e instanceof Error ? e.message : "Erro inesperado.");
    },
  });

  const buildWhatsAppLink = (p: ParcelaProcessada) => {
    const tel = (p.cliente_telefone ?? "").replace(/\D/g, "");
    if (!tel) return null;
    const nomeCli = p.cliente_nome ?? "Cliente";
    const venc = fmtDate(p.data_vencimento);
    const parcelaStr = `${p.numero_parcela}/${p.parcelas_total || p.numero_parcela}`;
    const msg =
      `Olá ${nomeCli}, lembramos que sua parcela ${parcelaStr} ` +
      `do contrato ${p.contrato_codigo} no valor de ${fmtBRL(p.valor_parcela)} ` +
      `vence em ${venc}. Qualquer dúvida, estamos à disposição.\n\n` +
      `Atenciosamente, ${adminName} - JuroPro.`;
    return `https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <header className="flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-primary" />
              <h1 className="text-lg font-semibold text-foreground">Vencimentos</h1>
            </div>
          </header>

          <div className="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
            {/* KPIs */}
            <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <KpiBox
                label="A Receber (Mês)"
                value={fmtBRL(kpis.aReceber)}
                icon={TrendingUp}
                accent="info"
              />
              <KpiBox
                label="Vencendo Hoje"
                value={fmtBRL(kpis.vencendoHoje)}
                icon={CalendarClock}
                accent="warning"
              />
              <KpiBox
                label="Atrasadas"
                value={String(kpis.atrasadas)}
                icon={AlertTriangle}
                accent="destructive"
              />
              <KpiBox
                label="Recebidas (Mês)"
                value={String(kpis.recebidasMes)}
                icon={CheckCircle2}
                accent="success"
              />
            </section>

            {/* Filtros */}
            <section className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={busca}
                  onChange={(e) => {
                    setBusca(e.target.value);
                    setPagina(1);
                  }}
                  placeholder="Buscar por cliente ou contrato..."
                  className="pl-9"
                />
              </div>
              <Select
                value={filtroStatus}
                onValueChange={(v: StatusCalc | "todos") => {
                  setFiltroStatus(v);
                  setPagina(1);
                }}
              >
                <SelectTrigger className="sm:w-48">
                  <SelectValue placeholder="Filtrar status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os status</SelectItem>
                  <SelectItem value="atrasado">Atrasadas</SelectItem>
                  <SelectItem value="hoje">Vence hoje</SelectItem>
                  <SelectItem value="avencer">A vencer</SelectItem>
                  <SelectItem value="pago">Recebidas</SelectItem>
                </SelectContent>
              </Select>
            </section>

            {/* Conteúdo */}
            {isLoading ? (
              <div className="flex items-center justify-center rounded-xl border border-border bg-card p-12">
                <Loader2 className="mr-2 h-5 w-5 animate-spin text-primary" />
                <span className="text-sm text-muted-foreground">Carregando parcelas...</span>
              </div>
            ) : isError ? (
              <div className="flex flex-col items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <p className="text-sm text-destructive">
                  {error instanceof Error ? error.message : "Erro ao carregar parcelas."}
                </p>
                <Button variant="outline" onClick={() => refetch()}>
                  Tentar novamente
                </Button>
              </div>
            ) : (data?.error ?? null) ? (
              <div className="flex flex-col items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <p className="text-sm text-destructive">{data?.error}</p>
              </div>
            ) : filtradas.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
                <CalendarClock className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  Nenhuma parcela encontrada
                </h3>
                <p className="text-sm text-muted-foreground">
                  {busca || filtroStatus !== "todos"
                    ? "Tente ajustar os filtros."
                    : "Quando criar contratos, as parcelas aparecerão aqui."}
                </p>
              </div>
            ) : (
              <>
                {/* Tabela desktop */}
                <div className="hidden overflow-hidden rounded-xl border border-border bg-card md:block">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/40">
                        <tr className="border-b border-border">
                          <Th
                            sortKey="cliente_nome"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Cliente
                          </Th>
                          <Th
                            sortKey="contrato_codigo"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Contrato
                          </Th>
                          <Th
                            sortKey="numero_parcela"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Parcela
                          </Th>
                          <Th
                            sortKey="data_vencimento"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Vencimento
                          </Th>
                          <Th
                            sortKey="valor_parcela"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Valor
                          </Th>
                          <Th
                            sortKey="valor_minimo"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Mínimo
                          </Th>
                          <Th
                            sortKey="statusCalc"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Status
                          </Th>
                          <Th
                            sortKey="data_pagamento"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Pagamento
                          </Th>
                          <Th
                            sortKey="valor_pago"
                            current={sortKey}
                            dir={sortDir}
                            onSort={handleSort}
                          >
                            Valor Pago
                          </Th>
                          <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginadas.map((p) => (
                          <RowDesktop
                            key={String(p.id)}
                            item={p}
                            onBaixa={() => setModalParcela(p)}
                            onEstorno={() => setEstornoParcelaState(p)}
                            buildWhatsAppLink={buildWhatsAppLink}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cards mobile */}
                <div className="flex flex-col gap-3 md:hidden">
                  {paginadas.map((p) => (
                    <CardMobile
                      key={String(p.id)}
                      item={p}
                      onBaixa={() => setModalParcela(p)}
                      onEstorno={() => setEstornoParcelaState(p)}
                      buildWhatsAppLink={buildWhatsAppLink}
                    />
                  ))}
                </div>

                {/* Paginação */}
                <TablePagination
                  page={paginaAtual}
                  pageSize={porPagina}
                  totalItems={filtradas.length}
                  onPageChange={(p) => setPagina(p)}
                  onPageSizeChange={(s) => {
                    setPorPagina(s);
                    setPagina(1);
                  }}
                  itemLabel="parcelas"
                />
              </>
            )}

            {/* Footer KPIs */}
            <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <FooterBox label="Em Aberto" value={fmtBRL(footer.emAberto)} tone="info" />
              <FooterBox
                label="Mínimo Total (Juros)"
                value={fmtBRL(footer.minimoTotal)}
                tone="warning"
              />
              <FooterBox label="Total Pago" value={fmtBRL(footer.totalPago)} tone="success" />
            </section>
          </div>
        </main>
      </div>

      {/* Modal Baixa */}
      <BaixaDialog
        parcela={modalParcela}
        onClose={() => setModalParcela(null)}
        onConfirm={(payload) =>
          modalParcela &&
          baixaMutation.mutate({
            id: modalParcela.id,
            data_pagamento: payload.data_pagamento,
            valor_pago: payload.valor_pago,
          })
        }
        isLoading={baixaMutation.isPending}
      />

      {/* Confirmação Estorno */}
      <AlertDialog
        open={!!estornoParcelaState}
        onOpenChange={(open) => {
          if (!open && !estornoMutation.isPending) setEstornoParcelaState(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Undo2 className="h-5 w-5 text-amber-600" />
              Estornar Pagamento
            </AlertDialogTitle>
            <AlertDialogDescription>
              Deseja estornar este pagamento? A parcela voltará ao status <strong>Pendente</strong>{" "}
              e o valor pago será zerado.
              {estornoParcelaState && (
                <span className="mt-3 block rounded-md bg-muted/50 p-2 text-xs">
                  <strong>{estornoParcelaState.cliente_nome ?? "Cliente"}</strong> •{" "}
                  {estornoParcelaState.contrato_codigo} • Parcela{" "}
                  {estornoParcelaState.numero_parcela}/
                  {estornoParcelaState.parcelas_total || estornoParcelaState.numero_parcela}
                  {" — "}
                  {fmtBRL(estornoParcelaState.valor_pago ?? estornoParcelaState.valor_parcela)}
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={estornoMutation.isPending}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              disabled={estornoMutation.isPending}
              onClick={(e) => {
                e.preventDefault();
                if (estornoParcelaState) {
                  estornoMutation.mutate({ id: estornoParcelaState.id });
                }
              }}
              className="bg-amber-600 hover:bg-amber-700"
            >
              {estornoMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Estornando...
                </>
              ) : (
                <>
                  <Undo2 className="mr-2 h-4 w-4" />
                  Confirmar Estorno
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  );
}

// ====== Subcomponents ======

function Th({
  children,
  sortKey,
  current,
  dir,
  onSort,
}: {
  children: React.ReactNode;
  sortKey: SortKey;
  current: SortKey;
  dir: SortDir;
  onSort: (k: SortKey) => void;
}) {
  const active = current === sortKey;
  const Icon = !active ? ArrowUpDown : dir === "asc" ? ArrowUp : ArrowDown;
  return (
    <th className="px-3 py-3 text-left">
      <button
        type="button"
        onClick={() => onSort(sortKey)}
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
          active ? "text-primary" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {children}
        <Icon className="h-3 w-3" />
      </button>
    </th>
  );
}

function StatusBadge({ status }: { status: StatusCalc }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        s.cls,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.8 5.5 6.3 10 6.3 15.6C6.3 17.4 6.8 19.2 7.7 20.8L6.2 26L11.5 24.5C13 25.3 14.7 25.8 16.4 25.8C21.9 25.8 26.4 21.3 26.4 15.7C26.5 13 25.4 10.4 23.5 8.5ZM16.4 24C14.9 24 13.4 23.6 12.1 22.8L11.8 22.6L8.6 23.5L9.5 20.4L9.3 20C8.4 18.7 7.9 17.2 7.9 15.6C7.9 10.9 11.7 7.1 16.4 7.1C18.7 7.1 20.8 8 22.4 9.6C24 11.2 24.9 13.3 24.9 15.6C24.9 20.4 21.1 24 16.4 24ZM21.1 17.8C20.8 17.6 19.4 16.9 19.1 16.8C18.8 16.7 18.6 16.6 18.4 16.9C18.2 17.2 17.7 17.8 17.5 18C17.3 18.2 17.1 18.3 16.8 18.1C16.5 18 15.5 17.6 14.3 16.6C13.4 15.8 12.8 14.8 12.6 14.5C12.4 14.2 12.6 14 12.8 13.8L13.2 13.3C13.3 13.2 13.4 13 13.5 12.8C13.6 12.6 13.5 12.5 13.5 12.3C13.4 12.1 12.8 10.7 12.5 10.1C12.3 9.6 12 9.6 11.8 9.6H11.3C11.1 9.6 10.8 9.7 10.5 10C10.2 10.3 9.5 11 9.5 12.4C9.5 13.8 10.5 15.1 10.7 15.4C10.9 15.7 12.8 18.6 15.7 19.8C16.4 20.1 17 20.3 17.4 20.5C18.1 20.7 18.8 20.7 19.3 20.6C19.9 20.5 21.1 19.9 21.4 19.2C21.7 18.5 21.7 17.9 21.6 17.8C21.5 17.8 21.3 17.9 21.1 17.8Z" />
    </svg>
  );
}

function RowActions({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink,
  variant = "desktop",
}: {
  item: ParcelaProcessada;
  onBaixa: () => void;
  onEstorno: () => void;
  buildWhatsAppLink: (p: ParcelaProcessada) => string | null;
  variant?: "desktop" | "mobile";
}) {
  const pago = item.statusCalc === "pago";
  const wppLink = buildWhatsAppLink(item);
  const isMobile = variant === "mobile";

  if (isMobile) {
    return (
      <div className="grid w-full grid-cols-2 gap-2">
        {wppLink ? (
          <a
            href={wppLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar WhatsApp"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        ) : (
          <Button variant="outline" size="sm" disabled className="h-9 gap-1.5 opacity-40">
            <WhatsAppIcon className="h-4 w-4" />
            Sem telefone
          </Button>
        )}
        {pago ? (
          <Button
            size="sm"
            variant="outline"
            onClick={onEstorno}
            aria-label="Estornar pagamento"
            className="h-9 gap-1.5 border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-900 dark:text-amber-300 dark:hover:bg-amber-950"
          >
            <Undo2 className="h-4 w-4" />
            Estornar
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={onBaixa}
            className="h-9 gap-1.5 bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Check className="h-4 w-4" />
            Receber
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-end gap-1.5">
      {wppLink ? (
        <a
          href={wppLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar WhatsApp"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-emerald-600 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          disabled
          aria-label="Cliente sem telefone"
          className="h-8 w-8 opacity-40"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </Button>
      )}
      {pago ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={onEstorno}
          aria-label="Estornar pagamento"
          title="Estornar pagamento"
          className="h-8 w-8 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950"
        >
          <Undo2 className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={onBaixa}
          aria-label="Confirmar pagamento"
          className="h-8 w-8 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950"
        >
          <Check className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

function RowDesktop({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink,
}: {
  item: ParcelaProcessada;
  onBaixa: () => void;
  onEstorno: () => void;
  buildWhatsAppLink: (p: ParcelaProcessada) => string | null;
}) {
  return (
    <tr className="border-b border-border last:border-b-0 hover:bg-muted/30">
      <td className="px-3 py-2.5 font-medium text-foreground">{item.cliente_nome ?? "—"}</td>
      <td className="px-3 py-2.5 text-muted-foreground">{item.contrato_codigo}</td>
      <td className="px-3 py-2.5 text-muted-foreground">
        {item.numero_parcela}/{item.parcelas_total || item.numero_parcela}
      </td>
      <td className="px-3 py-2.5 text-muted-foreground">{fmtDate(item.data_vencimento)}</td>
      <td className="px-3 py-2.5 font-semibold text-foreground">{fmtBRL(item.valor_parcela)}</td>
      <td className="px-3 py-2.5 text-amber-600">{fmtBRL(item.valor_minimo)}</td>
      <td className="px-3 py-2.5">
        <StatusBadge status={item.statusCalc} />
      </td>
      <td className="px-3 py-2.5 text-muted-foreground">{fmtDate(item.data_pagamento)}</td>
      <td className="px-3 py-2.5 text-emerald-600">
        {item.valor_pago != null ? fmtBRL(item.valor_pago) : "—"}
      </td>
      <td className="px-3 py-2.5">
        <RowActions
          item={item}
          onBaixa={onBaixa}
          onEstorno={onEstorno}
          buildWhatsAppLink={buildWhatsAppLink}
        />
      </td>
    </tr>
  );
}

function CardMobile({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink,
}: {
  item: ParcelaProcessada;
  onBaixa: () => void;
  onEstorno: () => void;
  buildWhatsAppLink: (p: ParcelaProcessada) => string | null;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {item.cliente_nome ?? "—"}
          </p>
          <p className="text-xs text-muted-foreground">
            {item.contrato_codigo} • Parcela {item.numero_parcela}/
            {item.parcelas_total || item.numero_parcela}
          </p>
        </div>
        <StatusBadge status={item.statusCalc} />
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="text-muted-foreground">Vencimento</p>
          <p className="font-semibold text-foreground">{fmtDate(item.data_vencimento)}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Valor</p>
          <p className="font-semibold text-foreground">{fmtBRL(item.valor_parcela)}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Mínimo</p>
          <p className="font-semibold text-amber-600">{fmtBRL(item.valor_minimo)}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Pagamento</p>
          <p className="font-semibold text-foreground">
            {item.valor_pago != null ? fmtBRL(item.valor_pago) : "—"}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end border-t border-border pt-3">
        <RowActions
          item={item}
          onBaixa={onBaixa}
          onEstorno={onEstorno}
          buildWhatsAppLink={buildWhatsAppLink}
          variant="mobile"
        />
      </div>
    </div>
  );
}

function KpiBox({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "info" | "warning" | "destructive" | "success";
}) {
  const accentStyles: Record<string, string> = {
    info: "border-t-blue-500 text-blue-600",
    warning: "border-t-amber-500 text-amber-600",
    destructive: "border-t-red-500 text-red-600",
    success: "border-t-emerald-500 text-emerald-600",
  };
  return (
    <div
      className={cn(
        "rounded-xl border border-border border-t-4 bg-card p-4 shadow-sm",
        accentStyles[accent],
      )}
    >
      <div className="mb-2 flex items-start justify-between">
        <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-xl font-extrabold text-foreground">{value}</p>
    </div>
  );
}

function FooterBox({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "info" | "warning" | "success";
}) {
  const toneStyles: Record<string, string> = {
    info: "text-blue-600",
    warning: "text-amber-600",
    success: "text-emerald-600",
  };
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className={cn("text-2xl font-extrabold", toneStyles[tone])}>{value}</p>
    </div>
  );
}

function BaixaDialog({
  parcela,
  onClose,
  onConfirm,
  isLoading,
}: {
  parcela: ParcelaProcessada | null;
  onClose: () => void;
  onConfirm: (payload: { data_pagamento: string; valor_pago: number }) => void;
  isLoading: boolean;
}) {
  const [dataPag, setDataPag] = useState(todayISO());
  const [valorPag, setValorPag] = useState("0");

  // Sincroniza valores ao abrir
  useEffect(() => {
    if (parcela) {
      setDataPag(todayISO());
      setValorPag(parcela.valor_parcela.toFixed(2));
    }
  }, [parcela]);

  const valorNum = parseFloat(valorPag) || 0;
  const diferenca = parcela ? parcela.valor_parcela - valorNum : 0;

  return (
    <Dialog
      open={!!parcela}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Confirmar Baixa
          </DialogTitle>
          <DialogDescription>
            {parcela?.cliente_nome ?? "Cliente"} • Parcela {parcela?.numero_parcela}/
            {parcela?.parcelas_total || parcela?.numero_parcela}
          </DialogDescription>
        </DialogHeader>

        {parcela && (
          <>
            <div className="rounded-lg bg-muted/40 p-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Info label="Contrato" value={parcela.contrato_codigo} />
                <Info
                  label="Parcela"
                  value={`${parcela.numero_parcela}/${parcela.parcelas_total || parcela.numero_parcela}`}
                />
                <Info label="Vencimento" value={fmtDate(parcela.data_vencimento)} />
                <Info label="Valor" value={fmtBRL(parcela.valor_parcela)} />
              </div>
              <div className="mt-2 border-t border-border pt-2">
                <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                  Mínimo (Juros)
                </p>
                <p className="text-sm font-semibold text-amber-600">
                  {fmtBRL(parcela.valor_minimo)}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="data-pagamento">Data do Pagamento</Label>
                <Input
                  id="data-pagamento"
                  type="date"
                  value={dataPag}
                  onChange={(e) => setDataPag(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="valor-pago">Valor Pago (R$)</Label>
                <Input
                  id="valor-pago"
                  type="number"
                  step="0.01"
                  min="0"
                  value={valorPag}
                  onChange={(e) => setValorPag(e.target.value)}
                />
                {diferenca > 0.005 && (
                  <p className="mt-1.5 text-xs text-amber-600">
                    ⚠️ Pagamento parcial — diferença de {fmtBRL(diferenca)}
                  </p>
                )}
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={onClose} disabled={isLoading}>
                Cancelar
              </Button>
              <Button
                onClick={() =>
                  onConfirm({
                    data_pagamento: dataPag,
                    valor_pago: valorNum,
                  })
                }
                disabled={isLoading || !dataPag || valorNum < 0}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Confirmar Recebimento
                  </>
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
