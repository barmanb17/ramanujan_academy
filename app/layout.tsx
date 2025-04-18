import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Reamanujan Academy",
    default: "Reamanujan Academy - Excellence in Education",
  },
  description: "Empowering students to achieve academic excellence through quality education and personalized guidance",
  keywords: "education, academy, coaching, JEE, NEET, board exams, Barpeta Road, Assam",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Reamanujan Academy - Excellence in Education" />
        <meta
          property="og:description"
          content="Empowering students to achieve academic excellence through quality education and personalized guidance"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://reamanujanacademy.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Reamanujan Academy",
              url: "https://reamanujanacademy.com",
              logo: "https://reamanujanacademy.com/logo.png",
              description:
                "Empowering students to achieve academic excellence through quality education and personalized guidance",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Road",
                addressLocality: "Barpeta Road",
                addressRegion: "Assam",
                postalCode: "781315",
                addressCountry: "IN",
              },
              telephone: "+919876543210",
              email: "info@reamanujanacademy.com",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'