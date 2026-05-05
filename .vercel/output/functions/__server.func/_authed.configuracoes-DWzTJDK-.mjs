import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { r as readSync, u as utils, w as writeFileSync } from "./_libs/xlsx.mjs";
import { P as Papa } from "./_libs/papaparse.mjs";
import { u as useServerFn } from "./_ssr/useServerFn-DL2oePlL.mjs";
import { a as useQueryClient } from "./_libs/tanstack__react-query.mjs";
import { B as Button, u as useBusinessName, a as useBusinessLogo, b as useBusinessDetails } from "./_ssr/use-business-info-CHcAbxEp.mjs";
import { B as BRAZIL_UFS, C as Card, l as lookupCep } from "./_ssr/cep-CPwan0YP.mjs";
import { R as Root$1, I as Indicator } from "./_libs/radix-ui__react-progress.mjs";
import { u as useAuth, c as cn } from "./_ssr/router-DtZwCPIN.mjs";
import { B as Badge } from "./_ssr/badge-BWZRlRgY.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./_ssr/select-Z7vlNdU9.mjs";
import { c as createSsrRpc } from "./_ssr/createSsrRpc-C2cGivNr.mjs";
import { r as requireAuthForExternal } from "./_ssr/auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./_ssr/index.mjs";
import { S as SidebarProvider, A as AppSidebar, a as SidebarTrigger, u as useAdminName, e as useAdminAvatar, f as Separator } from "./_ssr/AppSidebar-Ds599ZcL.mjs";
import { I as Input } from "./_ssr/input-DUQ65Lx-.mjs";
import { L as Label } from "./_ssr/label-BOY-CzWM.mjs";
import { m as maskTelefone, a as maskCpfCnpj, b as maskCep, c as maskTaxa, T as Textarea } from "./_ssr/masks-DaNm02lZ.mjs";
import { R as Root, T as Thumb } from "./_libs/radix-ui__react-switch.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./_ssr/tabs-DbCelycP.mjs";
import { s as supabase } from "./_ssr/client-mNarFJdi.mjs";
import "./_libs/seroval.mjs";
import { N as Settings, O as User, Q as Building2, V as SlidersHorizontal, Y as Database, Z as Camera, J as Trash2, L as Lock, k as CircleCheck, _ as CircleX, b as LoaderCircle, $ as Save, a0 as Image, a1 as Upload, l as Search, q as MessageCircle, E as EyeOff, a as Eye, a2 as RefreshCw, a3 as Bell, a4 as Palette, a5 as FileSpreadsheet, D as Download, a6 as RefreshCcw, T as TriangleAlert, a7 as Rocket } from "./_libs/lucide-react.mjs";
import { o as objectType, b as arrayType, n as numberType, s as stringType } from "./_libs/zod.mjs";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/supabase__supabase-js.mjs";
import "./_libs/supabase__postgrest-js.mjs";
import "./_libs/supabase__realtime-js.mjs";
import "./_libs/supabase__phoenix.mjs";
import "./_libs/supabase__storage-js.mjs";
import "./_libs/iceberg-js.mjs";
import "./_libs/supabase__auth-js.mjs";
import "tslib";
import "./_libs/supabase__functions-js.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-popper.mjs";
import "./_libs/floating-ui__react-dom.mjs";
import "./_libs/floating-ui__dom.mjs";
import "./_libs/floating-ui__core.mjs";
import "./_libs/floating-ui__utils.mjs";
import "./_libs/radix-ui__react-arrow.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/react-remove-scroll.mjs";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
import "./_ssr/createMiddleware-BvN2ghIY.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
import "./_libs/radix-ui__react-separator.mjs";
import "./_libs/radix-ui__react-dialog.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/radix-ui__react-tooltip.mjs";
import "./_libs/radix-ui__react-avatar.mjs";
import "./_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_ssr/use-profile-CdBNxwsV.mjs";
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-tabs.mjs";
import "./_libs/radix-ui__react-roving-focus.mjs";
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$1,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root$1.displayName;
const linhaSchema = objectType({
  nome_cliente: stringType().trim().min(1).max(200),
  cpf_cnpj: stringType().trim().max(20),
  telefone: stringType().trim().max(30).optional().default(""),
  email: stringType().trim().max(255).optional().default(""),
  contrato_id: stringType().trim().min(1).max(100),
  valor_principal: numberType().nonnegative(),
  taxa_juros: numberType().min(0),
  tipo_juros: stringType().trim().max(40),
  num_parcelas: numberType().int().min(1).max(360),
  periodicidade: stringType().trim().max(40),
  data_inicio: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  num_parcela: numberType().int().min(1),
  data_vencimento: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_parcela: numberType().nonnegative(),
  status_parcela: stringType().trim().max(40),
  data_pagamento: stringType().optional().default(""),
  valor_pago: numberType().nullable().optional()
});
const bulkImportSchema = objectType({
  rows: arrayType(linhaSchema).min(1).max(5e3)
});
const bulkImport = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => bulkImportSchema.parse(input)).handler(createSsrRpc("0b7cf50ce24510d9b81ef047a190dcabab6d0fd54bdef20811a78c2b7252e564"));
const CHUNK_SIZE = 100;
const fmtBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const hojeMidnight = () => {
  const d = /* @__PURE__ */ new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};
function parseDataBR(input) {
  if (input === null || input === void 0 || input === "") return "";
  if (input instanceof Date && !isNaN(input.getTime())) {
    const y = input.getFullYear();
    const m = String(input.getMonth() + 1).padStart(2, "0");
    const d2 = String(input.getDate()).padStart(2, "0");
    return `${y}-${m}-${d2}`;
  }
  const s = String(input).trim();
  const br = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (br) return `${br[3]}-${br[2]}-${br[1]}`;
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  }
  return "";
}
function parseNumber(v) {
  if (v === null || v === void 0 || v === "") return 0;
  if (typeof v === "number") return v;
  const s = String(v).trim().replace(/\./g, "").replace(",", ".");
  const n = Number(s);
  return isNaN(n) ? 0 : n;
}
function parseInt2(v) {
  if (typeof v === "number") return Math.trunc(v);
  const s = String(v ?? "").trim();
  const m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[1]);
  const n = parseInt(s.replace(/\D/g, ""), 10);
  return isNaN(n) ? 0 : n;
}
function parseTotalParcelas(v, fallback = 0) {
  const s = String(v ?? "").trim();
  const m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[2]);
  if (typeof v === "number") return Math.trunc(v);
  const n = parseInt(s.replace(/\D/g, ""), 10);
  return isNaN(n) || n === 0 ? fallback : n;
}
function normalizar(rawRows) {
  const hoje = hojeMidnight();
  return rawRows.map((r, i) => {
    const get = (k) => {
      if (r[k] !== void 0) return r[k];
      const lower = Object.keys(r).find(
        (kk) => kk.toLowerCase().trim() === k.toLowerCase()
      );
      return lower ? r[lower] : void 0;
    };
    const nome_cliente = String(get("nome_cliente") ?? "").trim();
    const cpf_cnpj = String(get("cpf_cnpj") ?? "").trim();
    const contrato_id = String(get("contrato_id") ?? "").trim();
    const valor_principal = parseNumber(get("valor_principal"));
    const taxa_juros = parseNumber(get("taxa_juros"));
    const tipo_juros = String(get("tipo_juros") ?? "").trim();
    const numParcRaw = get("num_parcelas");
    const num_parcela = parseInt2(get("num_parcela"));
    const num_parcelas = parseTotalParcelas(numParcRaw, num_parcela);
    const periodicidade = String(get("periodicidade") ?? "").trim();
    const data_inicio = parseDataBR(get("data_inicio"));
    const data_vencimento = parseDataBR(get("data_vencimento"));
    const valor_parcela = parseNumber(get("valor_parcela"));
    const status_parcela = String(get("status_parcela") ?? "Pendente").trim();
    const data_pagamento = parseDataBR(get("data_pagamento"));
    const valor_pago_raw = get("valor_pago");
    const valor_pago = valor_pago_raw === "" || valor_pago_raw === null || valor_pago_raw === void 0 ? null : parseNumber(valor_pago_raw);
    const erros = [];
    if (!nome_cliente) erros.push("nome_cliente");
    if (!cpf_cnpj) erros.push("cpf_cnpj");
    if (!contrato_id) erros.push("contrato_id");
    if (valor_principal <= 0) erros.push("valor_principal");
    if (!tipo_juros) erros.push("tipo_juros");
    if (num_parcelas <= 0) erros.push("num_parcelas");
    if (!periodicidade) erros.push("periodicidade");
    if (!data_inicio) erros.push("data_inicio");
    if (num_parcela <= 0) erros.push("num_parcela");
    if (!data_vencimento) erros.push("data_vencimento");
    if (valor_parcela <= 0) erros.push("valor_parcela");
    if (!status_parcela) erros.push("status_parcela");
    let _statusCalc = "pendente";
    if (status_parcela.toLowerCase() === "pago") _statusCalc = "pago";
    else if (data_vencimento) {
      const dt = /* @__PURE__ */ new Date(data_vencimento + "T00:00:00");
      if (dt < hoje) _statusCalc = "atrasado";
    }
    return {
      _linha: i + 2,
      // header é linha 1
      _valido: erros.length === 0,
      _erros: erros,
      _statusCalc,
      nome_cliente,
      cpf_cnpj,
      telefone: String(get("telefone") ?? "").trim(),
      email: String(get("email") ?? "").trim(),
      contrato_id,
      valor_principal,
      taxa_juros,
      tipo_juros,
      num_parcelas,
      periodicidade,
      data_inicio,
      num_parcela,
      data_vencimento,
      valor_parcela,
      status_parcela,
      data_pagamento,
      valor_pago
    };
  });
}
function baixarModelo() {
  const headers = [
    "nome_cliente",
    "cpf_cnpj",
    "telefone",
    "email",
    "contrato_id",
    "valor_principal",
    "taxa_juros",
    "tipo_juros",
    "num_parcelas",
    "periodicidade",
    "data_inicio",
    "num_parcela",
    "data_vencimento",
    "valor_parcela",
    "status_parcela",
    "data_pagamento",
    "valor_pago"
  ];
  const exemplos = [
    {
      nome_cliente: "João da Silva",
      cpf_cnpj: "123.456.789-00",
      telefone: "(73) 99999-0000",
      email: "joao@exemplo.com",
      contrato_id: "CONT-001",
      valor_principal: 2e3,
      taxa_juros: 5,
      tipo_juros: "Simples",
      num_parcelas: 6,
      periodicidade: "Mensal",
      data_inicio: "01/01/2025",
      num_parcela: 1,
      data_vencimento: "01/02/2025",
      valor_parcela: 350,
      status_parcela: "Pago",
      data_pagamento: "01/02/2025",
      valor_pago: 350
    },
    {
      nome_cliente: "João da Silva",
      cpf_cnpj: "123.456.789-00",
      telefone: "(73) 99999-0000",
      email: "joao@exemplo.com",
      contrato_id: "CONT-001",
      valor_principal: 2e3,
      taxa_juros: 5,
      tipo_juros: "Simples",
      num_parcelas: 6,
      periodicidade: "Mensal",
      data_inicio: "01/01/2025",
      num_parcela: 2,
      data_vencimento: "01/03/2025",
      valor_parcela: 350,
      status_parcela: "Pendente",
      data_pagamento: "",
      valor_pago: ""
    }
  ];
  const ws = utils.json_to_sheet(exemplos, { header: headers });
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Importacao");
  writeFileSync(wb, "JuroPro_Modelo_Importacao.xlsx");
}
function BulkImporter() {
  const [fase, setFase] = reactExports.useState("upload");
  const [arquivo, setArquivo] = reactExports.useState(null);
  const [dados, setDados] = reactExports.useState([]);
  const [drag, setDrag] = reactExports.useState(false);
  const [progresso, setProg] = reactExports.useState(0);
  const [filtroStatus, setFiltro] = reactExports.useState("todos");
  const [resultado, setResultado] = reactExports.useState(null);
  const fileRef = reactExports.useRef(null);
  const bulkImportFn = useServerFn(bulkImport);
  const queryClient = useQueryClient();
  const lerArquivo = reactExports.useCallback(async (file) => {
    setArquivo(file);
    const ext = file.name.toLowerCase().split(".").pop();
    try {
      let raw = [];
      if (ext === "csv") {
        const text = await file.text();
        const parsed = Papa.parse(text, {
          header: true,
          skipEmptyLines: true
        });
        raw = parsed.data;
      } else if (ext === "xlsx" || ext === "xls") {
        const buffer = await file.arrayBuffer();
        const wb = readSync(buffer, { type: "array", cellDates: true });
        const ws = wb.Sheets[wb.SheetNames[0]];
        raw = utils.sheet_to_json(ws, { defval: "" });
      } else {
        toast.error("Formato inválido. Use .xlsx, .xls ou .csv");
        return;
      }
      if (raw.length === 0) {
        toast.error("Planilha vazia ou sem cabeçalhos válidos.");
        return;
      }
      const norm = normalizar(raw);
      setDados(norm);
      setFase("preview");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao ler o arquivo: " + err.message);
    }
  }, []);
  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f) lerArquivo(f);
  };
  const stats = {
    total: dados.length,
    validos: dados.filter((r) => r._valido).length,
    invalidos: dados.filter((r) => !r._valido).length,
    pagos: dados.filter((r) => r._statusCalc === "pago").length,
    pendentes: dados.filter((r) => r._statusCalc === "pendente").length,
    atrasados: dados.filter((r) => r._statusCalc === "atrasado").length
  };
  const filtrados = dados.filter(
    (r) => filtroStatus === "todos" || r._statusCalc === filtroStatus
  );
  const importar = async () => {
    const validos = dados.filter((r) => r._valido);
    if (validos.length === 0) {
      toast.error("Não há linhas válidas para importar.");
      return;
    }
    setFase("processando");
    setProg(0);
    const chunks = [];
    for (let i = 0; i < validos.length; i += CHUNK_SIZE) {
      chunks.push(validos.slice(i, i + CHUNK_SIZE));
    }
    let agreg = {
      ok: true,
      error: null,
      clientes_criados: 0,
      clientes_existentes: 0,
      emprestimos_criados: 0,
      emprestimos_existentes: 0,
      parcelas_inseridas: 0,
      warnings: []
    };
    try {
      for (let i = 0; i < chunks.length; i++) {
        const payload = chunks[i].map((r) => ({
          nome_cliente: r.nome_cliente,
          cpf_cnpj: r.cpf_cnpj,
          telefone: r.telefone,
          email: r.email,
          contrato_id: r.contrato_id,
          valor_principal: r.valor_principal,
          taxa_juros: r.taxa_juros,
          tipo_juros: r.tipo_juros,
          num_parcelas: r.num_parcelas,
          periodicidade: r.periodicidade,
          data_inicio: r.data_inicio,
          num_parcela: r.num_parcela,
          data_vencimento: r.data_vencimento,
          valor_parcela: r.valor_parcela,
          status_parcela: r.status_parcela,
          data_pagamento: r.data_pagamento,
          valor_pago: r.valor_pago
        }));
        const res = await bulkImportFn({ data: { rows: payload } });
        agreg = {
          ok: agreg.ok && res.ok,
          error: res.error ?? agreg.error,
          clientes_criados: agreg.clientes_criados + res.clientes_criados,
          clientes_existentes: agreg.clientes_existentes + res.clientes_existentes,
          emprestimos_criados: agreg.emprestimos_criados + res.emprestimos_criados,
          emprestimos_existentes: agreg.emprestimos_existentes + res.emprestimos_existentes,
          parcelas_inseridas: agreg.parcelas_inseridas + res.parcelas_inseridas,
          warnings: [...agreg.warnings, ...res.warnings]
        };
        setProg(Math.round((i + 1) / chunks.length * 100));
      }
      await queryClient.invalidateQueries();
      setResultado(agreg);
      setFase("concluido");
      toast.success(
        `Importação concluída: ${agreg.parcelas_inseridas} parcelas em ${agreg.emprestimos_criados} contratos.`
      );
    } catch (err) {
      console.error(err);
      toast.error("Erro durante a importação: " + err.message);
      setFase("preview");
    }
  };
  const resetar = () => {
    setFase("upload");
    setArquivo(null);
    setDados([]);
    setProg(0);
    setResultado(null);
    setFiltro("todos");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e3a5f] to-emerald-600 text-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Importação em Massa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Importe clientes, contratos e parcelas a partir de uma planilha Excel ou CSV." })
      ] })
    ] }),
    fase === "upload" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onDragOver: (e) => {
            e.preventDefault();
            setDrag(true);
          },
          onDragLeave: () => setDrag(false),
          onDrop,
          onClick: () => fileRef.current?.click(),
          className: cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-muted/30 px-6 py-12 text-center transition-all",
            "hover:border-emerald-500 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20",
            drag && "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileRef,
                type: "file",
                accept: ".xlsx,.xls,.csv",
                className: "hidden",
                onChange: (e) => {
                  const f = e.target.files?.[0];
                  if (f) lerArquivo(f);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "mb-3 h-12 w-12 text-emerald-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 font-semibold text-foreground", children: "Arraste sua planilha aqui" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-muted-foreground", children: "ou clique para selecionar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                className: "bg-emerald-600 text-white hover:bg-emerald-700",
                onClick: (e) => {
                  e.stopPropagation();
                  fileRef.current?.click();
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
                  "Selecionar Arquivo"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Formatos: .xlsx, .xls, .csv • até 5.000 linhas" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-wrap items-center gap-4 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[200px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "📋 Modelo de Planilha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Baixe o modelo oficial com cabeçalhos e exemplos." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: baixarModelo,
            className: "border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
              "Baixar Modelo"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-semibold text-foreground", children: "📌 O que o importador faz automaticamente:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          ["🔗", "Relacionamento", "Cria Cliente → Contrato → Parcelas em uma linha"],
          ["🔄", "Detecção de duplicatas", "CPF existente reutiliza o cliente"],
          ["🔴", "Status automático", "Vencidas pendentes viram Atrasadas"],
          ["⚡", "Em lotes", "Processa em chunks para máxima performance"],
          ["✅", "Validação", "Linhas com erros são listadas e ignoradas"],
          ["🛡️", "Multi-tenant", "Tudo é vinculado ao seu usuário"]
        ].map(([ic, t, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-3 rounded-lg bg-muted/40 p-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: ic }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s })
              ] })
            ]
          },
          t
        )) })
      ] })
    ] }),
    fase === "preview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-wrap items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-8 w-8 text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[150px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: arquivo?.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            ((arquivo?.size ?? 0) / 1024).toFixed(1),
            " KB • ",
            dados.length,
            " linhas"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: resetar, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "mr-2 h-4 w-4" }),
          "Trocar arquivo"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Total", value: stats.total, icon: "📋", color: "blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Válidas", value: stats.validos, icon: "✅", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Com erro", value: stats.invalidos, icon: "❌", color: "red" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Pagas", value: stats.pagos, icon: "💚", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Atrasadas", value: stats.atrasados, icon: "🔴", color: "red" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Pendentes", value: stats.pendentes, icon: "⏳", color: "blue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "🔍 Preview dos Dados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: filtroStatus,
              onValueChange: (v) => setFiltro(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "todos", children: [
                    "Todos (",
                    stats.total,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "pago", children: [
                    "Pagos (",
                    stats.pagos,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "pendente", children: [
                    "Pendentes (",
                    stats.pendentes,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "atrasado", children: [
                    "Atrasados (",
                    stats.atrasados,
                    ")"
                  ] })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[400px] overflow-auto rounded-md border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[800px] text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: ["#", "Cliente", "CPF", "Contrato", "Parc.", "Vencimento", "Valor", "Status", "OK"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold", children: h }, h)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtrados.slice(0, 200).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t hover:bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: r._linha }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium text-foreground", children: r.nome_cliente || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "⚠️ vazio" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: r.cpf_cnpj }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold text-emerald-600", children: r.contrato_id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2", children: [
                r.num_parcela,
                "/",
                r.num_parcelas
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  className: cn(
                    "px-3 py-2",
                    r._statusCalc === "atrasado" && "text-destructive"
                  ),
                  children: r.data_vencimento || "—"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold", children: r.valor_parcela ? fmtBRL(r.valor_parcela) : "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { s: r._statusCalc }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-center", children: r._valido ? "✅" : "❌" })
            ] }, i)) })
          ] }),
          filtrados.length > 200 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-t bg-muted/40 p-2 text-center text-xs text-muted-foreground", children: [
            "Mostrando 200 de ",
            filtrados.length,
            " linhas filtradas"
          ] })
        ] }),
        stats.invalidos > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start gap-2 rounded-md border-l-4 border-destructive bg-destructive/10 p-3 text-sm text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.invalidos }),
            " linha(s) com campos obrigatórios ausentes serão ignoradas."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: resetar, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
          "Cancelar"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: importar,
            disabled: stats.validos === 0,
            className: "bg-emerald-600 text-white hover:bg-emerald-700",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "mr-2 h-4 w-4" }),
              "Importar ",
              stats.validos,
              " linha(s)"
            ]
          }
        )
      ] })
    ] }),
    fase === "processando" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mx-auto h-12 w-12 animate-spin text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground", children: "Importando sua carteira..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Processando em blocos de ",
        CHUNK_SIZE,
        " linhas"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progresso, className: "h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-semibold text-emerald-600", children: [
          progresso,
          "%"
        ] })
      ] })
    ] }),
    fase === "concluido" && resultado && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto mb-2 h-14 w-14 text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: "Importação Concluída!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sua carteira foi importada com sucesso." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Clientes novos", value: resultado.clientes_criados, icon: "👥", color: "blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Clientes existentes", value: resultado.clientes_existentes, icon: "🔄", color: "amber" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Contratos novos", value: resultado.emprestimos_criados, icon: "📋", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Contratos duplicados", value: resultado.emprestimos_existentes, icon: "🔁", color: "amber" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Parcelas geradas", value: resultado.parcelas_inseridas, icon: "💳", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Avisos", value: resultado.warnings.length, icon: "⚠️", color: "amber" })
      ] }),
      resultado.warnings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-60 overflow-auto rounded-md border bg-muted/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-semibold text-foreground", children: "Logs:" }),
        resultado.warnings.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mb-1 flex items-start gap-2 rounded border-l-2 border-amber-500 bg-amber-50 p-2 text-xs dark:bg-amber-950/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-3 w-3 flex-shrink-0 text-amber-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w })
            ]
          },
          i
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: resetar, variant: "outline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
        "Nova Importação"
      ] }) })
    ] })
  ] });
}
function StatusBadge({ s }) {
  const map = {
    pago: { label: "Pago", className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100" },
    pendente: { label: "Pendente", className: "bg-blue-100 text-blue-700 hover:bg-blue-100" },
    atrasado: { label: "Atrasado", className: "bg-red-100 text-red-700 hover:bg-red-100" }
  };
  const m = map[s];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: cn("font-semibold", m.className), children: m.label });
}
function KpiMini({
  label,
  value,
  icon,
  color
}) {
  const borders = {
    blue: "border-t-blue-500",
    green: "border-t-emerald-500",
    red: "border-t-red-500",
    amber: "border-t-amber-500"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("border-t-4 p-3", borders[color]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-bold text-foreground", children: value })
  ] });
}
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root.displayName;
const STORAGE_KEY = "juropro:dark_mode";
const EVENT = "juropro:dark_mode_changed";
function readDark() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
function applyDark(on) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (on) root.classList.add("dark");
  else root.classList.remove("dark");
}
function useDarkMode() {
  const [dark, setDarkState] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const initial = readDark();
    setDarkState(initial);
    applyDark(initial);
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        const v = readDark();
        setDarkState(v);
        applyDark(v);
      }
    };
    const onCustom = () => {
      const v = readDark();
      setDarkState(v);
      applyDark(v);
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVENT, onCustom);
    };
  }, []);
  const setDark = (next) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
    }
    applyDark(next);
    setDarkState(next);
    window.dispatchEvent(new Event(EVENT));
  };
  return { dark, setDark };
}
const maskCpf = (v) => v.replace(/\D/g, "").slice(0, 11).replace(/^(\d{3})(\d)/, "$1.$2").replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1-$2");
function avaliarSenha(s) {
  if (!s) return {
    pct: 0,
    label: "",
    className: "bg-muted"
  };
  let pts = 0;
  if (s.length >= 8) pts++;
  if (/[A-Z]/.test(s)) pts++;
  if (/[0-9]/.test(s)) pts++;
  if (/[^A-Za-z0-9]/.test(s)) pts++;
  const map = [{
    pct: 0,
    label: "",
    className: "bg-muted"
  }, {
    pct: 25,
    label: "Fraca",
    className: "bg-destructive"
  }, {
    pct: 50,
    label: "Regular",
    className: "bg-warning"
  }, {
    pct: 75,
    label: "Boa",
    className: "bg-primary/70"
  }, {
    pct: 100,
    label: "Forte",
    className: "bg-success"
  }];
  return map[pts];
}
const VARIAVEIS = [{
  var: "{{cliente}}",
  desc: "Nome do cliente"
}, {
  var: "{{parcela}}",
  desc: "Nº da parcela"
}, {
  var: "{{contrato}}",
  desc: "ID do contrato"
}, {
  var: "{{valor}}",
  desc: "Valor da parcela"
}, {
  var: "{{vencimento}}",
  desc: "Data de vencimento"
}, {
  var: "{{negocio}}",
  desc: "Nome do negócio"
}];
const MSG_PADRAO = `Olá {{cliente}}, tudo bem? 😊

Passando para lembrar que sua parcela *{{parcela}}* do contrato *{{contrato}}* no valor de *{{valor}}* vence em *{{vencimento}}*.

Qualquer dúvida, estamos à disposição! 🙏

_{{negocio}} - Gestão de Empréstimos_`;
function SectionHeader({
  icon,
  title,
  description,
  iconBg = "bg-primary/10 text-primary"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", iconBg), children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground sm:text-base", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: description })
    ] })
  ] });
}
function PasswordField({
  id,
  label,
  value,
  onChange
}) {
  const [show, setShow] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id, type: show ? "text" : "password", value, onChange: (e) => onChange(e.target.value), placeholder: "••••••••", className: "pr-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground", "aria-label": show ? "Ocultar senha" : "Mostrar senha", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
    ] })
  ] });
}
function TabPerfil() {
  const {
    name,
    setName,
    defaultName
  } = useAdminName();
  const {
    avatar,
    setAvatar
  } = useAdminAvatar();
  const {
    user,
    updatePassword
  } = useAuth();
  const [form, setForm] = reactExports.useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cargo: "Administrador",
    cidade: "",
    uf: "BA"
  });
  const [saving, setSaving] = reactExports.useState(false);
  const [senhaAtual, setSenhaAtual] = reactExports.useState("");
  const [novaSenha, setNovaSenha] = reactExports.useState("");
  const [confSenha, setConfSenha] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (user?.email) {
      setForm((p) => p.email === user.email ? p : {
        ...p,
        email: user.email ?? ""
      });
    }
  }, [user?.email]);
  reactExports.useEffect(() => {
    setForm((p) => ({
      ...p,
      nome: name === defaultName ? "" : name
    }));
  }, [name, defaultName]);
  const set = (field) => (e) => setForm((p) => ({
    ...p,
    [field]: e.target.value
  }));
  const onPickFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Arquivo maior que 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setAvatar(String(ev.target?.result ?? ""));
    reader.readAsDataURL(file);
    e.target.value = "";
  };
  const forca = avaliarSenha(novaSenha);
  const senhasOk = novaSenha.length > 0 && novaSenha === confSenha;
  const iniciais = (form.nome || "GF").split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase()).join("");
  const salvar = async () => {
    setSaving(true);
    const querTrocarSenha = senhaAtual || novaSenha || confSenha;
    if (querTrocarSenha) {
      if (!senhaAtual) {
        toast.error("Informe a senha atual");
        setSaving(false);
        return;
      }
      if (!novaSenha || novaSenha.length < 8) {
        toast.error("A nova senha deve ter no mínimo 8 caracteres");
        setSaving(false);
        return;
      }
      if (novaSenha !== confSenha) {
        toast.error("A nova senha e a confirmação não coincidem");
        setSaving(false);
        return;
      }
      if (!user?.email) {
        toast.error("Sessão inválida. Faça login novamente.");
        setSaving(false);
        return;
      }
      const {
        error: signErr
      } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: senhaAtual
      });
      if (signErr) {
        toast.error("Senha atual incorreta");
        setSaving(false);
        return;
      }
      const {
        error: updErr
      } = await updatePassword(novaSenha);
      if (updErr) {
        toast.error(`Não foi possível alterar a senha: ${updErr}`);
        setSaving(false);
        return;
      }
      setSenhaAtual("");
      setNovaSenha("");
      setConfSenha("");
      toast.success("Senha alterada com sucesso! Use a nova senha no próximo login.");
    }
    setName(form.nome.trim());
    setSaving(false);
    if (!querTrocarSenha) toast.success("Perfil atualizado com sucesso!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }), title: "Foto de Perfil", description: "Aparece no rodapé da sidebar e nos documentos", iconBg: "bg-primary/10 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 sm:flex-row sm:items-center", children: [
        avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatar, alt: "Foto do perfil", className: "h-20 w-20 shrink-0 rounded-full border-2 border-primary object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-2xl font-bold text-primary-foreground", children: iniciais || "GF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2 text-center sm:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "image/*", className: "hidden", onChange: onPickFile }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-2 sm:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => fileRef.current?.click(), className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4" }),
              "Alterar foto"
            ] }),
            avatar && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setAvatar(null), className: "gap-2 text-destructive hover:text-destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
              "Remover"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "JPG, PNG • Máx. 2MB • Crop circular automático" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }), title: "Dados Pessoais", description: "Suas informações de acesso ao sistema", iconBg: "bg-info/10 text-info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "perfil-nome", children: [
            "Nome Completo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-nome", value: form.nome, onChange: set("nome") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-cpf", children: "CPF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-cpf", value: form.cpf, onChange: (e) => setForm((p) => ({
            ...p,
            cpf: maskCpf(e.target.value)
          })), placeholder: "000.000.000-00", maxLength: 14 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "perfil-email", children: [
            "E-mail ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-email", type: "email", value: form.email, onChange: set("email") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-tel", children: "Telefone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-tel", value: form.telefone, onChange: (e) => setForm((p) => ({
            ...p,
            telefone: maskTelefone(e.target.value)
          })), placeholder: "(00) 00000-0000", maxLength: 15 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-cargo", children: "Cargo / Função" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-cargo", value: form.cargo, disabled: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_80px] gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-cidade", children: "Cidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-cidade", value: form.cidade, onChange: set("cidade") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-uf", children: "UF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.uf, onValueChange: (v) => setForm((p) => ({
              ...p,
              uf: v
            })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "perfil-uf", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRAZIL_UFS.map((uf) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: uf, children: uf }, uf)) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }), title: "Segurança", description: "Altere sua senha de acesso", iconBg: "bg-warning/10 text-warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordField, { id: "senha-atual", label: "Senha Atual", value: senhaAtual, onChange: setSenhaAtual }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordField, { id: "senha-nova", label: "Nova Senha", value: novaSenha, onChange: setNovaSenha }),
          novaSenha && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full rounded bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full rounded transition-all", forca.className), style: {
              width: `${forca.pct}%`
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: forca.label })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordField, { id: "senha-conf", label: "Confirmar Nova Senha", value: confSenha, onChange: setConfSenha }),
          confSenha && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("flex items-center gap-1 text-xs font-medium", senhasOk ? "text-success" : "text-destructive"), children: senhasOk ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
            "Senhas coincidem"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" }),
            "Senhas não coincidem"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-lg bg-muted/60 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "🔐 Requisitos: mínimo 8 caracteres, letras maiúsculas, números e caracteres especiais." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: salvar, disabled: saving, className: "gap-2", children: [
      saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
      "Salvar Perfil"
    ] }) })
  ] });
}
function TabNegocio() {
  const {
    name: businessName,
    setName: setBusinessName
  } = useBusinessName();
  const {
    logo,
    setLogo
  } = useBusinessLogo();
  const {
    details,
    setDetails
  } = useBusinessDetails();
  const [form, setForm] = reactExports.useState({
    nome: businessName,
    cnpj: details.cnpj,
    telefone: details.telefone,
    email: details.email,
    cep: details.cep,
    endereco: details.endereco,
    numero: details.numero,
    complemento: details.complemento,
    bairro: details.bairro,
    cidade: details.cidade,
    uf: details.uf || "BA",
    taxaPadrao: "5,00",
    tipoJurosPadrao: "simples",
    multaAtraso: "2,00"
  });
  const [drag, setDrag] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [cepLoading, setCepLoading] = reactExports.useState(false);
  const [cepOk, setCepOk] = reactExports.useState(false);
  const [cepErro, setCepErro] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setForm((p) => p.nome === businessName ? p : {
      ...p,
      nome: businessName
    });
  }, [businessName]);
  const set = (field) => (e) => setForm((p) => ({
    ...p,
    [field]: e.target.value
  }));
  const handleLogo = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Arquivo maior que 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setLogo(String(ev.target?.result ?? ""));
    reader.readAsDataURL(file);
  };
  const buscarCEP = async () => {
    const cepDigits = form.cep.replace(/\D/g, "");
    if (cepDigits.length !== 8) {
      setCepErro("CEP deve ter 8 dígitos");
      setCepOk(false);
      return;
    }
    setCepLoading(true);
    setCepErro("");
    setCepOk(false);
    const data = await lookupCep(cepDigits);
    setCepLoading(false);
    if (!data) {
      setCepErro("CEP não encontrado");
      return;
    }
    setForm((p) => ({
      ...p,
      endereco: data.logradouro || p.endereco,
      bairro: data.bairro || p.bairro,
      cidade: data.localidade || p.cidade,
      uf: data.uf || p.uf
    }));
    setCepOk(true);
  };
  const salvar = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setBusinessName(form.nome.trim());
    setDetails({
      cnpj: form.cnpj,
      telefone: form.telefone,
      email: form.email,
      cep: form.cep,
      endereco: form.endereco,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      uf: form.uf
    });
    setSaving(false);
    toast.success("Dados do negócio salvos com sucesso!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }), title: "Logomarca", description: "Aparece no cabeçalho dos contratos e documentos", iconBg: "bg-primary/10 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "button", tabIndex: 0, onClick: () => fileRef.current?.click(), onDragOver: (e) => {
          e.preventDefault();
          setDrag(true);
        }, onDragLeave: () => setDrag(false), onDrop: (e) => {
          e.preventDefault();
          setDrag(false);
          handleLogo(e.dataTransfer.files[0]);
        }, className: cn("flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-muted/30 px-4 py-6 text-center transition-colors hover:border-primary hover:bg-primary/5", drag && "border-primary bg-primary/5"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => handleLogo(e.target.files?.[0]) }),
          logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Logo", className: "max-h-20 max-w-full rounded" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "mb-2 h-8 w-8 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Clique ou arraste sua logo aqui" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "PNG, JPG ou SVG • Recomendado 200×60px" })
          ] })
        ] }),
        logo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-center gap-2 sm:flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => fileRef.current?.click(), className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
            "Trocar"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setLogo(null), className: "gap-2 text-destructive hover:text-destructive", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
            "Remover"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }), title: "Informações da Empresa", description: "Dados que aparecem nos contratos e documentos", iconBg: "bg-info/10 text-info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "neg-nome", children: [
            "Nome do Negócio ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-nome", value: form.nome, onChange: set("nome") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-cnpj", children: "CNPJ / CPF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-cnpj", value: form.cnpj, onChange: (e) => setForm((p) => ({
            ...p,
            cnpj: maskCpfCnpj(e.target.value)
          })), placeholder: "00.000.000/0001-00 ou 000.000.000-00", maxLength: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Máscara automática — CPF ou CNPJ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-tel", children: "Telefone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-tel", value: form.telefone, onChange: (e) => setForm((p) => ({
            ...p,
            telefone: maskTelefone(e.target.value)
          })), placeholder: "(00) 00000-0000", maxLength: 15 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-email", children: "E-mail" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-email", type: "email", value: form.email, onChange: set("email") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 mt-6 text-sm font-semibold text-foreground", children: "📍 Endereço" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-cep", children: "CEP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-cep", value: form.cep, onChange: (e) => {
            setForm((p) => ({
              ...p,
              cep: maskCep(e.target.value)
            }));
            setCepOk(false);
            setCepErro("");
          }, placeholder: "00000-000", maxLength: 9, className: cn(cepOk && "border-success focus-visible:ring-success"), onKeyDown: (e) => e.key === "Enter" && buscarCEP() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: buscarCEP, disabled: cepLoading, className: "shrink-0 gap-2", children: [
            cepLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Buscar CEP" })
          ] })
        ] }),
        cepOk && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs font-medium text-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
          " Endereço preenchido automaticamente!"
        ] }),
        cepErro && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" }),
          " ",
          cepErro
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-end", children: "Endereço" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-end", value: form.endereco, onChange: set("endereco") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[90px_1fr] gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-num", children: "Nº" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-num", value: form.numero, onChange: set("numero") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-comp", children: "Complemento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-comp", placeholder: "Apto, Sala...", value: form.complemento, onChange: set("complemento") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-bairro", children: "Bairro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-bairro", value: form.bairro, onChange: set("bairro") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_80px] gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-cid", children: "Cidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-cid", value: form.cidade, onChange: set("cidade") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-uf", children: "UF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.uf, onValueChange: (v) => setForm((p) => ({
              ...p,
              uf: v
            })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "neg-uf", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRAZIL_UFS.map((uf) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: uf, children: uf }, uf)) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-5 w-5" }), title: "Padrões Financeiros", description: "Valores padrão ao criar novos empréstimos", iconBg: "bg-warning/10 text-warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-taxa", children: "Taxa de Juros Padrão (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-taxa", inputMode: "decimal", value: form.taxaPadrao, onChange: (e) => setForm((p) => ({
            ...p,
            taxaPadrao: maskTaxa(e.target.value)
          })), placeholder: "0,00" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-tipo", children: "Tipo de Juros Padrão" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.tipoJurosPadrao, onValueChange: (v) => setForm((p) => ({
            ...p,
            tipoJurosPadrao: v
          })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "neg-tipo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "simples", children: "Juros Simples" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "composto", children: "Juros Compostos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sojuros", children: "Só Juros" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-multa", children: "Multa por Atraso (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-multa", inputMode: "decimal", value: form.multaAtraso, onChange: (e) => setForm((p) => ({
            ...p,
            multaAtraso: maskTaxa(e.target.value)
          })), placeholder: "0,00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Aplicada sobre o valor da parcela em atraso" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: salvar, disabled: saving, className: "gap-2", children: [
      saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
      "Salvar Dados do Negócio"
    ] }) })
  ] });
}
function TabPreferencias() {
  const {
    name: businessName
  } = useBusinessName();
  const {
    dark,
    setDark
  } = useDarkMode();
  const [msg, setMsg] = reactExports.useState(MSG_PADRAO);
  const [preview, setPreview] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [prefs, setPrefs] = reactExports.useState({
    notifVencimento: true,
    notifAtraso: true,
    notifPagamento: false,
    whatsappAuto: false,
    compactView: false,
    itensPorPagina: "10",
    moeda: "BRL"
  });
  const setP = (field) => (v) => setPrefs((p) => ({
    ...p,
    [field]: v
  }));
  const previewMsg = msg.replace(/\{\{cliente\}\}/g, "João da Silva").replace(/\{\{parcela\}\}/g, "2/6").replace(/\{\{contrato\}\}/g, "#004").replace(/\{\{valor\}\}/g, "R$ 620,00").replace(/\{\{vencimento\}\}/g, "23/04/2026").replace(/\{\{negocio\}\}/g, businessName);
  const salvar = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setSaving(false);
    toast.success("Preferências salvas com sucesso!");
  };
  const notificacoes = [{
    key: "notifVencimento",
    label: "Vencimentos do dia",
    sub: "Alerta quando há parcelas vencendo hoje"
  }, {
    key: "notifAtraso",
    label: "Parcelas em atraso",
    sub: "Alerta diário de inadimplência"
  }, {
    key: "notifPagamento",
    label: "Confirmação de baixa",
    sub: "Notifica ao registrar um recebimento"
  }, {
    key: "whatsappAuto",
    label: "Cobrança automática",
    sub: "Envia WhatsApp automaticamente no vencimento"
  }];
  const interfaceItems = [{
    key: "darkMode",
    label: "Modo Escuro",
    sub: "Ativar tema escuro no sistema",
    checked: dark,
    onChange: setDark
  }, {
    key: "compactView",
    label: "Visualização compacta",
    sub: "Reduz o espaçamento das tabelas",
    checked: prefs.compactView,
    onChange: (v) => setP("compactView")(v)
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }), title: "Mensagem de Cobrança (WhatsApp)", description: "Personalize o texto enviado automaticamente", iconBg: "bg-success/15 text-success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-medium text-foreground", children: "Variáveis disponíveis — clique para inserir:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: VARIAVEIS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMsg((m) => m + v.var), className: "group inline-flex items-center gap-1 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-semibold text-success transition-colors hover:bg-success/20", title: v.desc, children: [
        v.var,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden text-[10px] font-normal text-success/70 sm:inline", children: [
          "· ",
          v.desc
        ] })
      ] }, v.var)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 9, value: msg, onChange: (e) => setMsg(e.target.value), placeholder: "Digite a mensagem...", className: "font-mono text-sm leading-relaxed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setPreview((p) => !p), className: "gap-2", children: [
          preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
          preview ? "Ocultar Preview" : "Ver Preview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setMsg(MSG_PADRAO), className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
          "Restaurar padrão"
        ] })
      ] }),
      preview && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-medium text-foreground", children: "📱 Preview com dados reais:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap break-words rounded-lg border-l-4 border-success bg-success/10 p-4 text-sm leading-relaxed text-foreground", children: previewMsg })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5" }), title: "Notificações", description: "Controle quais alertas você deseja receber", iconBg: "bg-info/10 text-info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y", children: notificacoes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: prefs[t.key], onCheckedChange: setP(t.key) })
      ] }, t.key)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-5 w-5" }), title: "Interface", description: "Personalização visual do sistema", iconBg: "bg-accent text-accent-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y", children: interfaceItems.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: t.checked, onCheckedChange: t.onChange })
      ] }, t.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pref-itens", children: "Itens por página (padrão)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: prefs.itensPorPagina, onValueChange: setP("itensPorPagina"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "pref-itens", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["5", "10", "25", "50", "100"].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: n, children: [
              n,
              " itens"
            ] }, n)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pref-moeda", children: "Moeda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: prefs.moeda, onValueChange: setP("moeda"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "pref-moeda", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "BRL", children: "BRL — Real Brasileiro" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "USD", children: "USD — Dólar Americano" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EUR", children: "EUR — Euro" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: salvar, disabled: saving, className: "gap-2", children: [
      saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
      "Salvar Preferências"
    ] }) })
  ] });
}
function ConfiguracoesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, { className: "text-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-medium text-muted-foreground", children: "Configurações" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 space-y-6 p-4 md:p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm md:h-11 md:w-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground md:text-2xl", children: "Configurações" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: "Gerencie seu perfil, negócio e preferências." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "perfil", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid h-auto w-full grid-cols-2 gap-1 bg-muted p-1 sm:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "perfil", className: "flex items-center gap-2 py-2 text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Meu Perfil" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Perfil" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "negocio", className: "flex items-center gap-2 py-2 text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Dados do Negócio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Negócio" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "preferencias", className: "flex items-center gap-2 py-2 text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Preferências" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Prefs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "dados", className: "flex items-center gap-2 py-2 text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Dados e Backup" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Dados" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "perfil", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabPerfil, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "negocio", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabNegocio, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "preferencias", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabPreferencias, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dados", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BulkImporter, {}) })
        ] }) })
      ] })
    ] })
  ] }) });
}
export {
  ConfiguracoesPage as component
};
