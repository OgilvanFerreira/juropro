import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQueryClient, u as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-C-pLuHIW.mjs";
import { B as Button } from "./use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./input-DUQ65Lx-.mjs";
import { L as Label } from "./label-BOY-CzWM.mjs";
import { c as maskTaxa, T as Textarea, p as parseTaxa, d as formatCpfCnpj } from "./masks-DaNm02lZ.mjs";
import { c as cn } from "./router-DtZwCPIN.mjs";
import { f as updateEmprestimo, h as createEmprestimo, a as listClientes } from "./emprestimos.functions-BLtY37RZ.mjs";
import { W as Wallet, b as LoaderCircle, X, l as Search, g as Check } from "../_libs/lucide-react.mjs";
const PERIODICIDADES = [
  { value: "mensal", label: "Mensal", dias: 30 },
  { value: "quinzenal", label: "Quinzenal", dias: 15 },
  { value: "semanal", label: "Semanal", dias: 7 },
  { value: "diario", label: "Diário", dias: 1 }
];
const fmtBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
function calcular(form) {
  const valor = parseFloat(form.valorPrincipal);
  const taxa = parseTaxa(form.taxaJuros) / 100;
  const n = parseInt(form.numParcelas);
  const per = PERIODICIDADES.find((p) => p.value === form.periodicidade);
  if (!valor || taxa < 0 || !n || !form.dataInicio || !per) return null;
  if (Number.isNaN(valor) || Number.isNaN(taxa) || Number.isNaN(n)) return null;
  const inicio = /* @__PURE__ */ new Date(form.dataInicio + "T00:00:00");
  const buildData = (i) => {
    const d = new Date(inicio);
    d.setDate(d.getDate() + i * per.dias);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return { vencimento: d.toLocaleDateString("pt-BR"), vencimentoIso: iso };
  };
  let valorParcela;
  let totalPagar;
  let parcelas;
  if (form.tipoJuros === "simples") {
    totalPagar = valor + valor * taxa * n;
    valorParcela = totalPagar / n;
    parcelas = Array.from({ length: n }, (_, i) => ({
      numero: i + 1,
      ...buildData(i),
      valor: valorParcela
    }));
  } else if (form.tipoJuros === "composto") {
    if (taxa === 0) {
      valorParcela = valor / n;
      totalPagar = valor;
    } else {
      valorParcela = valor * (taxa * Math.pow(1 + taxa, n)) / (Math.pow(1 + taxa, n) - 1);
      totalPagar = valorParcela * n;
    }
    parcelas = Array.from({ length: n }, (_, i) => ({
      numero: i + 1,
      ...buildData(i),
      valor: valorParcela
    }));
  } else {
    const juro = valor * taxa;
    valorParcela = juro;
    totalPagar = juro * n + valor;
    parcelas = Array.from({ length: n }, (_, i) => {
      const ultima = i === n - 1;
      return {
        numero: i + 1,
        ...buildData(i),
        valor: ultima ? juro + valor : juro,
        ultima
      };
    });
  }
  return { parcelas, totalPagar, totalJuros: totalPagar - valor, valorParcela };
}
function ClienteCombobox({ value, onChange, clientes, loading }) {
  const [busca, setBusca] = reactExports.useState("");
  const [aberto, setAberto] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const seqMap = reactExports.useMemo(() => {
    const ordered = [...clientes].sort((a, b) => {
      const da = a.created_at ? new Date(a.created_at).getTime() : 0;
      const db = b.created_at ? new Date(b.created_at).getTime() : 0;
      return da - db;
    });
    const m = /* @__PURE__ */ new Map();
    ordered.forEach((c, idx) => {
      m.set(String(c.id), `#${String(idx + 1).padStart(3, "0")}`);
    });
    return m;
  }, [clientes]);
  const codigoCliente = (id) => seqMap.get(String(id)) ?? `#${String(id).slice(0, 6)}`;
  const filtrados = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return clientes.slice(0, 100);
    return clientes.filter((c) => {
      const nome = (c.nome ?? "").toLowerCase();
      const cpf = (c.cpf_cnpj ?? "").replace(/\D/g, "");
      const id = String(c.id);
      const codigo = (seqMap.get(id) ?? "").toLowerCase();
      return nome.includes(q) || cpf.includes(q.replace(/\D/g, "")) || id.includes(q) || codigo.includes(q);
    }).slice(0, 100);
  }, [busca, clientes, seqMap]);
  const sel = clientes.find((c) => String(c.id) === String(value));
  reactExports.useEffect(() => {
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setAberto(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setAberto((a) => !a),
        className: cn(
          "flex h-11 w-full items-center justify-between rounded-md border bg-background px-3 text-sm shadow-sm transition-all",
          aberto ? "border-success ring-2 ring-success/20" : "border-input"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "flex-1 truncate text-left",
                sel ? "text-foreground" : "text-muted-foreground"
              ),
              children: sel ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-success", children: codigoCliente(sel.id) }),
                " — ",
                sel.nome ?? "Sem nome"
              ] }) : loading ? "Carregando clientes..." : "Selecione ou busque um cliente..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-2 flex flex-shrink-0 items-center gap-1", children: [
            sel && /* @__PURE__ */ jsxRuntimeExports.jsx(
              X,
              {
                className: "h-4 w-4 text-muted-foreground hover:text-foreground",
                onClick: (e) => {
                  e.stopPropagation();
                  onChange("");
                  setBusca("");
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-xs text-muted-foreground transition-transform",
                  aberto && "rotate-180"
                ),
                children: "▼"
              }
            )
          ] })
        ]
      }
    ),
    aberto && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-md border bg-popover shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b px-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 flex-shrink-0 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            autoFocus: true,
            value: busca,
            onChange: (e) => setBusca(e.target.value),
            onClick: (e) => e.stopPropagation(),
            placeholder: "Buscar por nome ou CPF...",
            className: "flex-1 border-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          }
        ),
        busca && /* @__PURE__ */ jsxRuntimeExports.jsx(
          X,
          {
            className: "h-4 w-4 flex-shrink-0 cursor-pointer text-muted-foreground hover:text-foreground",
            onClick: () => setBusca("")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-60 overflow-y-auto", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-4 text-center text-sm text-muted-foreground", children: "Carregando..." }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-4 text-center text-sm text-muted-foreground", children: "Nenhum cliente encontrado" }) : filtrados.map((c) => {
        const ativo = String(value) === String(c.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              onChange(c.id);
              setBusca("");
              setAberto(false);
            },
            className: cn(
              "flex w-full items-center gap-3 border-l-[3px] px-3 py-2 text-left transition-colors hover:bg-muted",
              ativo ? "border-success bg-success/5" : "border-transparent"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    ativo ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
                  ),
                  children: (c.nome ?? "?").charAt(0).toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-sm font-medium text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1.5 font-bold text-success", children: codigoCliente(c.id) }),
                  c.nome ?? "Sem nome"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: c.cpf_cnpj ? formatCpfCnpj(c.cpf_cnpj) : "Sem CPF/CNPJ" })
              ] }),
              ativo && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 flex-shrink-0 text-success" })
            ]
          },
          c.id
        );
      }) })
    ] })
  ] });
}
function CardMetrica({
  label,
  valor,
  destaque
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-lg border p-3",
        destaque ? "border-2 border-success bg-success/5" : "border-border bg-muted/30"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "truncate text-base font-bold",
              destaque ? "text-success" : "text-foreground"
            ),
            children: valor
          }
        )
      ]
    }
  );
}
const INITIAL_FORM = {
  clienteId: "",
  valorPrincipal: "",
  taxaJuros: "",
  numParcelas: "",
  tipoJuros: "simples",
  periodicidade: "mensal",
  dataInicio: "",
  observacoes: ""
};
function extractPeriodicidade(obs) {
  if (!obs) return { periodicidade: "mensal", observacoes: "" };
  const match = obs.match(/^\[Periodicidade:\s*([^•\]]+)/i);
  let periodicidade = "mensal";
  if (match) {
    const label = match[1].trim().toLowerCase();
    if (label.startsWith("quinzen")) periodicidade = "quinzenal";
    else if (label.startsWith("seman")) periodicidade = "semanal";
    else if (label.startsWith("diár") || label.startsWith("diar"))
      periodicidade = "diario";
    else periodicidade = "mensal";
  }
  const cleaned = obs.replace(/^\[Periodicidade:[^\]]*\]\s*\n*/i, "").trim();
  return { periodicidade, observacoes: cleaned };
}
function NovoEmprestimoDialog({
  open,
  onOpenChange,
  emprestimo,
  defaultClienteId
}) {
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const queryClient = useQueryClient();
  const listClientesFn = useServerFn(listClientes);
  const createEmprestimoFn = useServerFn(createEmprestimo);
  const updateEmprestimoFn = useServerFn(updateEmprestimo);
  const isEdit = !!emprestimo;
  const clientesQuery = useQuery({
    queryKey: ["clientes", "list"],
    queryFn: () => listClientesFn(),
    enabled: open
  });
  const clientes = clientesQuery.data?.data ?? [];
  reactExports.useEffect(() => {
    if (!open) return;
    if (emprestimo) {
      const { periodicidade, observacoes } = extractPeriodicidade(
        emprestimo.observacoes
      );
      const tj = emprestimo.tipo_juros ?? "simples";
      setForm({
        clienteId: emprestimo.cliente_id ?? "",
        valorPrincipal: String(emprestimo.valor_principal ?? ""),
        taxaJuros: emprestimo.taxa_juros != null ? String(emprestimo.taxa_juros).replace(".", ",") : "",
        numParcelas: String(emprestimo.numero_parcelas ?? ""),
        tipoJuros: ["simples", "composto", "so_juros"].includes(
          tj
        ) ? tj : "simples",
        periodicidade,
        dataInicio: emprestimo.data_inicio ?? "",
        observacoes
      });
    } else {
      setForm({ ...INITIAL_FORM, clienteId: defaultClienteId ?? "" });
    }
  }, [open, emprestimo, defaultClienteId]);
  const resultado = reactExports.useMemo(
    () => calcular({
      valorPrincipal: form.valorPrincipal,
      taxaJuros: form.taxaJuros,
      numParcelas: form.numParcelas,
      tipoJuros: form.tipoJuros,
      periodicidade: form.periodicidade,
      dataInicio: form.dataInicio
    }),
    [form]
  );
  const cliente = clientes.find((c) => String(c.id) === String(form.clienteId));
  const podeSalvar = !!form.clienteId && !!resultado;
  const mutation = useMutation({
    mutationFn: async () => {
      if (!form.clienteId || !resultado) throw new Error("Dados inválidos");
      const parcelasPayload = resultado.parcelas.map((p) => ({
        numero: p.numero,
        data_vencimento: p.vencimentoIso,
        valor: Number(p.valor.toFixed(2))
      }));
      if (isEdit && emprestimo) {
        const res2 = await updateEmprestimoFn({
          data: {
            id: emprestimo.id,
            cliente_id: form.clienteId,
            valor_principal: parseFloat(form.valorPrincipal),
            taxa_juros: parseTaxa(form.taxaJuros),
            numero_parcelas: parseInt(form.numParcelas),
            tipo_juros: form.tipoJuros,
            periodicidade: form.periodicidade,
            data_inicio: form.dataInicio,
            observacoes: form.observacoes,
            parcelas: parcelasPayload
          }
        });
        if (!res2.ok) throw new Error(res2.error ?? "Erro ao atualizar empréstimo");
        return res2;
      }
      const res = await createEmprestimoFn({
        data: {
          cliente_id: form.clienteId,
          valor_principal: parseFloat(form.valorPrincipal),
          taxa_juros: parseTaxa(form.taxaJuros),
          numero_parcelas: parseInt(form.numParcelas),
          tipo_juros: form.tipoJuros,
          periodicidade: form.periodicidade,
          data_inicio: form.dataInicio,
          observacoes: form.observacoes,
          parcelas: parcelasPayload
        }
      });
      if (!res.ok) throw new Error(res.error ?? "Erro ao salvar empréstimo");
      return res;
    },
    onSuccess: () => {
      toast.success(
        isEdit ? "Empréstimo atualizado com sucesso!" : "Empréstimo cadastrado com sucesso!"
      );
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      queryClient.invalidateQueries({ queryKey: ["emprestimos", "list"] });
      onOpenChange(false);
    },
    onError: (err) => {
      toast.error(err.message || "Falha ao salvar empréstimo");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[92vh] max-w-5xl overflow-y-auto p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b bg-background p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "flex-row items-center gap-3 space-y-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-success text-success-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-lg", children: isEdit ? "Editar Empréstimo" : "Novo Empréstimo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: isEdit ? "Altere os dados e regenere as parcelas" : "Simulação gerada em tempo real" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-5 p-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "👤 Cliente" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Cliente *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ClienteCombobox,
            {
              value: form.clienteId,
              onChange: (id) => setForm((p) => ({ ...p, clienteId: id })),
              clientes,
              loading: clientesQuery.isLoading
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "💵 Dados Financeiros" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Valor Principal (R$) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "0,00",
                  value: form.valorPrincipal,
                  onChange: (e) => setForm((p) => ({ ...p, valorPrincipal: e.target.value })),
                  className: "h-11"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Taxa de Juros (%) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  inputMode: "decimal",
                  placeholder: "0,00",
                  value: form.taxaJuros,
                  onChange: (e) => setForm((p) => ({ ...p, taxaJuros: maskTaxa(e.target.value) })),
                  className: "h-11"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Número de Parcelas *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "Ex: 12",
                value: form.numParcelas,
                onChange: (e) => setForm((p) => ({ ...p, numParcelas: e.target.value })),
                className: "h-11"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "⚙️ Configurações" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Tipo de Juros *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["simples", "composto", "so_juros"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setForm((p) => ({ ...p, tipoJuros: t })),
                  className: cn(
                    "flex-1 rounded-md border-2 px-2 py-2 text-xs font-semibold transition-colors sm:text-sm",
                    form.tipoJuros === t ? "border-success bg-success/5 text-success" : "border-input bg-background text-muted-foreground hover:border-muted-foreground/40"
                  ),
                  children: t === "simples" ? "Simples" : t === "composto" ? "Composto" : "Só Juros"
                },
                t
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Data de Início *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  value: form.dataInicio,
                  onChange: (e) => setForm((p) => ({ ...p, dataInicio: e.target.value })),
                  className: "h-11"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Periodicidade *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-4", children: PERIODICIDADES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setForm((f) => ({ ...f, periodicidade: p.value })),
                className: cn(
                  "rounded-md border-2 px-2 py-2 text-xs font-semibold transition-colors",
                  form.periodicidade === p.value ? "border-success bg-success/5 text-success" : "border-input bg-background text-muted-foreground hover:border-muted-foreground/40"
                ),
                children: p.label
              },
              p.value
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "📝 Observações" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              placeholder: "Adicione observações sobre este empréstimo...",
              value: form.observacoes,
              onChange: (e) => setForm((p) => ({ ...p, observacoes: e.target.value })),
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => onOpenChange(false),
              className: "flex-1",
              disabled: mutation.isPending,
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: () => mutation.mutate(),
              disabled: !podeSalvar || mutation.isPending,
              className: "flex-[2] bg-success text-success-foreground hover:bg-success/90",
              children: mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                " ",
                isEdit ? "Atualizando..." : "Salvando..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isEdit ? "💾 Atualizar Empréstimo" : "💾 Salvar Empréstimo" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-bold text-foreground", children: "📊 Resumo" }),
          !resultado ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-4xl", children: "📊" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "Preview em Tempo Real" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Preencha os campos para ver a simulação" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            cliente && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 rounded-md border-l-4 border-success bg-success/5 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-sm font-semibold text-success", children: [
              "👤 ",
              cliente.nome
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Valor Principal",
                  valor: fmtBRL(parseFloat(form.valorPrincipal) || 0)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Total de Juros",
                  valor: fmtBRL(resultado.totalJuros)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Valor da Parcela",
                  valor: fmtBRL(resultado.valorParcela)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Total a Pagar",
                  valor: fmtBRL(resultado.totalPagar),
                  destaque: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-md border-l-4 border-warning bg-warning/10 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground", children: [
              "⚠️ Juros",
              " ",
              form.tipoJuros === "simples" ? "Simples" : form.tipoJuros === "composto" ? "Compostos" : "Só Juros",
              " ",
              "•",
              " ",
              PERIODICIDADES.find((p) => p.value === form.periodicidade)?.label,
              " ",
              "• ",
              form.numParcelas,
              " parcela(s)"
            ] }) }),
            form.tipoJuros === "so_juros" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 rounded-md border-l-4 border-success bg-success/5 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: "💡 O cliente pagará apenas os juros mensais, quitando o capital principal na última parcela." }) })
          ] })
        ] }),
        resultado && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-bold text-foreground", children: "📅 Parcelas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 bg-muted/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold text-muted-foreground", children: "Nº" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold text-muted-foreground", children: "Vencimento" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold text-muted-foreground", children: "Valor" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: resultado.parcelas.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 font-bold text-success", children: [
                "#",
                String(p.numero).padStart(2, "0")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: p.vencimento }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fmtBRL(p.valor) }),
                p.ultima && form.tipoJuros === "so_juros" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-success", children: "Juros + Principal" })
              ] }) })
            ] }, p.numero)) })
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  NovoEmprestimoDialog as N
};
