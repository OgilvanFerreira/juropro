// Brazilian input masks and formatters

export function maskCpfCnpj(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  if (digits.length <= 11) {
    // CPF: 000.000.000-00
    return digits
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2");
  }
  // CNPJ: 00.000.000/0000-00
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

export function maskTelefone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    // (00) 0000-0000
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  // (00) 00000-0000
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

export function maskCep(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  return digits.replace(/^(\d{5})(\d)/, "$1-$2");
}

export function formatCpfCnpj(value: string | null | undefined): string {
  if (!value) return "—";
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11 && digits.length !== 14) return value;
  return maskCpfCnpj(digits);
}

export function formatTelefone(value: string | null | undefined): string {
  if (!value) return "—";
  const digits = value.replace(/\D/g, "");
  if (digits.length < 10) return value;
  return maskTelefone(digits);
}

// Validation helpers (digit-count based)
export function isValidCpfCnpj(value: string): boolean {
  const d = value.replace(/\D/g, "");
  return d.length === 11 || d.length === 14;
}

export function isValidTelefone(value: string): boolean {
  const d = value.replace(/\D/g, "");
  return d.length === 10 || d.length === 11;
}

export function isValidCep(value: string): boolean {
  return value.replace(/\D/g, "").length === 8;
}

/**
 * Máscara para taxas/percentuais em formato brasileiro.
 * - Aceita dígitos e vírgula/ponto (converte ponto em vírgula).
 * - Permite no máximo 2 casas decimais.
 * - Limita a parte inteira a 4 dígitos.
 * Exemplos: "5"→"5", "5,"→"5,", "5,5"→"5,5", "1234,56"→"1234,56"
 */
export function maskTaxa(value: string): string {
  if (value == null) return "";
  // troca ponto por vírgula e remove tudo que não for dígito ou vírgula
  let v = String(value).replace(/\./g, ",").replace(/[^\d,]/g, "");
  // mantém apenas a primeira vírgula
  const firstComma = v.indexOf(",");
  if (firstComma !== -1) {
    v =
      v.slice(0, firstComma + 1) +
      v.slice(firstComma + 1).replace(/,/g, "");
  }
  const [intPart = "", decPart] = v.split(",");
  const intClean = intPart.replace(/^0+(?=\d)/, "").slice(0, 4);
  if (decPart === undefined) return intClean;
  return `${intClean || "0"},${decPart.slice(0, 2)}`;
}

/** Converte string com vírgula em number ("5,5" → 5.5). */
export function parseTaxa(value: string): number {
  if (!value) return NaN;
  return parseFloat(String(value).replace(/\./g, "").replace(",", "."));
}

/** Formata um number como taxa BR ("5.5" → "5,50"). */
export function formatTaxa(value: number | string | null | undefined, decimals = 2): string {
  if (value === null || value === undefined || value === "") return "";
  const n = typeof value === "number" ? value : parseTaxa(String(value));
  if (!Number.isFinite(n)) return "";
  return n.toFixed(decimals).replace(".", ",");
}
