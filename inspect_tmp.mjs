import { createClient } from "@supabase/supabase-js";

const url = process.env.EXTERNAL_SUPABASE_URL;
const key = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY || process.env.EXTERNAL_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("missing env");
  process.exit(1);
}

const sb = createClient(url, key);

for (const t of ["emprestimos", "parcelas"]) {
  const { data, error } = await sb.from(t).select("*").limit(1);
  console.log("===", t);
  if (error) { console.log("error:", error.message); continue; }
  if (!data || data.length === 0) {
    console.log("empty - trying insert sniff");
    const { error: e2 } = await sb.from(t).insert({}).select();
    console.log("insert error:", e2?.message);
  } else {
    console.log("columns:", Object.keys(data[0]));
    console.log("sample:", data[0]);
  }
}
