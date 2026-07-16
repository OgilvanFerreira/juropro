import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireAuthForExternal } from "./auth-guard";
import { chunkValues, fetchAllPages } from "./query-pagination.server";

function getServerClient(opts?: { admin?: boolean }) {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const anonKey = process.env.EXTERNAL_SUPABASE_ANON_KEY;
  const serviceKey = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !anonKey) {
    throw new Error("EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_ANON_KEY não configurados.");
  }
  const key = opts?.admin && serviceKey ? serviceKey : anonKey;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

const PERIODICIDADE_DIAS: Record<string, number> = {
  mensal: 30,
  quinzenal: 15,
  semanal: 7,
  diario: 1,
};

const parcelaSchema = z.object({
  numero: z.number().int().min(1),
  data_vencimento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor: z.number().positive(),
});

const createEmprestimoSchema = z.object({
  cliente_id: z.union([z.string().min(1), z.number()]),
  valor_principal: z.number().positive(),
  taxa_juros: z.number().min(0),
  numero_parcelas: z.number().int().min(1).max(360),
  tipo_juros: z.enum(["simples", "composto", "so_juros"]),
  periodicidade: z.enum(["mensal", "quinzenal", "semanal", "diario"]),
  data_inicio: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  observacoes: z.string().max(2000).optional().default(""),
  parcelas: z.array(parcelaSchema).min(1).max(360),
});

export type CreateEmprestimoInput = z.infer<typeof createEmprestimoSchema>;

export type EmprestimoListItem = {
  id: string | number;
  cliente_id: string | number | null;
  cliente_nome: string | null;
  valor_principal: number;
  taxa_juros: number;
  numero_parcelas: number;
  tipo_juros: string | null;
  data_inicio: string | null;
  status: string | null;
  observacoes: string | null;
  created_at: string | null;
  parcelas_pagas: number;
  parcelas_total: number;
  total_pago: number;
  total_a_receber: number;
};

export const listEmprestimos = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(async ({ context }): Promise<{ data: EmprestimoListItem[]; error: string | null }> => {
    const supabase = getServerClient();

    const { data: emps, error: empErr } = await fetchAllPages<
      Omit<
        EmprestimoListItem,
        "cliente_nome" | "parcelas_pagas" | "parcelas_total" | "total_pago" | "total_a_receber"
      >
    >((from, to) =>
      supabase
        .from("emprestimos")
        .select(
          "id, cliente_id, valor_principal, taxa_juros, numero_parcelas, tipo_juros, data_inicio, status, observacoes, created_at",
        )
        .eq("user_id", context.userId)
        .order("created_at", { ascending: false })
        .order("id", { ascending: false })
        .range(from, to),
    );

    if (empErr) {
      console.error("listEmprestimos error:", empErr);
      return { data: [], error: empErr.message };
    }

    const list = emps ?? [];
    if (list.length === 0) return { data: [], error: null };

    const clienteIds = Array.from(
      new Set(list.map((e) => e.cliente_id).filter((v) => v !== null && v !== undefined)),
    );
    const empIds = list.map((e) => e.id);

    const [clientesResult, parcelasResult] = await Promise.all([
      Promise.all(
        chunkValues(clienteIds).map((ids) =>
          supabase
            .from("clientes")
            .select("id, nome")
            .eq("user_id", context.userId)
            .in("id", ids as (string | number)[]),
        ),
      ),
      Promise.all(
        chunkValues(empIds).map((ids) =>
          fetchAllPages<{
            emprestimo_id: string | number;
            valor_parcela: number | null;
            status: string | null;
          }>((from, to) =>
            supabase
              .from("parcelas")
              .select("emprestimo_id, valor_parcela, status")
              .eq("user_id", context.userId)
              .in("emprestimo_id", ids as (string | number)[])
              .order("id", { ascending: true })
              .range(from, to),
          ),
        ),
      ),
    ]);

    const relatedError = [...clientesResult, ...parcelasResult].find(
      (result) => result.error,
    )?.error;
    if (relatedError) {
      console.error("listEmprestimos related data error:", relatedError);
      return { data: [], error: relatedError.message };
    }

    const clientesRows = clientesResult.flatMap((result) => result.data ?? []);
    const parcRows = parcelasResult.flatMap((result) => result.data ?? []);

    const nomeMap = new Map<string, string | null>();
    (clientesRows ?? []).forEach((c) => nomeMap.set(String(c.id), c.nome));

    const parcMap = new Map<
      string,
      { pagas: number; total: number; pago: number; receber: number }
    >();
    (parcRows ?? []).forEach((p) => {
      const key = String(p.emprestimo_id);
      const cur = parcMap.get(key) ?? { pagas: 0, total: 0, pago: 0, receber: 0 };
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

    const out: EmprestimoListItem[] = list.map((e) => {
      const stats = parcMap.get(String(e.id)) ?? {
        pagas: 0,
        total: e.numero_parcelas ?? 0,
        pago: 0,
        receber: 0,
      };
      return {
        id: e.id,
        cliente_id: e.cliente_id,
        cliente_nome: e.cliente_id ? (nomeMap.get(String(e.cliente_id)) ?? null) : null,
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
        total_a_receber: stats.receber,
      };
    });

    return { data: out, error: null };
  });

export const createEmprestimo = createServerFn({ method: "POST" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: CreateEmprestimoInput) => createEmprestimoSchema.parse(input))
  .handler(
    async ({
      data,
      context,
    }): Promise<{ ok: boolean; error: string | null; id?: string | number }> => {
      const supabase = getServerClient({ admin: true });

      // Garante que o cliente referenciado pertence ao usuário (defesa contra IDOR)
      const { data: cliOwner, error: cliOwnerErr } = await supabase
        .from("clientes")
        .select("id")
        .eq("id", data.cliente_id)
        .eq("user_id", context.userId)
        .maybeSingle();
      if (cliOwnerErr || !cliOwner) {
        return { ok: false, error: "Cliente inválido ou não pertence ao usuário." };
      }

      // Prefixa periodicidade nas observações já que a coluna não existe
      const periodicidadeLabel =
        data.periodicidade.charAt(0).toUpperCase() + data.periodicidade.slice(1);
      const observacoesFinal = `[Periodicidade: ${periodicidadeLabel} • ${PERIODICIDADE_DIAS[data.periodicidade]} dias]${
        data.observacoes ? `\n\n${data.observacoes}` : ""
      }`;

      const empPayload = {
        user_id: context.userId,
        cliente_id: data.cliente_id,
        valor_principal: data.valor_principal,
        taxa_juros: data.taxa_juros,
        numero_parcelas: data.numero_parcelas,
        tipo_juros: data.tipo_juros,
        data_inicio: data.data_inicio,
        observacoes: observacoesFinal,
        status: "ativo",
      };

      const { data: created, error } = await supabase
        .from("emprestimos")
        .insert(empPayload)
        .select("id")
        .single();

      if (error || !created) {
        console.error("createEmprestimo error:", error);
        return {
          ok: false,
          error:
            error?.message ??
            "Falha ao criar empréstimo. Verifique as permissões (RLS) da tabela emprestimos.",
        };
      }

      const parcelasPayload = data.parcelas.map((p) => ({
        user_id: context.userId,
        emprestimo_id: created.id,
        numero_parcela: p.numero,
        data_vencimento: p.data_vencimento,
        valor_parcela: p.valor,
        status: "pendente",
      }));

      const { error: parErr } = await supabase.from("parcelas").insert(parcelasPayload);

      if (parErr) {
        console.error("createEmprestimo parcelas error:", parErr);
        // tenta reverter o empréstimo para não deixar órfão
        await supabase.from("emprestimos").delete().eq("id", created.id);
        return {
          ok: false,
          error: `Empréstimo criado, mas falhou ao gerar parcelas: ${parErr.message}`,
        };
      }

      return { ok: true, error: null, id: created.id };
    },
  );

// =====================================================
// GET / UPDATE / DELETE
// =====================================================

const idSchema = z.object({
  id: z.union([z.string().min(1), z.number()]),
});

export type EmprestimoFull = {
  id: string | number;
  cliente_id: string | number | null;
  valor_principal: number;
  taxa_juros: number;
  numero_parcelas: number;
  tipo_juros: string | null;
  data_inicio: string | null;
  status: string | null;
  observacoes: string | null;
  valor_parcela?: number | null;
};

export const getEmprestimo = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: { id: string | number }) => idSchema.parse(input))
  .handler(
    async ({ data, context }): Promise<{ data: EmprestimoFull | null; error: string | null }> => {
      const supabase = getServerClient();
      const { data: row, error } = await supabase
        .from("emprestimos")
        .select(
          "id, cliente_id, valor_principal, taxa_juros, numero_parcelas, tipo_juros, data_inicio, status, observacoes",
        )
        .eq("id", data.id)
        .eq("user_id", context.userId)
        .maybeSingle();
      if (error) {
        console.error("getEmprestimo error:", error);
        return { data: null, error: error.message };
      }
      if (!row) return { data: null, error: "Empréstimo não encontrado." };
      const { data: primeiraParcela } = await supabase
        .from("parcelas")
        .select("valor_parcela")
        .eq("emprestimo_id", data.id)
        .eq("user_id", context.userId)
        .order("numero_parcela", { ascending: true })
        .limit(1)
        .maybeSingle();

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
          observacoes: row.observacoes ?? null,
          valor_parcela:
            primeiraParcela?.valor_parcela != null ? Number(primeiraParcela.valor_parcela) : null,
        },
        error: null,
      };
    },
  );

const updateEmprestimoSchema = z.object({
  id: z.union([z.string().min(1), z.number()]),
  cliente_id: z.union([z.string().min(1), z.number()]),
  valor_principal: z.number().positive(),
  taxa_juros: z.number().min(0),
  numero_parcelas: z.number().int().min(1).max(360),
  tipo_juros: z.enum(["simples", "composto", "so_juros"]),
  periodicidade: z.enum(["mensal", "quinzenal", "semanal", "diario"]),
  data_inicio: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  observacoes: z.string().max(2000).optional().default(""),
  status: z.string().optional(),
  parcelas: z.array(parcelaSchema).min(1).max(360),
});

export type UpdateEmprestimoInput = z.infer<typeof updateEmprestimoSchema>;

export const updateEmprestimo = createServerFn({ method: "POST" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: UpdateEmprestimoInput) => updateEmprestimoSchema.parse(input))
  .handler(async ({ data, context }): Promise<{ ok: boolean; error: string | null }> => {
    const supabase = getServerClient({ admin: true });

    // Garante que o cliente referenciado pertence ao usuário
    const { data: cliOwner, error: cliOwnerErr } = await supabase
      .from("clientes")
      .select("id")
      .eq("id", data.cliente_id)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (cliOwnerErr || !cliOwner) {
      return { ok: false, error: "Cliente inválido ou não pertence ao usuário." };
    }

    const periodicidadeLabel =
      data.periodicidade.charAt(0).toUpperCase() + data.periodicidade.slice(1);
    const observacoesFinal = `[Periodicidade: ${periodicidadeLabel} • ${PERIODICIDADE_DIAS[data.periodicidade]} dias]${
      data.observacoes ? `\n\n${data.observacoes}` : ""
    }`;

    const { error: updErr } = await supabase
      .from("emprestimos")
      .update({
        cliente_id: data.cliente_id,
        valor_principal: data.valor_principal,
        taxa_juros: data.taxa_juros,
        numero_parcelas: data.numero_parcelas,
        tipo_juros: data.tipo_juros,
        data_inicio: data.data_inicio,
        observacoes: observacoesFinal,
        ...(data.status ? { status: data.status } : {}),
      })
      .eq("id", data.id)
      .eq("user_id", context.userId);

    if (updErr) {
      console.error("updateEmprestimo error:", updErr);
      return { ok: false, error: updErr.message };
    }

    // Apaga parcelas antigas pendentes e regenera todas as parcelas (do mesmo usuário)
    const { error: delErr } = await supabase
      .from("parcelas")
      .delete()
      .eq("emprestimo_id", data.id)
      .eq("user_id", context.userId);
    if (delErr) {
      console.error("updateEmprestimo delete parcelas error:", delErr);
      return {
        ok: false,
        error: `Empréstimo atualizado, mas falhou ao limpar parcelas antigas: ${delErr.message}`,
      };
    }

    const parcelasPayload = data.parcelas.map((p) => ({
      user_id: context.userId,
      emprestimo_id: data.id,
      numero_parcela: p.numero,
      data_vencimento: p.data_vencimento,
      valor_parcela: p.valor,
      status: "pendente",
    }));

    const { error: insErr } = await supabase.from("parcelas").insert(parcelasPayload);

    if (insErr) {
      console.error("updateEmprestimo insert parcelas error:", insErr);
      return {
        ok: false,
        error: `Empréstimo atualizado, mas falhou ao gerar novas parcelas: ${insErr.message}`,
      };
    }

    return { ok: true, error: null };
  });

export const deleteEmprestimo = createServerFn({ method: "POST" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: { id: string | number }) => idSchema.parse(input))
  .handler(async ({ data, context }): Promise<{ ok: boolean; error: string | null }> => {
    const supabase = getServerClient({ admin: true });

    // Apaga as parcelas primeiro (FK), restritas ao usuário
    const { error: parErr } = await supabase
      .from("parcelas")
      .delete()
      .eq("emprestimo_id", data.id)
      .eq("user_id", context.userId);
    if (parErr) {
      console.error("deleteEmprestimo parcelas error:", parErr);
      return { ok: false, error: parErr.message };
    }

    const { error: empErr } = await supabase
      .from("emprestimos")
      .delete()
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (empErr) {
      console.error("deleteEmprestimo error:", empErr);
      return { ok: false, error: empErr.message };
    }

    return { ok: true, error: null };
  });
