// src/routes/api/public/nexano-purchase-approved.ts
//
// Webhook: Compra Aprovada — Nexano
// Rota pública: /api/public/nexano-purchase-approved
// Deploy: Vercel (TanStack Start v1 + Vite 7 + React 19)
//
// FLUXO:
//   1. Recebe POST da Nexano
//   2. Valida token via body.token === NEXANO_WEBHOOK_SECRET
//   3. Extrai dados do comprador (body.client.*)
//   4. Opera SOMENTE no Supabase EXTERNO (EXTERNAL_SUPABASE_URL)
//   5. Cria usuário no auth.users do externo
//   6. Senha temporária = CPF/CNPJ sem formatação
//   7. Insere role 'user' em public.user_roles
//   8. Idempotência via listUsers() + checa email duplicado
// ─────────────────────────────────────────────────────────────────────────────

import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

// ─── Supabase Admin — APENAS o Externo (JuroPro / dados de negócio) ──────────
function getExternalAdmin() {
  const url = process.env.EXTERNAL_SUPABASE_URL!;
  const serviceKey = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY!;

  if (!url || !serviceKey) {
    throw new Error(
      "[webhook-approved] EXTERNAL_SUPABASE_URL ou EXTERNAL_SUPABASE_SERVICE_ROLE_KEY não configurados na Vercel"
    );
  }

  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Token vem em body.token (confirmado nos logs da Nexano) */
function extractToken(body: Record<string, unknown>): string | null {
  return (body.token as string) ?? null;
}

function validateToken(token: string | null): boolean {
  const secret = process.env.NEXANO_WEBHOOK_SECRET;

  if (!secret) {
    console.error("[webhook-approved] NEXANO_WEBHOOK_SECRET não configurado na Vercel");
    return false;
  }

  if (!token) {
    console.error("[webhook-approved] Token ausente no payload");
    return false;
  }

  return token === secret;
}

function extractBuyerData(body: Record<string, unknown>) {
  const client = (body.client as Record<string, unknown>) ?? {};
  const transaction = (body.transaction as Record<string, unknown>) ?? {};

  return {
    email: (client.email as string) ?? null,
    name: (client.name as string) ?? null,
    document: (client.cpf as string) ?? (client.cnpj as string) ?? null,
    phone: (client.phone as string) ?? null,
    externalId: (transaction.id as string) ?? null,
  };
}

function cleanDocument(doc: string): string {
  return doc.replace(/\D/g, "");
}

// ─── Handler Principal ────────────────────────────────────────────────────────

export const Route = createFileRoute("/api/public/nexano-purchase-approved")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
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

        // 2. Validação do token (body.token === NEXANO_WEBHOOK_SECRET)
        const token = extractToken(body);
        if (!validateToken(token)) {
          return new Response(
            JSON.stringify({ error: "Token inválido" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
          );
        }

        // 3. Extração dos dados do comprador
        const { email, name, document, phone, externalId } = extractBuyerData(body);

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

        // 4. Senha temporária = documento limpo (CPF/CNPJ)
        //    Fallback: primeiros 8 chars do email + "2024"
        const rawPassword = document
          ? cleanDocument(document)
          : email.split("@")[0].slice(0, 8) + "2024";

        // 5. Conecta ao Supabase EXTERNO
        let supabase: ReturnType<typeof getExternalAdmin>;
        try {
          supabase = getExternalAdmin();
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[webhook-approved]", msg);
          return new Response(
            JSON.stringify({ error: "Configuração do servidor incompleta", detail: msg }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }

        // 6. Idempotência: verifica se usuário já existe pelo email
        const { data: existingUsers } = await supabase.auth.admin.listUsers();
        const alreadyExists = existingUsers?.users?.find(
          (u) => u.email?.toLowerCase() === email.toLowerCase()
        );

        if (alreadyExists) {
          console.log(`[webhook-approved] Usuário já existe (${email}) — idempotência: sem ação`);
          return new Response(
            JSON.stringify({
              ok: true,
              message: "Usuário já existente — nenhuma ação necessária",
              user_id: alreadyExists.id,
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }

        // 7. Cria usuário no auth.users do Supabase EXTERNO
        const { data: newUser, error: createError } =
          await supabase.auth.admin.createUser({
            email,
            password: rawPassword,
            email_confirm: true,
            user_metadata: {
              name: name ?? email.split("@")[0],
              must_change_password: true,
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

        console.log(`[webhook-approved] Usuário criado: ${newUser.user.id} (${email})`);

        // 8. Insere role 'user' em public.user_roles
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
    },
  },
});
