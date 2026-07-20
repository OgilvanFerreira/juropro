import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export interface Profile {
  id: string;
  user_id: string;
  email: string | null;
  nome: string | null;
  telefone: string | null;
  cpf: string | null;
  cargo: string | null;
  cidade: string | null;
  uf: string | null;
  avatar_url: string | null;
}

const isMissingProfilesTableError = (message: string | null | undefined) => {
  const text = message?.toLowerCase() ?? "";
  return text.includes("profiles") && text.includes("schema cache");
};

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);

  const reload = useCallback(async () => {
    if (!user) {
      setProfile(null);
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("profiles" as never)
        .select("*")
        .eq("user_id", user.id)
        .limit(1)
        .maybeSingle();

      if (error) {
        if (!isMissingProfilesTableError(error.message)) {
          console.error("useProfile reload error:", error);
        }
        setProfile(null);
        return;
      }

      setProfile((data as Profile | null) ?? null);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    reload();
  }, [reload]);

  const update = async (patch: Partial<Profile>) => {
    if (!user) return { error: "Nao autenticado" };

    const payload = {
      ...patch,
      user_id: user.id,
      email: patch.email ?? user.email ?? null,
      updated_at: new Date().toISOString(),
    };

    const { data: existing, error: findError } = await supabase
      .from("profiles" as never)
      .select("id")
      .eq("user_id", user.id)
      .limit(1)
      .maybeSingle();

    if (findError) return { error: findError.message };

    const query = existing
      ? supabase
          .from("profiles" as never)
          .update(payload as never)
          .eq("id", (existing as { id: string }).id)
      : supabase.from("profiles" as never).insert(payload as never);

    const { error } = await query;
    if (error) return { error: error.message };
    await reload();
    return { error: null };
  };

  return { profile, loading, reload, update };
}
