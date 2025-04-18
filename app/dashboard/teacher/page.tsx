"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users, FileText, BarChart3, MessageSquare, Upload, CheckSquare } from "lucide-react"
import TeacherDashboardLayout from "@/components/dashboard/teacher-dashboard-layout"
import ClassAttendanceCard from "@/components/dashboard/teacher/class-attendance-card"
import UpcomingClassesCard from "@/components/dashboard/teacher/upcoming-classes-card"
import StudentPerformanceChart from "@/components/dashboard/teacher/student-performance-chart"
import MaterialsUploadCard from "@/components/dashboard/teacher/materials-upload-card"
import MessagingCard from "@/components/dashboard/teacher/messaging-card"

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <TeacherDashboardLayout>
      <motion.div className="flex flex-col space-y-6" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-primary-700">Teacher Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your classes and student performance.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:flex">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="messaging">Messaging</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <motion.div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                    <Users className="h-4 w-4 text-primary-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary-700">120</div>
                    <p className="text-xs text-muted-foreground">Across 4 classes</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Tests</CardTitle>
                    <FileText className="h-4 w-4 text-primary-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary-700">2</div>
                    <p className="text-xs text-muted-foreground">Next: Physics (Tomorrow)</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Materials Uploaded</CardTitle>
                    <Upload className="h-4 w-4 text-primary-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary-700">32</div>
                    <p className="text-xs text-muted-foreground">3 new this week</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Class Average</CardTitle>
                    <BarChart3 className="h-4 w-4 text-primary-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary-700">72%</div>
                    <p className="text-xs text-muted-foreground">+3% from last assessment</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <motion.div variants={itemVariants} className="lg:col-span-4">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Student Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <StudentPerformanceChart />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-3">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Upcoming Classes</CardTitle>
                    <CardDescription>Your schedule for the next few days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UpcomingClassesCard />
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Class Attendance</CardTitle>
                    <CardDescription>Recent attendance statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ClassAttendanceCard />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-4">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                    <CardDescription>Latest communications from students and staff</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MessagingCard />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Attendance Management</CardTitle>
                <CardDescription>Mark and track student attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[450px] items-center justify-center rounded-md border border-dashed p-8">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <CheckSquare className="h-16 w-16 text-primary-500" />
                    <h3 className="text-lg font-medium">Attendance Tracker</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      The attendance management system would appear here, allowing you to mark attendance for each class
                      and view attendance reports.
                    </p>
                    <Button className="bg-primary-500 hover:bg-primary-600">Mark Attendance</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Study Materials</CardTitle>
                <CardDescription>Upload and manage course materials</CardDescription>
              </CardHeader>
              <CardContent>
                <MaterialsUploadCard />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Student Performance</CardTitle>
                <CardDescription>Track and analyze student progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[450px] items-center justify-center rounded-md border border-dashed p-8">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <BarChart3 className="h-16 w-16 text-primary-500" />
                    <h3 className="text-lg font-medium">Performance Analytics</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Detailed student performance analytics would appear here, allowing you to track progress and
                      identify areas for improvement.
                    </p>
                    <Button className="bg-primary-500 hover:bg-primary-600">Generate Reports</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messaging" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Messaging System</CardTitle>
                <CardDescription>Communicate with students and staff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[450px] items-center justify-center rounded-md border border-dashed p-8">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <MessageSquare className="h-16 w-16 text-primary-500" />
                    <h3 className="text-lg font-medium">Messaging Center</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      The messaging system would appear here, allowing you to send and receive messages from students,
                      parents, and other staff members.
                    </p>
                    <Button className="bg-primary-500 hover:bg-primary-600">Open Messaging</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </TeacherDashboardLayout>
  )
}
