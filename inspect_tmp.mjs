const url = process.env.EXTERNAL_SUPABASE_URL;
const key = process.env.EXTERNAL_SUPABASE_ANON_KEY;

async function probe(table, col) {
  const r = await fetch(`${url}/rest/v1/${table}?select=${col}&limit=1`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` }
  });
  const t = await r.text();
  return { ok: r.ok, status: r.status, body: t.slice(0, 250) };
}
const empExtra = ["data_fim","frequencia","intervalo_dias","intervalo","periodo","valor_total","total","saldo_devedor","user_id"];
const parExtra = ["valor_pago","forma_pagamento","user_id","juros","multa"];

console.log("=== emprestimos extras ===");
for (const c of empExtra) console.log(c.padEnd(20), (await probe("emprestimos", c)).body.slice(0, 120));

console.log("\n=== parcelas extras ===");
for (const c of parExtra) console.log(c.padEnd(20), (await probe("parcelas", c)).body.slice(0, 120));

// Try insert minimal to find required fields
console.log("\n=== insert sniffs ===");
async function ins(table, body) {
  const r = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=representation" },
    body: JSON.stringify(body),
  });
  return { status: r.status, body: (await r.text()).slice(0, 400) };
}
console.log("emp empty:", JSON.stringify(await ins("emprestimos", {})));
console.log("par empty:", JSON.stringify(await ins("parcelas", {})));
