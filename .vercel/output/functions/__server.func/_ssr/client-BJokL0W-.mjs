import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const SUPABASE_AUTH_COOKIE = "sb-auth-token";
function createCookieAndLocalStorage() {
  const KEY = SUPABASE_AUTH_COOKIE;
  const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
  const cookieAttrs = `Path=/; SameSite=Lax; Max-Age=2592000${isHttps ? "; Secure" : ""}`;
  const writeCookie = (name, value) => {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=${encodeURIComponent(value)}; ${cookieAttrs}`;
  };
  const deleteCookie = (name) => {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax${isHttps ? "; Secure" : ""}`;
  };
  return {
    getItem: (key) => {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    setItem: (key, value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch {
      }
      if (key === KEY) writeCookie(key, value);
    },
    removeItem: (key) => {
      try {
        window.localStorage.removeItem(key);
      } catch {
      }
      if (key === KEY) deleteCookie(key);
    },
    // Stubs obrigatórios da interface Storage:
    key: () => null,
    clear: () => {
      try {
        window.localStorage.clear();
      } catch {
      }
      deleteCookie(KEY);
    },
    length: 0
  };
}
function createSupabaseClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    throw new Error(
      "Missing Supabase environment variables. Ensure SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY (or VITE_ prefixed versions) are set in your .env file."
    );
  }
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? createCookieAndLocalStorage() : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
export {
  supabase as s
};
