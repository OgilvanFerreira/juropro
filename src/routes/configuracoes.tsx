import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/dashboard/PlaceholderPage";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [{ title: "Configurações — JuroPro" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Configurações"
      description="Personalize taxas padrão, perfis de usuário e preferências do sistema."
    />
  ),
});
