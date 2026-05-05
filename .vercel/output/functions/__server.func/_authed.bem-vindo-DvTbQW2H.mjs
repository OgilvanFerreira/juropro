import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { u as useBusinessName, a as useBusinessLogo, B as Button } from "./_ssr/use-business-info-CHcAbxEp.mjs";
import { u as useAuth } from "./_ssr/router-DtZwCPIN.mjs";
import { u as useProfile } from "./_ssr/use-profile-CdBNxwsV.mjs";
import "./_libs/sonner.mjs";
import { W as Wallet, ag as PartyPopper, ah as ArrowRight, ae as LogOut } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_ssr/client-mNarFJdi.mjs";
import "./_libs/supabase__supabase-js.mjs";
import "./_libs/supabase__postgrest-js.mjs";
import "./_libs/supabase__realtime-js.mjs";
import "./_libs/supabase__phoenix.mjs";
import "./_libs/supabase__storage-js.mjs";
import "./_libs/iceberg-js.mjs";
import "./_libs/supabase__auth-js.mjs";
import "tslib";
import "./_libs/supabase__functions-js.mjs";
import "./_libs/tailwind-merge.mjs";
function BemVindoPage() {
  const {
    user,
    signOut,
    loading
  } = useAuth();
  const {
    profile
  } = useProfile();
  const navigate = useNavigate();
  const {
    name: businessName,
    defaultName
  } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const {
    logo: businessLogo
  } = useBusinessLogo();
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
  }, [loading, user, navigate]);
  const nome = profile?.nome || user?.email?.split("@")[0]?.split(".").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Usuário";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-7 text-center shadow-2xl ring-1 ring-border sm:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-success shadow-lg", children: businessLogo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: businessLogo, alt: businessLabel, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-7 w-7 text-primary-foreground" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-1 text-xl font-extrabold tracking-tight text-foreground", children: businessLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-xs text-muted-foreground", children: "Gestão Profissional de Empréstimos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success to-success/80 shadow-xl shadow-success/30 animate-in zoom-in duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "h-10 w-10 text-success-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-foreground", children: [
        "Bem-vindo, ",
        nome,
        "!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-sm text-muted-foreground", children: [
        "Login realizado com sucesso. Você está no ",
        businessLabel,
        "!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate({
        to: "/"
      }), className: "mb-2 h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg", children: [
        "Ir para o Dashboard",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: async () => {
        await signOut();
        navigate({
          to: "/login"
        });
      }, className: "h-11 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        "Sair"
      ] })
    ] }) })
  ] });
}
export {
  BemVindoPage as component
};
