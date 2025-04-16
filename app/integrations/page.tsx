"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "YouTube",
      description: "Seamlessly embed and share sermon videos directly within FaithLink.",
      benefits: [
        "Import and organize sermon recordings automatically",
        "Share videos directly to member profiles and groups",
        "Track engagement metrics for your content",
      ],
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
    },
    {
      name: "Spotify",
      description: "Connect your church's podcast and worship playlists with your community.",
      benefits: [
        "Share sermon podcasts and worship playlists",
        "Automatically update content when new episodes release",
        "Create curated playlists for small groups and Bible studies",
      ],
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
    },
    {
      name: "YouVersion Bible API",
      description: "Incorporate scripture readings and Bible study tools directly into FaithLink.",
      benefits: [
        "Add scripture references that display on hover",
        "Create reading plans for discipleship journeys",
        "Integrate with group study materials",
      ],
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
    },
    {
      name: "Twilio SMS",
      description: "Send text messages and reminders to your congregation.",
      benefits: [
        "Send mass text notifications and announcements",
        "Create automated event reminders",
        "Enable two-way text communication",
      ],
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
    },
    {
      name: "WhatsApp Business API",
      description: "Connect with your congregation through WhatsApp messaging.",
      benefits: [
        "Send messages to individuals and groups",
        "Share announcements, devotionals, and prayer requests",
        "Reach international members with global messaging",
      ],
      logo: "/placeholder.svg?height=80&width=80",
      status: "coming-soon",
    },
    {
      name: "Google Calendar",
      description: "Sync your church events with Google Calendar for seamless scheduling.",
      benefits: [
        "Two-way sync between FaithLink and Google Calendar",
        "Send calendar invites directly from FaithLink events",
        "Allow members to add events to their personal calendars",
      ],
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
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
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Integrations</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connect FaithLink with Your Favorite Tools
              </h1>
              <p className="text-xl text-gray-600">
                Extend the power of your church management system with these seamless integrations.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Image
                        src={integration.logo || "/placeholder.svg"}
                        alt={`${integration.name} Logo`}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      {integration.status === "coming-soon" ? (
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Coming Soon</Badge>
                      ) : (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Available Now</Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{integration.name}</h3>
                    <p className="text-gray-600 mb-4">{integration.description}</p>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {integration.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1">Developer API</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Build Custom Integrations</h2>
                <p className="text-xl text-gray-600">
                  Need something specific? Our robust API allows developers to create custom integrations for your
                  unique ministry needs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-faith-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-600">RESTful API with comprehensive documentation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-faith-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-600">Secure OAuth 2.0 authentication</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-faith-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-600">Webhook support for real-time updates</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-faith-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-600">Developer support from our engineering team</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="API Documentation"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Connect Your Ministry Tools?"
          subtitle="Experience the power of integrated church management with FaithLink."
        />
      </main>

      <Footer />
    </div>
  )
}
