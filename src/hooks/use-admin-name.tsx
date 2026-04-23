import { useEffect, useState } from "react";

const STORAGE_KEY = "juropro:admin_name";
const DEFAULT_NAME = "Equipe JuroPro";

function readName(): string {
  if (typeof window === "undefined") return DEFAULT_NAME;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v && v.trim().length > 0 ? v : DEFAULT_NAME;
  } catch {
    return DEFAULT_NAME;
  }
}

/**
 * Hook simples para nome do administrador logado, persistido em localStorage.
 * Sincroniza entre abas via storage event e dentro da mesma aba via custom event.
 */
export function useAdminName() {
  const [name, setNameState] = useState<string>(DEFAULT_NAME);

  useEffect(() => {
    setNameState(readName());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setNameState(readName());
    };
    const onCustom = () => setNameState(readName());
    window.addEventListener("storage", onStorage);
    window.addEventListener("juropro:admin_name_changed", onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("juropro:admin_name_changed", onCustom);
    };
  }, []);

  const setName = (next: string) => {
    const clean = next.trim();
    try {
      if (clean.length === 0) window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, clean);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event("juropro:admin_name_changed"));
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME);
  };

  return { name, setName, defaultName: DEFAULT_NAME };
}
