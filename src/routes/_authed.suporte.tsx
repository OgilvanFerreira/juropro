import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/dashboard/PlaceholderPage";

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [{ title: "Suporte — JuroPro" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Suporte"
      description="Central de ajuda, documentação e contato com o time JuroPro."
    />
  ),
});
