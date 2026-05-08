import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

const NAME_BASE = "juropro:business_name";
const LOGO_BASE = "juropro:business_logo";
const DETAILS_BASE = "juropro:business_details";
const DEFAULT_NAME = "JuroPro";
const NAME_EVENT = "juropro:business_name_changed";
const LOGO_EVENT = "juropro:business_logo_changed";
const DETAILS_EVENT = "juropro:business_details_changed";

const NAME_CONFIG_KEY = "business_name";
const LOGO_CONFIG_KEY = "business_logo";
const DETAILS_CONFIG_KEY = "business_details";

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

function cacheName(userId: string | null | undefined, next: string) {
  const clean = next.trim();
  try {
    const k = scopedKey(NAME_BASE, userId);
    if (clean.length === 0) window.localStorage.removeItem(k);
    else window.localStorage.setItem(k, clean);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(NAME_EVENT));
}

function cacheLogo(userId: string | null | undefined, next: string | null) {
  try {
    const k = scopedKey(LOGO_BASE, userId);
    if (!next) window.localStorage.removeItem(k);
    else window.localStorage.setItem(k, next);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(LOGO_EVENT));
}

function cacheDetails(userId: string | null | undefined, next: BusinessDetails) {
  try {
    window.localStorage.setItem(scopedKey(DETAILS_BASE, userId), JSON.stringify(next));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(DETAILS_EVENT));
}

async function loadConfig<T>(userId: string, chave: string): Promise<T | null> {
  const { data, error } = await supabase
    .from("configuracoes" as never)
    .select("valor")
    .eq("user_id", userId)
    .eq("chave", chave)
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;
  return ((data as { valor: T | null }).valor ?? null) as T | null;
}

async function saveConfig(userId: string | null | undefined, chave: string, valor: unknown) {
  if (!userId) return;

  const { data: existing, error: findError } = await supabase
    .from("configuracoes" as never)
    .select("id")
    .eq("user_id", userId)
    .eq("chave", chave)
    .limit(1)
    .maybeSingle();

  if (findError) throw findError;

  const payload = {
    user_id: userId,
    chave,
    valor,
    updated_at: new Date().toISOString(),
  };

  const query = existing
    ? supabase
        .from("configuracoes" as never)
        .update(payload as never)
        .eq("id", (existing as { id: string }).id)
    : supabase.from("configuracoes" as never).insert(payload as never);

  const { error } = await query;
  if (error) throw error;
}

function hasDetailsValue(details: BusinessDetails) {
  return Object.values(details).some((value) => value.trim().length > 0);
}

/** Hook compartilhado para o nome do negocio (escopado por usuario). */
export function useBusinessName() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [name, setNameState] = useState<string>(DEFAULT_NAME);

  useEffect(() => {
    let alive = true;
    const cached = readName(userId);
    setNameState(cached);

    if (userId) {
      loadConfig<string>(userId, NAME_CONFIG_KEY).then((remote) => {
        if (!alive) return;
        if (remote && remote.trim().length > 0) {
          cacheName(userId, remote);
          setNameState(remote);
        } else if (cached !== DEFAULT_NAME) {
          saveConfig(userId, NAME_CONFIG_KEY, cached).catch(() => undefined);
        }
      });
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === scopedKey(NAME_BASE, userId)) setNameState(readName(userId));
    };
    const onCustom = () => setNameState(readName(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(NAME_EVENT, onCustom);
    return () => {
      alive = false;
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(NAME_EVENT, onCustom);
    };
  }, [userId]);

  const setName = async (next: string) => {
    const clean = next.trim();
    cacheName(userId, clean);
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME);
    await saveConfig(userId, NAME_CONFIG_KEY, clean);
  };

  return { name, setName, defaultName: DEFAULT_NAME };
}

/** Hook compartilhado para a logomarca do negocio (escopada por usuario). */
export function useBusinessLogo() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [logo, setLogoState] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    const cached = readLogo(userId);
    setLogoState(cached);

    if (userId) {
      loadConfig<string | null>(userId, LOGO_CONFIG_KEY).then((remote) => {
        if (!alive) return;
        if (remote) {
          cacheLogo(userId, remote);
          setLogoState(remote);
        } else if (cached) {
          saveConfig(userId, LOGO_CONFIG_KEY, cached).catch(() => undefined);
        }
      });
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === scopedKey(LOGO_BASE, userId)) setLogoState(readLogo(userId));
    };
    const onCustom = () => setLogoState(readLogo(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(LOGO_EVENT, onCustom);
    return () => {
      alive = false;
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(LOGO_EVENT, onCustom);
    };
  }, [userId]);

  const setLogo = async (next: string | null) => {
    cacheLogo(userId, next);
    setLogoState(next);
    await saveConfig(userId, LOGO_CONFIG_KEY, next);
  };

  return { logo, setLogo };
}

/** Hook compartilhado para os dados completos do negocio (escopados por usuario). */
export function useBusinessDetails() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [details, setDetailsState] = useState<BusinessDetails>(DEFAULT_DETAILS);

  useEffect(() => {
    let alive = true;
    const cached = readDetails(userId);
    setDetailsState(cached);

    if (userId) {
      loadConfig<Partial<BusinessDetails>>(userId, DETAILS_CONFIG_KEY).then((remote) => {
        if (!alive) return;
        if (remote) {
          const next = { ...DEFAULT_DETAILS, ...remote };
          cacheDetails(userId, next);
          setDetailsState(next);
        } else if (hasDetailsValue(cached)) {
          saveConfig(userId, DETAILS_CONFIG_KEY, cached).catch(() => undefined);
        }
      });
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === scopedKey(DETAILS_BASE, userId)) setDetailsState(readDetails(userId));
    };
    const onCustom = () => setDetailsState(readDetails(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(DETAILS_EVENT, onCustom);
    return () => {
      alive = false;
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(DETAILS_EVENT, onCustom);
    };
  }, [userId]);

  const setDetails = async (next: BusinessDetails) => {
    cacheDetails(userId, next);
    setDetailsState(next);
    await saveConfig(userId, DETAILS_CONFIG_KEY, next);
  };

  return { details, setDetails, defaultDetails: DEFAULT_DETAILS };
}
