"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  BarChart3,
  Video,
  BookOpen,
  ChevronRight,
  Check,
  Smartphone,
  Database,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Features</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All-in-One Tools for Your Church</h1>
              <p className="text-xl text-gray-600">
                FaithLink brings everything you need under one platform—built for growth, community, and discipleship.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Management */}
        <section id="membership" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-lg bg-faith-100 flex items-center justify-center">
                  <Users className="h-8 w-8 text-faith-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Membership Management</h2>
                <p className="text-xl text-gray-600">
                  Build a complete picture of your church community with powerful member profiles and family
                  connections.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Detailed member profiles with custom fields and notes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Family connections and household management</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Attendance tracking and participation history</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Spiritual growth and discipleship journey tracking</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Membership Management"
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

        {/* Small Groups & Attendance */}
        <section id="groups" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Small Groups & Attendance"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="h-16 w-16 rounded-lg bg-faith-100 flex items-center justify-center">
                  <UserPlus className="h-8 w-8 text-faith-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Small Groups & Attendance</h2>
                <p className="text-xl text-gray-600">
                  Create, manage, and grow your small groups with powerful tools designed for community building.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Easy group creation and member assignment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Attendance tracking with mobile check-in</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Resource sharing and discussion forums</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Group leader tools and reporting</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Messaging & WhatsApp Integration */}
        <section id="whatsapp" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-lg bg-green-100 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Messaging & WhatsApp Integration</h2>
                <p className="text-xl text-gray-600">
                  Reach your congregation where they are with multi-channel communication tools.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">Email, SMS, and in-app messaging</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">WhatsApp Business API integration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">Automated reminders and announcements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">Message templates and scheduling</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
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
          </div>
        </section>

        {/* Media Integration */}
        <section id="media" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Media Integration"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="h-16 w-16 rounded-lg bg-faith-100 flex items-center justify-center">
                  <Video className="h-8 w-8 text-faith-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Media Integration</h2>
                <p className="text-xl text-gray-600">
                  Connect your sermons, podcasts, and media content directly to your church platform.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">YouTube channel integration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Spotify podcast embedding</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Sermon archives with search functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Notes and resource sharing</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Devotionals & Discipleship */}
        <section id="devotionals" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-lg bg-faith-100 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-faith-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Devotionals & Discipleship Tools</h2>
                <p className="text-xl text-gray-600">
                  Foster spiritual growth with daily devotionals and discipleship tracking.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Daily devotional content with notifications</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Reading plans and progress tracking</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Prayer request management</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Discipleship journey milestones</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt="Devotionals & Discipleship"
                    width={400}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar & Events */}
        <section id="calendar" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Calendar & Events"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="h-16 w-16 rounded-lg bg-faith-100 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-faith-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Calendar & Event Tools</h2>
                <p className="text-xl text-gray-600">
                  Streamline event planning, RSVPs, and attendance tracking for all church activities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Comprehensive event management</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">RSVP and registration handling</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Calendar syncing with Google and Apple</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Automated reminders and follow-ups</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting & Analytics */}
        <section id="reporting" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-lg bg-faith-100 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-faith-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Reporting & Analytics</h2>
                <p className="text-xl text-gray-600">
                  Gain insights into your church's growth and engagement with powerful analytics.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Attendance and growth trends</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Ministry engagement metrics</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Customizable dashboards and reports</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Data export and integration options</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Reporting & Analytics"
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

        {/* Mobile App Experience */}
        <section id="mobile" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=400"
                    alt="Mobile App Experience"
                    width={400}
                    height={800}
                    className="w-full h-auto mx-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="h-16 w-16 rounded-lg bg-faith-100 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-faith-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mobile App Experience</h2>
                <p className="text-xl text-gray-600">
                  Empower your congregation with a beautiful, intuitive mobile experience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Native iOS and Android apps</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Push notifications for events and announcements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Mobile check-in and event registration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-faith-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-faith-600" />
                    </div>
                    <p className="text-gray-600">Offline access to devotionals and resources</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section id="additional" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">More Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Tools & Integrations</h2>
              <p className="text-xl text-gray-600">
                FaithLink continues to grow with new features and integrations to serve your ministry needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Security & Privacy</h3>
                  <p className="text-gray-600">
                    Enterprise-grade security with role-based permissions, data encryption, and GDPR compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <Headphones className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Dedicated support team available via chat, email, and phone to help you get the most from FaithLink.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-faith-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Multi-Campus Support</h3>
                  <p className="text-gray-600">
                    Manage multiple locations under one account with campus-specific settings and reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-faith-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See FaithLink in Action?</h2>
            <p className="text-xl text-faith-100 max-w-3xl mx-auto mb-8">
              Book a personalized demo to explore how FaithLink can serve your church's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-faith-600 hover:bg-faith-50" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-faith-700" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
