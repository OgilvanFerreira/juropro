import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { u as useQuery, a as useQueryClient, b as useMutation } from "./_libs/tanstack__react-query.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { u as useServerFn } from "./_ssr/useServerFn-DL2oePlL.mjs";
import { S as SidebarProvider, A as AppSidebar, a as SidebarTrigger, f as Separator } from "./_ssr/AppSidebar-Ds599ZcL.mjs";
import { B as Button } from "./_ssr/use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./_ssr/input-DUQ65Lx-.mjs";
import { u as useAuth, b as Route$3, c as cn } from "./_ssr/router-DtZwCPIN.mjs";
import { C as Card, B as BRAZIL_UFS, l as lookupCep } from "./_ssr/cep-CPwan0YP.mjs";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./_ssr/alert-dialog-Bml6JMKQ.mjs";
import { u as useForm } from "./_libs/react-hook-form.mjs";
import { a } from "./_libs/hookform__resolvers.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./_ssr/dialog-C-pLuHIW.mjs";
import { L as Label } from "./_ssr/label-BOY-CzWM.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./_ssr/select-Z7vlNdU9.mjs";
import { c as createCliente, u as updateCliente, b as getCliente, e as deleteCliente, a as listClientes } from "./_ssr/emprestimos.functions-BLtY37RZ.mjs";
import { f as formatTelefone, d as formatCpfCnpj, m as maskTelefone, a as maskCpfCnpj, b as maskCep, i as isValidCep, e as isValidCpfCnpj, g as isValidTelefone } from "./_ssr/masks-DaNm02lZ.mjs";
import { N as NovoEmprestimoDialog } from "./_ssr/NovoEmprestimoDialog-CoutrFVJ.mjs";
import { T as TablePagination } from "./_ssr/table-pagination-BpSGPBj2.mjs";
import "./_ssr/index.mjs";
import "./_libs/seroval.mjs";
import { f as Users, U as UserPlus, j as TrendingUp, a8 as MapPin, e as CalendarClock, l as Search, P as Plus, b as LoaderCircle, G as Pencil, J as Trash2, n as ArrowUpDown, o as ArrowUp, p as ArrowDown } from "./_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "./_libs/zod.mjs";
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
import "./_libs/tanstack__query-core.mjs";
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
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-alert-dialog.mjs";
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_ssr/createSsrRpc-C2cGivNr.mjs";
import "./_ssr/auth-guard-RhM8Bjcl.mjs";
import "./_ssr/createMiddleware-BvN2ghIY.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
const formSchema = objectType({
  nome: stringType().trim().min(1, "Informe o nome"),
  email: stringType().trim().email("E-mail inválido").or(literalType("")).optional(),
  telefone: stringType().trim().min(1, "Informe o celular").refine(isValidTelefone, "Celular inválido"),
  data_nascimento: stringType().trim().optional(),
  cpf_cnpj: stringType().trim().refine((v) => !v || isValidCpfCnpj(v), "CPF/CNPJ inválido").optional(),
  rg: stringType().trim().optional(),
  cep: stringType().trim().refine((v) => !v || isValidCep(v), "CEP inválido").optional(),
  endereco: stringType().trim().optional(),
  numero: stringType().trim().optional(),
  complemento: stringType().trim().optional(),
  bairro: stringType().trim().optional(),
  cidade: stringType().trim().optional(),
  uf: stringType().trim().max(2).optional()
});
const EMPTY_VALUES = {
  nome: "",
  email: "",
  telefone: "",
  data_nascimento: "",
  cpf_cnpj: "",
  rg: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: ""
};
function clienteToFormValues(c) {
  return {
    nome: c.nome ?? "",
    email: c.email ?? "",
    telefone: c.telefone ? maskTelefone(c.telefone) : "",
    data_nascimento: c.data_nascimento ?? "",
    cpf_cnpj: c.cpf_cnpj ? maskCpfCnpj(c.cpf_cnpj) : "",
    rg: c.rg ?? "",
    cep: c.cep ? maskCep(c.cep) : "",
    endereco: c.endereco ?? "",
    numero: c.numero ?? "",
    complemento: c.complemento ?? "",
    bairro: c.bairro ?? "",
    cidade: c.cidade ?? "",
    uf: c.uf ?? ""
  };
}
function NovoClienteDialog({
  open,
  onOpenChange,
  cliente
}) {
  const queryClient = useQueryClient();
  const createClienteFn = useServerFn(createCliente);
  const updateClienteFn = useServerFn(updateCliente);
  const [cepLoading, setCepLoading] = reactExports.useState(false);
  const isEdit = !!cliente;
  const form = useForm({
    resolver: a(formSchema),
    defaultValues: EMPTY_VALUES
  });
  reactExports.useEffect(() => {
    if (!open) return;
    if (cliente) {
      form.reset(clienteToFormValues(cliente));
    } else {
      form.reset(EMPTY_VALUES);
    }
  }, [open, cliente, form]);
  const mutation = useMutation({
    mutationFn: async (values) => {
      if (isEdit && cliente) {
        return updateClienteFn({ data: { ...values, id: cliente.id } });
      }
      return createClienteFn({ data: values });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        if (res.code === "DUPLICATE_CPF_CNPJ") {
          form.setError("cpf_cnpj", {
            type: "manual",
            message: res.error ?? "CPF/CNPJ já cadastrado no sistema."
          });
          toast.error(res.error ?? "CPF/CNPJ já cadastrado no sistema.");
          return;
        }
        toast.error(
          isEdit ? "Erro ao atualizar cliente" : "Erro ao cadastrar cliente",
          {
            description: res.error ?? "Verifique os dados e tente novamente."
          }
        );
        return;
      }
      toast.success(
        isEdit ? "Cliente atualizado com sucesso!" : "Cliente cadastrado com sucesso!"
      );
      queryClient.invalidateQueries({ queryKey: ["clientes", "list"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      form.reset(EMPTY_VALUES);
      onOpenChange(false);
    },
    onError: (err) => {
      toast.error(
        isEdit ? "Erro ao atualizar cliente" : "Erro ao cadastrar cliente",
        {
          description: err instanceof Error ? err.message : "Erro desconhecido"
        }
      );
    }
  });
  const handleCepLookup = async () => {
    const cep = form.getValues("cep") ?? "";
    if (!cep || cep.replace(/\D/g, "").length !== 8) {
      toast.warning("Informe um CEP válido (8 dígitos).");
      return;
    }
    setCepLoading(true);
    const result = await lookupCep(cep);
    setCepLoading(false);
    if (!result) {
      toast.error("CEP não encontrado.");
      return;
    }
    form.setValue("endereco", result.logradouro ?? "");
    form.setValue("complemento", result.complemento ?? "");
    form.setValue("bairro", result.bairro ?? "");
    form.setValue("cidade", result.localidade ?? "");
    form.setValue("uf", result.uf ?? "");
    toast.success("Endereço preenchido automaticamente.");
  };
  const handleClose = (next) => {
    if (!next) form.reset(EMPTY_VALUES);
    onOpenChange(next);
  };
  const onSubmit = (values) => mutation.mutate(values);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Editar Cliente" : "Novo Cliente" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Preencha os dados do cliente. Campos com * são obrigatórios." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nome", children: "Nome *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "nome", ...form.register("nome") }),
          form.formState.errors.nome && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.nome.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "E-mail" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", ...form.register("email") }),
          form.formState.errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.email.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "telefone", children: "Celular *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "telefone",
              placeholder: "(00) 00000-0000",
              inputMode: "tel",
              value: form.watch("telefone") ?? "",
              onChange: (e) => form.setValue("telefone", maskTelefone(e.target.value), {
                shouldValidate: true
              })
            }
          ),
          form.formState.errors.telefone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.telefone.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "data_nascimento", children: "Data de nascimento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "data_nascimento",
              type: "date",
              ...form.register("data_nascimento")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cpf_cnpj", children: "CPF / CNPJ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "cpf_cnpj",
              placeholder: "000.000.000-00",
              inputMode: "numeric",
              value: form.watch("cpf_cnpj") ?? "",
              onChange: (e) => {
                form.clearErrors("cpf_cnpj");
                form.setValue("cpf_cnpj", maskCpfCnpj(e.target.value), {
                  shouldValidate: true
                });
              }
            }
          ),
          form.formState.errors.cpf_cnpj && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.cpf_cnpj.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rg", children: "RG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "rg", ...form.register("rg") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Endereço" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cep", children: "CEP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cep",
                placeholder: "00000-000",
                inputMode: "numeric",
                value: form.watch("cep") ?? "",
                onChange: (e) => form.setValue("cep", maskCep(e.target.value), {
                  shouldValidate: true
                })
              }
            ),
            form.formState.errors.cep && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.cep.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: handleCepLookup,
              disabled: cepLoading,
              className: "bg-success text-success-foreground hover:bg-success/90",
              children: [
                cepLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Buscar CEP" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-[1fr_140px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "endereco", children: "Endereço" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "endereco", ...form.register("endereco") }),
            form.formState.errors.endereco && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.endereco.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "numero", children: "Número" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "numero", ...form.register("numero") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "complemento", children: "Complemento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "complemento", ...form.register("complemento") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bairro", children: "Bairro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "bairro", ...form.register("bairro") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cidade", children: "Cidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cidade", ...form.register("cidade") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "uf", children: "UF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.watch("uf") ?? "",
                onValueChange: (v) => form.setValue("uf", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "uf", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "UF" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRAZIL_UFS.map((uf) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: uf, children: uf }, uf)) })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "flex-row justify-between gap-2 sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => handleClose(false),
            disabled: mutation.isPending,
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            disabled: mutation.isPending,
            className: "bg-success text-success-foreground hover:bg-success/90",
            children: [
              mutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              isEdit ? "Salvar Alterações" : "Cadastrar"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function formatDate(value) {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(new Date(value));
  } catch {
    return "—";
  }
}
function ClientesPage() {
  const {
    user,
    loading: authLoading
  } = useAuth();
  const authReady = !authLoading && !!user;
  const clientesQ = useQuery({
    queryKey: ["clientes", "list"],
    queryFn: () => listClientes(),
    enabled: authReady
  });
  const data = clientesQ.data ?? {
    data: [],
    error: null
  };
  const {
    novo
  } = Route$3.useSearch();
  const navigate = useNavigate({
    from: "/clientes"
  });
  const queryClient = useQueryClient();
  const deleteClienteFn = useServerFn(deleteCliente);
  const getClienteFn = useServerFn(getCliente);
  const [open, setOpen] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [clienteParaExcluir, setClienteParaExcluir] = reactExports.useState(null);
  const [clienteEditando, setClienteEditando] = reactExports.useState(null);
  const [loadingEditId, setLoadingEditId] = reactExports.useState(null);
  const [novoEmprestimoClienteId, setNovoEmprestimoClienteId] = reactExports.useState(null);
  const [sortKey, setSortKey] = reactExports.useState(null);
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(10);
  const handleSort = (key) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    }
  };
  const handleEditar = async (id) => {
    setLoadingEditId(id);
    try {
      const res = await getClienteFn({
        data: {
          id
        }
      });
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
  const handleDialogChange = (next) => {
    setOpen(next);
    if (!next) setClienteEditando(null);
  };
  reactExports.useEffect(() => {
    if (novo) {
      setOpen(true);
      navigate({
        search: {
          novo: void 0
        },
        replace: true
      });
    }
  }, [novo, navigate]);
  const clientes = data.data;
  const hasError = !!data.error;
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteClienteFn({
      data: {
        id
      }
    }),
    onSuccess: (result, _id) => {
      if (!result.ok) {
        toast.error(result.error ?? "Erro ao excluir cliente.");
        return;
      }
      toast.success("Cliente excluído com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["clientes", "list"]
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard", "kpis"]
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard", "charts"]
      });
      setClienteParaExcluir(null);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    }
  });
  const clientesComId = reactExports.useMemo(() => {
    const total = clientes.length;
    return clientes.map((c, idx) => ({
      ...c,
      seqId: total - idx
    }));
  }, [clientes]);
  const clientesFiltrados = reactExports.useMemo(() => {
    const term = search.trim().toLowerCase();
    const termDigits = term.replace(/\D/g, "");
    const filtered = !term ? clientesComId : clientesComId.filter((c) => {
      const nome = (c.nome ?? "").toLowerCase();
      const cpfDigits = (c.cpf_cnpj ?? "").replace(/\D/g, "");
      const matchNome = nome.includes(term);
      const matchCpf = termDigits.length > 0 && cpfDigits.includes(termDigits);
      return matchNome || matchCpf;
    });
    if (!sortKey) return filtered;
    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (c) => {
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
    return [...filtered].sort((a2, b) => {
      const av = getVal(a2);
      const bv = getVal(b);
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
  const clientesPaginados = clientesFiltrados.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina);
  const SortIcon = ({
    column
  }) => {
    if (sortKey !== column) return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-3.5 w-3.5 opacity-50" });
    return sortDir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3.5 w-3.5" });
  };
  const kpis = reactExports.useMemo(() => {
    const total = clientes.length;
    const now = /* @__PURE__ */ new Date();
    const ano = now.getFullYear();
    const mes = now.getMonth();
    const novosMes = clientes.filter((c) => {
      if (!c.created_at) return false;
      const d = new Date(c.created_at);
      return d.getFullYear() === ano && d.getMonth() === mes;
    }).length;
    const comCidade = clientes.filter((c) => (c.cidade ?? "").trim() !== "").length;
    const ultimoCadastro = clientes[0]?.created_at ?? null;
    return {
      total,
      novosMes,
      comCidade,
      ultimoCadastro
    };
  }, [clientes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-x-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold text-foreground truncate", children: "Clientes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: "Gestão completa da carteira de clientes" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setOpen(true), size: "sm", className: "bg-success text-success-foreground shadow-sm hover:bg-success/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Novo Cliente" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-3 md:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Total de Clientes", value: String(kpis.total), icon: Users, accent: "info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Novos no Mês", value: String(kpis.novosMes), icon: TrendingUp, accent: "success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Com Endereço", value: String(kpis.comCidade), icon: MapPin, accent: "warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KpiBox, { label: "Último Cadastro", value: kpis.ultimoCadastro ? formatDate(kpis.ultimoCadastro) : "—", icon: CalendarClock, accent: "info" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            clientes.length,
            " ",
            clientes.length === 1 ? "cliente cadastrado" : "clientes cadastrados",
            search.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " • ",
              clientesFiltrados.length,
              " ",
              clientesFiltrados.length === 1 ? "resultado" : "resultados"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: hasError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center text-sm text-destructive", children: [
            "Erro ao carregar clientes: ",
            data.error
          ] }) : clientes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 p-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Nenhum cliente cadastrado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: 'Clique em "Novo Cliente" para começar.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setOpen(true), className: "mt-2 bg-success text-success-foreground hover:bg-success/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
              "Novo Cliente"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b bg-muted/30 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "search", value: search, onChange: (e) => {
                setSearch(e.target.value);
                setPagina(1);
              }, placeholder: "Buscar por nome ou CPF/CNPJ...", className: "pl-9" })
            ] }) }),
            clientesFiltrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-sm text-muted-foreground", children: [
              'Nenhum cliente encontrado para "',
              search,
              '".'
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("seqId"), className: "inline-flex items-center gap-1 hover:text-foreground", children: [
                    "ID ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "seqId" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("nome"), className: "inline-flex items-center gap-1 hover:text-foreground", children: [
                    "Nome ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "nome" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("email"), className: "inline-flex items-center gap-1 hover:text-foreground", children: [
                    "E-mail ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "email" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("telefone"), className: "inline-flex items-center gap-1 hover:text-foreground", children: [
                    "Telefone ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "telefone" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("cpf_cnpj"), className: "inline-flex items-center gap-1 hover:text-foreground", children: [
                    "CPF/CNPJ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "cpf_cnpj" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("cidade"), className: "inline-flex items-center gap-1 hover:text-foreground", children: [
                    "Cidade/UF ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "cidade" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleSort("created_at"), className: "inline-flex items-center gap-1 hover:text-foreground", children: [
                    "Cadastrado em ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "created_at" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-16 text-right", children: "Ações" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: clientesPaginados.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-mono text-xs text-muted-foreground", children: [
                    "#",
                    String(c.seqId).padStart(3, "0")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-foreground", children: c.nome ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: c.email ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: formatTelefone(c.telefone) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: formatCpfCnpj(c.cpf_cnpj) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: c.cidade && c.uf ? `${c.cidade}/${c.uf}` : c.cidade ?? c.uf ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: formatDate(c.created_at) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 text-muted-foreground hover:bg-success/10 hover:text-success", onClick: () => setNovoEmprestimoClienteId(c.id), "aria-label": `Novo empréstimo para ${c.nome ?? ""}`, title: "Novo empréstimo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 text-muted-foreground hover:bg-primary/10 hover:text-primary", onClick: () => handleEditar(c.id), disabled: loadingEditId === c.id, "aria-label": `Editar cliente ${c.nome ?? ""}`, title: "Editar cliente", children: loadingEditId === c.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive", onClick: () => setClienteParaExcluir(c), "aria-label": `Excluir cliente ${c.nome ?? ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
                  ] }) })
                ] }, String(c.id))) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block divide-y md:hidden", children: clientesPaginados.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-base font-semibold text-foreground", children: c.nome ?? "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
                      "#",
                      String(c.seqId).padStart(3, "0")
                    ] })
                  ] }),
                  c.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: c.email })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Telefone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: formatTelefone(c.telefone) || "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "CPF/CNPJ" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: formatCpfCnpj(c.cpf_cnpj) || "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Cidade/UF" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: c.cidade && c.uf ? `${c.cidade}/${c.uf}` : c.cidade ?? c.uf ?? "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Cadastrado em" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: formatDate(c.created_at) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2 border-t pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "h-8 text-xs text-success hover:bg-success/10 hover:text-success", onClick: () => setNovoEmprestimoClienteId(c.id), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                    "Empréstimo"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "h-8 text-xs", onClick: () => handleEditar(c.id), disabled: loadingEditId === c.id, children: [
                    loadingEditId === c.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }),
                    "Editar"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "h-8 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive", onClick: () => setClienteParaExcluir(c), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
                    "Excluir"
                  ] })
                ] })
              ] }, String(c.id))) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TablePagination, { page: paginaAtual, pageSize: porPagina, totalItems: clientesFiltrados.length, onPageChange: (p) => setPagina(p), onPageSizeChange: (s) => {
                setPorPagina(s);
                setPagina(1);
              }, itemLabel: "clientes" })
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NovoClienteDialog, { open, onOpenChange: handleDialogChange, cliente: clienteEditando }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NovoEmprestimoDialog, { open: novoEmprestimoClienteId !== null, onOpenChange: (next) => {
      if (!next) setNovoEmprestimoClienteId(null);
    }, defaultClienteId: novoEmprestimoClienteId ?? void 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: clienteParaExcluir !== null, onOpenChange: (next) => {
      if (!next && !deleteMutation.isPending) {
        setClienteParaExcluir(null);
      }
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Excluir cliente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "Tem certeza que deseja excluir o cliente",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: clienteParaExcluir?.nome ?? "—" }),
          "? Todos os empréstimos e parcelas vinculados a ele serão excluídos permanentemente. Esta ação não pode ser desfeita."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: deleteMutation.isPending, children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: (e) => {
          e.preventDefault();
          if (clienteParaExcluir) {
            deleteMutation.mutate(clienteParaExcluir.id);
          }
        }, disabled: deleteMutation.isPending, className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", children: deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          "Excluindo..."
        ] }) : "Excluir cliente" })
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
export {
  ClientesPage as component
};
