import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { u as useQuery } from "./_libs/tanstack__react-query.mjs";
import { S as SidebarProvider, A as AppSidebar, a as SidebarTrigger, u as useAdminName } from "./_ssr/AppSidebar-Ds599ZcL.mjs";
import { B as Button, u as useBusinessName, a as useBusinessLogo, b as useBusinessDetails } from "./_ssr/use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./_ssr/input-DUQ65Lx-.mjs";
import { B as Badge } from "./_ssr/badge-BWZRlRgY.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./_ssr/tabs-DbCelycP.mjs";
import { R as Root2, T as Trigger, P as Portal, C as Content2 } from "./_libs/radix-ui__react-popover.mjs";
import { u as useAuth, c as cn } from "./_ssr/router-DtZwCPIN.mjs";
import { _ as _e } from "./_libs/cmdk.mjs";
import { D as Dialog, a as DialogContent } from "./_ssr/dialog-C-pLuHIW.mjs";
import { T as TablePagination } from "./_ssr/table-pagination-BpSGPBj2.mjs";
import { l as listEmprestimos, a as listClientes } from "./_ssr/emprestimos.functions-BLtY37RZ.mjs";
import { l as listParcelas } from "./_ssr/parcelas.functions-hTfPimaB.mjs";
import "./_libs/sonner.mjs";
import "./_ssr/index.mjs";
import "./_libs/seroval.mjs";
import { s as ChartColumn, j as TrendingUp, F as FileText, C as CircleAlert, t as CalendarDays, D as Download, u as ClipboardList, k as CircleCheck, v as Hourglass, w as ChartPie, b as LoaderCircle, R as Receipt, l as Search, x as Coins, a as Eye, g as Check, o as ArrowUp, p as ArrowDown, n as ArrowUpDown, y as ChevronsUpDown, z as Printer, X } from "./_libs/lucide-react.mjs";
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
import "./_libs/radix-ui__react-tabs.mjs";
import "./_libs/radix-ui__react-roving-focus.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_ssr/select-Z7vlNdU9.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_ssr/createSsrRpc-C2cGivNr.mjs";
import "./_ssr/auth-guard-RhM8Bjcl.mjs";
import "./_ssr/createMiddleware-BvN2ghIY.mjs";
import "./_libs/zod.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
const Popover = Root2;
const PopoverTrigger = Trigger;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content2.displayName;
const Command = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = _e.displayName;
const CommandInput = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    _e.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = _e.Input.displayName;
const CommandList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = _e.List.displayName;
const CommandEmpty = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = _e.Empty.displayName;
const CommandGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = _e.Group.displayName;
const CommandSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = _e.Separator.displayName;
const CommandItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = _e.Item.displayName;
const fmtBRL$1 = (v) => Number(v || 0).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const fmtDate$1 = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};
const fmtTel = (tel) => {
  if (!tel) return "—";
  const digits = tel.replace(/\D/g, "");
  if (digits.length === 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length === 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return tel;
};
const tipoJurosLabel = (t) => {
  switch ((t ?? "").toLowerCase()) {
    case "simples":
      return "Simples";
    case "composto":
      return "Composto";
    case "so_juros":
      return "Só Juros";
    default:
      return t ?? "—";
  }
};
function ContratoPdfDialog({
  open,
  onOpenChange,
  contrato,
  contratoCodigo,
  parcelas,
  cliente
}) {
  const { name: adminName } = useAdminName();
  const { name: businessName } = useBusinessName();
  const { logo: businessLogo } = useBusinessLogo();
  const { details: businessDetails } = useBusinessDetails();
  const enderecoNegocio = reactExports.useMemo(() => {
    const partes = [
      businessDetails.endereco,
      businessDetails.numero,
      businessDetails.complemento,
      businessDetails.bairro
    ].filter((s) => s && s.trim().length > 0);
    return partes.join(", ");
  }, [businessDetails]);
  const cidadeUfNegocio = reactExports.useMemo(() => {
    if (!businessDetails.cidade) return "";
    return businessDetails.uf ? `${businessDetails.cidade} / ${businessDetails.uf}` : businessDetails.cidade;
  }, [businessDetails]);
  const parcelasContrato = reactExports.useMemo(
    () => contrato ? parcelas.filter((p) => String(p.emprestimo_id) === String(contrato.id)).sort((a, b) => a.numero_parcela - b.numero_parcela) : [],
    [parcelas, contrato]
  );
  const valorTotal = reactExports.useMemo(() => {
    if (!contrato) return 0;
    if (parcelasContrato.length > 0)
      return parcelasContrato.reduce((s, p) => s + p.valor_parcela, 0);
    return contrato.valor_principal * (1 + contrato.taxa_juros / 100 * contrato.numero_parcelas);
  }, [contrato, parcelasContrato]);
  const handlePrint = () => {
    const conteudo = document.getElementById("contrato-print-area")?.innerHTML;
    if (!conteudo) return;
    const win = window.open("", "_blank", "width=900,height=900");
    if (!win) return;
    win.document.write(`<!doctype html><html><head><title>Contrato ${contratoCodigo} - ${businessName}</title>
      <meta charset="utf-8" />
      <style>
        @page { size: A4; margin: 16mm; }
        body { font-family: Georgia, 'Times New Roman', serif; font-size: 12pt; color: #1e293b; line-height: 1.6; margin:0; padding:0; }
        h1 { font-size: 22pt; text-align:center; color:#0f766e; margin: 0 0 4px; letter-spacing: 1px; }
        .sub { text-align:center; font-size: 10pt; color:#64748b; margin-bottom: 24px; }
        .header-box { text-align:center; margin-bottom: 18px; padding: 10px; background:#f0fdf4; border-radius:6px; border:1px solid #bbf7d0; }
        .header-box strong { font-size: 13pt; color:#0f766e; }
        .section-title { font-size: 11pt; font-weight: bold; color: #1d4ed8; border-bottom: 2px solid #1d4ed8; padding-bottom: 3px; margin: 18px 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }
        .grid2 { display:grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; }
        .field { margin: 0 0 4px; }
        .field span { font-weight: bold; }
        table { width: 100%; border-collapse: collapse; font-size: 10pt; margin-top: 6px; }
        th { background: #f0fdf4; color: #0f766e; padding: 7px 10px; font-weight: bold; border: 1px solid #d1fae5; text-align:left; }
        td { padding: 6px 10px; border: 1px solid #e5e7eb; }
        tr:nth-child(even) td { background: #f9fafb; }
        .clausula { margin-bottom: 8px; text-align: justify; }
        .clausula b { color:#1d4ed8; }
        .assinaturas { display:grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
        .assin-line { border-top: 1px solid #374151; padding-top: 6px; font-size: 10pt; text-align:center; }
      </style>
    </head><body>${conteudo}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 400);
  };
  if (!contrato) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl w-[calc(100vw-1rem)] sm:w-full max-h-[95vh] sm:max-h-[92vh] overflow-hidden p-0 gap-0 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between gap-2 border-b bg-background px-3 sm:px-4 py-2.5 sm:py-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-semibold truncate", children: [
        "📄 Contrato ",
        contratoCodigo
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handlePrint,
            className: "bg-success hover:bg-success/90 text-success-foreground h-8 sm:h-9 px-2 sm:px-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Gerar PDF / Imprimir" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden text-xs", children: "PDF" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            variant: "ghost",
            onClick: () => onOpenChange(false),
            className: "h-8 w-8",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 p-2 sm:p-6 overflow-y-auto overflow-x-hidden flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "contrato-print-area",
        className: "mx-auto max-w-3xl bg-white p-4 sm:p-8 md:p-12 shadow-lg text-[#1e293b] text-[11px] sm:text-base",
        style: { fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 1.6 },
        children: [
          businessLogo ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: businessLogo,
              alt: businessName,
              style: {
                maxHeight: "70px",
                maxWidth: "220px",
                objectFit: "contain",
                margin: "0 auto"
              }
            }
          ) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              style: {
                fontSize: "22pt",
                textAlign: "center",
                color: "#0f766e",
                margin: "0 0 4px",
                letterSpacing: 1,
                textTransform: "uppercase"
              },
              children: businessName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "sub",
              style: {
                textAlign: "center",
                fontSize: "10pt",
                color: "#64748b",
                marginBottom: 24
              },
              children: [
                "Gestão Profissional de Empréstimos",
                (businessDetails.cnpj || cidadeUfNegocio) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  businessDetails.cnpj ? `CNPJ/CPF: ${businessDetails.cnpj}` : "",
                  businessDetails.cnpj && cidadeUfNegocio ? " • " : "",
                  cidadeUfNegocio
                ] }),
                (businessDetails.telefone || businessDetails.email) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  businessDetails.telefone ? `Tel: ${businessDetails.telefone}` : "",
                  businessDetails.telefone && businessDetails.email ? " • " : "",
                  businessDetails.email
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "header-box",
              style: {
                textAlign: "center",
                marginBottom: 18,
                padding: 10,
                background: "#f0fdf4",
                borderRadius: 6,
                border: "1px solid #bbf7d0"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { fontSize: "13pt", color: "#0f766e" }, children: [
                  "CONTRATO DE EMPRÉSTIMO PESSOAL",
                  " ",
                  contratoCodigo
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "10pt", color: "#64748b" }, children: [
                  "Data de emissão: ",
                  fmtDate$1((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              },
              children: "I — Dados do Credor (Locador)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid2",
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px"
              },
              children: [
                ["Razão Social / Nome", businessName],
                ["CNPJ / CPF", businessDetails.cnpj || "—"],
                ["Responsável", adminName],
                [
                  "Endereço",
                  enderecoNegocio.length > 0 ? enderecoNegocio : "—"
                ],
                ["Cidade/UF", cidadeUfNegocio || "—"],
                ["CEP", businessDetails.cep || "—"],
                ["Telefone", businessDetails.telefone || "—"],
                ["E-mail", businessDetails.email || "—"]
              ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "field", style: { margin: "0 0 4px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "bold" }, children: [
                  k,
                  ":"
                ] }),
                " ",
                v
              ] }, k))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "II — Dados do Devedor (Tomador)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px"
              },
              children: [
                ["Nome Completo", contrato.cliente_nome ?? "—"],
                ["CPF/CNPJ", cliente?.cpf_cnpj ?? "—"],
                ["Telefone", fmtTel(cliente?.telefone)],
                [
                  "Cidade/UF",
                  cliente?.cidade ? `${cliente.cidade}${cliente.uf ? ` / ${cliente.uf}` : ""}` : "—"
                ]
              ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 4px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "bold" }, children: [
                  k,
                  ":"
                ] }),
                " ",
                v
              ] }, k))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "III — Condições do Empréstimo"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px"
              },
              children: [
                ["Valor Principal", fmtBRL$1(contrato.valor_principal)],
                [
                  "Taxa de Juros",
                  `${contrato.taxa_juros}% ao mês (${tipoJurosLabel(contrato.tipo_juros)})`
                ],
                ["Nº de Parcelas", `${contrato.numero_parcelas}x`],
                ["Periodicidade", "Mensal"],
                ["Data do Contrato", fmtDate$1(contrato.data_inicio)],
                ["Valor Total", fmtBRL$1(valorTotal)]
              ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 4px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "bold" }, children: [
                  k,
                  ":"
                ] }),
                " ",
                v
              ] }, k))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "IV — Cláusulas e Condições"
            }
          ),
          [
            [
              "CLÁUSULA 1ª – DO OBJETO",
              "O CREDOR concede ao DEVEDOR empréstimo no valor e condições acima, que o DEVEDOR declara receber neste ato em moeda corrente nacional."
            ],
            [
              "CLÁUSULA 2ª – DOS JUROS",
              `Incidirão juros de ${contrato.taxa_juros}% ao mês na modalidade ${tipoJurosLabel(contrato.tipo_juros)} sobre o saldo devedor. Em caso de atraso, será acrescida multa de 2% sobre o valor da parcela e juros de mora de 1% ao mês.`
            ],
            [
              "CLÁUSULA 3ª – DO PAGAMENTO",
              "O DEVEDOR obriga-se a pagar as parcelas nas datas estipuladas no quadro a seguir. O não pagamento na data de vencimento sujeitará o DEVEDOR à mora automática, independentemente de notificação."
            ],
            [
              "CLÁUSULA 4ª – DO FORO",
              `As partes elegem o foro da Comarca de ${cidadeUfNegocio || "—"} para dirimir quaisquer questões oriundas deste contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`
            ]
          ].map(([t, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "clausula",
              style: { marginBottom: 8, textAlign: "justify" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { style: { color: "#1d4ed8" }, children: [
                  t,
                  ":"
                ] }),
                " ",
                c
              ]
            },
            t
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "V — Tabela de Parcelas"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "table",
            {
              style: {
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "10pt",
                marginTop: 6,
                minWidth: 420
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Nº"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Vencimento"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Valor"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Status"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  parcelasContrato.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white"
                        },
                        children: [
                          "#",
                          String(p.numero_parcela).padStart(2, "0")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white"
                        },
                        children: fmtDate$1(p.data_vencimento)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white"
                        },
                        children: fmtBRL$1(p.valor_parcela)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white",
                          color: p.status === "pago" ? "#0f766e" : "#dc2626",
                          fontWeight: 600
                        },
                        children: p.status === "pago" ? "✅ Pago" : "⏳ Pendente"
                      }
                    )
                  ] }, String(p.id))),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { fontWeight: "bold", background: "#f0fdf4" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        colSpan: 2,
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #d1fae5",
                          textAlign: "right"
                        },
                        children: "TOTAL"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #d1fae5"
                        },
                        children: fmtBRL$1(
                          parcelasContrato.reduce((s, p) => s + p.valor_parcela, 0)
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: { padding: "6px 10px", border: "1px solid #d1fae5" }
                      }
                    )
                  ] })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "assinaturas",
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                marginTop: 60
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 32px", fontSize: "10pt" }, children: [
                    businessDetails.cidade || "—",
                    businessDetails.cidade ? ", " : " ",
                    fmtDate$1((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        borderTop: "1px solid #374151",
                        paddingTop: 6,
                        fontSize: "10pt"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: adminName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        businessName,
                        " (Credor)",
                        businessDetails.cnpj ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "CNPJ/CPF: ",
                          businessDetails.cnpj
                        ] }) : null
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0 0 32px", fontSize: "10pt" }, children: "Assinatura do Devedor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        borderTop: "1px solid #374151",
                        paddingTop: 6,
                        fontSize: "10pt"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: contrato.cliente_nome ?? "—" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "CPF: ",
                        cliente?.cpf_cnpj ?? "—",
                        " (Devedor)"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] }) });
}
function exportToCsv(filename, rows, headers) {
  if (rows.length === 0) {
    const blob2 = new Blob(["\uFEFF"], { type: "text/csv;charset=utf-8;" });
    triggerDownload(blob2, filename);
    return;
  }
  const cols = headers ?? Object.keys(rows[0]).map((k) => ({ key: k, label: k }));
  const escape = (val) => {
    if (val === null || val === void 0) return "";
    const s = String(val).replace(/"/g, '""');
    if (s.includes(";") || s.includes('"') || s.includes("\n")) {
      return `"${s}"`;
    }
    return s;
  };
  const headerLine = cols.map((c) => escape(c.label)).join(";");
  const lines = rows.map(
    (row) => cols.map((c) => escape(row[c.key])).join(";")
  );
  const csv = "\uFEFF" + [headerLine, ...lines].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  triggerDownload(blob, filename);
}
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
const fmtBRL = (v) => Number(v || 0).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const fmtDate = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};
const todayIso = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
function RelatoriosPage() {
  const [tab, setTab] = reactExports.useState("financeiro");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold truncate", children: "Relatórios e Documentos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: "Análises financeiras e geração de contratos" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-3 sm:p-6 space-y-4 min-w-0 overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "financeiro", className: "text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 mr-1 sm:mr-1.5" }),
            "Financeiro"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "contratos", className: "text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 mr-1 sm:mr-1.5" }),
            "Contratos"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "inadimplencia", className: "text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 mr-1 sm:mr-1.5" }),
            "Inadimplência"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "financeiro", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FinanceiroTab, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "contratos", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContratosTab, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "inadimplencia", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InadimplenciaTab, {}) })
      ] }) })
    ] })
  ] }) });
}
function KpiBox({
  label,
  value,
  icon,
  tone,
  sub
}) {
  const toneMap = {
    primary: "border-t-primary",
    success: "border-t-success",
    info: "border-t-info",
    warning: "border-t-warning",
    destructive: "border-t-destructive"
  };
  const iconToneMap = {
    primary: "text-primary",
    success: "text-success",
    info: "text-info",
    warning: "text-warning",
    destructive: "text-destructive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border border-t-4 bg-card p-3 sm:p-4 shadow-sm", toneMap[tone]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-muted-foreground leading-tight", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("shrink-0", iconToneMap[tone]), children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-lg sm:text-xl font-bold text-foreground truncate", children: value }),
    sub ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] text-muted-foreground truncate", children: sub }) : null
  ] });
}
function SortHeader({
  label,
  col,
  current,
  dir,
  onClick,
  className
}) {
  const active = current === col;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: cn("px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors whitespace-nowrap", active && "text-primary", className), onClick: () => onClick(col), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
    label,
    active ? dir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-3 w-3 opacity-40" })
  ] }) });
}
function ClienteFilter({
  clientes,
  value,
  onChange
}) {
  const [open, setOpen] = reactExports.useState(false);
  const selected = clientes.find((c) => String(c.id) === value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", role: "combobox", className: "h-9 w-full sm:w-[220px] justify-between font-normal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: value === "todos" ? "Todos os clientes" : selected?.nome ?? "Selecionar..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsUpDown, { className: "h-4 w-4 opacity-50 shrink-0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[260px] p-0", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: "Buscar cliente..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: "Nenhum cliente encontrado." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { value: "todos", onSelect: () => {
            onChange("todos");
            setOpen(false);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: cn("h-4 w-4 mr-2", value === "todos" ? "opacity-100" : "opacity-0") }),
            "Todos os clientes"
          ] }),
          clientes.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { value: c.nome ?? String(c.id), onSelect: () => {
            onChange(String(c.id));
            setOpen(false);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: cn("h-4 w-4 mr-2", value === String(c.id) ? "opacity-100" : "opacity-0") }),
            c.nome ?? "—"
          ] }, String(c.id)))
        ] })
      ] })
    ] }) })
  ] });
}
function FinanceiroTab() {
  const [dataIni, setDataIni] = reactExports.useState("");
  const [dataFim, setDataFim] = reactExports.useState("");
  const [busca, setBusca] = reactExports.useState("");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(5);
  const [sortKey, setSortKey] = reactExports.useState("vencimento");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const {
    user,
    loading: authLoading
  } = useAuth();
  const authReady = !authLoading && !!user;
  const empQ = useQuery({
    queryKey: ["emprestimos"],
    queryFn: () => listEmprestimos(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  reactExports.useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = reactExports.useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const parcelasPeriodo = reactExports.useMemo(() => {
    return parcelas.filter((p) => {
      if (!p.data_vencimento) return false;
      if (dataIni && p.data_vencimento < dataIni) return false;
      if (dataFim && p.data_vencimento > dataFim) return false;
      return true;
    });
  }, [parcelas, dataIni, dataFim]);
  const kpis = reactExports.useMemo(() => {
    const totalPrevisto = parcelasPeriodo.reduce((s, p) => s + p.valor_parcela, 0);
    const isPaga = (p) => p.status === "pago" || p.status === "paga";
    const totalRealizado = parcelasPeriodo.filter(isPaga).reduce((s, p) => s + (p.valor_pago ?? p.valor_parcela), 0);
    const emAberto = parcelasPeriodo.filter((p) => !isPaga(p)).reduce((s, p) => s + p.valor_parcela, 0);
    const taxaRealizacao = totalPrevisto > 0 ? Math.round(totalRealizado / totalPrevisto * 100) : 0;
    return {
      totalPrevisto,
      totalRealizado,
      emAberto,
      taxaRealizacao
    };
  }, [parcelasPeriodo]);
  const dadosMensais = reactExports.useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    const buckets = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const yy = String(d.getFullYear()).slice(-2);
      buckets.push({
        key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
        label: `${MESES[d.getMonth()]}/${yy}`,
        previsto: 0,
        realizado: 0
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
  const detalhadas = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = parcelasPeriodo.filter((p) => {
      if (!q) return true;
      const codigo = (p.contrato_codigo ?? "").toLowerCase();
      const nome = (p.cliente_nome ?? "").toLowerCase();
      return codigo.includes(q) || nome.includes(q);
    });
    if (sortKey) {
      arr = [...arr].sort((a, b) => {
        let av = "";
        let bv = "";
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
  const handleSort = (k) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };
  const isLoading = empQ.isLoading || parQ.isLoading;
  const handleExport = () => {
    exportToCsv(`financeiro-${todayIso()}.csv`, detalhadas.map((p) => ({
      cliente: p.cliente_nome ?? "—",
      contrato: p.contrato_codigo ?? "",
      vencimento: fmtDate(p.data_vencimento),
      valor: p.valor_parcela.toFixed(2).replace(".", ","),
      valor_pago: (p.valor_pago ?? 0).toFixed(2).replace(".", ","),
      status: p.status ?? ""
    })), [{
      key: "cliente",
      label: "Cliente"
    }, {
      key: "contrato",
      label: "Contrato"
    }, {
      key: "vencimento",
      label: "Vencimento"
    }, {
      key: "valor",
      label: "Valor (R$)"
    }, {
      key: "valor_pago",
      label: "Valor Pago (R$)"
    }, {
      key: "status",
      label: "Status"
    }]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:flex-wrap rounded-lg border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }),
        "Período:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: dataIni, onChange: (e) => setDataIni(e.target.value), className: "h-9 sm:w-[160px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: dataFim, onChange: (e) => setDataFim(e.target.value), className: "h-9 sm:w-[160px]" }),
        (dataIni || dataFim) && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => {
          setDataIni("");
          setDataFim("");
        }, children: "Limpar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleExport, disabled: isLoading || detalhadas.length === 0, className: "sm:ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Exportar CSV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "CSV" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Total Previsto", value: fmtBRL(kpis.totalPrevisto), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }), tone: "info", sub: "Soma de todas parcelas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Total Realizado", value: fmtBRL(kpis.totalRealizado), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }), tone: "success", sub: "Parcelas pagas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Em Aberto", value: fmtBRL(kpis.emAberto), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Hourglass, { className: "h-4 w-4" }), tone: "warning", sub: "Parcelas pendentes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Taxa Realização", value: `${kpis.taxaRealizacao}%`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "h-4 w-4" }), tone: "primary", sub: "Previsto vs realizado" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-3 sm:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4 text-info" }),
          "Previsto vs Realizado — Últimos 6 Meses"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-sm bg-info" }),
            "Previsto"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-sm bg-success" }),
            "Realizado"
          ] })
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { dados: dadosMensais })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-4 w-4 text-primary" }),
          "Detalhamento de Parcelas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:ml-auto sm:w-[280px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: busca, onChange: (e) => {
            setBusca(e.target.value);
            setPagina(1);
          }, placeholder: "Buscar cliente ou contrato...", className: "h-9 pl-9" })
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : detalhadas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-10 w-10 text-muted-foreground mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Nenhuma parcela encontrada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ajuste o período ou a busca." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Cliente", col: "cliente", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Contrato", col: "contrato", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Vencimento", col: "vencimento", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Valor", col: "valor", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Valor Pago", col: "valorPago", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Status", col: "status", current: sortKey, dir: sortDir, onClick: handleSort })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginadas.map((p) => {
            const paga = p.status === "pago" || p.status === "paga";
            const atrasada = !paga && p.data_vencimento && p.data_vencimento < todayIso();
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0 hover:bg-muted/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: p.cliente_nome ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs font-semibold text-primary", children: p.contrato_codigo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn("px-3 py-2.5 whitespace-nowrap", atrasada ? "text-destructive font-medium" : "text-muted-foreground"), children: fmtDate(p.data_vencimento) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium", children: fmtBRL(p.valor_parcela) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn("px-3 py-2.5", paga ? "text-success font-medium" : "text-muted-foreground"), children: paga ? fmtBRL(p.valor_pago ?? p.valor_parcela) : "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("border", paga ? "bg-success/15 text-success border-success/30" : atrasada ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-warning/15 text-warning border-warning/30"), children: paga ? "Pago" : atrasada ? "Atrasado" : "Pendente" }) })
            ] }, String(p.id));
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y", children: paginadas.map((p) => {
          const paga = p.status === "pago" || p.status === "paga";
          const atrasada = !paga && p.data_vencimento && p.data_vencimento < todayIso();
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm truncate", children: p.cliente_nome ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("border shrink-0", paga ? "bg-success/15 text-success border-success/30" : atrasada ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-warning/15 text-warning border-warning/30"), children: paga ? "Pago" : atrasada ? "Atrasado" : "Pendente" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-primary", children: p.contrato_codigo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(atrasada ? "text-destructive font-medium" : "text-muted-foreground"), children: fmtDate(p.data_vencimento) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: fmtBRL(p.valor_parcela) }),
              paga ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success font-medium text-xs", children: [
                "Pago: ",
                fmtBRL(p.valor_pago ?? p.valor_parcela)
              ] }) : null
            ] })
          ] }, String(p.id));
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TablePagination, { page: pagina, pageSize: porPagina, totalItems: total, onPageChange: setPagina, onPageSizeChange: (s) => {
          setPorPagina(s);
          setPagina(1);
        }, itemLabel: "parcelas" })
      ] })
    ] })
  ] });
}
function BarChart({
  dados
}) {
  const max = Math.max(...dados.flatMap((d) => [d.previsto, d.realizado]), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 sm:gap-3 h-44 px-1 sm:px-2", children: dados.map((d, i) => {
    const hp = d.previsto / max * 140;
    const hr = d.realizado / max * 140;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1.5 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5 sm:gap-1 items-end h-36 w-full justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 sm:w-4 rounded-t bg-info hover:opacity-80 transition-opacity", style: {
          height: `${hp}px`
        }, title: `Previsto: ${fmtBRL(d.previsto)}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 sm:w-4 rounded-t bg-success hover:opacity-80 transition-opacity", style: {
          height: `${hr}px`
        }, title: `Realizado: ${fmtBRL(d.realizado)}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: d.label })
    ] }, i);
  }) });
}
function ContratosTab() {
  const [busca, setBusca] = reactExports.useState("");
  const [clienteFiltro, setClienteFiltro] = reactExports.useState("todos");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(5);
  const [sortKey, setSortKey] = reactExports.useState("id");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [contratoPdf, setContratoPdf] = reactExports.useState(null);
  const {
    user,
    loading: authLoading
  } = useAuth();
  const authReady = !authLoading && !!user;
  const empQ = useQuery({
    queryKey: ["emprestimos"],
    queryFn: () => listEmprestimos(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const cliQ = useQuery({
    queryKey: ["clientes"],
    queryFn: () => listClientes(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const emprestimos = reactExports.useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = reactExports.useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const clientes = reactExports.useMemo(() => cliQ.data?.data ?? [], [cliQ.data]);
  const seqMap = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    [...emprestimos].sort((a, b) => (a.created_at ?? "").localeCompare(b.created_at ?? "")).forEach((e, i) => m.set(String(e.id), i + 1));
    return m;
  }, [emprestimos]);
  const codigoOf = (id) => `#${String(seqMap.get(String(id)) ?? 0).padStart(3, "0")}`;
  const kpis = reactExports.useMemo(() => {
    const totalContratos = emprestimos.filter((e) => e.status === "ativo").length;
    const volumeTotal = emprestimos.reduce((s, e) => s + e.valor_principal, 0);
    const ticketMedio = emprestimos.length > 0 ? volumeTotal / emprestimos.length : 0;
    const parcelasAtivas = parcelas.filter((p) => p.status !== "pago" && p.status !== "paga").length;
    return {
      totalContratos,
      volumeTotal,
      ticketMedio,
      parcelasAtivas
    };
  }, [emprestimos, parcelas]);
  const filtrados = reactExports.useMemo(() => {
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
        let av = "";
        let bv = "";
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
  const parcelasStats = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    parcelas.forEach((p) => {
      const k = String(p.emprestimo_id);
      const cur = m.get(k) ?? {
        pagas: 0,
        total: 0
      };
      cur.total += 1;
      if (p.status === "pago" || p.status === "paga") cur.pagas += 1;
      m.set(k, cur);
    });
    return m;
  }, [parcelas]);
  const handleSort = (k) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };
  const handleExport = () => {
    exportToCsv(`contratos-${todayIso()}.csv`, filtrados.map((e) => ({
      id: codigoOf(e.id),
      cliente: e.cliente_nome ?? "—",
      valor: e.valor_principal.toFixed(2).replace(".", ","),
      taxa: `${e.taxa_juros}%`,
      parcelas: e.numero_parcelas,
      tipo: e.tipo_juros ?? "",
      data: fmtDate(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null),
      status: e.status ?? ""
    })), [{
      key: "id",
      label: "Contrato"
    }, {
      key: "cliente",
      label: "Cliente"
    }, {
      key: "valor",
      label: "Valor (R$)"
    }, {
      key: "taxa",
      label: "Taxa"
    }, {
      key: "parcelas",
      label: "Parcelas"
    }, {
      key: "tipo",
      label: "Tipo"
    }, {
      key: "data",
      label: "Data"
    }, {
      key: "status",
      label: "Status"
    }]);
  };
  const isLoading = empQ.isLoading || parQ.isLoading || cliQ.isLoading;
  const contratoSelecionado = contratoPdf ? emprestimos.find((e) => String(e.id) === String(contratoPdf.id)) ?? null : null;
  const clienteSelecionado = contratoSelecionado ? clientes.find((c) => String(c.id) === String(contratoSelecionado.cliente_id)) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Total Contratos", value: String(kpis.totalContratos), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }), tone: "info", sub: "Contratos ativos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Volume Total", value: fmtBRL(kpis.volumeTotal), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }), tone: "success", sub: "Soma dos empréstimos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Ticket Médio", value: fmtBRL(kpis.ticketMedio), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4" }), tone: "primary", sub: "Por contrato" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Parcelas Ativas", value: String(kpis.parcelasAtivas), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Hourglass, { className: "h-4 w-4" }), tone: "warning", sub: "Aguardando pagamento" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary" }),
          "Lista de Contratos"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:ml-auto sm:items-center w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-[260px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: busca, onChange: (e) => {
              setBusca(e.target.value);
              setPagina(1);
            }, placeholder: "Buscar cliente ou contrato...", className: "h-9 pl-9" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClienteFilter, { clientes, value: clienteFiltro, onChange: (v) => {
            setClienteFiltro(v);
            setPagina(1);
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleExport, disabled: isLoading || filtrados.length === 0, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Exportar CSV" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "CSV" })
          ] })
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-10 w-10 text-muted-foreground mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Nenhum contrato encontrado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ajuste os filtros e tente novamente." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Contrato", col: "id", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Cliente", col: "cliente", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Valor", col: "valor", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Taxa", col: "taxa", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Parcelas", col: "parcelas", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Tipo", col: "tipo", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Início", col: "data", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground", children: "Ações" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginados.map((e) => {
            const stats = parcelasStats.get(String(e.id)) ?? {
              pagas: 0,
              total: e.numero_parcelas
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0 hover:bg-muted/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs font-semibold text-primary", children: codigoOf(e.id) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: e.cliente_nome ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium", children: fmtBRL(e.valor_principal) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-muted-foreground", children: [
                e.taxa_juros,
                "% a.m."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-muted-foreground", children: [
                e.numero_parcelas,
                "x"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-info/10 text-info border-info/30 capitalize", children: e.tipo_juros ?? "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground whitespace-nowrap", children: fmtDate(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "bg-success/15 text-success border-success/30", children: [
                "● ",
                stats.pagas,
                "/",
                stats.total,
                " pagas"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", className: "h-8 w-8 bg-info/10 hover:bg-info/20 border-info/30 text-info", onClick: () => setContratoPdf({
                  id: e.id,
                  codigo: codigoOf(e.id)
                }), title: "Visualizar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", className: "h-8 w-8 bg-success/10 hover:bg-success/20 border-success/30 text-success", onClick: () => setContratoPdf({
                  id: e.id,
                  codigo: codigoOf(e.id)
                }), title: "Gerar PDF", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }) })
              ] }) })
            ] }, String(e.id));
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y", children: paginados.map((e) => {
          const stats = parcelasStats.get(String(e.id)) ?? {
            pagas: 0,
            total: e.numero_parcelas
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-semibold text-primary shrink-0", children: codigoOf(e.id) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm truncate", children: e.cliente_nome ?? "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "bg-success/15 text-success border-success/30 shrink-0 text-[10px]", children: [
                stats.pagas,
                "/",
                stats.total
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Valor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: fmtBRL(e.valor_principal) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Taxa" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
                  e.taxa_juros,
                  "% a.m."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Parcelas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
                  e.numero_parcelas,
                  "x",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground capitalize", children: [
                    "(",
                    e.tipo_juros ?? "—",
                    ")"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Início" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: fmtDate(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1 bg-info/10 hover:bg-info/20 border-info/30 text-info h-8", onClick: () => setContratoPdf({
                id: e.id,
                codigo: codigoOf(e.id)
              }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                "Visualizar"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1 bg-success/10 hover:bg-success/20 border-success/30 text-success h-8", onClick: () => setContratoPdf({
                id: e.id,
                codigo: codigoOf(e.id)
              }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
                "PDF"
              ] })
            ] })
          ] }, String(e.id));
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TablePagination, { page: pagina, pageSize: porPagina, totalItems: total, onPageChange: setPagina, onPageSizeChange: (s) => {
          setPorPagina(s);
          setPagina(1);
        }, itemLabel: "contratos" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContratoPdfDialog, { open: !!contratoPdf, onOpenChange: (o) => !o && setContratoPdf(null), contrato: contratoSelecionado, contratoCodigo: contratoPdf?.codigo ?? "", parcelas, cliente: clienteSelecionado ?? null })
  ] });
}
function InadimplenciaTab() {
  const {
    name: adminName
  } = useAdminName();
  const [busca, setBusca] = reactExports.useState("");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(5);
  const [sortKey, setSortKey] = reactExports.useState("atraso");
  const [sortDir, setSortDir] = reactExports.useState("desc");
  const {
    user,
    loading: authLoading
  } = useAuth();
  const authReady = !authLoading && !!user;
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const cliQ = useQuery({
    queryKey: ["clientes"],
    queryFn: () => listClientes(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const parcelas = reactExports.useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const clientes = reactExports.useMemo(() => cliQ.data?.data ?? [], [cliQ.data]);
  const hoje = todayIso();
  const atrasadas = reactExports.useMemo(() => {
    return parcelas.filter((p) => {
      if (!p.data_vencimento) return false;
      if (p.status === "pago" || p.status === "paga") return false;
      return p.data_vencimento < hoje;
    });
  }, [parcelas, hoje]);
  const diasAtraso = (iso) => {
    if (!iso) return 0;
    const d = (/* @__PURE__ */ new Date(iso + "T00:00:00")).getTime();
    const today = (/* @__PURE__ */ new Date(hoje + "T00:00:00")).getTime();
    return Math.floor((today - d) / 864e5);
  };
  const agrupados = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    atrasadas.forEach((p) => {
      const k = String(p.cliente_id ?? "—");
      const cur = map.get(k) ?? {
        cliente_id: k,
        cliente_nome: p.cliente_nome ?? "—",
        contrato_codigos: [],
        qtdParcelas: 0,
        totalDivida: 0,
        diasAtrasoMax: 0,
        parcelas: []
      };
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
    map.forEach((v) => {
      const cli = clientes.find((c) => String(c.id) === v.cliente_id);
      v.telefone = cli?.telefone ?? null;
    });
    return Array.from(map.values());
  }, [atrasadas, clientes]);
  const filtrados = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = agrupados.filter((c) => {
      if (!q) return true;
      const nome = c.cliente_nome.toLowerCase();
      const codigos = c.contrato_codigos.join(" ").toLowerCase();
      return nome.includes(q) || codigos.includes(q);
    });
    arr = [...arr].sort((a, b) => {
      let av = 0;
      let bv = 0;
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
  const kpis = reactExports.useMemo(() => {
    const inadimplentes = agrupados.length;
    const totalEmAtraso = agrupados.reduce((s, c) => s + c.totalDivida, 0);
    const maiorAtraso = agrupados.reduce((m, c) => Math.max(m, c.diasAtrasoMax), 0);
    const parcelasAtras = atrasadas.length;
    return {
      inadimplentes,
      totalEmAtraso,
      maiorAtraso,
      parcelasAtras
    };
  }, [agrupados, atrasadas]);
  const handleSort = (k) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("desc");
    }
  };
  const handleExport = () => {
    exportToCsv(`inadimplencia-${todayIso()}.csv`, filtrados.map((c) => ({
      cliente: c.cliente_nome,
      contratos: c.contrato_codigos.join(", "),
      qtd: c.qtdParcelas,
      total: c.totalDivida.toFixed(2).replace(".", ","),
      atraso: c.diasAtrasoMax
    })), [{
      key: "cliente",
      label: "Cliente"
    }, {
      key: "contratos",
      label: "Contratos"
    }, {
      key: "qtd",
      label: "Qtd Parcelas"
    }, {
      key: "total",
      label: "Total Dívida (R$)"
    }, {
      key: "atraso",
      label: "Dias em Atraso"
    }]);
  };
  const buildWhatsApp = (c) => {
    const tel = (c.telefone ?? "").replace(/\D/g, "");
    if (!tel) return null;
    const numero = tel.length === 11 || tel.length === 10 ? `55${tel}` : tel;
    const contratos = c.contrato_codigos.join(", ");
    const msg = `Olá ${c.cliente_nome}, identificamos ${c.qtdParcelas} parcela(s) em atraso do(s) contrato(s) ${contratos}, totalizando ${fmtBRL(c.totalDivida)}. Por favor, entre em contato para regularizarmos a situação. Atenciosamente, ${adminName} - JuroPro.`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  };
  const riscoBadge = (dias) => {
    if (dias > 60) return {
      label: "Alto Risco",
      cls: "bg-destructive/15 text-destructive border-destructive/30"
    };
    if (dias > 30) return {
      label: "Médio Risco",
      cls: "bg-warning/15 text-warning border-warning/30"
    };
    return {
      label: "Baixo Risco",
      cls: "bg-info/15 text-info border-info/30"
    };
  };
  const isLoading = parQ.isLoading || cliQ.isLoading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Inadimplentes", value: String(kpis.inadimplentes), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }), tone: "destructive", sub: "Clientes em atraso" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Total em Atraso", value: fmtBRL(kpis.totalEmAtraso), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }), tone: "success", sub: "Valor total inadimplente" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Maior Atraso", value: `${kpis.maiorAtraso} dias`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }), tone: "warning", sub: "Parcela mais antiga" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Parcelas Atrasadas", value: String(kpis.parcelasAtras), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }), tone: "primary", sub: "Total de parcelas" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-warning" }),
          "Clientes Inadimplentes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:ml-auto sm:items-center w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-[280px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: busca, onChange: (e) => {
              setBusca(e.target.value);
              setPagina(1);
            }, placeholder: "Buscar cliente ou contrato...", className: "h-9 pl-9" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleExport, disabled: isLoading || filtrados.length === 0, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Exportar CSV" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "CSV" })
          ] })
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-success mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Nenhum cliente inadimplente 🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Tudo em dia neste filtro." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Cliente", col: "cliente", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground", children: "Contrato" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Qtd Parcelas", col: "qtd", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Total Dívida", col: "total", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: "Dias em Atraso", col: "atraso", current: sortKey, dir: sortDir, onClick: handleSort }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground", children: "Risco" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground", children: "Ações" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginados.map((c) => {
            const wpp = buildWhatsApp(c);
            const risco = riscoBadge(c.diasAtrasoMax);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0 hover:bg-muted/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: c.cliente_nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs font-semibold text-primary", children: c.contrato_codigos.join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: c.qtdParcelas }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium text-destructive", children: fmtBRL(c.totalDivida) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 font-medium text-warning", children: [
                c.diasAtrasoMax,
                " dias"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("border", risco.cls), children: [
                "● ",
                risco.label
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                wpp ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: wpp, target: "_blank", rel: "noreferrer", className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-success/30 bg-success/10 text-success hover:bg-success/20", title: "Cobrar via WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-muted bg-muted/30 text-muted-foreground opacity-50", title: "Telefone não cadastrado", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", className: "h-8 w-8 bg-info/10 hover:bg-info/20 border-info/30 text-info", title: "Ver detalhes em Vencimentos", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/vencimentos?status=atrasado`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }) }) })
              ] }) })
            ] }, c.cliente_id);
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y", children: paginados.map((c) => {
          const wpp = buildWhatsApp(c);
          const risco = riscoBadge(c.diasAtrasoMax);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm truncate", children: c.cliente_nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("border shrink-0 text-[10px]", risco.cls), children: risco.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-primary", children: c.contrato_codigos.join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                c.qtdParcelas,
                " parcela",
                c.qtdParcelas > 1 ? "s" : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase", children: "Total dívida" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-destructive", children: fmtBRL(c.totalDivida) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase", children: "Dias atraso" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-warning", children: [
                  c.diasAtrasoMax,
                  " dias"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
              wpp ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: wpp, target: "_blank", rel: "noreferrer", className: "flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border border-success/30 bg-success/10 text-success text-xs font-medium hover:bg-success/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" }),
                "WhatsApp"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border bg-muted/30 text-muted-foreground text-xs opacity-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" }),
                "Sem telefone"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/vencimentos?status=atrasado", className: "flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border border-info/30 bg-info/10 text-info text-xs font-medium hover:bg-info/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                "Detalhes"
              ] })
            ] })
          ] }, c.cliente_id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TablePagination, { page: pagina, pageSize: porPagina, totalItems: total, onPageChange: setPagina, onPageSizeChange: (s) => {
          setPorPagina(s);
          setPagina(1);
        }, itemLabel: "clientes" })
      ] })
    ] })
  ] });
}
function WhatsAppIcon({
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" }) });
}
export {
  RelatoriosPage as component
};
