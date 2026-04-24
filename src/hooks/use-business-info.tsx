import { useEffect, useState } from "react";

const NAME_KEY = "juropro:business_name";
const LOGO_KEY = "juropro:business_logo";
const DEFAULT_NAME = "JuroPro";
const NAME_EVENT = "juropro:business_name_changed";
const LOGO_EVENT = "juropro:business_logo_changed";

function readName(): string {
  if (typeof window === "undefined") return DEFAULT_NAME;
  try {
    const v = window.localStorage.getItem(NAME_KEY);
    return v && v.trim().length > 0 ? v : DEFAULT_NAME;
  } catch {
    return DEFAULT_NAME;
  }
}

function readLogo(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(LOGO_KEY);
    return v && v.length > 0 ? v : null;
  } catch {
    return null;
  }
}

/** Hook compartilhado para o nome do negócio (persistido em localStorage). */
export function useBusinessName() {
  const [name, setNameState] = useState<string>(DEFAULT_NAME);

  useEffect(() => {
    setNameState(readName());
    const onStorage = (e: StorageEvent) => {
      if (e.key === NAME_KEY) setNameState(readName());
    };
    const onCustom = () => setNameState(readName());
    window.addEventListener("storage", onStorage);
    window.addEventListener(NAME_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(NAME_EVENT, onCustom);
    };
  }, []);

  const setName = (next: string) => {
    const clean = next.trim();
    try {
      if (clean.length === 0) window.localStorage.removeItem(NAME_KEY);
      else window.localStorage.setItem(NAME_KEY, clean);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(NAME_EVENT));
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME);
  };

  return { name, setName, defaultName: DEFAULT_NAME };
}

/** Hook compartilhado para a logomarca do negócio (data URL em localStorage). */
export function useBusinessLogo() {
  const [logo, setLogoState] = useState<string | null>(null);

  useEffect(() => {
    setLogoState(readLogo());
    const onStorage = (e: StorageEvent) => {
      if (e.key === LOGO_KEY) setLogoState(readLogo());
    };
    const onCustom = () => setLogoState(readLogo());
    window.addEventListener("storage", onStorage);
    window.addEventListener(LOGO_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(LOGO_EVENT, onCustom);
    };
  }, []);

  const setLogo = (next: string | null) => {
    try {
      if (!next) window.localStorage.removeItem(LOGO_KEY);
      else window.localStorage.setItem(LOGO_KEY, next);
    } catch {
      /* ignore (quota exceeded) */
    }
    window.dispatchEvent(new Event(LOGO_EVENT));
    setLogoState(next);
  };

  return { logo, setLogo };
}
