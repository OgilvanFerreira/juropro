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
