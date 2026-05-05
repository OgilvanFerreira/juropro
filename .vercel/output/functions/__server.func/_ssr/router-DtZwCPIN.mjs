import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRouteWithContext, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useNavigate, e as useLocation } from "../_libs/tanstack__react-router.mjs";
import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { s as supabase } from "./client-mNarFJdi.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
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
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const AuthContext = reactExports.createContext(void 0);
const PROJECT_REF = "qshlnjvaxncitywyydwe";
const STORAGE_KEY = `sb-${PROJECT_REF}-auth-token`;
function readPersistedToken() {
  if (typeof window === "undefined" || !STORAGE_KEY) return false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!parsed?.access_token) return false;
    const expiresAt = typeof parsed.expires_at === "number" ? parsed.expires_at : 0;
    if (expiresAt && expiresAt * 1e3 < Date.now() - 3e4) return false;
    return true;
  } catch {
    return false;
  }
}
function AuthProvider({ children }) {
  const initialHasToken = readPersistedToken();
  const [user, setUser] = reactExports.useState(null);
  const [session, setSession] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(!initialHasToken);
  const [hasPersistedSession, setHasPersistedSession] = reactExports.useState(initialHasToken);
  reactExports.useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);
      setHasPersistedSession(!!sess);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setHasPersistedSession(!!data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  const signIn = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  const resetPassword = async (email) => {
    const redirectTo = `${window.location.origin}/reset-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo
    });
    return { error: error?.message ?? null };
  };
  const updatePassword = async (password) => {
    const { error } = await supabase.auth.updateUser({ password });
    return { error: error?.message ?? null };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AuthContext.Provider,
    {
      value: {
        user,
        session,
        loading,
        hasPersistedSession,
        signIn,
        signOut,
        resetPassword,
        updatePassword
      },
      children
    }
  );
}
function useAuth() {
  const ctx = reactExports.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
const PUBLIC_ROUTES = ["/login", "/recuperar-senha", "/reset-password"];
function isPublicPath(pathname) {
  return PUBLIC_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}
function AppShellSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden w-64 shrink-0 border-r bg-background p-4 md:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mb-6 h-10 w-32" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-full" }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-16 items-center justify-between border-b bg-background/90 px-6 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-36" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-32" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 space-y-6 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-64" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 w-full" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72 w-full" })
      ] })
    ] })
  ] });
}
function AuthGuard({ children }) {
  const { user, loading, hasPersistedSession } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const publica = isPublicPath(pathname);
  reactExports.useEffect(() => {
    if (loading) return;
    if (!user && !publica) {
      navigate({
        to: "/login",
        search: { redirect: pathname },
        replace: true
      });
    } else if (user && pathname === "/login") {
      navigate({ to: "/", replace: true });
    }
  }, [user, loading, publica, pathname, navigate]);
  if (publica) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  }
  if (loading) {
    if (hasPersistedSession) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShellSkeleton, {});
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShellSkeleton, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
const appCss = "/assets/styles-ay7ZlOSG.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página não encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A página que você procura não existe ou foi movida." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Voltar ao início"
      }
    ) })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "JuroPro - Sistema profissional de gestão de empréstimos" },
      { name: "description", content: "A plataforma completa e segura para gerenciar seus empréstimos, automatizar cobranças e escalar seu negócio financeiro." },
      { name: "author", content: "JuroPro" },
      { property: "og:title", content: "JuroPro - Sistema profissional de gestão de empréstimos" },
      { property: "og:description", content: "A plataforma completa e segura para gerenciar seus empréstimos, automatizar cobranças e escalar seu negócio financeiro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "JuroPro - Sistema profissional de gestão de empréstimos" },
      { name: "twitter:description", content: "A plataforma completa e segura para gerenciar seus empréstimos, automatizar cobranças e escalar seu negócio financeiro." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3125b263-c20b-4f98-b606-b3d0c2449863" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3125b263-c20b-4f98-b606-b3d0c2449863" },
      // PWA
      { name: "theme-color", content: "#1e3a5f" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "JuroPro" },
      { name: "application-name", content: "JuroPro" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/icons/icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "apple-touch-icon", sizes: "192x192", href: "/icons/icon-192x192.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "stylesheet", href: appCss })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  if (typeof document !== "undefined") {
    try {
      const saved = window.localStorage.getItem("juropro:dark_mode") === "1";
      const has = document.documentElement.classList.contains("dark");
      if (saved && !has) document.documentElement.classList.add("dark");
      if (!saved && has) document.documentElement.classList.remove("dark");
    } catch {
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuthGuard, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] }) });
}
const $$splitComponentImporter$b = () => import("./reset-password-m3dAfeh_.mjs");
const Route$d = createFileRoute("/reset-password")({
  head: () => ({
    meta: [{
      title: "Nova senha — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./recuperar-senha-DHFOaCM3.mjs");
const Route$c = createFileRoute("/recuperar-senha")({
  head: () => ({
    meta: [{
      title: "Recuperar senha — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./login-DxFBe22f.mjs");
function sanitizeRedirect(value) {
  if (typeof value !== "string") return void 0;
  if (!value.startsWith("/")) return void 0;
  if (value.startsWith("//") || value.startsWith("/\\")) return void 0;
  return value;
}
const Route$b = createFileRoute("/login")({
  validateSearch: (s) => ({
    redirect: sanitizeRedirect(s.redirect)
  }),
  head: () => ({
    meta: [{
      title: "Entrar — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("../_authed-CZZmyBOS.mjs");
const Route$a = createFileRoute("/_authed")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("../_authed.index-CvtsLLip.mjs");
const Route$9 = createFileRoute("/_authed/")({
  head: () => ({
    meta: [{
      title: "JuroPro — Dashboard de Gestão de Empréstimos"
    }, {
      name: "description",
      content: "JuroPro: plataforma profissional para gestão de empréstimos, contratos, clientes e vencimentos."
    }]
  }),
  // Sem loader SSR: as queries só rodam no client após a sessão Supabase
  // estar hidratada (ver AuthGuard). Isto evita 401 durante SSR.
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("../_authed.vencimentos-yJQND8YB.mjs");
const ALLOWED_STATUS = ["todos", "pago", "atrasado", "hoje", "avencer"];
const Route$8 = createFileRoute("/_authed/vencimentos")({
  head: () => ({
    meta: [{
      title: "Vencimentos — JuroPro"
    }]
  }),
  validateSearch: (search) => {
    const raw = search.status;
    if (typeof raw === "string" && ALLOWED_STATUS.includes(raw)) {
      return {
        status: raw
      };
    }
    return {};
  },
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("../_authed.suporte-CHtPYhgC.mjs");
const Route$7 = createFileRoute("/_authed/suporte")({
  head: () => ({
    meta: [{
      title: "Suporte — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("../_authed.relatorios-DRwCPVt3.mjs");
const Route$6 = createFileRoute("/_authed/relatorios")({
  head: () => ({
    meta: [{
      title: "Relatórios — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_authed.contratos-BiIjSalp.mjs");
const Route$5 = createFileRoute("/_authed/contratos")({
  head: () => ({
    meta: [{
      title: "Contratos — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_authed.configuracoes-DWzTJDK-.mjs");
const Route$4 = createFileRoute("/_authed/configuracoes")({
  head: () => ({
    meta: [{
      title: "Configurações — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_authed.clientes-D0Fx_jKY.mjs");
const Route$3 = createFileRoute("/_authed/clientes")({
  validateSearch: (search) => ({
    novo: search.novo === true || search.novo === "true" ? true : void 0
  }),
  head: () => ({
    meta: [{
      title: "Clientes — JuroPro"
    }, {
      name: "description",
      content: "Gestão completa da carteira de clientes — cadastro, listagem e busca."
    }]
  }),
  // Sem loader SSR — query roda só no client (ver AuthGuard).
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_authed.bem-vindo-DvTbQW2H.mjs");
const Route$2 = createFileRoute("/_authed/bem-vindo")({
  head: () => ({
    meta: [{
      title: "Bem-vindo — JuroPro"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.EXTERNAL_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;
  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}
function extractToken$1(req, body) {
  return req.headers.get("authorization")?.replace("Bearer ", "") ?? req.headers.get("x-webhook-token") ?? req.headers.get("x-nexano-token") ?? req.headers.get("x-api-key") ?? body?.token?.toString() ?? null;
}
function validateToken$1(token) {
  const secret = process.env.NEXANO_WEBHOOK_SECRET;
  if (!secret) {
    console.warn(
      "[webhook-cancelled] NEXANO_WEBHOOK_SECRET não configurado — validação desativada (modo inspeção)"
    );
    return true;
  }
  if (!token) {
    console.error("[webhook-cancelled] Token ausente");
    return false;
  }
  return token === secret;
}
function extractBuyerIdentifier(body) {
  const client = body.client ?? {};
  const transaction = body.transaction ?? {};
  const subscription = body.subscription ?? {};
  const email = client.email ?? null;
  const document2 = client.cpf ?? client.cnpj ?? null;
  const externalId = subscription.id ?? transaction.id ?? body.token ?? null;
  return { email, document: document2, externalId };
}
const Route$1 = createFileRoute("/api/public/nexano-purchase-cancelled")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        console.log("[webhook-cancelled] Request recebido");
        let body;
        try {
          body = await request.json();
        } catch {
          return new Response(
            JSON.stringify({ error: "Payload JSON inválido" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }
        console.log("[webhook-cancelled] === PAYLOAD COMPLETO ===");
        console.log(JSON.stringify(body, null, 2));
        console.log("[webhook-cancelled] === HEADERS ===");
        for (const [key, value] of request.headers.entries()) {
          console.log(`  ${key}: ${value}`);
        }
        const token = extractToken$1(request, body);
        if (!validateToken$1(token)) {
          return new Response(
            JSON.stringify({ error: "Token inválido" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
          );
        }
        const { email, document: document2, externalId } = extractBuyerIdentifier(body);
        console.log("[webhook-cancelled] Identificadores extraídos:", {
          email,
          document: document2 ? "***" + document2.slice(-4) : null,
          externalId
        });
        if (!email && !document2) {
          console.error(
            "[webhook-cancelled] Nenhum identificador encontrado — registrando e retornando 200 para evitar retry"
          );
          return new Response(
            JSON.stringify({ ok: true, message: "Nenhum identificador — evento registrado" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
        const supabase2 = getSupabaseAdmin();
        let targetUserId = null;
        if (email) {
          const { data: users } = await supabase2.auth.admin.listUsers();
          const found = users?.users?.find(
            (u) => u.email?.toLowerCase() === email.toLowerCase()
          );
          if (found) targetUserId = found.id;
        }
        if (!targetUserId && document2) {
          const cleanDoc = document2.replace(/\D/g, "");
          const { data: profile } = await supabase2.from("profiles").select("user_id").eq("cpf", cleanDoc).maybeSingle();
          if (profile?.user_id) targetUserId = profile.user_id;
        }
        if (!targetUserId) {
          console.warn(
            `[webhook-cancelled] Usuário não encontrado para ${email ?? document2} — evento registrado`
          );
          return new Response(
            JSON.stringify({
              ok: true,
              message: "Usuário não encontrado — evento registrado sem ação"
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
        const { data: existingUser } = await supabase2.auth.admin.getUserById(targetUserId);
        const alreadyBanned = existingUser?.user?.banned_until && new Date(existingUser.user.banned_until) > /* @__PURE__ */ new Date();
        if (alreadyBanned) {
          console.log(
            `[webhook-cancelled] Usuário ${targetUserId} já bloqueado — idempotência: ignorando`
          );
          return new Response(
            JSON.stringify({ ok: true, message: "Usuário já bloqueado" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
        const { error: banError } = await supabase2.auth.admin.updateUserById(
          targetUserId,
          { ban_duration: "876600h" }
          // ~100 anos
        );
        if (banError) {
          console.error(
            "[webhook-cancelled] Erro ao bloquear usuário:",
            banError
          );
          return new Response(
            JSON.stringify({
              error: "Erro ao bloquear usuário",
              detail: banError.message
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
        const { error: signOutError } = await supabase2.auth.admin.signOut(targetUserId, "global");
        if (signOutError) {
          console.warn(
            "[webhook-cancelled] Aviso ao invalidar sessões:",
            signOutError
          );
        }
        await supabase2.from("profiles").update({ updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("user_id", targetUserId);
        console.log(
          `[webhook-cancelled] Usuário ${targetUserId} bloqueado com sucesso (${email ?? document2})`
        );
        return new Response(
          JSON.stringify({
            ok: true,
            message: "Usuário bloqueado com sucesso",
            user_id: targetUserId
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
    }
  }
});
function getExternalAdmin() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const serviceKey = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "[webhook-approved] EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_SERVICE_ROLE_KEY não configurados na Vercel"
    );
  }
  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}
function extractToken(body) {
  return body.token ?? null;
}
function validateToken(token) {
  const secret = process.env.NEXANO_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[webhook-approved] NEXANO_WEBHOOK_SECRET não configurado na Vercel");
    return false;
  }
  if (!token) {
    console.error("[webhook-approved] Token ausente no payload");
    return false;
  }
  return token === secret;
}
function extractBuyerData(body) {
  const client = body.client ?? {};
  const transaction = body.transaction ?? {};
  return {
    email: client.email ?? null,
    name: client.name ?? null,
    document: client.cpf ?? client.cnpj ?? null,
    phone: client.phone ?? null,
    externalId: transaction.id ?? null
  };
}
function cleanDocument(doc) {
  return doc.replace(/\D/g, "");
}
const Route = createFileRoute("/api/public/nexano-purchase-approved")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        console.log("[webhook-approved] Request recebido");
        let body;
        try {
          body = await request.json();
        } catch {
          return new Response(
            JSON.stringify({ error: "Payload JSON inválido" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }
        const token = extractToken(body);
        if (!validateToken(token)) {
          return new Response(
            JSON.stringify({ error: "Token inválido" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
          );
        }
        const { email, name, document: document2, phone, externalId } = extractBuyerData(body);
        console.log("[webhook-approved] Dados extraídos:", {
          email,
          name,
          document: document2 ? "***" + document2.slice(-4) : null,
          phone,
          externalId
        });
        if (!email) {
          console.error("[webhook-approved] Email não encontrado no payload");
          return new Response(
            JSON.stringify({ error: "Email do comprador não encontrado" }),
            { status: 422, headers: { "Content-Type": "application/json" } }
          );
        }
        const rawPassword = document2 ? cleanDocument(document2) : email.split("@")[0].slice(0, 8) + "2024";
        let supabase2;
        try {
          supabase2 = getExternalAdmin();
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[webhook-approved]", msg);
          return new Response(
            JSON.stringify({ error: "Configuração do servidor incompleta", detail: msg }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
        const { data: existingUsers } = await supabase2.auth.admin.listUsers();
        const alreadyExists = existingUsers?.users?.find(
          (u) => u.email?.toLowerCase() === email.toLowerCase()
        );
        if (alreadyExists) {
          console.log(`[webhook-approved] Usuário já existe (${email}) — idempotência: sem ação`);
          return new Response(
            JSON.stringify({
              ok: true,
              message: "Usuário já existente — nenhuma ação necessária",
              user_id: alreadyExists.id
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
        const { data: newUser, error: createError } = await supabase2.auth.admin.createUser({
          email,
          password: rawPassword,
          email_confirm: true,
          user_metadata: {
            name: name ?? email.split("@")[0],
            must_change_password: true,
            phone: phone ?? null,
            document: document2 ?? null,
            external_purchase_id: externalId ?? null,
            created_by: "webhook-nexano"
          }
        });
        if (createError) {
          console.error("[webhook-approved] Erro ao criar usuário:", createError);
          return new Response(
            JSON.stringify({ error: "Erro ao criar usuário", detail: createError.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
        console.log(`[webhook-approved] Usuário criado: ${newUser.user.id} (${email})`);
        const { error: roleError } = await supabase2.from("user_roles").insert({ user_id: newUser.user.id, role: "user" });
        if (roleError && !roleError.message.includes("duplicate")) {
          console.warn("[webhook-approved] Aviso ao inserir role:", roleError);
        }
        return new Response(
          JSON.stringify({
            ok: true,
            message: "Usuário criado com sucesso",
            user_id: newUser.user.id
          }),
          { status: 201, headers: { "Content-Type": "application/json" } }
        );
      }
    }
  }
});
const ResetPasswordRoute = Route$d.update({
  id: "/reset-password",
  path: "/reset-password",
  getParentRoute: () => Route$e
});
const RecuperarSenhaRoute = Route$c.update({
  id: "/recuperar-senha",
  path: "/recuperar-senha",
  getParentRoute: () => Route$e
});
const LoginRoute = Route$b.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$e
});
const AuthedRoute = Route$a.update({
  id: "/_authed",
  getParentRoute: () => Route$e
});
const AuthedIndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthedRoute
});
const AuthedVencimentosRoute = Route$8.update({
  id: "/vencimentos",
  path: "/vencimentos",
  getParentRoute: () => AuthedRoute
});
const AuthedSuporteRoute = Route$7.update({
  id: "/suporte",
  path: "/suporte",
  getParentRoute: () => AuthedRoute
});
const AuthedRelatoriosRoute = Route$6.update({
  id: "/relatorios",
  path: "/relatorios",
  getParentRoute: () => AuthedRoute
});
const AuthedContratosRoute = Route$5.update({
  id: "/contratos",
  path: "/contratos",
  getParentRoute: () => AuthedRoute
});
const AuthedConfiguracoesRoute = Route$4.update({
  id: "/configuracoes",
  path: "/configuracoes",
  getParentRoute: () => AuthedRoute
});
const AuthedClientesRoute = Route$3.update({
  id: "/clientes",
  path: "/clientes",
  getParentRoute: () => AuthedRoute
});
const AuthedBemVindoRoute = Route$2.update({
  id: "/bem-vindo",
  path: "/bem-vindo",
  getParentRoute: () => AuthedRoute
});
const ApiPublicNexanoPurchaseCancelledRoute = Route$1.update({
  id: "/api/public/nexano-purchase-cancelled",
  path: "/api/public/nexano-purchase-cancelled",
  getParentRoute: () => Route$e
});
const ApiPublicNexanoPurchaseApprovedRoute = Route.update({
  id: "/api/public/nexano-purchase-approved",
  path: "/api/public/nexano-purchase-approved",
  getParentRoute: () => Route$e
});
const AuthedRouteChildren = {
  AuthedBemVindoRoute,
  AuthedClientesRoute,
  AuthedConfiguracoesRoute,
  AuthedContratosRoute,
  AuthedRelatoriosRoute,
  AuthedSuporteRoute,
  AuthedVencimentosRoute,
  AuthedIndexRoute
};
const AuthedRouteWithChildren = AuthedRoute._addFileChildren(AuthedRouteChildren);
const rootRouteChildren = {
  AuthedRoute: AuthedRouteWithChildren,
  LoginRoute,
  RecuperarSenhaRoute,
  ResetPasswordRoute,
  ApiPublicNexanoPurchaseApprovedRoute,
  ApiPublicNexanoPurchaseCancelledRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3e4
      }
    }
  });
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Não fazer preload agressivo (re-executa beforeLoad em loop ao hover)
    defaultPreload: false,
    defaultPreloadStaleTime: 3e4,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$b as R,
  Skeleton as S,
  Route$8 as a,
  Route$3 as b,
  cn as c,
  router as r,
  useAuth as u
};
