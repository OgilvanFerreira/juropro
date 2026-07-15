import type { SupabaseClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";

const PROVIDER = "kiwify";

export type WebhookEventIdentity = {
  eventKey: string;
  eventType: string;
};

export type WebhookEventClaim = {
  claimed: boolean;
  status: string;
};

type ClaimRow = {
  claimed?: boolean;
  event_status?: string;
};

export function buildWebhookEventIdentity(input: {
  externalId: string | null;
  eventType: string;
  rawBody: string;
}): WebhookEventIdentity {
  const externalId = input.externalId?.trim();
  const eventKey = externalId
    ? externalId
    : `sha256:${createHash("sha256").update(input.rawBody).digest("hex")}`;

  return {
    eventKey,
    eventType: input.eventType.trim().toLowerCase(),
  };
}

export async function claimWebhookEvent(
  supabase: SupabaseClient,
  identity: WebhookEventIdentity,
): Promise<WebhookEventClaim> {
  const { data, error } = await supabase.rpc("claim_webhook_event", {
    p_provider: PROVIDER,
    p_event_key: identity.eventKey,
    p_event_type: identity.eventType,
  });

  if (error) throw error;

  const row = (Array.isArray(data) ? data[0] : data) as ClaimRow | null;
  if (!row || typeof row.claimed !== "boolean") {
    throw new Error("Resposta invalida ao reservar evento de webhook");
  }

  return {
    claimed: row.claimed,
    status: row.event_status ?? "unknown",
  };
}

export async function completeWebhookEvent(
  supabase: SupabaseClient,
  identity: WebhookEventIdentity,
): Promise<void> {
  const { error } = await supabase.rpc("complete_webhook_event", {
    p_provider: PROVIDER,
    p_event_key: identity.eventKey,
    p_event_type: identity.eventType,
  });

  if (error) throw error;
}

export async function failWebhookEvent(
  supabase: SupabaseClient,
  identity: WebhookEventIdentity,
  errorMessage: string,
): Promise<void> {
  const { error } = await supabase.rpc("fail_webhook_event", {
    p_provider: PROVIDER,
    p_event_key: identity.eventKey,
    p_event_type: identity.eventType,
    p_error: errorMessage,
  });

  if (error) throw error;
}
