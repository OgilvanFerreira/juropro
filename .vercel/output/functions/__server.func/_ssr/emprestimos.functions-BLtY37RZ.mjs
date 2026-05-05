import { c as createSsrRpc } from "./createSsrRpc-C2cGivNr.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./index.mjs";
import { o as objectType, s as stringType, l as literalType, u as unionType, n as numberType, b as arrayType, e as enumType } from "../_libs/zod.mjs";
const listClientes = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("a1d36e2882056ec76bc682ffb4551e3ded38816663f31e9c4fb5604cbe333d3c"));
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
const getCliente = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).inputValidator((input) => getClienteSchema.parse(input)).handler(createSsrRpc("d9914c95806ddc70e174d68f6fb428724a65d639bb24bac34e5d0c2f58920996"));
const clienteUpdateSchema = clienteInsertSchema.extend({
  id: unionType([stringType().min(1), numberType()])
});
const updateCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => clienteUpdateSchema.parse(input)).handler(createSsrRpc("f8fab8de21853d82862d38634cee01c401643b7bbf98e40db6d809865f0ebfa1"));
const createCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => clienteInsertSchema.parse(input)).handler(createSsrRpc("30bb6e92b07e2f10e32e8ed0f6d03e4f521acff9fef9a6e31e32b428acacbd8e"));
const deleteClienteSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const deleteCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => deleteClienteSchema.parse(input)).handler(createSsrRpc("4a3769f568ffed89523bee6c00eb8f5b735a99b66ffa1fd820890c9fc8e52e73"));
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
const listEmprestimos = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("54d18432aa415589afc4caf38b56e8a0fbc09e35e032d7efd584ca5da52841f5"));
const createEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => createEmprestimoSchema.parse(input)).handler(createSsrRpc("648399b7e360e047083f6add624e06ea1327c86f2cc50495d7dd08781d2482a6"));
const idSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const getEmprestimo = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).inputValidator((input) => idSchema.parse(input)).handler(createSsrRpc("5e306e6374dbe7a66ce9d29a547d164bbadd46d1de7d4fc34a6ed3f15d528847"));
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
const updateEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => updateEmprestimoSchema.parse(input)).handler(createSsrRpc("de46ef22cc0bdae65e7bf759be3eb47bea138684cd4db32980ef4abc7bf204d1"));
const deleteEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => idSchema.parse(input)).handler(createSsrRpc("1dd7b8138490523c28821508253fa96f275f84b32c69053cc3cb7a07debba17e"));
export {
  listClientes as a,
  getCliente as b,
  createCliente as c,
  deleteEmprestimo as d,
  deleteCliente as e,
  updateEmprestimo as f,
  getEmprestimo as g,
  createEmprestimo as h,
  listEmprestimos as l,
  updateCliente as u
};
