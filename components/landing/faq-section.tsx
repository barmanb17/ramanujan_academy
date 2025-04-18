"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
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

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "Admission requirements vary by program. Generally, we require academic records, entrance test scores, and a personal interview. Please visit our Admissions page for detailed requirements for each course.",
    },
    {
      question: "Do you offer scholarships?",
      answer:
        "Yes, we offer merit-based scholarships to deserving students. Scholarships are awarded based on academic performance, entrance test scores, and financial need. Contact our admissions office for more information.",
    },
    {
      question: "What is the teacher-to-student ratio?",
      answer:
        "We maintain a low teacher-to-student ratio of 1:20 to ensure personalized attention and quality education for each student.",
    },
    {
      question: "Do you provide hostel facilities?",
      answer:
        "Yes, we have separate hostel facilities for boys and girls with modern amenities, 24/7 security, and a comfortable living environment.",
    },
    {
      question: "How do you prepare students for competitive exams?",
      answer:
        "Our competitive exam preparation includes specialized coaching, regular mock tests, personalized feedback, doubt-clearing sessions, and comprehensive study materials designed by experts.",
    },
  ]

  return (
    <section id="faq" className="section-padding bg-white">
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
            Have Questions?
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Find answers to common questions about our academy and programs
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants} custom={index}>
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium hover:text-primary-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center">
            <Button asChild className="bg-primary-500 hover:bg-primary-600">
              <Link href="/contact">
                Still Have Questions? Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
