import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Tone = "warning" | "destructive" | "info" | "success";

const toneStyles: Record<Tone, { bg: string; text: string; ring: string }> = {
  warning: {
    bg: "bg-warning/15",
    text: "text-warning-foreground",
    ring: "ring-warning/30",
  },
  destructive: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    ring: "ring-destructive/30",
  },
  info: {
    bg: "bg-info/10",
    text: "text-info",
    ring: "ring-info/30",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    ring: "ring-success/30",
  },
};

interface KpiCardProps {
  label: string;
  value: string;
  delta?: string;
  icon: LucideIcon;
  tone: Tone;
}

export function KpiCard({ label, value, delta, icon: Icon, tone }: KpiCardProps) {
  const styles = toneStyles[tone];
  return (
    <Card className="group relative overflow-hidden rounded-lg border bg-card p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <p className="text-3xl font-semibold tracking-tight text-foreground">{value}</p>
        </div>
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-lg ring-1",
            styles.bg,
            styles.text,
            styles.ring,
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {delta && (
        <div className="mt-4 flex items-center gap-1 text-xs">
          <span className="inline-flex items-center gap-1 rounded-md bg-success/10 px-1.5 py-0.5 font-medium text-success">
            <ArrowUpRight className="h-3 w-3" />
            {delta}
          </span>
          <span className="text-muted-foreground">vs. mês anterior</span>
        </div>
      )}
    </Card>
  );
}
