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

export type BackupValue = string | number | boolean | null;
export type BackupRow = Record<string, BackupValue>;

export type BackupPayload = {
  generatedAt: string;
  clientes: BackupRow[];
  contratos: BackupRow[];
  parcelas: BackupRow[];
};

export type BackupContratosPayload = {
  contratos: BackupRow[];
  parcelas: BackupRow[];
};

type BackupResult<T> = {
  data: T | null;
  error: string | null;
};

const CLIENTES_COLUMNS =
  "id, nome, email, telefone, data_nascimento, cpf_cnpj, rg, cep, endereco, numero, complemento, bairro, cidade, uf, created_at, updated_at";

const CONTRATOS_COLUMNS =
  "id, cliente_id, valor_principal, taxa_juros, numero_parcelas, tipo_juros, data_inicio, status, observacoes, created_at, updated_at";

const PARCELAS_COLUMNS =
  "id, emprestimo_id, numero_parcela, data_vencimento, data_pagamento, valor_parcela, valor_pago, status, created_at, updated_at";

export const gerarBackupCompleto = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(async ({ context }): Promise<BackupResult<BackupPayload>> => {
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
        clientes: (clientesRes.data ?? []) as BackupRow[],
        contratos: (contratosRes.data ?? []) as BackupRow[],
        parcelas: (parcelasRes.data ?? []) as BackupRow[],
      },
      error: null,
    };
  });

export const gerarBackupContratos = createServerFn({ method: "GET" })
  .middleware([requireAuthForExternal])
  .handler(async ({ context }): Promise<BackupResult<BackupContratosPayload>> => {
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
        contratos: (contratosRes.data ?? []) as BackupRow[],
        parcelas: (parcelasRes.data ?? []) as BackupRow[],
      },
      error: null,
    };
  });
