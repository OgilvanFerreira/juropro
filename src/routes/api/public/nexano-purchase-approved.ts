// Webhook: compra aprovada - Nexano/Kiwifi
// Rota publica: /api/public/nexano-purchase-approved
//
// Fluxo de producao:
// 1. Recebe POST da plataforma de vendas.
// 2. Valida o token compartilhado.
// 3. Cria ou atualiza o usuario no Supabase externo.
// 4. Gera uma senha temporaria aleatoria.
// 5. Envia para o cliente: login, senha temporaria e link do sistema.

import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const APP_BASE_URL = process.env.APP_BASE_URL || "https://www.juropro.com.br";
const LOGIN_URL = `${APP_BASE_URL.replace(/\/$/, "")}/login`;

function getExternalAdmin() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const serviceKey = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "[webhook-approved] EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_SERVICE_ROLE_KEY nao configurados na Vercel",
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
    (body.token as string) ||
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

function validateWebhook(req: Request, body: Record<string, unknown>, rawBody: string): boolean {
  const secret = process.env.KIWIFY_APPROVED_WEBHOOK_SECRET;

  if (!secret) {
    console.error(
      "[webhook-approved] KIWIFY_APPROVED_WEBHOOK_SECRET nao configurado na Vercel",
    );
    return false;
  }

  const token = extractToken(req, body);
  if (!token) {
    const validSignature = validateSignature(req, rawBody, body, secret);
    if (!validSignature) {
      console.error("[webhook-approved] Token/assinatura ausente ou invalida");
      return false;
    }
    return true;
  }

  return safeCompare(token, secret);
}

function extractEvent(body: Record<string, unknown>): string {
  return (
    findStringByKeys(body, ["webhook_event_type", "event_type", "event", "type"]) ?? ""
  )
    .trim()
    .toLowerCase();
}

function isApprovedEvent(body: Record<string, unknown>): boolean {
  const event = extractEvent(body);
  return (
    event.includes("webhook.test") ||
    event === "order_approved" ||
    event === "compra_aprovada" ||
    event === "purchase_approved" ||
    event === "purchase.approved"
  );
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

function extractBuyerData(body: Record<string, unknown>) {
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

  const name =
    (client.name as string) ??
    (customer.name as string) ??
    (client.nome as string) ??
    (customer.nome as string) ??
    (body.subscriber_name as string) ??
    (body.name as string) ??
    (body.nome as string) ??
    findStringByKeys(body, [
      "name",
      "nome",
      "customer_name",
      "buyer_name",
      "client_name",
      "subscriber_name",
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

  const phone =
    (client.phone as string) ??
    (customer.phone as string) ??
    (client.telefone as string) ??
    (customer.telefone as string) ??
    (body.subscriber_phone as string) ??
    (body.phone as string) ??
    (body.telefone as string) ??
    findStringByKeys(body, [
      "phone",
      "telefone",
      "whatsapp",
      "customer_phone",
      "buyer_phone",
      "subscriber_phone",
    ]);

  const externalId =
    (transaction.id as string) ??
    (subscription.id as string) ??
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

  return { email, name, document, phone, externalId };
}

function isWebhookTest(body: Record<string, unknown>) {
  return extractEvent(body).includes("webhook.test");
}

function generateTemporaryPassword(): string {
  return `Jp-${randomBytes(9).toString("base64url")}-7`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSmtpConfig() {
  const user = process.env.SMTP_USER || process.env.SMTP_FROM_EMAIL;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const fromEmail = process.env.SMTP_FROM_EMAIL || user;
  const fromName = process.env.SMTP_FROM_NAME || "Suporte JuroPro";

  if (!user || !pass || !fromEmail) {
    throw new Error(
      "SMTP_USER, SMTP_PASS e SMTP_FROM_EMAIL precisam estar configurados na Vercel.",
    );
  }

  return { user, pass, host, port, fromEmail, fromName };
}

async function sendTemporaryPasswordEmail(input: {
  to: string;
  name: string | null;
  password: string;
}) {
  const smtp = getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  const displayName = input.name?.trim() || "cliente";
  const displayNameHtml = escapeHtml(displayName);
  const emailHtml = escapeHtml(input.to);
  const passwordHtml = escapeHtml(input.password);
  const subject = "Seu acesso ao JuroPro";
  const text = [
    `Ola, ${displayName}.`,
    "",
    "Seu acesso ao JuroPro foi liberado.",
    "",
    `Login: ${input.to}`,
    `Senha temporaria: ${input.password}`,
    `Acesse: ${LOGIN_URL}`,
    "",
    "Por seguranca, ao entrar pela primeira vez voce sera direcionado para criar uma senha definitiva.",
    "",
    "Atenciosamente,",
    "Equipe JuroPro",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
      <h2 style="margin:0 0 12px;color:#065f46">Seu acesso ao JuroPro foi liberado</h2>
      <p>Ola, ${displayNameHtml}.</p>
      <p>Recebemos a confirmacao da sua compra e seu acesso ja esta disponivel.</p>
      <div style="background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:14px;margin:18px 0">
        <p style="margin:0 0 8px"><strong>Login:</strong> ${emailHtml}</p>
        <p style="margin:0"><strong>Senha temporaria:</strong> ${passwordHtml}</p>
      </div>
      <p>
        <a href="${LOGIN_URL}" style="display:inline-block;background:#059669;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:bold">
          Entrar no JuroPro
        </a>
      </p>
      <p style="font-size:14px;color:#4b5563">
        Por seguranca, ao entrar pela primeira vez voce sera direcionado para criar uma senha definitiva.
      </p>
      <p>Atenciosamente,<br/>Equipe JuroPro</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"${smtp.fromName}" <${smtp.fromEmail}>`,
    to: input.to,
    subject,
    text,
    html,
  });
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

async function ensureUserRole(
  supabase: ReturnType<typeof getExternalAdmin>,
  userId: string,
) {
  const { error } = await supabase
    .from("user_roles")
    .insert({ user_id: userId, role: "user" });

  if (error && !error.message.toLowerCase().includes("duplicate")) {
    console.warn("[webhook-approved] Aviso ao inserir role:", error.message);
  }
}

export const Route = createFileRoute("/api/public/nexano-purchase-approved")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        console.log("[webhook-approved] Request recebido");

        let rawBody: string;
        let body: Record<string, unknown>;
        try {
          rawBody = await request.text();
          body = JSON.parse(rawBody || "{}");
        } catch {
          return Response.json({ error: "Payload JSON invalido" }, { status: 400 });
        }

        console.log("[webhook-approved] Evento recebido:", extractEvent(body) || "nao informado");

        if (!validateWebhook(request, body, rawBody)) {
          return Response.json({ error: "Token invalido" }, { status: 401 });
        }

        if (!isApprovedEvent(body)) {
          console.log("[webhook-approved] Evento autenticado ignorado nesta rota");
          return Response.json({ ok: true, ignored: true }, { status: 200 });
        }

        if (isWebhookTest(body)) {
          console.log("[webhook-approved] Teste de webhook recebido");
          return Response.json({ ok: true, message: "Webhook de teste recebido" });
        }

        const { email, name, document, phone, externalId } = extractBuyerData(body);

        console.log("[webhook-approved] Dados extraidos:", {
          email,
          name,
          document: document ? `***${document.slice(-4)}` : null,
          phone: phone ? `***${phone.slice(-4)}` : null,
          externalId,
        });

        if (!email) {
          return Response.json(
            { error: "Email do comprador nao encontrado" },
            { status: 422 },
          );
        }

        try {
          getSmtpConfig();
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[webhook-approved] SMTP ausente:", msg);
          return Response.json(
            { error: "SMTP de envio da senha temporaria nao configurado" },
            { status: 500 },
          );
        }

        let supabase: ReturnType<typeof getExternalAdmin>;
        try {
          supabase = getExternalAdmin();
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[webhook-approved]", msg);
          return Response.json(
            { error: "Configuracao do servidor incompleta" },
            { status: 500 },
          );
        }

        const temporaryPassword = generateTemporaryPassword();

        let userId: string;
        let status = 201;
        try {
          const existingUser = await findUserByEmail(supabase, email);

          if (existingUser) {
            userId = existingUser.id;
            status = 200;
            const { error: updateError } = await supabase.auth.admin.updateUserById(
              existingUser.id,
              {
                password: temporaryPassword,
                email_confirm: true,
                user_metadata: {
                  ...(existingUser.user_metadata ?? {}),
                  name: name ?? existingUser.user_metadata?.name ?? email.split("@")[0],
                  must_change_password: true,
                  phone: phone ?? existingUser.user_metadata?.phone ?? null,
                  document: document ?? existingUser.user_metadata?.document ?? null,
                  external_purchase_id:
                    externalId ?? existingUser.user_metadata?.external_purchase_id ?? null,
                  updated_by: "webhook-purchase-approved",
                },
              },
            );

            if (updateError) {
              console.error("[webhook-approved] Erro ao atualizar usuario:", updateError.message);
              return Response.json(
                { error: "Erro ao atualizar usuario" },
                { status: 500 },
              );
            }
          } else {
            const { data: newUser, error: createError } =
              await supabase.auth.admin.createUser({
                email,
                password: temporaryPassword,
                email_confirm: true,
                user_metadata: {
                  name: name ?? email.split("@")[0],
                  must_change_password: true,
                  phone: phone ?? null,
                  document: document ?? null,
                  external_purchase_id: externalId ?? null,
                  created_by: "webhook-purchase-approved",
                },
              });

            if (createError || !newUser?.user) {
              console.error(
                "[webhook-approved] Erro ao criar usuario:",
                createError?.message,
              );
              return Response.json({ error: "Erro ao criar usuario" }, { status: 500 });
            }

            userId = newUser.user.id;
          }

          await ensureUserRole(supabase, userId);
          await sendTemporaryPasswordEmail({
            to: email,
            name,
            password: temporaryPassword,
          });
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[webhook-approved] Falha no processamento:", msg);
          return Response.json(
            { error: "Falha ao processar compra aprovada" },
            { status: 500 },
          );
        }

        console.log(`[webhook-approved] Acesso liberado para ${email}`);
        return Response.json(
          {
            ok: true,
            message:
              status === 201
                ? "Usuario criado e senha temporaria enviada"
                : "Usuario atualizado e senha temporaria reenviada",
            user_id: userId,
            temporary_password_sent: true,
          },
          { status },
        );
      },
    },
  },
});
