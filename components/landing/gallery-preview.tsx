"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function GalleryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const images = [
    {
      src: "/a1.jpg",
      alt: "Campus Building",
      category: "Campus",
    },
    {
      src: "/a1.jpg",
      alt: "Science Lab",
      category: "Facilities",
    },
    {
      src: "/a1.jpg",
      alt: "Classroom",
      category: "Academics",
    },
    {
      src: "/a1.jpg",
      alt: "Sports Event",
      category: "Events",
    },
    {
      src: "/a1.jpg",
      alt: "Library",
      category: "Facilities",
    },
    {
      src: "/a1.jpg",
      alt: "Cultural Program",
      category: "Events",
    },
  ]


  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // Mobile
      if (window.innerWidth < 1024) return 2 // Tablet
      return 3 // Desktop
    }
    return 3 // Default for SSR
  }

  const visibleCount = typeof window !== "undefined" ? getVisibleCount() : 3
  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount)

  const nextSlide = () => {
    if (currentIndex < images.length - visibleCount) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(Math.max(0, images.length - visibleCount))
    }
  }

  return (
    <section id="gallery-preview" className="section-padding bg-gray-50 ">
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
            Our Campus
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Gallery
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Take a visual tour of our campus, facilities, and student activities
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 w-full max-w-7xl px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                aria-label="Previous images"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="mx-auto flex w-full gap-4 overflow-hidden px-10">
                {visibleImages.map((image, index) => (
                  <motion.div
                    key={`${image.alt}-${currentIndex + index}`}
                    className="w-full flex-1"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className="group relative aspect-video overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={image.src || "/a1.jpg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="font-medium">{image.alt}</p>
                        <p className="text-sm">{image.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                aria-label="Next images"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center">
            <Button asChild className="bg-primary-500 hover:bg-primary-600">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
