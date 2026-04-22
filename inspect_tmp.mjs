const url = process.env.EXTERNAL_SUPABASE_URL;
const key = process.env.EXTERNAL_SUPABASE_ANON_KEY;

async function probe(table, col) {
  const r = await fetch(`${url}/rest/v1/${table}?select=${col}&limit=1`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` }
  });
  const t = await r.text();
  return { ok: r.ok, status: r.status, body: t.slice(0, 200) };
}

const empCols = ["id","cliente_id","valor_principal","valor","taxa_juros","taxa","num_parcelas","numero_parcelas","quantidade_parcelas","tipo_juros","periodicidade","data_inicio","data_primeira_parcela","observacoes","status","total_pagar","total_juros","valor_parcela","created_at","updated_at"];
const parCols = ["id","emprestimo_id","numero","numero_parcela","data_vencimento","valor","valor_parcela","status","data_pagamento","created_at"];

console.log("=== emprestimos ===");
for (const c of empCols) {
  const r = await probe("emprestimos", c);
  console.log(c.padEnd(30), r.status, r.ok ? "OK" : r.body);
}
console.log("\n=== parcelas ===");
for (const c of parCols) {
  const r = await probe("parcelas", c);
  console.log(c.padEnd(30), r.status, r.ok ? "OK" : r.body);
}
