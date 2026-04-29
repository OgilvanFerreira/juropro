import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
function getServerClient() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const anonKey = process.env.EXTERNAL_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error("EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_ANON_KEY não configurados.");
  }
  return createClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
const getDashboardKpis_createServerFn_handler = createServerRpc({
  id: "71437cf5e050460b36284e715ee0c59160813dc2274fab9a6c44b7155dc4de56",
  name: "getDashboardKpis",
  filename: "src/integrations/external-supabase/dashboard.functions.ts"
}, (opts) => getDashboardKpis.__executeServer(opts));
const getDashboardKpis = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(getDashboardKpis_createServerFn_handler, async ({
  context
}) => {
  const supabase = getServerClient();
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const userId = context.userId;
  const [clientesRes, contratosRes, atrasadasStatusRes, atrasadasVencidasRes, hojeRes] = await Promise.all([supabase.from("clientes").select("*", {
    count: "exact",
    head: true
  }).eq("user_id", userId), supabase.from("emprestimos").select("*", {
    count: "exact",
    head: true
  }).eq("user_id", userId).eq("status", "ativo"), supabase.from("parcelas").select("*", {
    count: "exact",
    head: true
  }).eq("user_id", userId).eq("status", "atrasado"), supabase.from("parcelas").select("*", {
    count: "exact",
    head: true
  }).eq("user_id", userId).eq("status", "pendente").lt("data_vencimento", today), supabase.from("parcelas").select("*", {
    count: "exact",
    head: true
  }).eq("user_id", userId).eq("data_vencimento", today)]);
  const safeCount = (res) => {
    if (res.error) {
      console.error("KPI query error:", res.error);
      return 0;
    }
    return res.count ?? 0;
  };
  const parcelasAtrasadas = safeCount(atrasadasStatusRes) + safeCount(atrasadasVencidasRes);
  return {
    totalClientes: safeCount(clientesRes),
    contratosAtivos: safeCount(contratosRes),
    parcelasAtrasadas,
    vencimentosHoje: safeCount(hojeRes)
  };
});
const MONTH_LABELS_PT = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
function buildLast12Months() {
  const now = /* @__PURE__ */ new Date();
  const buckets = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const year = d.getFullYear();
    const month = d.getMonth();
    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    const yy = String(year).slice(-2);
    buckets.push({
      key,
      label: `${MONTH_LABELS_PT[month]}/${yy}`
    });
  }
  return buckets;
}
function normalizeMonthKey(raw) {
  if (raw == null) return null;
  const str = String(raw);
  if (/^\d{4}-\d{2}$/.test(str)) return str;
  const d = new Date(str);
  if (Number.isNaN(d.getTime())) return null;
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}
function mapToBuckets(rows) {
  const buckets = buildLast12Months();
  const map = /* @__PURE__ */ new Map();
  if (Array.isArray(rows)) {
    for (const row of rows) {
      const monthRaw = row.mes ?? row.month ?? row.mes_ref;
      const valueRaw = row.total ?? row.count ?? row.value ?? row.valor ?? row.soma;
      const key = normalizeMonthKey(monthRaw);
      if (!key) continue;
      const num = Number(valueRaw);
      if (Number.isFinite(num)) map.set(key, num);
    }
  }
  return buckets.map((b) => ({
    month: b.label,
    value: map.get(b.key) ?? 0
  }));
}
const getDashboardCharts_createServerFn_handler = createServerRpc({
  id: "d3492b7465088ca6a45b2f95c00a6742dde1a18f6a2791958784453de1d4d82f",
  name: "getDashboardCharts",
  filename: "src/integrations/external-supabase/dashboard.functions.ts"
}, (opts) => getDashboardCharts.__executeServer(opts));
const getDashboardCharts = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(getDashboardCharts_createServerFn_handler, async ({
  context
}) => {
  const supabase = getServerClient();
  const userId = context.userId;
  const params = {
    p_user_id: userId
  };
  const [clientesRes, contratosRes, volumeRes, recebimentosRes] = await Promise.all([supabase.rpc("get_clientes_por_mes", params), supabase.rpc("get_contratos_por_mes", params), supabase.rpc("get_volume_por_mes", params), supabase.rpc("get_recebimentos_por_mes", params)]);
  if (clientesRes.error) console.error("RPC get_clientes_por_mes:", clientesRes.error);
  if (contratosRes.error) console.error("RPC get_contratos_por_mes:", contratosRes.error);
  if (volumeRes.error) console.error("RPC get_volume_por_mes:", volumeRes.error);
  if (recebimentosRes.error) console.error("RPC get_recebimentos_por_mes:", recebimentosRes.error);
  return {
    novosClientes: mapToBuckets(clientesRes.data ?? null),
    contratos: mapToBuckets(contratosRes.data ?? null),
    volume: mapToBuckets(volumeRes.data ?? null),
    recebimentos: mapToBuckets(recebimentosRes.data ?? null)
  };
});
export {
  getDashboardCharts_createServerFn_handler,
  getDashboardKpis_createServerFn_handler
};
