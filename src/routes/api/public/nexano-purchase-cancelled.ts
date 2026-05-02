// src/routes/api/public/nexano-purchase-cancelled.ts
//
// Webhook: Compra Recusada / Cancelamento de Assinatura — Nexano / Kiwifi
// Rota pública: /api/public/nexano-purchase-cancelled
// Deploy: Cloudflare Workers (TanStack Start v1 + Vite 7)
//
// FLUXO:
//   1. Recebe POST da plataforma
//   2. Valida token (mesma lógica do endpoint de aprovação)
//   3. Localiza usuário no Supabase Auth pelo email/documento
//   4. Bloqueia o acesso: banned_until = far future (Supabase Admin API)
//   5. Invalida sessões ativas via signOut admin
//   6. Idempotência: se já bloqueado, retorna 200 sem reprocessar
//   7. Se usuário não existe: loga e retorna 200 (evita retries)
// ─────────────────────────────────────────────────────────────────────────────

import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

// ─── Supabase Admin ───────────────────────────────────────────────────────────
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// ─── Helpers (mesma lógica do endpoint de aprovação) ─────────────────────────

function extractToken(req: Request, body: unknown): string | null {
  return (
    req.headers.get("authorization")?.replace("Bearer ", "") ??
    req.headers.get("x-webhook-token") ??
    req.headers.get("x-nexano-token") ??
    req.headers.get("x-api-key") ??
    (body as Record<string, unknown>)?.token?.toString() ??
    null
  );
}

function validateToken(token: string | null): boolean {
  const secret = process.env.NEXANO_WEBHOOK_SECRET;
  if (!secret) {
    console.warn(
      "[webhook-cancelled] NEXANO_WEBHOOK_SECRET não configurado — " +
        "validação desativada (modo inspeção)"
    );
    return true;
  }
  if (!token) {
    console.error("[webhook-cancelled] Token ausente");
    return false;
  }
  return token === secret;
}

/** Extrai identificador do comprador para localizar no banco.
 *  Adaptar após o primeiro teste de cancelamento. */
function extractBuyerIdentifier(body: Record<string, unknown>): {
  email: string | null;
  document: string | null;
  externalId: string | null;
} {
  const customer =
    (body.customer as Record<string, unknown>) ??
    (body.buyer as Record<string, unknown>) ??
    (body.data as Record<string, unknown>)?.customer ??
    (body.data as Record<string, unknown>)?.buyer ??
    body;

  const email =
    (customer.email as string) ?? (body.email as string) ?? null;

  const document =
    (customer.document as string) ??
    (customer.cpf as string) ??
    (customer.cnpj as string) ??
    (customer.cpf_cnpj as string) ??
    null;

  const externalId =
    (body.id as string) ??
    (body.order_id as string) ??
    (body.subscription_id as string) ??
    ((body.data as Record<string, unknown>)?.id as string) ??
    null;

  return { email, document, externalId };
}

// Data muito distante = banido indefinidamente
const BANNED_UNTIL = "2099-01-01T00:00:00Z";

// ─── Handler Principal ────────────────────────────────────────────────────────

export const APIRoute = createAPIFileRoute(
  "/api/public/nexano-purchase-cancelled"
)({
  POST: async ({ request }) => {
    console.log("[webhook-cancelled] Request recebido");

    // 1. Parse
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Payload JSON inválido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ── MODO INSPEÇÃO ────────────────────────────────────────────────────────
    console.log("[webhook-cancelled] === PAYLOAD COMPLETO ===");
    console.log(JSON.stringify(body, null, 2));
    console.log("[webhook-cancelled] === HEADERS ===");
    for (const [key, value] of request.headers.entries()) {
      console.log(`  ${key}: ${value}`);
    }
    // ── FIM MODO INSPEÇÃO ────────────────────────────────────────────────────

    // 2. Validação token
    const token = extractToken(request, body);
    if (!validateToken(token)) {
      return new Response(
        JSON.stringify({ error: "Token inválido" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Extrai identificador
    const { email, document, externalId } = extractBuyerIdentifier(body);

    console.log("[webhook-cancelled] Identificadores extraídos:", {
      email,
      document: document ? "***" + document.slice(-4) : null,
      externalId,
    });

    if (!email && !document) {
      console.error(
        "[webhook-cancelled] Nenhum identificador encontrado — " +
          "registrando e retornando 200 para evitar retry"
      );
      return new Response(
        JSON.stringify({ ok: true, message: "Nenhum identificador — evento registrado" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const supabase = getSupabaseAdmin();

    // 4. Localiza usuário
    let targetUserId: string | null = null;

    if (email) {
      // Busca pelo email (mais confiável)
      const { data: users } = await supabase.auth.admin.listUsers();
      const found = users?.users?.find(
        (u) => u.email?.toLowerCase() === email.toLowerCase()
      );
      if (found) targetUserId = found.id;
    }

    // Fallback: busca pelo CPF no profile se não achou pelo email
    if (!targetUserId && document) {
      const cleanDoc = document.replace(/\D/g, "");
      const { data: profile } = await supabase
        .from("profiles")
        .select("user_id")
        .eq("cpf", cleanDoc)
        .maybeSingle();
      if (profile?.user_id) targetUserId = profile.user_id;
    }

    // 5. Usuário não encontrado — retorna 200 para evitar retries
    if (!targetUserId) {
      console.warn(
        `[webhook-cancelled] Usuário não encontrado para ${email ?? document} — evento registrado`
      );
      return new Response(
        JSON.stringify({
          ok: true,
          message: "Usuário não encontrado — evento registrado sem ação",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 6. Idempotência: verifica se já está bloqueado
    const { data: existingUser } =
      await supabase.auth.admin.getUserById(targetUserId);

    const alreadyBanned =
      existingUser?.user?.banned_until &&
      new Date(existingUser.user.banned_until) > new Date();

    if (alreadyBanned) {
      console.log(
        `[webhook-cancelled] Usuário ${targetUserId} já bloqueado — idempotência: ignorando`
      );
      return new Response(
        JSON.stringify({ ok: true, message: "Usuário já bloqueado" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 7. Bloqueia acesso: ban via Supabase Admin API
    //    banned_until = data futura distante (bloqueio indefinido)
    const { error: banError } = await supabase.auth.admin.updateUserById(
      targetUserId,
      { ban_duration: "876600h" } // ~100 anos
    );

    if (banError) {
      console.error(
        "[webhook-cancelled] Erro ao bloquear usuário:",
        banError
      );
      return new Response(
        JSON.stringify({
          error: "Erro ao bloquear usuário",
          detail: banError.message,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 8. Invalida sessões ativas (sign out de todos os dispositivos)
    const { error: signOutError } =
      await supabase.auth.admin.signOut(targetUserId, "global");

    if (signOutError) {
      // Não é crítico — o ban já impede novos logins
      console.warn(
        "[webhook-cancelled] Aviso ao invalidar sessões:",
        signOutError
      );
    }

    // 9. Marca no profile como inativo (opcional — para queries de negócio)
    await supabase
      .from("profiles")
      .update({ updated_at: new Date().toISOString() })
      .eq("user_id", targetUserId);

    console.log(
      `[webhook-cancelled] Usuário ${targetUserId} bloqueado com sucesso (${email ?? document})`
    );

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Usuário bloqueado com sucesso",
        user_id: targetUserId,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  },
});
