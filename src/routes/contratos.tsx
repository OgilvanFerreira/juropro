import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/dashboard/PlaceholderPage";

export const Route = createFileRoute("/contratos")({
  head: () => ({
    meta: [{ title: "Contratos — JuroPro" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Contratos"
      description="Crie, gerencie e acompanhe todos os contratos de empréstimo da operação."
    />
  ),
});
