"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Admission", href: "/admission" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={cn(
        " fixed top-0 z-50 w-full transition-all duration-300 ",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4",
      )}
    >
      <div className="container-wrapper max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image
                src="/rlogo.jpg"
                alt="Reamanujan Academy Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary-600 hidden lg:block">Ramanujan Academy</span>
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-500 relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary-500 text-primary-500 hover:bg-primary-50"
            >
              <Link href="/login/student">Student Login</Link>
            </Button>
            <Button asChild size="sm" className="bg-primary-500 hover:bg-primary-600">
              <Link href="/login/teacher">Teacher Login</Link>
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-4 bg-white px-4 py-6 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary-500 text-primary-500 hover:bg-primary-50"
              >
                <Link href="/login/student" onClick={() => setIsMenuOpen(false)}>
                  Student Login
                </Link>
              </Button>
              <Button asChild size="sm" className="bg-primary-500 hover:bg-primary-600">
                <Link href="/login/teacher" onClick={() => setIsMenuOpen(false)}>
                  Teacher Login
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
