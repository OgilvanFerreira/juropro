const url = process.env.EXTERNAL_SUPABASE_URL;
const key = process.env.EXTERNAL_SUPABASE_ANON_KEY;
const r = await fetch(`${url}/rest/v1/`, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
const j = await r.json();
for (const t of ["emprestimos", "parcelas"]) {
  console.log("===", t);
  const def = j.definitions?.[t];
  if (!def) { console.log("not found"); continue; }
  console.log(JSON.stringify(def.properties, null, 2));
  console.log("required:", def.required);
}
