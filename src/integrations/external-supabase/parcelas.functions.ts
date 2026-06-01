import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireAuthForExternal } from "./auth-guard";

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

export type ParcelaListItem = {
  id: string | number;
  emprestimo_id: string | number;
  numero_parcela: number;
  parcelas_total: number;
  data_vencimento: string | null;
  valor_parcela: number;
  valor_principal: number;
  valor_minimo: number;
  status: string | null;
  data_pagamento: string | null;
  valor_pago: number | null;
  cliente_id: string | number | null;
  cliente_nome: string | null;
  cliente_telefone: string | null;
  contrato_codigo: string;
  emprestimo_seq: number;
  taxa_juros: number;
  tipo_juros: string | null;
};

export const listParcelas = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(async ({ context }): Promise<{ data: ParcelaListItem[]; error: string | null }> => {
    const supabase = getServerClient();

    const { data: parcelas, error: parErr } = await supabase
      .from("parcelas")
      .select(
        "id, emprestimo_id, numero_parcela, data_vencimento, valor_parcela, status, data_pagamento, valor_pago",
      )
      .eq("user_id", context.userId)
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
          .select(
            "id, cliente_id, numero_parcelas, taxa_juros, tipo_juros, valor_principal, created_at",
          )
          .eq("user_id", context.userId)
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
        tipo_juros: string | null;
        valor_principal: number;
        created_at: string | null;
      }
    >();
    (emps ?? []).forEach((e) =>
      empMap.set(String(e.id), {
        cliente_id: e.cliente_id ?? null,
        numero_parcelas: Number(e.numero_parcelas ?? 0),
        taxa_juros: Number(e.taxa_juros ?? 0),
        tipo_juros: e.tipo_juros ?? null,
        valor_principal: Number(e.valor_principal ?? 0),
        created_at: e.created_at ?? null,
      }),
    );

    // Calcula seqId global de TODOS os empréstimos DO USUÁRIO (mais antigo = #001)
    const { data: allEmps } = await supabase
      .from("emprestimos")
      .select("id, created_at")
      .eq("user_id", context.userId)
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
          .eq("user_id", context.userId)
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
      let valorCapital = Number(p.valor_parcela ?? 0);
      let minimo = 0;
      if (emp) {
        if (emp.tipo_juros === "so_juros") {
          const valorParcela = Number(p.valor_parcela ?? 0);
          const jurosOriginal = (emp.valor_principal * emp.taxa_juros) / 100;
          const totalOriginal = emp.valor_principal + jurosOriginal;

          if (approxMoney(valorParcela, jurosOriginal)) {
            valorCapital = emp.valor_principal;
            minimo = valorParcela;
          } else if (approxMoney(valorParcela, totalOriginal)) {
            valorCapital = emp.valor_principal;
            minimo = valorParcela - emp.valor_principal;
          } else {
            valorCapital = valorParcela;
            minimo = (valorCapital * emp.taxa_juros) / 100;
          }
        } else {
          minimo = (emp.valor_principal * emp.taxa_juros) / 100;
        }
      }
      const seq = seqMap.get(String(p.emprestimo_id)) ?? 0;
      const codigo = `#${String(seq).padStart(3, "0")}`;
      return {
        id: p.id,
        emprestimo_id: p.emprestimo_id,
        numero_parcela: Number(p.numero_parcela ?? 0),
        parcelas_total: emp?.numero_parcelas ?? 0,
        data_vencimento: p.data_vencimento ?? null,
        valor_parcela: valorCapital,
        valor_principal: emp?.valor_principal ?? 0,
        valor_minimo: minimo,
        status: p.status ?? null,
        data_pagamento: p.data_pagamento ?? null,
        valor_pago: p.valor_pago != null ? Number(p.valor_pago) : null,
        cliente_id: emp?.cliente_id ?? null,
        cliente_nome: cli?.nome ?? null,
        cliente_telefone: cli?.telefone ?? null,
        contrato_codigo: codigo,
        emprestimo_seq: seq,
        taxa_juros: emp?.taxa_juros ?? 0,
        tipo_juros: emp?.tipo_juros ?? null,
      };
    });

    return { data: out, error: null };
  });

function addDaysIso(iso: string, days: number) {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function approxMoney(a: number, b: number) {
  return Math.abs(a - b) <= 0.05;
}

const baixaSchema = z.object({
  id: z.union([z.string().min(1), z.number()]),
  data_pagamento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_pago: z.number().min(0),
  gerar_nova_cobranca: z.boolean().optional(),
  nova_cobranca_base: z.number().min(0).optional(),
  nova_cobranca_valor: z.number().min(0).optional(),
  nova_cobranca_vencimento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  nova_cobranca_periodicidade: z.enum(["mensal", "quinzenal", "semanal", "diario"]).optional(),
});

export type BaixaParcelaInput = z.infer<typeof baixaSchema>;

export const baixaParcela = createServerFn({ method: "POST" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: BaixaParcelaInput) => baixaSchema.parse(input))
  .handler(async ({ data, context }): Promise<{ ok: boolean; error: string | null }> => {
    const supabase = getServerClient({ admin: true });

    const { data: parcelaAtual, error: parcelaErr } = await supabase
      .from("parcelas")
      .select("id, emprestimo_id, numero_parcela, data_vencimento, valor_parcela")
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .single();

    if (parcelaErr || !parcelaAtual) {
      console.error("baixaParcela select error:", parcelaErr);
      return { ok: false, error: parcelaErr?.message ?? "Parcela não encontrada." };
    }

    const { data: updated, error } = await supabase
      .from("parcelas")
      .update({
        status: "pago",
        data_pagamento: data.data_pagamento,
        valor_pago: data.valor_pago,
      })
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .select("id");

    if (error) {
      console.error("baixaParcela error:", error);
      return { ok: false, error: error.message };
    }
    if (!updated || updated.length === 0) {
      return {
        ok: false,
        error: "Nenhuma parcela foi atualizada. Verifique as permissões (RLS) da tabela parcelas.",
      };
    }

    if (data.gerar_nova_cobranca && Number(data.nova_cobranca_valor ?? 0) > 0) {
      const { data: ultimas, error: ultErr } = await supabase
        .from("parcelas")
        .select("numero_parcela")
        .eq("user_id", context.userId)
        .eq("emprestimo_id", parcelaAtual.emprestimo_id)
        .order("numero_parcela", { ascending: false })
        .limit(1);

      if (ultErr) {
        console.error("baixaParcela next select error:", ultErr);
        return { ok: false, error: `Baixa registrada, mas falhou ao calcular nova cobrança: ${ultErr.message}` };
      }

      const { data: emprestimoAtual, error: empSelectErr } = await supabase
        .from("emprestimos")
        .select("taxa_juros, tipo_juros")
        .eq("id", parcelaAtual.emprestimo_id)
        .eq("user_id", context.userId)
        .single();

      if (empSelectErr) {
        console.error("baixaParcela emprestimo select error:", empSelectErr);
        return { ok: false, error: `Baixa registrada, mas falhou ao buscar juros do contrato: ${empSelectErr.message}` };
      }

      const nextNumero = Number(ultimas?.[0]?.numero_parcela ?? parcelaAtual.numero_parcela ?? 0) + 1;
      const novoVencimento = data.nova_cobranca_vencimento ?? addDaysIso(data.data_pagamento, 30);
      const taxa = Number(emprestimoAtual?.taxa_juros ?? 0) / 100;
      const base = Number(data.nova_cobranca_base ?? 0);
      const novoJuros =
        base > 0 ? Number((base * taxa).toFixed(2)) : Number(data.nova_cobranca_valor ?? 0);

      const { error: insErr } = await supabase.from("parcelas").insert({
        user_id: context.userId,
        emprestimo_id: parcelaAtual.emprestimo_id,
        numero_parcela: nextNumero,
        data_vencimento: novoVencimento,
        valor_parcela: base > 0 ? Number(base.toFixed(2)) : novoJuros,
        status: "pendente",
      });

      if (insErr) {
        console.error("baixaParcela insert nova cobrança error:", insErr);
        return { ok: false, error: `Baixa registrada, mas falhou ao gerar nova cobrança: ${insErr.message}` };
      }

      const { error: empErr } = await supabase
        .from("emprestimos")
        .update({ numero_parcelas: nextNumero })
        .eq("id", parcelaAtual.emprestimo_id)
        .eq("user_id", context.userId);

      if (empErr) {
        console.error("baixaParcela update emprestimo parcelas error:", empErr);
        return { ok: false, error: `Nova cobrança criada, mas falhou ao atualizar o total do contrato: ${empErr.message}` };
      }
    }

    return { ok: true, error: null };
  });

const estornoSchema = z.object({
  id: z.union([z.string().min(1), z.number()]),
});

export type EstornoParcelaInput = z.infer<typeof estornoSchema>;

export const estornoParcela = createServerFn({ method: "POST" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: EstornoParcelaInput) => estornoSchema.parse(input))
  .handler(async ({ data, context }): Promise<{ ok: boolean; error: string | null }> => {
    const supabase = getServerClient({ admin: true });

    const { data: parcelaAtual, error: parcelaErr } = await supabase
      .from("parcelas")
      .select("id, emprestimo_id, numero_parcela, data_pagamento, valor_parcela, valor_pago, status")
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .single();

    if (parcelaErr || !parcelaAtual) {
      console.error("estornoParcela select error:", parcelaErr);
      return { ok: false, error: parcelaErr?.message ?? "Parcela não encontrada." };
    }

    const { data: emprestimoAtual } = await supabase
      .from("emprestimos")
      .select("numero_parcelas")
      .eq("id", parcelaAtual.emprestimo_id)
      .eq("user_id", context.userId)
      .single();

    let cobrancaGeradaId: string | number | null = null;
    let cobrancaGeradaNumero = 0;

    if (parcelaAtual.data_pagamento) {
      const { data: geradas, error: geradasErr } = await supabase
        .from("parcelas")
        .select("id, numero_parcela, created_at")
        .eq("user_id", context.userId)
        .eq("emprestimo_id", parcelaAtual.emprestimo_id)
        .eq("status", "pendente")
        .gt("numero_parcela", Number(parcelaAtual.numero_parcela ?? 0))
        .gte("created_at", `${parcelaAtual.data_pagamento}T00:00:00`)
        .order("created_at", { ascending: false })
        .limit(1);

      if (geradasErr) {
        console.error("estornoParcela generated select error:", geradasErr);
        return { ok: false, error: geradasErr.message };
      }

      if (geradas?.[0]) {
        cobrancaGeradaId = geradas[0].id;
        cobrancaGeradaNumero = Number(geradas[0].numero_parcela ?? 0);
      }
    }

    const { data: updated, error } = await supabase
      .from("parcelas")
      .update({
        status: "pendente",
        data_pagamento: null,
        valor_pago: null,
      })
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .select("id");

    if (error) {
      console.error("estornoParcela error:", error);
      return { ok: false, error: error.message };
    }
    if (!updated || updated.length === 0) {
      return {
        ok: false,
        error: "Nenhuma parcela foi estornada. Verifique as permissões (RLS) da tabela parcelas.",
      };
    }

    if (cobrancaGeradaId) {
      const { error: deleteErr } = await supabase
        .from("parcelas")
        .delete()
        .eq("id", cobrancaGeradaId)
        .eq("user_id", context.userId);

      if (deleteErr) {
        console.error("estornoParcela delete generated error:", deleteErr);
        return {
          ok: false,
          error: `Pagamento estornado, mas falhou ao remover a cobrança gerada: ${deleteErr.message}`,
        };
      }

      const totalAtual = Number(emprestimoAtual?.numero_parcelas ?? 0);
      const novoTotal = Math.max(Number(parcelaAtual.numero_parcela ?? 1), totalAtual - 1, cobrancaGeradaNumero - 1);
      const { error: empErr } = await supabase
        .from("emprestimos")
        .update({ numero_parcelas: novoTotal })
        .eq("id", parcelaAtual.emprestimo_id)
        .eq("user_id", context.userId);

      if (empErr) {
        console.error("estornoParcela update emprestimo error:", empErr);
        return {
          ok: false,
          error: `Cobrança gerada removida, mas falhou ao atualizar o total do contrato: ${empErr.message}`,
        };
      }
    }

    return { ok: true, error: null };
  });

const excluirParcelaSchema = z.object({
  id: z.union([z.string().min(1), z.number()]),
});

export type ExcluirParcelaInput = z.infer<typeof excluirParcelaSchema>;

export const excluirParcela = createServerFn({ method: "POST" })
  .middleware([requireAuthForExternal])
  .inputValidator((input: ExcluirParcelaInput) => excluirParcelaSchema.parse(input))
  .handler(async ({ data, context }): Promise<{ ok: boolean; error: string | null }> => {
    const supabase = getServerClient({ admin: true });

    const { data: parcelaAtual, error: parcelaErr } = await supabase
      .from("parcelas")
      .select("id, emprestimo_id")
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .single();

    if (parcelaErr || !parcelaAtual) {
      console.error("excluirParcela select error:", parcelaErr);
      return { ok: false, error: parcelaErr?.message ?? "Parcela não encontrada." };
    }

    const { error: deleteErr } = await supabase
      .from("parcelas")
      .delete()
      .eq("id", data.id)
      .eq("user_id", context.userId);

    if (deleteErr) {
      console.error("excluirParcela delete error:", deleteErr);
      return { ok: false, error: deleteErr.message };
    }

    const { data: restantes, error: restantesErr } = await supabase
      .from("parcelas")
      .select("numero_parcela")
      .eq("user_id", context.userId)
      .eq("emprestimo_id", parcelaAtual.emprestimo_id)
      .order("numero_parcela", { ascending: false })
      .limit(1);

    if (restantesErr) {
      console.error("excluirParcela restantes error:", restantesErr);
      return { ok: false, error: `Parcela excluída, mas falhou ao recalcular o contrato: ${restantesErr.message}` };
    }

    const novoTotal = Number(restantes?.[0]?.numero_parcela ?? 0);
    const { error: empErr } = await supabase
      .from("emprestimos")
      .update({ numero_parcelas: novoTotal })
      .eq("id", parcelaAtual.emprestimo_id)
      .eq("user_id", context.userId);

    if (empErr) {
      console.error("excluirParcela emprestimo error:", empErr);
      return { ok: false, error: `Parcela excluída, mas falhou ao atualizar o contrato: ${empErr.message}` };
    }

    return { ok: true, error: null };
  });
