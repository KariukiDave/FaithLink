"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Worship", value: 35 },
  { name: "Children", value: 20 },
  { name: "Youth", value: 15 },
  { name: "Outreach", value: 10 },
  { name: "Prayer", value: 10 },
  { name: "Other", value: 10 },
]

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--primary)/0.8)",
  "hsl(var(--primary)/0.6)",
  "hsl(var(--primary)/0.4)",
  "hsl(var(--primary)/0.3)",
  "hsl(var(--primary)/0.2)",
]

export function EngagementChart() {
  return (
    <ChartContainer
      config={{
        ministry: {
          label: "Ministry",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<ChartTooltipContent />} />
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
