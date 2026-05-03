// src/routes/index.tsx
//
// Rota raiz: juropro.com.br/
// Serve a landing page estática via redirect para o arquivo HTML público.
//
// COMO FUNCIONA:
//   O arquivo landing.html fica em /public/landing.html
//   Esta rota redireciona / → /landing.html (server-side)
//   Resultado: juropro.com.br/ mostra a landing sem passar pelo AuthGuard
// ─────────────────────────────────────────────────────────────────────────────

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // Sem AuthGuard — rota pública
  component: LandingPage,
});

function LandingPage() {
  // Redireciona para o HTML estático via meta-refresh
  // O arquivo /public/landing.html é servido diretamente pela Vercel
  if (typeof window !== "undefined") {
    window.location.replace("/landing.html");
  }

  // Fallback SSR — enquanto redireciona
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="refresh" content="0; url=/landing.html" />
        <title>JuroPro — Gestão Profissional de Empréstimos</title>
      </head>
      <body>
        <p>Carregando...</p>
      </body>
    </html>
  );
}
