import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";

const NAME_BASE = "juropro:business_name";
const LOGO_BASE = "juropro:business_logo";
const DETAILS_BASE = "juropro:business_details";
const DEFAULT_NAME = "JuroPro";
const NAME_EVENT = "juropro:business_name_changed";
const LOGO_EVENT = "juropro:business_logo_changed";
const DETAILS_EVENT = "juropro:business_details_changed";

export interface BusinessDetails {
  cnpj: string;
  telefone: string;
  email: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const DEFAULT_DETAILS: BusinessDetails = {
  cnpj: "",
  telefone: "",
  email: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: "",
};

function scopedKey(base: string, userId: string | null | undefined): string {
  return userId ? `${base}:${userId}` : base;
}

function readName(userId: string | null | undefined): string {
  if (typeof window === "undefined") return DEFAULT_NAME;
  try {
    const v = window.localStorage.getItem(scopedKey(NAME_BASE, userId));
    return v && v.trim().length > 0 ? v : DEFAULT_NAME;
  } catch {
    return DEFAULT_NAME;
  }
}

function readLogo(userId: string | null | undefined): string | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(scopedKey(LOGO_BASE, userId));
    return v && v.length > 0 ? v : null;
  } catch {
    return null;
  }
}

function readDetails(userId: string | null | undefined): BusinessDetails {
  if (typeof window === "undefined") return DEFAULT_DETAILS;
  try {
    const raw = window.localStorage.getItem(scopedKey(DETAILS_BASE, userId));
    if (!raw) return DEFAULT_DETAILS;
    const parsed = JSON.parse(raw) as Partial<BusinessDetails>;
    return { ...DEFAULT_DETAILS, ...parsed };
  } catch {
    return DEFAULT_DETAILS;
  }
}

/** Hook compartilhado para o nome do negócio (escopado por usuário). */
export function useBusinessName() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [name, setNameState] = useState<string>(DEFAULT_NAME);

  useEffect(() => {
    setNameState(readName(userId));
    const onStorage = (e: StorageEvent) => {
      if (e.key === scopedKey(NAME_BASE, userId)) setNameState(readName(userId));
    };
    const onCustom = () => setNameState(readName(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(NAME_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(NAME_EVENT, onCustom);
    };
  }, [userId]);

  const setName = (next: string) => {
    const clean = next.trim();
    try {
      const k = scopedKey(NAME_BASE, userId);
      if (clean.length === 0) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, clean);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(NAME_EVENT));
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME);
  };

  return { name, setName, defaultName: DEFAULT_NAME };
}

/** Hook compartilhado para a logomarca do negócio (escopada por usuário). */
export function useBusinessLogo() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [logo, setLogoState] = useState<string | null>(null);

  useEffect(() => {
    setLogoState(readLogo(userId));
    const onStorage = (e: StorageEvent) => {
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

  const setLogo = (next: string | null) => {
    try {
      const k = scopedKey(LOGO_BASE, userId);
      if (!next) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, next);
    } catch {
      /* ignore (quota exceeded) */
    }
    window.dispatchEvent(new Event(LOGO_EVENT));
    setLogoState(next);
  };

  return { logo, setLogo };
}

/** Hook compartilhado para os dados completos do negócio (escopados por usuário). */
export function useBusinessDetails() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [details, setDetailsState] = useState<BusinessDetails>(DEFAULT_DETAILS);

  useEffect(() => {
    setDetailsState(readDetails(userId));
    const onStorage = (e: StorageEvent) => {
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

  const setDetails = (next: BusinessDetails) => {
    try {
      window.localStorage.setItem(scopedKey(DETAILS_BASE, userId), JSON.stringify(next));
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(DETAILS_EVENT));
    setDetailsState(next);
  };

  return { details, setDetails, defaultDetails: DEFAULT_DETAILS };
}
