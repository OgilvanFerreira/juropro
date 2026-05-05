import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useBusinessName, B as Button } from "./use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./input-DUQ65Lx-.mjs";
import { L as Label } from "./label-BOY-CzWM.mjs";
import { u as useAuth, R as Route$b } from "./router-DtZwCPIN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { I as Info, C as CircleAlert, M as Mail, L as Lock, E as EyeOff, a as Eye, b as LoaderCircle, d as LogIn } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./client-mNarFJdi.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tailwind-merge.mjs";
const juroproLogo = "/assets/juropro-logo-D2SduWX-.png";
const emailValido = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function LoginPage() {
  const {
    signIn,
    user,
    loading: authLoading
  } = useAuth();
  const navigate = useNavigate();
  const {
    redirect
  } = Route$b.useSearch();
  const {
    name: businessName
  } = useBusinessName();
  const [email, setEmail] = reactExports.useState("");
  const [senha, setSenha] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [erro, setErro] = reactExports.useState("");
  const [errEmail, setErrEmail] = reactExports.useState("");
  const [errSenha, setErrSenha] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!authLoading && user) {
      navigate({
        to: redirect ?? "/",
        replace: true
      });
    }
  }, [authLoading, user, redirect, navigate]);
  const validar = () => {
    let ok = true;
    setErrEmail("");
    setErrSenha("");
    if (!email) {
      setErrEmail("E-mail é obrigatório");
      ok = false;
    } else if (!emailValido(email)) {
      setErrEmail("E-mail inválido");
      ok = false;
    }
    if (!senha) {
      setErrSenha("Senha é obrigatória");
      ok = false;
    } else if (senha.length < 6) {
      setErrSenha("Mínimo 6 caracteres");
      ok = false;
    }
    return ok;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) return;
    setLoading(true);
    setErro("");
    const {
      error
    } = await signIn(email.trim(), senha);
    setLoading(false);
    if (error) {
      setErro(error.toLowerCase().includes("invalid") ? "E-mail ou senha incorretos." : error);
      return;
    }
    toast.success("Login realizado com sucesso!");
    navigate({
      to: "/bem-vindo"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-emerald-200", children: "Primeiro acesso?" }),
          " ",
          "Use o e-mail e o número do documento (CPF ou CNPJ) utilizado na compra como senha."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-7 shadow-2xl ring-1 ring-border sm:p-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: juroproLogo, alt: businessName, width: 64, height: 64, className: "h-full w-full object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold tracking-tight text-foreground", children: businessName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Gestão Profissional de Empréstimos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-lg font-bold text-foreground", children: "Bem-vindo de volta! 👋" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-center text-sm text-muted-foreground", children: "Entre com suas credenciais para acessar" }),
        erro && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: erro })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", noValidate: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "login-email", children: "E-mail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "login-email", type: "email", autoComplete: "email", placeholder: "seu@email.com", value: email, onChange: (e) => {
                setEmail(e.target.value);
                setErrEmail("");
                setErro("");
              }, className: `pl-9 ${errEmail ? "border-destructive focus-visible:ring-destructive" : ""}` })
            ] }),
            errEmail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: errEmail })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "login-senha", children: "Senha" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "login-senha", type: show ? "text" : "password", autoComplete: "current-password", placeholder: "••••••••", value: senha, onChange: (e) => {
                setSenha(e.target.value);
                setErrSenha("");
                setErro("");
              }, className: `px-9 ${errSenha ? "border-destructive focus-visible:ring-destructive" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:text-foreground", "aria-label": show ? "Ocultar senha" : "Mostrar senha", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] }),
            errSenha && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: errSenha })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/recuperar-senha", className: "text-xs font-semibold text-primary underline-offset-2 hover:underline", children: "Esqueci minha senha" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg hover:from-success/90 hover:to-success", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
            "Entrando..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
            "Entrar no ",
            businessName
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "acesso seguro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-muted/50 px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "🔐 Acesso restrito. Apenas usuários autorizados.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Dificuldades? Contate o administrador."
        ] }) })
      ] })
    ] })
  ] });
}
export {
  LoginPage as component
};
