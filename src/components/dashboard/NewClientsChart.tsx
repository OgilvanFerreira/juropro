import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Mai", clientes: 42 },
  { month: "Jun", clientes: 58 },
  { month: "Jul", clientes: 71 },
  { month: "Ago", clientes: 65 },
  { month: "Set", clientes: 89 },
  { month: "Out", clientes: 102 },
  { month: "Nov", clientes: 118 },
  { month: "Dez", clientes: 134 },
  { month: "Jan", clientes: 151 },
  { month: "Fev", clientes: 168 },
  { month: "Mar", clientes: 192 },
  { month: "Abr", clientes: 217 },
];

const EMERALD = "oklch(0.62 0.15 160)";
const EMERALD_GLOW = "oklch(0.7 0.16 160)";

export function NewClientsChart() {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-1">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          Evolução de Novos Clientes
        </h3>
        <p className="text-xs text-muted-foreground">
          Últimos 12 meses — total acumulado por mês
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="emeraldFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={EMERALD_GLOW} stopOpacity={0.5} />
                <stop offset="100%" stopColor={EMERALD} stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="var(--muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={36}
            />
            <Tooltip
              cursor={{ stroke: "var(--border)", strokeWidth: 1 }}
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--foreground)",
              }}
              labelStyle={{ color: "var(--muted-foreground)" }}
              formatter={(value) => [`${value} clientes`, "Novos"]}
            />
            <Area
              type="monotone"
              dataKey="clientes"
              stroke={EMERALD}
              strokeWidth={2}
              fill="url(#emeraldFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
