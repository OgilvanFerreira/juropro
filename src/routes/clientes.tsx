import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Loader2,
  Pencil,
  Search,
  Trash2,
  UserPlus,
  Users as UsersIcon,
  TrendingUp,
  MapPin,
  CalendarClock,
} from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
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
import { NovoClienteDialog } from "@/components/clientes/NovoClienteDialog";
import {
  TablePagination,
  type PageSize,
} from "@/components/ui/table-pagination";
import {
  deleteCliente,
  getCliente,
  listClientes,
  type Cliente,
  type ClienteFull,
} from "@/integrations/external-supabase/clientes.functions";
import { formatCpfCnpj, formatTelefone } from "@/lib/masks";
import { cn } from "@/lib/utils";

const clientesQuery = () =>
  queryOptions({
    queryKey: ["clientes", "list"],
    queryFn: () => listClientes(),
  });

export const Route = createFileRoute("/clientes")({
  validateSearch: (search: Record<string, unknown>) => ({
    novo: search.novo === true || search.novo === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Clientes — JuroPro" },
      {
        name: "description",
        content:
          "Gestão completa da carteira de clientes — cadastro, listagem e busca.",
      },
    ],
  }),
  // Sem loader SSR — query roda só no client (ver AuthGuard).
  component: ClientesPage,
});

function formatDate(value: string | null) {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return "—";
  }
}

function ClientesPage() {
  const clientesQ = useQuery(clientesQuery());
  const data = clientesQ.data ?? { data: [], error: null };
  const { novo } = Route.useSearch();
  const navigate = useNavigate({ from: "/clientes" });
  const queryClient = useQueryClient();
  const deleteClienteFn = useServerFn(deleteCliente);
  const getClienteFn = useServerFn(getCliente);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [clienteParaExcluir, setClienteParaExcluir] = useState<Cliente | null>(
    null,
  );
  const [clienteEditando, setClienteEditando] = useState<ClienteFull | null>(
    null,
  );
  const [loadingEditId, setLoadingEditId] = useState<string | number | null>(
    null,
  );
  type SortKey =
    | "seqId"
    | "nome"
    | "email"
    | "telefone"
    | "cpf_cnpj"
    | "cidade"
    | "created_at";
  type SortDir = "asc" | "desc";
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState<PageSize>(10);

  const handleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    }
  };

  const handleEditar = async (id: string | number) => {
    setLoadingEditId(id);
    try {
      const res = await getClienteFn({ data: { id } });
      if (!res.data) {
        toast.error(res.error ?? "Cliente não encontrado.");
        return;
      }
      setClienteEditando(res.data);
      setOpen(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao carregar cliente.");
    } finally {
      setLoadingEditId(null);
    }
  };

  const handleDialogChange = (next: boolean) => {
    setOpen(next);
    if (!next) setClienteEditando(null);
  };

  useEffect(() => {
    if (novo) {
      setOpen(true);
      navigate({ search: { novo: undefined }, replace: true });
    }
  }, [novo, navigate]);

  const clientes = data.data;
  const hasError = !!data.error;

  const deleteMutation = useMutation({
    mutationFn: (id: string | number) => deleteClienteFn({ data: { id } }),
    onSuccess: (result, _id) => {
      if (!result.ok) {
        toast.error(result.error ?? "Erro ao excluir cliente.");
        return;
      }
      toast.success("Cliente excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["clientes", "list"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      setClienteParaExcluir(null);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    },
  });

  // Atribui ID sequencial estável: #001 = mais antigo. Como a lista vem
  // ordenada por created_at desc, o índice reverso dá a sequência correta.
  const clientesComId = useMemo(() => {
    const total = clientes.length;
    return clientes.map((c, idx) => ({
      ...c,
      seqId: total - idx,
    }));
  }, [clientes]);

  // Filtro em tempo real por Nome ou CPF/CNPJ
  const clientesFiltrados = useMemo(() => {
    const term = search.trim().toLowerCase();
    const termDigits = term.replace(/\D/g, "");
    const filtered = !term
      ? clientesComId
      : clientesComId.filter((c) => {
          const nome = (c.nome ?? "").toLowerCase();
          const cpfDigits = (c.cpf_cnpj ?? "").replace(/\D/g, "");
          const matchNome = nome.includes(term);
          const matchCpf =
            termDigits.length > 0 && cpfDigits.includes(termDigits);
          return matchNome || matchCpf;
        });

    if (!sortKey) return filtered;

    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (c: (typeof filtered)[number]): string | number => {
      switch (sortKey) {
        case "seqId":
          return c.seqId;
        case "created_at":
          return c.created_at ? new Date(c.created_at).getTime() : 0;
        case "cpf_cnpj":
          return (c.cpf_cnpj ?? "").replace(/\D/g, "");
        case "telefone":
          return (c.telefone ?? "").replace(/\D/g, "");
        case "cidade":
          return (c.cidade ?? "").toLowerCase();
        case "email":
          return (c.email ?? "").toLowerCase();
        case "nome":
        default:
          return (c.nome ?? "").toLowerCase();
      }
    };

    return [...filtered].sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);
      // empty values sempre por último
      const aEmpty = av === "" || av === 0;
      const bEmpty = bv === "" || bv === 0;
      if (aEmpty && !bEmpty) return 1;
      if (!aEmpty && bEmpty) return -1;
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [clientesComId, search, sortKey, sortDir]);

  const totalPaginas = Math.max(1, Math.ceil(clientesFiltrados.length / porPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const clientesPaginados = clientesFiltrados.slice(
    (paginaAtual - 1) * porPagina,
    paginaAtual * porPagina,
  );

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column)
      return <ArrowUpDown className="h-3.5 w-3.5 opacity-50" />;
    return sortDir === "asc" ? (
      <ArrowUp className="h-3.5 w-3.5" />
    ) : (
      <ArrowDown className="h-3.5 w-3.5" />
    );
  };

  // KPIs do topo
  const kpis = useMemo(() => {
    const total = clientes.length;
    const now = new Date();
    const ano = now.getFullYear();
    const mes = now.getMonth();
    const novosMes = clientes.filter((c) => {
      if (!c.created_at) return false;
      const d = new Date(c.created_at);
      return d.getFullYear() === ano && d.getMonth() === mes;
    }).length;
    const comCidade = clientes.filter((c) => (c.cidade ?? "").trim() !== "").length;
    const ultimoCadastro = clientes[0]?.created_at ?? null;
    return { total, novosMes, comCidade, ultimoCadastro };
  }, [clientes]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger />
            <div className="flex flex-1 items-center gap-2 min-w-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0">
                <UsersIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base font-semibold text-foreground truncate">
                  Clientes
                </h1>
                <p className="text-[11px] text-muted-foreground truncate">
                  Gestão completa da carteira de clientes
                </p>
              </div>
            </div>
            <Button
              onClick={() => setOpen(true)}
              size="sm"
              className="bg-success text-success-foreground shadow-sm hover:bg-success/90"
            >
              <UserPlus className="h-4 w-4" />
              <span className="hidden sm:inline">Novo Cliente</span>
            </Button>
          </header>

          <div className="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
            {/* KPIs */}
            <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <KpiBox
                label="Total de Clientes"
                value={String(kpis.total)}
                icon={UsersIcon}
                accent="info"
              />
              <KpiBox
                label="Novos no Mês"
                value={String(kpis.novosMes)}
                icon={TrendingUp}
                accent="success"
              />
              <KpiBox
                label="Com Endereço"
                value={String(kpis.comCidade)}
                icon={MapPin}
                accent="warning"
              />
              <KpiBox
                label="Último Cadastro"
                value={kpis.ultimoCadastro ? formatDate(kpis.ultimoCadastro) : "—"}
                icon={CalendarClock}
                accent="info"
              />
            </section>

            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">
                {clientes.length}{" "}
                {clientes.length === 1 ? "cliente cadastrado" : "clientes cadastrados"}
                {search.trim() && (
                  <>
                    {" • "}
                    {clientesFiltrados.length}{" "}
                    {clientesFiltrados.length === 1 ? "resultado" : "resultados"}
                  </>
                )}
              </p>
            </div>

            <Card className="overflow-hidden">
              {hasError ? (
                <div className="p-8 text-center text-sm text-destructive">
                  Erro ao carregar clientes: {data.error}
                </div>
              ) : clientes.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 p-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <UsersIcon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Nenhum cliente cadastrado
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Clique em &quot;Novo Cliente&quot; para começar.
                    </p>
                  </div>
                  <Button
                    onClick={() => setOpen(true)}
                    className="mt-2 bg-success text-success-foreground hover:bg-success/90"
                  >
                    <UserPlus className="h-4 w-4" />
                    Novo Cliente
                  </Button>
                </div>
              ) : (
                <>
                  <div className="border-b bg-muted/30 p-3">
                    <div className="relative max-w-md">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="search"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setPagina(1);
                        }}
                        placeholder="Buscar por nome ou CPF/CNPJ..."
                        className="pl-9"
                      />
                    </div>
                  </div>
                  {clientesFiltrados.length === 0 ? (
                    <div className="p-12 text-center text-sm text-muted-foreground">
                      Nenhum cliente encontrado para &quot;{search}&quot;.
                    </div>
                  ) : (
                    <>
                      {/* Desktop: Tabela */}
                      <div className="hidden md:block">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-20">
                                <button
                                  type="button"
                                  onClick={() => handleSort("seqId")}
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                >
                                  ID <SortIcon column="seqId" />
                                </button>
                              </TableHead>
                              <TableHead>
                                <button
                                  type="button"
                                  onClick={() => handleSort("nome")}
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                >
                                  Nome <SortIcon column="nome" />
                                </button>
                              </TableHead>
                              <TableHead>
                                <button
                                  type="button"
                                  onClick={() => handleSort("email")}
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                >
                                  E-mail <SortIcon column="email" />
                                </button>
                              </TableHead>
                              <TableHead>
                                <button
                                  type="button"
                                  onClick={() => handleSort("telefone")}
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                >
                                  Telefone <SortIcon column="telefone" />
                                </button>
                              </TableHead>
                              <TableHead>
                                <button
                                  type="button"
                                  onClick={() => handleSort("cpf_cnpj")}
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                >
                                  CPF/CNPJ <SortIcon column="cpf_cnpj" />
                                </button>
                              </TableHead>
                              <TableHead>
                                <button
                                  type="button"
                                  onClick={() => handleSort("cidade")}
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                >
                                  Cidade/UF <SortIcon column="cidade" />
                                </button>
                              </TableHead>
                              <TableHead>
                                <button
                                  type="button"
                                  onClick={() => handleSort("created_at")}
                                  className="inline-flex items-center gap-1 hover:text-foreground"
                                >
                                  Cadastrado em <SortIcon column="created_at" />
                                </button>
                              </TableHead>
                              <TableHead className="w-16 text-right">Ações</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {clientesPaginados.map((c) => (
                              <TableRow key={String(c.id)}>
                                <TableCell className="font-mono text-xs text-muted-foreground">
                                  #{String(c.seqId).padStart(3, "0")}
                                </TableCell>
                                <TableCell className="font-medium text-foreground">
                                  {c.nome ?? "—"}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                  {c.email ?? "—"}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                  {formatTelefone(c.telefone)}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                  {formatCpfCnpj(c.cpf_cnpj)}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                  {c.cidade && c.uf
                                    ? `${c.cidade}/${c.uf}`
                                    : c.cidade ?? c.uf ?? "—"}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                  {formatDate(c.created_at)}
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-1">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                                      onClick={() => handleEditar(c.id)}
                                      disabled={loadingEditId === c.id}
                                      aria-label={`Editar cliente ${c.nome ?? ""}`}
                                    >
                                      {loadingEditId === c.id ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                      ) : (
                                        <Pencil className="h-4 w-4" />
                                      )}
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                                      onClick={() => setClienteParaExcluir(c)}
                                      aria-label={`Excluir cliente ${c.nome ?? ""}`}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Mobile: Cards empilhados */}
                      <div className="block divide-y md:hidden">
                        {clientesPaginados.map((c) => (
                          <div key={String(c.id)} className="space-y-3 p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0 flex-1">
                                <div className="flex items-baseline gap-2">
                                  <h3 className="truncate text-base font-semibold text-foreground">
                                    {c.nome ?? "—"}
                                  </h3>
                                  <span className="font-mono text-xs text-muted-foreground">
                                    #{String(c.seqId).padStart(3, "0")}
                                  </span>
                                </div>
                                {c.email && (
                                  <p className="truncate text-xs text-muted-foreground">
                                    {c.email}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <p className="text-muted-foreground">Telefone</p>
                                <p className="font-medium text-foreground">
                                  {formatTelefone(c.telefone) || "—"}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">CPF/CNPJ</p>
                                <p className="font-medium text-foreground">
                                  {formatCpfCnpj(c.cpf_cnpj) || "—"}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Cidade/UF</p>
                                <p className="font-medium text-foreground">
                                  {c.cidade && c.uf
                                    ? `${c.cidade}/${c.uf}`
                                    : c.cidade ?? c.uf ?? "—"}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Cadastrado em</p>
                                <p className="font-medium text-foreground">
                                  {formatDate(c.created_at)}
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-end gap-2 border-t pt-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 text-xs"
                                onClick={() => handleEditar(c.id)}
                                disabled={loadingEditId === c.id}
                              >
                                {loadingEditId === c.id ? (
                                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                ) : (
                                  <Pencil className="h-3.5 w-3.5" />
                                )}
                                Editar
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                                onClick={() => setClienteParaExcluir(c)}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                Excluir
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <TablePagination
                        page={paginaAtual}
                        pageSize={porPagina}
                        totalItems={clientesFiltrados.length}
                        onPageChange={(p) => setPagina(p)}
                        onPageSizeChange={(s) => {
                          setPorPagina(s);
                          setPagina(1);
                        }}
                        itemLabel="clientes"
                      />
                    </>
                  )}
                </>
              )}
            </Card>
          </div>
        </main>
      </div>

        <NovoClienteDialog
          open={open}
          onOpenChange={handleDialogChange}
          cliente={clienteEditando}
        />

        <AlertDialog
          open={clienteParaExcluir !== null}
          onOpenChange={(next) => {
            if (!next && !deleteMutation.isPending) {
              setClienteParaExcluir(null);
            }
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Excluir cliente</AlertDialogTitle>
              <AlertDialogDescription>
                Tem certeza que deseja excluir o cliente{" "}
                <span className="font-semibold text-foreground">
                  {clienteParaExcluir?.nome ?? "—"}
                </span>
                ? Todos os empréstimos e parcelas vinculados a ele serão
                excluídos permanentemente. Esta ação não pode ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={deleteMutation.isPending}>
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => {
                  e.preventDefault();
                  if (clienteParaExcluir) {
                    deleteMutation.mutate(clienteParaExcluir.id);
                  }
                }}
                disabled={deleteMutation.isPending}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                {deleteMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Excluindo...
                  </>
                ) : (
                  "Excluir cliente"
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
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "info" | "warning" | "destructive" | "success";
}) {
  const accentStyles: Record<typeof accent, string> = {
    info: "border-t-info text-info",
    warning: "border-t-warning text-warning",
    destructive: "border-t-destructive text-destructive",
    success: "border-t-success text-success",
  };
  return (
    <div
      className={cn(
        "rounded-xl border border-border border-t-4 bg-card p-3 sm:p-4 shadow-sm",
        accentStyles[accent],
      )}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground leading-tight">
          {label}
        </p>
        <Icon className="h-4 w-4" />
      </div>
      <p className="truncate text-lg sm:text-xl font-extrabold text-foreground">
        {value}
      </p>
    </div>
  );
}
