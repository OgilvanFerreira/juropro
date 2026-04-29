import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, l as literalType, u as unionType, n as numberType } from "../_libs/zod.mjs";
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
const listClientes_createServerFn_handler = createServerRpc({
  id: "a1d36e2882056ec76bc682ffb4551e3ded38816663f31e9c4fb5604cbe333d3c",
  name: "listClientes",
  filename: "src/integrations/external-supabase/clientes.functions.ts"
}, (opts) => listClientes.__executeServer(opts));
const listClientes = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(listClientes_createServerFn_handler, async ({
  context
}) => {
  const supabase = getServerClient();
  const {
    data,
    error
  } = await supabase.from("clientes").select("id, nome, email, telefone, cpf_cnpj, cidade, uf, created_at").eq("user_id", context.userId).order("created_at", {
    ascending: false
  }).limit(500);
  if (error) {
    console.error("listClientes error:", error);
    return {
      data: [],
      error: error.message
    };
  }
  return {
    data: data ?? [],
    error: null
  };
});
const clienteInsertSchema = objectType({
  nome: stringType().trim().min(1).max(200),
  email: stringType().trim().email().max(255).or(literalType("")).optional(),
  telefone: stringType().trim().max(30).optional(),
  data_nascimento: stringType().trim().max(20).optional(),
  cpf_cnpj: stringType().trim().max(20).optional(),
  rg: stringType().trim().max(30).optional(),
  cep: stringType().trim().max(15).optional(),
  endereco: stringType().trim().max(255).optional(),
  numero: stringType().trim().max(20).optional(),
  complemento: stringType().trim().max(100).optional(),
  bairro: stringType().trim().max(100).optional(),
  cidade: stringType().trim().max(100).optional(),
  uf: stringType().trim().max(2).optional()
});
const getClienteSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const getCliente_createServerFn_handler = createServerRpc({
  id: "d9914c95806ddc70e174d68f6fb428724a65d639bb24bac34e5d0c2f58920996",
  name: "getCliente",
  filename: "src/integrations/external-supabase/clientes.functions.ts"
}, (opts) => getCliente.__executeServer(opts));
const getCliente = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).inputValidator((input) => getClienteSchema.parse(input)).handler(getCliente_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient();
  const {
    data: row,
    error
  } = await supabase.from("clientes").select("*").eq("id", data.id).eq("user_id", context.userId).maybeSingle();
  if (error) {
    console.error("getCliente error:", error);
    return {
      data: null,
      error: error.message
    };
  }
  return {
    data: row ?? null,
    error: null
  };
});
const clienteUpdateSchema = clienteInsertSchema.extend({
  id: unionType([stringType().min(1), numberType()])
});
const updateCliente_createServerFn_handler = createServerRpc({
  id: "f8fab8de21853d82862d38634cee01c401643b7bbf98e40db6d809865f0ebfa1",
  name: "updateCliente",
  filename: "src/integrations/external-supabase/clientes.functions.ts"
}, (opts) => updateCliente.__executeServer(opts));
const updateCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => clienteUpdateSchema.parse(input)).handler(updateCliente_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const {
    id,
    ...rest
  } = data;
  const payload = {};
  for (const [k, v] of Object.entries(rest)) {
    if (v === void 0) continue;
    if (typeof v === "string" && v.trim() === "") {
      payload[k] = null;
      continue;
    }
    payload[k] = v;
  }
  const cpfCnpjRaw = typeof payload.cpf_cnpj === "string" ? payload.cpf_cnpj : "";
  const cpfCnpjDigits = cpfCnpjRaw.replace(/\D/g, "");
  if (cpfCnpjDigits.length > 0) {
    const {
      data: existing,
      error: checkError
    } = await supabase.from("clientes").select("id, cpf_cnpj").eq("user_id", context.userId).not("cpf_cnpj", "is", null).limit(1e3);
    if (checkError) {
      console.error("updateCliente duplicate-check error:", checkError);
      return {
        ok: false,
        error: checkError.message
      };
    }
    const duplicate = (existing ?? []).some((row) => {
      if (String(row.id) === String(id)) return false;
      const rowDigits = String(row.cpf_cnpj ?? "").replace(/\D/g, "");
      return rowDigits === cpfCnpjDigits;
    });
    if (duplicate) {
      return {
        ok: false,
        error: "CPF/CNPJ já cadastrado em outro cliente.",
        code: "DUPLICATE_CPF_CNPJ"
      };
    }
  }
  const {
    data: updated,
    error
  } = await supabase.from("clientes").update(payload).eq("id", id).eq("user_id", context.userId).select("id");
  if (error) {
    console.error("updateCliente error:", error);
    return {
      ok: false,
      error: error.message
    };
  }
  if (!updated || updated.length === 0) {
    return {
      ok: false,
      error: "Nenhum registro foi atualizado. Verifique as permissões (RLS) da tabela clientes."
    };
  }
  return {
    ok: true,
    error: null
  };
});
const createCliente_createServerFn_handler = createServerRpc({
  id: "30bb6e92b07e2f10e32e8ed0f6d03e4f521acff9fef9a6e31e32b428acacbd8e",
  name: "createCliente",
  filename: "src/integrations/external-supabase/clientes.functions.ts"
}, (opts) => createCliente.__executeServer(opts));
const createCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => clienteInsertSchema.parse(input)).handler(createCliente_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const payload = {};
  for (const [k, v] of Object.entries(data)) {
    if (v === void 0) continue;
    if (typeof v === "string" && v.trim() === "") continue;
    payload[k] = v;
  }
  payload.user_id = context.userId;
  const cpfCnpjRaw = typeof payload.cpf_cnpj === "string" ? payload.cpf_cnpj : "";
  const cpfCnpjDigits = cpfCnpjRaw.replace(/\D/g, "");
  if (cpfCnpjDigits.length > 0) {
    const {
      data: existing,
      error: checkError
    } = await supabase.from("clientes").select("id, cpf_cnpj").eq("user_id", context.userId).not("cpf_cnpj", "is", null).limit(1e3);
    if (checkError) {
      console.error("createCliente duplicate-check error:", checkError);
      return {
        ok: false,
        error: checkError.message
      };
    }
    const duplicate = (existing ?? []).some((row) => {
      const rowDigits = String(row.cpf_cnpj ?? "").replace(/\D/g, "");
      return rowDigits === cpfCnpjDigits;
    });
    if (duplicate) {
      return {
        ok: false,
        error: "CPF/CNPJ já cadastrado no sistema.",
        code: "DUPLICATE_CPF_CNPJ"
      };
    }
  }
  const {
    error
  } = await supabase.from("clientes").insert(payload);
  if (error) {
    console.error("createCliente error:", error);
    return {
      ok: false,
      error: error.message
    };
  }
  return {
    ok: true,
    error: null
  };
});
const deleteClienteSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const deleteCliente_createServerFn_handler = createServerRpc({
  id: "4a3769f568ffed89523bee6c00eb8f5b735a99b66ffa1fd820890c9fc8e52e73",
  name: "deleteCliente",
  filename: "src/integrations/external-supabase/clientes.functions.ts"
}, (opts) => deleteCliente.__executeServer(opts));
const deleteCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => deleteClienteSchema.parse(input)).handler(deleteCliente_createServerFn_handler, async ({
  data,
  context
}) => {
  const supabase = getServerClient({
    admin: true
  });
  const {
    data: deleted,
    error
  } = await supabase.from("clientes").delete().eq("id", data.id).eq("user_id", context.userId).select("id");
  if (error) {
    console.error("deleteCliente error:", error);
    return {
      ok: false,
      error: error.message
    };
  }
  if (!deleted || deleted.length === 0) {
    console.error("deleteCliente: nenhuma linha removida (RLS?) id=", data.id);
    return {
      ok: false,
      error: "Nenhum registro foi excluído. Verifique as permissões (RLS) da tabela clientes ou se o SERVICE_ROLE_KEY do Supabase externo está configurado."
    };
  }
  return {
    ok: true,
    error: null
  };
});
export {
  createCliente_createServerFn_handler,
  deleteCliente_createServerFn_handler,
  getCliente_createServerFn_handler,
  listClientes_createServerFn_handler,
  updateCliente_createServerFn_handler
};
