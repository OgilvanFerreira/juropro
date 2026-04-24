import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  loading: boolean;
  /**
   * `true` quando há um token persistido no localStorage. Permite que rotas
   * protegidas façam render otimista (sem flash de spinner) enquanto a
   * sessão real é validada em background.
   */
  hasPersistedSession: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updatePassword: (password: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const PROJECT_REF = import.meta.env.VITE_SUPABASE_PROJECT_ID as string | undefined;
const STORAGE_KEY = PROJECT_REF ? `sb-${PROJECT_REF}-auth-token` : null;

/**
 * Verifica de forma SÍNCRONA (sem await) se há um token Supabase persistido
 * no localStorage. Usado para inicializar o estado evitando o "flash" de
 * loading em refreshes/navegações com sessão válida.
 */
function readPersistedToken(): boolean {
  if (typeof window === "undefined" || !STORAGE_KEY) return false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    // Estrutura: { access_token, refresh_token, expires_at, ... }
    const parsed = JSON.parse(raw);
    if (!parsed?.access_token) return false;
    // Considera válido se ainda não expirou (com margem de 30s)
    const expiresAt = typeof parsed.expires_at === "number" ? parsed.expires_at : 0;
    if (expiresAt && expiresAt * 1000 < Date.now() - 30_000) return false;
    return true;
  } catch {
    return false;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  // Inicialização síncrona: se há token persistido, já assumimos que há
  // sessão (otimista). O listener abaixo corrige se o token estiver inválido.
  const initialHasToken = readPersistedToken();

  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  // `loading` começa false quando há token — render imediato e otimista.
  // Sem token, começa true para bloquear rotas protegidas até confirmar.
  const [loading, setLoading] = useState(!initialHasToken);
  const [hasPersistedSession, setHasPersistedSession] = useState(initialHasToken);

  useEffect(() => {
    // 1) Listener primeiro
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);
      setHasPersistedSession(!!sess);
      setLoading(false);
    });

    // 2) Hidratação da sessão persistida
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setHasPersistedSession(!!data.session);
      setLoading(false);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const resetPassword = async (email: string) => {
    const redirectTo = `${window.location.origin}/reset-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
    return { error: error?.message ?? null };
  };

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({ password });
    return { error: error?.message ?? null };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        hasPersistedSession,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
