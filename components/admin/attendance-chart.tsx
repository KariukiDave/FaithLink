"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    date: "Jan 1",
    attendance: 320,
  },
  {
    date: "Jan 8",
    attendance: 350,
  },
  {
    date: "Jan 15",
    attendance: 380,
  },
  {
    date: "Jan 22",
    attendance: 410,
  },
  {
    date: "Jan 29",
    attendance: 390,
  },
  {
    date: "Feb 5",
    attendance: 420,
  },
  {
    date: "Feb 12",
    attendance: 450,
  },
  {
    date: "Feb 19",
    attendance: 470,
  },
  {
    date: "Feb 26",
    attendance: 480,
  },
  {
    date: "Mar 5",
    attendance: 500,
  },
  {
    date: "Mar 12",
    attendance: 520,
  },
  {
    date: "Mar 19",
    attendance: 540,
  },
]

export function AttendanceChart() {
  return (
    <ChartContainer
      config={{
        attendance: {
          label: "Attendance",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            className="text-xs"
            tick={{ fontSize: 10 }}
            tickFormatter={(value) => value.split(" ")[0]}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} className="text-xs" tick={{ fontSize: 10 }} />
          <Tooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="attendance"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-attendance)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-attendance)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
