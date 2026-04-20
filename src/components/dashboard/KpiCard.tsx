import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
  tone: "warning" | "destructive" | "info" | "success";
  loading?: boolean;
  empty?: boolean;
}

const toneStyles: Record<KpiCardProps["tone"], string> = {
  warning: "bg-warning/15 text-warning",
  destructive: "bg-destructive/15 text-destructive",
  info: "bg-info/15 text-info",
  success: "bg-success/15 text-success",
};

export function KpiCard({
  label,
  value,
  hint,
  icon: Icon,
  tone,
  loading = false,
  empty = false,
}: KpiCardProps) {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          {loading ? (
            <div className="mt-2 h-9 w-20 animate-pulse rounded-md bg-muted" />
          ) : (
            <p
              className={cn(
                "mt-2 text-3xl font-semibold tracking-tight",
                empty ? "text-muted-foreground/60" : "text-foreground",
              )}
            >
              {value}
            </p>
          )}
        </div>
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            toneStyles[tone],
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {loading ? "Carregando..." : empty ? "Nenhum dado encontrado" : hint}
      </p>
    </div>
  );
}
