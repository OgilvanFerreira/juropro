import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, n as numberType, s as stringType, u as unionType } from "../_libs/zod.mjs";
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
const listParcelas_createServerFn_handler = createServerRpc({
  id: "d25d4ea40f20001bf463e584578af767aafdf779dce0fcf0384aad8000be6170",
  name: "listParcelas",
  filename: "src/integrations/external-supabase/parcelas.functions.ts"
}, (opts) => listParcelas.__executeServer(opts));
const listParcelas = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(listParcelas_createServerFn_handler, async ({
  context
}) => {
  const supabase = getServerClient();
  const {
    data: parcelas,
    error: parErr
  } = await supabase.from("parcelas").select("id, emprestimo_id, numero_parcela, data_vencimento, valor_parcela, status, data_pagamento, valor_pago").eq("user_id", context.userId).order("data_vencimento", {
    ascending: true
  }).limit(2e3);
  if (parErr) {
    console.error("listParcelas error:", parErr);
    return {
      data: [],
      error: parErr.message
    };
  }
  const list = parcelas ?? [];
  if (list.length === 0) return {
    data: [],
    error: null
  };
  const empIds = Array.from(new Set(list.map((p) => p.emprestimo_id).filter((v) => v != null)));
  const {
    data: emps,
    error: empErr
  } = empIds.length ? await supabase.from("emprestimos").select("id, cliente_id, numero_parcelas, taxa_juros, valor_principal, created_at").eq("user_id", context.userId).in("id", empIds) : {
    data: [],
    error: null
  };
  if (empErr) {
    console.error("listParcelas emprestimos error:", empErr);
    return {
      data: [],
      error: empErr.message
    };
  }
  const empMap = /* @__PURE__ */ new Map();
  (emps ?? []).forEach((e) => empMap.set(String(e.id), {
    cliente_id: e.cliente_id ?? null,
    numero_parcelas: Number(e.numero_parcelas ?? 0),
    taxa_juros: Number(e.taxa_juros ?? 0),
    valor_principal: Number(e.valor_principal ?? 0),
    created_at: e.created_at ?? null
  }));
  const {
    data: allEmps
  } = await supabase.from("emprestimos").select("id, created_at").eq("user_id", context.userId).order("created_at", {
    ascending: true
  }).limit(2e3);
  const seqMap = /* @__PURE__ */ new Map();
  (allEmps ?? []).forEach((e, idx) => seqMap.set(String(e.id), idx + 1));
  const clienteIds = Array.from(new Set(Array.from(empMap.values()).map((e) => e.cliente_id).filter((v) => v != null)));
  const {
    data: clientes,
    error: cliErr
  } = clienteIds.length ? await supabase.from("clientes").select("id, nome, telefone").eq("user_id", context.userId).in("id", clienteIds) : {
    data: [],
    error: null
  };
  if (cliErr) {
    console.error("listParcelas clientes error:", cliErr);
  }
  const cliMap = /* @__PURE__ */ new Map();
  (clientes ?? []).forEach((c) => cliMap.set(String(c.id), {
    nome: c.nome ?? null,
    telefone: c.telefone ?? null
  }));
  const out = list.map((p) => {
    const emp = empMap.get(String(p.emprestimo_id));
    const cli = emp?.cliente_id ? cliMap.get(String(emp.cliente_id)) : null;
    const minimo = emp ? emp.valor_principal * emp.taxa_juros / 100 : 0;
    const seq = seqMap.get(String(p.emprestimo_id)) ?? 0;
    const codigo = `#${String(seq).padStart(3, "0")}`;
    return {
      id: p.id,
      emprestimo_id: p.emprestimo_id,
      numero_parcela: Number(p.numero_parcela ?? 0),
      parcelas_total: emp?.numero_parcelas ?? 0,
      data_vencimento: p.data_vencimento ?? null,
      valor_parcela: Number(p.valor_parcela ?? 0),
      valor_minimo: minimo,
      status: p.status ?? null,
      data_pagamento: p.data_pagamento ?? null,
      valor_pago: p.valor_pago != null ? Number(p.valor_pago) : null,
      cliente_id: emp?.cliente_id ?? null,
      cliente_nome: cli?.nome ?? null,
      cliente_telefone: cli?.telefone ?? null,
      contrato_codigo: codigo,
      emprestimo_seq: seq
    };
  });
  return {
    data: out,
    error: null
  };
});
const baixaSchema = objectType({
  id: unionType([stringType().min(1), numberType()]),
  data_pagamento: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_pago: numberType().min(0)
});
const baixaParcela_createServerFn_handler = createServerRpc({
  id: "0b71c1c09ef5d550a1257a9fb3ea9ef66621cd179d29ad2a8abb100078b9ae99",
  name: "baixaParcela",
  filename: "src/integrations/external-supabase/parcelas.functions.ts"
}, (opts) => baixaParcela.__executeServer(opts));
const baixaParcela = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => baixaSchema.parse(input)).handler(baixaParcela_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const {
    data: updated,
    error
  } = await supabase.from("parcelas").update({
    status: "pago",
    data_pagamento: data.data_pagamento,
    valor_pago: data.valor_pago
  }).eq("id", data.id).eq("user_id", context.userId).select("id");
  if (error) {
    console.error("baixaParcela error:", error);
    return {
      ok: false,
      error: error.message
    };
  }
  if (!updated || updated.length === 0) {
    return {
      ok: false,
      error: "Nenhuma parcela foi atualizada. Verifique as permissões (RLS) da tabela parcelas."
    };
  }
  return {
    ok: true,
    error: null
  };
});
const estornoSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const estornoParcela_createServerFn_handler = createServerRpc({
  id: "98784c10cf13daa9b7ed3c1721e96cd0091c1866f9f92b5502c340b6a0eb7114",
  name: "estornoParcela",
  filename: "src/integrations/external-supabase/parcelas.functions.ts"
}, (opts) => estornoParcela.__executeServer(opts));
const estornoParcela = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => estornoSchema.parse(input)).handler(estornoParcela_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const {
    data: updated,
    error
  } = await supabase.from("parcelas").update({
    status: "pendente",
    data_pagamento: null,
    valor_pago: null
  }).eq("id", data.id).eq("user_id", context.userId).select("id");
  if (error) {
    console.error("estornoParcela error:", error);
    return {
      ok: false,
      error: error.message
    };
  }
  if (!updated || updated.length === 0) {
    return {
      ok: false,
      error: "Nenhuma parcela foi estornada. Verifique as permissões (RLS) da tabela parcelas."
    };
  }
  return {
    ok: true,
    error: null
  };
});
export {
  baixaParcela_createServerFn_handler,
  estornoParcela_createServerFn_handler,
  listParcelas_createServerFn_handler
};
