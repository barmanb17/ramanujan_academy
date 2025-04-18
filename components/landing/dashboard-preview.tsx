"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("student")

  const dashboardImages = {
    student: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    teacher: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
  }

  return (
    <section id="dashboard-preview" className="w-full py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Platform Preview</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dashboard Experience</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get a glimpse of our intuitive dashboards designed for students and teachers
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="student" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="student">Student Dashboard</TabsTrigger>
              <TabsTrigger value="teacher">Teacher Dashboard</TabsTrigger>
            </TabsList>
            <TabsContent value="student" className="mt-6">
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="grid gap-4 md:grid-cols-2">
                    {dashboardImages.student.map((image, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Student dashboard preview ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
                          <h3 className="text-lg font-medium text-white">
                            {index === 0 ? "Performance Analytics" : "Study Materials & Resources"}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-6">
                    <h3 className="text-xl font-bold mb-2">Student Dashboard Features</h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Class Routine & Timetable
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Attendance Tracking
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Online Class Schedule
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Performance Analytics
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Study Materials
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Fee Payment History
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teacher" className="mt-6">
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="grid gap-4 md:grid-cols-2">
                    {dashboardImages.teacher.map((image, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Teacher dashboard preview ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
                          <h3 className="text-lg font-medium text-white">
                            {index === 0 ? "Student Performance Tracking" : "Class Management"}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-6">
                    <h3 className="text-xl font-bold mb-2">Teacher Dashboard Features</h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Attendance Management
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Upload Study Materials
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Test Creation & Grading
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Performance Monitoring
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Student Report Generation
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                        Internal Messaging
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
