import { useEffect, useState, useCallback } from "react";
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
    const { data } = await supabase
      .from("profiles" as never)
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();
    setProfile((data as Profile | null) ?? null);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    reload();
  }, [reload]);

  const update = async (patch: Partial<Profile>) => {
    if (!user) return { error: "Não autenticado" };
    const { error } = await supabase
      .from("profiles" as never)
      .update(patch as never)
      .eq("user_id", user.id);
    if (error) return { error: error.message };
    await reload();
    return { error: null };
  };

  return { profile, loading, reload, update };
}
