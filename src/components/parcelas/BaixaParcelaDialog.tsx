import { useEffect, useMemo, useState } from "react";
import { Check, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export type BaixaPeriodicidade = "mensal" | "quinzenal" | "semanal" | "diario";

export type BaixaParcelaItem = {
  id: string | number;
  numero_parcela: number;
  parcelas_total: number;
  data_vencimento: string | null;
  valor_parcela: number;
  valor_principal?: number;
  valor_minimo: number;
  cliente_nome: string | null;
  contrato_codigo: string;
  taxa_juros?: number;
  tipo_juros?: string | null;
};

export type BaixaParcelaPayload = {
  data_pagamento: string;
  valor_pago: number;
  gerar_nova_cobranca?: boolean;
  nova_cobranca_base?: number;
  nova_cobranca_valor?: number;
  nova_cobranca_vencimento?: string;
  nova_cobranca_periodicidade?: BaixaPeriodicidade;
};

const PERIODICIDADES: { value: BaixaPeriodicidade; label: string; dias: number }[] = [
  { value: "mensal", label: "Mensal", dias: 30 },
  { value: "quinzenal", label: "Quinzenal", dias: 15 },
  { value: "semanal", label: "Semanal", dias: 7 },
  { value: "diario", label: "Diário", dias: 1 },
];

const fmtBRL = (v: number) =>
  Number(v || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const todayISO = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
};

const addDaysISO = (iso: string, days: number) => {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
};

const fmtDate = (iso: string | null) => {
  if (!iso) return "-";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return "-";
  return `${d}/${m}/${y}`;
};

const parseMoneyInput = (value: string) => Number.parseFloat(value.replace(",", ".")) || 0;

const tipoJurosLabel = (tipo: string | null | undefined) => {
  if (tipo === "composto") return "Composto";
  if (tipo === "so_juros") return "Só Juros";
  return "Simples";
};

function calcularPreview(
  parcela: BaixaParcelaItem | null,
  valorPago: number,
  dataPagamento: string,
  periodicidade: BaixaPeriodicidade,
) {
  const dias = PERIODICIDADES.find((p) => p.value === periodicidade)?.dias ?? 30;
  const valorCapital = Number(parcela?.valor_parcela ?? 0);
  const minimo = Number(parcela?.valor_minimo ?? 0);
  const jurosNaoPago = Math.max(minimo - valorPago, 0);
  const abatimentoCapital = Math.max(valorPago - minimo, 0);
  const base = parcela ? Math.max(valorCapital - abatimentoCapital, 0) + jurosNaoPago : 0;
  const taxa = Number(parcela?.taxa_juros ?? 0);
  const juros = base * (taxa / 100);
  const total = juros;

  return {
    dias,
    vencimento: addDaysISO(dataPagamento || todayISO(), dias),
    saldoRestante: jurosNaoPago,
    jurosNaoPago,
    base,
    juros,
    total,
    pagamentoParcial: jurosNaoPago > 0.005,
  };
}

function Info({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={cn("text-sm font-semibold text-foreground", className)}>{value}</p>
    </div>
  );
}

export function BaixaParcelaDialog({
  parcela,
  onClose,
  onConfirm,
  isLoading,
  title = "Confirmar Baixa",
  description,
}: {
  parcela: BaixaParcelaItem | null;
  onClose: () => void;
  onConfirm: (payload: BaixaParcelaPayload) => void;
  isLoading: boolean;
  title?: string;
  description?: string;
}) {
  const [dataPag, setDataPag] = useState(todayISO());
  const [valorPag, setValorPag] = useState("0");
  const [gerarNovaCobranca, setGerarNovaCobranca] = useState(false);
  const [periodicidade, setPeriodicidade] = useState<BaixaPeriodicidade>("mensal");

  useEffect(() => {
    if (parcela) {
      setDataPag(todayISO());
      setValorPag((parcela.valor_minimo || parcela.valor_parcela).toFixed(2));
      setGerarNovaCobranca(false);
      setPeriodicidade("mensal");
    }
  }, [parcela]);

  const valorNum = parseMoneyInput(valorPag);
  const preview = useMemo(
    () => calcularPreview(parcela, valorNum, dataPag, periodicidade),
    [dataPag, parcela, periodicidade, valorNum],
  );

  return (
    <Dialog
      open={!!parcela}
      onOpenChange={(open) => {
        if (!open && !isLoading) onClose();
      }}
    >
      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description ??
              `${parcela?.cliente_nome ?? "Cliente"} - Parcela ${parcela?.numero_parcela}/${
                parcela?.parcelas_total || parcela?.numero_parcela
              }`}
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
                <Info label="Capital" value={fmtBRL(parcela.valor_parcela)} />
                <Info label="Taxa" value={`${Number(parcela.taxa_juros ?? 0)}%`} />
                <Info label="Tipo" value={tipoJurosLabel(parcela.tipo_juros)} />
              </div>
              <div className="mt-2 border-t border-border pt-2">
                <Info label="Mínimo (Juros)" value={fmtBRL(parcela.valor_minimo)} className="text-amber-600" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="baixa-data-pagamento">Data do Pagamento</Label>
                  <Input
                    id="baixa-data-pagamento"
                    type="date"
                    value={dataPag}
                    onChange={(e) => setDataPag(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="baixa-valor-pago">Valor Pago (R$)</Label>
                  <Input
                    id="baixa-valor-pago"
                    type="number"
                    step="0.01"
                    min="0"
                    value={valorPag}
                    onChange={(e) => setValorPag(e.target.value)}
                  />
                </div>
              </div>

              {preview.pagamentoParcial && (
                <p className="text-xs text-amber-600">
                  Pagamento parcial - diferença de {fmtBRL(preview.saldoRestante)}
                </p>
              )}

              <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="baixa-gerar-nova-cobranca" className="text-sm font-semibold text-foreground">
                      {preview.pagamentoParcial
                        ? "Adicionar saldo na próxima cobrança?"
                        : "Gerar nova cobrança?"}
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      A nova parcela será o juros sobre o montante em aberto.
                    </p>
                  </div>
                  <Switch
                    id="baixa-gerar-nova-cobranca"
                    checked={gerarNovaCobranca}
                    onCheckedChange={setGerarNovaCobranca}
                  />
                </div>

                {gerarNovaCobranca && (
                  <div className="mt-3 space-y-3 border-t border-emerald-200 pt-3">
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Periodicidade
                      </Label>
                      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {PERIODICIDADES.map((p) => (
                          <button
                            key={p.value}
                            type="button"
                            onClick={() => setPeriodicidade(p.value)}
                            className={cn(
                              "rounded-md border px-2.5 py-2 text-xs font-semibold transition-colors",
                              periodicidade === p.value
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-border bg-background text-foreground hover:bg-muted",
                            )}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-border bg-background p-3">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        Preview da nova parcela
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <Info label="Vencimento" value={fmtDate(preview.vencimento)} />
                        <Info label="Montante" value={fmtBRL(preview.base)} />
                        <Info label="Juros" value={fmtBRL(preview.juros)} className="text-amber-600" />
                        <Info label="Total" value={fmtBRL(preview.total)} className="text-emerald-700" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <DialogFooter className="gap-2 sm:justify-end">
              <Button variant="outline" onClick={onClose} disabled={isLoading}>
                Cancelar
              </Button>
              <Button
                onClick={() =>
                  onConfirm({
                    data_pagamento: dataPag,
                    valor_pago: valorNum,
                    gerar_nova_cobranca: gerarNovaCobranca,
                    nova_cobranca_base: gerarNovaCobranca ? preview.base : undefined,
                    nova_cobranca_valor: gerarNovaCobranca ? preview.total : undefined,
                    nova_cobranca_vencimento: gerarNovaCobranca ? preview.vencimento : undefined,
                    nova_cobranca_periodicidade: gerarNovaCobranca ? periodicidade : undefined,
                  })
                }
                disabled={isLoading || !dataPag || valorNum < 0}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" />
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
