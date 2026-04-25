import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { requireAuthForExternal } from "./auth-guard";

function getServerClient() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const anonKey = process.env.EXTERNAL_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_ANON_KEY não configurados.",
    );
  }
  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export type DashboardKpis = {
  totalClientes: number;
  contratosAtivos: number;
  parcelasAtrasadas: number;
  vencimentosHoje: number;
};

export const getDashboardKpis = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(
  async ({ context }): Promise<DashboardKpis> => {
    const supabase = getServerClient();
    const today = new Date().toISOString().slice(0, 10);
    const userId = context.userId;

    const [clientesRes, contratosRes, atrasadasStatusRes, atrasadasVencidasRes, hojeRes] =
      await Promise.all([
        supabase
          .from("clientes")
          .select("*", { count: "exact", head: true })
          .eq("user_id", userId),
        supabase
          .from("emprestimos")
          .select("*", { count: "exact", head: true })
          .eq("user_id", userId)
          .eq("status", "ativo"),
        supabase
          .from("parcelas")
          .select("*", { count: "exact", head: true })
          .eq("user_id", userId)
          .eq("status", "atrasado"),
        supabase
          .from("parcelas")
          .select("*", { count: "exact", head: true })
          .eq("user_id", userId)
          .eq("status", "pendente")
          .lt("data_vencimento", today),
        supabase
          .from("parcelas")
          .select("*", { count: "exact", head: true })
          .eq("user_id", userId)
          .eq("data_vencimento", today),
      ]);

    const safeCount = (res: { count: number | null; error: unknown }) => {
      if (res.error) {
        console.error("KPI query error:", res.error);
        return 0;
      }
      return res.count ?? 0;
    };

    const parcelasAtrasadas =
      safeCount(atrasadasStatusRes) + safeCount(atrasadasVencidasRes);

    return {
      totalClientes: safeCount(clientesRes),
      contratosAtivos: safeCount(contratosRes),
      parcelasAtrasadas,
      vencimentosHoje: safeCount(hojeRes),
    };
  },
);

export type ChartPoint = { month: string; value: number };

export type DashboardCharts = {
  novosClientes: ChartPoint[];
  contratos: ChartPoint[];
  volume: ChartPoint[];
  recebimentos: ChartPoint[];
};

const MONTH_LABELS_PT = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez",
];

/**
 * Gera os últimos 12 meses (incluindo o atual) como buckets vazios.
 * Chave no formato YYYY-MM para fazer match com DATE_TRUNC('month', ...).
 */
function buildLast12Months(): { key: string; label: string }[] {
  const now = new Date();
  const buckets: { key: string; label: string }[] = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const year = d.getFullYear();
    const month = d.getMonth(); // 0-11
    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    const yy = String(year).slice(-2);
    buckets.push({ key, label: `${MONTH_LABELS_PT[month]}/${yy}` });
  }
  return buckets;
}

/**
 * Normaliza um valor de mês vindo do RPC (pode ser ISO date, timestamp, ou já "YYYY-MM").
 */
function normalizeMonthKey(raw: unknown): string | null {
  if (raw == null) return null;
  const str = String(raw);
  // Já no formato YYYY-MM
  if (/^\d{4}-\d{2}$/.test(str)) return str;
  // Tenta parsear como data
  const d = new Date(str);
  if (Number.isNaN(d.getTime())) return null;
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

type RpcRow = Record<string, unknown>;

/**
 * Mapeia linhas do RPC para os 12 buckets, preenchendo zeros nos meses ausentes.
 * Aceita campos com nomes variados: mes/month + total/count/value/valor.
 */
function mapToBuckets(rows: RpcRow[] | null): ChartPoint[] {
  const buckets = buildLast12Months();
  const map = new Map<string, number>();

  if (Array.isArray(rows)) {
    for (const row of rows) {
      const monthRaw = row.mes ?? row.month ?? row.mes_ref;
      const valueRaw =
        row.total ?? row.count ?? row.value ?? row.valor ?? row.soma;
      const key = normalizeMonthKey(monthRaw);
      if (!key) continue;
      const num = Number(valueRaw);
      if (Number.isFinite(num)) map.set(key, num);
    }
  }

  return buckets.map((b) => ({
    month: b.label,
    value: map.get(b.key) ?? 0,
  }));
}

export const getDashboardCharts = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(
  async ({ context }): Promise<DashboardCharts> => {
    const supabase = getServerClient();
    const userId = context.userId;

    // IMPORTANTE: as RPCs do banco externo precisam aceitar `p_user_id` para
    // isolar dados por usuário. Enviamos esse parâmetro; se a RPC ainda não o
    // suportar, ela ignora e retornamos os dados globais (legado).
    // Veja SUPABASE_EXTERNO_MULTITENANCY.sql para o ALTER FUNCTION sugerido.
    const params = { p_user_id: userId };

    const [clientesRes, contratosRes, volumeRes, recebimentosRes] = await Promise.all([
      supabase.rpc("get_clientes_por_mes", params),
      supabase.rpc("get_contratos_por_mes", params),
      supabase.rpc("get_volume_por_mes", params),
      supabase.rpc("get_recebimentos_por_mes", params),
    ]);

    if (clientesRes.error) console.error("RPC get_clientes_por_mes:", clientesRes.error);
    if (contratosRes.error) console.error("RPC get_contratos_por_mes:", contratosRes.error);
    if (volumeRes.error) console.error("RPC get_volume_por_mes:", volumeRes.error);
    if (recebimentosRes.error) console.error("RPC get_recebimentos_por_mes:", recebimentosRes.error);

    return {
      novosClientes: mapToBuckets((clientesRes.data as RpcRow[]) ?? null),
      contratos: mapToBuckets((contratosRes.data as RpcRow[]) ?? null),
      volume: mapToBuckets((volumeRes.data as RpcRow[]) ?? null),
      recebimentos: mapToBuckets((recebimentosRes.data as RpcRow[]) ?? null),
    };
  },
);
