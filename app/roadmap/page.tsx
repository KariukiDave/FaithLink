"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      features: [
        {
          name: "WhatsApp Integration",
          description: "Connect with your congregation through WhatsApp Business API integration.",
          status: "in-progress",
        },
        {
          name: "Enhanced Check-in System",
          description: "Upgraded check-in experience with QR codes and simplified family check-in.",
          status: "in-progress",
        },
        {
          name: "Discipleship Pathways",
          description: "Visual journey mapping for discipleship growth and milestone tracking.",
          status: "planned",
        },
      ],
    },
    {
      quarter: "Q2 2025",
      features: [
        {
          name: "Mobile App Refresh",
          description: "Complete redesign of our mobile apps with improved performance and new features.",
          status: "planned",
        },
        {
          name: "Volunteer Management Suite",
          description: "Comprehensive tools for scheduling, training, and managing church volunteers.",
          status: "planned",
        },
        {
          name: "Community Prayer Wall",
          description: "Interactive prayer request and answer tracking system with privacy controls.",
          status: "planned",
        },
      ],
    },
    {
      quarter: "Q3 2025",
      features: [
        {
          name: "Giving & Donation Management",
          description: "Integrated online giving platform with reporting and donor management.",
          status: "planned",
        },
        {
          name: "Church Analytics Dashboard",
          description: "Advanced analytics with predictive insights and custom reporting.",
          status: "planned",
        },
        {
          name: "Resource Library",
          description: "Centralized storage for sermons, studies, and ministry resources.",
          status: "planned",
        },
      ],
    },
    {
      quarter: "Q4 2025",
      features: [
        {
          name: "Multi-language Support",
          description: "Full platform translation into Spanish, French, Portuguese, and more.",
          status: "planned",
        },
        {
          name: "AI-Powered Ministry Insights",
          description: "Intelligent recommendations for ministry focus and community engagement.",
          status: "planned",
        },
        {
          name: "Advanced API & Webhooks",
          description: "Expanded integration capabilities for third-party services.",
          status: "planned",
        },
      ],
    },
    {
      quarter: "Recently Released",
      features: [
        {
          name: "Google Calendar Integration",
          description: "Two-way sync between FaithLink events and Google Calendar.",
          status: "released",
          releaseDate: "March 2025",
        },
        {
          name: "Group Messaging Improvements",
          description: "Enhanced group messaging with read receipts and attachment support.",
          status: "released",
          releaseDate: "February 2025",
        },
        {
          name: "Member Directory Enhancements",
          description: "Advanced search, filtering, and custom fields for member profiles.",
          status: "released",
          releaseDate: "January 2025",
        },
      ],
    },
  ]

  const statusColors = {
    "in-progress": "bg-blue-100 text-blue-700",
    planned: "bg-amber-100 text-amber-700",
    released: "bg-green-100 text-green-700",
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Roadmap</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What's Coming to FaithLink</h1>
              <p className="text-xl text-gray-600">
                Explore our product roadmap to see how we're continuously improving FaithLink to better serve your
                ministry needs.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {roadmapItems.map((quarter, index) => (
                <div key={index} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">{quarter.quarter}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {quarter.features.map((feature, featureIndex) => (
                      <Card key={featureIndex} className="border-none shadow-lg">
                        <CardContent className="p-6">
                          <Badge
                            className={`mb-4 ${
                              statusColors[feature.status as keyof typeof statusColors]
                            } hover:${statusColors[feature.status as keyof typeof statusColors]}`}
                          >
                            {feature.status === "in-progress"
                              ? "In Progress"
                              : feature.status === "planned"
                                ? "Planned"
                                : "Released"}
                          </Badge>
                          <h3 className="text-lg font-bold mb-2">{feature.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                          {feature.status === "released" && feature.releaseDate && (
                            <p className="text-xs text-gray-500">Released: {feature.releaseDate}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-bold mb-2">Have a feature request?</h3>
                <p className="text-gray-600 mb-4">
                  We love hearing from our customers! If you have an idea for a feature that would help your ministry,
                  let us know.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-faith-600 hover:bg-faith-700"
                >
                  Submit Feature Request
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Join the Journey?"
          subtitle="Start using FaithLink today and grow with us as we continue to enhance our platform."
        />
      </main>

      <Footer />
    </div>
  )
}
