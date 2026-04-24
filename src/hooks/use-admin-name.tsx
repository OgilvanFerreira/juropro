import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";

const BASE_KEY = "juropro:admin_name";
const DEFAULT_NAME = "Equipe JuroPro";
const EVENT = "juropro:admin_name_changed";

function keyFor(userId: string | null | undefined): string {
  return userId ? `${BASE_KEY}:${userId}` : BASE_KEY;
}

function readName(userId: string | null | undefined): string {
  if (typeof window === "undefined") return DEFAULT_NAME;
  try {
    const v = window.localStorage.getItem(keyFor(userId));
    return v && v.trim().length > 0 ? v : DEFAULT_NAME;
  } catch {
    return DEFAULT_NAME;
  }
}

/**
 * Hook simples para nome do administrador logado, persistido em localStorage
 * COM ESCOPO POR USUÁRIO (cada user.id tem sua própria chave).
 */
export function useAdminName() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [name, setNameState] = useState<string>(DEFAULT_NAME);

  useEffect(() => {
    setNameState(readName(userId));
    const onStorage = (e: StorageEvent) => {
      if (e.key === keyFor(userId)) setNameState(readName(userId));
    };
    const onCustom = () => setNameState(readName(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVENT, onCustom);
    };
  }, [userId]);

  const setName = (next: string) => {
    const clean = next.trim();
    try {
      const k = keyFor(userId);
      if (clean.length === 0) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, clean);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(EVENT));
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME);
  };

  return { name, setName, defaultName: DEFAULT_NAME };
}
