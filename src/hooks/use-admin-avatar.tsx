import { useEffect, useState } from "react";

const STORAGE_KEY = "juropro:admin_avatar";

function readAvatar(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v && v.length > 0 ? v : null;
  } catch {
    return null;
  }
}

/**
 * Hook simples para foto do administrador, persistida em localStorage (data URL).
 * Sincroniza entre abas via storage event e dentro da mesma aba via custom event.
 */
export function useAdminAvatar() {
  const [avatar, setAvatarState] = useState<string | null>(null);

  useEffect(() => {
    setAvatarState(readAvatar());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setAvatarState(readAvatar());
    };
    const onCustom = () => setAvatarState(readAvatar());
    window.addEventListener("storage", onStorage);
    window.addEventListener("juropro:admin_avatar_changed", onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("juropro:admin_avatar_changed", onCustom);
    };
  }, []);

  const setAvatar = (next: string | null) => {
    try {
      if (!next) window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore (quota exceeded em imagens grandes) */
    }
    window.dispatchEvent(new Event("juropro:admin_avatar_changed"));
    setAvatarState(next);
  };

  return { avatar, setAvatar };
}
