import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/dashboard/PlaceholderPage";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [{ title: "Clientes — JuroPro" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Clientes"
      description="Gestão completa da sua carteira de clientes — cadastro, histórico e análise de crédito."
    />
  ),
});
