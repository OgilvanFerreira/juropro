import { c as createSsrRpc } from "./createSsrRpc-C2cGivNr.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./index.mjs";
import { o as objectType, n as numberType, s as stringType, u as unionType } from "../_libs/zod.mjs";
const listParcelas = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("d25d4ea40f20001bf463e584578af767aafdf779dce0fcf0384aad8000be6170"));
const baixaSchema = objectType({
  id: unionType([stringType().min(1), numberType()]),
  data_pagamento: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_pago: numberType().min(0)
});
const baixaParcela = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => baixaSchema.parse(input)).handler(createSsrRpc("0b71c1c09ef5d550a1257a9fb3ea9ef66621cd179d29ad2a8abb100078b9ae99"));
const estornoSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const estornoParcela = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => estornoSchema.parse(input)).handler(createSsrRpc("98784c10cf13daa9b7ed3c1721e96cd0091c1866f9f92b5502c340b6a0eb7114"));
export {
  baixaParcela as b,
  estornoParcela as e,
  listParcelas as l
};
