import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useBusinessName, a as useBusinessLogo, B as Button } from "./use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./input-DUQ65Lx-.mjs";
import { L as Label } from "./label-BOY-CzWM.mjs";
import { u as useAuth } from "./router-DtZwCPIN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { W as Wallet, K as KeyRound, M as Mail, b as LoaderCircle, A as ArrowLeft, c as MailCheck } from "../_libs/lucide-react.mjs";
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
const emailValido = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function RecuperarSenhaPage() {
  const {
    resetPassword
  } = useAuth();
  const navigate = useNavigate();
  const {
    name: businessName,
    defaultName
  } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const {
    logo: businessLogo
  } = useBusinessLogo();
  const [email, setEmail] = reactExports.useState("");
  const [erro, setErro] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [enviado, setEnviado] = reactExports.useState(false);
  const enviar = async (e) => {
    e.preventDefault();
    setErro("");
    if (!email) {
      setErro("E-mail é obrigatório");
      return;
    }
    if (!emailValido(email)) {
      setErro("E-mail inválido");
      return;
    }
    setLoading(true);
    const {
      error
    } = await resetPassword(email.trim());
    setLoading(false);
    if (error) {
      setErro(error);
      return;
    }
    toast.success("Link de recuperação enviado!");
    setEnviado(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-7 shadow-2xl ring-1 ring-border sm:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-success shadow-lg", children: businessLogo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: businessLogo, alt: businessLabel, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-7 w-7 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold tracking-tight text-foreground", children: businessLabel })
      ] }),
      !enviado ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Recuperar Senha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Informe seu e-mail e enviaremos um link para redefinir sua senha" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-6 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: enviar, className: "space-y-4", noValidate: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rec-email", children: "E-mail cadastrado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "rec-email", type: "email", autoFocus: true, placeholder: "seu@email.com", value: email, onChange: (e) => {
                setEmail(e.target.value);
                setErro("");
              }, className: `pl-9 ${erro ? "border-destructive focus-visible:ring-destructive" : ""}` })
            ] }),
            erro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: erro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
            "Enviando..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            "Enviar Link de Recuperação"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "h-11 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            "Voltar para Login"
          ] }) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MailCheck, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "E-mail enviado!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Verifique sua caixa de entrada" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-6 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 rounded-xl border border-success/30 bg-success/10 p-4 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-success", children: "✅ Link enviado para:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 break-all text-sm font-semibold text-foreground", children: email }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
            "Se não encontrar na caixa de entrada, verifique a pasta de spam ou lixo eletrônico. O link expira em ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "30 minutos" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate({
          to: "/login"
        }), variant: "outline", className: "h-11 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          "Voltar para Login"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  RecuperarSenhaPage as component
};
