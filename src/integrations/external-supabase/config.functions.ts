import { createServerFn } from "@tanstack/react-start";

export const getExternalSupabaseConfig = createServerFn({ method: "GET" }).handler(
  async () => {
    const url = process.env.EXTERNAL_SUPABASE_URL;
    const anonKey = process.env.EXTERNAL_SUPABASE_ANON_KEY;

    if (!url || !anonKey) {
      throw new Error(
        "EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_ANON_KEY não configurados.",
      );
    }

    return { url, anonKey };
  },
);
