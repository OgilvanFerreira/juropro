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
  tipo_juros: z.enum(["simples", "composto"]),
  periodicidade: z.enum(["mensal", "quinzenal", "semanal", "diario"]),
  data_inicio: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  observacoes: z.string().max(2000).optional().default(""),
  parcelas: z.array(parcelaSchema).min(1).max(360),
});

export type CreateEmprestimoInput = z.infer<typeof createEmprestimoSchema>;

export const createEmprestimo = createServerFn({ method: "POST" })
  .inputValidator((input: CreateEmprestimoInput) =>
    createEmprestimoSchema.parse(input),
  )
  .handler(
    async ({
      data,
    }): Promise<{ ok: boolean; error: string | null; id?: string | number }> => {
      const supabase = getServerClient({ admin: true });

      // Prefixa periodicidade nas observações já que a coluna não existe
      const periodicidadeLabel =
        data.periodicidade.charAt(0).toUpperCase() + data.periodicidade.slice(1);
      const observacoesFinal = `[Periodicidade: ${periodicidadeLabel} • ${PERIODICIDADE_DIAS[data.periodicidade]} dias]${
        data.observacoes ? `\n\n${data.observacoes}` : ""
      }`;

      const empPayload = {
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
        emprestimo_id: created.id,
        numero_parcela: p.numero,
        data_vencimento: p.data_vencimento,
        valor_parcela: p.valor,
        status: "pendente",
      }));

      const { error: parErr } = await supabase
        .from("parcelas")
        .insert(parcelasPayload);

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
