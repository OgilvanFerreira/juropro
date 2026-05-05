import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-DtZwCPIN.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function maskCpfCnpj(value) {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  if (digits.length <= 11) {
    return digits.replace(/^(\d{3})(\d)/, "$1.$2").replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1-$2");
  }
  return digits.replace(/^(\d{2})(\d)/, "$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1/$2").replace(/(\d{4})(\d)/, "$1-$2");
}
function maskTelefone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}
function maskCep(value) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  return digits.replace(/^(\d{5})(\d)/, "$1-$2");
}
function formatCpfCnpj(value) {
  if (!value) return "—";
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11 && digits.length !== 14) return value;
  return maskCpfCnpj(digits);
}
function formatTelefone(value) {
  if (!value) return "—";
  const digits = value.replace(/\D/g, "");
  if (digits.length < 10) return value;
  return maskTelefone(digits);
}
function isValidCpfCnpj(value) {
  const d = value.replace(/\D/g, "");
  return d.length === 11 || d.length === 14;
}
function isValidTelefone(value) {
  const d = value.replace(/\D/g, "");
  return d.length === 10 || d.length === 11;
}
function isValidCep(value) {
  return value.replace(/\D/g, "").length === 8;
}
function maskTaxa(value) {
  if (value == null) return "";
  let v = String(value).replace(/\./g, ",").replace(/[^\d,]/g, "");
  const firstComma = v.indexOf(",");
  if (firstComma !== -1) {
    v = v.slice(0, firstComma + 1) + v.slice(firstComma + 1).replace(/,/g, "");
  }
  const [intPart = "", decPart] = v.split(",");
  const intClean = intPart.replace(/^0+(?=\d)/, "").slice(0, 4);
  if (decPart === void 0) return intClean;
  return `${intClean || "0"},${decPart.slice(0, 2)}`;
}
function parseTaxa(value) {
  if (!value) return NaN;
  return parseFloat(String(value).replace(/\./g, "").replace(",", "."));
}
export {
  Textarea as T,
  maskCpfCnpj as a,
  maskCep as b,
  maskTaxa as c,
  formatCpfCnpj as d,
  isValidCpfCnpj as e,
  formatTelefone as f,
  isValidTelefone as g,
  isValidCep as i,
  maskTelefone as m,
  parseTaxa as p
};
