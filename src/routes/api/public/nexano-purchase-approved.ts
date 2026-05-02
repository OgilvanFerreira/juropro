// src/routes/api/public/nexano-purchase-approved.ts
//
// Webhook: Compra Aprovada — Nexano / Kiwifi
// Rota pública: /api/public/nexano-purchase-approved
// Deploy: Cloudflare Workers (TanStack Start v1 + Vite 7)
//
// FLUXO:
//   1. Recebe POST da plataforma de pagamentos
//   2. No primeiro teste: inspeciona o payload bruto e loga no console
//      para que você possa ver exatamente onde vêm os campos e o token
//   3. Após primeiro teste: habilite a validação HMAC abaixo
//   4. Cria usuário no Supabase Auth (auth.users) — trigger handle_new_user()
//      cria o profiles automaticamente
//   5. Define senha temporária = documento (CPF/CNPJ) hasheado
//   6. Marca must_change_password = true no profile
//   7. Idempotência via upsert no email
// ─────────────────────────────────────────────────────────────────────────────

import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

// ─── Supabase Admin (Lovable Cloud — usuários do app) ────────────────────────
// Use a Service Role Key para operações admin (criar usuários, etc.)
// Variáveis configuradas no Cloudflare Workers / wrangler.jsonc (secrets)
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Extrai o token de autenticação do webhook de onde ele vier no request.
 *  Adaptamos após o primeiro teste — por isso inspecionamos todos os headers
 *  e o body para mapear o campo correto. */
function extractToken(req: Request, body: unknown): string | null {
  // Candidatos comuns — ajuste após primeiro teste
  return (
    req.headers.get("authorization")?.replace("Bearer ", "") ??
    req.headers.get("x-webhook-token") ??
    req.headers.get("x-nexano-token") ??
    req.headers.get("x-api-key") ??
    (body as Record<string, unknown>)?.token?.toString() ??
    null
  );
}

/** Valida o token recebido contra o segredo configurado.
 *  ATIVE após confirmar o campo correto no primeiro teste. */
function validateToken(token: string | null): boolean {
  const secret = process.env.NEXANO_WEBHOOK_SECRET;
  if (!secret) {
    // Se ainda não configuramos o secret, loga aviso mas deixa passar
    // (modo "inspeção") — REMOVA isso em produção!
    console.warn(
      "[webhook-approved] NEXANO_WEBHOOK_SECRET não configurado — " +
        "validação desativada (modo inspeção)"
    );
    return true;
  }
  if (!token) {
    console.error("[webhook-approved] Token ausente no request");
    return false;
  }
  return token === secret;
}

/** Extrai dados do comprador do payload.
 *  Esta função é o ponto de adaptação após o primeiro teste:
 *  mapeie aqui os campos reais vindos da Nexano. */
function extractBuyerData(body: Record<string, unknown>): {
  email: string | null;
  name: string | null;
  document: string | null; // CPF ou CNPJ
  phone: string | null;
  externalId: string | null; // ID do pedido/transação para idempotência
} {
  // ── Inspecione o console após o primeiro teste e ajuste os caminhos ──

  // Padrão genérico — tenta vários caminhos comuns
  const customer =
    (body.customer as Record<string, unknown>) ??
    (body.buyer as Record<string, unknown>) ??
    (body.data as Record<string, unknown>)?.customer ??
    (body.data as Record<string, unknown>)?.buyer ??
    body;

  const email =
    (customer.email as string) ??
    (body.email as string) ??
    null;

  const name =
    (customer.name as string) ??
    (customer.full_name as string) ??
    (customer.nome as string) ??
    null;

  const document =
    (customer.document as string) ??
    (customer.cpf as string) ??
    (customer.cnpj as string) ??
    (customer.cpf_cnpj as string) ??
    null;

  const phone =
    (customer.phone as string) ??
    (customer.telefone as string) ??
    (customer.celular as string) ??
    null;

  const externalId =
    (body.id as string) ??
    (body.order_id as string) ??
    (body.transaction_id as string) ??
    ((body.data as Record<string, unknown>)?.id as string) ??
    null;

  return { email, name, document, phone, externalId };
}

/** Limpa documento deixando só dígitos */
function cleanDocument(doc: string): string {
  return doc.replace(/\D/g, "");
}

// ─── Handler Principal ────────────────────────────────────────────────────────

export const APIRoute = createAPIFileRoute(
  "/api/public/nexano-purchase-approved"
)({
  POST: async ({ request }) => {
    console.log("[webhook-approved] Request recebido");

    // 1. Parse do body
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Payload JSON inválido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ── MODO INSPEÇÃO: loga tudo no primeiro teste ──────────────────────────
    console.log("[webhook-approved] === PAYLOAD COMPLETO ===");
    console.log(JSON.stringify(body, null, 2));
    console.log("[webhook-approved] === HEADERS ===");
    for (const [key, value] of request.headers.entries()) {
      console.log(`  ${key}: ${value}`);
    }
    // ── FIM MODO INSPEÇÃO ───────────────────────────────────────────────────

    // 2. Validação do token
    const token = extractToken(request, body);
    if (!validateToken(token)) {
      return new Response(
        JSON.stringify({ error: "Token inválido" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Extração dos dados do comprador
    const { email, name, document, phone, externalId } =
      extractBuyerData(body);

    console.log("[webhook-approved] Dados extraídos:", {
      email,
      name,
      document: document ? "***" + document.slice(-4) : null,
      phone,
      externalId,
    });

    if (!email) {
      console.error("[webhook-approved] Email não encontrado no payload");
      return new Response(
        JSON.stringify({ error: "Email do comprador não encontrado" }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }

    // 4. Senha temporária = documento sem formatação (CPF/CNPJ)
    //    Se não tiver documento, usa os primeiros 8 chars do email
    const rawPassword = document
      ? cleanDocument(document)
      : email.split("@")[0].slice(0, 8) + "2024";

    const supabase = getSupabaseAdmin();

    // 5. Idempotência: verifica se usuário já existe pelo email
    const { data: existingUsers } = await supabase.auth.admin.listUsers();
    const alreadyExists = existingUsers?.users?.find(
      (u) => u.email?.toLowerCase() === email.toLowerCase()
    );

    if (alreadyExists) {
      console.log(
        `[webhook-approved] Usuário já existe (${email}) — idempotência: ignorando criação`
      );
      return new Response(
        JSON.stringify({
          ok: true,
          message: "Usuário já existente — nenhuma ação necessária",
          user_id: alreadyExists.id,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 6. Cria usuário no Supabase Auth
    //    O trigger handle_new_user() cria public.profiles automaticamente
    const { data: newUser, error: createError } =
      await supabase.auth.admin.createUser({
        email,
        password: rawPassword,        // Supabase hasheia internamente (bcrypt)
        email_confirm: true,          // Confirma email automaticamente
        user_metadata: {
          name: name ?? email.split("@")[0],
          must_change_password: true, // Flag para forçar troca no 1º login
          phone: phone ?? null,
          document: document ?? null,
          external_purchase_id: externalId ?? null,
          created_by: "webhook-nexano",
        },
      });

    if (createError) {
      console.error("[webhook-approved] Erro ao criar usuário:", createError);
      return new Response(
        JSON.stringify({ error: "Erro ao criar usuário", detail: createError.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log(
      `[webhook-approved] Usuário criado: ${newUser.user.id} (${email})`
    );

    // 7. Atualiza public.profiles com dados adicionais
    //    (o trigger já criou o registro; aqui complementamos)
    const { error: profileError } = await supabase
      .from("profiles")
      .update({
        nome: name ?? email.split("@")[0],
        email,
        telefone: phone ?? null,
        cpf: document ? cleanDocument(document) : null,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", newUser.user.id);

    if (profileError) {
      // Não falha o webhook — o usuário foi criado, o perfil pode ser
      // atualizado posteriormente
      console.warn(
        "[webhook-approved] Aviso ao atualizar profile:",
        profileError
      );
    }

    // 8. Insere role padrão 'user'
    const { error: roleError } = await supabase
      .from("user_roles")
      .insert({ user_id: newUser.user.id, role: "user" });

    if (roleError && !roleError.message.includes("duplicate")) {
      console.warn("[webhook-approved] Aviso ao inserir role:", roleError);
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Usuário criado com sucesso",
        user_id: newUser.user.id,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  },
});
