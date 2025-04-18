"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EventsSection() {
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

  const events = [
    {
      id: 1,
      title: "Annual Science Exhibition",
      date: "May 15, 2023",
      location: "Main Campus Auditorium",
      image: "/n1.jpg",
      description: "Showcasing innovative projects from our students across various disciplines.",
      category: "Exhibition",
    },
    {
      id: 2,
      title: "JEE/NEET Orientation Program",
      date: "June 5, 2023",
      location: "Conference Hall",
      image: "/n3.png",
      description: "Information session for students preparing for competitive entrance examinations.",
      category: "Orientation",
    },
    {
      id: 3,
      title: "Mathematics Olympiad",
      date: "July 10, 2023",
      location: "Main Campus",
      image: "/n2.jpg",
      description: "Annual mathematics competition to discover and encourage talented students.",
      category: "Competition",
    },
  ]

  return (
    <section id="events" className="section-padding bg-gray-50">
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
            Latest Updates
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Events & News
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Stay updated with our latest events, achievements, and academic activities
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {events.map((event, index) => (
            <motion.div key={event.id} variants={itemVariants} custom={index}>
              <Card className="h-full overflow-hidden border-none shadow-md card-hover">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary-500 text-black hover:bg-secondary-600">{event.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 h-4 w-4 text-primary-500" />
                    {event.date}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <MapPin className="mr-2 h-4 w-4 text-primary-500" />
                    {event.location}
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full border-primary-500 text-primary-500 hover:bg-primary-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex justify-center">
          <Button asChild className="bg-primary-500 hover:bg-primary-600">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
