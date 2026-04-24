import { useEffect, useState } from "react";

const NAME_KEY = "juropro:business_name";
const LOGO_KEY = "juropro:business_logo";
const DETAILS_KEY = "juropro:business_details";
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

function readDetails(): BusinessDetails {
  if (typeof window === "undefined") return DEFAULT_DETAILS;
  try {
    const raw = window.localStorage.getItem(DETAILS_KEY);
    if (!raw) return DEFAULT_DETAILS;
    const parsed = JSON.parse(raw) as Partial<BusinessDetails>;
    return { ...DEFAULT_DETAILS, ...parsed };
  } catch {
    return DEFAULT_DETAILS;
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

/** Hook compartilhado para os dados completos do negócio (CNPJ, endereço, contato). */
export function useBusinessDetails() {
  const [details, setDetailsState] = useState<BusinessDetails>(DEFAULT_DETAILS);

  useEffect(() => {
    setDetailsState(readDetails());
    const onStorage = (e: StorageEvent) => {
      if (e.key === DETAILS_KEY) setDetailsState(readDetails());
    };
    const onCustom = () => setDetailsState(readDetails());
    window.addEventListener("storage", onStorage);
    window.addEventListener(DETAILS_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(DETAILS_EVENT, onCustom);
    };
  }, []);

  const setDetails = (next: BusinessDetails) => {
    try {
      window.localStorage.setItem(DETAILS_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(DETAILS_EVENT));
    setDetailsState(next);
  };

  return { details, setDetails, defaultDetails: DEFAULT_DETAILS };
}
