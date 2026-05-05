import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useBusinessName, a as useBusinessLogo, B as Button } from "./use-business-info-CHcAbxEp.mjs";
import { I as Input } from "./input-DUQ65Lx-.mjs";
import { L as Label } from "./label-BOY-CzWM.mjs";
import { u as useAuth } from "./router-DtZwCPIN.mjs";
import { s as supabase } from "./client-mNarFJdi.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { W as Wallet, S as ShieldCheck, L as Lock, E as EyeOff, a as Eye, b as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/tailwind-merge.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function avaliar(s) {
  let pts = 0;
  if (s.length >= 8) pts++;
  if (/[A-Z]/.test(s)) pts++;
  if (/[0-9]/.test(s)) pts++;
  if (/[^A-Za-z0-9]/.test(s)) pts++;
  const map = [{
    pct: 0,
    cor: "bg-muted",
    label: "",
    pts: 0
  }, {
    pct: 25,
    cor: "bg-destructive",
    label: "Fraca",
    pts: 1
  }, {
    pct: 50,
    cor: "bg-warning",
    label: "Regular",
    pts: 2
  }, {
    pct: 75,
    cor: "bg-info",
    label: "Boa",
    pts: 3
  }, {
    pct: 100,
    cor: "bg-success",
    label: "Forte",
    pts: 4
  }];
  return map[pts];
}
function ResetPasswordPage() {
  const {
    updatePassword,
    user,
    loading: authLoading
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
  const [nova, setNova] = reactExports.useState("");
  const [conf, setConf] = reactExports.useState("");
  const [showA, setShowA] = reactExports.useState(false);
  const [showB, setShowB] = reactExports.useState(false);
  const [errNova, setErrNova] = reactExports.useState("");
  const [errConf, setErrConf] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [ok, setOk] = reactExports.useState(false);
  const [recoveryReady, setRecoveryReady] = reactExports.useState(false);
  const forca = reactExports.useMemo(() => avaliar(nova), [nova]);
  const senhasOk = nova && conf && nova === conf;
  reactExports.useEffect(() => {
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        setRecoveryReady(true);
      }
    });
    if (user) setRecoveryReady(true);
    return () => sub.subscription.unsubscribe();
  }, [user]);
  reactExports.useEffect(() => {
    if (authLoading) return;
    const t = setTimeout(() => {
      if (!user && !recoveryReady) {
        navigate({
          to: "/login"
        });
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [authLoading, user, recoveryReady, navigate]);
  const validar = () => {
    let bom = true;
    setErrNova("");
    setErrConf("");
    if (!nova) {
      setErrNova("Nova senha é obrigatória");
      bom = false;
    } else if (nova.length < 8) {
      setErrNova("Mínimo 8 caracteres");
      bom = false;
    } else if (forca.pts < 2) {
      setErrNova("Senha muito fraca — use letras, números e símbolos");
      bom = false;
    }
    if (!conf) {
      setErrConf("Confirme a nova senha");
      bom = false;
    } else if (nova !== conf) {
      setErrConf("Senhas não coincidem");
      bom = false;
    }
    return bom;
  };
  const submit = async (e) => {
    e.preventDefault();
    if (!validar()) return;
    setLoading(true);
    const {
      error
    } = await updatePassword(nova);
    setLoading(false);
    if (error) {
      toast.error(error);
      return;
    }
    setOk(true);
    toast.success("Senha redefinida com sucesso!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-7 shadow-2xl ring-1 ring-border sm:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-success shadow-lg", children: businessLogo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: businessLogo, alt: businessLabel, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-7 w-7 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold tracking-tight text-foreground", children: businessLabel })
      ] }),
      !ok ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Nova Senha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Escolha uma senha forte para proteger sua conta" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-6 rounded-full bg-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", noValidate: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nova", children: "Nova senha" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "nova", type: showA ? "text" : "password", placeholder: "Mínimo 8 caracteres", value: nova, onChange: (e) => {
                setNova(e.target.value);
                setErrNova("");
              }, className: `px-9 ${errNova ? "border-destructive" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowA((s) => !s), className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground", children: showA ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] }),
            nova && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full transition-all ${forca.cor}`, style: {
                width: `${forca.pct}%`
              } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: forca.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  /[A-Z]/.test(nova) ? "✓" : "✗",
                  " Maiúscula",
                  "  ",
                  /[0-9]/.test(nova) ? "✓" : "✗",
                  " Número",
                  "  ",
                  /[^A-Za-z0-9]/.test(nova) ? "✓" : "✗",
                  " Símbolo"
                ] })
              ] })
            ] }),
            errNova && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: errNova })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "conf", children: "Confirmar nova senha" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "conf", type: showB ? "text" : "password", placeholder: "Repita a nova senha", value: conf, onChange: (e) => {
                setConf(e.target.value);
                setErrConf("");
              }, className: `px-9 ${errConf ? "border-destructive" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowB((s) => !s), className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground", children: showB ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] }),
            conf && !errConf && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-semibold ${senhasOk ? "text-success" : "text-destructive"}`, children: senhasOk ? "✅ Senhas coincidem" : "❌ Senhas não coincidem" }),
            errConf && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: errConf })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading || !senhasOk, className: "h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
            "Redefinindo..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
            "Redefinir Senha"
          ] }) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Senha redefinida!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-sm text-muted-foreground", children: "Sua senha foi alterada com sucesso. Sua conta está protegida com a nova senha." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
          to: "/"
        }), className: "h-11 w-full", children: "Ir para o Dashboard" })
      ] })
    ] }) })
  ] });
}
export {
  ResetPasswordPage as component
};
