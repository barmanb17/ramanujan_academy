"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    subject: "Physics",
    present: 18,
    total: 20,
  },
  {
    subject: "Chemistry",
    present: 17,
    total: 20,
  },
  {
    subject: "Mathematics",
    present: 19,
    total: 20,
  },
  {
    subject: "English",
    present: 16,
    total: 18,
  },
  {
    subject: "Biology",
    present: 15,
    total: 16,
  },
]

export default function AttendanceCard() {
  // Calculate attendance percentage for each subject
  const attendanceData = data.map((item) => ({
    ...item,
    percentage: Math.round((item.present / item.total) * 100),
  }))

  return (
    <div className="space-y-4">
      <ChartContainer
        className="h-[200px]"
        data={attendanceData}
        tooltip={
          <ChartTooltip>
            <ChartTooltipContent className="p-2" />
          </ChartTooltip>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={attendanceData}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <XAxis dataKey="subject" tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
            <YAxis tickLine={false} axisLine={false} tickMargin={10} domain={[0, 100]} className="text-xs" />
            <Bar dataKey="percentage" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Attendance %" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Overall Attendance:</span>
          <span className="font-bold text-blue-600">92%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Classes Attended:</span>
          <span>85 / 94</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Last Updated:</span>
          <span>Today, 8:30 AM</span>
        </div>
      </div>
    </div>
  )
}
