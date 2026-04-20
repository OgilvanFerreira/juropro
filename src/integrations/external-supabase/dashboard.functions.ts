import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

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

export const getDashboardKpis = createServerFn({ method: "GET" }).handler(
  async (): Promise<DashboardKpis> => {
    const supabase = getServerClient();
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    const [clientesRes, contratosRes, atrasadasStatusRes, atrasadasVencidasRes, hojeRes] =
      await Promise.all([
        supabase.from("clientes").select("*", { count: "exact", head: true }),
        supabase
          .from("emprestimos")
          .select("*", { count: "exact", head: true })
          .eq("status", "ativo"),
        supabase
          .from("parcelas")
          .select("*", { count: "exact", head: true })
          .eq("status", "atrasado"),
        supabase
          .from("parcelas")
          .select("*", { count: "exact", head: true })
          .eq("status", "pendente")
          .lt("data_vencimento", today),
        supabase
          .from("parcelas")
          .select("*", { count: "exact", head: true })
          .eq("data_vencimento", today),
      ]);

    // Tolerante a tabelas vazias / colunas opcionais — apenas loga e segue com 0.
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
