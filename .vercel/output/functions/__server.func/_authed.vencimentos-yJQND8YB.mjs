import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { a as useQueryClient, u as useQuery, b as useMutation } from "./_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./_ssr/useServerFn-DL2oePlL.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { u as useAdminName, S as SidebarProvider, A as AppSidebar, a as SidebarTrigger } from "./_ssr/AppSidebar-Ds599ZcL.mjs";
import { B as Button } from "./_ssr/use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./_ssr/input-DUQ65Lx-.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./_ssr/dialog-C-pLuHIW.mjs";
import { L as Label } from "./_ssr/label-BOY-CzWM.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./_ssr/select-Z7vlNdU9.mjs";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./_ssr/alert-dialog-Bml6JMKQ.mjs";
import { T as TablePagination } from "./_ssr/table-pagination-BpSGPBj2.mjs";
import { b as baixaParcela, e as estornoParcela, l as listParcelas } from "./_ssr/parcelas.functions-hTfPimaB.mjs";
import { u as useAuth, a as Route$8, c as cn } from "./_ssr/router-DtZwCPIN.mjs";
import "./_ssr/index.mjs";
import "./_libs/seroval.mjs";
import { e as CalendarClock, j as TrendingUp, T as TriangleAlert, k as CircleCheck, l as Search, b as LoaderCircle, C as CircleAlert, m as Undo2, n as ArrowUpDown, o as ArrowUp, p as ArrowDown, g as Check } from "./_libs/lucide-react.mjs";
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
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_libs/radix-ui__react-alert-dialog.mjs";
import "./_ssr/createSsrRpc-C2cGivNr.mjs";
import "./_ssr/auth-guard-RhM8Bjcl.mjs";
import "./_ssr/createMiddleware-BvN2ghIY.mjs";
import "./_libs/zod.mjs";
import "./_libs/tailwind-merge.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
const fmtBRL = (v) => Number(v).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const fmtDate = (iso) => {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return "—";
  return `${d}/${m}/${y}`;
};
const todayISO = () => {
  const d = /* @__PURE__ */ new Date();
  d.setHours(0, 0, 0, 0);
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return `${y}-${mo}-${da}`;
};
function computeStatus(p) {
  if (p.status === "pago" || p.status === "paga") return "pago";
  const today = todayISO();
  if (!p.data_vencimento) return "avencer";
  if (p.data_vencimento < today) return "atrasado";
  if (p.data_vencimento === today) return "hoje";
  return "avencer";
}
const STATUS_STYLES = {
  pago: {
    label: "Recebido",
    cls: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    dot: "bg-emerald-500"
  },
  atrasado: {
    label: "Atrasado",
    cls: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
    dot: "bg-red-500"
  },
  hoje: {
    label: "Vence Hoje",
    cls: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    dot: "bg-amber-500"
  },
  avencer: {
    label: "A Vencer",
    cls: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    dot: "bg-blue-500"
  }
};
function VencimentosPage() {
  const {
    user,
    loading: authLoading
  } = useAuth();
  const authReady = !authLoading && !!user;
  const queryClient = useQueryClient();
  const listFn = useServerFn(listParcelas);
  const searchParams = Route$8.useSearch();
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listFn(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const {
    name: adminName
  } = useAdminName();
  const [busca, setBusca] = reactExports.useState("");
  const [filtroStatus, setFiltroStatus] = reactExports.useState(searchParams.status ?? "todos");
  const [sortKey, setSortKey] = reactExports.useState("data_vencimento");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(10);
  const [modalParcela, setModalParcela] = reactExports.useState(null);
  const [estornoParcelaState, setEstornoParcelaState] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (searchParams.status) {
      setFiltroStatus(searchParams.status);
      setPagina(1);
    }
  }, [searchParams.status]);
  const processadas = reactExports.useMemo(() => {
    return (data?.data ?? []).map((p) => ({
      ...p,
      statusCalc: computeStatus(p)
    }));
  }, [data]);
  const filtradas = reactExports.useMemo(() => {
    const termo = busca.trim().toLowerCase();
    let base = processadas;
    if (filtroStatus !== "todos") {
      base = base.filter((p) => p.statusCalc === filtroStatus);
    }
    if (termo) {
      base = base.filter((p) => (p.cliente_nome ?? "").toLowerCase().includes(termo) || p.contrato_codigo.toLowerCase().includes(termo));
    }
    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (p) => {
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
  const handleSort = (key) => {
    if (sortKey === key) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPagina(1);
  };
  const kpis = reactExports.useMemo(() => {
    const today = todayISO();
    const ano = today.slice(0, 4);
    const mes = today.slice(5, 7);
    const noMes = (iso) => iso != null && iso.startsWith(`${ano}-${mes}`);
    const aReceber = processadas.filter((p) => p.statusCalc !== "pago" && noMes(p.data_vencimento)).reduce((s, p) => s + p.valor_parcela, 0);
    const vencendoHoje = processadas.filter((p) => p.statusCalc === "hoje").reduce((s, p) => s + p.valor_parcela, 0);
    const atrasadas = processadas.filter((p) => p.statusCalc === "atrasado").length;
    const recebidasMes = processadas.filter((p) => p.statusCalc === "pago" && noMes(p.data_pagamento)).length;
    return {
      aReceber,
      vencendoHoje,
      atrasadas,
      recebidasMes
    };
  }, [processadas]);
  const footer = reactExports.useMemo(() => {
    const pend = processadas.filter((p) => p.statusCalc !== "pago");
    const pago = processadas.filter((p) => p.statusCalc === "pago");
    return {
      emAberto: pend.reduce((s, p) => s + p.valor_parcela, 0),
      minimoTotal: pend.reduce((s, p) => s + p.valor_minimo, 0),
      totalPago: pago.reduce((s, p) => s + (p.valor_pago ?? 0), 0)
    };
  }, [processadas]);
  const baixaMutation = useMutation({
    mutationFn: (input) => baixaParcela({
      data: input
    }),
    onSuccess: (res) => {
      if (!res.ok) {
        toast.error(res.error ?? "Falha ao registrar baixa.");
        return;
      }
      toast.success("Baixa registrada com sucesso!");
      setModalParcela(null);
      queryClient.invalidateQueries({
        queryKey: ["parcelas"]
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard"]
      });
      queryClient.invalidateQueries({
        queryKey: ["emprestimos"]
      });
    },
    onError: (e) => {
      toast.error(e instanceof Error ? e.message : "Erro inesperado.");
    }
  });
  const estornoMutation = useMutation({
    mutationFn: (input) => estornoParcela({
      data: input
    }),
    onSuccess: (res) => {
      if (!res.ok) {
        toast.error(res.error ?? "Falha ao estornar pagamento.");
        return;
      }
      toast.success("Pagamento estornado com sucesso!");
      setEstornoParcelaState(null);
      queryClient.invalidateQueries({
        queryKey: ["parcelas"]
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard"]
      });
      queryClient.invalidateQueries({
        queryKey: ["emprestimos"]
      });
    },
    onError: (e) => {
      toast.error(e instanceof Error ? e.message : "Erro inesperado.");
    }
  });
  const buildWhatsAppLink = (p) => {
    const tel = (p.cliente_telefone ?? "").replace(/\D/g, "");
    if (!tel) return null;
    const nomeCli = p.cliente_nome ?? "Cliente";
    const venc = fmtDate(p.data_vencimento);
    const parcelaStr = `${p.numero_parcela}/${p.parcelas_total || p.numero_parcela}`;
    const msg = `Olá ${nomeCli}, lembramos que sua parcela ${parcelaStr} do contrato ${p.contrato_codigo} no valor de ${fmtBRL(p.valor_parcela)} vence em ${venc}. Qualquer dúvida, estamos à disposição.

Atenciosamente, ${adminName} - JuroPro.`;
    return `https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-x-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold text-foreground", children: "Vencimentos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-3 md:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "A Receber (Mês)", value: fmtBRL(kpis.aReceber), icon: TrendingUp, accent: "info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Vencendo Hoje", value: fmtBRL(kpis.vencendoHoje), icon: CalendarClock, accent: "warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Atrasadas", value: String(kpis.atrasadas), icon: TriangleAlert, accent: "destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Recebidas (Mês)", value: String(kpis.recebidasMes), icon: CircleCheck, accent: "success" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: busca, onChange: (e) => {
                setBusca(e.target.value);
                setPagina(1);
              }, placeholder: "Buscar por cliente ou contrato...", className: "pl-9" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filtroStatus, onValueChange: (v) => {
              setFiltroStatus(v);
              setPagina(1);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "sm:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filtrar status" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "todos", children: "Todos os status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "atrasado", children: "Atrasadas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hoje", children: "Vence hoje" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "avencer", children: "A vencer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pago", children: "Recebidas" })
              ] })
            ] })
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center rounded-xl border border-border bg-card p-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Carregando parcelas..." })
          ] }) : isError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-8 w-8 text-destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error instanceof Error ? error.message : "Erro ao carregar parcelas." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => refetch(), children: "Tentar novamente" })
          ] }) : data?.error ?? null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-8 w-8 text-destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: data?.error })
          ] }) : filtradas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border bg-card p-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "mx-auto mb-3 h-10 w-10 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 text-base font-semibold text-foreground", children: "Nenhuma parcela encontrada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: busca || filtroStatus !== "todos" ? "Tente ajustar os filtros." : "Quando criar contratos, as parcelas aparecerão aqui." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-hidden rounded-xl border border-border bg-card md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "cliente_nome", current: sortKey, dir: sortDir, onSort: handleSort, children: "Cliente" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "contrato_codigo", current: sortKey, dir: sortDir, onSort: handleSort, children: "Contrato" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "numero_parcela", current: sortKey, dir: sortDir, onSort: handleSort, children: "Parcela" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "data_vencimento", current: sortKey, dir: sortDir, onSort: handleSort, children: "Vencimento" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "valor_parcela", current: sortKey, dir: sortDir, onSort: handleSort, children: "Valor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "valor_minimo", current: sortKey, dir: sortDir, onSort: handleSort, children: "Mínimo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "statusCalc", current: sortKey, dir: sortDir, onSort: handleSort, children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "data_pagamento", current: sortKey, dir: sortDir, onSort: handleSort, children: "Pagamento" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "valor_pago", current: sortKey, dir: sortDir, onSort: handleSort, children: "Valor Pago" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Ações" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginadas.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(RowDesktop, { item: p, onBaixa: () => setModalParcela(p), onEstorno: () => setEstornoParcelaState(p), buildWhatsAppLink }, String(p.id))) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 md:hidden", children: paginadas.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(CardMobile, { item: p, onBaixa: () => setModalParcela(p), onEstorno: () => setEstornoParcelaState(p), buildWhatsAppLink }, String(p.id))) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TablePagination, { page: paginaAtual, pageSize: porPagina, totalItems: filtradas.length, onPageChange: (p) => setPagina(p), onPageSizeChange: (s) => {
              setPorPagina(s);
              setPagina(1);
            }, itemLabel: "parcelas" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FooterBox, { label: "Em Aberto", value: fmtBRL(footer.emAberto), tone: "info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FooterBox, { label: "Mínimo Total (Juros)", value: fmtBRL(footer.minimoTotal), tone: "warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FooterBox, { label: "Total Pago", value: fmtBRL(footer.totalPago), tone: "success" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BaixaDialog, { parcela: modalParcela, onClose: () => setModalParcela(null), onConfirm: (payload) => modalParcela && baixaMutation.mutate({
      id: modalParcela.id,
      data_pagamento: payload.data_pagamento,
      valor_pago: payload.valor_pago
    }), isLoading: baixaMutation.isPending }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: !!estornoParcelaState, onOpenChange: (open) => {
      if (!open && !estornoMutation.isPending) setEstornoParcelaState(null);
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-5 w-5 text-amber-600" }),
          "Estornar Pagamento"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "Deseja estornar este pagamento? A parcela voltará ao status",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pendente" }),
          " e o valor pago será zerado.",
          estornoParcelaState && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 block rounded-md bg-muted/50 p-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: estornoParcelaState.cliente_nome ?? "Cliente" }),
            " •",
            " ",
            estornoParcelaState.contrato_codigo,
            " • Parcela",
            " ",
            estornoParcelaState.numero_parcela,
            "/",
            estornoParcelaState.parcelas_total || estornoParcelaState.numero_parcela,
            " — ",
            fmtBRL(estornoParcelaState.valor_pago ?? estornoParcelaState.valor_parcela)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: estornoMutation.isPending, children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { disabled: estornoMutation.isPending, onClick: (e) => {
          e.preventDefault();
          if (estornoParcelaState) {
            estornoMutation.mutate({
              id: estornoParcelaState.id
            });
          }
        }, className: "bg-amber-600 hover:bg-amber-700", children: estornoMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Estornando..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "mr-2 h-4 w-4" }),
          "Confirmar Estorno"
        ] }) })
      ] })
    ] }) })
  ] });
}
function Th({
  children,
  sortKey,
  current,
  dir,
  onSort
}) {
  const active = current === sortKey;
  const Icon = !active ? ArrowUpDown : dir === "asc" ? ArrowUp : ArrowDown;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => onSort(sortKey), className: cn("inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide transition-colors", active ? "text-primary" : "text-muted-foreground hover:text-foreground"), children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" })
  ] }) });
}
function StatusBadge({
  status
}) {
  const s = STATUS_STYLES[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold", s.cls), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", s.dot) }),
    s.label
  ] });
}
function WhatsAppIcon({
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 32 32", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.8 5.5 6.3 10 6.3 15.6C6.3 17.4 6.8 19.2 7.7 20.8L6.2 26L11.5 24.5C13 25.3 14.7 25.8 16.4 25.8C21.9 25.8 26.4 21.3 26.4 15.7C26.5 13 25.4 10.4 23.5 8.5ZM16.4 24C14.9 24 13.4 23.6 12.1 22.8L11.8 22.6L8.6 23.5L9.5 20.4L9.3 20C8.4 18.7 7.9 17.2 7.9 15.6C7.9 10.9 11.7 7.1 16.4 7.1C18.7 7.1 20.8 8 22.4 9.6C24 11.2 24.9 13.3 24.9 15.6C24.9 20.4 21.1 24 16.4 24ZM21.1 17.8C20.8 17.6 19.4 16.9 19.1 16.8C18.8 16.7 18.6 16.6 18.4 16.9C18.2 17.2 17.7 17.8 17.5 18C17.3 18.2 17.1 18.3 16.8 18.1C16.5 18 15.5 17.6 14.3 16.6C13.4 15.8 12.8 14.8 12.6 14.5C12.4 14.2 12.6 14 12.8 13.8L13.2 13.3C13.3 13.2 13.4 13 13.5 12.8C13.6 12.6 13.5 12.5 13.5 12.3C13.4 12.1 12.8 10.7 12.5 10.1C12.3 9.6 12 9.6 11.8 9.6H11.3C11.1 9.6 10.8 9.7 10.5 10C10.2 10.3 9.5 11 9.5 12.4C9.5 13.8 10.5 15.1 10.7 15.4C10.9 15.7 12.8 18.6 15.7 19.8C16.4 20.1 17 20.3 17.4 20.5C18.1 20.7 18.8 20.7 19.3 20.6C19.9 20.5 21.1 19.9 21.4 19.2C21.7 18.5 21.7 17.9 21.6 17.8C21.5 17.8 21.3 17.9 21.1 17.8Z" }) });
}
function RowActions({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink,
  variant = "desktop"
}) {
  const pago = item.statusCalc === "pago";
  const wppLink = buildWhatsAppLink(item);
  const isMobile = variant === "mobile";
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full grid-cols-2 gap-2", children: [
      wppLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: wppLink, target: "_blank", rel: "noopener noreferrer", "aria-label": "Enviar WhatsApp", className: "inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
        "WhatsApp"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", disabled: true, className: "h-9 gap-1.5 opacity-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
        "Sem telefone"
      ] }),
      pago ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: onEstorno, "aria-label": "Estornar pagamento", className: "h-9 gap-1.5 border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-900 dark:text-amber-300 dark:hover:bg-amber-950", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-4 w-4" }),
        "Estornar"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: onBaixa, className: "h-9 gap-1.5 bg-emerald-600 text-white hover:bg-emerald-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
        "Receber"
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
    wppLink ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: wppLink, target: "_blank", rel: "noopener noreferrer", "aria-label": "Enviar WhatsApp", className: "inline-flex h-8 w-8 items-center justify-center rounded-md text-emerald-600 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", disabled: true, "aria-label": "Cliente sem telefone", className: "h-8 w-8 opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }) }),
    pago ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: onEstorno, "aria-label": "Estornar pagamento", title: "Estornar pagamento", className: "h-8 w-8 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-4 w-4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: onBaixa, "aria-label": "Confirmar pagamento", className: "h-8 w-8 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  ] });
}
function RowDesktop({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-b-0 hover:bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium text-foreground", children: item.cliente_nome ?? "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground", children: item.contrato_codigo }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-muted-foreground", children: [
      item.numero_parcela,
      "/",
      item.parcelas_total || item.numero_parcela
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground", children: fmtDate(item.data_vencimento) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-semibold text-foreground", children: fmtBRL(item.valor_parcela) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-amber-600", children: fmtBRL(item.valor_minimo) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: item.statusCalc }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground", children: fmtDate(item.data_pagamento) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-emerald-600", children: item.valor_pago != null ? fmtBRL(item.valor_pago) : "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RowActions, { item, onBaixa, onEstorno, buildWhatsAppLink }) })
  ] });
}
function CardMobile({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold text-foreground", children: item.cliente_nome ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          item.contrato_codigo,
          " • Parcela ",
          item.numero_parcela,
          "/",
          item.parcelas_total || item.numero_parcela
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: item.statusCalc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Vencimento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtDate(item.data_vencimento) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Valor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtBRL(item.valor_parcela) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Mínimo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-amber-600", children: fmtBRL(item.valor_minimo) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Pagamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: item.valor_pago != null ? fmtBRL(item.valor_pago) : "—" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center justify-end border-t border-border pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RowActions, { item, onBaixa, onEstorno, buildWhatsAppLink, variant: "mobile" }) })
  ] });
}
function KpiBox({
  label,
  value,
  icon: Icon,
  accent
}) {
  const accentStyles = {
    info: "border-t-blue-500 text-blue-600",
    warning: "border-t-amber-500 text-amber-600",
    destructive: "border-t-red-500 text-red-600",
    success: "border-t-emerald-500 text-emerald-600"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border border-border border-t-4 bg-card p-4 shadow-sm", accentStyles[accent]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-extrabold text-foreground", children: value })
  ] });
}
function FooterBox({
  label,
  value,
  tone
}) {
  const toneStyles = {
    info: "text-blue-600",
    warning: "text-amber-600",
    success: "text-emerald-600"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-2xl font-extrabold", toneStyles[tone]), children: value })
  ] });
}
function BaixaDialog({
  parcela,
  onClose,
  onConfirm,
  isLoading
}) {
  const [dataPag, setDataPag] = reactExports.useState(todayISO());
  const [valorPag, setValorPag] = reactExports.useState("0");
  reactExports.useEffect(() => {
    if (parcela) {
      setDataPag(todayISO());
      setValorPag(parcela.valor_parcela.toFixed(2));
    }
  }, [parcela]);
  const valorNum = parseFloat(valorPag) || 0;
  const diferenca = parcela ? parcela.valor_parcela - valorNum : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!parcela, onOpenChange: (open) => {
    if (!open) onClose();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-emerald-600" }),
        "Confirmar Baixa"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
        parcela?.cliente_nome ?? "Cliente",
        " • Parcela ",
        parcela?.numero_parcela,
        "/",
        parcela?.parcelas_total || parcela?.numero_parcela
      ] })
    ] }),
    parcela && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Contrato", value: parcela.contrato_codigo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Parcela", value: `${parcela.numero_parcela}/${parcela.parcelas_total || parcela.numero_parcela}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Vencimento", value: fmtDate(parcela.data_vencimento) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Valor", value: fmtBRL(parcela.valor_parcela) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 border-t border-border pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: "Mínimo (Juros)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-amber-600", children: fmtBRL(parcela.valor_minimo) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "data-pagamento", children: "Data do Pagamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "data-pagamento", type: "date", value: dataPag, onChange: (e) => setDataPag(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "valor-pago", children: "Valor Pago (R$)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "valor-pago", type: "number", step: "0.01", min: "0", value: valorPag, onChange: (e) => setValorPag(e.target.value) }),
          diferenca > 5e-3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-xs text-amber-600", children: [
            "⚠️ Pagamento parcial — diferença de ",
            fmtBRL(diferenca)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, disabled: isLoading, children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onConfirm({
          data_pagamento: dataPag,
          valor_pago: valorNum
        }), disabled: isLoading || !dataPag || valorNum < 0, className: "bg-emerald-600 hover:bg-emerald-700", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Salvando..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-2 h-4 w-4" }),
          "Confirmar Recebimento"
        ] }) })
      ] })
    ] })
  ] }) });
}
function Info({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: value })
  ] });
}
export {
  VencimentosPage as component
};
