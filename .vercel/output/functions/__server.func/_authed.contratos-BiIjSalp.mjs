import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { a as useQueryClient, u as useQuery, b as useMutation } from "./_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./_ssr/useServerFn-DL2oePlL.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { S as SidebarProvider, A as AppSidebar, a as SidebarTrigger } from "./_ssr/AppSidebar-Ds599ZcL.mjs";
import { B as Button } from "./_ssr/use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./_ssr/input-DUQ65Lx-.mjs";
import { B as Badge } from "./_ssr/badge-BWZRlRgY.mjs";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./_ssr/alert-dialog-Bml6JMKQ.mjs";
import { T as TablePagination } from "./_ssr/table-pagination-BpSGPBj2.mjs";
import { N as NovoEmprestimoDialog } from "./_ssr/NovoEmprestimoDialog-CoutrFVJ.mjs";
import { g as getEmprestimo, d as deleteEmprestimo, l as listEmprestimos } from "./_ssr/emprestimos.functions-BLtY37RZ.mjs";
import { u as useAuth, c as cn } from "./_ssr/router-DtZwCPIN.mjs";
import "./_ssr/index.mjs";
import "./_libs/seroval.mjs";
import { F as FileText, P as Plus, k as CircleCheck, r as Clock, j as TrendingUp, l as Search, b as LoaderCircle, C as CircleAlert, n as ArrowUpDown, o as ArrowUp, p as ArrowDown, G as Pencil, J as Trash2 } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-separator.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/radix-ui__react-dialog.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/react-remove-scroll.mjs";
import "tslib";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/radix-ui__react-tooltip.mjs";
import "./_libs/radix-ui__react-popper.mjs";
import "./_libs/floating-ui__react-dom.mjs";
import "./_libs/floating-ui__dom.mjs";
import "./_libs/floating-ui__core.mjs";
import "./_libs/floating-ui__utils.mjs";
import "./_libs/radix-ui__react-arrow.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./_libs/radix-ui__react-avatar.mjs";
import "./_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_ssr/use-profile-CdBNxwsV.mjs";
import "./_ssr/client-mNarFJdi.mjs";
import "./_libs/supabase__supabase-js.mjs";
import "./_libs/supabase__postgrest-js.mjs";
import "./_libs/supabase__realtime-js.mjs";
import "./_libs/supabase__phoenix.mjs";
import "./_libs/supabase__storage-js.mjs";
import "./_libs/iceberg-js.mjs";
import "./_libs/supabase__auth-js.mjs";
import "./_libs/supabase__functions-js.mjs";
import "./_libs/radix-ui__react-alert-dialog.mjs";
import "./_ssr/select-Z7vlNdU9.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_ssr/dialog-C-pLuHIW.mjs";
import "./_ssr/label-BOY-CzWM.mjs";
import "./_libs/radix-ui__react-label.mjs";
import "./_ssr/masks-DaNm02lZ.mjs";
import "./_ssr/createSsrRpc-C2cGivNr.mjs";
import "./_ssr/auth-guard-RhM8Bjcl.mjs";
import "./_ssr/createMiddleware-BvN2ghIY.mjs";
import "./_libs/zod.mjs";
import "./_libs/tailwind-merge.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
const fmtBRL = (v) => v.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const fmtDate = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};
function statusBadgeClass(status) {
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
function ContratosPage() {
  const [novoOpen, setNovoOpen] = reactExports.useState(false);
  const [busca, setBusca] = reactExports.useState("");
  const [sortKey, setSortKey] = reactExports.useState(null);
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(10);
  const [emprestimoEditando, setEmprestimoEditando] = reactExports.useState(null);
  const [loadingEditId, setLoadingEditId] = reactExports.useState(null);
  const [emprestimoParaExcluir, setEmprestimoParaExcluir] = reactExports.useState(null);
  const queryClient = useQueryClient();
  const listFn = useServerFn(listEmprestimos);
  const getFn = useServerFn(getEmprestimo);
  const deleteFn = useServerFn(deleteEmprestimo);
  const {
    user,
    loading: authLoading
  } = useAuth();
  const authReady = !authLoading && !!user;
  const query = useQuery({
    queryKey: ["emprestimos", "list"],
    queryFn: () => listFn(),
    enabled: authReady
  });
  const listaRaw = query.data?.data ?? [];
  const lista = reactExports.useMemo(() => {
    const total = listaRaw.length;
    return listaRaw.map((e, idx) => ({
      ...e,
      seqId: total - idx
    }));
  }, [listaRaw]);
  const handleEditar = async (id) => {
    setLoadingEditId(id);
    try {
      const res = await getFn({
        data: {
          id
        }
      });
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
  const handleDialogChange = (next) => {
    setNovoOpen(next);
    if (!next) {
      setEmprestimoEditando(null);
      query.refetch();
    }
  };
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteFn({
      data: {
        id
      }
    }),
    onSuccess: (result) => {
      if (!result.ok) {
        toast.error(result.error ?? "Erro ao excluir empréstimo.");
        return;
      }
      toast.success("Empréstimo excluído com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["emprestimos", "list"]
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard", "kpis"]
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard", "charts"]
      });
      setEmprestimoParaExcluir(null);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    }
  });
  const handleSort = (key) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    }
  };
  const filtrados = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    const base = !q ? lista : lista.filter((e) => {
      const seqStr = `#${String(e.seqId).padStart(3, "0")}`;
      return (e.cliente_nome ?? "").toLowerCase().includes(q) || seqStr.toLowerCase().includes(q) || String(e.seqId).includes(q) || String(e.id).toLowerCase().includes(q) || (e.status ?? "").toLowerCase().includes(q);
    });
    if (!sortKey) return base;
    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (e) => {
      switch (sortKey) {
        case "id":
          return e.seqId;
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
  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const paginados = filtrados.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina);
  const totais = reactExports.useMemo(() => {
    return lista.reduce((acc, e) => {
      acc.principal += e.valor_principal;
      acc.aReceber += e.total_a_receber;
      acc.recebido += e.total_pago;
      if ((e.status ?? "").toLowerCase() === "ativo") acc.ativos += 1;
      return acc;
    }, {
      principal: 0,
      aReceber: 0,
      recebido: 0,
      ativos: 0
    });
  }, [lista]);
  const SortIcon = ({
    column
  }) => {
    if (sortKey !== column) return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-3.5 w-3.5 opacity-50" });
    return sortDir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3.5 w-3.5" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-x-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold text-foreground truncate", children: "Contratos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: "Acompanhe todos os empréstimos cadastrados" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setNovoOpen(true), size: "sm", className: "bg-success text-success-foreground shadow-sm hover:bg-success/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Novo Empréstimo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-3 md:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Total de Contratos", value: String(lista.length), icon: FileText, accent: "info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Ativos", value: String(totais.ativos), icon: CircleCheck, accent: "success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "A Receber", value: fmtBRL(totais.aReceber), icon: Clock, accent: "warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Recebido", value: fmtBRL(totais.recebido), icon: TrendingUp, accent: "info" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: busca, onChange: (e) => setBusca(e.target.value), placeholder: "Buscar por cliente, ID ou status...", className: "h-11 pl-9" })
            ] }),
            query.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              "Carregando contratos..."
            ] }) : query.isError || query.data?.error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 py-12 text-sm text-destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5" }),
              query.data?.error ?? "Erro ao carregar contratos."
            ] }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onNovo: () => setNovoOpen(true), hasFilter: busca.length > 0 }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-hidden rounded-md border md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("id"), className: "inline-flex items-center gap-1 hover:text-foreground transition-colors", children: [
                    "ID ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "id" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("cliente"), className: "inline-flex items-center gap-1 hover:text-foreground transition-colors", children: [
                    "Cliente ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "cliente" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("principal"), className: "inline-flex items-center gap-1 hover:text-foreground transition-colors ml-auto", children: [
                    "Principal ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "principal" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("taxa"), className: "inline-flex items-center gap-1 hover:text-foreground transition-colors ml-auto", children: [
                    "Taxa ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "taxa" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("parcelas"), className: "inline-flex items-center gap-1 hover:text-foreground transition-colors mx-auto", children: [
                    "Parcelas ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "parcelas" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("data_inicio"), className: "inline-flex items-center gap-1 hover:text-foreground transition-colors", children: [
                    "Início ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "data_inicio" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("status"), className: "inline-flex items-center gap-1 hover:text-foreground transition-colors mx-auto", children: [
                    "Status ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "status" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: "Ações" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginados.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(RowDesktop, { item: e, seqId: e.seqId, onEdit: () => handleEditar(e.id), onDelete: () => setEmprestimoParaExcluir(e), isLoadingEdit: loadingEditId === e.id }, String(e.id))) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 md:hidden", children: paginados.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(CardMobile, { item: e, seqId: e.seqId, onEdit: () => handleEditar(e.id), onDelete: () => setEmprestimoParaExcluir(e), isLoadingEdit: loadingEditId === e.id }, String(e.id))) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TablePagination, { page: paginaAtual, pageSize: porPagina, totalItems: filtrados.length, onPageChange: (p) => setPagina(p), onPageSizeChange: (s) => {
                setPorPagina(s);
                setPagina(1);
              }, itemLabel: "contratos" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NovoEmprestimoDialog, { open: novoOpen, onOpenChange: handleDialogChange, emprestimo: emprestimoEditando }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: !!emprestimoParaExcluir, onOpenChange: (o) => !o && setEmprestimoParaExcluir(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Excluir empréstimo?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "Esta ação removerá o empréstimo",
          emprestimoParaExcluir?.cliente_nome ? ` de ${emprestimoParaExcluir.cliente_nome}` : "",
          " ",
          "e todas as suas parcelas. Esta operação não pode ser desfeita."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: deleteMutation.isPending, children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { disabled: deleteMutation.isPending, onClick: (e) => {
          e.preventDefault();
          if (emprestimoParaExcluir) {
            deleteMutation.mutate(emprestimoParaExcluir.id);
          }
        }, className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", children: deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Excluindo..."
        ] }) : "Excluir" })
      ] })
    ] }) })
  ] });
}
function KpiBox({
  label,
  value,
  icon: Icon,
  accent
}) {
  const accentStyles = {
    info: "border-t-info text-info",
    warning: "border-t-warning text-warning",
    destructive: "border-t-destructive text-destructive",
    success: "border-t-success text-success"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border border-border border-t-4 bg-card p-3 sm:p-4 shadow-sm", accentStyles[accent]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground leading-tight", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-lg sm:text-xl font-extrabold text-foreground", children: value })
  ] });
}
function RowDesktop({
  item,
  seqId,
  onEdit,
  onDelete,
  isLoadingEdit
}) {
  const progresso = item.parcelas_total > 0 ? Math.round(item.parcelas_pagas / item.parcelas_total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t hover:bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-3 font-mono text-xs text-muted-foreground", children: [
      "#",
      String(seqId).padStart(3, "0")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 font-medium text-foreground", children: item.cliente_nome ?? "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right", children: fmtBRL(item.valor_principal) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-3 text-right text-muted-foreground", children: [
      item.taxa_juros,
      "% ",
      item.tipo_juros === "composto" ? "comp." : "simp."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.parcelas_pagas }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "/",
        item.parcelas_total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs text-muted-foreground", children: [
        "(",
        progresso,
        "%)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-left text-muted-foreground", children: fmtDate(item.data_inicio) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("capitalize", statusBadgeClass(item.status)), children: item.status ?? "—" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-8 w-8 text-muted-foreground hover:text-foreground", onClick: onEdit, disabled: isLoadingEdit, "aria-label": "Editar empréstimo", children: isLoadingEdit ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-8 w-8 text-muted-foreground hover:text-destructive", onClick: onDelete, "aria-label": "Excluir empréstimo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
    ] }) })
  ] });
}
function CardMobile({
  item,
  seqId,
  onEdit,
  onDelete,
  isLoadingEdit
}) {
  const progresso = item.parcelas_total > 0 ? Math.round(item.parcelas_pagas / item.parcelas_total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-background p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold text-foreground", children: item.cliente_nome ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[11px] text-muted-foreground", children: [
          "#",
          String(seqId).padStart(3, "0")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("capitalize", statusBadgeClass(item.status)), children: item.status ?? "—" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Principal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtBRL(item.valor_principal) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "A receber" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-warning", children: fmtBRL(item.total_a_receber) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Parcelas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground", children: [
          item.parcelas_pagas,
          "/",
          item.parcelas_total,
          " (",
          progresso,
          "%)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Início" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtDate(item.data_inicio) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-end gap-2 border-t pt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", className: "h-8 gap-1", onClick: onEdit, disabled: isLoadingEdit, children: [
        isLoadingEdit ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }),
        "Editar"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", className: "h-8 gap-1 text-destructive hover:bg-destructive/10 hover:text-destructive", onClick: onDelete, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
        "Excluir"
      ] })
    ] })
  ] });
}
function EmptyState({
  onNovo,
  hasFilter
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 py-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-7 w-7" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-foreground", children: hasFilter ? "Nenhum contrato encontrado" : "Nenhum contrato cadastrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm text-muted-foreground", children: hasFilter ? "Tente ajustar a busca para encontrar o contrato desejado." : "Comece cadastrando o primeiro empréstimo da operação." })
    ] }),
    !hasFilter && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onNovo, className: "bg-success text-success-foreground hover:bg-success/90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      "Novo Empréstimo"
    ] })
  ] });
}
export {
  ContratosPage as component
};
