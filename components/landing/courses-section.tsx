"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container-wrapper" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700"
          >
            Our Programs
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Courses Offered
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Comprehensive programs designed to help students excel in their academic journey
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Tabs defaultValue="board" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="board">12th Board</TabsTrigger>
              <TabsTrigger value="competitive">Competitive Exams</TabsTrigger>
            </TabsList>
            <TabsContent value="board" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={itemVariants}>
                  <Card className="h-full card-hover border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary-100 p-3">
                          <BookOpen className="h-6 w-6 text-primary-700" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Science Stream</h3>
                          <p className="text-sm text-gray-500">Physics, Chemistry, Mathematics, Biology</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary-500" />
                          <span className="text-sm">Regular classes with expert faculty</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary-500" />
                          <span className="text-sm">Weekly tests and assessments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary-500" />
                          <span className="text-sm">Practical lab sessions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Card className="h-full card-hover border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary-100 p-3">
                          <BookOpen className="h-6 w-6 text-primary-700" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Arts Stream</h3>
                          <p className="text-sm text-gray-500">History, Geography, Political Science, Economics</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary-500" />
                          <span className="text-sm">Comprehensive study materials</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary-500" />
                          <span className="text-sm">Essay writing and critical thinking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary-500" />
                          <span className="text-sm">Current affairs discussions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
            <TabsContent value="competitive" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full card-hover border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary-100 p-3">
                        <GraduationCap className="h-6 w-6 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">JEE Preparation</h3>
                        <p className="text-sm text-gray-500">Engineering Entrance Exam</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary-500" />
                        <span className="text-sm">Specialized coaching for JEE Main & Advanced</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary-500" />
                        <span className="text-sm">Mock tests and previous year papers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary-500" />
                        <span className="text-sm">Problem-solving techniques</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="h-full card-hover border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary-100 p-3">
                        <GraduationCap className="h-6 w-6 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">NEET Preparation</h3>
                        <p className="text-sm text-gray-500">Medical Entrance Exam</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary-500" />
                        <span className="text-sm">Comprehensive Biology, Physics & Chemistry</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary-500" />
                        <span className="text-sm">Regular NEET pattern tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary-500" />
                        <span className="text-sm">Doubt clearing sessions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <Button asChild className="bg-primary-500 hover:bg-primary-600">
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
