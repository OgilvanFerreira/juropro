// Webhook: compra recusada/cancelamento - Nexano/Kiwifi
// Rota publica: /api/public/nexano-purchase-cancelled

import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { createHmac, timingSafeEqual } from "node:crypto";

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
    req.headers.get("token") ||
    body.token?.toString() ||
    null
  );
}

function safeCompare(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function validateSignature(
  req: Request,
  rawBody: string,
  body: Record<string, unknown>,
  secret: string,
): boolean {
  const querySignature = new URL(req.url).searchParams.get("signature");
  const signature =
    querySignature ||
    req.headers.get("x-webhook-signature") ||
    req.headers.get("x-nexano-signature") ||
    req.headers.get("x-signature");

  if (!signature) return false;

  const normalized = signature.replace(/^(sha1|sha256)=/i, "").trim();
  const algorithms = querySignature ? ["sha1"] : ["sha256", "sha1"];
  const payloads = [...new Set([rawBody, JSON.stringify(body)])];
  return algorithms.some((algorithm) =>
    payloads.some((payload) => {
      const expected = createHmac(algorithm, secret).update(payload).digest("hex");
      return safeCompare(normalized, expected);
    }),
  );
}

type BlockingEvent = "cancelled" | "refund" | "late" | "chargeback" | "test";

function extractEvent(body: Record<string, unknown>): string {
  return (
    findStringByKeys(body, ["webhook_event_type", "event_type", "event", "type"]) ?? ""
  )
    .trim()
    .toLowerCase();
}

function classifyBlockingEvent(body: Record<string, unknown>): BlockingEvent | null {
  const event = extractEvent(body);
  if (event.includes("webhook.test")) return "test";
  if (["subscription_canceled", "subscription_cancelled", "assinatura_cancelada"].includes(event)) {
    return "cancelled";
  }
  if (["order_refunded", "compra_reembolsada", "purchase_refunded", "refund"].includes(event)) {
    return "refund";
  }
  if (["subscription_late", "assinatura_atrasada"].includes(event)) return "late";
  if (["order_chargeback", "chargeback"].includes(event)) return "chargeback";
  return null;
}

function getEventSecrets(event: BlockingEvent | null): string[] {
  const secrets = {
    cancelled: process.env.KIWIFY_CANCELLED_WEBHOOK_SECRET,
    refund: process.env.KIWIFY_REFUND_WEBHOOK_SECRET,
    late: process.env.KIWIFY_LATE_WEBHOOK_SECRET,
    chargeback: process.env.KIWIFY_CHARGEBACK_WEBHOOK_SECRET,
  };

  if (event === "test") return Object.values(secrets).filter((value): value is string => !!value);
  if (!event) return [];
  const secret = secrets[event];
  return secret ? [secret] : [];
}

function validateWebhook(req: Request, body: Record<string, unknown>, rawBody: string): boolean {
  const event = classifyBlockingEvent(body);
  const acceptedSecrets = getEventSecrets(event);
  if (acceptedSecrets.length === 0) {
    console.error("[webhook-cancelled] Evento desconhecido ou segredo especifico nao configurado");
    return false;
  }

  const token = extractToken(req, body);
  if (!token) {
    const validSignature = acceptedSecrets.some((secret) =>
      validateSignature(req, rawBody, body, secret),
    );
    if (!validSignature) {
      console.error("[webhook-cancelled] Token/assinatura ausente ou invalida");
      return false;
    }
    return true;
  }

  return acceptedSecrets.some((secret) => safeCompare(token, secret));
}

function findStringByKeys(value: unknown, keys: string[], depth = 0): string | null {
  if (!value || typeof value !== "object" || depth > 6) return null;

  const record = value as Record<string, unknown>;
  for (const key of keys) {
    const match = record[key];
    if (typeof match === "string" && match.trim()) return match.trim();
    if (typeof match === "number") return String(match);
  }

  for (const nested of Object.values(record)) {
    const found = findStringByKeys(nested, keys, depth + 1);
    if (found) return found;
  }

  return null;
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
    (body.subscriber_email as string) ??
    (body.email as string) ??
    findStringByKeys(body, [
      "email",
      "customer_email",
      "buyer_email",
      "client_email",
      "subscriber_email",
    ]);

  const document =
    (client.cpf as string) ??
    (client.cnpj as string) ??
    (customer.cpf as string) ??
    (customer.cnpj as string) ??
    (client.document as string) ??
    (customer.document as string) ??
    (body.subscriber_document_number as string) ??
    (body.client_cpf as string) ??
    (body.client_cnpj as string) ??
    findStringByKeys(body, [
      "cpf",
      "cnpj",
      "document",
      "documento",
      "customer_document",
      "subscriber_document_number",
      "client_cpf",
      "client_cnpj",
    ]);

  const externalId =
    (subscription.id as string) ??
    (transaction.id as string) ??
    (body.transaction_id as string) ??
    (body.payment_order_code as string) ??
    (body.subscriber_id as string) ??
    (body.id as string) ??
    findStringByKeys(body, [
      "transaction_id",
      "order_id",
      "sale_id",
      "purchase_id",
      "payment_order_code",
      "subscriber_id",
    ]);

  return { email, document, externalId };
}

function isWebhookTest(body: Record<string, unknown>) {
  return extractEvent(body).includes("webhook.test");
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

        let rawBody: string;
        let body: Record<string, unknown>;
        try {
          rawBody = await request.text();
          body = JSON.parse(rawBody || "{}");
        } catch {
          return Response.json({ error: "Payload JSON invalido" }, { status: 400 });
        }

        console.log("[webhook-cancelled] Evento recebido:", extractEvent(body) || "nao informado");

        if (!validateWebhook(request, body, rawBody)) {
          return Response.json({ error: "Token invalido" }, { status: 401 });
        }

        if (!classifyBlockingEvent(body)) {
          console.warn("[webhook-cancelled] Evento nao permitido nesta rota");
          return Response.json({ error: "Evento nao permitido" }, { status: 422 });
        }

        if (isWebhookTest(body)) {
          console.log("[webhook-cancelled] Teste de webhook recebido");
          return Response.json({ ok: true, message: "Webhook de teste recebido" });
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
