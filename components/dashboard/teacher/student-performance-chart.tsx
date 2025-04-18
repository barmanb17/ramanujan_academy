"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartLegendItemLabel,
  ChartLegendItemValue,
  ChartLegendItemColor,
} from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    class: "Class A",
    average: 72,
    highest: 95,
    lowest: 45,
  },
  {
    class: "Class B",
    average: 68,
    highest: 92,
    lowest: 40,
  },
  {
    class: "Class C",
    average: 75,
    highest: 98,
    lowest: 52,
  },
  {
    class: "Class D",
    average: 70,
    highest: 90,
    lowest: 48,
  },
]

export default function StudentPerformanceChart() {
  return (
    <ChartContainer
      className="h-[300px]"
      data={data}
      tooltip={
        <ChartTooltip>
          <ChartTooltipContent className="p-2" />
        </ChartTooltip>
      }
      legend={
        <ChartLegend className="mt-4">
          <ChartLegendItem>
            <ChartLegendItemColor className="bg-primary-500" />
            <ChartLegendItemLabel>Class Average</ChartLegendItemLabel>
            <ChartLegendItemValue />
          </ChartLegendItem>
          <ChartLegendItem>
            <ChartLegendItemColor className="bg-green-500" />
            <ChartLegendItemLabel>Highest Score</ChartLegendItemLabel>
            <ChartLegendItemValue />
          </ChartLegendItem>
          <ChartLegendItem>
            <ChartLegendItemColor className="bg-red-500" />
            <ChartLegendItemLabel>Lowest Score</ChartLegendItemLabel>
            <ChartLegendItemValue />
          </ChartLegendItem>
        </ChartLegend>
      }
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
          <XAxis dataKey="class" tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[0, 100]} className="text-xs" />
          <Bar dataKey="average" fill="#0056B3" radius={[4, 4, 0, 0]} name="Class Average" />
          <Bar dataKey="highest" fill="#22c55e" radius={[4, 4, 0, 0]} name="Highest Score" />
          <Bar dataKey="lowest" fill="#ef4444" radius={[4, 4, 0, 0]} name="Lowest Score" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
