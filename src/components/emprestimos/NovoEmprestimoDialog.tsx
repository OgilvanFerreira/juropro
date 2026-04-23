import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Search, Wallet, Loader2, Check, X } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { formatCpfCnpj } from "@/lib/masks";
import { listClientes, type Cliente } from "@/integrations/external-supabase/clientes.functions";
import {
  createEmprestimo,
  updateEmprestimo,
  type EmprestimoFull,
} from "@/integrations/external-supabase/emprestimos.functions";

type Periodicidade = "mensal" | "quinzenal" | "semanal" | "diario";
type TipoJuros = "simples" | "composto" | "so_juros";

const PERIODICIDADES: { value: Periodicidade; label: string; dias: number }[] = [
  { value: "mensal", label: "Mensal", dias: 30 },
  { value: "quinzenal", label: "Quinzenal", dias: 15 },
  { value: "semanal", label: "Semanal", dias: 7 },
  { value: "diario", label: "Diário", dias: 1 },
];

const fmtBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

type Parcela = {
  numero: number;
  vencimento: string;
  vencimentoIso: string;
  valor: number;
  ultima?: boolean;
};
type Resultado = {
  parcelas: Parcela[];
  totalPagar: number;
  totalJuros: number;
  valorParcela: number;
};

function calcular(form: {
  valorPrincipal: string;
  taxaJuros: string;
  numParcelas: string;
  tipoJuros: TipoJuros;
  periodicidade: Periodicidade;
  dataInicio: string;
}): Resultado | null {
  const valor = parseFloat(form.valorPrincipal);
  const taxa = parseFloat(form.taxaJuros) / 100;
  const n = parseInt(form.numParcelas);
  const per = PERIODICIDADES.find((p) => p.value === form.periodicidade);
  if (!valor || taxa < 0 || !n || !form.dataInicio || !per) return null;
  if (Number.isNaN(valor) || Number.isNaN(taxa) || Number.isNaN(n)) return null;

  const inicio = new Date(form.dataInicio + "T00:00:00");
  const buildData = (i: number) => {
    const d = new Date(inicio);
    d.setDate(d.getDate() + i * per.dias);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return { vencimento: d.toLocaleDateString("pt-BR"), vencimentoIso: iso };
  };

  let valorParcela: number;
  let totalPagar: number;
  let parcelas: Parcela[];

  if (form.tipoJuros === "simples") {
    totalPagar = valor + valor * taxa * n;
    valorParcela = totalPagar / n;
    parcelas = Array.from({ length: n }, (_, i) => ({
      numero: i + 1,
      ...buildData(i),
      valor: valorParcela,
    }));
  } else if (form.tipoJuros === "composto") {
    if (taxa === 0) {
      valorParcela = valor / n;
      totalPagar = valor;
    } else {
      valorParcela =
        (valor * (taxa * Math.pow(1 + taxa, n))) / (Math.pow(1 + taxa, n) - 1);
      totalPagar = valorParcela * n;
    }
    parcelas = Array.from({ length: n }, (_, i) => ({
      numero: i + 1,
      ...buildData(i),
      valor: valorParcela,
    }));
  } else {
    // Só Juros: parcelas intermediárias = juros; última = juros + principal
    const juro = valor * taxa;
    valorParcela = juro;
    totalPagar = juro * n + valor;
    parcelas = Array.from({ length: n }, (_, i) => {
      const ultima = i === n - 1;
      return {
        numero: i + 1,
        ...buildData(i),
        valor: ultima ? juro + valor : juro,
        ultima,
      };
    });
  }

  return { parcelas, totalPagar, totalJuros: totalPagar - valor, valorParcela };
}

interface ClienteComboboxProps {
  value: string | number | "";
  onChange: (id: string | number | "") => void;
  clientes: Cliente[];
  loading: boolean;
}

function ClienteCombobox({ value, onChange, clientes, loading }: ClienteComboboxProps) {
  const [busca, setBusca] = useState("");
  const [aberto, setAberto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mapeia id do cliente -> número sequencial (#001, #002, ...)
  // Mais antigo recebe #001 para manter consistência com Contratos/Vencimentos.
  const seqMap = useMemo(() => {
    const ordered = [...clientes].sort((a, b) => {
      const da = a.created_at ? new Date(a.created_at).getTime() : 0;
      const db = b.created_at ? new Date(b.created_at).getTime() : 0;
      return da - db;
    });
    const m = new Map<string, string>();
    ordered.forEach((c, idx) => {
      m.set(String(c.id), `#${String(idx + 1).padStart(3, "0")}`);
    });
    return m;
  }, [clientes]);

  const codigoCliente = (id: string | number) =>
    seqMap.get(String(id)) ?? `#${String(id).slice(0, 6)}`;

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return clientes.slice(0, 100);
    return clientes
      .filter((c) => {
        const nome = (c.nome ?? "").toLowerCase();
        const cpf = (c.cpf_cnpj ?? "").replace(/\D/g, "");
        const id = String(c.id);
        const codigo = (seqMap.get(id) ?? "").toLowerCase();
        return (
          nome.includes(q) ||
          cpf.includes(q.replace(/\D/g, "")) ||
          id.includes(q) ||
          codigo.includes(q)
        );
      })
      .slice(0, 100);
  }, [busca, clientes, seqMap]);

  const sel = clientes.find((c) => String(c.id) === String(value));

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAberto(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setAberto((a) => !a)}
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-md border bg-background px-3 text-sm shadow-sm transition-all",
          aberto ? "border-success ring-2 ring-success/20" : "border-input",
        )}
      >
        <span
          className={cn(
            "flex-1 truncate text-left",
            sel ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {sel ? (
            <>
              <span className="font-bold text-success">#{String(sel.id).slice(0, 8)}</span>
              {" — "}
              {sel.nome ?? "Sem nome"}
            </>
          ) : loading ? (
            "Carregando clientes..."
          ) : (
            "Selecione ou busque um cliente..."
          )}
        </span>
        <div className="ml-2 flex flex-shrink-0 items-center gap-1">
          {sel && (
            <X
              className="h-4 w-4 text-muted-foreground hover:text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
                setBusca("");
              }}
            />
          )}
          <span
            className={cn(
              "text-xs text-muted-foreground transition-transform",
              aberto && "rotate-180",
            )}
          >
            ▼
          </span>
        </div>
      </button>

      {aberto && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-md border bg-popover shadow-lg">
          <div className="flex items-center gap-2 border-b px-3 py-2">
            <Search className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
            <input
              autoFocus
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder="Buscar por nome ou CPF..."
              className="flex-1 border-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {busca && (
              <X
                className="h-4 w-4 flex-shrink-0 cursor-pointer text-muted-foreground hover:text-foreground"
                onClick={() => setBusca("")}
              />
            )}
          </div>
          <div className="max-h-60 overflow-y-auto">
            {loading ? (
              <p className="p-4 text-center text-sm text-muted-foreground">Carregando...</p>
            ) : filtrados.length === 0 ? (
              <p className="p-4 text-center text-sm text-muted-foreground">
                Nenhum cliente encontrado
              </p>
            ) : (
              filtrados.map((c) => {
                const ativo = String(value) === String(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      onChange(c.id);
                      setBusca("");
                      setAberto(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 border-l-[3px] px-3 py-2 text-left transition-colors hover:bg-muted",
                      ativo ? "border-success bg-success/5" : "border-transparent",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        ativo
                          ? "bg-success text-success-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {(c.nome ?? "?").charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">
                        {c.nome ?? "Sem nome"}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {c.cpf_cnpj ? formatCpfCnpj(c.cpf_cnpj) : `ID #${String(c.id).slice(0, 8)}`}
                      </p>
                    </div>
                    {ativo && <Check className="h-4 w-4 flex-shrink-0 text-success" />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CardMetrica({
  label,
  valor,
  destaque,
}: {
  label: string;
  valor: string;
  destaque?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-3",
        destaque ? "border-2 border-success bg-success/5" : "border-border bg-muted/30",
      )}
    >
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          "truncate text-base font-bold",
          destaque ? "text-success" : "text-foreground",
        )}
      >
        {valor}
      </p>
    </div>
  );
}

interface NovoEmprestimoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  emprestimo?: EmprestimoFull | null;
}

const INITIAL_FORM = {
  clienteId: "" as string | number | "",
  valorPrincipal: "",
  taxaJuros: "",
  numParcelas: "",
  tipoJuros: "simples" as TipoJuros,
  periodicidade: "mensal" as Periodicidade,
  dataInicio: "",
  observacoes: "",
};

function extractPeriodicidade(obs: string | null): {
  periodicidade: Periodicidade;
  observacoes: string;
} {
  if (!obs) return { periodicidade: "mensal", observacoes: "" };
  const match = obs.match(/^\[Periodicidade:\s*([^•\]]+)/i);
  let periodicidade: Periodicidade = "mensal";
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

export function NovoEmprestimoDialog({
  open,
  onOpenChange,
  emprestimo,
}: NovoEmprestimoDialogProps) {
  const [form, setForm] = useState(INITIAL_FORM);
  const queryClient = useQueryClient();
  const listClientesFn = useServerFn(listClientes);
  const createEmprestimoFn = useServerFn(createEmprestimo);
  const updateEmprestimoFn = useServerFn(updateEmprestimo);
  const isEdit = !!emprestimo;

  const clientesQuery = useQuery({
    queryKey: ["clientes", "list"],
    queryFn: () => listClientesFn(),
    enabled: open,
  });

  const clientes = clientesQuery.data?.data ?? [];

  useEffect(() => {
    if (!open) return;
    if (emprestimo) {
      const { periodicidade, observacoes } = extractPeriodicidade(
        emprestimo.observacoes,
      );
      const tj = (emprestimo.tipo_juros ?? "simples") as TipoJuros;
      setForm({
        clienteId: emprestimo.cliente_id ?? "",
        valorPrincipal: String(emprestimo.valor_principal ?? ""),
        taxaJuros: String(emprestimo.taxa_juros ?? ""),
        numParcelas: String(emprestimo.numero_parcelas ?? ""),
        tipoJuros: (["simples", "composto", "so_juros"] as const).includes(
          tj as never,
        )
          ? tj
          : "simples",
        periodicidade,
        dataInicio: emprestimo.data_inicio ?? "",
        observacoes,
      });
    } else {
      setForm(INITIAL_FORM);
    }
  }, [open, emprestimo]);

  const resultado = useMemo(
    () =>
      calcular({
        valorPrincipal: form.valorPrincipal,
        taxaJuros: form.taxaJuros,
        numParcelas: form.numParcelas,
        tipoJuros: form.tipoJuros,
        periodicidade: form.periodicidade,
        dataInicio: form.dataInicio,
      }),
    [form],
  );

  const cliente = clientes.find((c) => String(c.id) === String(form.clienteId));
  const podeSalvar = !!form.clienteId && !!resultado;

  const mutation = useMutation({
    mutationFn: async () => {
      if (!form.clienteId || !resultado) throw new Error("Dados inválidos");
      const parcelasPayload = resultado.parcelas.map((p) => ({
        numero: p.numero,
        data_vencimento: p.vencimentoIso,
        valor: Number(p.valor.toFixed(2)),
      }));
      if (isEdit && emprestimo) {
        const res = await updateEmprestimoFn({
          data: {
            id: emprestimo.id,
            cliente_id: form.clienteId,
            valor_principal: parseFloat(form.valorPrincipal),
            taxa_juros: parseFloat(form.taxaJuros),
            numero_parcelas: parseInt(form.numParcelas),
            tipo_juros: form.tipoJuros,
            periodicidade: form.periodicidade,
            data_inicio: form.dataInicio,
            observacoes: form.observacoes,
            parcelas: parcelasPayload,
          },
        });
        if (!res.ok) throw new Error(res.error ?? "Erro ao atualizar empréstimo");
        return res;
      }
      const res = await createEmprestimoFn({
        data: {
          cliente_id: form.clienteId,
          valor_principal: parseFloat(form.valorPrincipal),
          taxa_juros: parseFloat(form.taxaJuros),
          numero_parcelas: parseInt(form.numParcelas),
          tipo_juros: form.tipoJuros,
          periodicidade: form.periodicidade,
          data_inicio: form.dataInicio,
          observacoes: form.observacoes,
          parcelas: parcelasPayload,
        },
      });
      if (!res.ok) throw new Error(res.error ?? "Erro ao salvar empréstimo");
      return res;
    },
    onSuccess: () => {
      toast.success(
        isEdit
          ? "Empréstimo atualizado com sucesso!"
          : "Empréstimo cadastrado com sucesso!",
      );
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      queryClient.invalidateQueries({ queryKey: ["emprestimos", "list"] });
      onOpenChange(false);
    },
    onError: (err: Error) => {
      toast.error(err.message || "Falha ao salvar empréstimo");
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto p-0">
        <div className="border-b bg-background p-5">
          <DialogHeader className="flex-row items-center gap-3 space-y-0">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-success text-success-foreground">
              <Wallet className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <DialogTitle className="text-lg">
                {isEdit ? "Editar Empréstimo" : "Novo Empréstimo"}
              </DialogTitle>
              <DialogDescription>
                {isEdit
                  ? "Altere os dados e regenere as parcelas"
                  : "Simulação gerada em tempo real"}
              </DialogDescription>
            </div>
          </DialogHeader>
        </div>

        <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2">
          {/* FORMULÁRIO */}
          <div className="space-y-5">
            <section className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-sm font-bold text-foreground">
                  👤 Cliente
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <Label>Cliente *</Label>
              <ClienteCombobox
                value={form.clienteId}
                onChange={(id) => setForm((p) => ({ ...p, clienteId: id }))}
                clientes={clientes}
                loading={clientesQuery.isLoading}
              />
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-sm font-bold text-foreground">
                  💵 Dados Financeiros
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Valor Principal (R$) *</Label>
                  <Input
                    type="number"
                    placeholder="0,00"
                    value={form.valorPrincipal}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, valorPrincipal: e.target.value }))
                    }
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Taxa de Juros (%) *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={form.taxaJuros}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, taxaJuros: e.target.value }))
                    }
                    className="h-11"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Número de Parcelas *</Label>
                <Input
                  type="number"
                  placeholder="Ex: 12"
                  value={form.numParcelas}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, numParcelas: e.target.value }))
                  }
                  className="h-11"
                />
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-sm font-bold text-foreground">
                  ⚙️ Configurações
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Tipo de Juros *</Label>
                  <div className="flex gap-2">
                    {(["simples", "composto", "so_juros"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, tipoJuros: t }))}
                        className={cn(
                          "flex-1 rounded-md border-2 px-2 py-2 text-xs font-semibold transition-colors sm:text-sm",
                          form.tipoJuros === t
                            ? "border-success bg-success/5 text-success"
                            : "border-input bg-background text-muted-foreground hover:border-muted-foreground/40",
                        )}
                      >
                        {t === "simples" ? "Simples" : t === "composto" ? "Composto" : "Só Juros"}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Data de Início *</Label>
                  <Input
                    type="date"
                    value={form.dataInicio}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, dataInicio: e.target.value }))
                    }
                    className="h-11"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Periodicidade *</Label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {PERIODICIDADES.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() =>
                        setForm((f) => ({ ...f, periodicidade: p.value }))
                      }
                      className={cn(
                        "rounded-md border-2 px-2 py-2 text-xs font-semibold transition-colors",
                        form.periodicidade === p.value
                          ? "border-success bg-success/5 text-success"
                          : "border-input bg-background text-muted-foreground hover:border-muted-foreground/40",
                      )}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-sm font-bold text-foreground">
                  📝 Observações
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <Textarea
                placeholder="Adicione observações sobre este empréstimo..."
                value={form.observacoes}
                onChange={(e) =>
                  setForm((p) => ({ ...p, observacoes: e.target.value }))
                }
                rows={3}
              />
            </section>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
                disabled={mutation.isPending}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                onClick={() => mutation.mutate()}
                disabled={!podeSalvar || mutation.isPending}
                className="flex-[2] bg-success text-success-foreground hover:bg-success/90"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />{" "}
                    {isEdit ? "Atualizando..." : "Salvando..."}
                  </>
                ) : (
                  <>{isEdit ? "💾 Atualizar Empréstimo" : "💾 Salvar Empréstimo"}</>
                )}
              </Button>
            </div>
          </div>

          {/* PREVIEW */}
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <p className="mb-3 text-sm font-bold text-foreground">📊 Resumo</p>
              {!resultado ? (
                <div className="py-8 text-center">
                  <div className="mb-2 text-4xl">📊</div>
                  <p className="font-bold text-foreground">Preview em Tempo Real</p>
                  <p className="text-sm text-muted-foreground">
                    Preencha os campos para ver a simulação
                  </p>
                </div>
              ) : (
                <>
                  {cliente && (
                    <div className="mb-3 rounded-md border-l-4 border-success bg-success/5 px-3 py-2">
                      <p className="truncate text-sm font-semibold text-success">
                        👤 {cliente.nome}
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    <CardMetrica
                      label="Valor Principal"
                      valor={fmtBRL(parseFloat(form.valorPrincipal) || 0)}
                    />
                    <CardMetrica
                      label="Total de Juros"
                      valor={fmtBRL(resultado.totalJuros)}
                    />
                    <CardMetrica
                      label="Valor da Parcela"
                      valor={fmtBRL(resultado.valorParcela)}
                    />
                    <CardMetrica
                      label="Total a Pagar"
                      valor={fmtBRL(resultado.totalPagar)}
                      destaque
                    />
                  </div>
                  <div className="mt-3 rounded-md border-l-4 border-warning bg-warning/10 px-3 py-2">
                    <p className="text-xs text-foreground">
                      ⚠️ Juros{" "}
                      {form.tipoJuros === "simples"
                        ? "Simples"
                        : form.tipoJuros === "composto"
                          ? "Compostos"
                          : "Só Juros"}{" "}
                      •{" "}
                      {PERIODICIDADES.find((p) => p.value === form.periodicidade)?.label}{" "}
                      • {form.numParcelas} parcela(s)
                    </p>
                  </div>
                  {form.tipoJuros === "so_juros" && (
                    <div className="mt-2 rounded-md border-l-4 border-success bg-success/5 px-3 py-2">
                      <p className="text-xs text-foreground">
                        💡 O cliente pagará apenas os juros mensais, quitando o capital
                        principal na última parcela.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {resultado && (
              <div className="rounded-lg border bg-card p-4">
                <p className="mb-3 text-sm font-bold text-foreground">📅 Parcelas</p>
                <div className="max-h-72 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-muted/60">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                          Nº
                        </th>
                        <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                          Vencimento
                        </th>
                        <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                          Valor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultado.parcelas.map((p) => (
                        <tr key={p.numero} className="border-t border-border/60">
                          <td className="px-3 py-2 font-bold text-success">
                            #{String(p.numero).padStart(2, "0")}
                          </td>
                          <td className="px-3 py-2 text-muted-foreground">
                            {p.vencimento}
                          </td>
                          <td className="px-3 py-2 font-semibold text-foreground">
                            <div className="flex items-center gap-2">
                              <span>{fmtBRL(p.valor)}</span>
                              {p.ultima && form.tipoJuros === "so_juros" && (
                                <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-success">
                                  Juros + Principal
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
