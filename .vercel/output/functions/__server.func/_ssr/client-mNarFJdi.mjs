import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const PROJECT_REF = "qshlnjvaxncitywyydwe";
const SUPABASE_AUTH_COOKIE = `sb-${PROJECT_REF}-auth-token`;
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
  const SUPABASE_URL = "https://qshlnjvaxncitywyydwe.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzaGxuanZheG5jaXR5d3l5ZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NDg5OTIsImV4cCI6MjA5MjIyNDk5Mn0.Yg0a-3mAYWdzEhgNS-QYH4Z15QbDTlvnQ6w04uJIJV8";
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
