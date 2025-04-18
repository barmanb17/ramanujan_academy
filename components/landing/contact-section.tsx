"use client"

import type React from "react"

import { useState, useRef } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in production
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    // Show success message (in a real app)
  }

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
    <section id="contact" className="section-padding bg-white">
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
            Get In Touch
          </motion.div>
          <motion.h2 variants={itemVariants} className="heading-primary">
            Contact Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Have questions? Reach out to us and we'll get back to you soon
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden border-none shadow-lg h-full">
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="mt-2 text-gray-600">Feel free to reach out to us through any of these channels</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary-500" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Reamanujan Academy, Main Road, Barpeta Road, Assam, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary-500" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="mt-1 text-sm text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-600">+91 98765 43211</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary-500" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="mt-1 text-sm text-gray-600">info@reamanujanacademy.com</p>
                      <p className="text-sm text-gray-600">admissions@reamanujanacademy.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      title="Reamanujan Academy Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5383389323!2d90.9701!3d26.1501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzAwLjQiTiA5MMKwNTgnMTIuNCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden border-none shadow-lg h-full">
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-bold">Send us a Message</h3>
                  <p className="mt-2 text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-600">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
