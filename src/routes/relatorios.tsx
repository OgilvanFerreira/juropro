import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/dashboard/PlaceholderPage";

export const Route = createFileRoute("/relatorios")({
  head: () => ({
    meta: [{ title: "Relatórios — JuroPro" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Relatórios"
      description="Análises financeiras, inadimplência, performance e exportações."
    />
  ),
});
