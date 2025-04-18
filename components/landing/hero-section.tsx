"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
      style={{ backgroundImage: "url('/h11.jpg')" }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/10" />

      <div className="container relative mt-16 z-10 mx-auto flex h-full gap-6 flex-col items-center justify-center px-4 text-center text-[400px]  text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Welcome to <span className="text-gradient">Ramanujan Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 max-w-2xl text-lg sm:text-xl"
          >
            Empowering students to achieve academic excellence through quality education and personalized guidance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700"
              asChild
            >
              <Link href="/courses">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/admission" className="bg-primary-600 hover:bg-primary-700">
              Join Now
              <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

      {/* Animated background bubbles (optional visual) */}
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
