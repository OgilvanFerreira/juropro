import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

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

export type ParcelaListItem = {
  id: string | number;
  emprestimo_id: string | number;
  numero_parcela: number;
  parcelas_total: number;
  data_vencimento: string | null;
  valor_parcela: number;
  valor_minimo: number;
  status: string | null;
  data_pagamento: string | null;
  valor_pago: number | null;
  cliente_id: string | number | null;
  cliente_nome: string | null;
  cliente_telefone: string | null;
  contrato_codigo: string;
  emprestimo_seq: number;
};

export const listParcelas = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ data: ParcelaListItem[]; error: string | null }> => {
    const supabase = getServerClient();

    const { data: parcelas, error: parErr } = await supabase
      .from("parcelas")
      .select(
        "id, emprestimo_id, numero_parcela, data_vencimento, valor_parcela, status, data_pagamento, valor_pago",
      )
      .order("data_vencimento", { ascending: true })
      .limit(2000);

    if (parErr) {
      console.error("listParcelas error:", parErr);
      return { data: [], error: parErr.message };
    }

    const list = parcelas ?? [];
    if (list.length === 0) return { data: [], error: null };

    const empIds = Array.from(new Set(list.map((p) => p.emprestimo_id).filter((v) => v != null)));

    const { data: emps, error: empErr } = empIds.length
      ? await supabase
          .from("emprestimos")
          .select("id, cliente_id, numero_parcelas, taxa_juros, valor_principal, created_at")
          .in("id", empIds as (string | number)[])
      : { data: [], error: null };

    if (empErr) {
      console.error("listParcelas emprestimos error:", empErr);
      return { data: [], error: empErr.message };
    }

    const empMap = new Map<
      string,
      {
        cliente_id: string | number | null;
        numero_parcelas: number;
        taxa_juros: number;
        valor_principal: number;
        created_at: string | null;
      }
    >();
    (emps ?? []).forEach((e) =>
      empMap.set(String(e.id), {
        cliente_id: e.cliente_id ?? null,
        numero_parcelas: Number(e.numero_parcelas ?? 0),
        taxa_juros: Number(e.taxa_juros ?? 0),
        valor_principal: Number(e.valor_principal ?? 0),
        created_at: e.created_at ?? null,
      }),
    );

    // Calcula seqId global de TODOS os empréstimos (mais antigo = #001)
    const { data: allEmps } = await supabase
      .from("emprestimos")
      .select("id, created_at")
      .order("created_at", { ascending: true })
      .limit(2000);
    const seqMap = new Map<string, number>();
    (allEmps ?? []).forEach((e, idx) => seqMap.set(String(e.id), idx + 1));

    const clienteIds = Array.from(
      new Set(
        Array.from(empMap.values())
          .map((e) => e.cliente_id)
          .filter((v) => v != null),
      ),
    );

    const { data: clientes, error: cliErr } = clienteIds.length
      ? await supabase
          .from("clientes")
          .select("id, nome, telefone")
          .in("id", clienteIds as (string | number)[])
      : { data: [], error: null };

    if (cliErr) {
      console.error("listParcelas clientes error:", cliErr);
    }

    const cliMap = new Map<string, { nome: string | null; telefone: string | null }>();
    (clientes ?? []).forEach((c) =>
      cliMap.set(String(c.id), { nome: c.nome ?? null, telefone: c.telefone ?? null }),
    );

    const out: ParcelaListItem[] = list.map((p) => {
      const emp = empMap.get(String(p.emprestimo_id));
      const cli = emp?.cliente_id ? cliMap.get(String(emp.cliente_id)) : null;
      const minimo = emp ? (emp.valor_principal * emp.taxa_juros) / 100 : 0;
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
        emprestimo_seq: seq,
      };
    });

    return { data: out, error: null };
  },
);

const baixaSchema = z.object({
  id: z.union([z.string().min(1), z.number()]),
  data_pagamento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_pago: z.number().min(0),
});

export type BaixaParcelaInput = z.infer<typeof baixaSchema>;

export const baixaParcela = createServerFn({ method: "POST" })
  .inputValidator((input: BaixaParcelaInput) => baixaSchema.parse(input))
  .handler(async ({ data }): Promise<{ ok: boolean; error: string | null }> => {
    const supabase = getServerClient({ admin: true });

    const { data: updated, error } = await supabase
      .from("parcelas")
      .update({
        status: "pago",
        data_pagamento: data.data_pagamento,
        valor_pago: data.valor_pago,
      })
      .eq("id", data.id)
      .select("id");

    if (error) {
      console.error("baixaParcela error:", error);
      return { ok: false, error: error.message };
    }
    if (!updated || updated.length === 0) {
      return {
        ok: false,
        error:
          "Nenhuma parcela foi atualizada. Verifique as permissões (RLS) da tabela parcelas.",
      };
    }
    return { ok: true, error: null };
  });
