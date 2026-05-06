// Webhook: compra recusada/cancelamento - Nexano/Kiwifi
// Rota publica: /api/public/nexano-purchase-cancelled

import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

function getExternalAdmin() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const serviceKey = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "[webhook-cancelled] EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_SERVICE_ROLE_KEY nao configurados na Vercel",
    );
  }

  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function extractToken(req: Request, body: Record<string, unknown>): string | null {
  return (
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim() ||
    req.headers.get("x-webhook-token") ||
    req.headers.get("x-nexano-token") ||
    req.headers.get("x-api-key") ||
    body.token?.toString() ||
    null
  );
}

function validateToken(token: string | null): boolean {
  const secret = process.env.NEXANO_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[webhook-cancelled] NEXANO_WEBHOOK_SECRET nao configurado na Vercel");
    return false;
  }
  if (!token) {
    console.error("[webhook-cancelled] Token ausente");
    return false;
  }
  return token === secret;
}

function extractBuyerIdentifier(body: Record<string, unknown>): {
  email: string | null;
  document: string | null;
  externalId: string | null;
} {
  const client = (body.client as Record<string, unknown>) ?? {};
  const customer = (body.customer as Record<string, unknown>) ?? {};
  const transaction = (body.transaction as Record<string, unknown>) ?? {};
  const subscription = (body.subscription as Record<string, unknown>) ?? {};

  const email =
    (client.email as string) ??
    (customer.email as string) ??
    (body.email as string) ??
    null;

  const document =
    (client.cpf as string) ??
    (client.cnpj as string) ??
    (customer.cpf as string) ??
    (customer.cnpj as string) ??
    (client.document as string) ??
    (customer.document as string) ??
    null;

  const externalId =
    (subscription.id as string) ??
    (transaction.id as string) ??
    (body.transaction_id as string) ??
    null;

  return { email, document, externalId };
}

async function findUserByEmail(
  supabase: ReturnType<typeof getExternalAdmin>,
  email: string,
) {
  const target = email.toLowerCase();
  const perPage = 1000;

  for (let page = 1; page <= 100; page += 1) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage });
    if (error) throw error;

    const found = data?.users?.find((u) => u.email?.toLowerCase() === target);
    if (found) return found;
    if (!data?.users || data.users.length < perPage) return null;
  }

  throw new Error("Limite de paginacao atingido ao buscar usuario por email.");
}

export const Route = createFileRoute("/api/public/nexano-purchase-cancelled")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        console.log("[webhook-cancelled] Request recebido");

        let body: Record<string, unknown>;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Payload JSON invalido" }, { status: 400 });
        }

        const token = extractToken(request, body);
        if (!validateToken(token)) {
          return Response.json({ error: "Token invalido" }, { status: 401 });
        }

        const { email, document, externalId } = extractBuyerIdentifier(body);
        console.log("[webhook-cancelled] Identificadores extraidos:", {
          email,
          document: document ? `***${document.slice(-4)}` : null,
          externalId,
        });

        if (!email && !document) {
          console.warn("[webhook-cancelled] Nenhum identificador encontrado");
          return Response.json(
            { ok: true, message: "Nenhum identificador encontrado" },
            { status: 200 },
          );
        }

        let supabase: ReturnType<typeof getExternalAdmin>;
        try {
          supabase = getExternalAdmin();
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[webhook-cancelled]", msg);
          return Response.json(
            { error: "Configuracao do servidor incompleta" },
            { status: 500 },
          );
        }

        let targetUserId: string | null = null;
        try {
          if (email) {
            const found = await findUserByEmail(supabase, email);
            if (found) targetUserId = found.id;
          }

          if (!targetUserId && document) {
            const cleanDoc = document.replace(/\D/g, "");
            const { data: profile } = await supabase
              .from("profiles")
              .select("user_id")
              .eq("cpf", cleanDoc)
              .maybeSingle();
            if (profile?.user_id) targetUserId = profile.user_id;
          }
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[webhook-cancelled] Erro ao localizar usuario:", msg);
          return Response.json(
            { error: "Erro ao localizar usuario" },
            { status: 500 },
          );
        }

        if (!targetUserId) {
          console.warn("[webhook-cancelled] Usuario nao encontrado");
          return Response.json(
            { ok: true, message: "Usuario nao encontrado" },
            { status: 200 },
          );
        }

        const { data: existingUser } = await supabase.auth.admin.getUserById(targetUserId);
        const alreadyBanned =
          existingUser?.user?.banned_until &&
          new Date(existingUser.user.banned_until) > new Date();

        if (alreadyBanned) {
          return Response.json(
            { ok: true, message: "Usuario ja bloqueado" },
            { status: 200 },
          );
        }

        const { error: banError } = await supabase.auth.admin.updateUserById(
          targetUserId,
          { ban_duration: "876600h" },
        );

        if (banError) {
          console.error("[webhook-cancelled] Erro ao bloquear usuario:", banError.message);
          return Response.json(
            { error: "Erro ao bloquear usuario" },
            { status: 500 },
          );
        }

        const { error: signOutError } = await supabase.auth.admin.signOut(
          targetUserId,
          "global",
        );
        if (signOutError) {
          console.warn(
            "[webhook-cancelled] Aviso ao invalidar sessoes:",
            signOutError.message,
          );
        }

        await supabase
          .from("profiles")
          .update({ updated_at: new Date().toISOString() })
          .eq("user_id", targetUserId);

        console.log(`[webhook-cancelled] Usuario ${targetUserId} bloqueado`);
        return Response.json({
          ok: true,
          message: "Usuario bloqueado com sucesso",
          user_id: targetUserId,
        });
      },
    },
  },
});
