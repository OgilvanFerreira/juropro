import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Plus,
  FileText,
  Search,
  Loader2,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  Pencil,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import { NovoEmprestimoDialog } from "@/components/emprestimos/NovoEmprestimoDialog";
import {
  deleteEmprestimo,
  getEmprestimo,
  listEmprestimos,
  type EmprestimoFull,
  type EmprestimoListItem,
} from "@/integrations/external-supabase/emprestimos.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contratos")({
  head: () => ({
    meta: [{ title: "Contratos — JuroPro" }],
  }),
  component: ContratosPage,
});

const fmtBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const fmtDate = (iso: string | null) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};

function statusBadgeClass(status: string | null) {
  switch ((status ?? "").toLowerCase()) {
    case "ativo":
      return "bg-success/15 text-success border-success/30";
    case "quitado":
    case "pago":
      return "bg-info/15 text-info border-info/30";
    case "atrasado":
      return "bg-destructive/15 text-destructive border-destructive/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

type SortKey =
  | "id"
  | "cliente"
  | "principal"
  | "taxa"
  | "parcelas"
  | "data_inicio"
  | "status";
type SortDir = "asc" | "desc";

function ContratosPage() {
  const [novoOpen, setNovoOpen] = useState(false);
  const [busca, setBusca] = useState("");
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [emprestimoEditando, setEmprestimoEditando] =
    useState<EmprestimoFull | null>(null);
  const [loadingEditId, setLoadingEditId] = useState<string | number | null>(
    null,
  );
  const [emprestimoParaExcluir, setEmprestimoParaExcluir] =
    useState<EmprestimoListItem | null>(null);

  const queryClient = useQueryClient();
  const listFn = useServerFn(listEmprestimos);
  const getFn = useServerFn(getEmprestimo);
  const deleteFn = useServerFn(deleteEmprestimo);

  const query = useQuery({
    queryKey: ["emprestimos", "list"],
    queryFn: () => listFn(),
  });

  const lista = query.data?.data ?? [];

  const handleEditar = async (id: string | number) => {
    setLoadingEditId(id);
    try {
      const res = await getFn({ data: { id } });
      if (!res.data) {
        toast.error(res.error ?? "Empréstimo não encontrado.");
        return;
      }
      setEmprestimoEditando(res.data);
      setNovoOpen(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao carregar.");
    } finally {
      setLoadingEditId(null);
    }
  };

  const handleDialogChange = (next: boolean) => {
    setNovoOpen(next);
    if (!next) {
      setEmprestimoEditando(null);
      query.refetch();
    }
  };

  const deleteMutation = useMutation({
    mutationFn: (id: string | number) => deleteFn({ data: { id } }),
    onSuccess: (result) => {
      if (!result.ok) {
        toast.error(result.error ?? "Erro ao excluir empréstimo.");
        return;
      }
      toast.success("Empréstimo excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["emprestimos", "list"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      setEmprestimoParaExcluir(null);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    },
  });

  const handleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    }
  };

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    const base = !q
      ? lista
      : lista.filter((e) => {
          return (
            (e.cliente_nome ?? "").toLowerCase().includes(q) ||
            String(e.id).toLowerCase().includes(q) ||
            (e.status ?? "").toLowerCase().includes(q)
          );
        });

    if (!sortKey) return base;

    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (e: EmprestimoListItem): string | number => {
      switch (sortKey) {
        case "id":
          return String(e.id).toLowerCase();
        case "cliente":
          return (e.cliente_nome ?? "").toLowerCase();
        case "principal":
          return e.valor_principal;
        case "taxa":
          return e.taxa_juros;
        case "parcelas":
          return e.parcelas_total > 0 ? e.parcelas_pagas / e.parcelas_total : 0;
        case "data_inicio":
          return e.data_inicio ? new Date(e.data_inicio).getTime() : 0;
        case "status":
          return (e.status ?? "").toLowerCase();
        default:
          return 0;
      }
    };

    return [...base].sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);
      const aEmpty = av === "" || av === 0;
      const bEmpty = bv === "" || bv === 0;
      if (aEmpty && !bEmpty) return 1;
      if (!aEmpty && bEmpty) return -1;
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [lista, busca, sortKey, sortDir]);

  const totais = useMemo(() => {
    return lista.reduce(
      (acc, e) => {
        acc.principal += e.valor_principal;
        acc.aReceber += e.total_a_receber;
        acc.recebido += e.total_pago;
        if ((e.status ?? "").toLowerCase() === "ativo") acc.ativos += 1;
        return acc;
      },
      { principal: 0, aReceber: 0, recebido: 0, ativos: 0 },
    );
  }, [lista]);

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column)
      return <ArrowUpDown className="h-3.5 w-3.5 opacity-50" />;
    return sortDir === "asc" ? (
      <ArrowUp className="h-3.5 w-3.5" />
    ) : (
      <ArrowDown className="h-3.5 w-3.5" />
    );
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-foreground" />
              <h2 className="text-sm font-medium text-muted-foreground">Contratos</h2>
            </div>
            <Button
              onClick={() => setNovoOpen(true)}
              className="bg-success text-success-foreground shadow-sm hover:bg-success/90"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Novo Empréstimo</span>
            </Button>
          </header>

          <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Contratos
              </h1>
              <p className="text-sm text-muted-foreground">
                Acompanhe todos os empréstimos cadastrados na operação.
              </p>
            </div>

            {/* KPIs simples */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <KpiBox label="Total de Contratos" value={String(lista.length)} />
              <KpiBox label="Ativos" value={String(totais.ativos)} tone="success" />
              <KpiBox label="A Receber" value={fmtBRL(totais.aReceber)} tone="warning" />
              <KpiBox label="Recebido" value={fmtBRL(totais.recebido)} tone="info" />
            </div>

            {/* Busca */}
            <div className="flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Buscar por cliente, ID ou status..."
                  className="h-11 pl-9"
                />
              </div>

              {/* Conteúdo */}
              {query.isLoading ? (
                <div className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Carregando contratos...
                </div>
              ) : query.isError || query.data?.error ? (
                <div className="flex flex-col items-center gap-2 py-12 text-sm text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  {query.data?.error ?? "Erro ao carregar contratos."}
                </div>
              ) : filtrados.length === 0 ? (
                <EmptyState onNovo={() => setNovoOpen(true)} hasFilter={busca.length > 0} />
              ) : (
                <>
                  {/* DESKTOP TABLE */}
                  <div className="hidden overflow-hidden rounded-md border md:block">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                        <tr>
                          <th className="px-3 py-2 text-left">
                            <button
                              type="button"
                              onClick={() => handleSort("id")}
                              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                            >
                              ID <SortIcon column="id" />
                            </button>
                          </th>
                          <th className="px-3 py-2 text-left">
                            <button
                              type="button"
                              onClick={() => handleSort("cliente")}
                              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                            >
                              Cliente <SortIcon column="cliente" />
                            </button>
                          </th>
                          <th className="px-3 py-2 text-right">
                            <button
                              type="button"
                              onClick={() => handleSort("principal")}
                              className="inline-flex items-center gap-1 hover:text-foreground transition-colors ml-auto"
                            >
                              Principal <SortIcon column="principal" />
                            </button>
                          </th>
                          <th className="px-3 py-2 text-right">
                            <button
                              type="button"
                              onClick={() => handleSort("taxa")}
                              className="inline-flex items-center gap-1 hover:text-foreground transition-colors ml-auto"
                            >
                              Taxa <SortIcon column="taxa" />
                            </button>
                          </th>
                          <th className="px-3 py-2 text-center">
                            <button
                              type="button"
                              onClick={() => handleSort("parcelas")}
                              className="inline-flex items-center gap-1 hover:text-foreground transition-colors mx-auto"
                            >
                              Parcelas <SortIcon column="parcelas" />
                            </button>
                          </th>
                          <th className="px-3 py-2 text-left">
                            <button
                              type="button"
                              onClick={() => handleSort("data_inicio")}
                              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                            >
                              Início <SortIcon column="data_inicio" />
                            </button>
                          </th>
                          <th className="px-3 py-2 text-center">
                            <button
                              type="button"
                              onClick={() => handleSort("status")}
                              className="inline-flex items-center gap-1 hover:text-foreground transition-colors mx-auto"
                            >
                              Status <SortIcon column="status" />
                            </button>
                          </th>
                          <th className="px-3 py-2 text-right">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtrados.map((e) => (
                          <RowDesktop
                            key={String(e.id)}
                            item={e}
                            onEdit={() => handleEditar(e.id)}
                            onDelete={() => setEmprestimoParaExcluir(e)}
                            isLoadingEdit={loadingEditId === e.id}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* MOBILE CARDS */}
                  <div className="space-y-3 md:hidden">
                    {filtrados.map((e) => (
                      <CardMobile
                        key={String(e.id)}
                        item={e}
                        onEdit={() => handleEditar(e.id)}
                        onDelete={() => setEmprestimoParaExcluir(e)}
                        isLoadingEdit={loadingEditId === e.id}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </main>
        </div>
      </div>
      <NovoEmprestimoDialog
        open={novoOpen}
        onOpenChange={handleDialogChange}
        emprestimo={emprestimoEditando}
      />

      <AlertDialog
        open={!!emprestimoParaExcluir}
        onOpenChange={(o) => !o && setEmprestimoParaExcluir(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir empréstimo?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação removerá o empréstimo
              {emprestimoParaExcluir?.cliente_nome
                ? ` de ${emprestimoParaExcluir.cliente_nome}`
                : ""}{" "}
              e todas as suas parcelas. Esta operação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteMutation.isPending}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={deleteMutation.isPending}
              onClick={(e) => {
                e.preventDefault();
                if (emprestimoParaExcluir) {
                  deleteMutation.mutate(emprestimoParaExcluir.id);
                }
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Excluindo...
                </>
              ) : (
                "Excluir"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  );
}

function KpiBox({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "success" | "warning" | "info";
}) {
  const toneClass =
    tone === "success"
      ? "text-success"
      : tone === "warning"
        ? "text-warning"
        : tone === "info"
          ? "text-info"
          : "text-foreground";
  return (
    <div className="rounded-lg border bg-card p-3 shadow-sm">
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className={cn("truncate text-base font-bold", toneClass)}>{value}</p>
    </div>
  );
}

function RowDesktop({
  item,
  onEdit,
  onDelete,
  isLoadingEdit,
}: {
  item: EmprestimoListItem;
  onEdit: () => void;
  onDelete: () => void;
  isLoadingEdit: boolean;
}) {
  const progresso =
    item.parcelas_total > 0
      ? Math.round((item.parcelas_pagas / item.parcelas_total) * 100)
      : 0;
  return (
    <tr className="border-t hover:bg-muted/30">
      <td className="px-3 py-3 font-mono text-xs text-muted-foreground">
        #{String(item.id).slice(0, 8)}
      </td>
      <td className="px-3 py-3 font-medium text-foreground">
        {item.cliente_nome ?? "—"}
      </td>
      <td className="px-3 py-3 text-right">{fmtBRL(item.valor_principal)}</td>
      <td className="px-3 py-3 text-right text-muted-foreground">
        {item.taxa_juros}% {item.tipo_juros === "composto" ? "comp." : "simp."}
      </td>
      <td className="px-3 py-3 text-center">
        <span className="font-medium">{item.parcelas_pagas}</span>
        <span className="text-muted-foreground">/{item.parcelas_total}</span>
        <span className="ml-1 text-xs text-muted-foreground">({progresso}%)</span>
      </td>
      <td className="px-3 py-3 text-left text-muted-foreground">
        {fmtDate(item.data_inicio)}
      </td>
      <td className="px-3 py-3 text-center">
        <Badge
          variant="outline"
          className={cn("capitalize", statusBadgeClass(item.status))}
        >
          {item.status ?? "—"}
        </Badge>
      </td>
      <td className="px-3 py-3 text-right">
        <div className="flex items-center justify-end gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={onEdit}
            disabled={isLoadingEdit}
            aria-label="Editar empréstimo"
          >
            {isLoadingEdit ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Pencil className="h-4 w-4" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={onDelete}
            aria-label="Excluir empréstimo"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
}

function CardMobile({
  item,
  onEdit,
  onDelete,
  isLoadingEdit,
}: {
  item: EmprestimoListItem;
  onEdit: () => void;
  onDelete: () => void;
  isLoadingEdit: boolean;
}) {
  const progresso =
    item.parcelas_total > 0
      ? Math.round((item.parcelas_pagas / item.parcelas_total) * 100)
      : 0;
  return (
    <div className="rounded-lg border bg-background p-4 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {item.cliente_nome ?? "—"}
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            #{String(item.id).slice(0, 8)}
          </p>
        </div>
        <Badge
          variant="outline"
          className={cn("capitalize", statusBadgeClass(item.status))}
        >
          {item.status ?? "—"}
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="text-muted-foreground">Principal</p>
          <p className="font-semibold text-foreground">{fmtBRL(item.valor_principal)}</p>
        </div>
        <div>
          <p className="text-muted-foreground">A receber</p>
          <p className="font-semibold text-warning">{fmtBRL(item.total_a_receber)}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Parcelas</p>
          <p className="font-semibold text-foreground">
            {item.parcelas_pagas}/{item.parcelas_total} ({progresso}%)
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Início</p>
          <p className="font-semibold text-foreground">{fmtDate(item.data_inicio)}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-end gap-2 border-t pt-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 gap-1"
          onClick={onEdit}
          disabled={isLoadingEdit}
        >
          {isLoadingEdit ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Pencil className="h-3.5 w-3.5" />
          )}
          Editar
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 gap-1 text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={onDelete}
        >
          <Trash2 className="h-3.5 w-3.5" />
          Excluir
        </Button>
      </div>
    </div>
  );
}

function EmptyState({ onNovo, hasFilter }: { onNovo: () => void; hasFilter: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <FileText className="h-7 w-7" />
      </div>
      <div className="space-y-1">
        <p className="text-base font-semibold text-foreground">
          {hasFilter ? "Nenhum contrato encontrado" : "Nenhum contrato cadastrado"}
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          {hasFilter
            ? "Tente ajustar a busca para encontrar o contrato desejado."
            : "Comece cadastrando o primeiro empréstimo da operação."}
        </p>
      </div>
      {!hasFilter && (
        <Button
          onClick={onNovo}
          className="bg-success text-success-foreground hover:bg-success/90"
        >
          <Plus className="h-4 w-4" />
          Novo Empréstimo
        </Button>
      )}
    </div>
  );
}
