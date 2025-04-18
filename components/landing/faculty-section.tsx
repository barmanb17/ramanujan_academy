"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

type Faculty = {
  id: number
  name: string
  designation: string
  subject: string
  image: string
  social: {
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}

export default function FacultySection() {
  const [hoveredFaculty, setHoveredFaculty] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faculty: Faculty[] = [
    {
      id: 1,
      name: "Khairul Islam",
      designation: "23 years of experience",
      subject: "Principal",
      image: "/f1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Shahruk Islam",
      designation: "4 years of experience",
      subject: "Faculty of Chemistry",
      image: "/f2.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Abhijit Saha",
      designation: "8 years of experience",
      subject: "Faculty of Chemistry",
      image: "/f3.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Anowar Hussain",
      designation: "8 years of experience",
      subject: "Faculty of Physics",
      image: "/f4.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ]

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
    <section id="faculty" className="section-padding bg-gray-50">
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
            Our Team
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Meet Our Faculty
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Experienced educators dedicated to student success
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faculty.map((member, index) => (
            <motion.div key={member.id} variants={itemVariants} custom={index}>
              <Card
                className="overflow-hidden transition-all duration-300 hover:shadow-lg card-hover border-none"
                onMouseEnter={() => setHoveredFaculty(member.id)}
                onMouseLeave={() => setHoveredFaculty(null)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-primary-900/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredFaculty === member.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 text-primary-600 transition-transform hover:scale-110"
                        aria-label={`${member.name}'s Facebook`}
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 text-primary-400 transition-transform hover:scale-110"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 text-primary-700 transition-transform hover:scale-110"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </motion.div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.designation}</p>
                  <p className="text-sm font-medium text-primary-600">{member.subject}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
