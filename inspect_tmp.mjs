const url = process.env.EXTERNAL_SUPABASE_URL;
const key = process.env.EXTERNAL_SUPABASE_ANON_KEY;
const r = await fetch(`${url}/rest/v1/`, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
const j = await r.json();
console.log("paths:", Object.keys(j.paths || {}).slice(0, 50));
console.log("defs:", Object.keys(j.definitions || {}));
