import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full bg-primary-600 text-white">
      <div className="container-wrapper py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10 bg-white rounded-full p-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Reamanujan Academy Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Reamanujan Academy</span>
            </div>
            <p className="text-sm text-gray-200">
              Empowering students to achieve academic excellence through quality education and personalized guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-200 hover:text-secondary-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-secondary-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-secondary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-secondary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Faculty", href: "/faculty" },
                { name: "Admission", href: "/admission" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-200 hover:text-secondary-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-gray-200 hover:text-secondary-500 transition-colors">
                  12th Science
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-200 hover:text-secondary-500 transition-colors">
                  12th Arts
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-200 hover:text-secondary-500 transition-colors">
                  JEE Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-200 hover:text-secondary-500 transition-colors">
                  NEET Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-200 hover:text-secondary-500 transition-colors">
                  Foundation Courses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-secondary-500 shrink-0" />
                <span className="text-gray-200">info@reamanujanacademy.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-secondary-500 shrink-0" />
                <span className="text-gray-200">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-secondary-500 shrink-0" />
                <span className="text-gray-200">Reamanujan Academy, Main Road, Barpeta Road, Assam, India</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild className="bg-secondary-500 text-black hover:bg-secondary-600">
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Reamanujan Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
