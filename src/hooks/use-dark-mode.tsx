import { useEffect, useState } from "react";

const STORAGE_KEY = "juropro:dark_mode";
const EVENT = "juropro:dark_mode_changed";

function readDark(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function applyDark(on: boolean) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (on) root.classList.add("dark");
  else root.classList.remove("dark");
}

/** Hook compartilhado para alternar o tema escuro (classe .dark no <html>). */
export function useDarkMode() {
  const [dark, setDarkState] = useState<boolean>(false);

  useEffect(() => {
    const initial = readDark();
    setDarkState(initial);
    applyDark(initial);

    const onStorage = (e: StorageEvent) => {
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

  const setDark = (next: boolean) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
    applyDark(next);
    setDarkState(next);
    window.dispatchEvent(new Event(EVENT));
  };

  return { dark, setDark };
}
