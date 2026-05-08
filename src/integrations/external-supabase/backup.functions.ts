import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { requireAuthForExternal } from "./auth-guard";

function getServerClient() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const anonKey = process.env.EXTERNAL_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error("EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_ANON_KEY não configurados.");
  }
  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

type BackupPayload = {
  generatedAt: string;
  clientes: Record<string, unknown>[];
  contratos: Record<string, unknown>[];
  parcelas: Record<string, unknown>[];
};

const CLIENTES_COLUMNS =
  "id, nome, email, telefone, data_nascimento, cpf_cnpj, rg, cep, endereco, numero, complemento, bairro, cidade, uf, created_at, updated_at";

const CONTRATOS_COLUMNS =
  "id, cliente_id, valor_principal, taxa_juros, numero_parcelas, tipo_juros, data_inicio, status, observacoes, created_at, updated_at";

const PARCELAS_COLUMNS =
  "id, emprestimo_id, numero_parcela, data_vencimento, data_pagamento, valor_parcela, valor_pago, status, created_at, updated_at";

export const gerarBackupCompleto = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(async ({ context }): Promise<{ data: BackupPayload | null; error: string | null }> => {
    const supabase = getServerClient();

    const [clientesRes, contratosRes, parcelasRes] = await Promise.all([
      supabase
        .from("clientes")
        .select(CLIENTES_COLUMNS)
        .eq("user_id", context.userId)
        .order("created_at", { ascending: true }),
      supabase
        .from("emprestimos")
        .select(CONTRATOS_COLUMNS)
        .eq("user_id", context.userId)
        .order("created_at", { ascending: true }),
      supabase
        .from("parcelas")
        .select(PARCELAS_COLUMNS)
        .eq("user_id", context.userId)
        .order("data_vencimento", { ascending: true }),
    ]);

    const firstError = clientesRes.error ?? contratosRes.error ?? parcelasRes.error;
    if (firstError) {
      console.error("gerarBackupCompleto error:", firstError);
      return { data: null, error: firstError.message };
    }

    return {
      data: {
        generatedAt: new Date().toISOString(),
        clientes: (clientesRes.data ?? []) as Record<string, unknown>[],
        contratos: (contratosRes.data ?? []) as Record<string, unknown>[],
        parcelas: (parcelasRes.data ?? []) as Record<string, unknown>[],
      },
      error: null,
    };
  });

export const gerarBackupContratos = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(
    async ({
      context,
    }): Promise<{
      data: { contratos: Record<string, unknown>[]; parcelas: Record<string, unknown>[] } | null;
      error: string | null;
    }> => {
      const supabase = getServerClient();

      const [contratosRes, parcelasRes] = await Promise.all([
        supabase
          .from("emprestimos")
          .select(CONTRATOS_COLUMNS)
          .eq("user_id", context.userId)
          .order("created_at", { ascending: true }),
        supabase
          .from("parcelas")
          .select(PARCELAS_COLUMNS)
          .eq("user_id", context.userId)
          .order("data_vencimento", { ascending: true }),
      ]);

      const firstError = contratosRes.error ?? parcelasRes.error;
      if (firstError) {
        console.error("gerarBackupContratos error:", firstError);
        return { data: null, error: firstError.message };
      }

      return {
        data: {
          contratos: (contratosRes.data ?? []) as Record<string, unknown>[],
          parcelas: (parcelasRes.data ?? []) as Record<string, unknown>[],
        },
        error: null,
      };
    },
  );
