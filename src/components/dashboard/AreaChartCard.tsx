import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AreaChartCardProps {
  title: string;
  description?: string;
  data: Array<{ month: string; value: number }>;
  colorVar: string;
  gradientId: string;
  valueFormatter?: (value: number) => string;
}

export function AreaChartCard({
  title,
  description,
  data,
  colorVar,
  gradientId,
  valueFormatter = (v) => v.toLocaleString("pt-BR"),
}: AreaChartCardProps) {
  return (
    <Card className="rounded-lg border bg-card shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-foreground">{title}</CardTitle>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 8, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={`var(${colorVar})`} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={`var(${colorVar})`} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--color-border)"
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                tickFormatter={(v) => valueFormatter(Number(v))}
              />
              <Tooltip
                cursor={{ stroke: "var(--color-border)", strokeWidth: 1 }}
                contentStyle={{
                  backgroundColor: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.5rem",
                  fontSize: 12,
                  color: "var(--color-popover-foreground)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                formatter={(value) => [valueFormatter(Number(value)), title] as [string, string]}
                labelStyle={{ color: "var(--color-muted-foreground)", fontWeight: 500 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={`var(${colorVar})`}
                strokeWidth={2}
                fill={`url(#${gradientId})`}
                activeDot={{ r: 5, strokeWidth: 2, stroke: "var(--color-card)" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
