"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const images = [
    "/a1.jpg",
    "/a1.jpg",
    "/a1.jpg",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-padding bg-white">
      <div className="container-wrapper">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center" ref={ref}>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700"
            >
              About Us
            </motion.div>
            <motion.h2 variants={itemVariants} className="heading-primary">
              Our Mission & Vision
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 md:text-xl/relaxed">
              Reamanujan Academy was founded with a vision to provide quality education that empowers students to
              achieve their academic goals and build a strong foundation for their future.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600">
              Our mission is to create a nurturing environment where students can develop their intellectual
              capabilities, critical thinking skills, and personal growth through dedicated mentorship and comprehensive
              academic programs.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600">
              Named after the mathematical genius Srinivasa Ramanujan, our academy strives to instill the same passion
              for learning and excellence in our students.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative mx-auto aspect-video overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative h-full w-full overflow-hidden shadow-lg">
              <div className="relative h-full w-full">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out"
                    style={{ opacity: currentSlide === index ? 1 : 0 }}
                  >
                    <Image
                      src={src || "/a1.jpg"}
                      alt={`Campus image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary-500" : "bg-gray-300"}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
