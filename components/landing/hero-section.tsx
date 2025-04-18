"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section
      className="w-full py-20 md:py-28 lg:py-36 xl:py-40 relative h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/h1.jpg')" }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0  z-0 bg-black/20" />

      <div className="container-wrapper relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-2 mt-10 gap-5">
            <h1 className="text-4xl font-bold mb-10 tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl/none">
              Welcome to <span className="text-gradient">Ramanujan Academy</span>
            </h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto  max-w-[700px] text-gray-200 md:text-xl"
            >
              Empowering students to achieve academic excellence through quality education and personalized guidance
            </motion.p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600">
              <Link href="/courses">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-500 text-primary-500 hover:bg-primary-50"
            >
              <Link href="/admission">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background bubbles */}
      {/* {mounted && (
        <div className="absolute inset-0 z-0 bg-grid">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "absolute rounded-full",
                    i % 3 === 0
                      ? "bg-primary-100"
                      : i % 3 === 1
                      ? "bg-secondary-100"
                      : "bg-primary-50",
                  )}
                  style={{
                    width: `${Math.random() * 200 + 50}px`,
                    height: `${Math.random() * 200 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.4,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.5, 0.4],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </section>
  )
}
