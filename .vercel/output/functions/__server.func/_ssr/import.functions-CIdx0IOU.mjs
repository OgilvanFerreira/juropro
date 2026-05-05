import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, n as numberType, s as stringType, b as arrayType } from "../_libs/zod.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./createMiddleware-BvN2ghIY.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function getServerClient(opts) {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const anonKey = process.env.EXTERNAL_SUPABASE_ANON_KEY;
  const serviceKey = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !anonKey) {
    throw new Error("EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_ANON_KEY não configurados.");
  }
  const key = serviceKey ? serviceKey : anonKey;
  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
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
const PERIODICIDADE_DIAS = {
  mensal: 30,
  quinzenal: 15,
  semanal: 7,
  diario: 1
};
function normTipoJuros(s) {
  const k = s.toLowerCase().trim();
  if (k.includes("compost")) return "composto";
  if (k.includes("só") || k.includes("so j") || k.includes("juros")) return "so_juros";
  return "simples";
}
function normPeriodicidade(s) {
  const k = s.toLowerCase().trim();
  if (k.startsWith("quin")) return "quinzenal";
  if (k.startsWith("sem")) return "semanal";
  if (k.startsWith("dia")) return "diario";
  return "mensal";
}
function normStatus(s) {
  return s.toLowerCase().trim() === "pago" ? "pago" : "pendente";
}
function digits(s) {
  return (s ?? "").replace(/\D/g, "");
}
const bulkImport_createServerFn_handler = createServerRpc({
  id: "0b7cf50ce24510d9b81ef047a190dcabab6d0fd54bdef20811a78c2b7252e564",
  name: "bulkImport",
  filename: "src/integrations/external-supabase/import.functions.ts"
}, (opts) => bulkImport.__executeServer(opts));
const bulkImport = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => bulkImportSchema.parse(input)).handler(bulkImport_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient();
  const userId = context.userId;
  const warnings = [];
  let clientes_criados = 0;
  let clientes_existentes = 0;
  let emprestimos_criados = 0;
  let emprestimos_existentes = 0;
  let parcelas_inseridas = 0;
  const {
    data: clientesExistentes,
    error: errCli
  } = await supabase.from("clientes").select("id, cpf_cnpj, nome").eq("user_id", userId).limit(5e3);
  if (errCli) {
    return {
      ok: false,
      error: `Falha ao ler clientes: ${errCli.message}`,
      clientes_criados,
      clientes_existentes,
      emprestimos_criados,
      emprestimos_existentes,
      parcelas_inseridas,
      warnings
    };
  }
  const cpfToClienteId = /* @__PURE__ */ new Map();
  for (const c of clientesExistentes ?? []) {
    const d = digits(String(c.cpf_cnpj ?? ""));
    if (d) cpfToClienteId.set(d, c.id);
  }
  const clientesMap = /* @__PURE__ */ new Map();
  for (const r of data.rows) {
    const cpfKey = digits(r.cpf_cnpj) || `__nocpf__${r.nome_cliente}`;
    let cli = clientesMap.get(cpfKey);
    if (!cli) {
      cli = {
        nome: r.nome_cliente,
        cpf_cnpj: r.cpf_cnpj,
        telefone: r.telefone ?? "",
        email: r.email ?? "",
        contratos: /* @__PURE__ */ new Map()
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
        parcelas: []
      };
      cli.contratos.set(r.contrato_id, contrato);
    }
    contrato.parcelas.push({
      num: r.num_parcela,
      venc: r.data_vencimento,
      valor: r.valor_parcela,
      status: r.status_parcela,
      data_pag: r.data_pagamento || void 0,
      valor_pago: r.valor_pago ?? null
    });
  }
  for (const [cpfKey, cli] of clientesMap.entries()) {
    let clienteId = cpfToClienteId.get(cpfKey);
    if (!clienteId) {
      const {
        data: created,
        error: insErr
      } = await supabase.from("clientes").insert({
        user_id: userId,
        nome: cli.nome,
        cpf_cnpj: cli.cpf_cnpj || null,
        telefone: cli.telefone || null,
        email: cli.email || null
      }).select("id").single();
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
    if (clienteId === void 0) continue;
    const clienteIdResolved = clienteId;
    const {
      data: empsExist
    } = await supabase.from("emprestimos").select("id, valor_principal, data_inicio, observacoes").eq("user_id", userId).eq("cliente_id", clienteIdResolved).limit(500);
    for (const [contratoId, contrato] of cli.contratos.entries()) {
      const tag = `[Contrato: ${contratoId}]`;
      const dup = (empsExist ?? []).find((e) => String(e.observacoes ?? "").includes(tag));
      if (dup) {
        emprestimos_existentes++;
        warnings.push(`Contrato ${contratoId} de "${cli.nome}" já existe — ignorado.`);
        continue;
      }
      const tipoJuros = normTipoJuros(contrato.tipo_juros);
      const periodicidade = normPeriodicidade(contrato.periodicidade);
      const periodLabel = periodicidade.charAt(0).toUpperCase() + periodicidade.slice(1);
      const observacoesFinal = `[Contrato: ${contratoId}] [Periodicidade: ${periodLabel} • ${PERIODICIDADE_DIAS[periodicidade]} dias]`;
      const {
        data: empCriado,
        error: empErr
      } = await supabase.from("emprestimos").insert({
        user_id: userId,
        cliente_id: clienteIdResolved,
        valor_principal: contrato.valor_principal,
        taxa_juros: contrato.taxa_juros,
        numero_parcelas: contrato.num_parcelas,
        tipo_juros: tipoJuros,
        data_inicio: contrato.data_inicio,
        observacoes: observacoesFinal,
        status: "ativo"
      }).select("id").single();
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
          data_pagamento: status === "pago" ? p.data_pag || null : null,
          valor_pago: status === "pago" ? p.valor_pago ?? p.valor : null
        };
      });
      const {
        error: parErr
      } = await supabase.from("parcelas").insert(parcelasPayload);
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
    warnings
  };
});
export {
  bulkImport_createServerFn_handler
};
