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
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="emeraldFill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="hsl(var(--chart-emerald, 160 84% 39%))"
                  stopOpacity={0.45}
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--chart-emerald, 160 84% 39%))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={36}
            />
            <Tooltip
              cursor={{ stroke: "hsl(var(--border))", strokeWidth: 1 }}
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
                color: "hsl(var(--foreground))",
              }}
              labelStyle={{ color: "hsl(var(--muted-foreground))" }}
              formatter={(value: number) => [`${value} clientes`, "Novos"]}
            />
            <Area
              type="monotone"
              dataKey="clientes"
              stroke="hsl(var(--chart-emerald, 160 84% 39%))"
              strokeWidth={2}
              fill="url(#emeraldFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
