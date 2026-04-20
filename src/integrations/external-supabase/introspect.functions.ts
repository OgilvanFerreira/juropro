import { createServerFn } from "@tanstack/react-start";

export const introspectClientes = createServerFn({ method: "GET" }).handler(
  async () => {
    const url = process.env.EXTERNAL_SUPABASE_URL;
    const key = process.env.EXTERNAL_SUPABASE_ANON_KEY;
    if (!url || !key) throw new Error("missing env");
    const r = await fetch(`${url}/rest/v1/`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
    });
    const j = (await r.json()) as { definitions?: Record<string, unknown> };
    return {
      tables: Object.keys(j.definitions ?? {}),
      clientes: j.definitions?.clientes ?? null,
    };
  },
);
