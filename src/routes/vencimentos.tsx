import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/dashboard/PlaceholderPage";

export const Route = createFileRoute("/vencimentos")({
  head: () => ({
    meta: [{ title: "Vencimentos — JuroPro" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Vencimentos"
      description="Calendário de parcelas a vencer, atrasadas e recebidas."
    />
  ),
});
