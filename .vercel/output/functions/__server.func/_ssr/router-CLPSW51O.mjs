import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRouteWithContext, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, d as useNavigate, e as useLocation } from "../_libs/tanstack__react-router.mjs";
import { k as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQuery, a as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { s as supabase } from "./client-BJokL0W-.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { R as Root$3 } from "../_libs/radix-ui__react-separator.mjs";
import { R as Root$1, P as Portal$2, C as Content$1, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { P as Provider, R as Root3, T as Trigger, a as Portal, C as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { R as Root$2, I as Image$1, F as Fallback } from "../_libs/radix-ui__react-avatar.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./index.mjs";
import { r as requireAuthForExternal } from "./auth-guard-RhM8Bjcl.mjs";
import { R as Root2, V as Value, T as Trigger$1, I as Icon, P as Portal$1, C as Content2$1, a as Viewport, b as Item, c as ItemIndicator, d as ItemText, S as ScrollUpButton, e as ScrollDownButton, L as Label$1, f as Separator$1 } from "../_libs/radix-ui__react-select.mjs";
import { R as Root2$1, P as Portal2, C as Content2$2, T as Title2, D as Description2, a as Cancel, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { R as Root2$2, L as List, T as Trigger$2, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { R as Root2$3, T as Trigger$3, P as Portal$3, C as Content2$3 } from "../_libs/radix-ui__react-popover.mjs";
import { _ as _e } from "../_libs/cmdk.mjs";
import { r as readSync, u as utils, w as writeFileSync } from "../_libs/xlsx.mjs";
import { P as Papa } from "../_libs/papaparse.mjs";
import { R as Root$5, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { R as Root$4, T as Thumb } from "../_libs/radix-ui__react-switch.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { a } from "../_libs/hookform__resolvers.mjs";
import "../_libs/seroval.mjs";
import { W as Wallet, S as ShieldCheck, L as Lock, E as EyeOff, a as Eye, b as LoaderCircle, K as KeyRound, M as Mail, A as ArrowLeft, c as MailCheck, C as CircleAlert, d as LogIn, P as Plus, U as UserPlus, e as CalendarClock, T as TrendingUp, f as TriangleAlert, g as CircleCheck, h as Search, i as Undo2, H as Headset, j as MessageCircle, k as Clock, B as BookOpen, l as ChartColumn, F as FileText, m as Settings, n as User, o as Building2, p as SlidersHorizontal, D as Database, q as Users, r as MapPin, s as Pencil, t as Trash2, u as PartyPopper, v as ArrowRight, w as LogOut, x as LayoutDashboard, y as PanelLeft, z as Check, G as Smartphone, I as Share, J as Download, N as ChevronDown, O as ArrowUpDown, Q as ArrowUp, R as ArrowDown, V as ChevronLeft, X as ChevronRight, Y as CalendarDays, Z as ClipboardList, _ as Hourglass, $ as ChartPie, a0 as Receipt, a1 as Coins, a2 as Camera, a3 as CircleX, a4 as Save, a5 as Image, a6 as Upload, a7 as RefreshCw, a8 as Bell, a9 as Palette, aa as FileSpreadsheet, ab as RefreshCcw, ac as Rocket, ad as X, ae as ChevronUp, af as ChevronsUpDown, ag as Printer } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip$1, a as Area } from "../_libs/recharts.mjs";
import { o as objectType, n as numberType, s as stringType, u as unionType, b as arrayType, l as literalType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./createMiddleware-BvN2ghIY.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/es-toolkit.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/reselect.mjs";
import "../_libs/reduxjs__toolkit.mjs";
import "../_libs/redux.mjs";
import "../_libs/immer.mjs";
import "../_libs/redux-thunk.mjs";
import "../_libs/react-redux.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
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
function readPersistedToken() {
  return false;
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
const appCss = "/assets/styles-CH4KAF-M.css";
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
const Route$c = createRootRouteWithContext()({
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
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
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const NAME_BASE = "juropro:business_name";
const LOGO_BASE = "juropro:business_logo";
const DETAILS_BASE = "juropro:business_details";
const DEFAULT_NAME$1 = "JuroPro";
const NAME_EVENT = "juropro:business_name_changed";
const LOGO_EVENT = "juropro:business_logo_changed";
const DETAILS_EVENT = "juropro:business_details_changed";
const DEFAULT_DETAILS = {
  cnpj: "",
  telefone: "",
  email: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: ""
};
function scopedKey(base, userId) {
  return userId ? `${base}:${userId}` : base;
}
function readName$1(userId) {
  if (typeof window === "undefined") return DEFAULT_NAME$1;
  try {
    const v = window.localStorage.getItem(scopedKey(NAME_BASE, userId));
    return v && v.trim().length > 0 ? v : DEFAULT_NAME$1;
  } catch {
    return DEFAULT_NAME$1;
  }
}
function readLogo(userId) {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(scopedKey(LOGO_BASE, userId));
    return v && v.length > 0 ? v : null;
  } catch {
    return null;
  }
}
function readDetails(userId) {
  if (typeof window === "undefined") return DEFAULT_DETAILS;
  try {
    const raw = window.localStorage.getItem(scopedKey(DETAILS_BASE, userId));
    if (!raw) return DEFAULT_DETAILS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_DETAILS, ...parsed };
  } catch {
    return DEFAULT_DETAILS;
  }
}
function useBusinessName() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [name, setNameState] = reactExports.useState(DEFAULT_NAME$1);
  reactExports.useEffect(() => {
    setNameState(readName$1(userId));
    const onStorage = (e) => {
      if (e.key === scopedKey(NAME_BASE, userId)) setNameState(readName$1(userId));
    };
    const onCustom = () => setNameState(readName$1(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(NAME_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(NAME_EVENT, onCustom);
    };
  }, [userId]);
  const setName = (next) => {
    const clean = next.trim();
    try {
      const k = scopedKey(NAME_BASE, userId);
      if (clean.length === 0) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, clean);
    } catch {
    }
    window.dispatchEvent(new Event(NAME_EVENT));
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME$1);
  };
  return { name, setName, defaultName: DEFAULT_NAME$1 };
}
function useBusinessLogo() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [logo, setLogoState] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setLogoState(readLogo(userId));
    const onStorage = (e) => {
      if (e.key === scopedKey(LOGO_BASE, userId)) setLogoState(readLogo(userId));
    };
    const onCustom = () => setLogoState(readLogo(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(LOGO_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(LOGO_EVENT, onCustom);
    };
  }, [userId]);
  const setLogo = (next) => {
    try {
      const k = scopedKey(LOGO_BASE, userId);
      if (!next) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, next);
    } catch {
    }
    window.dispatchEvent(new Event(LOGO_EVENT));
    setLogoState(next);
  };
  return { logo, setLogo };
}
function useBusinessDetails() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [details, setDetailsState] = reactExports.useState(DEFAULT_DETAILS);
  reactExports.useEffect(() => {
    setDetailsState(readDetails(userId));
    const onStorage = (e) => {
      if (e.key === scopedKey(DETAILS_BASE, userId)) setDetailsState(readDetails(userId));
    };
    const onCustom = () => setDetailsState(readDetails(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(DETAILS_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(DETAILS_EVENT, onCustom);
    };
  }, [userId]);
  const setDetails = (next) => {
    try {
      window.localStorage.setItem(scopedKey(DETAILS_BASE, userId), JSON.stringify(next));
    } catch {
    }
    window.dispatchEvent(new Event(DETAILS_EVENT));
    setDetailsState(next);
  };
  return { details, setDetails, defaultDetails: DEFAULT_DETAILS };
}
const Route$b = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Nova senha — JuroPro" }] }),
  component: ResetPasswordPage
});
function avaliar(s) {
  let pts = 0;
  if (s.length >= 8) pts++;
  if (/[A-Z]/.test(s)) pts++;
  if (/[0-9]/.test(s)) pts++;
  if (/[^A-Za-z0-9]/.test(s)) pts++;
  const map = [
    { pct: 0, cor: "bg-muted", label: "", pts: 0 },
    { pct: 25, cor: "bg-destructive", label: "Fraca", pts: 1 },
    { pct: 50, cor: "bg-warning", label: "Regular", pts: 2 },
    { pct: 75, cor: "bg-info", label: "Boa", pts: 3 },
    { pct: 100, cor: "bg-success", label: "Forte", pts: 4 }
  ];
  return map[pts];
}
function ResetPasswordPage() {
  const { updatePassword, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { name: businessName, defaultName } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const { logo: businessLogo } = useBusinessLogo();
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
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
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
        navigate({ to: "/login" });
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
    const { error } = await updatePassword(nova);
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "nova",
                  type: showA ? "text" : "password",
                  placeholder: "Mínimo 8 caracteres",
                  value: nova,
                  onChange: (e) => {
                    setNova(e.target.value);
                    setErrNova("");
                  },
                  className: `px-9 ${errNova ? "border-destructive" : ""}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowA((s) => !s),
                  className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground",
                  children: showA ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] }),
            nova && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-full transition-all ${forca.cor}`,
                  style: { width: `${forca.pct}%` }
                }
              ) }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "conf",
                  type: showB ? "text" : "password",
                  placeholder: "Repita a nova senha",
                  value: conf,
                  onChange: (e) => {
                    setConf(e.target.value);
                    setErrConf("");
                  },
                  className: `px-9 ${errConf ? "border-destructive" : ""}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowB((s) => !s),
                  className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground",
                  children: showB ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] }),
            conf && !errConf && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-xs font-semibold ${senhasOk ? "text-success" : "text-destructive"}`,
                children: senhasOk ? "✅ Senhas coincidem" : "❌ Senhas não coincidem"
              }
            ),
            errConf && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: errConf })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: loading || !senhasOk,
              className: "h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "Redefinindo..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
                "Redefinir Senha"
              ] })
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Senha redefinida!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-sm text-muted-foreground", children: "Sua senha foi alterada com sucesso. Sua conta está protegida com a nova senha." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({ to: "/" }), className: "h-11 w-full", children: "Ir para o Dashboard" })
      ] })
    ] }) })
  ] });
}
const Route$a = createFileRoute("/recuperar-senha")({
  head: () => ({ meta: [{ title: "Recuperar senha — JuroPro" }] }),
  component: RecuperarSenhaPage
});
const emailValido$1 = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function RecuperarSenhaPage() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const { name: businessName, defaultName } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const { logo: businessLogo } = useBusinessLogo();
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
    if (!emailValido$1(email)) {
      setErro("E-mail inválido");
      return;
    }
    setLoading(true);
    const { error } = await resetPassword(email.trim());
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "rec-email",
                  type: "email",
                  autoFocus: true,
                  placeholder: "seu@email.com",
                  value: email,
                  onChange: (e) => {
                    setEmail(e.target.value);
                    setErro("");
                  },
                  className: `pl-9 ${erro ? "border-destructive focus-visible:ring-destructive" : ""}`
                }
              )
            ] }),
            erro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: erro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: loading,
              className: "h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "Enviando..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                "Enviar Link de Recuperação"
              ] })
            }
          ),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => navigate({ to: "/login" }),
            variant: "outline",
            className: "h-11 w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Voltar para Login"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const juroproLogo = "/assets/juropro-logo-D2SduWX-.png";
function sanitizeRedirect(value) {
  if (typeof value !== "string") return void 0;
  if (!value.startsWith("/")) return void 0;
  if (value.startsWith("//") || value.startsWith("/\\")) return void 0;
  return value;
}
const Route$9 = createFileRoute("/login")({
  validateSearch: (s) => ({
    redirect: sanitizeRedirect(s.redirect)
  }),
  head: () => ({ meta: [{ title: "Entrar — JuroPro" }] }),
  component: LoginPage
});
const emailValido = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function LoginPage() {
  const { signIn, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { redirect } = Route$9.useSearch();
  const { name: businessName } = useBusinessName();
  const [email, setEmail] = reactExports.useState("");
  const [senha, setSenha] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [erro, setErro] = reactExports.useState("");
  const [errEmail, setErrEmail] = reactExports.useState("");
  const [errSenha, setErrSenha] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!authLoading && user) {
      navigate({ to: redirect ?? "/", replace: true });
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
    const { error } = await signIn(email.trim(), senha);
    setLoading(false);
    if (error) {
      setErro(
        error.toLowerCase().includes("invalid") ? "E-mail ou senha incorretos." : error
      );
      return;
    }
    toast.success("Login realizado com sucesso!");
    navigate({ to: "/bem-vindo" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-7 shadow-2xl ring-1 ring-border sm:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: juroproLogo,
            alt: businessName,
            width: 64,
            height: 64,
            className: "h-full w-full object-contain"
          }
        ) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "login-email",
                type: "email",
                autoComplete: "email",
                placeholder: "seu@email.com",
                value: email,
                onChange: (e) => {
                  setEmail(e.target.value);
                  setErrEmail("");
                  setErro("");
                },
                className: `pl-9 ${errEmail ? "border-destructive focus-visible:ring-destructive" : ""}`
              }
            )
          ] }),
          errEmail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: errEmail })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "login-senha", children: "Senha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "login-senha",
                type: show ? "text" : "password",
                autoComplete: "current-password",
                placeholder: "••••••••",
                value: senha,
                onChange: (e) => {
                  setSenha(e.target.value);
                  setErrSenha("");
                  setErro("");
                },
                className: `px-9 ${errSenha ? "border-destructive focus-visible:ring-destructive" : ""}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShow((s) => !s),
                className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:text-foreground",
                "aria-label": show ? "Ocultar senha" : "Mostrar senha",
                children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
              }
            )
          ] }),
          errSenha && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-destructive", children: errSenha })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/recuperar-senha",
            className: "text-xs font-semibold text-primary underline-offset-2 hover:underline",
            children: "Esqueci minha senha"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            disabled: loading,
            className: "h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg hover:from-success/90 hover:to-success",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              "Entrando..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
              "Entrar no ",
              businessName
            ] })
          }
        )
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
    ] }) })
  ] });
}
const Route$8 = createFileRoute("/_authed")({
  component: AuthedLayout
});
function AuthedLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const reload = reactExports.useCallback(async () => {
    if (!user) {
      setProfile(null);
      return;
    }
    setLoading(true);
    const { data } = await supabase.from("profiles").select("*").eq("user_id", user.id).maybeSingle();
    setProfile(data ?? null);
    setLoading(false);
  }, [user]);
  reactExports.useEffect(() => {
    reload();
  }, [reload]);
  const update = async (patch) => {
    if (!user) return { error: "Não autenticado" };
    const { error } = await supabase.from("profiles").update(patch).eq("user_id", user.id);
    if (error) return { error: error.message };
    await reload();
    return { error: null };
  };
  return { profile, loading, reload, update };
}
const BASE_KEY$1 = "juropro:admin_name";
const DEFAULT_NAME = "Equipe JuroPro";
const EVENT$2 = "juropro:admin_name_changed";
function keyFor$1(userId) {
  return userId ? `${BASE_KEY$1}:${userId}` : BASE_KEY$1;
}
function readName(userId) {
  if (typeof window === "undefined") return DEFAULT_NAME;
  try {
    const v = window.localStorage.getItem(keyFor$1(userId));
    return v && v.trim().length > 0 ? v : DEFAULT_NAME;
  } catch {
    return DEFAULT_NAME;
  }
}
function useAdminName() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [name, setNameState] = reactExports.useState(DEFAULT_NAME);
  reactExports.useEffect(() => {
    setNameState(readName(userId));
    const onStorage = (e) => {
      if (e.key === keyFor$1(userId)) setNameState(readName(userId));
    };
    const onCustom = () => setNameState(readName(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT$2, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVENT$2, onCustom);
    };
  }, [userId]);
  const setName = (next) => {
    const clean = next.trim();
    try {
      const k = keyFor$1(userId);
      if (clean.length === 0) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, clean);
    } catch {
    }
    window.dispatchEvent(new Event(EVENT$2));
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME);
  };
  return { name, setName, defaultName: DEFAULT_NAME };
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
const Separator = reactExports.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$3,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = Root$3.displayName;
const Sheet = Root$1;
const SheetPortal = Portal$2;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content$1, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content$1.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = reactExports.createContext(null);
function useSidebar() {
  const context = reactExports.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = reactExports.forwardRef(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = reactExports.useState(false);
    const [_open, _setOpen] = reactExports.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = reactExports.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = reactExports.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = reactExports.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      }
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = reactExports.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "sr-only", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: "Sidebar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { children: "Displays the mobile sidebar." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full flex-col", children })
          ]
        }
      ) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children
                }
              )
            }
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
const SidebarTrigger = reactExports.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className
        ),
        ...props
      }
    );
  }
);
SidebarRail.displayName = "SidebarRail";
const SidebarInset = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        ref,
        className: cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className
        ),
        ...props
      }
    );
  }
);
SidebarInset.displayName = "SidebarInset";
const SidebarInput = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "header",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
      }
    );
  }
);
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "footer",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
      }
    );
  }
);
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Separator,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "content",
        className: cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className
        ),
        ...props
      }
    );
  }
);
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "group",
        className: cn("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
      }
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  )
);
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  )
);
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      ref,
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = reactExports.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      }
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        }
      )
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = reactExports.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-sidebar": "menu-badge",
      className: cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = reactExports.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = reactExports.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu-sub",
      className: cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = reactExports.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, ...props })
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = reactExports.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
const Avatar = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$2,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = Root$2.displayName;
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Image$1,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = Image$1.displayName;
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = Fallback.displayName;
const BASE_KEY = "juropro:admin_avatar";
const EVENT$1 = "juropro:admin_avatar_changed";
function keyFor(userId) {
  return userId ? `${BASE_KEY}:${userId}` : BASE_KEY;
}
function readAvatar(userId) {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(keyFor(userId));
    return v && v.length > 0 ? v : null;
  } catch {
    return null;
  }
}
function useAdminAvatar() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [avatar, setAvatarState] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setAvatarState(readAvatar(userId));
    const onStorage = (e) => {
      if (e.key === keyFor(userId)) setAvatarState(readAvatar(userId));
    };
    const onCustom = () => setAvatarState(readAvatar(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT$1, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVENT$1, onCustom);
    };
  }, [userId]);
  const setAvatar = (next) => {
    try {
      const k = keyFor(userId);
      if (!next) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, next);
    } catch {
    }
    window.dispatchEvent(new Event(EVENT$1));
    setAvatarState(next);
  };
  return { avatar, setAvatar };
}
const navItems = [
  { title: "Início", url: "/", icon: LayoutDashboard },
  { title: "Clientes", url: "/clientes", icon: Users },
  { title: "Contratos", url: "/contratos", icon: FileText },
  { title: "Vencimentos", url: "/vencimentos", icon: CalendarClock },
  { title: "Relatórios", url: "/relatorios", icon: ChartColumn },
  { title: "Suporte", url: "/suporte", icon: Headset, highlight: true }
];
const supportItems = [
  { title: "Configurações", url: "/configuracoes", icon: Settings }
];
function AppSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { name, defaultName } = useAdminName();
  const { avatar } = useAdminAvatar();
  const { name: businessName } = useBusinessName();
  const { logo: businessLogo } = useBusinessLogo();
  const { signOut, user } = useAuth();
  const { profile } = useProfile();
  const isActive = (url) => pathname === url;
  const displayName = profile?.nome || (name && name !== defaultName ? name : null) || user?.email?.split("@")[0] || "Usuário";
  const displayAvatar = profile?.avatar_url || avatar;
  const iniciais = displayName.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("") || "U";
  const handleSair = async () => {
    await signOut();
    toast.success("Você saiu da conta");
    navigate({ to: "/login" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sidebar, { collapsible: "icon", className: "border-r border-sidebar-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarHeader, { className: "border-b border-sidebar-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-2 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shadow-sm", children: businessLogo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: businessLogo,
          alt: businessName,
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group-data-[collapsible=icon]:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-tight text-sidebar-foreground", children: businessName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-sidebar-foreground/60", children: "Gestão de Empréstimos" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupLabel, { children: "Navegação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenu, { children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuButton, { asChild: true, isActive: isActive(item.url), tooltip: item.title, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.url, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            item.icon,
            {
              className: `h-4 w-4 ${item.highlight ? "text-success" : ""}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: item.highlight ? "font-medium text-success" : "", children: item.title })
        ] }) }) }, item.title)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupLabel, { children: "Sistema" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenu, { children: supportItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuButton, { asChild: true, isActive: isActive(item.url), tooltip: item.title, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.url, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.title })
        ] }) }) }, item.title)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarFooter, { className: "border-t border-sidebar-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-2 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-9 w-9 border border-sidebar-border", children: [
        displayAvatar && /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: displayAvatar, alt: displayName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-sidebar-primary text-sidebar-primary-foreground text-xs font-semibold", children: iniciais })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 group-data-[collapsible=icon]:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-medium text-sidebar-foreground", children: displayName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-sidebar-foreground/60", children: profile?.cargo || "Administrador" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          onClick: handleSair,
          className: "h-8 w-8 shrink-0 text-sidebar-foreground/70 hover:text-sidebar-foreground group-data-[collapsible=icon]:hidden",
          title: "Sair",
          "aria-label": "Sair",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" })
        }
      )
    ] }) })
  ] });
}
function AreaChartCard({
  title,
  subtitle,
  data,
  color,
  colorGlow,
  gradientId,
  formatValue,
  tooltipLabel
}) {
  const allZero = data.every((d) => d.value === 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-lg border bg-card p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold tracking-tight text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 w-full select-none overflow-hidden [touch-action:pan-y]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "99%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AreaChart,
      {
        data,
        margin: { top: 8, right: 12, left: 0, bottom: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: colorGlow, stopOpacity: 0.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CartesianGrid,
            {
              strokeDasharray: "3 3",
              stroke: "var(--border)",
              vertical: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            XAxis,
            {
              dataKey: "month",
              stroke: "var(--muted-foreground)",
              fontSize: 12,
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YAxis,
            {
              stroke: "var(--muted-foreground)",
              fontSize: 12,
              tickLine: false,
              axisLine: false,
              width: 48,
              tickFormatter: formatValue,
              domain: allZero ? [0, 0] : ["auto", "auto"],
              ticks: allZero ? [0] : void 0,
              allowDecimals: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip$1,
            {
              cursor: { stroke: "var(--border)", strokeWidth: 1 },
              contentStyle: {
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--foreground)"
              },
              labelStyle: { color: "var(--muted-foreground)" },
              formatter: (value) => [
                formatValue ? formatValue(Number(value)) : String(value),
                tooltipLabel
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Area,
            {
              type: "monotone",
              dataKey: "value",
              stroke: color,
              strokeWidth: 2,
              fill: `url(#${gradientId})`
            }
          )
        ]
      }
    ) }) })
  ] });
}
const toneStyles = {
  warning: "bg-warning/15 text-warning",
  destructive: "bg-destructive/15 text-destructive",
  info: "bg-info/15 text-info",
  success: "bg-success/15 text-success"
};
function KpiCard({
  label,
  value,
  hint,
  icon: Icon2,
  tone,
  loading = false,
  empty = false,
  hidden = false,
  to,
  search
}) {
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: label }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-9 w-20 animate-pulse rounded-md bg-muted" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "mt-2 text-3xl font-semibold tracking-tight tabular-nums transition",
              empty ? "text-muted-foreground/60" : "text-foreground",
              hidden && "select-none blur-md"
            ),
            "aria-hidden": hidden,
            children: hidden ? "•••••" : value
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            toneStyles[tone]
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: loading ? "Carregando..." : empty ? "Nenhum dado encontrado" : hint })
  ] });
  const baseClasses = "block rounded-lg border bg-card p-5 shadow-sm";
  if (to) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to,
        search,
        className: cn(
          baseClasses,
          "transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        ),
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: baseClasses, children: content });
}
const Dialog = Root$1;
const DialogPortal = Portal$2;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
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
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const listClientes = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("a1d36e2882056ec76bc682ffb4551e3ded38816663f31e9c4fb5604cbe333d3c"));
const clienteInsertSchema = objectType({
  nome: stringType().trim().min(1).max(200),
  email: stringType().trim().email().max(255).or(literalType("")).optional(),
  telefone: stringType().trim().max(30).optional(),
  data_nascimento: stringType().trim().max(20).optional(),
  cpf_cnpj: stringType().trim().max(20).optional(),
  rg: stringType().trim().max(30).optional(),
  cep: stringType().trim().max(15).optional(),
  endereco: stringType().trim().max(255).optional(),
  numero: stringType().trim().max(20).optional(),
  complemento: stringType().trim().max(100).optional(),
  bairro: stringType().trim().max(100).optional(),
  cidade: stringType().trim().max(100).optional(),
  uf: stringType().trim().max(2).optional()
});
const getClienteSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const getCliente = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).inputValidator((input) => getClienteSchema.parse(input)).handler(createSsrRpc("d9914c95806ddc70e174d68f6fb428724a65d639bb24bac34e5d0c2f58920996"));
const clienteUpdateSchema = clienteInsertSchema.extend({
  id: unionType([stringType().min(1), numberType()])
});
const updateCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => clienteUpdateSchema.parse(input)).handler(createSsrRpc("f8fab8de21853d82862d38634cee01c401643b7bbf98e40db6d809865f0ebfa1"));
const createCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => clienteInsertSchema.parse(input)).handler(createSsrRpc("30bb6e92b07e2f10e32e8ed0f6d03e4f521acff9fef9a6e31e32b428acacbd8e"));
const deleteClienteSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const deleteCliente = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => deleteClienteSchema.parse(input)).handler(createSsrRpc("4a3769f568ffed89523bee6c00eb8f5b735a99b66ffa1fd820890c9fc8e52e73"));
const parcelaSchema = objectType({
  numero: numberType().int().min(1),
  data_vencimento: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor: numberType().positive()
});
const createEmprestimoSchema = objectType({
  cliente_id: unionType([stringType().min(1), numberType()]),
  valor_principal: numberType().positive(),
  taxa_juros: numberType().min(0),
  numero_parcelas: numberType().int().min(1).max(360),
  tipo_juros: enumType(["simples", "composto", "so_juros"]),
  periodicidade: enumType(["mensal", "quinzenal", "semanal", "diario"]),
  data_inicio: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  observacoes: stringType().max(2e3).optional().default(""),
  parcelas: arrayType(parcelaSchema).min(1).max(360)
});
const listEmprestimos = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("54d18432aa415589afc4caf38b56e8a0fbc09e35e032d7efd584ca5da52841f5"));
const createEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => createEmprestimoSchema.parse(input)).handler(createSsrRpc("648399b7e360e047083f6add624e06ea1327c86f2cc50495d7dd08781d2482a6"));
const idSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const getEmprestimo = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).inputValidator((input) => idSchema.parse(input)).handler(createSsrRpc("5e306e6374dbe7a66ce9d29a547d164bbadd46d1de7d4fc34a6ed3f15d528847"));
const updateEmprestimoSchema = objectType({
  id: unionType([stringType().min(1), numberType()]),
  cliente_id: unionType([stringType().min(1), numberType()]),
  valor_principal: numberType().positive(),
  taxa_juros: numberType().min(0),
  numero_parcelas: numberType().int().min(1).max(360),
  tipo_juros: enumType(["simples", "composto", "so_juros"]),
  periodicidade: enumType(["mensal", "quinzenal", "semanal", "diario"]),
  data_inicio: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  observacoes: stringType().max(2e3).optional().default(""),
  status: stringType().optional(),
  parcelas: arrayType(parcelaSchema).min(1).max(360)
});
const updateEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => updateEmprestimoSchema.parse(input)).handler(createSsrRpc("de46ef22cc0bdae65e7bf759be3eb47bea138684cd4db32980ef4abc7bf204d1"));
const deleteEmprestimo = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => idSchema.parse(input)).handler(createSsrRpc("1dd7b8138490523c28821508253fa96f275f84b32c69053cc3cb7a07debba17e"));
const PERIODICIDADES = [
  { value: "mensal", label: "Mensal", dias: 30 },
  { value: "quinzenal", label: "Quinzenal", dias: 15 },
  { value: "semanal", label: "Semanal", dias: 7 },
  { value: "diario", label: "Diário", dias: 1 }
];
const fmtBRL$5 = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
function calcular(form) {
  const valor = parseFloat(form.valorPrincipal);
  const taxa = parseTaxa(form.taxaJuros) / 100;
  const n = parseInt(form.numParcelas);
  const per = PERIODICIDADES.find((p) => p.value === form.periodicidade);
  if (!valor || taxa < 0 || !n || !form.dataInicio || !per) return null;
  if (Number.isNaN(valor) || Number.isNaN(taxa) || Number.isNaN(n)) return null;
  const inicio = /* @__PURE__ */ new Date(form.dataInicio + "T00:00:00");
  const buildData = (i) => {
    const d = new Date(inicio);
    d.setDate(d.getDate() + i * per.dias);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return { vencimento: d.toLocaleDateString("pt-BR"), vencimentoIso: iso };
  };
  let valorParcela;
  let totalPagar;
  let parcelas;
  if (form.tipoJuros === "simples") {
    totalPagar = valor + valor * taxa * n;
    valorParcela = totalPagar / n;
    parcelas = Array.from({ length: n }, (_, i) => ({
      numero: i + 1,
      ...buildData(i),
      valor: valorParcela
    }));
  } else if (form.tipoJuros === "composto") {
    if (taxa === 0) {
      valorParcela = valor / n;
      totalPagar = valor;
    } else {
      valorParcela = valor * (taxa * Math.pow(1 + taxa, n)) / (Math.pow(1 + taxa, n) - 1);
      totalPagar = valorParcela * n;
    }
    parcelas = Array.from({ length: n }, (_, i) => ({
      numero: i + 1,
      ...buildData(i),
      valor: valorParcela
    }));
  } else {
    const juro = valor * taxa;
    valorParcela = juro;
    totalPagar = juro * n + valor;
    parcelas = Array.from({ length: n }, (_, i) => {
      const ultima = i === n - 1;
      return {
        numero: i + 1,
        ...buildData(i),
        valor: ultima ? juro + valor : juro,
        ultima
      };
    });
  }
  return { parcelas, totalPagar, totalJuros: totalPagar - valor, valorParcela };
}
function ClienteCombobox({ value, onChange, clientes, loading }) {
  const [busca, setBusca] = reactExports.useState("");
  const [aberto, setAberto] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const seqMap = reactExports.useMemo(() => {
    const ordered = [...clientes].sort((a2, b) => {
      const da = a2.created_at ? new Date(a2.created_at).getTime() : 0;
      const db = b.created_at ? new Date(b.created_at).getTime() : 0;
      return da - db;
    });
    const m = /* @__PURE__ */ new Map();
    ordered.forEach((c, idx) => {
      m.set(String(c.id), `#${String(idx + 1).padStart(3, "0")}`);
    });
    return m;
  }, [clientes]);
  const codigoCliente = (id) => seqMap.get(String(id)) ?? `#${String(id).slice(0, 6)}`;
  const filtrados = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return clientes.slice(0, 100);
    return clientes.filter((c) => {
      const nome = (c.nome ?? "").toLowerCase();
      const cpf = (c.cpf_cnpj ?? "").replace(/\D/g, "");
      const id = String(c.id);
      const codigo = (seqMap.get(id) ?? "").toLowerCase();
      return nome.includes(q) || cpf.includes(q.replace(/\D/g, "")) || id.includes(q) || codigo.includes(q);
    }).slice(0, 100);
  }, [busca, clientes, seqMap]);
  const sel = clientes.find((c) => String(c.id) === String(value));
  reactExports.useEffect(() => {
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setAberto(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setAberto((a2) => !a2),
        className: cn(
          "flex h-11 w-full items-center justify-between rounded-md border bg-background px-3 text-sm shadow-sm transition-all",
          aberto ? "border-success ring-2 ring-success/20" : "border-input"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "flex-1 truncate text-left",
                sel ? "text-foreground" : "text-muted-foreground"
              ),
              children: sel ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-success", children: codigoCliente(sel.id) }),
                " — ",
                sel.nome ?? "Sem nome"
              ] }) : loading ? "Carregando clientes..." : "Selecione ou busque um cliente..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-2 flex flex-shrink-0 items-center gap-1", children: [
            sel && /* @__PURE__ */ jsxRuntimeExports.jsx(
              X,
              {
                className: "h-4 w-4 text-muted-foreground hover:text-foreground",
                onClick: (e) => {
                  e.stopPropagation();
                  onChange("");
                  setBusca("");
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-xs text-muted-foreground transition-transform",
                  aberto && "rotate-180"
                ),
                children: "▼"
              }
            )
          ] })
        ]
      }
    ),
    aberto && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-md border bg-popover shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b px-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 flex-shrink-0 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            autoFocus: true,
            value: busca,
            onChange: (e) => setBusca(e.target.value),
            onClick: (e) => e.stopPropagation(),
            placeholder: "Buscar por nome ou CPF...",
            className: "flex-1 border-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          }
        ),
        busca && /* @__PURE__ */ jsxRuntimeExports.jsx(
          X,
          {
            className: "h-4 w-4 flex-shrink-0 cursor-pointer text-muted-foreground hover:text-foreground",
            onClick: () => setBusca("")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-60 overflow-y-auto", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-4 text-center text-sm text-muted-foreground", children: "Carregando..." }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-4 text-center text-sm text-muted-foreground", children: "Nenhum cliente encontrado" }) : filtrados.map((c) => {
        const ativo = String(value) === String(c.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              onChange(c.id);
              setBusca("");
              setAberto(false);
            },
            className: cn(
              "flex w-full items-center gap-3 border-l-[3px] px-3 py-2 text-left transition-colors hover:bg-muted",
              ativo ? "border-success bg-success/5" : "border-transparent"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    ativo ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
                  ),
                  children: (c.nome ?? "?").charAt(0).toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-sm font-medium text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1.5 font-bold text-success", children: codigoCliente(c.id) }),
                  c.nome ?? "Sem nome"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: c.cpf_cnpj ? formatCpfCnpj(c.cpf_cnpj) : "Sem CPF/CNPJ" })
              ] }),
              ativo && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 flex-shrink-0 text-success" })
            ]
          },
          c.id
        );
      }) })
    ] })
  ] });
}
function CardMetrica({
  label,
  valor,
  destaque
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-lg border p-3",
        destaque ? "border-2 border-success bg-success/5" : "border-border bg-muted/30"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "truncate text-base font-bold",
              destaque ? "text-success" : "text-foreground"
            ),
            children: valor
          }
        )
      ]
    }
  );
}
const INITIAL_FORM = {
  clienteId: "",
  valorPrincipal: "",
  taxaJuros: "",
  numParcelas: "",
  tipoJuros: "simples",
  periodicidade: "mensal",
  dataInicio: "",
  observacoes: ""
};
function extractPeriodicidade(obs) {
  if (!obs) return { periodicidade: "mensal", observacoes: "" };
  const match = obs.match(/^\[Periodicidade:\s*([^•\]]+)/i);
  let periodicidade = "mensal";
  if (match) {
    const label = match[1].trim().toLowerCase();
    if (label.startsWith("quinzen")) periodicidade = "quinzenal";
    else if (label.startsWith("seman")) periodicidade = "semanal";
    else if (label.startsWith("diár") || label.startsWith("diar"))
      periodicidade = "diario";
    else periodicidade = "mensal";
  }
  const cleaned = obs.replace(/^\[Periodicidade:[^\]]*\]\s*\n*/i, "").trim();
  return { periodicidade, observacoes: cleaned };
}
function NovoEmprestimoDialog({
  open,
  onOpenChange,
  emprestimo,
  defaultClienteId
}) {
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const queryClient = useQueryClient();
  const listClientesFn = useServerFn(listClientes);
  const createEmprestimoFn = useServerFn(createEmprestimo);
  const updateEmprestimoFn = useServerFn(updateEmprestimo);
  const isEdit = !!emprestimo;
  const clientesQuery = useQuery({
    queryKey: ["clientes", "list"],
    queryFn: () => listClientesFn(),
    enabled: open
  });
  const clientes = clientesQuery.data?.data ?? [];
  reactExports.useEffect(() => {
    if (!open) return;
    if (emprestimo) {
      const { periodicidade, observacoes } = extractPeriodicidade(
        emprestimo.observacoes
      );
      const tj = emprestimo.tipo_juros ?? "simples";
      setForm({
        clienteId: emprestimo.cliente_id ?? "",
        valorPrincipal: String(emprestimo.valor_principal ?? ""),
        taxaJuros: emprestimo.taxa_juros != null ? String(emprestimo.taxa_juros).replace(".", ",") : "",
        numParcelas: String(emprestimo.numero_parcelas ?? ""),
        tipoJuros: ["simples", "composto", "so_juros"].includes(
          tj
        ) ? tj : "simples",
        periodicidade,
        dataInicio: emprestimo.data_inicio ?? "",
        observacoes
      });
    } else {
      setForm({ ...INITIAL_FORM, clienteId: defaultClienteId ?? "" });
    }
  }, [open, emprestimo, defaultClienteId]);
  const resultado = reactExports.useMemo(
    () => calcular({
      valorPrincipal: form.valorPrincipal,
      taxaJuros: form.taxaJuros,
      numParcelas: form.numParcelas,
      tipoJuros: form.tipoJuros,
      periodicidade: form.periodicidade,
      dataInicio: form.dataInicio
    }),
    [form]
  );
  const cliente = clientes.find((c) => String(c.id) === String(form.clienteId));
  const podeSalvar = !!form.clienteId && !!resultado;
  const mutation = useMutation({
    mutationFn: async () => {
      if (!form.clienteId || !resultado) throw new Error("Dados inválidos");
      const parcelasPayload = resultado.parcelas.map((p) => ({
        numero: p.numero,
        data_vencimento: p.vencimentoIso,
        valor: Number(p.valor.toFixed(2))
      }));
      if (isEdit && emprestimo) {
        const res2 = await updateEmprestimoFn({
          data: {
            id: emprestimo.id,
            cliente_id: form.clienteId,
            valor_principal: parseFloat(form.valorPrincipal),
            taxa_juros: parseTaxa(form.taxaJuros),
            numero_parcelas: parseInt(form.numParcelas),
            tipo_juros: form.tipoJuros,
            periodicidade: form.periodicidade,
            data_inicio: form.dataInicio,
            observacoes: form.observacoes,
            parcelas: parcelasPayload
          }
        });
        if (!res2.ok) throw new Error(res2.error ?? "Erro ao atualizar empréstimo");
        return res2;
      }
      const res = await createEmprestimoFn({
        data: {
          cliente_id: form.clienteId,
          valor_principal: parseFloat(form.valorPrincipal),
          taxa_juros: parseTaxa(form.taxaJuros),
          numero_parcelas: parseInt(form.numParcelas),
          tipo_juros: form.tipoJuros,
          periodicidade: form.periodicidade,
          data_inicio: form.dataInicio,
          observacoes: form.observacoes,
          parcelas: parcelasPayload
        }
      });
      if (!res.ok) throw new Error(res.error ?? "Erro ao salvar empréstimo");
      return res;
    },
    onSuccess: () => {
      toast.success(
        isEdit ? "Empréstimo atualizado com sucesso!" : "Empréstimo cadastrado com sucesso!"
      );
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      queryClient.invalidateQueries({ queryKey: ["emprestimos", "list"] });
      onOpenChange(false);
    },
    onError: (err) => {
      toast.error(err.message || "Falha ao salvar empréstimo");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[92vh] max-w-5xl overflow-y-auto p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b bg-background p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "flex-row items-center gap-3 space-y-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-success text-success-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-lg", children: isEdit ? "Editar Empréstimo" : "Novo Empréstimo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: isEdit ? "Altere os dados e regenere as parcelas" : "Simulação gerada em tempo real" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-5 p-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "👤 Cliente" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Cliente *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ClienteCombobox,
            {
              value: form.clienteId,
              onChange: (id) => setForm((p) => ({ ...p, clienteId: id })),
              clientes,
              loading: clientesQuery.isLoading
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "💵 Dados Financeiros" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Valor Principal (R$) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "0,00",
                  value: form.valorPrincipal,
                  onChange: (e) => setForm((p) => ({ ...p, valorPrincipal: e.target.value })),
                  className: "h-11"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Taxa de Juros (%) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  inputMode: "decimal",
                  placeholder: "0,00",
                  value: form.taxaJuros,
                  onChange: (e) => setForm((p) => ({ ...p, taxaJuros: maskTaxa(e.target.value) })),
                  className: "h-11"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Número de Parcelas *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "Ex: 12",
                value: form.numParcelas,
                onChange: (e) => setForm((p) => ({ ...p, numParcelas: e.target.value })),
                className: "h-11"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "⚙️ Configurações" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Tipo de Juros *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["simples", "composto", "so_juros"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setForm((p) => ({ ...p, tipoJuros: t })),
                  className: cn(
                    "flex-1 rounded-md border-2 px-2 py-2 text-xs font-semibold transition-colors sm:text-sm",
                    form.tipoJuros === t ? "border-success bg-success/5 text-success" : "border-input bg-background text-muted-foreground hover:border-muted-foreground/40"
                  ),
                  children: t === "simples" ? "Simples" : t === "composto" ? "Composto" : "Só Juros"
                },
                t
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Data de Início *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  value: form.dataInicio,
                  onChange: (e) => setForm((p) => ({ ...p, dataInicio: e.target.value })),
                  className: "h-11"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Periodicidade *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-4", children: PERIODICIDADES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setForm((f) => ({ ...f, periodicidade: p.value })),
                className: cn(
                  "rounded-md border-2 px-2 py-2 text-xs font-semibold transition-colors",
                  form.periodicidade === p.value ? "border-success bg-success/5 text-success" : "border-input bg-background text-muted-foreground hover:border-muted-foreground/40"
                ),
                children: p.label
              },
              p.value
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-bold text-foreground", children: "📝 Observações" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              placeholder: "Adicione observações sobre este empréstimo...",
              value: form.observacoes,
              onChange: (e) => setForm((p) => ({ ...p, observacoes: e.target.value })),
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => onOpenChange(false),
              className: "flex-1",
              disabled: mutation.isPending,
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: () => mutation.mutate(),
              disabled: !podeSalvar || mutation.isPending,
              className: "flex-[2] bg-success text-success-foreground hover:bg-success/90",
              children: mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                " ",
                isEdit ? "Atualizando..." : "Salvando..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isEdit ? "💾 Atualizar Empréstimo" : "💾 Salvar Empréstimo" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-bold text-foreground", children: "📊 Resumo" }),
          !resultado ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-4xl", children: "📊" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "Preview em Tempo Real" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Preencha os campos para ver a simulação" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            cliente && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 rounded-md border-l-4 border-success bg-success/5 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-sm font-semibold text-success", children: [
              "👤 ",
              cliente.nome
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Valor Principal",
                  valor: fmtBRL$5(parseFloat(form.valorPrincipal) || 0)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Total de Juros",
                  valor: fmtBRL$5(resultado.totalJuros)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Valor da Parcela",
                  valor: fmtBRL$5(resultado.valorParcela)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMetrica,
                {
                  label: "Total a Pagar",
                  valor: fmtBRL$5(resultado.totalPagar),
                  destaque: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-md border-l-4 border-warning bg-warning/10 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground", children: [
              "⚠️ Juros",
              " ",
              form.tipoJuros === "simples" ? "Simples" : form.tipoJuros === "composto" ? "Compostos" : "Só Juros",
              " ",
              "•",
              " ",
              PERIODICIDADES.find((p) => p.value === form.periodicidade)?.label,
              " ",
              "• ",
              form.numParcelas,
              " parcela(s)"
            ] }) }),
            form.tipoJuros === "so_juros" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 rounded-md border-l-4 border-success bg-success/5 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: "💡 O cliente pagará apenas os juros mensais, quitando o capital principal na última parcela." }) })
          ] })
        ] }),
        resultado && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-bold text-foreground", children: "📅 Parcelas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 bg-muted/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold text-muted-foreground", children: "Nº" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold text-muted-foreground", children: "Vencimento" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold text-muted-foreground", children: "Valor" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: resultado.parcelas.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 font-bold text-success", children: [
                "#",
                String(p.numero).padStart(2, "0")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: p.vencimento }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fmtBRL$5(p.valor) }),
                p.ultima && form.tipoJuros === "so_juros" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-success", children: "Juros + Principal" })
              ] }) })
            ] }, p.numero)) })
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
}
function detectPlatform() {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua) || ua.includes("mac") && "ontouchend" in document) return "ios";
  if (/android/.test(ua)) return "android";
  if (/windows|macintosh|linux/.test(ua)) return "desktop";
  return "other";
}
function checkInstalled() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(display-mode: standalone)").matches) return true;
  if (window.navigator.standalone === true) return true;
  return false;
}
function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = reactExports.useState(null);
  const [isInstalled, setIsInstalled] = reactExports.useState(false);
  const [platform, setPlatform] = reactExports.useState("other");
  reactExports.useEffect(() => {
    setIsInstalled(checkInstalled());
    setPlatform(detectPlatform());
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const onInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    const mql = window.matchMedia?.("(display-mode: standalone)");
    const onChange = () => setIsInstalled(checkInstalled());
    mql?.addEventListener?.("change", onChange);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      mql?.removeEventListener?.("change", onChange);
    };
  }, []);
  const install = reactExports.useCallback(async () => {
    if (!deferredPrompt) return { outcome: "unavailable" };
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") setDeferredPrompt(null);
    return { outcome: choice.outcome };
  }, [deferredPrompt]);
  const canInstall = !isInstalled && (!!deferredPrompt || platform === "ios");
  return { canInstall, isInstalled, platform, install, hasNativePrompt: !!deferredPrompt };
}
function InstallAppButton({ className, alwaysShow = true }) {
  const { canInstall, isInstalled, platform, install, hasNativePrompt } = usePwaInstall();
  const [iosOpen, setIosOpen] = reactExports.useState(false);
  if (isInstalled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        disabled: true,
        className: cn("gap-1.5 cursor-default opacity-100", className),
        "aria-label": "Aplicativo já instalado",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "App Instalado" })
        ]
      }
    );
  }
  if (!canInstall && !alwaysShow) return null;
  const handleClick = async () => {
    if (hasNativePrompt) {
      await install();
      return;
    }
    setIosOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: handleClick,
        className: cn("gap-1.5", className),
        "aria-label": "Instalar aplicativo",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Instalar App" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: iosOpen, onOpenChange: setIosOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Instalar JuroPro" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: platform === "ios" ? "Adicione o JuroPro à sua tela inicial em poucos passos." : "Para instalar, use o menu do seu navegador." })
      ] }),
      platform === "ios" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-3 text-sm text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground", children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            "Toque no botão ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share, { className: "inline h-4 w-4" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compartilhar" }),
            "na barra do Safari."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground", children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            "Role e selecione ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "inline h-4 w-4" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Adicionar à Tela de Início" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground", children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Confirme em ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Adicionar" }),
            ". Pronto! O ícone do JuroPro aparecerá na sua tela inicial."
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "No Chrome/Edge: clique no ícone ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "inline h-4 w-4" }),
          " na barra de endereço, ou abra o menu (⋮) e selecione ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"Instalar JuroPro"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "No Firefox/Android: abra o menu e selecione",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"Adicionar à tela inicial"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Caso a opção não apareça, tente recarregar a página ou verifique se já está instalado." })
      ] })
    ] }) })
  ] });
}
const getDashboardKpis = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("71437cf5e050460b36284e715ee0c59160813dc2274fab9a6c44b7155dc4de56"));
const getDashboardCharts = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("d3492b7465088ca6a45b2f95c00a6742dde1a18f6a2791958784453de1d4d82f"));
const Route$7 = createFileRoute("/_authed/")({
  head: () => ({
    meta: [
      { title: "JuroPro — Dashboard de Gestão de Empréstimos" },
      {
        name: "description",
        content: "JuroPro: plataforma profissional para gestão de empréstimos, contratos, clientes e vencimentos."
      }
    ]
  }),
  // Sem loader SSR: as queries só rodam no client após a sessão Supabase
  // estar hidratada (ver AuthGuard). Isto evita 401 durante SSR.
  component: Dashboard
});
const formatNumber = (n) => new Intl.NumberFormat("pt-BR").format(n);
function buildKpis(data) {
  return [
    {
      label: "Vencimentos Hoje",
      value: formatNumber(data.vencimentosHoje),
      hint: "Parcelas com vencimento hoje",
      icon: CalendarClock,
      tone: "warning",
      empty: data.vencimentosHoje === 0,
      to: "/vencimentos"
    },
    {
      label: "Parcelas Atrasadas",
      value: formatNumber(data.parcelasAtrasadas),
      hint: "Pendentes vencidas + status atrasado",
      icon: TriangleAlert,
      tone: "destructive",
      empty: data.parcelasAtrasadas === 0,
      to: "/vencimentos",
      search: { status: "atrasado" }
    },
    {
      label: "Total de Clientes",
      value: formatNumber(data.totalClientes),
      hint: "Carteira ativa",
      icon: Users,
      tone: "info",
      empty: data.totalClientes === 0,
      to: "/clientes"
    },
    {
      label: "Contratos Ativos",
      value: formatNumber(data.contratosAtivos),
      hint: "Empréstimos com status ativo",
      icon: FileText,
      tone: "success",
      empty: data.contratosAtivos === 0,
      to: "/contratos"
    }
  ];
}
const EMERALD = "oklch(0.62 0.15 160)";
const EMERALD_GLOW = "oklch(0.7 0.16 160)";
const NAVY = "oklch(0.32 0.08 255)";
const NAVY_GLOW = "oklch(0.5 0.14 255)";
const formatBRL = (v) => {
  if (v >= 1e6) return `R$ ${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e3) return `R$ ${(v / 1e3).toFixed(0)}k`;
  return `R$ ${v.toLocaleString("pt-BR")}`;
};
function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const { profile } = useProfile();
  const { name: adminName, defaultName } = useAdminName();
  const authReady = !authLoading && !!user;
  const displayName = profile?.nome || (adminName && adminName !== defaultName ? adminName : null) || user?.email?.split("@")[0] || "Usuário";
  const firstName = displayName.split(" ")[0];
  const kpisQ = useQuery({
    queryKey: ["dashboard", "kpis"],
    queryFn: () => getDashboardKpis(),
    enabled: authReady
  });
  const chartsQ = useQuery({
    queryKey: ["dashboard", "charts"],
    queryFn: () => getDashboardCharts(),
    staleTime: 6e4,
    enabled: authReady
  });
  const [novoEmprestimoOpen, setNovoEmprestimoOpen] = reactExports.useState(false);
  const [valuesHidden, setValuesHidden] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      const saved = window.localStorage.getItem("juropro:hide_values");
      if (saved === "1") setValuesHidden(true);
    } catch {
    }
  }, []);
  const toggleValues = () => {
    setValuesHidden((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem("juropro:hide_values", next ? "1" : "0");
      } catch {
      }
      return next;
    });
  };
  if (!authReady || kpisQ.isLoading || chartsQ.isLoading || !kpisQ.data || !chartsQ.data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }) });
  }
  const data = kpisQ.data;
  const charts = chartsQ.data;
  const kpis = buildKpis(data);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, { className: "text-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-medium text-muted-foreground", children: "Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InstallAppButton, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => setNovoEmprestimoOpen(true),
                className: "bg-success text-success-foreground shadow-sm hover:bg-success/90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Novo Empréstimo" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-success text-success-foreground shadow-sm hover:bg-success/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/clientes", search: { novo: true }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Novo Cliente" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 space-y-6 p-4 md:p-6 lg:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: [
                "Olá, ",
                firstName,
                " 👋"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Visão geral da operação — atualizado agora." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "icon",
                  onClick: toggleValues,
                  "aria-pressed": valuesHidden,
                  "aria-label": valuesHidden ? "Mostrar valores" : "Ocultar valores",
                  children: valuesHidden ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: valuesHidden ? "Mostrar valores" : "Ocultar valores" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4", children: kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { ...k, hidden: valuesHidden }, k.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AreaChartCard,
            {
              title: "Evolução de Novos Clientes",
              subtitle: "Últimos 12 meses — total por mês",
              data: charts.novosClientes,
              color: EMERALD,
              colorGlow: EMERALD_GLOW,
              gradientId: "emeraldFill",
              tooltipLabel: "Novos clientes"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 xl:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AreaChartCard,
              {
                title: "Número de Contratos",
                subtitle: "Contratos firmados por mês",
                data: charts.contratos,
                color: NAVY,
                colorGlow: NAVY_GLOW,
                gradientId: "navyFill",
                tooltipLabel: "Contratos"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AreaChartCard,
              {
                title: "Volume Financeiro (R$)",
                subtitle: "Valor total emprestado por mês",
                data: charts.volume,
                color: EMERALD,
                colorGlow: EMERALD_GLOW,
                gradientId: "volumeFill",
                formatValue: formatBRL,
                tooltipLabel: "Volume"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AreaChartCard,
            {
              title: "Recebimentos",
              subtitle: "Total recebido por mês — últimos 12 meses",
              data: charts.recebimentos,
              color: EMERALD,
              colorGlow: EMERALD_GLOW,
              gradientId: "recebimentosFill",
              formatValue: formatBRL,
              tooltipLabel: "Recebido"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NovoEmprestimoDialog,
      {
        open: novoEmprestimoOpen,
        onOpenChange: setNovoEmprestimoOpen
      }
    )
  ] });
}
const Select = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator$1.displayName;
const AlertDialog = Root2$1;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2$2,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = Content2$2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title2,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description2,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
const PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100];
function TablePagination({
  page,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  itemLabel = "registros"
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = totalItems === 0 ? 0 : (current - 1) * pageSize + 1;
  const end = Math.min(current * pageSize, totalItems);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch justify-between gap-3 border-t bg-muted/20 px-3 py-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Itens por página:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Por página:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: String(pageSize),
          onValueChange: (v) => onPageSizeChange(Number(v)),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PAGE_SIZE_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(s), children: s }, s)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden md:inline", children: [
        "• ",
        start,
        "-",
        end,
        " de ",
        totalItems,
        " ",
        itemLabel
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground md:hidden", children: [
        start,
        "-",
        end,
        " / ",
        totalItems
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          variant: "outline",
          className: "h-8 gap-1",
          disabled: current <= 1,
          onClick: () => onPageChange(current - 1),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Anterior" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
        "Página ",
        current,
        " de ",
        totalPages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          variant: "outline",
          className: "h-8 gap-1",
          disabled: current >= totalPages,
          onClick: () => onPageChange(current + 1),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Próxima" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] })
  ] });
}
const listParcelas = createServerFn({
  method: "GET"
}).middleware([requireAuthForExternal]).handler(createSsrRpc("d25d4ea40f20001bf463e584578af767aafdf779dce0fcf0384aad8000be6170"));
const baixaSchema = objectType({
  id: unionType([stringType().min(1), numberType()]),
  data_pagamento: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_pago: numberType().min(0)
});
const baixaParcela = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => baixaSchema.parse(input)).handler(createSsrRpc("0b71c1c09ef5d550a1257a9fb3ea9ef66621cd179d29ad2a8abb100078b9ae99"));
const estornoSchema = objectType({
  id: unionType([stringType().min(1), numberType()])
});
const estornoParcela = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => estornoSchema.parse(input)).handler(createSsrRpc("98784c10cf13daa9b7ed3c1721e96cd0091c1866f9f92b5502c340b6a0eb7114"));
const ALLOWED_STATUS = [
  "todos",
  "pago",
  "atrasado",
  "hoje",
  "avencer"
];
const Route$6 = createFileRoute("/_authed/vencimentos")({
  head: () => ({
    meta: [{ title: "Vencimentos — JuroPro" }]
  }),
  validateSearch: (search) => {
    const raw = search.status;
    if (typeof raw === "string" && ALLOWED_STATUS.includes(raw)) {
      return { status: raw };
    }
    return {};
  },
  component: VencimentosPage
});
const fmtBRL$4 = (v) => Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const fmtDate$3 = (iso) => {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return "—";
  return `${d}/${m}/${y}`;
};
const todayISO = () => {
  const d = /* @__PURE__ */ new Date();
  d.setHours(0, 0, 0, 0);
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return `${y}-${mo}-${da}`;
};
function computeStatus(p) {
  if (p.status === "pago" || p.status === "paga") return "pago";
  const today = todayISO();
  if (!p.data_vencimento) return "avencer";
  if (p.data_vencimento < today) return "atrasado";
  if (p.data_vencimento === today) return "hoje";
  return "avencer";
}
const STATUS_STYLES = {
  pago: {
    label: "Recebido",
    cls: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    dot: "bg-emerald-500"
  },
  atrasado: {
    label: "Atrasado",
    cls: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
    dot: "bg-red-500"
  },
  hoje: {
    label: "Vence Hoje",
    cls: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    dot: "bg-amber-500"
  },
  avencer: {
    label: "A Vencer",
    cls: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    dot: "bg-blue-500"
  }
};
function VencimentosPage() {
  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const queryClient = useQueryClient();
  const listFn = useServerFn(listParcelas);
  const searchParams = Route$6.useSearch();
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listFn(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const { name: adminName } = useAdminName();
  const [busca, setBusca] = reactExports.useState("");
  const [filtroStatus, setFiltroStatus] = reactExports.useState(
    searchParams.status ?? "todos"
  );
  const [sortKey, setSortKey] = reactExports.useState("data_vencimento");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(10);
  const [modalParcela, setModalParcela] = reactExports.useState(null);
  const [estornoParcelaState, setEstornoParcelaState] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (searchParams.status) {
      setFiltroStatus(searchParams.status);
      setPagina(1);
    }
  }, [searchParams.status]);
  const processadas = reactExports.useMemo(() => {
    return (data?.data ?? []).map((p) => ({ ...p, statusCalc: computeStatus(p) }));
  }, [data]);
  const filtradas = reactExports.useMemo(() => {
    const termo = busca.trim().toLowerCase();
    let base = processadas;
    if (filtroStatus !== "todos") {
      base = base.filter((p) => p.statusCalc === filtroStatus);
    }
    if (termo) {
      base = base.filter(
        (p) => (p.cliente_nome ?? "").toLowerCase().includes(termo) || p.contrato_codigo.toLowerCase().includes(termo)
      );
    }
    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (p) => {
      switch (sortKey) {
        case "cliente_nome":
          return (p.cliente_nome ?? "").toLowerCase();
        case "contrato_codigo":
          return p.contrato_codigo.toLowerCase();
        case "numero_parcela":
          return p.numero_parcela;
        case "data_vencimento":
          return p.data_vencimento ? new Date(p.data_vencimento).getTime() : 0;
        case "valor_parcela":
          return p.valor_parcela;
        case "valor_minimo":
          return p.valor_minimo;
        case "statusCalc":
          return p.statusCalc;
        case "data_pagamento":
          return p.data_pagamento ? new Date(p.data_pagamento).getTime() : 0;
        case "valor_pago":
          return p.valor_pago ?? 0;
        default:
          return 0;
      }
    };
    return [...base].sort((a2, b) => {
      const av = getVal(a2);
      const bv = getVal(b);
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [processadas, busca, filtroStatus, sortKey, sortDir]);
  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / porPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const paginadas = filtradas.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina);
  const handleSort = (key) => {
    if (sortKey === key) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPagina(1);
  };
  const kpis = reactExports.useMemo(() => {
    const today = todayISO();
    const ano = today.slice(0, 4);
    const mes = today.slice(5, 7);
    const noMes = (iso) => iso != null && iso.startsWith(`${ano}-${mes}`);
    const aReceber = processadas.filter((p) => p.statusCalc !== "pago" && noMes(p.data_vencimento)).reduce((s, p) => s + p.valor_parcela, 0);
    const vencendoHoje = processadas.filter((p) => p.statusCalc === "hoje").reduce((s, p) => s + p.valor_parcela, 0);
    const atrasadas = processadas.filter((p) => p.statusCalc === "atrasado").length;
    const recebidasMes = processadas.filter(
      (p) => p.statusCalc === "pago" && noMes(p.data_pagamento)
    ).length;
    return { aReceber, vencendoHoje, atrasadas, recebidasMes };
  }, [processadas]);
  const footer = reactExports.useMemo(() => {
    const pend = processadas.filter((p) => p.statusCalc !== "pago");
    const pago = processadas.filter((p) => p.statusCalc === "pago");
    return {
      emAberto: pend.reduce((s, p) => s + p.valor_parcela, 0),
      minimoTotal: pend.reduce((s, p) => s + p.valor_minimo, 0),
      totalPago: pago.reduce((s, p) => s + (p.valor_pago ?? 0), 0)
    };
  }, [processadas]);
  const baixaMutation = useMutation({
    mutationFn: (input) => baixaParcela({ data: input }),
    onSuccess: (res) => {
      if (!res.ok) {
        toast.error(res.error ?? "Falha ao registrar baixa.");
        return;
      }
      toast.success("Baixa registrada com sucesso!");
      setModalParcela(null);
      queryClient.invalidateQueries({ queryKey: ["parcelas"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["emprestimos"] });
    },
    onError: (e) => {
      toast.error(e instanceof Error ? e.message : "Erro inesperado.");
    }
  });
  const estornoMutation = useMutation({
    mutationFn: (input) => estornoParcela({ data: input }),
    onSuccess: (res) => {
      if (!res.ok) {
        toast.error(res.error ?? "Falha ao estornar pagamento.");
        return;
      }
      toast.success("Pagamento estornado com sucesso!");
      setEstornoParcelaState(null);
      queryClient.invalidateQueries({ queryKey: ["parcelas"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["emprestimos"] });
    },
    onError: (e) => {
      toast.error(e instanceof Error ? e.message : "Erro inesperado.");
    }
  });
  const buildWhatsAppLink = (p) => {
    const tel = (p.cliente_telefone ?? "").replace(/\D/g, "");
    if (!tel) return null;
    const nomeCli = p.cliente_nome ?? "Cliente";
    const venc = fmtDate$3(p.data_vencimento);
    const parcelaStr = `${p.numero_parcela}/${p.parcelas_total || p.numero_parcela}`;
    const msg = `Olá ${nomeCli}, lembramos que sua parcela ${parcelaStr} do contrato ${p.contrato_codigo} no valor de ${fmtBRL$4(p.valor_parcela)} vence em ${venc}. Qualquer dúvida, estamos à disposição.

Atenciosamente, ${adminName} - JuroPro.`;
    return `https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-x-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold text-foreground", children: "Vencimentos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-3 md:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$3,
              {
                label: "A Receber (Mês)",
                value: fmtBRL$4(kpis.aReceber),
                icon: TrendingUp,
                accent: "info"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$3,
              {
                label: "Vencendo Hoje",
                value: fmtBRL$4(kpis.vencendoHoje),
                icon: CalendarClock,
                accent: "warning"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$3,
              {
                label: "Atrasadas",
                value: String(kpis.atrasadas),
                icon: TriangleAlert,
                accent: "destructive"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$3,
              {
                label: "Recebidas (Mês)",
                value: String(kpis.recebidasMes),
                icon: CircleCheck,
                accent: "success"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: busca,
                  onChange: (e) => {
                    setBusca(e.target.value);
                    setPagina(1);
                  },
                  placeholder: "Buscar por cliente ou contrato...",
                  className: "pl-9"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: filtroStatus,
                onValueChange: (v) => {
                  setFiltroStatus(v);
                  setPagina(1);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "sm:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filtrar status" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "todos", children: "Todos os status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "atrasado", children: "Atrasadas" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hoje", children: "Vence hoje" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "avencer", children: "A vencer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pago", children: "Recebidas" })
                  ] })
                ]
              }
            )
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center rounded-xl border border-border bg-card p-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Carregando parcelas..." })
          ] }) : isError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-8 w-8 text-destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error instanceof Error ? error.message : "Erro ao carregar parcelas." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => refetch(), children: "Tentar novamente" })
          ] }) : data?.error ?? null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-8 w-8 text-destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: data?.error })
          ] }) : filtradas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border bg-card p-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "mx-auto mb-3 h-10 w-10 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 text-base font-semibold text-foreground", children: "Nenhuma parcela encontrada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: busca || filtroStatus !== "todos" ? "Tente ajustar os filtros." : "Quando criar contratos, as parcelas aparecerão aqui." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-hidden rounded-xl border border-border bg-card md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "cliente_nome", current: sortKey, dir: sortDir, onSort: handleSort, children: "Cliente" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "contrato_codigo", current: sortKey, dir: sortDir, onSort: handleSort, children: "Contrato" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "numero_parcela", current: sortKey, dir: sortDir, onSort: handleSort, children: "Parcela" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "data_vencimento", current: sortKey, dir: sortDir, onSort: handleSort, children: "Vencimento" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "valor_parcela", current: sortKey, dir: sortDir, onSort: handleSort, children: "Valor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "valor_minimo", current: sortKey, dir: sortDir, onSort: handleSort, children: "Mínimo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "statusCalc", current: sortKey, dir: sortDir, onSort: handleSort, children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "data_pagamento", current: sortKey, dir: sortDir, onSort: handleSort, children: "Pagamento" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { sortKey: "valor_pago", current: sortKey, dir: sortDir, onSort: handleSort, children: "Valor Pago" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Ações" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginadas.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                RowDesktop$1,
                {
                  item: p,
                  onBaixa: () => setModalParcela(p),
                  onEstorno: () => setEstornoParcelaState(p),
                  buildWhatsAppLink
                },
                String(p.id)
              )) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 md:hidden", children: paginadas.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CardMobile$1,
              {
                item: p,
                onBaixa: () => setModalParcela(p),
                onEstorno: () => setEstornoParcelaState(p),
                buildWhatsAppLink
              },
              String(p.id)
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TablePagination,
              {
                page: paginaAtual,
                pageSize: porPagina,
                totalItems: filtradas.length,
                onPageChange: (p) => setPagina(p),
                onPageSizeChange: (s) => {
                  setPorPagina(s);
                  setPagina(1);
                },
                itemLabel: "parcelas"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FooterBox, { label: "Em Aberto", value: fmtBRL$4(footer.emAberto), tone: "info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FooterBox, { label: "Mínimo Total (Juros)", value: fmtBRL$4(footer.minimoTotal), tone: "warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FooterBox, { label: "Total Pago", value: fmtBRL$4(footer.totalPago), tone: "success" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaixaDialog,
      {
        parcela: modalParcela,
        onClose: () => setModalParcela(null),
        onConfirm: (payload) => modalParcela && baixaMutation.mutate({
          id: modalParcela.id,
          data_pagamento: payload.data_pagamento,
          valor_pago: payload.valor_pago
        }),
        isLoading: baixaMutation.isPending
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: !!estornoParcelaState,
        onOpenChange: (open) => {
          if (!open && !estornoMutation.isPending) setEstornoParcelaState(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-5 w-5 text-amber-600" }),
              "Estornar Pagamento"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
              "Deseja estornar este pagamento? A parcela voltará ao status",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pendente" }),
              " e o valor pago será zerado.",
              estornoParcelaState && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 block rounded-md bg-muted/50 p-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: estornoParcelaState.cliente_nome ?? "Cliente" }),
                " •",
                " ",
                estornoParcelaState.contrato_codigo,
                " • Parcela",
                " ",
                estornoParcelaState.numero_parcela,
                "/",
                estornoParcelaState.parcelas_total || estornoParcelaState.numero_parcela,
                " — ",
                fmtBRL$4(estornoParcelaState.valor_pago ?? estornoParcelaState.valor_parcela)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: estornoMutation.isPending, children: "Cancelar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                disabled: estornoMutation.isPending,
                onClick: (e) => {
                  e.preventDefault();
                  if (estornoParcelaState) {
                    estornoMutation.mutate({ id: estornoParcelaState.id });
                  }
                },
                className: "bg-amber-600 hover:bg-amber-700",
                children: estornoMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Estornando..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "mr-2 h-4 w-4" }),
                  "Confirmar Estorno"
                ] })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function Th({
  children,
  sortKey,
  current,
  dir,
  onSort
}) {
  const active = current === sortKey;
  const Icon2 = !active ? ArrowUpDown : dir === "asc" ? ArrowUp : ArrowDown;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => onSort(sortKey),
      className: cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
      ),
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-3 w-3" })
      ]
    }
  ) });
}
function StatusBadge$1({ status }) {
  const s = STATUS_STYLES[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold", s.cls), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", s.dot) }),
    s.label
  ] });
}
function WhatsAppIcon$1({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 32 32", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.8 5.5 6.3 10 6.3 15.6C6.3 17.4 6.8 19.2 7.7 20.8L6.2 26L11.5 24.5C13 25.3 14.7 25.8 16.4 25.8C21.9 25.8 26.4 21.3 26.4 15.7C26.5 13 25.4 10.4 23.5 8.5ZM16.4 24C14.9 24 13.4 23.6 12.1 22.8L11.8 22.6L8.6 23.5L9.5 20.4L9.3 20C8.4 18.7 7.9 17.2 7.9 15.6C7.9 10.9 11.7 7.1 16.4 7.1C18.7 7.1 20.8 8 22.4 9.6C24 11.2 24.9 13.3 24.9 15.6C24.9 20.4 21.1 24 16.4 24ZM21.1 17.8C20.8 17.6 19.4 16.9 19.1 16.8C18.8 16.7 18.6 16.6 18.4 16.9C18.2 17.2 17.7 17.8 17.5 18C17.3 18.2 17.1 18.3 16.8 18.1C16.5 18 15.5 17.6 14.3 16.6C13.4 15.8 12.8 14.8 12.6 14.5C12.4 14.2 12.6 14 12.8 13.8L13.2 13.3C13.3 13.2 13.4 13 13.5 12.8C13.6 12.6 13.5 12.5 13.5 12.3C13.4 12.1 12.8 10.7 12.5 10.1C12.3 9.6 12 9.6 11.8 9.6H11.3C11.1 9.6 10.8 9.7 10.5 10C10.2 10.3 9.5 11 9.5 12.4C9.5 13.8 10.5 15.1 10.7 15.4C10.9 15.7 12.8 18.6 15.7 19.8C16.4 20.1 17 20.3 17.4 20.5C18.1 20.7 18.8 20.7 19.3 20.6C19.9 20.5 21.1 19.9 21.4 19.2C21.7 18.5 21.7 17.9 21.6 17.8C21.5 17.8 21.3 17.9 21.1 17.8Z" }) });
}
function RowActions({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink,
  variant = "desktop"
}) {
  const pago = item.statusCalc === "pago";
  const wppLink = buildWhatsAppLink(item);
  const isMobile = variant === "mobile";
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full grid-cols-2 gap-2", children: [
      wppLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: wppLink,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Enviar WhatsApp",
          className: "inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon$1, { className: "h-4 w-4" }),
            "WhatsApp"
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          disabled: true,
          className: "h-9 gap-1.5 opacity-40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon$1, { className: "h-4 w-4" }),
            "Sem telefone"
          ]
        }
      ),
      pago ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          onClick: onEstorno,
          "aria-label": "Estornar pagamento",
          className: "h-9 gap-1.5 border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-900 dark:text-amber-300 dark:hover:bg-amber-950",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-4 w-4" }),
            "Estornar"
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          onClick: onBaixa,
          className: "h-9 gap-1.5 bg-emerald-600 text-white hover:bg-emerald-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
            "Receber"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
    wppLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: wppLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Enviar WhatsApp",
        className: "inline-flex h-8 w-8 items-center justify-center rounded-md text-emerald-600 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon$1, { className: "h-4 w-4" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "icon",
        disabled: true,
        "aria-label": "Cliente sem telefone",
        className: "h-8 w-8 opacity-40",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon$1, { className: "h-4 w-4" })
      }
    ),
    pago ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: onEstorno,
        "aria-label": "Estornar pagamento",
        title: "Estornar pagamento",
        className: "h-8 w-8 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-4 w-4" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: onBaixa,
        "aria-label": "Confirmar pagamento",
        className: "h-8 w-8 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" })
      }
    )
  ] });
}
function RowDesktop$1({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-b-0 hover:bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium text-foreground", children: item.cliente_nome ?? "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground", children: item.contrato_codigo }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-muted-foreground", children: [
      item.numero_parcela,
      "/",
      item.parcelas_total || item.numero_parcela
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground", children: fmtDate$3(item.data_vencimento) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-semibold text-foreground", children: fmtBRL$4(item.valor_parcela) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-amber-600", children: fmtBRL$4(item.valor_minimo) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge$1, { status: item.statusCalc }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground", children: fmtDate$3(item.data_pagamento) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-emerald-600", children: item.valor_pago != null ? fmtBRL$4(item.valor_pago) : "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      RowActions,
      {
        item,
        onBaixa,
        onEstorno,
        buildWhatsAppLink
      }
    ) })
  ] });
}
function CardMobile$1({
  item,
  onBaixa,
  onEstorno,
  buildWhatsAppLink
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold text-foreground", children: item.cliente_nome ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          item.contrato_codigo,
          " • Parcela ",
          item.numero_parcela,
          "/",
          item.parcelas_total || item.numero_parcela
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge$1, { status: item.statusCalc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Vencimento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtDate$3(item.data_vencimento) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Valor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtBRL$4(item.valor_parcela) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Mínimo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-amber-600", children: fmtBRL$4(item.valor_minimo) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Pagamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: item.valor_pago != null ? fmtBRL$4(item.valor_pago) : "—" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center justify-end border-t border-border pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      RowActions,
      {
        item,
        onBaixa,
        onEstorno,
        buildWhatsAppLink,
        variant: "mobile"
      }
    ) })
  ] });
}
function KpiBox$3({
  label,
  value,
  icon: Icon2,
  accent
}) {
  const accentStyles = {
    info: "border-t-blue-500 text-blue-600",
    warning: "border-t-amber-500 text-amber-600",
    destructive: "border-t-red-500 text-red-600",
    success: "border-t-emerald-500 text-emerald-600"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border border-border border-t-4 bg-card p-4 shadow-sm", accentStyles[accent]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-extrabold text-foreground", children: value })
  ] });
}
function FooterBox({
  label,
  value,
  tone
}) {
  const toneStyles2 = {
    info: "text-blue-600",
    warning: "text-amber-600",
    success: "text-emerald-600"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-2xl font-extrabold", toneStyles2[tone]), children: value })
  ] });
}
function BaixaDialog({
  parcela,
  onClose,
  onConfirm,
  isLoading
}) {
  const [dataPag, setDataPag] = reactExports.useState(todayISO());
  const [valorPag, setValorPag] = reactExports.useState("0");
  reactExports.useEffect(() => {
    if (parcela) {
      setDataPag(todayISO());
      setValorPag(parcela.valor_parcela.toFixed(2));
    }
  }, [parcela]);
  const valorNum = parseFloat(valorPag) || 0;
  const diferenca = parcela ? parcela.valor_parcela - valorNum : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog,
    {
      open: !!parcela,
      onOpenChange: (open) => {
        if (!open) onClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-emerald-600" }),
            "Confirmar Baixa"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
            parcela?.cliente_nome ?? "Cliente",
            " • Parcela ",
            parcela?.numero_parcela,
            "/",
            parcela?.parcelas_total || parcela?.numero_parcela
          ] })
        ] }),
        parcela && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Contrato", value: parcela.contrato_codigo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Info,
                {
                  label: "Parcela",
                  value: `${parcela.numero_parcela}/${parcela.parcelas_total || parcela.numero_parcela}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Vencimento", value: fmtDate$3(parcela.data_vencimento) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Valor", value: fmtBRL$4(parcela.valor_parcela) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 border-t border-border pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: "Mínimo (Juros)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-amber-600", children: fmtBRL$4(parcela.valor_minimo) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "data-pagamento", children: "Data do Pagamento" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "data-pagamento",
                  type: "date",
                  value: dataPag,
                  onChange: (e) => setDataPag(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "valor-pago", children: "Valor Pago (R$)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "valor-pago",
                  type: "number",
                  step: "0.01",
                  min: "0",
                  value: valorPag,
                  onChange: (e) => setValorPag(e.target.value)
                }
              ),
              diferenca > 5e-3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-xs text-amber-600", children: [
                "⚠️ Pagamento parcial — diferença de ",
                fmtBRL$4(diferenca)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, disabled: isLoading, children: "Cancelar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => onConfirm({
                  data_pagamento: dataPag,
                  valor_pago: valorNum
                }),
                disabled: isLoading || !dataPag || valorNum < 0,
                className: "bg-emerald-600 hover:bg-emerald-700",
                children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Salvando..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-2 h-4 w-4" }),
                  "Confirmar Recebimento"
                ] })
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function Info({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: value })
  ] });
}
const Route$5 = createFileRoute("/_authed/suporte")({
  head: () => ({
    meta: [{ title: "Suporte — JuroPro" }]
  }),
  component: SuportePage
});
const APP_VERSION = "1.0.0";
const WHATSAPP_URL = "https://wa.me/5573981444091?text=" + encodeURIComponent(
  "Olá, sou usuário do JuroPro e preciso de suporte técnico."
);
function SuportePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-14 items-center gap-3 border-b bg-card px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Headset, { className: "h-5 w-5 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold sm:text-lg", children: "Suporte" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-4xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border bg-card p-6 text-center shadow-sm md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success md:h-20 md:w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Headset, { className: "h-8 w-8 md:h-10 md:w-10" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground md:text-3xl", children: "Suporte Técnico" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground md:text-base", children: "Estamos aqui para ajudar você. Fale conosco pelo WhatsApp e receba atendimento rápido." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              size: "lg",
              className: "mt-6 h-14 gap-3 px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]",
              style: { backgroundColor: "#25D366" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: WHATSAPP_URL,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
                    "Falar no WhatsApp"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Horário de atendimento: Segunda a Sexta, das 08h às 18h" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:suporte@juropro.com.br",
              className: "group rounded-xl border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "E-mail" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 truncate text-sm text-muted-foreground", children: "suporte@juropro.com.br" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Resposta em até 24h úteis" })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://docs.juropro.com.br",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group rounded-xl border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-info/10 text-info group-hover:bg-info group-hover:text-info-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Documentação" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 truncate text-sm text-muted-foreground", children: "docs.juropro.com.br" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Guias, tutoriais e perguntas frequentes" })
                ] })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "rounded-2xl border p-5 text-white shadow-md md:p-6",
            style: {
              background: "linear-gradient(135deg, #1e3a5f 0%, #16243d 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-white/60", children: "Versão do aplicativo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xl font-bold", children: [
                  "JuroPro v",
                  APP_VERSION
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-white/60", children: "Gestão profissional de empréstimos" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-success" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
                  "Sistema Online"
                ] })
              ] })
            ] })
          }
        )
      ] }) })
    ] })
  ] }) });
}
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Tabs = Root2$2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger$2,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger$2.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const Popover = Root2$3;
const PopoverTrigger = Trigger$3;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$3, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2$3,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content2$3.displayName;
const Command = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = _e.displayName;
const CommandInput = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    _e.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = _e.Input.displayName;
const CommandList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = _e.List.displayName;
const CommandEmpty = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = _e.Empty.displayName;
const CommandGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = _e.Group.displayName;
const CommandSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = _e.Separator.displayName;
const CommandItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = _e.Item.displayName;
const fmtBRL$3 = (v) => Number(v || 0).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const fmtDate$2 = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};
const fmtTel = (tel) => {
  if (!tel) return "—";
  const digits = tel.replace(/\D/g, "");
  if (digits.length === 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length === 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return tel;
};
const tipoJurosLabel = (t) => {
  switch ((t ?? "").toLowerCase()) {
    case "simples":
      return "Simples";
    case "composto":
      return "Composto";
    case "so_juros":
      return "Só Juros";
    default:
      return t ?? "—";
  }
};
function ContratoPdfDialog({
  open,
  onOpenChange,
  contrato,
  contratoCodigo,
  parcelas,
  cliente
}) {
  const { name: adminName } = useAdminName();
  const { name: businessName } = useBusinessName();
  const { logo: businessLogo } = useBusinessLogo();
  const { details: businessDetails } = useBusinessDetails();
  const enderecoNegocio = reactExports.useMemo(() => {
    const partes = [
      businessDetails.endereco,
      businessDetails.numero,
      businessDetails.complemento,
      businessDetails.bairro
    ].filter((s) => s && s.trim().length > 0);
    return partes.join(", ");
  }, [businessDetails]);
  const cidadeUfNegocio = reactExports.useMemo(() => {
    if (!businessDetails.cidade) return "";
    return businessDetails.uf ? `${businessDetails.cidade} / ${businessDetails.uf}` : businessDetails.cidade;
  }, [businessDetails]);
  const parcelasContrato = reactExports.useMemo(
    () => contrato ? parcelas.filter((p) => String(p.emprestimo_id) === String(contrato.id)).sort((a2, b) => a2.numero_parcela - b.numero_parcela) : [],
    [parcelas, contrato]
  );
  const valorTotal = reactExports.useMemo(() => {
    if (!contrato) return 0;
    if (parcelasContrato.length > 0)
      return parcelasContrato.reduce((s, p) => s + p.valor_parcela, 0);
    return contrato.valor_principal * (1 + contrato.taxa_juros / 100 * contrato.numero_parcelas);
  }, [contrato, parcelasContrato]);
  const handlePrint = () => {
    const conteudo = document.getElementById("contrato-print-area")?.innerHTML;
    if (!conteudo) return;
    const win = window.open("", "_blank", "width=900,height=900");
    if (!win) return;
    win.document.write(`<!doctype html><html><head><title>Contrato ${contratoCodigo} - ${businessName}</title>
      <meta charset="utf-8" />
      <style>
        @page { size: A4; margin: 16mm; }
        body { font-family: Georgia, 'Times New Roman', serif; font-size: 12pt; color: #1e293b; line-height: 1.6; margin:0; padding:0; }
        h1 { font-size: 22pt; text-align:center; color:#0f766e; margin: 0 0 4px; letter-spacing: 1px; }
        .sub { text-align:center; font-size: 10pt; color:#64748b; margin-bottom: 24px; }
        .header-box { text-align:center; margin-bottom: 18px; padding: 10px; background:#f0fdf4; border-radius:6px; border:1px solid #bbf7d0; }
        .header-box strong { font-size: 13pt; color:#0f766e; }
        .section-title { font-size: 11pt; font-weight: bold; color: #1d4ed8; border-bottom: 2px solid #1d4ed8; padding-bottom: 3px; margin: 18px 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }
        .grid2 { display:grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; }
        .field { margin: 0 0 4px; }
        .field span { font-weight: bold; }
        table { width: 100%; border-collapse: collapse; font-size: 10pt; margin-top: 6px; }
        th { background: #f0fdf4; color: #0f766e; padding: 7px 10px; font-weight: bold; border: 1px solid #d1fae5; text-align:left; }
        td { padding: 6px 10px; border: 1px solid #e5e7eb; }
        tr:nth-child(even) td { background: #f9fafb; }
        .clausula { margin-bottom: 8px; text-align: justify; }
        .clausula b { color:#1d4ed8; }
        .assinaturas { display:grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
        .assin-line { border-top: 1px solid #374151; padding-top: 6px; font-size: 10pt; text-align:center; }
      </style>
    </head><body>${conteudo}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 400);
  };
  if (!contrato) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl w-[calc(100vw-1rem)] sm:w-full max-h-[95vh] sm:max-h-[92vh] overflow-hidden p-0 gap-0 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between gap-2 border-b bg-background px-3 sm:px-4 py-2.5 sm:py-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-semibold truncate", children: [
        "📄 Contrato ",
        contratoCodigo
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handlePrint,
            className: "bg-success hover:bg-success/90 text-success-foreground h-8 sm:h-9 px-2 sm:px-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Gerar PDF / Imprimir" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden text-xs", children: "PDF" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            variant: "ghost",
            onClick: () => onOpenChange(false),
            className: "h-8 w-8",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 p-2 sm:p-6 overflow-y-auto overflow-x-hidden flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "contrato-print-area",
        className: "mx-auto max-w-3xl bg-white p-4 sm:p-8 md:p-12 shadow-lg text-[#1e293b] text-[11px] sm:text-base",
        style: { fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 1.6 },
        children: [
          businessLogo ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: businessLogo,
              alt: businessName,
              style: {
                maxHeight: "70px",
                maxWidth: "220px",
                objectFit: "contain",
                margin: "0 auto"
              }
            }
          ) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              style: {
                fontSize: "22pt",
                textAlign: "center",
                color: "#0f766e",
                margin: "0 0 4px",
                letterSpacing: 1,
                textTransform: "uppercase"
              },
              children: businessName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "sub",
              style: {
                textAlign: "center",
                fontSize: "10pt",
                color: "#64748b",
                marginBottom: 24
              },
              children: [
                "Gestão Profissional de Empréstimos",
                (businessDetails.cnpj || cidadeUfNegocio) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  businessDetails.cnpj ? `CNPJ/CPF: ${businessDetails.cnpj}` : "",
                  businessDetails.cnpj && cidadeUfNegocio ? " • " : "",
                  cidadeUfNegocio
                ] }),
                (businessDetails.telefone || businessDetails.email) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  businessDetails.telefone ? `Tel: ${businessDetails.telefone}` : "",
                  businessDetails.telefone && businessDetails.email ? " • " : "",
                  businessDetails.email
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "header-box",
              style: {
                textAlign: "center",
                marginBottom: 18,
                padding: 10,
                background: "#f0fdf4",
                borderRadius: 6,
                border: "1px solid #bbf7d0"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { fontSize: "13pt", color: "#0f766e" }, children: [
                  "CONTRATO DE EMPRÉSTIMO PESSOAL",
                  " ",
                  contratoCodigo
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "10pt", color: "#64748b" }, children: [
                  "Data de emissão: ",
                  fmtDate$2((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              },
              children: "I — Dados do Credor (Locador)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid2",
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px"
              },
              children: [
                ["Razão Social / Nome", businessName],
                ["CNPJ / CPF", businessDetails.cnpj || "—"],
                ["Responsável", adminName],
                [
                  "Endereço",
                  enderecoNegocio.length > 0 ? enderecoNegocio : "—"
                ],
                ["Cidade/UF", cidadeUfNegocio || "—"],
                ["CEP", businessDetails.cep || "—"],
                ["Telefone", businessDetails.telefone || "—"],
                ["E-mail", businessDetails.email || "—"]
              ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "field", style: { margin: "0 0 4px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "bold" }, children: [
                  k,
                  ":"
                ] }),
                " ",
                v
              ] }, k))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "II — Dados do Devedor (Tomador)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px"
              },
              children: [
                ["Nome Completo", contrato.cliente_nome ?? "—"],
                ["CPF/CNPJ", cliente?.cpf_cnpj ?? "—"],
                ["Telefone", fmtTel(cliente?.telefone)],
                [
                  "Cidade/UF",
                  cliente?.cidade ? `${cliente.cidade}${cliente.uf ? ` / ${cliente.uf}` : ""}` : "—"
                ]
              ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 4px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "bold" }, children: [
                  k,
                  ":"
                ] }),
                " ",
                v
              ] }, k))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "III — Condições do Empréstimo"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px"
              },
              children: [
                ["Valor Principal", fmtBRL$3(contrato.valor_principal)],
                [
                  "Taxa de Juros",
                  `${contrato.taxa_juros}% ao mês (${tipoJurosLabel(contrato.tipo_juros)})`
                ],
                ["Nº de Parcelas", `${contrato.numero_parcelas}x`],
                ["Periodicidade", "Mensal"],
                ["Data do Contrato", fmtDate$2(contrato.data_inicio)],
                ["Valor Total", fmtBRL$3(valorTotal)]
              ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 4px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "bold" }, children: [
                  k,
                  ":"
                ] }),
                " ",
                v
              ] }, k))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "IV — Cláusulas e Condições"
            }
          ),
          [
            [
              "CLÁUSULA 1ª – DO OBJETO",
              "O CREDOR concede ao DEVEDOR empréstimo no valor e condições acima, que o DEVEDOR declara receber neste ato em moeda corrente nacional."
            ],
            [
              "CLÁUSULA 2ª – DOS JUROS",
              `Incidirão juros de ${contrato.taxa_juros}% ao mês na modalidade ${tipoJurosLabel(contrato.tipo_juros)} sobre o saldo devedor. Em caso de atraso, será acrescida multa de 2% sobre o valor da parcela e juros de mora de 1% ao mês.`
            ],
            [
              "CLÁUSULA 3ª – DO PAGAMENTO",
              "O DEVEDOR obriga-se a pagar as parcelas nas datas estipuladas no quadro a seguir. O não pagamento na data de vencimento sujeitará o DEVEDOR à mora automática, independentemente de notificação."
            ],
            [
              "CLÁUSULA 4ª – DO FORO",
              `As partes elegem o foro da Comarca de ${cidadeUfNegocio || "—"} para dirimir quaisquer questões oriundas deste contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`
            ]
          ].map(([t, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "clausula",
              style: { marginBottom: 8, textAlign: "justify" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { style: { color: "#1d4ed8" }, children: [
                  t,
                  ":"
                ] }),
                " ",
                c
              ]
            },
            t
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "section-title",
              style: {
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase"
              },
              children: "V — Tabela de Parcelas"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "table",
            {
              style: {
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "10pt",
                marginTop: 6,
                minWidth: 420
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Nº"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Vencimento"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Valor"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        background: "#f0fdf4",
                        color: "#0f766e",
                        padding: "7px 10px",
                        fontWeight: "bold",
                        border: "1px solid #d1fae5",
                        textAlign: "left"
                      },
                      children: "Status"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  parcelasContrato.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white"
                        },
                        children: [
                          "#",
                          String(p.numero_parcela).padStart(2, "0")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white"
                        },
                        children: fmtDate$2(p.data_vencimento)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white"
                        },
                        children: fmtBRL$3(p.valor_parcela)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #e5e7eb",
                          background: i % 2 ? "#f9fafb" : "white",
                          color: p.status === "pago" ? "#0f766e" : "#dc2626",
                          fontWeight: 600
                        },
                        children: p.status === "pago" ? "✅ Pago" : "⏳ Pendente"
                      }
                    )
                  ] }, String(p.id))),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { fontWeight: "bold", background: "#f0fdf4" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        colSpan: 2,
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #d1fae5",
                          textAlign: "right"
                        },
                        children: "TOTAL"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "6px 10px",
                          border: "1px solid #d1fae5"
                        },
                        children: fmtBRL$3(
                          parcelasContrato.reduce((s, p) => s + p.valor_parcela, 0)
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: { padding: "6px 10px", border: "1px solid #d1fae5" }
                      }
                    )
                  ] })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "assinaturas",
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                marginTop: 60
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 32px", fontSize: "10pt" }, children: [
                    businessDetails.cidade || "—",
                    businessDetails.cidade ? ", " : " ",
                    fmtDate$2((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        borderTop: "1px solid #374151",
                        paddingTop: 6,
                        fontSize: "10pt"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: adminName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        businessName,
                        " (Credor)",
                        businessDetails.cnpj ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "CNPJ/CPF: ",
                          businessDetails.cnpj
                        ] }) : null
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0 0 32px", fontSize: "10pt" }, children: "Assinatura do Devedor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        borderTop: "1px solid #374151",
                        paddingTop: 6,
                        fontSize: "10pt"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: contrato.cliente_nome ?? "—" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "CPF: ",
                        cliente?.cpf_cnpj ?? "—",
                        " (Devedor)"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] }) });
}
function exportToCsv(filename, rows, headers) {
  if (rows.length === 0) {
    const blob2 = new Blob(["\uFEFF"], { type: "text/csv;charset=utf-8;" });
    triggerDownload(blob2, filename);
    return;
  }
  const cols = headers ?? Object.keys(rows[0]).map((k) => ({ key: k, label: k }));
  const escape = (val) => {
    if (val === null || val === void 0) return "";
    const s = String(val).replace(/"/g, '""');
    if (s.includes(";") || s.includes('"') || s.includes("\n")) {
      return `"${s}"`;
    }
    return s;
  };
  const headerLine = cols.map((c) => escape(c.label)).join(";");
  const lines = rows.map(
    (row) => cols.map((c) => escape(row[c.key])).join(";")
  );
  const csv = "\uFEFF" + [headerLine, ...lines].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  triggerDownload(blob, filename);
}
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a2 = document.createElement("a");
  a2.href = url;
  a2.download = filename;
  document.body.appendChild(a2);
  a2.click();
  document.body.removeChild(a2);
  URL.revokeObjectURL(url);
}
const Route$4 = createFileRoute("/_authed/relatorios")({
  head: () => ({
    meta: [{ title: "Relatórios — JuroPro" }]
  }),
  component: RelatoriosPage
});
const fmtBRL$2 = (v) => Number(v || 0).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const fmtDate$1 = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};
const todayIso = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
const MESES = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez"
];
function RelatoriosPage() {
  const [tab, setTab] = reactExports.useState(
    "financeiro"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold truncate", children: "Relatórios e Documentos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: "Análises financeiras e geração de contratos" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-3 sm:p-6 space-y-4 min-w-0 overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "financeiro", className: "text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 mr-1 sm:mr-1.5" }),
            "Financeiro"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "contratos", className: "text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 mr-1 sm:mr-1.5" }),
            "Contratos"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "inadimplencia", className: "text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 mr-1 sm:mr-1.5" }),
            "Inadimplência"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "financeiro", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FinanceiroTab, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "contratos", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContratosTab, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "inadimplencia", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InadimplenciaTab, {}) })
      ] }) })
    ] })
  ] }) });
}
function KpiBox$2({
  label,
  value,
  icon,
  tone,
  sub
}) {
  const toneMap = {
    primary: "border-t-primary",
    success: "border-t-success",
    info: "border-t-info",
    warning: "border-t-warning",
    destructive: "border-t-destructive"
  };
  const iconToneMap = {
    primary: "text-primary",
    success: "text-success",
    info: "text-info",
    warning: "text-warning",
    destructive: "text-destructive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-xl border border-t-4 bg-card p-3 sm:p-4 shadow-sm",
        toneMap[tone]
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-muted-foreground leading-tight", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("shrink-0", iconToneMap[tone]), children: icon })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-lg sm:text-xl font-bold text-foreground truncate", children: value }),
        sub ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] text-muted-foreground truncate", children: sub }) : null
      ]
    }
  );
}
function SortHeader({
  label,
  col,
  current,
  dir,
  onClick,
  className
}) {
  const active = current === col;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      className: cn(
        "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors whitespace-nowrap",
        active && "text-primary",
        className
      ),
      onClick: () => onClick(col),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
        label,
        active ? dir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-3 w-3 opacity-40" })
      ] })
    }
  );
}
function ClienteFilter({
  clientes,
  value,
  onChange
}) {
  const [open, setOpen] = reactExports.useState(false);
  const selected = clientes.find((c) => String(c.id) === value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        role: "combobox",
        className: "h-9 w-full sm:w-[220px] justify-between font-normal",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: value === "todos" ? "Todos os clientes" : selected?.nome ?? "Selecionar..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsUpDown, { className: "h-4 w-4 opacity-50 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[260px] p-0", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: "Buscar cliente..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: "Nenhum cliente encontrado." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            CommandItem,
            {
              value: "todos",
              onSelect: () => {
                onChange("todos");
                setOpen(false);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Check,
                  {
                    className: cn(
                      "h-4 w-4 mr-2",
                      value === "todos" ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                "Todos os clientes"
              ]
            }
          ),
          clientes.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            CommandItem,
            {
              value: c.nome ?? String(c.id),
              onSelect: () => {
                onChange(String(c.id));
                setOpen(false);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Check,
                  {
                    className: cn(
                      "h-4 w-4 mr-2",
                      value === String(c.id) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                c.nome ?? "—"
              ]
            },
            String(c.id)
          ))
        ] })
      ] })
    ] }) })
  ] });
}
function FinanceiroTab() {
  const [dataIni, setDataIni] = reactExports.useState("");
  const [dataFim, setDataFim] = reactExports.useState("");
  const [busca, setBusca] = reactExports.useState("");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(5);
  const [sortKey, setSortKey] = reactExports.useState("vencimento");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const empQ = useQuery({
    queryKey: ["emprestimos"],
    queryFn: () => listEmprestimos(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  reactExports.useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = reactExports.useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const parcelasPeriodo = reactExports.useMemo(() => {
    return parcelas.filter((p) => {
      if (!p.data_vencimento) return false;
      if (dataIni && p.data_vencimento < dataIni) return false;
      if (dataFim && p.data_vencimento > dataFim) return false;
      return true;
    });
  }, [parcelas, dataIni, dataFim]);
  const kpis = reactExports.useMemo(() => {
    const totalPrevisto = parcelasPeriodo.reduce(
      (s, p) => s + p.valor_parcela,
      0
    );
    const isPaga = (p) => p.status === "pago" || p.status === "paga";
    const totalRealizado = parcelasPeriodo.filter(isPaga).reduce((s, p) => s + (p.valor_pago ?? p.valor_parcela), 0);
    const emAberto = parcelasPeriodo.filter((p) => !isPaga(p)).reduce((s, p) => s + p.valor_parcela, 0);
    const taxaRealizacao = totalPrevisto > 0 ? Math.round(totalRealizado / totalPrevisto * 100) : 0;
    return { totalPrevisto, totalRealizado, emAberto, taxaRealizacao };
  }, [parcelasPeriodo]);
  const dadosMensais = reactExports.useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    const buckets = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const yy = String(d.getFullYear()).slice(-2);
      buckets.push({
        key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
        label: `${MESES[d.getMonth()]}/${yy}`,
        previsto: 0,
        realizado: 0
      });
    }
    parcelasPeriodo.forEach((p) => {
      if (!p.data_vencimento) return;
      const key = p.data_vencimento.slice(0, 7);
      const b = buckets.find((x) => x.key === key);
      if (!b) return;
      b.previsto += p.valor_parcela;
      if (p.status === "pago" || p.status === "paga") {
        b.realizado += p.valor_pago ?? p.valor_parcela;
      }
    });
    return buckets;
  }, [parcelasPeriodo]);
  const detalhadas = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = parcelasPeriodo.filter((p) => {
      if (!q) return true;
      const codigo = (p.contrato_codigo ?? "").toLowerCase();
      const nome = (p.cliente_nome ?? "").toLowerCase();
      return codigo.includes(q) || nome.includes(q);
    });
    if (sortKey) {
      arr = [...arr].sort((a2, b) => {
        let av = "";
        let bv = "";
        switch (sortKey) {
          case "cliente":
            av = a2.cliente_nome ?? "";
            bv = b.cliente_nome ?? "";
            break;
          case "contrato":
            av = a2.contrato_codigo ?? "";
            bv = b.contrato_codigo ?? "";
            break;
          case "vencimento":
            av = a2.data_vencimento ?? "";
            bv = b.data_vencimento ?? "";
            break;
          case "valor":
            av = a2.valor_parcela;
            bv = b.valor_parcela;
            break;
          case "valorPago":
            av = a2.valor_pago ?? 0;
            bv = b.valor_pago ?? 0;
            break;
          case "status":
            av = a2.status ?? "";
            bv = b.status ?? "";
            break;
        }
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return arr;
  }, [parcelasPeriodo, busca, sortKey, sortDir]);
  const total = detalhadas.length;
  const inicio = (pagina - 1) * porPagina;
  const paginadas = detalhadas.slice(inicio, inicio + porPagina);
  const handleSort = (k) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };
  const isLoading = empQ.isLoading || parQ.isLoading;
  const handleExport = () => {
    exportToCsv(
      `financeiro-${todayIso()}.csv`,
      detalhadas.map((p) => ({
        cliente: p.cliente_nome ?? "—",
        contrato: p.contrato_codigo ?? "",
        vencimento: fmtDate$1(p.data_vencimento),
        valor: p.valor_parcela.toFixed(2).replace(".", ","),
        valor_pago: (p.valor_pago ?? 0).toFixed(2).replace(".", ","),
        status: p.status ?? ""
      })),
      [
        { key: "cliente", label: "Cliente" },
        { key: "contrato", label: "Contrato" },
        { key: "vencimento", label: "Vencimento" },
        { key: "valor", label: "Valor (R$)" },
        { key: "valor_pago", label: "Valor Pago (R$)" },
        { key: "status", label: "Status" }
      ]
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:flex-wrap rounded-lg border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }),
        "Período:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            value: dataIni,
            onChange: (e) => setDataIni(e.target.value),
            className: "h-9 sm:w-[160px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            value: dataFim,
            onChange: (e) => setDataFim(e.target.value),
            className: "h-9 sm:w-[160px]"
          }
        ),
        (dataIni || dataFim) && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              setDataIni("");
              setDataFim("");
            },
            children: "Limpar"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: handleExport,
          disabled: isLoading || detalhadas.length === 0,
          className: "sm:ml-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Exportar CSV" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "CSV" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Total Previsto",
          value: fmtBRL$2(kpis.totalPrevisto),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }),
          tone: "info",
          sub: "Soma de todas parcelas"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Total Realizado",
          value: fmtBRL$2(kpis.totalRealizado),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
          tone: "success",
          sub: "Parcelas pagas"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Em Aberto",
          value: fmtBRL$2(kpis.emAberto),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Hourglass, { className: "h-4 w-4" }),
          tone: "warning",
          sub: "Parcelas pendentes"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Taxa Realização",
          value: `${kpis.taxaRealizacao}%`,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "h-4 w-4" }),
          tone: "primary",
          sub: "Previsto vs realizado"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-3 sm:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4 text-info" }),
          "Previsto vs Realizado — Últimos 6 Meses"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-sm bg-info" }),
            "Previsto"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-sm bg-success" }),
            "Realizado"
          ] })
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { dados: dadosMensais })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-4 w-4 text-primary" }),
          "Detalhamento de Parcelas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:ml-auto sm:w-[280px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: busca,
              onChange: (e) => {
                setBusca(e.target.value);
                setPagina(1);
              },
              placeholder: "Buscar cliente ou contrato...",
              className: "h-9 pl-9"
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : detalhadas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-10 w-10 text-muted-foreground mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Nenhuma parcela encontrada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ajuste o período ou a busca." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Cliente",
                col: "cliente",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Contrato",
                col: "contrato",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Vencimento",
                col: "vencimento",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Valor",
                col: "valor",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Valor Pago",
                col: "valorPago",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Status",
                col: "status",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginadas.map((p) => {
            const paga = p.status === "pago" || p.status === "paga";
            const atrasada = !paga && p.data_vencimento && p.data_vencimento < todayIso();
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: p.cliente_nome ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs font-semibold text-primary", children: p.contrato_codigo }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: cn(
                        "px-3 py-2.5 whitespace-nowrap",
                        atrasada ? "text-destructive font-medium" : "text-muted-foreground"
                      ),
                      children: fmtDate$1(p.data_vencimento)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium", children: fmtBRL$2(p.valor_parcela) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: cn(
                        "px-3 py-2.5",
                        paga ? "text-success font-medium" : "text-muted-foreground"
                      ),
                      children: paga ? fmtBRL$2(p.valor_pago ?? p.valor_parcela) : "—"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: cn(
                        "border",
                        paga ? "bg-success/15 text-success border-success/30" : atrasada ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-warning/15 text-warning border-warning/30"
                      ),
                      children: paga ? "Pago" : atrasada ? "Atrasado" : "Pendente"
                    }
                  ) })
                ]
              },
              String(p.id)
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y", children: paginadas.map((p) => {
          const paga = p.status === "pago" || p.status === "paga";
          const atrasada = !paga && p.data_vencimento && p.data_vencimento < todayIso();
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm truncate", children: p.cliente_nome ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: cn(
                    "border shrink-0",
                    paga ? "bg-success/15 text-success border-success/30" : atrasada ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-warning/15 text-warning border-warning/30"
                  ),
                  children: paga ? "Pago" : atrasada ? "Atrasado" : "Pendente"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-primary", children: p.contrato_codigo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    atrasada ? "text-destructive font-medium" : "text-muted-foreground"
                  ),
                  children: fmtDate$1(p.data_vencimento)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: fmtBRL$2(p.valor_parcela) }),
              paga ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success font-medium text-xs", children: [
                "Pago: ",
                fmtBRL$2(p.valor_pago ?? p.valor_parcela)
              ] }) : null
            ] })
          ] }, String(p.id));
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TablePagination,
          {
            page: pagina,
            pageSize: porPagina,
            totalItems: total,
            onPageChange: setPagina,
            onPageSizeChange: (s) => {
              setPorPagina(s);
              setPagina(1);
            },
            itemLabel: "parcelas"
          }
        )
      ] })
    ] })
  ] });
}
function BarChart({
  dados
}) {
  const max = Math.max(...dados.flatMap((d) => [d.previsto, d.realizado]), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 sm:gap-3 h-44 px-1 sm:px-2", children: dados.map((d, i) => {
    const hp = d.previsto / max * 140;
    const hr = d.realizado / max * 140;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex-1 flex flex-col items-center gap-1.5 min-w-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5 sm:gap-1 items-end h-36 w-full justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-3 sm:w-4 rounded-t bg-info hover:opacity-80 transition-opacity",
                style: { height: `${hp}px` },
                title: `Previsto: ${fmtBRL$2(d.previsto)}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-3 sm:w-4 rounded-t bg-success hover:opacity-80 transition-opacity",
                style: { height: `${hr}px` },
                title: `Realizado: ${fmtBRL$2(d.realizado)}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: d.label })
        ]
      },
      i
    );
  }) });
}
function ContratosTab() {
  const [busca, setBusca] = reactExports.useState("");
  const [clienteFiltro, setClienteFiltro] = reactExports.useState("todos");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(5);
  const [sortKey, setSortKey] = reactExports.useState("id");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [contratoPdf, setContratoPdf] = reactExports.useState(null);
  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const empQ = useQuery({
    queryKey: ["emprestimos"],
    queryFn: () => listEmprestimos(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const cliQ = useQuery({
    queryKey: ["clientes"],
    queryFn: () => listClientes(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const emprestimos = reactExports.useMemo(() => empQ.data?.data ?? [], [empQ.data]);
  const parcelas = reactExports.useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const clientes = reactExports.useMemo(() => cliQ.data?.data ?? [], [cliQ.data]);
  const seqMap = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    [...emprestimos].sort((a2, b) => (a2.created_at ?? "").localeCompare(b.created_at ?? "")).forEach((e, i) => m.set(String(e.id), i + 1));
    return m;
  }, [emprestimos]);
  const codigoOf = (id) => `#${String(seqMap.get(String(id)) ?? 0).padStart(3, "0")}`;
  const kpis = reactExports.useMemo(() => {
    const totalContratos = emprestimos.filter((e) => e.status === "ativo").length;
    const volumeTotal = emprestimos.reduce((s, e) => s + e.valor_principal, 0);
    const ticketMedio = emprestimos.length > 0 ? volumeTotal / emprestimos.length : 0;
    const parcelasAtivas = parcelas.filter(
      (p) => p.status !== "pago" && p.status !== "paga"
    ).length;
    return { totalContratos, volumeTotal, ticketMedio, parcelasAtivas };
  }, [emprestimos, parcelas]);
  const filtrados = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = emprestimos.filter((e) => {
      if (clienteFiltro !== "todos" && String(e.cliente_id) !== clienteFiltro)
        return false;
      if (q) {
        const codigo = codigoOf(e.id).toLowerCase();
        const nome = (e.cliente_nome ?? "").toLowerCase();
        if (!codigo.includes(q) && !nome.includes(q)) return false;
      }
      return true;
    });
    if (sortKey) {
      arr = [...arr].sort((a2, b) => {
        let av = "";
        let bv = "";
        switch (sortKey) {
          case "id":
            av = seqMap.get(String(a2.id)) ?? 0;
            bv = seqMap.get(String(b.id)) ?? 0;
            break;
          case "cliente":
            av = a2.cliente_nome ?? "";
            bv = b.cliente_nome ?? "";
            break;
          case "valor":
            av = a2.valor_principal;
            bv = b.valor_principal;
            break;
          case "taxa":
            av = a2.taxa_juros;
            bv = b.taxa_juros;
            break;
          case "parcelas":
            av = a2.numero_parcelas;
            bv = b.numero_parcelas;
            break;
          case "tipo":
            av = a2.tipo_juros ?? "";
            bv = b.tipo_juros ?? "";
            break;
          case "data":
            av = a2.data_inicio ?? a2.created_at ?? "";
            bv = b.data_inicio ?? b.created_at ?? "";
            break;
          case "status":
            av = a2.status ?? "";
            bv = b.status ?? "";
            break;
        }
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return arr;
  }, [emprestimos, busca, clienteFiltro, sortKey, sortDir, seqMap]);
  const total = filtrados.length;
  const inicio = (pagina - 1) * porPagina;
  const paginados = filtrados.slice(inicio, inicio + porPagina);
  const parcelasStats = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    parcelas.forEach((p) => {
      const k = String(p.emprestimo_id);
      const cur = m.get(k) ?? { pagas: 0, total: 0 };
      cur.total += 1;
      if (p.status === "pago" || p.status === "paga") cur.pagas += 1;
      m.set(k, cur);
    });
    return m;
  }, [parcelas]);
  const handleSort = (k) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };
  const handleExport = () => {
    exportToCsv(
      `contratos-${todayIso()}.csv`,
      filtrados.map((e) => ({
        id: codigoOf(e.id),
        cliente: e.cliente_nome ?? "—",
        valor: e.valor_principal.toFixed(2).replace(".", ","),
        taxa: `${e.taxa_juros}%`,
        parcelas: e.numero_parcelas,
        tipo: e.tipo_juros ?? "",
        data: fmtDate$1(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null),
        status: e.status ?? ""
      })),
      [
        { key: "id", label: "Contrato" },
        { key: "cliente", label: "Cliente" },
        { key: "valor", label: "Valor (R$)" },
        { key: "taxa", label: "Taxa" },
        { key: "parcelas", label: "Parcelas" },
        { key: "tipo", label: "Tipo" },
        { key: "data", label: "Data" },
        { key: "status", label: "Status" }
      ]
    );
  };
  const isLoading = empQ.isLoading || parQ.isLoading || cliQ.isLoading;
  const contratoSelecionado = contratoPdf ? emprestimos.find((e) => String(e.id) === String(contratoPdf.id)) ?? null : null;
  const clienteSelecionado = contratoSelecionado ? clientes.find((c) => String(c.id) === String(contratoSelecionado.cliente_id)) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Total Contratos",
          value: String(kpis.totalContratos),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }),
          tone: "info",
          sub: "Contratos ativos"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Volume Total",
          value: fmtBRL$2(kpis.volumeTotal),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }),
          tone: "success",
          sub: "Soma dos empréstimos"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Ticket Médio",
          value: fmtBRL$2(kpis.ticketMedio),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4" }),
          tone: "primary",
          sub: "Por contrato"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Parcelas Ativas",
          value: String(kpis.parcelasAtivas),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Hourglass, { className: "h-4 w-4" }),
          tone: "warning",
          sub: "Aguardando pagamento"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary" }),
          "Lista de Contratos"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:ml-auto sm:items-center w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-[260px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: busca,
                onChange: (e) => {
                  setBusca(e.target.value);
                  setPagina(1);
                },
                placeholder: "Buscar cliente ou contrato...",
                className: "h-9 pl-9"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ClienteFilter,
            {
              clientes,
              value: clienteFiltro,
              onChange: (v) => {
                setClienteFiltro(v);
                setPagina(1);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleExport,
              disabled: isLoading || filtrados.length === 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Exportar CSV" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "CSV" })
              ]
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-10 w-10 text-muted-foreground mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Nenhum contrato encontrado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ajuste os filtros e tente novamente." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Contrato",
                col: "id",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Cliente",
                col: "cliente",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Valor",
                col: "valor",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Taxa",
                col: "taxa",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Parcelas",
                col: "parcelas",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Tipo",
                col: "tipo",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Início",
                col: "data",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground", children: "Ações" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginados.map((e) => {
            const stats = parcelasStats.get(String(e.id)) ?? {
              pagas: 0,
              total: e.numero_parcelas
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs font-semibold text-primary", children: codigoOf(e.id) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: e.cliente_nome ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium", children: fmtBRL$2(e.valor_principal) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-muted-foreground", children: [
                    e.taxa_juros,
                    "% a.m."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-muted-foreground", children: [
                    e.numero_parcelas,
                    "x"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "bg-info/10 text-info border-info/30 capitalize",
                      children: e.tipo_juros ?? "—"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground whitespace-nowrap", children: fmtDate$1(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "bg-success/15 text-success border-success/30",
                      children: [
                        "● ",
                        stats.pagas,
                        "/",
                        stats.total,
                        " pagas"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "icon",
                        variant: "outline",
                        className: "h-8 w-8 bg-info/10 hover:bg-info/20 border-info/30 text-info",
                        onClick: () => setContratoPdf({
                          id: e.id,
                          codigo: codigoOf(e.id)
                        }),
                        title: "Visualizar",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "icon",
                        variant: "outline",
                        className: "h-8 w-8 bg-success/10 hover:bg-success/20 border-success/30 text-success",
                        onClick: () => setContratoPdf({
                          id: e.id,
                          codigo: codigoOf(e.id)
                        }),
                        title: "Gerar PDF",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ] }) })
                ]
              },
              String(e.id)
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y", children: paginados.map((e) => {
          const stats = parcelasStats.get(String(e.id)) ?? {
            pagas: 0,
            total: e.numero_parcelas
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-semibold text-primary shrink-0", children: codigoOf(e.id) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm truncate", children: e.cliente_nome ?? "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "bg-success/15 text-success border-success/30 shrink-0 text-[10px]",
                  children: [
                    stats.pagas,
                    "/",
                    stats.total
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Valor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: fmtBRL$2(e.valor_principal) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Taxa" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
                  e.taxa_juros,
                  "% a.m."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Parcelas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
                  e.numero_parcelas,
                  "x",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground capitalize", children: [
                    "(",
                    e.tipo_juros ?? "—",
                    ")"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Início" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: fmtDate$1(e.data_inicio ?? e.created_at?.slice(0, 10) ?? null) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "flex-1 bg-info/10 hover:bg-info/20 border-info/30 text-info h-8",
                  onClick: () => setContratoPdf({ id: e.id, codigo: codigoOf(e.id) }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                    "Visualizar"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "flex-1 bg-success/10 hover:bg-success/20 border-success/30 text-success h-8",
                  onClick: () => setContratoPdf({ id: e.id, codigo: codigoOf(e.id) }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
                    "PDF"
                  ]
                }
              )
            ] })
          ] }, String(e.id));
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TablePagination,
          {
            page: pagina,
            pageSize: porPagina,
            totalItems: total,
            onPageChange: setPagina,
            onPageSizeChange: (s) => {
              setPorPagina(s);
              setPagina(1);
            },
            itemLabel: "contratos"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ContratoPdfDialog,
      {
        open: !!contratoPdf,
        onOpenChange: (o) => !o && setContratoPdf(null),
        contrato: contratoSelecionado,
        contratoCodigo: contratoPdf?.codigo ?? "",
        parcelas,
        cliente: clienteSelecionado ?? null
      }
    )
  ] });
}
function InadimplenciaTab() {
  const { name: adminName } = useAdminName();
  const [busca, setBusca] = reactExports.useState("");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(5);
  const [sortKey, setSortKey] = reactExports.useState("atraso");
  const [sortDir, setSortDir] = reactExports.useState("desc");
  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const parQ = useQuery({
    queryKey: ["parcelas"],
    queryFn: () => listParcelas(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const cliQ = useQuery({
    queryKey: ["clientes"],
    queryFn: () => listClientes(),
    staleTime: 6e4,
    placeholderData: (prev) => prev,
    enabled: authReady
  });
  const parcelas = reactExports.useMemo(() => parQ.data?.data ?? [], [parQ.data]);
  const clientes = reactExports.useMemo(() => cliQ.data?.data ?? [], [cliQ.data]);
  const hoje = todayIso();
  const atrasadas = reactExports.useMemo(() => {
    return parcelas.filter((p) => {
      if (!p.data_vencimento) return false;
      if (p.status === "pago" || p.status === "paga") return false;
      return p.data_vencimento < hoje;
    });
  }, [parcelas, hoje]);
  const diasAtraso = (iso) => {
    if (!iso) return 0;
    const d = (/* @__PURE__ */ new Date(iso + "T00:00:00")).getTime();
    const today = (/* @__PURE__ */ new Date(hoje + "T00:00:00")).getTime();
    return Math.floor((today - d) / 864e5);
  };
  const agrupados = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    atrasadas.forEach((p) => {
      const k = String(p.cliente_id ?? "—");
      const cur = map.get(k) ?? {
        cliente_id: k,
        cliente_nome: p.cliente_nome ?? "—",
        contrato_codigos: [],
        qtdParcelas: 0,
        totalDivida: 0,
        diasAtrasoMax: 0,
        parcelas: []
      };
      cur.qtdParcelas += 1;
      cur.totalDivida += p.valor_parcela;
      const dias = diasAtraso(p.data_vencimento);
      if (dias > cur.diasAtrasoMax) cur.diasAtrasoMax = dias;
      if (p.contrato_codigo && !cur.contrato_codigos.includes(p.contrato_codigo)) {
        cur.contrato_codigos.push(p.contrato_codigo);
      }
      cur.parcelas.push(p);
      map.set(k, cur);
    });
    map.forEach((v) => {
      const cli = clientes.find((c) => String(c.id) === v.cliente_id);
      v.telefone = cli?.telefone ?? null;
    });
    return Array.from(map.values());
  }, [atrasadas, clientes]);
  const filtrados = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    let arr = agrupados.filter((c) => {
      if (!q) return true;
      const nome = c.cliente_nome.toLowerCase();
      const codigos = c.contrato_codigos.join(" ").toLowerCase();
      return nome.includes(q) || codigos.includes(q);
    });
    arr = [...arr].sort((a2, b) => {
      let av = 0;
      let bv = 0;
      switch (sortKey) {
        case "cliente":
          av = a2.cliente_nome;
          bv = b.cliente_nome;
          break;
        case "qtd":
          av = a2.qtdParcelas;
          bv = b.qtdParcelas;
          break;
        case "total":
          av = a2.totalDivida;
          bv = b.totalDivida;
          break;
        case "atraso":
          av = a2.diasAtrasoMax;
          bv = b.diasAtrasoMax;
          break;
      }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [agrupados, busca, sortKey, sortDir]);
  const total = filtrados.length;
  const inicio = (pagina - 1) * porPagina;
  const paginados = filtrados.slice(inicio, inicio + porPagina);
  const kpis = reactExports.useMemo(() => {
    const inadimplentes = agrupados.length;
    const totalEmAtraso = agrupados.reduce((s, c) => s + c.totalDivida, 0);
    const maiorAtraso = agrupados.reduce(
      (m, c) => Math.max(m, c.diasAtrasoMax),
      0
    );
    const parcelasAtras = atrasadas.length;
    return { inadimplentes, totalEmAtraso, maiorAtraso, parcelasAtras };
  }, [agrupados, atrasadas]);
  const handleSort = (k) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("desc");
    }
  };
  const handleExport = () => {
    exportToCsv(
      `inadimplencia-${todayIso()}.csv`,
      filtrados.map((c) => ({
        cliente: c.cliente_nome,
        contratos: c.contrato_codigos.join(", "),
        qtd: c.qtdParcelas,
        total: c.totalDivida.toFixed(2).replace(".", ","),
        atraso: c.diasAtrasoMax
      })),
      [
        { key: "cliente", label: "Cliente" },
        { key: "contratos", label: "Contratos" },
        { key: "qtd", label: "Qtd Parcelas" },
        { key: "total", label: "Total Dívida (R$)" },
        { key: "atraso", label: "Dias em Atraso" }
      ]
    );
  };
  const buildWhatsApp = (c) => {
    const tel = (c.telefone ?? "").replace(/\D/g, "");
    if (!tel) return null;
    const numero = tel.length === 11 || tel.length === 10 ? `55${tel}` : tel;
    const contratos = c.contrato_codigos.join(", ");
    const msg = `Olá ${c.cliente_nome}, identificamos ${c.qtdParcelas} parcela(s) em atraso do(s) contrato(s) ${contratos}, totalizando ${fmtBRL$2(c.totalDivida)}. Por favor, entre em contato para regularizarmos a situação. Atenciosamente, ${adminName} - JuroPro.`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  };
  const riscoBadge = (dias) => {
    if (dias > 60)
      return { label: "Alto Risco", cls: "bg-destructive/15 text-destructive border-destructive/30" };
    if (dias > 30)
      return { label: "Médio Risco", cls: "bg-warning/15 text-warning border-warning/30" };
    return { label: "Baixo Risco", cls: "bg-info/15 text-info border-info/30" };
  };
  const isLoading = parQ.isLoading || cliQ.isLoading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Inadimplentes",
          value: String(kpis.inadimplentes),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          tone: "destructive",
          sub: "Clientes em atraso"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Total em Atraso",
          value: fmtBRL$2(kpis.totalEmAtraso),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }),
          tone: "success",
          sub: "Valor total inadimplente"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Maior Atraso",
          value: `${kpis.maiorAtraso} dias`,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }),
          tone: "warning",
          sub: "Parcela mais antiga"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiBox$2,
        {
          label: "Parcelas Atrasadas",
          value: String(kpis.parcelasAtras),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }),
          tone: "primary",
          sub: "Total de parcelas"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b p-3 flex flex-col sm:flex-row gap-2 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-warning" }),
          "Clientes Inadimplentes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:ml-auto sm:items-center w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-[280px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: busca,
                onChange: (e) => {
                  setBusca(e.target.value);
                  setPagina(1);
                },
                placeholder: "Buscar cliente ou contrato...",
                className: "h-9 pl-9"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleExport,
              disabled: isLoading || filtrados.length === 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Exportar CSV" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "CSV" })
              ]
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-success mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Nenhum cliente inadimplente 🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Tudo em dia neste filtro." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Cliente",
                col: "cliente",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground", children: "Contrato" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Qtd Parcelas",
                col: "qtd",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Total Dívida",
                col: "total",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortHeader,
              {
                label: "Dias em Atraso",
                col: "atraso",
                current: sortKey,
                dir: sortDir,
                onClick: handleSort
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground", children: "Risco" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-right text-xs font-semibold text-muted-foreground", children: "Ações" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginados.map((c) => {
            const wpp = buildWhatsApp(c);
            const risco = riscoBadge(c.diasAtrasoMax);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b last:border-0 hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: c.cliente_nome }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs font-semibold text-primary", children: c.contrato_codigos.join(", ") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: c.qtdParcelas }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-medium text-destructive", children: fmtBRL$2(c.totalDivida) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 font-medium text-warning", children: [
                    c.diasAtrasoMax,
                    " dias"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("border", risco.cls), children: [
                    "● ",
                    risco.label
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                    wpp ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: wpp,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-success/30 bg-success/10 text-success hover:bg-success/20",
                        title: "Cobrar via WhatsApp",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" })
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-muted bg-muted/30 text-muted-foreground opacity-50",
                        title: "Telefone não cadastrado",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "icon",
                        variant: "outline",
                        className: "h-8 w-8 bg-info/10 hover:bg-info/20 border-info/30 text-info",
                        title: "Ver detalhes em Vencimentos",
                        asChild: true,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/vencimentos?status=atrasado`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }) })
                      }
                    )
                  ] }) })
                ]
              },
              c.cliente_id
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y", children: paginados.map((c) => {
          const wpp = buildWhatsApp(c);
          const risco = riscoBadge(c.diasAtrasoMax);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm truncate", children: c.cliente_nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("border shrink-0 text-[10px]", risco.cls), children: risco.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-primary", children: c.contrato_codigos.join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                c.qtdParcelas,
                " parcela",
                c.qtdParcelas > 1 ? "s" : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase", children: "Total dívida" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-destructive", children: fmtBRL$2(c.totalDivida) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase", children: "Dias atraso" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-warning", children: [
                  c.diasAtrasoMax,
                  " dias"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
              wpp ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: wpp,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border border-success/30 bg-success/10 text-success text-xs font-medium hover:bg-success/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" }),
                    "WhatsApp"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border bg-muted/30 text-muted-foreground text-xs opacity-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5" }),
                "Sem telefone"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/vencimentos?status=atrasado",
                  className: "flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border border-info/30 bg-info/10 text-info text-xs font-medium hover:bg-info/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
                    "Detalhes"
                  ]
                }
              )
            ] })
          ] }, c.cliente_id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TablePagination,
          {
            page: pagina,
            pageSize: porPagina,
            totalItems: total,
            onPageChange: setPagina,
            onPageSizeChange: (s) => {
              setPorPagina(s);
              setPagina(1);
            },
            itemLabel: "clientes"
          }
        )
      ] })
    ] })
  ] });
}
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" })
    }
  );
}
const Route$3 = createFileRoute("/_authed/contratos")({
  head: () => ({
    meta: [{ title: "Contratos — JuroPro" }]
  }),
  component: ContratosPage
});
const fmtBRL$1 = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const fmtDate = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};
function statusBadgeClass(status) {
  switch ((status ?? "").toLowerCase()) {
    case "ativo":
      return "bg-success/15 text-success border-success/30";
    case "quitado":
    case "pago":
      return "bg-info/15 text-info border-info/30";
    case "atrasado":
      return "bg-destructive/15 text-destructive border-destructive/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}
function ContratosPage() {
  const [novoOpen, setNovoOpen] = reactExports.useState(false);
  const [busca, setBusca] = reactExports.useState("");
  const [sortKey, setSortKey] = reactExports.useState(null);
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(10);
  const [emprestimoEditando, setEmprestimoEditando] = reactExports.useState(null);
  const [loadingEditId, setLoadingEditId] = reactExports.useState(
    null
  );
  const [emprestimoParaExcluir, setEmprestimoParaExcluir] = reactExports.useState(null);
  const queryClient = useQueryClient();
  const listFn = useServerFn(listEmprestimos);
  const getFn = useServerFn(getEmprestimo);
  const deleteFn = useServerFn(deleteEmprestimo);
  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const query = useQuery({
    queryKey: ["emprestimos", "list"],
    queryFn: () => listFn(),
    enabled: authReady
  });
  const listaRaw = query.data?.data ?? [];
  const lista = reactExports.useMemo(() => {
    const total = listaRaw.length;
    return listaRaw.map((e, idx) => ({ ...e, seqId: total - idx }));
  }, [listaRaw]);
  const handleEditar = async (id) => {
    setLoadingEditId(id);
    try {
      const res = await getFn({ data: { id } });
      if (!res.data) {
        toast.error(res.error ?? "Empréstimo não encontrado.");
        return;
      }
      setEmprestimoEditando(res.data);
      setNovoOpen(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao carregar.");
    } finally {
      setLoadingEditId(null);
    }
  };
  const handleDialogChange = (next) => {
    setNovoOpen(next);
    if (!next) {
      setEmprestimoEditando(null);
      query.refetch();
    }
  };
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteFn({ data: { id } }),
    onSuccess: (result) => {
      if (!result.ok) {
        toast.error(result.error ?? "Erro ao excluir empréstimo.");
        return;
      }
      toast.success("Empréstimo excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["emprestimos", "list"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      setEmprestimoParaExcluir(null);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    }
  });
  const handleSort = (key) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    }
  };
  const filtrados = reactExports.useMemo(() => {
    const q = busca.trim().toLowerCase();
    const base = !q ? lista : lista.filter((e) => {
      const seqStr = `#${String(e.seqId).padStart(3, "0")}`;
      return (e.cliente_nome ?? "").toLowerCase().includes(q) || seqStr.toLowerCase().includes(q) || String(e.seqId).includes(q) || String(e.id).toLowerCase().includes(q) || (e.status ?? "").toLowerCase().includes(q);
    });
    if (!sortKey) return base;
    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (e) => {
      switch (sortKey) {
        case "id":
          return e.seqId;
        case "cliente":
          return (e.cliente_nome ?? "").toLowerCase();
        case "principal":
          return e.valor_principal;
        case "taxa":
          return e.taxa_juros;
        case "parcelas":
          return e.parcelas_total > 0 ? e.parcelas_pagas / e.parcelas_total : 0;
        case "data_inicio":
          return e.data_inicio ? new Date(e.data_inicio).getTime() : 0;
        case "status":
          return (e.status ?? "").toLowerCase();
        default:
          return 0;
      }
    };
    return [...base].sort((a2, b) => {
      const av = getVal(a2);
      const bv = getVal(b);
      const aEmpty = av === "" || av === 0;
      const bEmpty = bv === "" || bv === 0;
      if (aEmpty && !bEmpty) return 1;
      if (!aEmpty && bEmpty) return -1;
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [lista, busca, sortKey, sortDir]);
  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const paginados = filtrados.slice(
    (paginaAtual - 1) * porPagina,
    paginaAtual * porPagina
  );
  const totais = reactExports.useMemo(() => {
    return lista.reduce(
      (acc, e) => {
        acc.principal += e.valor_principal;
        acc.aReceber += e.total_a_receber;
        acc.recebido += e.total_pago;
        if ((e.status ?? "").toLowerCase() === "ativo") acc.ativos += 1;
        return acc;
      },
      { principal: 0, aReceber: 0, recebido: 0, ativos: 0 }
    );
  }, [lista]);
  const SortIcon = ({ column }) => {
    if (sortKey !== column)
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-3.5 w-3.5 opacity-50" });
    return sortDir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3.5 w-3.5" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-x-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold text-foreground truncate", children: "Contratos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: "Acompanhe todos os empréstimos cadastrados" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setNovoOpen(true),
              size: "sm",
              className: "bg-success text-success-foreground shadow-sm hover:bg-success/90",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Novo Empréstimo" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-3 md:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$1,
              {
                label: "Total de Contratos",
                value: String(lista.length),
                icon: FileText,
                accent: "info"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$1,
              {
                label: "Ativos",
                value: String(totais.ativos),
                icon: CircleCheck,
                accent: "success"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$1,
              {
                label: "A Receber",
                value: fmtBRL$1(totais.aReceber),
                icon: Clock,
                accent: "warning"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox$1,
              {
                label: "Recebido",
                value: fmtBRL$1(totais.recebido),
                icon: TrendingUp,
                accent: "info"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: busca,
                  onChange: (e) => setBusca(e.target.value),
                  placeholder: "Buscar por cliente, ID ou status...",
                  className: "h-11 pl-9"
                }
              )
            ] }),
            query.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              "Carregando contratos..."
            ] }) : query.isError || query.data?.error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 py-12 text-sm text-destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5" }),
              query.data?.error ?? "Erro ao carregar contratos."
            ] }) : filtrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onNovo: () => setNovoOpen(true), hasFilter: busca.length > 0 }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-hidden rounded-md border md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("id"),
                      className: "inline-flex items-center gap-1 hover:text-foreground transition-colors",
                      children: [
                        "ID ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "id" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("cliente"),
                      className: "inline-flex items-center gap-1 hover:text-foreground transition-colors",
                      children: [
                        "Cliente ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "cliente" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("principal"),
                      className: "inline-flex items-center gap-1 hover:text-foreground transition-colors ml-auto",
                      children: [
                        "Principal ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "principal" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("taxa"),
                      className: "inline-flex items-center gap-1 hover:text-foreground transition-colors ml-auto",
                      children: [
                        "Taxa ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "taxa" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("parcelas"),
                      className: "inline-flex items-center gap-1 hover:text-foreground transition-colors mx-auto",
                      children: [
                        "Parcelas ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "parcelas" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("data_inicio"),
                      className: "inline-flex items-center gap-1 hover:text-foreground transition-colors",
                      children: [
                        "Início ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "data_inicio" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("status"),
                      className: "inline-flex items-center gap-1 hover:text-foreground transition-colors mx-auto",
                      children: [
                        "Status ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "status" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: "Ações" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginados.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RowDesktop,
                  {
                    item: e,
                    seqId: e.seqId,
                    onEdit: () => handleEditar(e.id),
                    onDelete: () => setEmprestimoParaExcluir(e),
                    isLoadingEdit: loadingEditId === e.id
                  },
                  String(e.id)
                )) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 md:hidden", children: paginados.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardMobile,
                {
                  item: e,
                  seqId: e.seqId,
                  onEdit: () => handleEditar(e.id),
                  onDelete: () => setEmprestimoParaExcluir(e),
                  isLoadingEdit: loadingEditId === e.id
                },
                String(e.id)
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TablePagination,
                {
                  page: paginaAtual,
                  pageSize: porPagina,
                  totalItems: filtrados.length,
                  onPageChange: (p) => setPagina(p),
                  onPageSizeChange: (s) => {
                    setPorPagina(s);
                    setPagina(1);
                  },
                  itemLabel: "contratos"
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NovoEmprestimoDialog,
      {
        open: novoOpen,
        onOpenChange: handleDialogChange,
        emprestimo: emprestimoEditando
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: !!emprestimoParaExcluir,
        onOpenChange: (o) => !o && setEmprestimoParaExcluir(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Excluir empréstimo?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
              "Esta ação removerá o empréstimo",
              emprestimoParaExcluir?.cliente_nome ? ` de ${emprestimoParaExcluir.cliente_nome}` : "",
              " ",
              "e todas as suas parcelas. Esta operação não pode ser desfeita."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: deleteMutation.isPending, children: "Cancelar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                disabled: deleteMutation.isPending,
                onClick: (e) => {
                  e.preventDefault();
                  if (emprestimoParaExcluir) {
                    deleteMutation.mutate(emprestimoParaExcluir.id);
                  }
                },
                className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                children: deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                  " Excluindo..."
                ] }) : "Excluir"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function KpiBox$1({
  label,
  value,
  icon: Icon2,
  accent
}) {
  const accentStyles = {
    info: "border-t-info text-info",
    warning: "border-t-warning text-warning",
    destructive: "border-t-destructive text-destructive",
    success: "border-t-success text-success"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-xl border border-border border-t-4 bg-card p-3 sm:p-4 shadow-sm",
        accentStyles[accent]
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground leading-tight", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-lg sm:text-xl font-extrabold text-foreground", children: value })
      ]
    }
  );
}
function RowDesktop({
  item,
  seqId,
  onEdit,
  onDelete,
  isLoadingEdit
}) {
  const progresso = item.parcelas_total > 0 ? Math.round(item.parcelas_pagas / item.parcelas_total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t hover:bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-3 font-mono text-xs text-muted-foreground", children: [
      "#",
      String(seqId).padStart(3, "0")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 font-medium text-foreground", children: item.cliente_nome ?? "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right", children: fmtBRL$1(item.valor_principal) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-3 text-right text-muted-foreground", children: [
      item.taxa_juros,
      "% ",
      item.tipo_juros === "composto" ? "comp." : "simp."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.parcelas_pagas }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "/",
        item.parcelas_total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs text-muted-foreground", children: [
        "(",
        progresso,
        "%)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-left text-muted-foreground", children: fmtDate(item.data_inicio) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        variant: "outline",
        className: cn("capitalize", statusBadgeClass(item.status)),
        children: item.status ?? "—"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8 text-muted-foreground hover:text-foreground",
          onClick: onEdit,
          disabled: isLoadingEdit,
          "aria-label": "Editar empréstimo",
          children: isLoadingEdit ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8 text-muted-foreground hover:text-destructive",
          onClick: onDelete,
          "aria-label": "Excluir empréstimo",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
        }
      )
    ] }) })
  ] });
}
function CardMobile({
  item,
  seqId,
  onEdit,
  onDelete,
  isLoadingEdit
}) {
  const progresso = item.parcelas_total > 0 ? Math.round(item.parcelas_pagas / item.parcelas_total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-background p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold text-foreground", children: item.cliente_nome ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[11px] text-muted-foreground", children: [
          "#",
          String(seqId).padStart(3, "0")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: cn("capitalize", statusBadgeClass(item.status)),
          children: item.status ?? "—"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Principal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtBRL$1(item.valor_principal) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "A receber" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-warning", children: fmtBRL$1(item.total_a_receber) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Parcelas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground", children: [
          item.parcelas_pagas,
          "/",
          item.parcelas_total,
          " (",
          progresso,
          "%)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Início" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: fmtDate(item.data_inicio) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-end gap-2 border-t pt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "h-8 gap-1",
          onClick: onEdit,
          disabled: isLoadingEdit,
          children: [
            isLoadingEdit ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }),
            "Editar"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "h-8 gap-1 text-destructive hover:bg-destructive/10 hover:text-destructive",
          onClick: onDelete,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
            "Excluir"
          ]
        }
      )
    ] })
  ] });
}
function EmptyState({ onNovo, hasFilter }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 py-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-7 w-7" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-foreground", children: hasFilter ? "Nenhum contrato encontrado" : "Nenhum contrato cadastrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm text-muted-foreground", children: hasFilter ? "Tente ajustar a busca para encontrar o contrato desejado." : "Comece cadastrando o primeiro empréstimo da operação." })
    ] }),
    !hasFilter && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: onNovo,
        className: "bg-success text-success-foreground hover:bg-success/90",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          "Novo Empréstimo"
        ]
      }
    )
  ] });
}
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$5,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root$5.displayName;
const linhaSchema = objectType({
  nome_cliente: stringType().trim().min(1).max(200),
  cpf_cnpj: stringType().trim().max(20),
  telefone: stringType().trim().max(30).optional().default(""),
  email: stringType().trim().max(255).optional().default(""),
  contrato_id: stringType().trim().min(1).max(100),
  valor_principal: numberType().nonnegative(),
  taxa_juros: numberType().min(0),
  tipo_juros: stringType().trim().max(40),
  num_parcelas: numberType().int().min(1).max(360),
  periodicidade: stringType().trim().max(40),
  data_inicio: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  num_parcela: numberType().int().min(1),
  data_vencimento: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  valor_parcela: numberType().nonnegative(),
  status_parcela: stringType().trim().max(40),
  data_pagamento: stringType().optional().default(""),
  valor_pago: numberType().nullable().optional()
});
const bulkImportSchema = objectType({
  rows: arrayType(linhaSchema).min(1).max(5e3)
});
const bulkImport = createServerFn({
  method: "POST"
}).middleware([requireAuthForExternal]).inputValidator((input) => bulkImportSchema.parse(input)).handler(createSsrRpc("0b7cf50ce24510d9b81ef047a190dcabab6d0fd54bdef20811a78c2b7252e564"));
const CHUNK_SIZE = 100;
const fmtBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const hojeMidnight = () => {
  const d = /* @__PURE__ */ new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};
function parseDataBR(input) {
  if (input === null || input === void 0 || input === "") return "";
  if (input instanceof Date && !isNaN(input.getTime())) {
    const y = input.getFullYear();
    const m = String(input.getMonth() + 1).padStart(2, "0");
    const d2 = String(input.getDate()).padStart(2, "0");
    return `${y}-${m}-${d2}`;
  }
  const s = String(input).trim();
  const br = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (br) return `${br[3]}-${br[2]}-${br[1]}`;
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  }
  return "";
}
function parseNumber(v) {
  if (v === null || v === void 0 || v === "") return 0;
  if (typeof v === "number") return v;
  const s = String(v).trim().replace(/\./g, "").replace(",", ".");
  const n = Number(s);
  return isNaN(n) ? 0 : n;
}
function parseInt2(v) {
  if (typeof v === "number") return Math.trunc(v);
  const s = String(v ?? "").trim();
  const m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[1]);
  const n = parseInt(s.replace(/\D/g, ""), 10);
  return isNaN(n) ? 0 : n;
}
function parseTotalParcelas(v, fallback = 0) {
  const s = String(v ?? "").trim();
  const m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[2]);
  if (typeof v === "number") return Math.trunc(v);
  const n = parseInt(s.replace(/\D/g, ""), 10);
  return isNaN(n) || n === 0 ? fallback : n;
}
function normalizar(rawRows) {
  const hoje = hojeMidnight();
  return rawRows.map((r, i) => {
    const get = (k) => {
      if (r[k] !== void 0) return r[k];
      const lower = Object.keys(r).find(
        (kk) => kk.toLowerCase().trim() === k.toLowerCase()
      );
      return lower ? r[lower] : void 0;
    };
    const nome_cliente = String(get("nome_cliente") ?? "").trim();
    const cpf_cnpj = String(get("cpf_cnpj") ?? "").trim();
    const contrato_id = String(get("contrato_id") ?? "").trim();
    const valor_principal = parseNumber(get("valor_principal"));
    const taxa_juros = parseNumber(get("taxa_juros"));
    const tipo_juros = String(get("tipo_juros") ?? "").trim();
    const numParcRaw = get("num_parcelas");
    const num_parcela = parseInt2(get("num_parcela"));
    const num_parcelas = parseTotalParcelas(numParcRaw, num_parcela);
    const periodicidade = String(get("periodicidade") ?? "").trim();
    const data_inicio = parseDataBR(get("data_inicio"));
    const data_vencimento = parseDataBR(get("data_vencimento"));
    const valor_parcela = parseNumber(get("valor_parcela"));
    const status_parcela = String(get("status_parcela") ?? "Pendente").trim();
    const data_pagamento = parseDataBR(get("data_pagamento"));
    const valor_pago_raw = get("valor_pago");
    const valor_pago = valor_pago_raw === "" || valor_pago_raw === null || valor_pago_raw === void 0 ? null : parseNumber(valor_pago_raw);
    const erros = [];
    if (!nome_cliente) erros.push("nome_cliente");
    if (!cpf_cnpj) erros.push("cpf_cnpj");
    if (!contrato_id) erros.push("contrato_id");
    if (valor_principal <= 0) erros.push("valor_principal");
    if (!tipo_juros) erros.push("tipo_juros");
    if (num_parcelas <= 0) erros.push("num_parcelas");
    if (!periodicidade) erros.push("periodicidade");
    if (!data_inicio) erros.push("data_inicio");
    if (num_parcela <= 0) erros.push("num_parcela");
    if (!data_vencimento) erros.push("data_vencimento");
    if (valor_parcela <= 0) erros.push("valor_parcela");
    if (!status_parcela) erros.push("status_parcela");
    let _statusCalc = "pendente";
    if (status_parcela.toLowerCase() === "pago") _statusCalc = "pago";
    else if (data_vencimento) {
      const dt = /* @__PURE__ */ new Date(data_vencimento + "T00:00:00");
      if (dt < hoje) _statusCalc = "atrasado";
    }
    return {
      _linha: i + 2,
      // header é linha 1
      _valido: erros.length === 0,
      _erros: erros,
      _statusCalc,
      nome_cliente,
      cpf_cnpj,
      telefone: String(get("telefone") ?? "").trim(),
      email: String(get("email") ?? "").trim(),
      contrato_id,
      valor_principal,
      taxa_juros,
      tipo_juros,
      num_parcelas,
      periodicidade,
      data_inicio,
      num_parcela,
      data_vencimento,
      valor_parcela,
      status_parcela,
      data_pagamento,
      valor_pago
    };
  });
}
function baixarModelo() {
  const headers = [
    "nome_cliente",
    "cpf_cnpj",
    "telefone",
    "email",
    "contrato_id",
    "valor_principal",
    "taxa_juros",
    "tipo_juros",
    "num_parcelas",
    "periodicidade",
    "data_inicio",
    "num_parcela",
    "data_vencimento",
    "valor_parcela",
    "status_parcela",
    "data_pagamento",
    "valor_pago"
  ];
  const exemplos = [
    {
      nome_cliente: "João da Silva",
      cpf_cnpj: "123.456.789-00",
      telefone: "(73) 99999-0000",
      email: "joao@exemplo.com",
      contrato_id: "CONT-001",
      valor_principal: 2e3,
      taxa_juros: 5,
      tipo_juros: "Simples",
      num_parcelas: 6,
      periodicidade: "Mensal",
      data_inicio: "01/01/2025",
      num_parcela: 1,
      data_vencimento: "01/02/2025",
      valor_parcela: 350,
      status_parcela: "Pago",
      data_pagamento: "01/02/2025",
      valor_pago: 350
    },
    {
      nome_cliente: "João da Silva",
      cpf_cnpj: "123.456.789-00",
      telefone: "(73) 99999-0000",
      email: "joao@exemplo.com",
      contrato_id: "CONT-001",
      valor_principal: 2e3,
      taxa_juros: 5,
      tipo_juros: "Simples",
      num_parcelas: 6,
      periodicidade: "Mensal",
      data_inicio: "01/01/2025",
      num_parcela: 2,
      data_vencimento: "01/03/2025",
      valor_parcela: 350,
      status_parcela: "Pendente",
      data_pagamento: "",
      valor_pago: ""
    }
  ];
  const ws = utils.json_to_sheet(exemplos, { header: headers });
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Importacao");
  writeFileSync(wb, "JuroPro_Modelo_Importacao.xlsx");
}
function BulkImporter() {
  const [fase, setFase] = reactExports.useState("upload");
  const [arquivo, setArquivo] = reactExports.useState(null);
  const [dados, setDados] = reactExports.useState([]);
  const [drag, setDrag] = reactExports.useState(false);
  const [progresso, setProg] = reactExports.useState(0);
  const [filtroStatus, setFiltro] = reactExports.useState("todos");
  const [resultado, setResultado] = reactExports.useState(null);
  const fileRef = reactExports.useRef(null);
  const bulkImportFn = useServerFn(bulkImport);
  const queryClient = useQueryClient();
  const lerArquivo = reactExports.useCallback(async (file) => {
    setArquivo(file);
    const ext = file.name.toLowerCase().split(".").pop();
    try {
      let raw = [];
      if (ext === "csv") {
        const text = await file.text();
        const parsed = Papa.parse(text, {
          header: true,
          skipEmptyLines: true
        });
        raw = parsed.data;
      } else if (ext === "xlsx" || ext === "xls") {
        const buffer = await file.arrayBuffer();
        const wb = readSync(buffer, { type: "array", cellDates: true });
        const ws = wb.Sheets[wb.SheetNames[0]];
        raw = utils.sheet_to_json(ws, { defval: "" });
      } else {
        toast.error("Formato inválido. Use .xlsx, .xls ou .csv");
        return;
      }
      if (raw.length === 0) {
        toast.error("Planilha vazia ou sem cabeçalhos válidos.");
        return;
      }
      const norm = normalizar(raw);
      setDados(norm);
      setFase("preview");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao ler o arquivo: " + err.message);
    }
  }, []);
  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f) lerArquivo(f);
  };
  const stats = {
    total: dados.length,
    validos: dados.filter((r) => r._valido).length,
    invalidos: dados.filter((r) => !r._valido).length,
    pagos: dados.filter((r) => r._statusCalc === "pago").length,
    pendentes: dados.filter((r) => r._statusCalc === "pendente").length,
    atrasados: dados.filter((r) => r._statusCalc === "atrasado").length
  };
  const filtrados = dados.filter(
    (r) => filtroStatus === "todos" || r._statusCalc === filtroStatus
  );
  const importar = async () => {
    const validos = dados.filter((r) => r._valido);
    if (validos.length === 0) {
      toast.error("Não há linhas válidas para importar.");
      return;
    }
    setFase("processando");
    setProg(0);
    const chunks = [];
    for (let i = 0; i < validos.length; i += CHUNK_SIZE) {
      chunks.push(validos.slice(i, i + CHUNK_SIZE));
    }
    let agreg = {
      ok: true,
      error: null,
      clientes_criados: 0,
      clientes_existentes: 0,
      emprestimos_criados: 0,
      emprestimos_existentes: 0,
      parcelas_inseridas: 0,
      warnings: []
    };
    try {
      for (let i = 0; i < chunks.length; i++) {
        const payload = chunks[i].map((r) => ({
          nome_cliente: r.nome_cliente,
          cpf_cnpj: r.cpf_cnpj,
          telefone: r.telefone,
          email: r.email,
          contrato_id: r.contrato_id,
          valor_principal: r.valor_principal,
          taxa_juros: r.taxa_juros,
          tipo_juros: r.tipo_juros,
          num_parcelas: r.num_parcelas,
          periodicidade: r.periodicidade,
          data_inicio: r.data_inicio,
          num_parcela: r.num_parcela,
          data_vencimento: r.data_vencimento,
          valor_parcela: r.valor_parcela,
          status_parcela: r.status_parcela,
          data_pagamento: r.data_pagamento,
          valor_pago: r.valor_pago
        }));
        const res = await bulkImportFn({ data: { rows: payload } });
        agreg = {
          ok: agreg.ok && res.ok,
          error: res.error ?? agreg.error,
          clientes_criados: agreg.clientes_criados + res.clientes_criados,
          clientes_existentes: agreg.clientes_existentes + res.clientes_existentes,
          emprestimos_criados: agreg.emprestimos_criados + res.emprestimos_criados,
          emprestimos_existentes: agreg.emprestimos_existentes + res.emprestimos_existentes,
          parcelas_inseridas: agreg.parcelas_inseridas + res.parcelas_inseridas,
          warnings: [...agreg.warnings, ...res.warnings]
        };
        setProg(Math.round((i + 1) / chunks.length * 100));
      }
      await queryClient.invalidateQueries();
      setResultado(agreg);
      setFase("concluido");
      toast.success(
        `Importação concluída: ${agreg.parcelas_inseridas} parcelas em ${agreg.emprestimos_criados} contratos.`
      );
    } catch (err) {
      console.error(err);
      toast.error("Erro durante a importação: " + err.message);
      setFase("preview");
    }
  };
  const resetar = () => {
    setFase("upload");
    setArquivo(null);
    setDados([]);
    setProg(0);
    setResultado(null);
    setFiltro("todos");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e3a5f] to-emerald-600 text-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Importação em Massa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Importe clientes, contratos e parcelas a partir de uma planilha Excel ou CSV." })
      ] })
    ] }),
    fase === "upload" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onDragOver: (e) => {
            e.preventDefault();
            setDrag(true);
          },
          onDragLeave: () => setDrag(false),
          onDrop,
          onClick: () => fileRef.current?.click(),
          className: cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-muted/30 px-6 py-12 text-center transition-all",
            "hover:border-emerald-500 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20",
            drag && "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileRef,
                type: "file",
                accept: ".xlsx,.xls,.csv",
                className: "hidden",
                onChange: (e) => {
                  const f = e.target.files?.[0];
                  if (f) lerArquivo(f);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "mb-3 h-12 w-12 text-emerald-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 font-semibold text-foreground", children: "Arraste sua planilha aqui" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-muted-foreground", children: "ou clique para selecionar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                className: "bg-emerald-600 text-white hover:bg-emerald-700",
                onClick: (e) => {
                  e.stopPropagation();
                  fileRef.current?.click();
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
                  "Selecionar Arquivo"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Formatos: .xlsx, .xls, .csv • até 5.000 linhas" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-wrap items-center gap-4 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[200px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "📋 Modelo de Planilha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Baixe o modelo oficial com cabeçalhos e exemplos." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: baixarModelo,
            className: "border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
              "Baixar Modelo"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-semibold text-foreground", children: "📌 O que o importador faz automaticamente:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          ["🔗", "Relacionamento", "Cria Cliente → Contrato → Parcelas em uma linha"],
          ["🔄", "Detecção de duplicatas", "CPF existente reutiliza o cliente"],
          ["🔴", "Status automático", "Vencidas pendentes viram Atrasadas"],
          ["⚡", "Em lotes", "Processa em chunks para máxima performance"],
          ["✅", "Validação", "Linhas com erros são listadas e ignoradas"],
          ["🛡️", "Multi-tenant", "Tudo é vinculado ao seu usuário"]
        ].map(([ic, t, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-3 rounded-lg bg-muted/40 p-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: ic }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s })
              ] })
            ]
          },
          t
        )) })
      ] })
    ] }),
    fase === "preview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-wrap items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-8 w-8 text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[150px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: arquivo?.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            ((arquivo?.size ?? 0) / 1024).toFixed(1),
            " KB • ",
            dados.length,
            " linhas"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: resetar, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "mr-2 h-4 w-4" }),
          "Trocar arquivo"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Total", value: stats.total, icon: "📋", color: "blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Válidas", value: stats.validos, icon: "✅", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Com erro", value: stats.invalidos, icon: "❌", color: "red" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Pagas", value: stats.pagos, icon: "💚", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Atrasadas", value: stats.atrasados, icon: "🔴", color: "red" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Pendentes", value: stats.pendentes, icon: "⏳", color: "blue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "🔍 Preview dos Dados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: filtroStatus,
              onValueChange: (v) => setFiltro(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "todos", children: [
                    "Todos (",
                    stats.total,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "pago", children: [
                    "Pagos (",
                    stats.pagos,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "pendente", children: [
                    "Pendentes (",
                    stats.pendentes,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "atrasado", children: [
                    "Atrasados (",
                    stats.atrasados,
                    ")"
                  ] })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[400px] overflow-auto rounded-md border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[800px] text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: ["#", "Cliente", "CPF", "Contrato", "Parc.", "Vencimento", "Valor", "Status", "OK"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-semibold", children: h }, h)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtrados.slice(0, 200).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t hover:bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: r._linha }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium text-foreground", children: r.nome_cliente || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "⚠️ vazio" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: r.cpf_cnpj }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold text-emerald-600", children: r.contrato_id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2", children: [
                r.num_parcela,
                "/",
                r.num_parcelas
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  className: cn(
                    "px-3 py-2",
                    r._statusCalc === "atrasado" && "text-destructive"
                  ),
                  children: r.data_vencimento || "—"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold", children: r.valor_parcela ? fmtBRL(r.valor_parcela) : "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { s: r._statusCalc }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-center", children: r._valido ? "✅" : "❌" })
            ] }, i)) })
          ] }),
          filtrados.length > 200 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-t bg-muted/40 p-2 text-center text-xs text-muted-foreground", children: [
            "Mostrando 200 de ",
            filtrados.length,
            " linhas filtradas"
          ] })
        ] }),
        stats.invalidos > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start gap-2 rounded-md border-l-4 border-destructive bg-destructive/10 p-3 text-sm text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.invalidos }),
            " linha(s) com campos obrigatórios ausentes serão ignoradas."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: resetar, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
          "Cancelar"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: importar,
            disabled: stats.validos === 0,
            className: "bg-emerald-600 text-white hover:bg-emerald-700",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "mr-2 h-4 w-4" }),
              "Importar ",
              stats.validos,
              " linha(s)"
            ]
          }
        )
      ] })
    ] }),
    fase === "processando" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mx-auto h-12 w-12 animate-spin text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground", children: "Importando sua carteira..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Processando em blocos de ",
        CHUNK_SIZE,
        " linhas"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progresso, className: "h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-semibold text-emerald-600", children: [
          progresso,
          "%"
        ] })
      ] })
    ] }),
    fase === "concluido" && resultado && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto mb-2 h-14 w-14 text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: "Importação Concluída!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sua carteira foi importada com sucesso." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Clientes novos", value: resultado.clientes_criados, icon: "👥", color: "blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Clientes existentes", value: resultado.clientes_existentes, icon: "🔄", color: "amber" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Contratos novos", value: resultado.emprestimos_criados, icon: "📋", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Contratos duplicados", value: resultado.emprestimos_existentes, icon: "🔁", color: "amber" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Parcelas geradas", value: resultado.parcelas_inseridas, icon: "💳", color: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KpiMini, { label: "Avisos", value: resultado.warnings.length, icon: "⚠️", color: "amber" })
      ] }),
      resultado.warnings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-60 overflow-auto rounded-md border bg-muted/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-semibold text-foreground", children: "Logs:" }),
        resultado.warnings.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mb-1 flex items-start gap-2 rounded border-l-2 border-amber-500 bg-amber-50 p-2 text-xs dark:bg-amber-950/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-3 w-3 flex-shrink-0 text-amber-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w })
            ]
          },
          i
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: resetar, variant: "outline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
        "Nova Importação"
      ] }) })
    ] })
  ] });
}
function StatusBadge({ s }) {
  const map = {
    pago: { label: "Pago", className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100" },
    pendente: { label: "Pendente", className: "bg-blue-100 text-blue-700 hover:bg-blue-100" },
    atrasado: { label: "Atrasado", className: "bg-red-100 text-red-700 hover:bg-red-100" }
  };
  const m = map[s];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: cn("font-semibold", m.className), children: m.label });
}
function KpiMini({
  label,
  value,
  icon,
  color
}) {
  const borders = {
    blue: "border-t-blue-500",
    green: "border-t-emerald-500",
    red: "border-t-red-500",
    amber: "border-t-amber-500"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("border-t-4 p-3", borders[color]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-bold text-foreground", children: value })
  ] });
}
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$4,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root$4.displayName;
async function lookupCep(cep) {
  const clean = cep.replace(/\D/g, "");
  if (clean.length !== 8) return null;
  try {
    const r = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
    if (!r.ok) return null;
    const data = await r.json();
    if (data.erro) return null;
    return data;
  } catch (e) {
    console.error("ViaCEP error:", e);
    return null;
  }
}
const BRAZIL_UFS = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO"
];
const STORAGE_KEY = "juropro:dark_mode";
const EVENT = "juropro:dark_mode_changed";
function readDark() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
function applyDark(on) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (on) root.classList.add("dark");
  else root.classList.remove("dark");
}
function useDarkMode() {
  const [dark, setDarkState] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const initial = readDark();
    setDarkState(initial);
    applyDark(initial);
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        const v = readDark();
        setDarkState(v);
        applyDark(v);
      }
    };
    const onCustom = () => {
      const v = readDark();
      setDarkState(v);
      applyDark(v);
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVENT, onCustom);
    };
  }, []);
  const setDark = (next) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
    }
    applyDark(next);
    setDarkState(next);
    window.dispatchEvent(new Event(EVENT));
  };
  return { dark, setDark };
}
const Route$2 = createFileRoute("/_authed/configuracoes")({
  head: () => ({
    meta: [{ title: "Configurações — JuroPro" }]
  }),
  component: ConfiguracoesPage
});
const maskCpf = (v) => v.replace(/\D/g, "").slice(0, 11).replace(/^(\d{3})(\d)/, "$1.$2").replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1-$2");
function avaliarSenha(s) {
  if (!s) return { pct: 0, label: "", className: "bg-muted" };
  let pts = 0;
  if (s.length >= 8) pts++;
  if (/[A-Z]/.test(s)) pts++;
  if (/[0-9]/.test(s)) pts++;
  if (/[^A-Za-z0-9]/.test(s)) pts++;
  const map = [
    { pct: 0, label: "", className: "bg-muted" },
    { pct: 25, label: "Fraca", className: "bg-destructive" },
    { pct: 50, label: "Regular", className: "bg-warning" },
    { pct: 75, label: "Boa", className: "bg-primary/70" },
    { pct: 100, label: "Forte", className: "bg-success" }
  ];
  return map[pts];
}
const VARIAVEIS = [
  { var: "{{cliente}}", desc: "Nome do cliente" },
  { var: "{{parcela}}", desc: "Nº da parcela" },
  { var: "{{contrato}}", desc: "ID do contrato" },
  { var: "{{valor}}", desc: "Valor da parcela" },
  { var: "{{vencimento}}", desc: "Data de vencimento" },
  { var: "{{negocio}}", desc: "Nome do negócio" }
];
const MSG_PADRAO = `Olá {{cliente}}, tudo bem? 😊

Passando para lembrar que sua parcela *{{parcela}}* do contrato *{{contrato}}* no valor de *{{valor}}* vence em *{{vencimento}}*.

Qualquer dúvida, estamos à disposição! 🙏

_{{negocio}} - Gestão de Empréstimos_`;
function SectionHeader({
  icon,
  title,
  description,
  iconBg = "bg-primary/10 text-primary"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          iconBg
        ),
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground sm:text-base", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: description })
    ] })
  ] });
}
function PasswordField({
  id,
  label,
  value,
  onChange
}) {
  const [show, setShow] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id,
          type: show ? "text" : "password",
          value,
          onChange: (e) => onChange(e.target.value),
          placeholder: "••••••••",
          className: "pr-10"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setShow((s) => !s),
          className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground",
          "aria-label": show ? "Ocultar senha" : "Mostrar senha",
          children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
function TabPerfil() {
  const { name, setName, defaultName } = useAdminName();
  const { avatar, setAvatar } = useAdminAvatar();
  const { user, updatePassword } = useAuth();
  const [form, setForm] = reactExports.useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cargo: "Administrador",
    cidade: "",
    uf: "BA"
  });
  const [saving, setSaving] = reactExports.useState(false);
  const [senhaAtual, setSenhaAtual] = reactExports.useState("");
  const [novaSenha, setNovaSenha] = reactExports.useState("");
  const [confSenha, setConfSenha] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (user?.email) {
      setForm((p) => p.email === user.email ? p : { ...p, email: user.email ?? "" });
    }
  }, [user?.email]);
  reactExports.useEffect(() => {
    setForm((p) => ({
      ...p,
      nome: name === defaultName ? "" : name
    }));
  }, [name, defaultName]);
  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));
  const onPickFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Arquivo maior que 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setAvatar(String(ev.target?.result ?? ""));
    reader.readAsDataURL(file);
    e.target.value = "";
  };
  const forca = avaliarSenha(novaSenha);
  const senhasOk = novaSenha.length > 0 && novaSenha === confSenha;
  const iniciais = (form.nome || "GF").split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase()).join("");
  const salvar = async () => {
    setSaving(true);
    const querTrocarSenha = senhaAtual || novaSenha || confSenha;
    if (querTrocarSenha) {
      if (!senhaAtual) {
        toast.error("Informe a senha atual");
        setSaving(false);
        return;
      }
      if (!novaSenha || novaSenha.length < 8) {
        toast.error("A nova senha deve ter no mínimo 8 caracteres");
        setSaving(false);
        return;
      }
      if (novaSenha !== confSenha) {
        toast.error("A nova senha e a confirmação não coincidem");
        setSaving(false);
        return;
      }
      if (!user?.email) {
        toast.error("Sessão inválida. Faça login novamente.");
        setSaving(false);
        return;
      }
      const { error: signErr } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: senhaAtual
      });
      if (signErr) {
        toast.error("Senha atual incorreta");
        setSaving(false);
        return;
      }
      const { error: updErr } = await updatePassword(novaSenha);
      if (updErr) {
        toast.error(`Não foi possível alterar a senha: ${updErr}`);
        setSaving(false);
        return;
      }
      setSenhaAtual("");
      setNovaSenha("");
      setConfSenha("");
      toast.success("Senha alterada com sucesso! Use a nova senha no próximo login.");
    }
    setName(form.nome.trim());
    setSaving(false);
    if (!querTrocarSenha) toast.success("Perfil atualizado com sucesso!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }),
          title: "Foto de Perfil",
          description: "Aparece no rodapé da sidebar e nos documentos",
          iconBg: "bg-primary/10 text-primary"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 sm:flex-row sm:items-center", children: [
        avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: avatar,
            alt: "Foto do perfil",
            className: "h-20 w-20 shrink-0 rounded-full border-2 border-primary object-cover"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-2xl font-bold text-primary-foreground", children: iniciais || "GF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2 text-center sm:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileRef,
              type: "file",
              accept: "image/*",
              className: "hidden",
              onChange: onPickFile
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-2 sm:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => fileRef.current?.click(),
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4" }),
                  "Alterar foto"
                ]
              }
            ),
            avatar && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setAvatar(null),
                className: "gap-2 text-destructive hover:text-destructive",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
                  "Remover"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "JPG, PNG • Máx. 2MB • Crop circular automático" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }),
          title: "Dados Pessoais",
          description: "Suas informações de acesso ao sistema",
          iconBg: "bg-info/10 text-info"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "perfil-nome", children: [
            "Nome Completo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-nome", value: form.nome, onChange: set("nome") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-cpf", children: "CPF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "perfil-cpf",
              value: form.cpf,
              onChange: (e) => setForm((p) => ({ ...p, cpf: maskCpf(e.target.value) })),
              placeholder: "000.000.000-00",
              maxLength: 14
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "perfil-email", children: [
            "E-mail ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "perfil-email",
              type: "email",
              value: form.email,
              onChange: set("email")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-tel", children: "Telefone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "perfil-tel",
              value: form.telefone,
              onChange: (e) => setForm((p) => ({
                ...p,
                telefone: maskTelefone(e.target.value)
              })),
              placeholder: "(00) 00000-0000",
              maxLength: 15
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-cargo", children: "Cargo / Função" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "perfil-cargo", value: form.cargo, disabled: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_80px] gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-cidade", children: "Cidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "perfil-cidade",
                value: form.cidade,
                onChange: set("cidade")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "perfil-uf", children: "UF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.uf,
                onValueChange: (v) => setForm((p) => ({ ...p, uf: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "perfil-uf", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRAZIL_UFS.map((uf) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: uf, children: uf }, uf)) })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }),
          title: "Segurança",
          description: "Altere sua senha de acesso",
          iconBg: "bg-warning/10 text-warning"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PasswordField,
          {
            id: "senha-atual",
            label: "Senha Atual",
            value: senhaAtual,
            onChange: setSenhaAtual
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PasswordField,
            {
              id: "senha-nova",
              label: "Nova Senha",
              value: novaSenha,
              onChange: setNovaSenha
            }
          ),
          novaSenha && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full rounded bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "h-full rounded transition-all",
                  forca.className
                ),
                style: { width: `${forca.pct}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: forca.label })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PasswordField,
            {
              id: "senha-conf",
              label: "Confirmar Nova Senha",
              value: confSenha,
              onChange: setConfSenha
            }
          ),
          confSenha && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: cn(
                "flex items-center gap-1 text-xs font-medium",
                senhasOk ? "text-success" : "text-destructive"
              ),
              children: senhasOk ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
                "Senhas coincidem"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" }),
                "Senhas não coincidem"
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-lg bg-muted/60 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "🔐 Requisitos: mínimo 8 caracteres, letras maiúsculas, números e caracteres especiais." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: salvar, disabled: saving, className: "gap-2", children: [
      saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
      "Salvar Perfil"
    ] }) })
  ] });
}
function TabNegocio() {
  const { name: businessName, setName: setBusinessName } = useBusinessName();
  const { logo, setLogo } = useBusinessLogo();
  const { details, setDetails } = useBusinessDetails();
  const [form, setForm] = reactExports.useState({
    nome: businessName,
    cnpj: details.cnpj,
    telefone: details.telefone,
    email: details.email,
    cep: details.cep,
    endereco: details.endereco,
    numero: details.numero,
    complemento: details.complemento,
    bairro: details.bairro,
    cidade: details.cidade,
    uf: details.uf || "BA",
    taxaPadrao: "5,00",
    tipoJurosPadrao: "simples",
    multaAtraso: "2,00"
  });
  const [drag, setDrag] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [cepLoading, setCepLoading] = reactExports.useState(false);
  const [cepOk, setCepOk] = reactExports.useState(false);
  const [cepErro, setCepErro] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setForm((p) => p.nome === businessName ? p : { ...p, nome: businessName });
  }, [businessName]);
  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));
  const handleLogo = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Arquivo maior que 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setLogo(String(ev.target?.result ?? ""));
    reader.readAsDataURL(file);
  };
  const buscarCEP = async () => {
    const cepDigits = form.cep.replace(/\D/g, "");
    if (cepDigits.length !== 8) {
      setCepErro("CEP deve ter 8 dígitos");
      setCepOk(false);
      return;
    }
    setCepLoading(true);
    setCepErro("");
    setCepOk(false);
    const data = await lookupCep(cepDigits);
    setCepLoading(false);
    if (!data) {
      setCepErro("CEP não encontrado");
      return;
    }
    setForm((p) => ({
      ...p,
      endereco: data.logradouro || p.endereco,
      bairro: data.bairro || p.bairro,
      cidade: data.localidade || p.cidade,
      uf: data.uf || p.uf
    }));
    setCepOk(true);
  };
  const salvar = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setBusinessName(form.nome.trim());
    setDetails({
      cnpj: form.cnpj,
      telefone: form.telefone,
      email: form.email,
      cep: form.cep,
      endereco: form.endereco,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      uf: form.uf
    });
    setSaving(false);
    toast.success("Dados do negócio salvos com sucesso!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }),
          title: "Logomarca",
          description: "Aparece no cabeçalho dos contratos e documentos",
          iconBg: "bg-primary/10 text-primary"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            role: "button",
            tabIndex: 0,
            onClick: () => fileRef.current?.click(),
            onDragOver: (e) => {
              e.preventDefault();
              setDrag(true);
            },
            onDragLeave: () => setDrag(false),
            onDrop: (e) => {
              e.preventDefault();
              setDrag(false);
              handleLogo(e.dataTransfer.files[0]);
            },
            className: cn(
              "flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-muted/30 px-4 py-6 text-center transition-colors hover:border-primary hover:bg-primary/5",
              drag && "border-primary bg-primary/5"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: fileRef,
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  onChange: (e) => handleLogo(e.target.files?.[0])
                }
              ),
              logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logo,
                  alt: "Logo",
                  className: "max-h-20 max-w-full rounded"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "mb-2 h-8 w-8 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Clique ou arraste sua logo aqui" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "PNG, JPG ou SVG • Recomendado 200×60px" })
              ] })
            ]
          }
        ),
        logo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-center gap-2 sm:flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => fileRef.current?.click(),
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
                "Trocar"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setLogo(null),
              className: "gap-2 text-destructive hover:text-destructive",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
                "Remover"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }),
          title: "Informações da Empresa",
          description: "Dados que aparecem nos contratos e documentos",
          iconBg: "bg-info/10 text-info"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "neg-nome", children: [
            "Nome do Negócio ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "neg-nome", value: form.nome, onChange: set("nome") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-cnpj", children: "CNPJ / CPF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-cnpj",
              value: form.cnpj,
              onChange: (e) => setForm((p) => ({ ...p, cnpj: maskCpfCnpj(e.target.value) })),
              placeholder: "00.000.000/0001-00 ou 000.000.000-00",
              maxLength: 18
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Máscara automática — CPF ou CNPJ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-tel", children: "Telefone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-tel",
              value: form.telefone,
              onChange: (e) => setForm((p) => ({
                ...p,
                telefone: maskTelefone(e.target.value)
              })),
              placeholder: "(00) 00000-0000",
              maxLength: 15
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-email", children: "E-mail" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-email",
              type: "email",
              value: form.email,
              onChange: set("email")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 mt-6 text-sm font-semibold text-foreground", children: "📍 Endereço" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-cep", children: "CEP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-cep",
              value: form.cep,
              onChange: (e) => {
                setForm((p) => ({ ...p, cep: maskCep(e.target.value) }));
                setCepOk(false);
                setCepErro("");
              },
              placeholder: "00000-000",
              maxLength: 9,
              className: cn(cepOk && "border-success focus-visible:ring-success"),
              onKeyDown: (e) => e.key === "Enter" && buscarCEP()
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: buscarCEP,
              disabled: cepLoading,
              className: "shrink-0 gap-2",
              children: [
                cepLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Buscar CEP" })
              ]
            }
          )
        ] }),
        cepOk && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs font-medium text-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
          " Endereço preenchido automaticamente!"
        ] }),
        cepErro && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" }),
          " ",
          cepErro
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-end", children: "Endereço" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-end",
              value: form.endereco,
              onChange: set("endereco")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[90px_1fr] gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-num", children: "Nº" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "neg-num",
                value: form.numero,
                onChange: set("numero")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-comp", children: "Complemento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "neg-comp",
                placeholder: "Apto, Sala...",
                value: form.complemento,
                onChange: set("complemento")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-bairro", children: "Bairro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-bairro",
              value: form.bairro,
              onChange: set("bairro")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_80px] gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-cid", children: "Cidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "neg-cid",
                value: form.cidade,
                onChange: set("cidade")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-uf", children: "UF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.uf,
                onValueChange: (v) => setForm((p) => ({ ...p, uf: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "neg-uf", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRAZIL_UFS.map((uf) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: uf, children: uf }, uf)) })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-5 w-5" }),
          title: "Padrões Financeiros",
          description: "Valores padrão ao criar novos empréstimos",
          iconBg: "bg-warning/10 text-warning"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-taxa", children: "Taxa de Juros Padrão (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-taxa",
              inputMode: "decimal",
              value: form.taxaPadrao,
              onChange: (e) => setForm((p) => ({ ...p, taxaPadrao: maskTaxa(e.target.value) })),
              placeholder: "0,00"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-tipo", children: "Tipo de Juros Padrão" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.tipoJurosPadrao,
              onValueChange: (v) => setForm((p) => ({ ...p, tipoJurosPadrao: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "neg-tipo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "simples", children: "Juros Simples" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "composto", children: "Juros Compostos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sojuros", children: "Só Juros" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "neg-multa", children: "Multa por Atraso (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "neg-multa",
              inputMode: "decimal",
              value: form.multaAtraso,
              onChange: (e) => setForm((p) => ({ ...p, multaAtraso: maskTaxa(e.target.value) })),
              placeholder: "0,00"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Aplicada sobre o valor da parcela em atraso" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: salvar, disabled: saving, className: "gap-2", children: [
      saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
      "Salvar Dados do Negócio"
    ] }) })
  ] });
}
function TabPreferencias() {
  const { name: businessName } = useBusinessName();
  const { dark, setDark } = useDarkMode();
  const [msg, setMsg] = reactExports.useState(MSG_PADRAO);
  const [preview, setPreview] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [prefs, setPrefs] = reactExports.useState({
    notifVencimento: true,
    notifAtraso: true,
    notifPagamento: false,
    whatsappAuto: false,
    compactView: false,
    itensPorPagina: "10",
    moeda: "BRL"
  });
  const setP = (field) => (v) => setPrefs((p) => ({ ...p, [field]: v }));
  const previewMsg = msg.replace(/\{\{cliente\}\}/g, "João da Silva").replace(/\{\{parcela\}\}/g, "2/6").replace(/\{\{contrato\}\}/g, "#004").replace(/\{\{valor\}\}/g, "R$ 620,00").replace(/\{\{vencimento\}\}/g, "23/04/2026").replace(/\{\{negocio\}\}/g, businessName);
  const salvar = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setSaving(false);
    toast.success("Preferências salvas com sucesso!");
  };
  const notificacoes = [
    {
      key: "notifVencimento",
      label: "Vencimentos do dia",
      sub: "Alerta quando há parcelas vencendo hoje"
    },
    {
      key: "notifAtraso",
      label: "Parcelas em atraso",
      sub: "Alerta diário de inadimplência"
    },
    {
      key: "notifPagamento",
      label: "Confirmação de baixa",
      sub: "Notifica ao registrar um recebimento"
    },
    {
      key: "whatsappAuto",
      label: "Cobrança automática",
      sub: "Envia WhatsApp automaticamente no vencimento"
    }
  ];
  const interfaceItems = [
    {
      key: "darkMode",
      label: "Modo Escuro",
      sub: "Ativar tema escuro no sistema",
      checked: dark,
      onChange: setDark
    },
    {
      key: "compactView",
      label: "Visualização compacta",
      sub: "Reduz o espaçamento das tabelas",
      checked: prefs.compactView,
      onChange: (v) => setP("compactView")(v)
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }),
          title: "Mensagem de Cobrança (WhatsApp)",
          description: "Personalize o texto enviado automaticamente",
          iconBg: "bg-success/15 text-success"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-medium text-foreground", children: "Variáveis disponíveis — clique para inserir:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: VARIAVEIS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setMsg((m) => m + v.var),
          className: "group inline-flex items-center gap-1 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-semibold text-success transition-colors hover:bg-success/20",
          title: v.desc,
          children: [
            v.var,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden text-[10px] font-normal text-success/70 sm:inline", children: [
              "· ",
              v.desc
            ] })
          ]
        },
        v.var
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          rows: 9,
          value: msg,
          onChange: (e) => setMsg(e.target.value),
          placeholder: "Digite a mensagem...",
          className: "font-mono text-sm leading-relaxed"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setPreview((p) => !p),
            className: "gap-2",
            children: [
              preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
              preview ? "Ocultar Preview" : "Ver Preview"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setMsg(MSG_PADRAO),
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
              "Restaurar padrão"
            ]
          }
        )
      ] }),
      preview && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-medium text-foreground", children: "📱 Preview com dados reais:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap break-words rounded-lg border-l-4 border-success bg-success/10 p-4 text-sm leading-relaxed text-foreground", children: previewMsg })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5" }),
          title: "Notificações",
          description: "Controle quais alertas você deseja receber",
          iconBg: "bg-info/10 text-info"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y", children: notificacoes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between gap-4 py-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.sub })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: prefs[t.key],
                onCheckedChange: setP(t.key)
              }
            )
          ]
        },
        t.key
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border bg-card p-4 shadow-sm md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-5 w-5" }),
          title: "Interface",
          description: "Personalização visual do sistema",
          iconBg: "bg-accent text-accent-foreground"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y", children: interfaceItems.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between gap-4 py-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.sub })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: t.checked, onCheckedChange: t.onChange })
          ]
        },
        t.key
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pref-itens", children: "Itens por página (padrão)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: prefs.itensPorPagina,
              onValueChange: setP("itensPorPagina"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "pref-itens", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["5", "10", "25", "50", "100"].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: n, children: [
                  n,
                  " itens"
                ] }, n)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pref-moeda", children: "Moeda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: prefs.moeda, onValueChange: setP("moeda"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "pref-moeda", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "BRL", children: "BRL — Real Brasileiro" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "USD", children: "USD — Dólar Americano" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EUR", children: "EUR — Euro" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: salvar, disabled: saving, className: "gap-2", children: [
      saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
      "Salvar Preferências"
    ] }) })
  ] });
}
function ConfiguracoesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, { className: "text-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-medium text-muted-foreground", children: "Configurações" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 space-y-6 p-4 md:p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm md:h-11 md:w-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground md:text-2xl", children: "Configurações" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: "Gerencie seu perfil, negócio e preferências." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "perfil", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid h-auto w-full grid-cols-2 gap-1 bg-muted p-1 sm:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "perfil",
                className: "flex items-center gap-2 py-2 text-xs sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Meu Perfil" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Perfil" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "negocio",
                className: "flex items-center gap-2 py-2 text-xs sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Dados do Negócio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Negócio" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "preferencias",
                className: "flex items-center gap-2 py-2 text-xs sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Preferências" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Prefs" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "dados",
                className: "flex items-center gap-2 py-2 text-xs sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Dados e Backup" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Dados" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "perfil", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabPerfil, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "negocio", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabNegocio, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "preferencias", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabPreferencias, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dados", className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BulkImporter, {}) })
        ] }) })
      ] })
    ] })
  ] }) });
}
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
const formSchema = objectType({
  nome: stringType().trim().min(1, "Informe o nome"),
  email: stringType().trim().email("E-mail inválido").or(literalType("")).optional(),
  telefone: stringType().trim().min(1, "Informe o celular").refine(isValidTelefone, "Celular inválido"),
  data_nascimento: stringType().trim().optional(),
  cpf_cnpj: stringType().trim().refine((v) => !v || isValidCpfCnpj(v), "CPF/CNPJ inválido").optional(),
  rg: stringType().trim().optional(),
  cep: stringType().trim().refine((v) => !v || isValidCep(v), "CEP inválido").optional(),
  endereco: stringType().trim().optional(),
  numero: stringType().trim().optional(),
  complemento: stringType().trim().optional(),
  bairro: stringType().trim().optional(),
  cidade: stringType().trim().optional(),
  uf: stringType().trim().max(2).optional()
});
const EMPTY_VALUES = {
  nome: "",
  email: "",
  telefone: "",
  data_nascimento: "",
  cpf_cnpj: "",
  rg: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: ""
};
function clienteToFormValues(c) {
  return {
    nome: c.nome ?? "",
    email: c.email ?? "",
    telefone: c.telefone ? maskTelefone(c.telefone) : "",
    data_nascimento: c.data_nascimento ?? "",
    cpf_cnpj: c.cpf_cnpj ? maskCpfCnpj(c.cpf_cnpj) : "",
    rg: c.rg ?? "",
    cep: c.cep ? maskCep(c.cep) : "",
    endereco: c.endereco ?? "",
    numero: c.numero ?? "",
    complemento: c.complemento ?? "",
    bairro: c.bairro ?? "",
    cidade: c.cidade ?? "",
    uf: c.uf ?? ""
  };
}
function NovoClienteDialog({
  open,
  onOpenChange,
  cliente
}) {
  const queryClient = useQueryClient();
  const createClienteFn = useServerFn(createCliente);
  const updateClienteFn = useServerFn(updateCliente);
  const [cepLoading, setCepLoading] = reactExports.useState(false);
  const isEdit = !!cliente;
  const form = useForm({
    resolver: a(formSchema),
    defaultValues: EMPTY_VALUES
  });
  reactExports.useEffect(() => {
    if (!open) return;
    if (cliente) {
      form.reset(clienteToFormValues(cliente));
    } else {
      form.reset(EMPTY_VALUES);
    }
  }, [open, cliente, form]);
  const mutation = useMutation({
    mutationFn: async (values) => {
      if (isEdit && cliente) {
        return updateClienteFn({ data: { ...values, id: cliente.id } });
      }
      return createClienteFn({ data: values });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        if (res.code === "DUPLICATE_CPF_CNPJ") {
          form.setError("cpf_cnpj", {
            type: "manual",
            message: res.error ?? "CPF/CNPJ já cadastrado no sistema."
          });
          toast.error(res.error ?? "CPF/CNPJ já cadastrado no sistema.");
          return;
        }
        toast.error(
          isEdit ? "Erro ao atualizar cliente" : "Erro ao cadastrar cliente",
          {
            description: res.error ?? "Verifique os dados e tente novamente."
          }
        );
        return;
      }
      toast.success(
        isEdit ? "Cliente atualizado com sucesso!" : "Cliente cadastrado com sucesso!"
      );
      queryClient.invalidateQueries({ queryKey: ["clientes", "list"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      form.reset(EMPTY_VALUES);
      onOpenChange(false);
    },
    onError: (err) => {
      toast.error(
        isEdit ? "Erro ao atualizar cliente" : "Erro ao cadastrar cliente",
        {
          description: err instanceof Error ? err.message : "Erro desconhecido"
        }
      );
    }
  });
  const handleCepLookup = async () => {
    const cep = form.getValues("cep") ?? "";
    if (!cep || cep.replace(/\D/g, "").length !== 8) {
      toast.warning("Informe um CEP válido (8 dígitos).");
      return;
    }
    setCepLoading(true);
    const result = await lookupCep(cep);
    setCepLoading(false);
    if (!result) {
      toast.error("CEP não encontrado.");
      return;
    }
    form.setValue("endereco", result.logradouro ?? "");
    form.setValue("complemento", result.complemento ?? "");
    form.setValue("bairro", result.bairro ?? "");
    form.setValue("cidade", result.localidade ?? "");
    form.setValue("uf", result.uf ?? "");
    toast.success("Endereço preenchido automaticamente.");
  };
  const handleClose = (next) => {
    if (!next) form.reset(EMPTY_VALUES);
    onOpenChange(next);
  };
  const onSubmit = (values) => mutation.mutate(values);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEdit ? "Editar Cliente" : "Novo Cliente" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Preencha os dados do cliente. Campos com * são obrigatórios." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nome", children: "Nome *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "nome", ...form.register("nome") }),
          form.formState.errors.nome && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.nome.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "E-mail" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", ...form.register("email") }),
          form.formState.errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.email.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "telefone", children: "Celular *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "telefone",
              placeholder: "(00) 00000-0000",
              inputMode: "tel",
              value: form.watch("telefone") ?? "",
              onChange: (e) => form.setValue("telefone", maskTelefone(e.target.value), {
                shouldValidate: true
              })
            }
          ),
          form.formState.errors.telefone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.telefone.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "data_nascimento", children: "Data de nascimento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "data_nascimento",
              type: "date",
              ...form.register("data_nascimento")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cpf_cnpj", children: "CPF / CNPJ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "cpf_cnpj",
              placeholder: "000.000.000-00",
              inputMode: "numeric",
              value: form.watch("cpf_cnpj") ?? "",
              onChange: (e) => {
                form.clearErrors("cpf_cnpj");
                form.setValue("cpf_cnpj", maskCpfCnpj(e.target.value), {
                  shouldValidate: true
                });
              }
            }
          ),
          form.formState.errors.cpf_cnpj && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.cpf_cnpj.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rg", children: "RG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "rg", ...form.register("rg") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Endereço" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cep", children: "CEP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cep",
                placeholder: "00000-000",
                inputMode: "numeric",
                value: form.watch("cep") ?? "",
                onChange: (e) => form.setValue("cep", maskCep(e.target.value), {
                  shouldValidate: true
                })
              }
            ),
            form.formState.errors.cep && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.cep.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: handleCepLookup,
              disabled: cepLoading,
              className: "bg-success text-success-foreground hover:bg-success/90",
              children: [
                cepLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Buscar CEP" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-[1fr_140px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "endereco", children: "Endereço" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "endereco", ...form.register("endereco") }),
            form.formState.errors.endereco && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: form.formState.errors.endereco.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "numero", children: "Número" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "numero", ...form.register("numero") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "complemento", children: "Complemento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "complemento", ...form.register("complemento") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bairro", children: "Bairro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "bairro", ...form.register("bairro") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cidade", children: "Cidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cidade", ...form.register("cidade") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "uf", children: "UF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.watch("uf") ?? "",
                onValueChange: (v) => form.setValue("uf", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "uf", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "UF" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRAZIL_UFS.map((uf) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: uf, children: uf }, uf)) })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "flex-row justify-between gap-2 sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => handleClose(false),
            disabled: mutation.isPending,
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            disabled: mutation.isPending,
            className: "bg-success text-success-foreground hover:bg-success/90",
            children: [
              mutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              isEdit ? "Salvar Alterações" : "Cadastrar"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Route$1 = createFileRoute("/_authed/clientes")({
  validateSearch: (search) => ({
    novo: search.novo === true || search.novo === "true" ? true : void 0
  }),
  head: () => ({
    meta: [
      { title: "Clientes — JuroPro" },
      {
        name: "description",
        content: "Gestão completa da carteira de clientes — cadastro, listagem e busca."
      }
    ]
  }),
  // Sem loader SSR — query roda só no client (ver AuthGuard).
  component: ClientesPage
});
function formatDate(value) {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(new Date(value));
  } catch {
    return "—";
  }
}
function ClientesPage() {
  const { user, loading: authLoading } = useAuth();
  const authReady = !authLoading && !!user;
  const clientesQ = useQuery({
    queryKey: ["clientes", "list"],
    queryFn: () => listClientes(),
    enabled: authReady
  });
  const data = clientesQ.data ?? { data: [], error: null };
  const { novo } = Route$1.useSearch();
  const navigate = useNavigate({ from: "/clientes" });
  const queryClient = useQueryClient();
  const deleteClienteFn = useServerFn(deleteCliente);
  const getClienteFn = useServerFn(getCliente);
  const [open, setOpen] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [clienteParaExcluir, setClienteParaExcluir] = reactExports.useState(
    null
  );
  const [clienteEditando, setClienteEditando] = reactExports.useState(
    null
  );
  const [loadingEditId, setLoadingEditId] = reactExports.useState(
    null
  );
  const [novoEmprestimoClienteId, setNovoEmprestimoClienteId] = reactExports.useState(null);
  const [sortKey, setSortKey] = reactExports.useState(null);
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [pagina, setPagina] = reactExports.useState(1);
  const [porPagina, setPorPagina] = reactExports.useState(10);
  const handleSort = (key) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    }
  };
  const handleEditar = async (id) => {
    setLoadingEditId(id);
    try {
      const res = await getClienteFn({ data: { id } });
      if (!res.data) {
        toast.error(res.error ?? "Cliente não encontrado.");
        return;
      }
      setClienteEditando(res.data);
      setOpen(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao carregar cliente.");
    } finally {
      setLoadingEditId(null);
    }
  };
  const handleDialogChange = (next) => {
    setOpen(next);
    if (!next) setClienteEditando(null);
  };
  reactExports.useEffect(() => {
    if (novo) {
      setOpen(true);
      navigate({ search: { novo: void 0 }, replace: true });
    }
  }, [novo, navigate]);
  const clientes = data.data;
  const hasError = !!data.error;
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteClienteFn({ data: { id } }),
    onSuccess: (result, _id) => {
      if (!result.ok) {
        toast.error(result.error ?? "Erro ao excluir cliente.");
        return;
      }
      toast.success("Cliente excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["clientes", "list"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      setClienteParaExcluir(null);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    }
  });
  const clientesComId = reactExports.useMemo(() => {
    const total = clientes.length;
    return clientes.map((c, idx) => ({
      ...c,
      seqId: total - idx
    }));
  }, [clientes]);
  const clientesFiltrados = reactExports.useMemo(() => {
    const term = search.trim().toLowerCase();
    const termDigits = term.replace(/\D/g, "");
    const filtered = !term ? clientesComId : clientesComId.filter((c) => {
      const nome = (c.nome ?? "").toLowerCase();
      const cpfDigits = (c.cpf_cnpj ?? "").replace(/\D/g, "");
      const matchNome = nome.includes(term);
      const matchCpf = termDigits.length > 0 && cpfDigits.includes(termDigits);
      return matchNome || matchCpf;
    });
    if (!sortKey) return filtered;
    const dir = sortDir === "asc" ? 1 : -1;
    const getVal = (c) => {
      switch (sortKey) {
        case "seqId":
          return c.seqId;
        case "created_at":
          return c.created_at ? new Date(c.created_at).getTime() : 0;
        case "cpf_cnpj":
          return (c.cpf_cnpj ?? "").replace(/\D/g, "");
        case "telefone":
          return (c.telefone ?? "").replace(/\D/g, "");
        case "cidade":
          return (c.cidade ?? "").toLowerCase();
        case "email":
          return (c.email ?? "").toLowerCase();
        case "nome":
        default:
          return (c.nome ?? "").toLowerCase();
      }
    };
    return [...filtered].sort((a2, b) => {
      const av = getVal(a2);
      const bv = getVal(b);
      const aEmpty = av === "" || av === 0;
      const bEmpty = bv === "" || bv === 0;
      if (aEmpty && !bEmpty) return 1;
      if (!aEmpty && bEmpty) return -1;
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [clientesComId, search, sortKey, sortDir]);
  const totalPaginas = Math.max(1, Math.ceil(clientesFiltrados.length / porPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const clientesPaginados = clientesFiltrados.slice(
    (paginaAtual - 1) * porPagina,
    paginaAtual * porPagina
  );
  const SortIcon = ({ column }) => {
    if (sortKey !== column)
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-3.5 w-3.5 opacity-50" });
    return sortDir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3.5 w-3.5" });
  };
  const kpis = reactExports.useMemo(() => {
    const total = clientes.length;
    const now = /* @__PURE__ */ new Date();
    const ano = now.getFullYear();
    const mes = now.getMonth();
    const novosMes = clientes.filter((c) => {
      if (!c.created_at) return false;
      const d = new Date(c.created_at);
      return d.getFullYear() === ano && d.getMonth() === mes;
    }).length;
    const comCidade = clientes.filter((c) => (c.cidade ?? "").trim() !== "").length;
    const ultimoCadastro = clientes[0]?.created_at ?? null;
    return { total, novosMes, comCidade, ultimoCadastro };
  }, [clientes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-x-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold text-foreground truncate", children: "Clientes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: "Gestão completa da carteira de clientes" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setOpen(true),
              size: "sm",
              className: "bg-success text-success-foreground shadow-sm hover:bg-success/90",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Novo Cliente" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-3 md:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox,
              {
                label: "Total de Clientes",
                value: String(kpis.total),
                icon: Users,
                accent: "info"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox,
              {
                label: "Novos no Mês",
                value: String(kpis.novosMes),
                icon: TrendingUp,
                accent: "success"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox,
              {
                label: "Com Endereço",
                value: String(kpis.comCidade),
                icon: MapPin,
                accent: "warning"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiBox,
              {
                label: "Último Cadastro",
                value: kpis.ultimoCadastro ? formatDate(kpis.ultimoCadastro) : "—",
                icon: CalendarClock,
                accent: "info"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            clientes.length,
            " ",
            clientes.length === 1 ? "cliente cadastrado" : "clientes cadastrados",
            search.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " • ",
              clientesFiltrados.length,
              " ",
              clientesFiltrados.length === 1 ? "resultado" : "resultados"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: hasError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center text-sm text-destructive", children: [
            "Erro ao carregar clientes: ",
            data.error
          ] }) : clientes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 p-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Nenhum cliente cadastrado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: 'Clique em "Novo Cliente" para começar.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => setOpen(true),
                className: "mt-2 bg-success text-success-foreground hover:bg-success/90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
                  "Novo Cliente"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b bg-muted/30 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "search",
                  value: search,
                  onChange: (e) => {
                    setSearch(e.target.value);
                    setPagina(1);
                  },
                  placeholder: "Buscar por nome ou CPF/CNPJ...",
                  className: "pl-9"
                }
              )
            ] }) }),
            clientesFiltrados.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-sm text-muted-foreground", children: [
              'Nenhum cliente encontrado para "',
              search,
              '".'
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("seqId"),
                      className: "inline-flex items-center gap-1 hover:text-foreground",
                      children: [
                        "ID ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "seqId" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("nome"),
                      className: "inline-flex items-center gap-1 hover:text-foreground",
                      children: [
                        "Nome ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "nome" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("email"),
                      className: "inline-flex items-center gap-1 hover:text-foreground",
                      children: [
                        "E-mail ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "email" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("telefone"),
                      className: "inline-flex items-center gap-1 hover:text-foreground",
                      children: [
                        "Telefone ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "telefone" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("cpf_cnpj"),
                      className: "inline-flex items-center gap-1 hover:text-foreground",
                      children: [
                        "CPF/CNPJ ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "cpf_cnpj" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("cidade"),
                      className: "inline-flex items-center gap-1 hover:text-foreground",
                      children: [
                        "Cidade/UF ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "cidade" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSort("created_at"),
                      className: "inline-flex items-center gap-1 hover:text-foreground",
                      children: [
                        "Cadastrado em ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { column: "created_at" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-16 text-right", children: "Ações" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: clientesPaginados.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-mono text-xs text-muted-foreground", children: [
                    "#",
                    String(c.seqId).padStart(3, "0")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-foreground", children: c.nome ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: c.email ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: formatTelefone(c.telefone) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: formatCpfCnpj(c.cpf_cnpj) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: c.cidade && c.uf ? `${c.cidade}/${c.uf}` : c.cidade ?? c.uf ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: formatDate(c.created_at) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-muted-foreground hover:bg-success/10 hover:text-success",
                        onClick: () => setNovoEmprestimoClienteId(c.id),
                        "aria-label": `Novo empréstimo para ${c.nome ?? ""}`,
                        title: "Novo empréstimo",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-muted-foreground hover:bg-primary/10 hover:text-primary",
                        onClick: () => handleEditar(c.id),
                        disabled: loadingEditId === c.id,
                        "aria-label": `Editar cliente ${c.nome ?? ""}`,
                        title: "Editar cliente",
                        children: loadingEditId === c.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
                        onClick: () => setClienteParaExcluir(c),
                        "aria-label": `Excluir cliente ${c.nome ?? ""}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                      }
                    )
                  ] }) })
                ] }, String(c.id))) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block divide-y md:hidden", children: clientesPaginados.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-base font-semibold text-foreground", children: c.nome ?? "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
                      "#",
                      String(c.seqId).padStart(3, "0")
                    ] })
                  ] }),
                  c.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: c.email })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Telefone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: formatTelefone(c.telefone) || "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "CPF/CNPJ" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: formatCpfCnpj(c.cpf_cnpj) || "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Cidade/UF" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: c.cidade && c.uf ? `${c.cidade}/${c.uf}` : c.cidade ?? c.uf ?? "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Cadastrado em" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: formatDate(c.created_at) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2 border-t pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "h-8 text-xs text-success hover:bg-success/10 hover:text-success",
                      onClick: () => setNovoEmprestimoClienteId(c.id),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                        "Empréstimo"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "h-8 text-xs",
                      onClick: () => handleEditar(c.id),
                      disabled: loadingEditId === c.id,
                      children: [
                        loadingEditId === c.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }),
                        "Editar"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "h-8 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive",
                      onClick: () => setClienteParaExcluir(c),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
                        "Excluir"
                      ]
                    }
                  )
                ] })
              ] }, String(c.id))) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TablePagination,
                {
                  page: paginaAtual,
                  pageSize: porPagina,
                  totalItems: clientesFiltrados.length,
                  onPageChange: (p) => setPagina(p),
                  onPageSizeChange: (s) => {
                    setPorPagina(s);
                    setPagina(1);
                  },
                  itemLabel: "clientes"
                }
              )
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NovoClienteDialog,
      {
        open,
        onOpenChange: handleDialogChange,
        cliente: clienteEditando
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NovoEmprestimoDialog,
      {
        open: novoEmprestimoClienteId !== null,
        onOpenChange: (next) => {
          if (!next) setNovoEmprestimoClienteId(null);
        },
        defaultClienteId: novoEmprestimoClienteId ?? void 0
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: clienteParaExcluir !== null,
        onOpenChange: (next) => {
          if (!next && !deleteMutation.isPending) {
            setClienteParaExcluir(null);
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Excluir cliente" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
              "Tem certeza que deseja excluir o cliente",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: clienteParaExcluir?.nome ?? "—" }),
              "? Todos os empréstimos e parcelas vinculados a ele serão excluídos permanentemente. Esta ação não pode ser desfeita."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: deleteMutation.isPending, children: "Cancelar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                onClick: (e) => {
                  e.preventDefault();
                  if (clienteParaExcluir) {
                    deleteMutation.mutate(clienteParaExcluir.id);
                  }
                },
                disabled: deleteMutation.isPending,
                className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                children: deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                  "Excluindo..."
                ] }) : "Excluir cliente"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function KpiBox({
  label,
  value,
  icon: Icon2,
  accent
}) {
  const accentStyles = {
    info: "border-t-info text-info",
    warning: "border-t-warning text-warning",
    destructive: "border-t-destructive text-destructive",
    success: "border-t-success text-success"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-xl border border-border border-t-4 bg-card p-3 sm:p-4 shadow-sm",
        accentStyles[accent]
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground leading-tight", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-lg sm:text-xl font-extrabold text-foreground", children: value })
      ]
    }
  );
}
const Route = createFileRoute("/_authed/bem-vindo")({
  head: () => ({ meta: [{ title: "Bem-vindo — JuroPro" }] }),
  component: BemVindoPage
});
function BemVindoPage() {
  const { user, signOut, loading } = useAuth();
  const { profile } = useProfile();
  const navigate = useNavigate();
  const { name: businessName, defaultName } = useBusinessName();
  const businessLabel = businessName && businessName !== defaultName ? businessName : defaultName;
  const { logo: businessLogo } = useBusinessLogo();
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => navigate({ to: "/" }),
          className: "mb-2 h-11 w-full bg-gradient-to-r from-success to-success/90 font-bold text-success-foreground shadow-lg",
          children: [
            "Ir para o Dashboard",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: async () => {
            await signOut();
            navigate({ to: "/login" });
          },
          className: "h-11 w-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
            "Sair"
          ]
        }
      )
    ] }) })
  ] });
}
const ResetPasswordRoute = Route$b.update({
  id: "/reset-password",
  path: "/reset-password",
  getParentRoute: () => Route$c
});
const RecuperarSenhaRoute = Route$a.update({
  id: "/recuperar-senha",
  path: "/recuperar-senha",
  getParentRoute: () => Route$c
});
const LoginRoute = Route$9.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$c
});
const AuthedRoute = Route$8.update({
  id: "/_authed",
  getParentRoute: () => Route$c
});
const AuthedIndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthedRoute
});
const AuthedVencimentosRoute = Route$6.update({
  id: "/vencimentos",
  path: "/vencimentos",
  getParentRoute: () => AuthedRoute
});
const AuthedSuporteRoute = Route$5.update({
  id: "/suporte",
  path: "/suporte",
  getParentRoute: () => AuthedRoute
});
const AuthedRelatoriosRoute = Route$4.update({
  id: "/relatorios",
  path: "/relatorios",
  getParentRoute: () => AuthedRoute
});
const AuthedContratosRoute = Route$3.update({
  id: "/contratos",
  path: "/contratos",
  getParentRoute: () => AuthedRoute
});
const AuthedConfiguracoesRoute = Route$2.update({
  id: "/configuracoes",
  path: "/configuracoes",
  getParentRoute: () => AuthedRoute
});
const AuthedClientesRoute = Route$1.update({
  id: "/clientes",
  path: "/clientes",
  getParentRoute: () => AuthedRoute
});
const AuthedBemVindoRoute = Route.update({
  id: "/bem-vindo",
  path: "/bem-vindo",
  getParentRoute: () => AuthedRoute
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
  ResetPasswordRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
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
            router.invalidate();
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
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Não fazer preload agressivo (re-executa beforeLoad em loop ao hover)
    defaultPreload: false,
    defaultPreloadStaleTime: 3e4,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
