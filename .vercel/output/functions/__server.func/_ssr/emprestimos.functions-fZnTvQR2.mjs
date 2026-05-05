import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, n as numberType, s as stringType, b as arrayType, e as enumType, u as unionType } from "../_libs/zod.mjs";
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
  const key = opts?.admin && serviceKey ? serviceKey : anonKey;
  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
const PERIODICIDADE_DIAS = {
  mensal: 30,
  quinzenal: 15,
  semanal: 7,
  diario: 1
};
const parcelaSchema = objectType({
  numero: numberType().int().min(1),
  data_vencimento: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor: numberType().positive()
});
const createEmprestimoSchema = objectType({
  cliente_id: unionType([stringType().min(1), numberType()]),
  valor_principal: numberType().positive(),
  taxa_juros: numberType().min(0),
  numero_parcelas: numberType().int().min(1).max(360),
  tipo_juros: enumType(["simples", "composto", "so_juros"]),
  periodicidade: enumType(["mensal", "quinzenal", "semanal", "diario"]),
  data_inicio: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  observacoes: stringType().max(2e3).optional().default(""),
  parcelas: arrayType(parcelaSchema).min(1).max(360)
});
const listEmprestimos_createServerFn_handler = createServerRpc({
  id: "54d18432aa415589afc4caf38b56e8a0fbc09e35e032d7efd584ca5da52841f5",
  name: "listEmprestimos",
  filename: "src/integrations/external-supabase/emprestimos.functions.ts"
}, (opts) => listEmprestimos.__executeServer(opts));
const listEmprestimos = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(listEmprestimos_createServerFn_handler, async ({
  context
}) => {
  const supabase = getServerClient();
  const {
    data: emps,
    error: empErr
  } = await supabase.from("emprestimos").select("id, cliente_id, valor_principal, taxa_juros, numero_parcelas, tipo_juros, data_inicio, status, observacoes, created_at").eq("user_id", context.userId).order("created_at", {
    ascending: false
  }).limit(500);
  if (empErr) {
    console.error("listEmprestimos error:", empErr);
    return {
      data: [],
      error: empErr.message
    };
  }
  const list = emps ?? [];
  if (list.length === 0) return {
    data: [],
    error: null
  };
  const clienteIds = Array.from(new Set(list.map((e) => e.cliente_id).filter((v) => v !== null && v !== void 0)));
  const empIds = list.map((e) => e.id);
  const [{
    data: clientesRows
  }, {
    data: parcRows
  }] = await Promise.all([clienteIds.length ? supabase.from("clientes").select("id, nome").eq("user_id", context.userId).in("id", clienteIds) : Promise.resolve({
    data: []
  }), supabase.from("parcelas").select("emprestimo_id, valor_parcela, status").eq("user_id", context.userId).in("emprestimo_id", empIds)]);
  const nomeMap = /* @__PURE__ */ new Map();
  (clientesRows ?? []).forEach((c) => nomeMap.set(String(c.id), c.nome));
  const parcMap = /* @__PURE__ */ new Map();
  (parcRows ?? []).forEach((p) => {
    const key = String(p.emprestimo_id);
    const cur = parcMap.get(key) ?? {
      pagas: 0,
      total: 0,
      pago: 0,
      receber: 0
    };
    cur.total += 1;
    const valor = Number(p.valor_parcela ?? 0);
    if (p.status === "pago" || p.status === "paga") {
      cur.pagas += 1;
      cur.pago += valor;
    } else {
      cur.receber += valor;
    }
    parcMap.set(key, cur);
  });
  const out = list.map((e) => {
    const stats = parcMap.get(String(e.id)) ?? {
      pagas: 0,
      total: e.numero_parcelas ?? 0,
      pago: 0,
      receber: 0
    };
    return {
      id: e.id,
      cliente_id: e.cliente_id,
      cliente_nome: e.cliente_id ? nomeMap.get(String(e.cliente_id)) ?? null : null,
      valor_principal: Number(e.valor_principal ?? 0),
      taxa_juros: Number(e.taxa_juros ?? 0),
      numero_parcelas: Number(e.numero_parcelas ?? 0),
      tipo_juros: e.tipo_juros ?? null,
      data_inicio: e.data_inicio ?? null,
      status: e.status ?? null,
      observacoes: e.observacoes ?? null,
      created_at: e.created_at ?? null,
      parcelas_pagas: stats.pagas,
      parcelas_total: stats.total,
      total_pago: stats.pago,
      total_a_receber: stats.receber
    };
  });
  return {
    data: out,
    error: null
  };
});
const createEmprestimo_createServerFn_handler = createServerRpc({
  id: "648399b7e360e047083f6add624e06ea1327c86f2cc50495d7dd08781d2482a6",
  name: "createEmprestimo",
  filename: "src/integrations/external-supabase/emprestimos.functions.ts"
}, (opts) => createEmprestimo.__executeServer(opts));
const createEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => createEmprestimoSchema.parse(input)).handler(createEmprestimo_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const {
    data: cliOwner,
    error: cliOwnerErr
  } = await supabase.from("clientes").select("id").eq("id", data.cliente_id).eq("user_id", context.userId).maybeSingle();
  if (cliOwnerErr || !cliOwner) {
    return {
      ok: false,
      error: "Cliente inválido ou não pertence ao usuário."
    };
  }
  const periodicidadeLabel = data.periodicidade.charAt(0).toUpperCase() + data.periodicidade.slice(1);
  const observacoesFinal = `[Periodicidade: ${periodicidadeLabel} • ${PERIODICIDADE_DIAS[data.periodicidade]} dias]${data.observacoes ? `

${data.observacoes}` : ""}`;
  const empPayload = {
    user_id: context.userId,
    cliente_id: data.cliente_id,
    valor_principal: data.valor_principal,
    taxa_juros: data.taxa_juros,
    numero_parcelas: data.numero_parcelas,
    tipo_juros: data.tipo_juros,
    data_inicio: data.data_inicio,
    observacoes: observacoesFinal,
    status: "ativo"
  };
  const {
    data: created,
    error
  } = await supabase.from("emprestimos").insert(empPayload).select("id").single();
  if (error || !created) {
    console.error("createEmprestimo error:", error);
    return {
      ok: false,
      error: error?.message ?? "Falha ao criar empréstimo. Verifique as permissões (RLS) da tabela emprestimos."
    };
  }
  const parcelasPayload = data.parcelas.map((p) => ({
    user_id: context.userId,
    emprestimo_id: created.id,
    numero_parcela: p.numero,
    data_vencimento: p.data_vencimento,
    valor_parcela: p.valor,
    status: "pendente"
  }));
  const {
    error: parErr
  } = await supabase.from("parcelas").insert(parcelasPayload);
  if (parErr) {
    console.error("createEmprestimo parcelas error:", parErr);
    await supabase.from("emprestimos").delete().eq("id", created.id);
    return {
      ok: false,
      error: `Empréstimo criado, mas falhou ao gerar parcelas: ${parErr.message}`
    };
  }
  return {
    ok: true,
    error: null,
    id: created.id
  };
});
const idSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const getEmprestimo_createServerFn_handler = createServerRpc({
  id: "5e306e6374dbe7a66ce9d29a547d164bbadd46d1de7d4fc34a6ed3f15d528847",
  name: "getEmprestimo",
  filename: "src/integrations/external-supabase/emprestimos.functions.ts"
}, (opts) => getEmprestimo.__executeServer(opts));
const getEmprestimo = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).inputValidator((input) => idSchema.parse(input)).handler(getEmprestimo_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient();
  const {
    data: row,
    error
  } = await supabase.from("emprestimos").select("id, cliente_id, valor_principal, taxa_juros, numero_parcelas, tipo_juros, data_inicio, status, observacoes").eq("id", data.id).eq("user_id", context.userId).maybeSingle();
  if (error) {
    console.error("getEmprestimo error:", error);
    return {
      data: null,
      error: error.message
    };
  }
  if (!row) return {
    data: null,
    error: "Empréstimo não encontrado."
  };
  return {
    data: {
      id: row.id,
      cliente_id: row.cliente_id,
      valor_principal: Number(row.valor_principal ?? 0),
      taxa_juros: Number(row.taxa_juros ?? 0),
      numero_parcelas: Number(row.numero_parcelas ?? 0),
      tipo_juros: row.tipo_juros ?? null,
      data_inicio: row.data_inicio ?? null,
      status: row.status ?? null,
      observacoes: row.observacoes ?? null
    },
    error: null
  };
});
const updateEmprestimoSchema = objectType({
  id: unionType([stringType().min(1), numberType()]),
  cliente_id: unionType([stringType().min(1), numberType()]),
  valor_principal: numberType().positive(),
  taxa_juros: numberType().min(0),
  numero_parcelas: numberType().int().min(1).max(360),
  tipo_juros: enumType(["simples", "composto", "so_juros"]),
  periodicidade: enumType(["mensal", "quinzenal", "semanal", "diario"]),
  data_inicio: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  observacoes: stringType().max(2e3).optional().default(""),
  status: stringType().optional(),
  parcelas: arrayType(parcelaSchema).min(1).max(360)
});
const updateEmprestimo_createServerFn_handler = createServerRpc({
  id: "de46ef22cc0bdae65e7bf759be3eb47bea138684cd4db32980ef4abc7bf204d1",
  name: "updateEmprestimo",
  filename: "src/integrations/external-supabase/emprestimos.functions.ts"
}, (opts) => updateEmprestimo.__executeServer(opts));
const updateEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => updateEmprestimoSchema.parse(input)).handler(updateEmprestimo_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const {
    data: cliOwner,
    error: cliOwnerErr
  } = await supabase.from("clientes").select("id").eq("id", data.cliente_id).eq("user_id", context.userId).maybeSingle();
  if (cliOwnerErr || !cliOwner) {
    return {
      ok: false,
      error: "Cliente inválido ou não pertence ao usuário."
    };
  }
  const periodicidadeLabel = data.periodicidade.charAt(0).toUpperCase() + data.periodicidade.slice(1);
  const observacoesFinal = `[Periodicidade: ${periodicidadeLabel} • ${PERIODICIDADE_DIAS[data.periodicidade]} dias]${data.observacoes ? `

${data.observacoes}` : ""}`;
  const {
    error: updErr
  } = await supabase.from("emprestimos").update({
    cliente_id: data.cliente_id,
    valor_principal: data.valor_principal,
    taxa_juros: data.taxa_juros,
    numero_parcelas: data.numero_parcelas,
    tipo_juros: data.tipo_juros,
    data_inicio: data.data_inicio,
    observacoes: observacoesFinal,
    ...data.status ? {
      status: data.status
    } : {}
  }).eq("id", data.id).eq("user_id", context.userId);
  if (updErr) {
    console.error("updateEmprestimo error:", updErr);
    return {
      ok: false,
      error: updErr.message
    };
  }
  const {
    error: delErr
  } = await supabase.from("parcelas").delete().eq("emprestimo_id", data.id).eq("user_id", context.userId);
  if (delErr) {
    console.error("updateEmprestimo delete parcelas error:", delErr);
    return {
      ok: false,
      error: `Empréstimo atualizado, mas falhou ao limpar parcelas antigas: ${delErr.message}`
    };
  }
  const parcelasPayload = data.parcelas.map((p) => ({
    user_id: context.userId,
    emprestimo_id: data.id,
    numero_parcela: p.numero,
    data_vencimento: p.data_vencimento,
    valor_parcela: p.valor,
    status: "pendente"
  }));
  const {
    error: insErr
  } = await supabase.from("parcelas").insert(parcelasPayload);
  if (insErr) {
    console.error("updateEmprestimo insert parcelas error:", insErr);
    return {
      ok: false,
      error: `Empréstimo atualizado, mas falhou ao gerar novas parcelas: ${insErr.message}`
    };
  }
  return {
    ok: true,
    error: null
  };
});
const deleteEmprestimo_createServerFn_handler = createServerRpc({
  id: "1dd7b8138490523c28821508253fa96f275f84b32c69053cc3cb7a07debba17e",
  name: "deleteEmprestimo",
  filename: "src/integrations/external-supabase/emprestimos.functions.ts"
}, (opts) => deleteEmprestimo.__executeServer(opts));
const deleteEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => idSchema.parse(input)).handler(deleteEmprestimo_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const {
    error: parErr
  } = await supabase.from("parcelas").delete().eq("emprestimo_id", data.id).eq("user_id", context.userId);
  if (parErr) {
    console.error("deleteEmprestimo parcelas error:", parErr);
    return {
      ok: false,
      error: parErr.message
    };
  }
  const {
    error: empErr
  } = await supabase.from("emprestimos").delete().eq("id", data.id).eq("user_id", context.userId);
  if (empErr) {
    console.error("deleteEmprestimo error:", empErr);
    return {
      ok: false,
      error: empErr.message
    };
  }
  return {
    ok: true,
    error: null
  };
});
export {
  createEmprestimo_createServerFn_handler,
  deleteEmprestimo_createServerFn_handler,
  getEmprestimo_createServerFn_handler,
  listEmprestimos_createServerFn_handler,
  updateEmprestimo_createServerFn_handler
};
