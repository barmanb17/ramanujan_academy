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
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    month: "Jan",
    physics: 65,
    chemistry: 70,
    mathematics: 75,
  },
  {
    month: "Feb",
    physics: 72,
    chemistry: 68,
    mathematics: 78,
  },
  {
    month: "Mar",
    physics: 68,
    chemistry: 75,
    mathematics: 80,
  },
  {
    month: "Apr",
    physics: 75,
    chemistry: 82,
    mathematics: 85,
  },
  {
    month: "May",
    physics: 80,
    chemistry: 78,
    mathematics: 82,
  },
  {
    month: "Jun",
    physics: 85,
    chemistry: 80,
    mathematics: 88,
  },
]

export default function PerformanceChart() {
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
            <ChartLegendItemLabel>Physics</ChartLegendItemLabel>
            <ChartLegendItemValue />
          </ChartLegendItem>
          <ChartLegendItem>
            <ChartLegendItemColor className="bg-green-500" />
            <ChartLegendItemLabel>Chemistry</ChartLegendItemLabel>
            <ChartLegendItemValue />
          </ChartLegendItem>
          <ChartLegendItem>
            <ChartLegendItemColor className="bg-secondary-500" />
            <ChartLegendItemLabel>Mathematics</ChartLegendItemLabel>
            <ChartLegendItemValue />
          </ChartLegendItem>
        </ChartLegend>
      }
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
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[0, 100]} className="text-xs" />
          <Line
            type="monotone"
            dataKey="physics"
            stroke="#0056B3"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="chemistry"
            stroke="#22c55e"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="mathematics"
            stroke="#FFD700"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
