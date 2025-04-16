"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    month: "Jan",
    newMembers: 18,
    visitors: 32,
  },
  {
    month: "Feb",
    newMembers: 22,
    visitors: 40,
  },
  {
    month: "Mar",
    newMembers: 25,
    visitors: 45,
  },
  {
    month: "Apr",
    newMembers: 32,
    visitors: 55,
  },
  {
    month: "May",
    newMembers: 28,
    visitors: 48,
  },
  {
    month: "Jun",
    newMembers: 30,
    visitors: 52,
  },
]

export function GrowthChart() {
  return (
    <ChartContainer
      config={{
        newMembers: {
          label: "New Members",
          color: "hsl(var(--primary))",
        },
        visitors: {
          label: "First-time Visitors",
          color: "hsl(var(--primary)/0.5)",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            className="text-xs"
            tick={{ fontSize: 10 }}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} className="text-xs" tick={{ fontSize: 10 }} />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="visitors" fill="var(--color-visitors)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="newMembers" fill="var(--color-newMembers)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
