"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  BarChart3,
  Video,
  BookOpen,
  ChevronRight,
  Play,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"
import { BackToTop } from "@/components/shared/back-to-top"

// Pricing data
const pricingPlans = {
  monthly: [
    {
      name: "Starter",
      price: 49,
      description: "Perfect for small churches just getting started",
      features: [
        "Up to 200 members",
        "Basic member management",
        "Email communication",
        "Simple event calendar",
        "Mobile app access",
      ],
    },
    {
      name: "Standard",
      price: 99,
      description: "Ideal for growing churches with active ministries",
      popular: true,
      features: [
        "Up to 500 members",
        "Advanced member profiles",
        "Email & SMS communication",
        "WhatsApp integration",
        "Small groups management",
        "Basic reporting & analytics",
      ],
    },
    {
      name: "Premium",
      price: 199,
      description: "For established churches with comprehensive needs",
      features: [
        "Unlimited members",
        "All Standard features",
        "Advanced reporting & analytics",
        "Multi-campus support",
        "API access & custom integrations",
        "Dedicated account manager",
      ],
    },
  ],
  annual: [
    {
      name: "Starter",
      price: 39,
      description: "Perfect for small churches just getting started",
      features: [
        "Up to 200 members",
        "Basic member management",
        "Email communication",
        "Simple event calendar",
        "Mobile app access",
      ],
    },
    {
      name: "Standard",
      price: 79,
      description: "Ideal for growing churches with active ministries",
      popular: true,
      features: [
        "Up to 500 members",
        "Advanced member profiles",
        "Email & SMS communication",
        "WhatsApp integration",
        "Small groups management",
        "Basic reporting & analytics",
      ],
    },
    {
      name: "Premium",
      price: 159,
      description: "For established churches with comprehensive needs",
      features: [
        "Unlimited members",
        "All Standard features",
        "Advanced reporting & analytics",
        "Multi-campus support",
        "API access & custom integrations",
        "Dedicated account manager",
      ],
    },
  ],
}

export default function HomePage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1">
                  Faith-Centered Technology
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Church Management Made Simple & Spirit-Filled
                </h1>
                <p className="text-xl text-gray-600">
                  FaithLink helps you connect, disciple, and grow your church community — all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-faith-600 hover:bg-faith-700 text-white" asChild>
                    <Link href="/book-demo">
                      Book a Demo
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-faith-600 border-faith-600 hover:bg-faith-50">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="FaithLink Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-xl shadow-xl overflow-hidden border-4 border-white hidden md:block">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="FaithLink Mobile App"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-faith-600">10,000+</p>
                <p className="text-gray-600">Members Managed</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-faith-600">500+</p>
                <p className="text-gray-600">Churches</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-faith-600">98%</p>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-faith-600">24/7</p>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Nurture Your Church
              </h2>
              <p className="text-xl text-gray-600">
                FaithLink combines powerful tools with an intuitive interface to help you manage every aspect of your
                ministry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Membership Management</h3>
                  <p className="text-gray-600">
                    Track members, families, ministries, and discipleship journeys with detailed profiles and custom
                    fields.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <UserPlus className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Small Groups</h3>
                  <p className="text-gray-600">
                    Organize and manage groups, track attendance, share resources, and foster meaningful connections.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Powerful Communication</h3>
                  <p className="text-gray-600">
                    Send targeted messages via email, WhatsApp, and SMS to keep your congregation informed and engaged.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Event & Calendar Tools</h3>
                  <p className="text-gray-600">
                    Schedule events, manage RSVPs, track attendance, and sync with popular calendar platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reports & Insights</h3>
                  <p className="text-gray-600">
                    Access visual dashboards and downloadable analytics to make data-driven ministry decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sermon Integration</h3>
                  <p className="text-gray-600">
                    Seamlessly sync with YouTube and Spotify for easy media access, sharing, and archiving.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow lg:col-start-2">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Devotionals</h3>
                  <p className="text-gray-600">
                    Provide daily readings and notifications to engage members spiritually and foster growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-faith-600 hover:bg-faith-700 text-white" asChild>
                <Link href="/features">
                  See All Features
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* WhatsApp Integration Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="relative z-10 rounded-xl shadow-xl overflow-hidden border-4 border-white">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="WhatsApp Integration"
                      width={400}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-200 rounded-full opacity-30 blur-3xl"></div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1">WhatsApp Integration</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Keep the Connection with WhatsApp</h2>
                <p className="text-xl text-gray-600">
                  FaithLink seamlessly integrates with WhatsApp groups for instant communication, announcements, and
                  attendance reporting.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">Send automated reminders and announcements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">Collect attendance and prayer requests via WhatsApp</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">Create and manage WhatsApp groups directly from FaithLink</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">Share devotionals and sermon notes with your congregation</p>
                  </li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white mt-4" asChild>
                  <Link href="/features#whatsapp">
                    Learn More About WhatsApp Integration
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-faith-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your Ministry with FaithLink
              </h2>
              <p className="text-xl text-gray-600">
                Experience the difference a unified church management system can make for your congregation and team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-faith-100 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Stronger Community Engagement</h3>
                  <p className="text-gray-600">
                    Foster deeper connections within your church through integrated communication tools and personalized
                    interactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-faith-100 flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="h-8 w-8 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Centralized Admin & Member Tools</h3>
                  <p className="text-gray-600">
                    Streamline operations with a single platform for all your administrative needs, saving time and
                    reducing complexity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-faith-100 flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Discipleship Tracking Made Easy</h3>
                  <p className="text-gray-600">
                    Monitor spiritual growth and discipleship journeys with intuitive tools designed for meaningful
                    mentorship.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-faith-100 flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-8 w-8 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Mobile Access for Everyone</h3>
                  <p className="text-gray-600">
                    Empower your congregation with mobile apps that keep them connected to church life anytime,
                    anywhere.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-faith-100 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Modern Tools for Growing Churches</h3>
                  <p className="text-gray-600">
                    Scale your ministry with confidence using technology that grows with you, from small congregations
                    to multi-campus churches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Churches Worldwide</h2>
              <p className="text-xl text-gray-600">
                Hear from church leaders who have transformed their ministries with FaithLink.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Pastor Michael"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Pastor Michael Johnson</h4>
                      <p className="text-sm text-gray-600">Lead Pastor, Grace Community Church</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "FaithLink has revolutionized how we connect with our congregation. The integrated communication
                    tools and member management features have saved our staff countless hours each week."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Sarah Williams"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Sarah Williams</h4>
                      <p className="text-sm text-gray-600">Church Administrator, Harvest Fellowship</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "As a church administrator, I needed a system that could handle everything from attendance to
                    communication. FaithLink does it all, and the support team is always there when we need them."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="David Chen"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">David Chen</h4>
                      <p className="text-sm text-gray-600">Youth Pastor, New Life Church</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The mobile app has been a game-changer for our youth ministry. Our teens love the devotionals and
                    event features, and parents appreciate the transparent communication."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Product Tour</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See FaithLink in Action</h2>
              <p className="text-xl text-gray-600">
                Explore the intuitive interface and powerful features that make church management simple.
              </p>
            </div>

            <Tabs defaultValue="dashboard" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="groups">Groups</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="mobile">Mobile App</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard" className="mt-8">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=1000"
                    alt="Dashboard Screenshot"
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </TabsContent>
              <TabsContent value="members" className="mt-8">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=1000"
                    alt="Members Screenshot"
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </TabsContent>
              <TabsContent value="groups" className="mt-8">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=1000"
                    alt="Groups Screenshot"
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </TabsContent>
              <TabsContent value="events" className="mt-8">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=1000"
                    alt="Events Screenshot"
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </TabsContent>
              <TabsContent value="mobile" className="mt-8">
                <div className="flex justify-center">
                  <div className="rounded-xl overflow-hidden shadow-2xl max-w-xs">
                    <Image
                      src="/placeholder.svg?height=800&width=400"
                      alt="Mobile App Screenshot"
                      width={400}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Pricing</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Plans for Churches of All Sizes
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Choose the plan that fits your ministry needs and budget. All plans include our core features.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8">
                <span
                  className={`mr-3 ${billingPeriod === "monthly" ? "font-semibold text-gray-900" : "text-gray-500"}`}
                >
                  Monthly
                </span>
                <Switch
                  checked={billingPeriod === "annual"}
                  onCheckedChange={(checked) => setBillingPeriod(checked ? "annual" : "monthly")}
                  className="data-[state=checked]:bg-faith-600"
                />
                <span
                  className={`ml-3 ${billingPeriod === "annual" ? "font-semibold text-gray-900" : "text-gray-500"}`}
                >
                  Annual
                  <Badge className="ml-2 bg-green-100 text-green-700 hover:bg-green-100">Save 40%</Badge>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans[billingPeriod].map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`${
                    plan.popular ? "bg-faith-600 text-white" : "bg-white"
                  } border-none shadow-lg hover:shadow-xl transition-shadow relative`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold uppercase py-1 px-3 rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className={`${plan.popular ? "text-faith-100" : "text-gray-600"} mb-6`}>{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className={plan.popular ? "text-faith-100" : "text-gray-600"}>/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check
                            className={`h-5 w-5 ${plan.popular ? "text-white" : "text-faith-600"} mr-2 mt-0.5 flex-shrink-0`}
                          />
                          <span className={plan.popular ? "text-white" : "text-gray-600"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-white text-faith-600 hover:bg-faith-50"
                          : "bg-faith-600 hover:bg-faith-700 text-white"
                      }`}
                      asChild
                    >
                      <Link href="/auth">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Need a custom solution for your church's specific needs?</p>
              <Button variant="outline" className="text-faith-600 border-faith-600 hover:bg-faith-50" asChild>
                <Link href="/book-demo">Contact Our Sales Team</Link>
              </Button>
            </div>

            <div className="text-center mt-8">
              <Button variant="link" className="text-faith-600" asChild>
                <Link href="/pricing">View Full Pricing Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <CTASection
          title="Simplify Church Management with FaithLink"
          subtitle="Join thousands of churches that are growing their ministries with our all-in-one platform."
          primaryButtonText="Start Free Trial"
          primaryButtonLink="/auth"
          secondaryButtonText="Book a Demo"
          secondaryButtonLink="/book-demo"
        />
      </main>

      <Footer />
      <BackToTop />

      {/* Floating CTA Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <Button size="lg" className="rounded-full shadow-lg bg-faith-600 hover:bg-faith-700 text-white" asChild>
          <Link href="/book-demo">Book a Demo</Link>
        </Button>
      </div>
    </div>
  )
}
