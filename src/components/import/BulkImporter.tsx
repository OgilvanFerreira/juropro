import { useCallback, useRef, useState } from "react";
import Papa from "papaparse";
import {
  Upload,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Loader2,
  Trash2,
  Rocket,
  RefreshCcw,
} from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  bulkImport,
  type BulkImportResult,
} from "@/integrations/external-supabase/import.functions";

// ─── Helpers ───────────────────────────────────────────────────
const CAMPOS_OBG = [
  "nome_cliente",
  "cpf_cnpj",
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
] as const;

const CHUNK_SIZE = 100;
const MAX_IMPORT_ROWS = 5_000;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const MAX_FILE_SIZE_MB = MAX_FILE_SIZE_BYTES / 1024 / 1024;

const fmtBRL = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const hojeMidnight = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const PERIODICIDADE_DIAS = {
  mensal: 30,
  quinzenal: 15,
  semanal: 7,
  diario: 1,
} as const;

type PeriodicidadeKey = keyof typeof PERIODICIDADE_DIAS;

function normPeriodicidadeImportacao(s: unknown): PeriodicidadeKey {
  const k = String(s ?? "mensal")
    .toLowerCase()
    .trim();
  if (k.startsWith("quin")) return "quinzenal";
  if (k.startsWith("sem")) return "semanal";
  if (k.startsWith("dia")) return "diario";
  return "mensal";
}

function normTipoJurosImportacao(s: unknown): string {
  const k = String(s ?? "Simples").trim();
  return k || "Simples";
}

function addDiasIso(dataIso: string, dias: number): string {
  const d = new Date(dataIso + "T00:00:00");
  d.setDate(d.getDate() + dias);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

function parseDataBR(input: unknown): string {
  if (input === null || input === undefined || input === "") return "";
  // Excel pode entregar Date objects ou serial numbers
  if (input instanceof Date && !isNaN(input.getTime())) {
    const y = input.getFullYear();
    const m = String(input.getMonth() + 1).padStart(2, "0");
    const d = String(input.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const s = String(input).trim();
  // dd/mm/yyyy
  const br = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (br) return `${br[3]}-${br[2]}-${br[1]}`;
  // yyyy-mm-dd
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  // tenta Date()
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  }
  return "";
}

function parseNumber(v: unknown): number {
  if (v === null || v === undefined || v === "") return 0;
  if (typeof v === "number") return v;
  const s = String(v).trim().replace(/\./g, "").replace(",", ".");
  const n = Number(s);
  return isNaN(n) ? 0 : n;
}

function parseInt2(v: unknown): number {
  if (typeof v === "number") return Math.trunc(v);
  const s = String(v ?? "").trim();
  // formato "1/6" -> 1
  const m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[1]);
  const n = parseInt(s.replace(/\D/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

function parseTotalParcelas(v: unknown, fallback = 0): number {
  const s = String(v ?? "").trim();
  const m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[2]);
  if (typeof v === "number") return Math.trunc(v);
  const n = parseInt(s.replace(/\D/g, ""), 10);
  return isNaN(n) || n === 0 ? fallback : n;
}

type LinhaNorm = {
  _linha: number;
  _valido: boolean;
  _erros: string[];
  _statusCalc: "pago" | "pendente" | "atrasado";
  nome_cliente: string;
  cpf_cnpj: string;
  telefone: string;
  email: string;
  contrato_id: string;
  valor_principal: number;
  taxa_juros: number;
  tipo_juros: string;
  num_parcelas: number;
  periodicidade: string;
  data_inicio: string; // ISO yyyy-mm-dd
  num_parcela: number;
  data_vencimento: string; // ISO
  valor_parcela: number;
  status_parcela: string;
  data_pagamento: string;
  valor_pago: number | null;
};

function getCampo(r: Record<string, unknown>, k: string): unknown {
  if (r[k] !== undefined) return r[k];
  const lower = Object.keys(r).find((kk) => kk.toLowerCase().trim() === k.toLowerCase());
  return lower ? r[lower] : undefined;
}

function temCampoPreenchido(r: Record<string, unknown>, k: string): boolean {
  const v = getCampo(r, k);
  return v !== null && v !== undefined && String(v).trim() !== "";
}

function calcularParcelasRapidas(input: {
  valorPrincipal: number;
  taxaJuros: number;
  numParcelas: number;
  tipoJuros: string;
  periodicidade: PeriodicidadeKey;
  dataInicio: string;
  primeiroVencimento: string;
  valorParcelaManual: number;
}) {
  const n = input.numParcelas;
  const taxa = input.taxaJuros / 100;
  const valor = input.valorPrincipal;
  const tipo = input.tipoJuros.toLowerCase();
  const dias = PERIODICIDADE_DIAS[input.periodicidade];
  const primeiroVencimento = input.primeiroVencimento || addDiasIso(input.dataInicio, dias);

  if (input.valorParcelaManual > 0) {
    return Array.from({ length: n }, (_, i) => ({
      num: i + 1,
      venc: addDiasIso(primeiroVencimento, i * dias),
      valor: input.valorParcelaManual,
    }));
  }

  if (tipo.includes("compost")) {
    const valorParcela =
      taxa === 0
        ? valor / n
        : (valor * (taxa * Math.pow(1 + taxa, n))) / (Math.pow(1 + taxa, n) - 1);
    return Array.from({ length: n }, (_, i) => ({
      num: i + 1,
      venc: addDiasIso(primeiroVencimento, i * dias),
      valor: valorParcela,
    }));
  }

  if (tipo.includes("só") || tipo.includes("so j") || tipo.includes("juros")) {
    const juros = valor * taxa;
    return Array.from({ length: n }, (_, i) => ({
      num: i + 1,
      venc: addDiasIso(primeiroVencimento, i * dias),
      valor: i === n - 1 ? juros + valor : juros,
    }));
  }

  const totalPagar = valor + valor * taxa * n;
  const valorParcela = totalPagar / n;
  return Array.from({ length: n }, (_, i) => ({
    num: i + 1,
    venc: addDiasIso(primeiroVencimento, i * dias),
    valor: valorParcela,
  }));
}

function normalizar(rawRows: Record<string, unknown>[]): LinhaNorm[] {
  const hoje = hojeMidnight();
  const usaDetalhado = rawRows.some(
    (r) =>
      temCampoPreenchido(r, "num_parcela") ||
      temCampoPreenchido(r, "data_vencimento") ||
      temCampoPreenchido(r, "status_parcela"),
  );

  const montarLinha = (
    r: Record<string, unknown>,
    i: number,
    parcial?: {
      contrato_id: string;
      num_parcela: number;
      data_vencimento: string;
      valor_parcela: number;
      status_parcela: string;
    },
  ): LinhaNorm => {
    const nome_cliente = String(getCampo(r, "nome_cliente") ?? "").trim();
    const cpf_cnpj = String(getCampo(r, "cpf_cnpj") ?? "").trim();
    const contrato_id =
      parcial?.contrato_id || String(getCampo(r, "contrato_id") ?? "").trim() || `__auto:${i + 2}`;
    const valor_principal = parseNumber(getCampo(r, "valor_principal"));
    const taxa_juros = parseNumber(getCampo(r, "taxa_juros"));
    const tipo_juros = normTipoJurosImportacao(getCampo(r, "tipo_juros"));
    const numParcRaw = getCampo(r, "num_parcelas");
    const num_parcela = parcial?.num_parcela ?? parseInt2(getCampo(r, "num_parcela"));
    const num_parcelas = parseTotalParcelas(numParcRaw, num_parcela);
    const periodicidade = String(getCampo(r, "periodicidade") ?? "Mensal").trim() || "Mensal";
    const data_inicio = parseDataBR(getCampo(r, "data_inicio"));
    const data_vencimento = parcial?.data_vencimento ?? parseDataBR(getCampo(r, "data_vencimento"));
    const valor_parcela = parcial?.valor_parcela ?? parseNumber(getCampo(r, "valor_parcela"));
    const status_parcela =
      parcial?.status_parcela ?? String(getCampo(r, "status_parcela") ?? "Pendente").trim();
    const data_pagamento = parseDataBR(getCampo(r, "data_pagamento"));
    const valor_pago_raw = getCampo(r, "valor_pago");
    const valor_pago =
      valor_pago_raw === "" || valor_pago_raw === null || valor_pago_raw === undefined
        ? null
        : parseNumber(valor_pago_raw);

    const erros: string[] = [];
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

    let _statusCalc: LinhaNorm["_statusCalc"] = "pendente";
    if (status_parcela.toLowerCase() === "pago") _statusCalc = "pago";
    else if (data_vencimento) {
      const dt = new Date(data_vencimento + "T00:00:00");
      if (dt < hoje) _statusCalc = "atrasado";
    }

    return {
      _linha: i + 2, // header é linha 1
      _valido: erros.length === 0,
      _erros: erros,
      _statusCalc,
      nome_cliente,
      cpf_cnpj,
      telefone: String(getCampo(r, "telefone") ?? "").trim(),
      email: String(getCampo(r, "email") ?? "").trim(),
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
      valor_pago,
    };
  };

  if (usaDetalhado) {
    return rawRows.map((r, i) => montarLinha(r, i));
  }

  return rawRows.flatMap((r, i) => {
    const data_inicio = parseDataBR(getCampo(r, "data_inicio"));
    const valorPrincipal = parseNumber(getCampo(r, "valor_principal"));
    const taxaJuros = parseNumber(getCampo(r, "taxa_juros"));
    const numParcelas = parseTotalParcelas(getCampo(r, "num_parcelas"));
    const periodicidade = normPeriodicidadeImportacao(getCampo(r, "periodicidade"));
    const parcelas =
      data_inicio && valorPrincipal > 0 && numParcelas > 0
        ? calcularParcelasRapidas({
            valorPrincipal,
            taxaJuros,
            numParcelas,
            tipoJuros: normTipoJurosImportacao(getCampo(r, "tipo_juros")),
            periodicidade,
            dataInicio: data_inicio,
            primeiroVencimento: parseDataBR(getCampo(r, "primeiro_vencimento")),
            valorParcelaManual: parseNumber(getCampo(r, "valor_parcela")),
          })
        : [
            {
              num: 0,
              venc: "",
              valor: 0,
            },
          ];
    const contratoId = String(getCampo(r, "contrato_id") ?? "").trim() || `__auto:${i + 2}`;

    return parcelas.map((p) =>
      montarLinha(r, i, {
        contrato_id: contratoId,
        num_parcela: p.num,
        data_vencimento: p.venc,
        valor_parcela: p.valor,
        status_parcela: String(getCampo(r, "status_parcela") ?? "Pendente").trim() || "Pendente",
      }),
    );
  });
}

function validarArquivoImportacao(file: File, ext: string | undefined): string | null {
  if (ext !== "csv") {
    return "Formato inválido. Use .csv compatível com Excel.";
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return `Arquivo muito grande. Envie uma planilha de até ${MAX_FILE_SIZE_MB} MB.`;
  }
  return null;
}

function validarQuantidadeLinhas(raw: Record<string, unknown>[]) {
  if (raw.length === 0) {
    throw new Error("EMPTY_FILE");
  }
  if (raw.length > MAX_IMPORT_ROWS) {
    throw new Error("TOO_MANY_ROWS");
  }
}

function repararCsvLinhaEnvelopada(text: string) {
  return text
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.includes('""')) {
        return trimmed.slice(1, -1).replace(/""/g, '"');
      }
      return line;
    })
    .join("\n");
}

function baixarModelo() {
  const headers = [
    "nome_cliente",
    "cpf_cnpj",
    "telefone",
    "email",
    "valor_principal",
    "taxa_juros",
    "tipo_juros",
    "num_parcelas",
    "periodicidade",
    "data_inicio",
    "primeiro_vencimento",
    "valor_parcela",
    "contrato_id",
  ];
  const exemplos = [
    {
      nome_cliente: "João da Silva",
      cpf_cnpj: "123.456.789-00",
      telefone: "(73) 99999-0000",
      email: "joao@exemplo.com",
      valor_principal: 2000,
      taxa_juros: 5,
      tipo_juros: "Simples",
      num_parcelas: 6,
      periodicidade: "Mensal",
      data_inicio: "01/01/2025",
      primeiro_vencimento: "01/02/2025",
      valor_parcela: "",
      contrato_id: "",
    },
    {
      nome_cliente: "Maria Souza",
      cpf_cnpj: "987.654.321-00",
      telefone: "(73) 98888-0000",
      email: "maria@exemplo.com",
      valor_principal: 5000,
      taxa_juros: 4,
      tipo_juros: "Composto",
      num_parcelas: 10,
      periodicidade: "Mensal",
      data_inicio: "10/01/2025",
      primeiro_vencimento: "10/02/2025",
      valor_parcela: "",
      contrato_id: "",
    },
  ];
  const csv = Papa.unparse(exemplos, {
    columns: headers,
    quotes: false,
  });
  const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "JuroPro_Modelo_Rapido_Importacao.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ─── Componente ───────────────────────────────────────────────
type Fase = "upload" | "preview" | "processando" | "concluido";

export function BulkImporter() {
  const [fase, setFase] = useState<Fase>("upload");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [dados, setDados] = useState<LinhaNorm[]>([]);
  const [drag, setDrag] = useState(false);
  const [progresso, setProg] = useState(0);
  const [filtroStatus, setFiltro] = useState<"todos" | "pago" | "pendente" | "atrasado">("todos");
  const [resultado, setResultado] = useState<BulkImportResult | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const bulkImportFn = useServerFn(bulkImport);
  const queryClient = useQueryClient();

  const lerArquivo = useCallback(async (file: File) => {
    setArquivo(file);
    const ext = file.name.toLowerCase().split(".").pop();
    const erroArquivo = validarArquivoImportacao(file, ext);
    if (erroArquivo) {
      toast.error(erroArquivo);
      return;
    }
    try {
      const text = repararCsvLinhaEnvelopada(await file.text());
      const parsed = Papa.parse<Record<string, unknown>>(text, {
        header: true,
        skipEmptyLines: true,
        preview: MAX_IMPORT_ROWS + 1,
        delimitersToGuess: [",", ";", "\t", "|"],
      });
      const errosCriticos = parsed.errors.filter((error) => error.code !== "UndetectableDelimiter");
      if (errosCriticos.length > 0) {
        throw new Error("INVALID_FILE");
      }
      const raw = parsed.data;
      validarQuantidadeLinhas(raw);
      const norm = normalizar(raw);
      setDados(norm);
      setFase("preview");
    } catch (err) {
      const code = (err as Error).message;
      if (code === "EMPTY_FILE") {
        toast.error("Planilha vazia ou sem cabeçalhos válidos.");
      } else if (code === "TOO_MANY_ROWS") {
        toast.error(
          `A importação aceita até ${MAX_IMPORT_ROWS.toLocaleString("pt-BR")} linhas por arquivo.`,
        );
      } else {
        toast.error("Não foi possível ler a planilha. Verifique o modelo e tente novamente.");
      }
    }
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
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
    atrasados: dados.filter((r) => r._statusCalc === "atrasado").length,
  };

  const filtrados = dados.filter((r) => filtroStatus === "todos" || r._statusCalc === filtroStatus);

  const importar = async () => {
    const validos = dados.filter((r) => r._valido);
    if (validos.length === 0) {
      toast.error("Não há linhas válidas para importar.");
      return;
    }
    setFase("processando");
    setProg(0);

    // Envia em chunks para feedback de progresso (cada chunk vai como request)
    const chunks: LinhaNorm[][] = [];
    for (let i = 0; i < validos.length; i += CHUNK_SIZE) {
      chunks.push(validos.slice(i, i + CHUNK_SIZE));
    }

    let agreg: BulkImportResult = {
      ok: true,
      error: null,
      clientes_criados: 0,
      clientes_existentes: 0,
      emprestimos_criados: 0,
      emprestimos_existentes: 0,
      parcelas_inseridas: 0,
      warnings: [],
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
          valor_pago: r.valor_pago,
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
          warnings: [...agreg.warnings, ...res.warnings],
        };
        setProg(Math.round(((i + 1) / chunks.length) * 100));
      }

      // Invalida caches relevantes
      await queryClient.invalidateQueries();
      setResultado(agreg);
      setFase("concluido");
      toast.success(
        `Importação concluída: ${agreg.parcelas_inseridas} parcelas em ${agreg.emprestimos_criados} contratos.`,
      );
    } catch {
      toast.error("Erro durante a importação. Tente novamente em instantes.");
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

  // ─── UI ───────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e3a5f] to-emerald-600 text-white shadow-md">
          <Upload className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-foreground">Importação em Massa</h2>
          <p className="text-sm text-muted-foreground">
            Importe uma carteira inteira com uma linha por contrato. As parcelas são geradas
            automaticamente.
          </p>
        </div>
      </div>

      {/* FASE: UPLOAD */}
      {fase === "upload" && (
        <div className="space-y-4">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragLeave={() => setDrag(false)}
            onDrop={onDrop}
            onClick={() => fileRef.current?.click()}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-muted/30 px-6 py-12 text-center transition-all",
              "hover:border-emerald-500 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20",
              drag && "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30",
            )}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) lerArquivo(f);
              }}
            />
            <FileSpreadsheet className="mb-3 h-12 w-12 text-emerald-600" />
            <p className="mb-1 font-semibold text-foreground">Arraste sua planilha aqui</p>
            <p className="mb-4 text-sm text-muted-foreground">ou clique para selecionar</p>
            <Button
              type="button"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={(e) => {
                e.stopPropagation();
                fileRef.current?.click();
              }}
            >
              <Upload className="mr-2 h-4 w-4" />
              Selecionar Arquivo
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Formato: .csv compatível com Excel • até 5.000 linhas • máximo {MAX_FILE_SIZE_MB} MB
            </p>
          </div>

          <Card className="flex flex-wrap items-center gap-4 p-4">
            <div className="flex-1 min-w-[200px]">
              <p className="font-semibold text-foreground">📋 Modelo rápido CSV</p>
              <p className="text-sm text-muted-foreground">
                Preencha um contrato por linha. Se deixar contrato_id vazio, o JuroPro cria a
                numeração automaticamente.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={baixarModelo}
              className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar Modelo
            </Button>
          </Card>

          <Card className="p-4">
            <p className="mb-3 font-semibold text-foreground">
              📌 O que o importador faz automaticamente:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["🔗", "Relacionamento", "Cria Cliente → Contrato → Parcelas em uma linha"],
                ["#️⃣", "Contrato automático", "Campo contrato_id pode ficar vazio"],
                ["🔄", "Detecção de duplicatas", "CPF existente reutiliza o cliente"],
                ["🔴", "Status automático", "Vencidas pendentes viram Atrasadas"],
                ["⚡", "Em lotes", "Processa em chunks para máxima performance"],
                ["✅", "Validação", "Linhas com erros são listadas e ignoradas"],
              ].map(([ic, t, s]) => (
                <div key={t} className="flex gap-3 rounded-lg bg-muted/40 p-3">
                  <span className="text-xl">{ic}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t}</p>
                    <p className="text-xs text-muted-foreground">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* FASE: PREVIEW */}
      {fase === "preview" && (
        <div className="space-y-4">
          <Card className="flex flex-wrap items-center gap-3 p-4">
            <FileSpreadsheet className="h-8 w-8 text-emerald-600" />
            <div className="flex-1 min-w-[150px]">
              <p className="font-semibold text-foreground">{arquivo?.name}</p>
              <p className="text-xs text-muted-foreground">
                {((arquivo?.size ?? 0) / 1024).toFixed(1)} KB • {dados.length} linhas
              </p>
            </div>
            <Button variant="outline" onClick={resetar}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Trocar arquivo
            </Button>
          </Card>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <KpiMini label="Total" value={stats.total} icon="📋" color="blue" />
            <KpiMini label="Válidas" value={stats.validos} icon="✅" color="green" />
            <KpiMini label="Com erro" value={stats.invalidos} icon="❌" color="red" />
            <KpiMini label="Pagas" value={stats.pagos} icon="💚" color="green" />
            <KpiMini label="Atrasadas" value={stats.atrasados} icon="🔴" color="red" />
            <KpiMini label="Pendentes" value={stats.pendentes} icon="⏳" color="blue" />
          </div>

          <Card className="p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-foreground">🔍 Preview dos Dados</p>
              <Select
                value={filtroStatus}
                onValueChange={(v) => setFiltro(v as typeof filtroStatus)}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos ({stats.total})</SelectItem>
                  <SelectItem value="pago">Pagos ({stats.pagos})</SelectItem>
                  <SelectItem value="pendente">Pendentes ({stats.pendentes})</SelectItem>
                  <SelectItem value="atrasado">Atrasados ({stats.atrasados})</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="max-h-[400px] overflow-auto rounded-md border">
              <table className="w-full min-w-[800px] text-xs">
                <thead className="sticky top-0 bg-muted text-muted-foreground">
                  <tr>
                    {[
                      "#",
                      "Cliente",
                      "CPF",
                      "Contrato",
                      "Parc.",
                      "Vencimento",
                      "Valor",
                      "Status",
                      "OK",
                    ].map((h) => (
                      <th key={h} className="px-3 py-2 text-left font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtrados.slice(0, 200).map((r, i) => (
                    <tr key={i} className="border-t hover:bg-muted/40">
                      <td className="px-3 py-2 text-muted-foreground">{r._linha}</td>
                      <td className="px-3 py-2 font-medium text-foreground">
                        {r.nome_cliente || <span className="text-destructive">⚠️ vazio</span>}
                      </td>
                      <td className="px-3 py-2 font-mono">{r.cpf_cnpj}</td>
                      <td className="px-3 py-2 font-semibold text-emerald-600">{r.contrato_id}</td>
                      <td className="px-3 py-2">
                        {r.num_parcela}/{r.num_parcelas}
                      </td>
                      <td
                        className={cn(
                          "px-3 py-2",
                          r._statusCalc === "atrasado" && "text-destructive",
                        )}
                      >
                        {r.data_vencimento || "—"}
                      </td>
                      <td className="px-3 py-2 font-semibold">
                        {r.valor_parcela ? fmtBRL(r.valor_parcela) : "—"}
                      </td>
                      <td className="px-3 py-2">
                        <StatusBadge s={r._statusCalc} />
                      </td>
                      <td className="px-3 py-2 text-center">{r._valido ? "✅" : "❌"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtrados.length > 200 && (
                <p className="border-t bg-muted/40 p-2 text-center text-xs text-muted-foreground">
                  Mostrando 200 de {filtrados.length} linhas filtradas
                </p>
              )}
            </div>

            {stats.invalidos > 0 && (
              <div className="mt-3 flex items-start gap-2 rounded-md border-l-4 border-destructive bg-destructive/10 p-3 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <p>
                  <strong>{stats.invalidos}</strong> linha(s) com campos obrigatórios ausentes serão
                  ignoradas.
                </p>
              </div>
            )}
          </Card>

          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="outline" onClick={resetar}>
              <Trash2 className="mr-2 h-4 w-4" />
              Cancelar
            </Button>
            <Button
              onClick={importar}
              disabled={stats.validos === 0}
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Importar {stats.validos} linha(s)
            </Button>
          </div>
        </div>
      )}

      {/* FASE: PROCESSANDO */}
      {fase === "processando" && (
        <Card className="space-y-4 p-8 text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-emerald-600" />
          <p className="text-lg font-semibold text-foreground">Importando sua carteira...</p>
          <p className="text-sm text-muted-foreground">
            Processando em blocos de {CHUNK_SIZE} linhas
          </p>
          <div className="mx-auto max-w-md">
            <Progress value={progresso} className="h-3" />
            <p className="mt-2 font-semibold text-emerald-600">{progresso}%</p>
          </div>
        </Card>
      )}

      {/* FASE: CONCLUIDO */}
      {fase === "concluido" && resultado && (
        <Card className="space-y-4 p-6">
          <div className="text-center">
            <CheckCircle2 className="mx-auto mb-2 h-14 w-14 text-emerald-600" />
            <p className="text-xl font-bold text-foreground">Importação Concluída!</p>
            <p className="text-sm text-muted-foreground">Sua carteira foi importada com sucesso.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <KpiMini
              label="Clientes novos"
              value={resultado.clientes_criados}
              icon="👥"
              color="blue"
            />
            <KpiMini
              label="Clientes existentes"
              value={resultado.clientes_existentes}
              icon="🔄"
              color="amber"
            />
            <KpiMini
              label="Contratos novos"
              value={resultado.emprestimos_criados}
              icon="📋"
              color="green"
            />
            <KpiMini
              label="Contratos duplicados"
              value={resultado.emprestimos_existentes}
              icon="🔁"
              color="amber"
            />
            <KpiMini
              label="Parcelas geradas"
              value={resultado.parcelas_inseridas}
              icon="💳"
              color="green"
            />
            <KpiMini label="Avisos" value={resultado.warnings.length} icon="⚠️" color="amber" />
          </div>

          {resultado.warnings.length > 0 && (
            <div className="max-h-60 overflow-auto rounded-md border bg-muted/30 p-3">
              <p className="mb-2 font-semibold text-foreground">Logs:</p>
              {resultado.warnings.map((w, i) => (
                <div
                  key={i}
                  className="mb-1 flex items-start gap-2 rounded border-l-2 border-amber-500 bg-amber-50 p-2 text-xs dark:bg-amber-950/30"
                >
                  <AlertTriangle className="mt-0.5 h-3 w-3 flex-shrink-0 text-amber-600" />
                  <span>{w}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-2">
            <Button onClick={resetar} variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Nova Importação
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

// ─── Subcomponentes ────────────────────────────────────────────
function StatusBadge({ s }: { s: "pago" | "pendente" | "atrasado" }) {
  const map = {
    pago: { label: "Pago", className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100" },
    pendente: { label: "Pendente", className: "bg-blue-100 text-blue-700 hover:bg-blue-100" },
    atrasado: { label: "Atrasado", className: "bg-red-100 text-red-700 hover:bg-red-100" },
  } as const;
  const m = map[s];
  return <Badge className={cn("font-semibold", m.className)}>{m.label}</Badge>;
}

function KpiMini({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number | string;
  icon: string;
  color: "blue" | "green" | "red" | "amber";
}) {
  const borders: Record<string, string> = {
    blue: "border-t-blue-500",
    green: "border-t-emerald-500",
    red: "border-t-red-500",
    amber: "border-t-amber-500",
  };
  return (
    <Card className={cn("border-t-4 p-3", borders[color])}>
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <span className="text-base">{icon}</span>
      </div>
      <p className="mt-1 text-lg font-bold text-foreground">{value}</p>
    </Card>
  );
}

export default BulkImporter;
