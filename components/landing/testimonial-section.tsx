"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  content: string
  achievement?: string
}

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "JEE Advanced 2023",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The faculty at Reamanujan Academy provided exceptional guidance that helped me crack JEE Advanced with a top rank. Their personalized approach to teaching complex concepts made all the difference.",
      achievement: "AIR 342",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "NEET 2023",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "I joined Reamanujan Academy for NEET preparation, and it was the best decision. The structured curriculum and regular mock tests prepared me thoroughly for the actual exam.",
      achievement: "AIR 512",
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "12th Board Topper",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The teachers at Reamanujan Academy are not just educators but mentors who guided me throughout my board exam preparation. Their support helped me secure 98% in my 12th boards.",
      achievement: "98% in CBSE",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

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
    <section id="testimonials" className="section-padding overflow-hidden bg-white">
      <div className="container-wrapper max-w-7xl overflow-hidden" ref={ref}>
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
            Success Stories
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Student Testimonials
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Hear from our students who achieved their academic goals with us
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <Quote className="h-12 w-12 text-primary-500" />
                      </div>
                      <blockquote className="mb-6 text-center text-lg text-gray-700">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4 text-center">
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                          {testimonial.achievement && (
                            <p className="mt-1 text-sm font-medium text-primary-600">{testimonial.achievement}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${currentTestimonial === index ? "bg-primary-500" : "bg-gray-300"}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
