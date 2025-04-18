"use client"

import { useRef } from "react"
import { Users, Award, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function WhyUsSection() {
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

  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced teachers with proven track records in their respective fields",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Consistent record of top-performing students in board exams and competitive tests",
    },
    {
      icon: Clock,
      title: "Personal Mentorship",
      description: "Individual attention and guidance to help students achieve their academic goals",
    },
  ]

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-wrapper" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-secondary-100 px-3 py-1 text-sm text-secondary-700"
          >
            Our Advantages
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            What makes Reamanujan Academy the preferred choice for students
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants} custom={index}>
              <Card className="h-full card-hover border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <feature.icon className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
