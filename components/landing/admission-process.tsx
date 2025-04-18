"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, FileText, Users, CheckCircle, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AdmissionProcess() {
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

  const steps = [
    {
      id: 1,
      title: "Application Submission",
      description: "Fill out the online application form with personal and academic details",
      icon: FileText,
      color: "bg-primary-100 text-primary-700",
    },
    {
      id: 2,
      title: "Entrance Test",
      description: "Take our entrance examination to assess your academic aptitude",
      icon: Calendar,
      color: "bg-secondary-100 text-secondary-700",
    },
    {
      id: 3,
      title: "Interview",
      description: "Personal interview with faculty members to understand your goals",
      icon: Users,
      color: "bg-primary-100 text-primary-700",
    },
    {
      id: 4,
      title: "Admission Confirmation",
      description: "Receive your admission letter and complete the enrollment process",
      icon: CheckCircle,
      color: "bg-secondary-100 text-secondary-700",
    },
  ]

  return (
    <section id="admission-process" className="section-padding bg-white">
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
            Join Us
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Admission Process
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Follow these simple steps to begin your journey with Reamanujan Academy
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[15px] top-0 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div key={step.id} variants={itemVariants} custom={index}>
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className="flex md:w-1/2">
                      <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-primary-500 md:mx-auto md:h-10 md:w-10">
                        <span className="font-bold text-primary-500">{step.id}</span>
                      </div>
                      <div className="pt-1 md:hidden">
                        <h3 className="text-lg font-bold">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="ml-12 md:ml-0 md:w-1/2">
                      <div className={`rounded-lg p-4 shadow-md ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                        <div className="hidden md:block">
                          <div className="mb-2 flex items-center">
                            <div className={`mr-3 rounded-full p-2 ${step.color}`}>
                              <step.icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center">
            <Button asChild className="bg-primary-500 hover:bg-primary-600">
              <Link href="/admission">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
