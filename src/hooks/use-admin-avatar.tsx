import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";

const BASE_KEY = "juropro:admin_avatar";
const EVENT = "juropro:admin_avatar_changed";

function keyFor(userId: string | null | undefined): string {
  return userId ? `${BASE_KEY}:${userId}` : BASE_KEY;
}

function readAvatar(userId: string | null | undefined): string | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(keyFor(userId));
    return v && v.length > 0 ? v : null;
  } catch {
    return null;
  }
}

/**
 * Hook simples para foto do administrador, persistida em localStorage (data URL)
 * COM ESCOPO POR USUÁRIO (cada user.id tem sua própria chave).
 */
export function useAdminAvatar() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [avatar, setAvatarState] = useState<string | null>(null);

  useEffect(() => {
    setAvatarState(readAvatar(userId));
    const onStorage = (e: StorageEvent) => {
      if (e.key === keyFor(userId)) setAvatarState(readAvatar(userId));
    };
    const onCustom = () => setAvatarState(readAvatar(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVENT, onCustom);
    };
  }, [userId]);

  const setAvatar = (next: string | null) => {
    try {
      const k = keyFor(userId);
      if (!next) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, next);
    } catch {
      /* ignore (quota exceeded em imagens grandes) */
    }
    window.dispatchEvent(new Event(EVENT));
    setAvatarState(next);
  };

  return { avatar, setAvatar };
}
