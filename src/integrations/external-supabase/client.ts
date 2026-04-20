import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getExternalSupabaseConfig } from "./config.functions";

let clientPromise: Promise<SupabaseClient> | null = null;

/**
 * Cliente Supabase apontando para o projeto EXTERNO (configurado via secrets
 * EXTERNAL_SUPABASE_URL e EXTERNAL_SUPABASE_ANON_KEY).
 *
 * Uso:
 *   const supabase = await getExternalSupabase();
 *   const { data } = await supabase.from("clientes").select("*");
 */
export function getExternalSupabase(): Promise<SupabaseClient> {
  if (!clientPromise) {
    clientPromise = getExternalSupabaseConfig().then(({ url, anonKey }) =>
      createClient(url, anonKey, {
        auth: {
          storage: typeof window !== "undefined" ? localStorage : undefined,
          persistSession: true,
          autoRefreshToken: true,
        },
      }),
    );
  }
  return clientPromise;
}
