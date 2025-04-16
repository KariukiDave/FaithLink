"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"
import { BackToTop } from "@/components/shared/back-to-top"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "David Wilson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former church tech director with 15 years of software development experience.",
    },
    {
      name: "Sarah Thompson",
      role: "Chief Product Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Pastor's daughter and UX specialist focused on creating intuitive church software.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Tech leader with a passion for leveraging technology to advance ministry.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Customer Success",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former church administrator who understands the unique needs of ministry teams.",
    },
  ]

  const values = [
    {
      title: "Ministry First",
      description: "We build technology that serves ministry, not the other way around.",
    },
    {
      title: "Excellence",
      description: "We pursue excellence in all we do, creating tools worthy of the Church.",
    },
    {
      title: "Empowerment",
      description: "We empower church leaders to focus on what matters most: people and ministry.",
    },
    {
      title: "Innovation",
      description: "We continuously innovate to meet the evolving needs of today's churches.",
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and ethical business practices.",
    },
    {
      title: "Community",
      description: "We foster community among churches and learn from their collective wisdom.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Story Behind FaithLink</h1>
              <p className="text-xl text-gray-600">
                We're building software that empowers churches to focus on what matters most: people and ministry.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="FaithLink Team"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
              <div className="space-y-6">
                <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1">Our Story</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Born from a Real Need</h2>
                <p className="text-lg text-gray-600">
                  FaithLink was born in 2021 through a partnership between Medici Tech, a software development company,
                  and Membley Baptist Church. After struggling with fragmented and outdated church management tools, the
                  leadership at Membley approached Medici Tech with a challenge: create a comprehensive, intuitive
                  system specifically designed for the unique needs of churches.
                </p>
                <p className="text-lg text-gray-600">
                  What began as a custom solution for one church quickly evolved as other ministries expressed interest.
                  We realized that churches everywhere were facing the same challenges—and deserved better tools.
                </p>
                <p className="text-lg text-gray-600">
                  Today, FaithLink serves hundreds of churches of all sizes across multiple denominations, while
                  maintaining our core commitment: creating technology that empowers ministry rather than complicating
                  it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20 bg-faith-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-xl text-faith-100">
                  To equip churches with intuitive technology that enhances ministry impact, fosters community
                  connection, and reduces administrative burden.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-xl text-faith-100">
                  We envision a world where every church has access to powerful, affordable technology that amplifies
                  their unique mission and helps them reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Our Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
              <p className="text-xl text-gray-600">
                These core values guide every decision we make and every feature we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
              <p className="text-xl text-gray-600">
                Passionate individuals united by a common mission to serve the Church.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-faith-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Churches */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Our Partners</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Churches We Serve</h2>
              <p className="text-xl text-gray-600">
                We're proud to partner with churches of all sizes and denominations across the world.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=160"
                    alt={`Partner Church ${index + 1}`}
                    width={160}
                    height={100}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Want to Learn More About FaithLink?"
          subtitle="Get in touch with our team to learn how we can help your church grow and thrive."
          primaryButtonText="Book a Demo"
          primaryButtonLink="/book-demo"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
