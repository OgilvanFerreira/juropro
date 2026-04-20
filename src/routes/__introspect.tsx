import { createFileRoute } from "@tanstack/react-router";
import { introspectClientes } from "@/integrations/external-supabase/introspect.functions";

export const Route = createFileRoute("/__introspect")({
  loader: () => introspectClientes(),
  component: () => {
    const data = Route.useLoaderData();
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  },
});
