import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | Reamanujan Academy",
  description: "Learn about our mission, vision, and the story behind Reamanujan Academy",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 bg-primary-50">
        <div className="container-wrapper">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-700">About Us</div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary-700">Our Story</h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
              Discover the journey, mission, and values that drive Reamanujan Academy
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 bg-white">
        <div className="container-wrapper">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary-700">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Reamanujan Academy, our mission is to provide quality education that empowers students to achieve
                their academic goals and build a strong foundation for their future. We strive to create a nurturing
                environment where students can develop their intellectual capabilities, critical thinking skills, and
                personal growth through dedicated mentorship and comprehensive academic programs.
              </p>
              <p className="text-gray-600">
                We believe in fostering a love for learning and excellence in every student, inspiring them to reach
                their full potential and make meaningful contributions to society.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students in classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary-700">Our History</h2>
            <p className="max-w-[700px] text-gray-600">
              The journey of Reamanujan Academy from its humble beginnings to becoming a premier educational institution
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xl font-bold rounded-full w-12 h-12 items-center justify-center">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Foundation</h3>
                <p className="text-gray-600">
                  Reamanujan Academy was founded in 2005 by a group of dedicated educators with a vision to transform
                  education in the region. Named after the mathematical genius Srinivasa Ramanujan, the academy started
                  with just 50 students and 5 teachers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xl font-bold rounded-full w-12 h-12 items-center justify-center">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Growth</h3>
                <p className="text-gray-600">
                  Over the years, the academy expanded its programs and facilities to accommodate the growing number of
                  students. By 2010, we had established a reputation for academic excellence, particularly in
                  mathematics and science education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xl font-bold rounded-full w-12 h-12 items-center justify-center">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Present Day</h3>
                <p className="text-gray-600">
                  Today, Reamanujan Academy stands as a premier educational institution with state-of-the-art
                  facilities, a team of expert faculty members, and a comprehensive curriculum that prepares students
                  for academic success and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-16 bg-white">
        <div className="container-wrapper">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary-700">Our Core Values</h2>
            <p className="max-w-[700px] text-gray-600">
              The principles that guide our approach to education and shape our institutional culture
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in all aspects of education, from teaching methods to student support services.",
              },
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of honesty, ethics, and transparency in all our interactions.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovative teaching methods and technologies to enhance the learning experience.",
              },
              {
                title: "Inclusivity",
                description:
                  "We create an inclusive environment where diversity is celebrated and every student feels valued.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary-700">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary-700">Leadership Team</h2>
            <p className="max-w-[700px] text-gray-600">Meet the dedicated professionals who lead Reamanujan Academy</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Dr. Amit Sharma",
                position: "Principal",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Dr. Sharma has over 20 years of experience in education and holds a Ph.D. in Educational Leadership.",
              },
              {
                name: "Prof. Meena Gupta",
                position: "Academic Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Prof. Gupta oversees the academic programs and curriculum development at Reamanujan Academy.",
              },
              {
                name: "Mr. Rajiv Patel",
                position: "Administrative Head",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Mr. Patel manages the administrative operations and ensures smooth functioning of the academy.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary-600 mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
