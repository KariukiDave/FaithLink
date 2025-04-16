"use client"

import { Heart, Users, MessageSquare, Calendar, BarChart3, Clock, Shield, Zap, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"

export default function BenefitsPage() {
  const benefits = [
    {
      title: "Unified Member Management",
      description:
        "Centralize all member data in one secure place, eliminating silos and making it easy to track spiritual journeys.",
      icon: Users,
      color: "bg-faith-100 text-faith-600",
    },
    {
      title: "Connected Discipleship",
      description:
        "Track spiritual growth, provide resources, and facilitate meaningful connections between members and leaders.",
      icon: Heart,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Streamlined Communication",
      description:
        "Reach your congregation where they are with multi-channel messaging that ensures everyone stays informed.",
      icon: MessageSquare,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Simplified Event Management",
      description: "Organize, promote, and track attendance for all church activities with intuitive calendar tools.",
      icon: Calendar,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Data-Driven Ministry",
      description:
        "Make informed decisions with visual analytics that help you understand attendance, engagement, and growth trends.",
      icon: BarChart3,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Time Savings",
      description:
        "Automate routine tasks and simplify administrative processes, giving your team more time to focus on ministry.",
      icon: Clock,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Mobile Access Anywhere",
      description:
        "Empower your team and congregation with mobile tools that keep everyone connected on any device, anywhere.",
      icon: Zap,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Rest easy knowing your church data is protected with top-level security practices and regular backups.",
      icon: Shield,
      color: "bg-gray-100 text-gray-600",
    },
    {
      title: "Continuous Innovation",
      description:
        "Benefit from regular updates and new features designed specifically for the evolving needs of modern churches.",
      icon: Lightbulb,
      color: "bg-amber-100 text-amber-600",
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
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Benefits</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Ministry with FaithLink
              </h1>
              <p className="text-xl text-gray-600">
                Discover how our church management platform can help you build a stronger, more connected community.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits for Your Church</h2>
              <p className="text-xl text-gray-600">
                FaithLink provides practical tools and solutions that make a real difference in your ministry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className={`h-16 w-16 rounded-lg ${benefit.color} flex items-center justify-center mb-6`}>
                      <benefit.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Impact, Real Churches</h2>
              <p className="text-xl text-gray-600">
                See how churches like yours are experiencing tangible benefits with FaithLink.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Badge className="bg-green-100 text-green-600 hover:bg-green-100 px-3 py-1">Growth</Badge>
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "Since implementing FaithLink, we've seen a 35% increase in small group participation and 28% growth
                    in overall attendance. The data insights help us understand what's working and where to focus."
                  </p>
                  <div className="font-medium">Pastor Michael Williams</div>
                  <div className="text-sm text-gray-500">New Life Church, Atlanta</div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 px-3 py-1">Engagement</Badge>
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "Our communication is so much more effective now. We can reach members through their preferred
                    channels, and our open rates have increased by 42%. Members tell us they feel more connected than
                    ever."
                  </p>
                  <div className="font-medium">Sarah Thompson</div>
                  <div className="text-sm text-gray-500">Communications Director, Grace Fellowship</div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100 px-3 py-1">Efficiency</Badge>
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "FaithLink has saved our staff approximately 25 hours per week in administrative tasks. That's time
                    we now invest directly in ministry and discipleship instead of spreadsheets and manual processes."
                  </p>
                  <div className="font-medium">David Chen</div>
                  <div className="text-sm text-gray-500">Executive Pastor, Harbor Light Church</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Experience These Benefits?"
          subtitle="Join thousands of churches that are growing their ministries with our all-in-one platform."
        />
      </main>

      <Footer />
    </div>
  )
}
