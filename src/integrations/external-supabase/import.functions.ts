import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireAuthForExternal } from "./auth-guard";

function getServerClient(opts?: { admin?: boolean }) {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const anonKey = process.env.EXTERNAL_SUPABASE_ANON_KEY;
  const serviceKey = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_ANON_KEY não configurados.",
    );
  }
  const key = opts?.admin && serviceKey ? serviceKey : anonKey;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

// Linha vinda da planilha após normalização no cliente
const linhaSchema = z.object({
  nome_cliente: z.string().trim().min(1).max(200),
  cpf_cnpj: z.string().trim().max(20),
  telefone: z.string().trim().max(30).optional().default(""),
  email: z.string().trim().max(255).optional().default(""),
  contrato_id: z.string().trim().min(1).max(100),
  valor_principal: z.number().nonnegative(),
  taxa_juros: z.number().min(0),
  tipo_juros: z.string().trim().max(40),
  num_parcelas: z.number().int().min(1).max(360),
  periodicidade: z.string().trim().max(40),
  data_inicio: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  num_parcela: z.number().int().min(1),
  data_vencimento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_parcela: z.number().nonnegative(),
  status_parcela: z.string().trim().max(40),
  data_pagamento: z.string().optional().default(""),
  valor_pago: z.number().nullable().optional(),
});

const bulkImportSchema = z.object({
  rows: z.array(linhaSchema).min(1).max(5000),
});

export type BulkImportInput = z.infer<typeof bulkImportSchema>;

const PERIODICIDADE_DIAS: Record<string, number> = {
  mensal: 30,
  quinzenal: 15,
  semanal: 7,
  diario: 1,
};

function normTipoJuros(s: string): "simples" | "composto" | "so_juros" {
  const k = s.toLowerCase().trim();
  if (k.includes("compost")) return "composto";
  if (k.includes("só") || k.includes("so j") || k.includes("juros")) return "so_juros";
  return "simples";
}
function normPeriodicidade(s: string): keyof typeof PERIODICIDADE_DIAS {
  const k = s.toLowerCase().trim();
  if (k.startsWith("quin")) return "quinzenal";
  if (k.startsWith("sem")) return "semanal";
  if (k.startsWith("dia")) return "diario";
  return "mensal";
}
function normStatus(s: string): "pago" | "pendente" {
  return s.toLowerCase().trim() === "pago" ? "pago" : "pendente";
}
function digits(s: string): string {
  return (s ?? "").replace(/\D/g, "");
}

export type BulkImportResult = {
  ok: boolean;
  error: string | null;
  clientes_criados: number;
  clientes_existentes: number;
  emprestimos_criados: number;
  emprestimos_existentes: number;
  parcelas_inseridas: number;
  warnings: string[];
};

export const bulkImport = createServerFn({ method: "POST" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: BulkImportInput) => bulkImportSchema.parse(input))
  .handler(async ({ data, context }): Promise<BulkImportResult> => {
    const supabase = getServerClient({ admin: true });
    const userId = context.userId;
    const warnings: string[] = [];

    let clientes_criados = 0;
    let clientes_existentes = 0;
    let emprestimos_criados = 0;
    let emprestimos_existentes = 0;
    let parcelas_inseridas = 0;

    // 1) Carrega clientes do usuário para mapear cpf -> id
    const { data: clientesExistentes, error: errCli } = await supabase
      .from("clientes")
      .select("id, cpf_cnpj, nome")
      .eq("user_id", userId)
      .limit(5000);
    if (errCli) {
      return {
        ok: false,
        error: `Falha ao ler clientes: ${errCli.message}`,
        clientes_criados, clientes_existentes, emprestimos_criados,
        emprestimos_existentes, parcelas_inseridas, warnings,
      };
    }
    const cpfToClienteId = new Map<string, string | number>();
    for (const c of clientesExistentes ?? []) {
      const d = digits(String(c.cpf_cnpj ?? ""));
      if (d) cpfToClienteId.set(d, c.id);
    }

    // 2) Agrupa linhas por cliente (cpf) e por contrato
    type ContratoData = {
      contrato_id: string;
      valor_principal: number;
      taxa_juros: number;
      tipo_juros: string;
      num_parcelas: number;
      periodicidade: string;
      data_inicio: string;
      parcelas: Array<{
        num: number; venc: string; valor: number; status: string;
        data_pag?: string; valor_pago?: number | null;
      }>;
    };
    type ClienteData = {
      nome: string;
      cpf_cnpj: string;
      telefone: string;
      email: string;
      contratos: Map<string, ContratoData>;
    };
    const clientesMap = new Map<string, ClienteData>();

    for (const r of data.rows) {
      const cpfKey = digits(r.cpf_cnpj) || `__nocpf__${r.nome_cliente}`;
      let cli = clientesMap.get(cpfKey);
      if (!cli) {
        cli = {
          nome: r.nome_cliente,
          cpf_cnpj: r.cpf_cnpj,
          telefone: r.telefone ?? "",
          email: r.email ?? "",
          contratos: new Map(),
        };
        clientesMap.set(cpfKey, cli);
      }
      let contrato = cli.contratos.get(r.contrato_id);
      if (!contrato) {
        contrato = {
          contrato_id: r.contrato_id,
          valor_principal: r.valor_principal,
          taxa_juros: r.taxa_juros,
          tipo_juros: r.tipo_juros,
          num_parcelas: r.num_parcelas,
          periodicidade: r.periodicidade,
          data_inicio: r.data_inicio,
          parcelas: [],
        };
        cli.contratos.set(r.contrato_id, contrato);
      }
      contrato.parcelas.push({
        num: r.num_parcela,
        venc: r.data_vencimento,
        valor: r.valor_parcela,
        status: r.status_parcela,
        data_pag: r.data_pagamento || undefined,
        valor_pago: r.valor_pago ?? null,
      });
    }

    // 3) Cria/recupera cliente, depois empréstimo + parcelas
    for (const [cpfKey, cli] of clientesMap.entries()) {
      let clienteId: string | number | undefined = cpfToClienteId.get(cpfKey);

      if (!clienteId) {
        const { data: created, error: insErr } = await supabase
          .from("clientes")
          .insert({
            user_id: userId,
            nome: cli.nome,
            cpf_cnpj: cli.cpf_cnpj || null,
            telefone: cli.telefone || null,
            email: cli.email || null,
          })
          .select("id")
          .single();
        if (insErr || !created) {
          warnings.push(`Cliente "${cli.nome}" (${cli.cpf_cnpj}): ${insErr?.message ?? "falha ao criar"}`);
          continue;
        }
        clienteId = created.id;
        cpfToClienteId.set(cpfKey, clienteId);
        clientes_criados++;
      } else {
        clientes_existentes++;
      }

      const clienteIdResolved: string | number = clienteId;
      // Empréstimos do cliente já no banco (detecta duplicatas via observacoes)
      const { data: empsExist } = await supabase
        .from("emprestimos")
        .select("id, valor_principal, data_inicio, observacoes")
        .eq("user_id", userId)
        .eq("cliente_id", clienteIdResolved)
        .limit(500);

      for (const [contratoId, contrato] of cli.contratos.entries()) {
        // Detecta duplicata pelo contrato_id armazenado em observacoes
        const tag = `[Contrato: ${contratoId}]`;
        const dup = (empsExist ?? []).find((e) =>
          String(e.observacoes ?? "").includes(tag),
        );
        if (dup) {
          emprestimos_existentes++;
          warnings.push(`Contrato ${contratoId} de "${cli.nome}" já existe — ignorado.`);
          continue;
        }

        const tipoJuros = normTipoJuros(contrato.tipo_juros);
        const periodicidade = normPeriodicidade(contrato.periodicidade);
        const periodLabel = periodicidade.charAt(0).toUpperCase() + periodicidade.slice(1);
        const observacoesFinal = `[Contrato: ${contratoId}] [Periodicidade: ${periodLabel} • ${PERIODICIDADE_DIAS[periodicidade]} dias]`;

        const { data: empCriado, error: empErr } = await supabase
          .from("emprestimos")
          .insert({
            user_id: userId,
            cliente_id: clienteId,
            valor_principal: contrato.valor_principal,
            taxa_juros: contrato.taxa_juros,
            numero_parcelas: contrato.num_parcelas,
            tipo_juros: tipoJuros,
            data_inicio: contrato.data_inicio,
            observacoes: observacoesFinal,
            status: "ativo",
          })
          .select("id")
          .single();
        if (empErr || !empCriado) {
          warnings.push(`Contrato ${contratoId} de "${cli.nome}": ${empErr?.message ?? "falha ao criar"}`);
          continue;
        }
        emprestimos_criados++;

        const parcelasPayload = contrato.parcelas.map((p) => {
          const status = normStatus(p.status);
          return {
            user_id: userId,
            emprestimo_id: empCriado.id,
            numero_parcela: p.num,
            data_vencimento: p.venc,
            valor_parcela: p.valor,
            status,
            data_pagamento: status === "pago" ? (p.data_pag || null) : null,
            valor_pago: status === "pago" ? (p.valor_pago ?? p.valor) : null,
          };
        });
        const { error: parErr } = await supabase
          .from("parcelas")
          .insert(parcelasPayload);
        if (parErr) {
          warnings.push(`Parcelas do contrato ${contratoId}: ${parErr.message}`);
          await supabase.from("emprestimos").delete().eq("id", empCriado.id);
          emprestimos_criados--;
          continue;
        }
        parcelas_inseridas += parcelasPayload.length;
      }
    }

    return {
      ok: true,
      error: null,
      clientes_criados,
      clientes_existentes,
      emprestimos_criados,
      emprestimos_existentes,
      parcelas_inseridas,
      warnings,
    };
  });
