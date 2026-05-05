import { r as reactExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-mNarFJdi.mjs";
import { u as useAuth } from "./router-DtZwCPIN.mjs";
function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const reload = reactExports.useCallback(async () => {
    if (!user) {
      setProfile(null);
      return;
    }
    setLoading(true);
    const { data } = await supabase.from("profiles").select("*").eq("user_id", user.id).maybeSingle();
    setProfile(data ?? null);
    setLoading(false);
  }, [user]);
  reactExports.useEffect(() => {
    reload();
  }, [reload]);
  const update = async (patch) => {
    if (!user) return { error: "Não autenticado" };
    const { error } = await supabase.from("profiles").update(patch).eq("user_id", user.id);
    if (error) return { error: error.message };
    await reload();
    return { error: null };
  };
  return { profile, loading, reload, update };
}
export {
  useProfile as u
};
