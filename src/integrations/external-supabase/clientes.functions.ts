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
  // Para operações de escrita/exclusão usamos service_role (se disponível)
  // para bypassar RLS do projeto externo. Cai pra anon se não houver.
  const key = opts?.admin && serviceKey ? serviceKey : anonKey;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export type Cliente = {
  id: string | number;
  nome: string | null;
  email: string | null;
  telefone: string | null;
  cpf_cnpj: string | null;
  cidade: string | null;
  uf: string | null;
  created_at: string | null;
};

export const listClientes = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ data: Cliente[]; error: string | null }> => {
    const supabase = getServerClient();
    const { data, error } = await supabase
      .from("clientes")
      .select(
        "id, nome, email, telefone, cpf_cnpj, cidade, uf, created_at",
      )
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("listClientes error:", error);
      return { data: [], error: error.message };
    }
    return { data: (data ?? []) as Cliente[], error: null };
  },
);

const clienteInsertSchema = z.object({
  nome: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255).or(z.literal("")).optional(),
  telefone: z.string().trim().max(30).optional(),
  data_nascimento: z.string().trim().max(20).optional(),
  cpf_cnpj: z.string().trim().max(20).optional(),
  rg: z.string().trim().max(30).optional(),
  cep: z.string().trim().max(15).optional(),
  endereco: z.string().trim().max(255).optional(),
  numero: z.string().trim().max(20).optional(),
  complemento: z.string().trim().max(100).optional(),
  bairro: z.string().trim().max(100).optional(),
  cidade: z.string().trim().max(100).optional(),
  uf: z.string().trim().max(2).optional(),
});

export type ClienteInsert = z.infer<typeof clienteInsertSchema>;

export const createCliente = createServerFn({ method: "POST" })
  .inputValidator((input: ClienteInsert) => clienteInsertSchema.parse(input))
  .handler(
    async ({
      data,
    }): Promise<{ ok: boolean; error: string | null; code?: string }> => {
      const supabase = getServerClient();

      // Limpa strings vazias para null para evitar problemas com colunas tipadas (date, etc.)
      const payload: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(data)) {
        if (v === undefined) continue;
        if (typeof v === "string" && v.trim() === "") continue;
        payload[k] = v;
      }

      // Verificação de duplicidade de CPF/CNPJ (apenas dígitos para evitar diferenças de máscara)
      const cpfCnpjRaw = typeof payload.cpf_cnpj === "string" ? payload.cpf_cnpj : "";
      const cpfCnpjDigits = cpfCnpjRaw.replace(/\D/g, "");
      if (cpfCnpjDigits.length > 0) {
        const { data: existing, error: checkError } = await supabase
          .from("clientes")
          .select("id, cpf_cnpj")
          .not("cpf_cnpj", "is", null)
          .limit(1000);

        if (checkError) {
          console.error("createCliente duplicate-check error:", checkError);
          return { ok: false, error: checkError.message };
        }

        const duplicate = (existing ?? []).some((row) => {
          const rowDigits = String(row.cpf_cnpj ?? "").replace(/\D/g, "");
          return rowDigits === cpfCnpjDigits;
        });

        if (duplicate) {
          return {
            ok: false,
            error: "CPF/CNPJ já cadastrado no sistema.",
            code: "DUPLICATE_CPF_CNPJ",
          };
        }
      }

      const { error } = await supabase.from("clientes").insert(payload);

      if (error) {
        console.error("createCliente error:", error);
        return { ok: false, error: error.message };
      }
      return { ok: true, error: null };
    },
  );

const deleteClienteSchema = z.object({
  id: z.union([z.string().min(1), z.number()]),
});

export type DeleteClienteInput = z.infer<typeof deleteClienteSchema>;

export const deleteCliente = createServerFn({ method: "POST" })
  .inputValidator((input: DeleteClienteInput) => deleteClienteSchema.parse(input))
  .handler(
    async ({ data }): Promise<{ ok: boolean; error: string | null }> => {
      const supabase = getServerClient({ admin: true });
      // .select() força o retorno das linhas afetadas para sabermos se
      // o DELETE realmente removeu algo (RLS pode silenciosamente bloquear).
      const { data: deleted, error } = await supabase
        .from("clientes")
        .delete()
        .eq("id", data.id)
        .select("id");

      if (error) {
        console.error("deleteCliente error:", error);
        return { ok: false, error: error.message };
      }
      if (!deleted || deleted.length === 0) {
        console.error("deleteCliente: nenhuma linha removida (RLS?) id=", data.id);
        return {
          ok: false,
          error:
            "Nenhum registro foi excluído. Verifique as permissões (RLS) da tabela clientes ou se o SERVICE_ROLE_KEY do Supabase externo está configurado.",
        };
      }
      return { ok: true, error: null };
    },
  );
