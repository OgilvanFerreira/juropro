/**
 * Exporta um array de objetos para CSV (separador ;) compatível com Excel BR.
 * Faz download do arquivo automaticamente.
 */
export function exportToCsv<T extends Record<string, unknown>>(
  filename: string,
  rows: T[],
  headers?: { key: keyof T; label: string }[],
) {
  if (rows.length === 0) {
    const blob = new Blob(["\uFEFF"], { type: "text/csv;charset=utf-8;" });
    triggerDownload(blob, filename);
    return;
  }

  const cols =
    headers ??
    (Object.keys(rows[0]).map((k) => ({ key: k as keyof T, label: k })) as {
      key: keyof T;
      label: string;
    }[]);

  const escape = (val: unknown) => {
    if (val === null || val === undefined) return "";
    const s = String(val).replace(/"/g, '""');
    if (s.includes(";") || s.includes('"') || s.includes("\n")) {
      return `"${s}"`;
    }
    return s;
  };

  const headerLine = cols.map((c) => escape(c.label)).join(";");
  const lines = rows.map((row) =>
    cols.map((c) => escape(row[c.key])).join(";"),
  );

  const csv = "\uFEFF" + [headerLine, ...lines].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  triggerDownload(blob, filename);
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
