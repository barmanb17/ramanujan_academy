import type { Metadata } from "next"
import HeroSection from "@/components/landing/hero-section"
import AboutSection from "@/components/landing/about-section"
import CoursesSection from "@/components/landing/courses-section"
import WhyUsSection from "@/components/landing/why-us-section"
import FacultySection from "@/components/landing/faculty-section"
import TestimonialSection from "@/components/landing/testimonial-section"
import EventsSection from "@/components/landing/events-section"
import AdmissionProcess from "@/components/landing/admission-process"
import GalleryPreview from "@/components/landing/gallery-preview"
import FaqSection from "@/components/landing/faq-section"
import CtaSection from "@/components/landing/cta-section"
import ContactSection from "@/components/landing/contact-section"

export const metadata: Metadata = {
  title: "Reamanujan Academy - Excellence in Education",
  description: "Empowering students to achieve academic excellence through quality education and personalized guidance",
  keywords: "education, academy, coaching, JEE, NEET, board exams, Barpeta Road, Assam",
  openGraph: {
    title: "Reamanujan Academy - Excellence in Education",
    description:
      "Empowering students to achieve academic excellence through quality education and personalized guidance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reamanujan Academy",
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Why Choose Us Section */}
      <WhyUsSection />

      {/* Faculty Section */}
      <FacultySection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Events & News Section */}
      <EventsSection />

      {/* Admission Process Section */}
      <AdmissionProcess />

      {/* Gallery Preview Section */}
      <GalleryPreview />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
