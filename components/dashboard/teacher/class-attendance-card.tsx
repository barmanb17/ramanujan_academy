"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    class: "XII-A",
    attendance: 92,
  },
  {
    class: "XII-B",
    attendance: 88,
  },
  {
    class: "XII-C",
    attendance: 95,
  },
  {
    class: "XII-D",
    attendance: 85,
  },
]

export default function ClassAttendanceCard() {
  return (
    <div className="space-y-4">
      <ChartContainer
        className="h-[200px]"
        data={data}
        tooltip={
          <ChartTooltip>
            <ChartTooltipContent className="p-2" />
          </ChartTooltip>
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
            <Bar dataKey="attendance" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Attendance %" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Overall Attendance:</span>
          <span className="font-bold text-blue-600">90%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Students Present Today:</span>
          <span>112 / 120</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Last Updated:</span>
          <span>Today, 10:30 AM</span>
        </div>
      </div>
    </div>
  )
}
