"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, BookOpen, BarChart3 } from "lucide-react"
import StudentDashboardLayout from "@/components/dashboard/student-dashboard-layout"
import AttendanceCard from "@/components/dashboard/student/attendance-card"
import UpcomingClassesCard from "@/components/dashboard/student/upcoming-classes-card"
import PerformanceChart from "@/components/dashboard/student/performance-chart"
import StudyMaterialsCard from "@/components/dashboard/student/study-materials-card"
import NotificationsCard from "@/components/dashboard/student/notifications-card"
import FeePaymentCard from "@/components/dashboard/student/fee-payment-card"

export default function StudentDashboard() {
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
    <StudentDashboardLayout>
      <motion.div className="flex flex-col space-y-6" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-primary-700">Student Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your academic progress and upcoming activities.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:flex">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="materials">Study Materials</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
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
                    <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                    <Clock className="h-4 w-4 text-primary-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary-700">92%</div>
                    <p className="text-xs text-muted-foreground">+2% from last month</p>
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
                    <div className="text-2xl font-bold text-primary-700">3</div>
                    <p className="text-xs text-muted-foreground">Next: Physics (Tomorrow)</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Study Materials</CardTitle>
                    <BookOpen className="h-4 w-4 text-primary-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary-700">24</div>
                    <p className="text-xs text-muted-foreground">5 new this week</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                    <BarChart3 className="h-4 w-4 text-primary-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary-700">78%</div>
                    <p className="text-xs text-muted-foreground">+5% from last assessment</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <motion.div variants={itemVariants} className="lg:col-span-4">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <PerformanceChart />
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
                    <CardTitle>Attendance</CardTitle>
                    <CardDescription>Your attendance for the current month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AttendanceCard />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-4">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Notifications</CardTitle>
                    <CardDescription>Latest updates and announcements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NotificationsCard />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Class Schedule</CardTitle>
                <CardDescription>Your weekly timetable and upcoming events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[450px] items-center justify-center rounded-md border border-dashed p-8">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Calendar className="h-16 w-16 text-primary-500" />
                    <h3 className="text-lg font-medium">Weekly Schedule</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Your detailed weekly schedule would appear here, showing all classes, labs, and study sessions.
                    </p>
                    <Button className="bg-primary-500 hover:bg-primary-600">View Full Schedule</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Study Materials</CardTitle>
                <CardDescription>Access and download your course materials</CardDescription>
              </CardHeader>
              <CardContent>
                <StudyMaterialsCard />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>Track your progress across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[450px] items-center justify-center rounded-md border border-dashed p-8">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <BarChart3 className="h-16 w-16 text-primary-500" />
                    <h3 className="text-lg font-medium">Performance Analytics</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Detailed performance analytics across all subjects would appear here, showing your progress over
                      time.
                    </p>
                    <Button className="bg-primary-500 hover:bg-primary-600">View Detailed Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fees" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Fee Payment</CardTitle>
                <CardDescription>Manage your fee payments and view history</CardDescription>
              </CardHeader>
              <CardContent>
                <FeePaymentCard />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </StudentDashboardLayout>
  )
}
