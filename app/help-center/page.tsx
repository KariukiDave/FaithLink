"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"
import { Search, Book, Users, Calendar, MessageSquare, Settings, BarChart3, UserPlus, HelpCircle } from "lucide-react"
import { BackToTop } from "@/components/shared/back-to-top"

export default function HelpCenterPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: Book,
      topics: [
        { title: "Setting Up Your Account", link: "#setting-up-account" },
        { title: "Adding Your First Members", link: "#adding-members" },
        { title: "Creating Your Church Profile", link: "#church-profile" },
        { title: "Navigation Basics", link: "#navigation" },
      ],
    },
    {
      title: "Membership Management",
      icon: Users,
      topics: [
        { title: "Adding & Editing Members", link: "#managing-members" },
        { title: "Creating Family Connections", link: "#family-connections" },
        { title: "Tracking Attendance", link: "#attendance" },
        { title: "Member Check-In", link: "#check-in" },
      ],
    },
    {
      title: "Events & Calendar",
      icon: Calendar,
      topics: [
        { title: "Creating Events", link: "#creating-events" },
        { title: "Managing RSVPs", link: "#rsvps" },
        { title: "Recurring Events", link: "#recurring-events" },
        { title: "Calendar Integrations", link: "#calendar-integrations" },
      ],
    },
    {
      title: "Communication",
      icon: MessageSquare,
      topics: [
        { title: "Email Communication", link: "#email" },
        { title: "SMS Messaging", link: "#sms" },
        { title: "WhatsApp Integration", link: "#whatsapp" },
        { title: "Message Templates", link: "#templates" },
      ],
    },
    {
      title: "Small Groups",
      icon: UserPlus,
      topics: [
        { title: "Creating Groups", link: "#creating-groups" },
        { title: "Managing Group Leaders", link: "#group-leaders" },
        { title: "Group Resources", link: "#group-resources" },
        { title: "Group Communication", link: "#group-communication" },
      ],
    },
    {
      title: "Reports & Analytics",
      icon: BarChart3,
      topics: [
        { title: "Attendance Reports", link: "#attendance-reports" },
        { title: "Growth Analytics", link: "#growth-analytics" },
        { title: "Custom Reporting", link: "#custom-reporting" },
        { title: "Data Export", link: "#data-export" },
      ],
    },
    {
      title: "Account & Billing",
      icon: Settings,
      topics: [
        { title: "Subscription Management", link: "#subscription" },
        { title: "Billing History", link: "#billing-history" },
        { title: "User Permissions", link: "#permissions" },
        { title: "Security Settings", link: "#security" },
      ],
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      topics: [
        { title: "Common Issues", link: "#common-issues" },
        { title: "Password Reset", link: "#password-reset" },
        { title: "Data Recovery", link: "#data-recovery" },
        { title: "Error Messages", link: "#error-messages" },
      ],
    },
  ]

  const popularTopics = [
    "Getting started with FaithLink",
    "Adding new members",
    "Setting up small groups",
    "Creating and managing events",
    "Sending email communications",
    "Tracking attendance",
    "Generating reports",
    "Managing user permissions",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-20 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Help Center</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Can We Help You?</h1>
              <p className="text-xl text-gray-600 mb-8">
                Find answers, tutorials, and resources to help you get the most out of FaithLink.
              </p>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for help articles..."
                  className="pl-12 py-6 text-lg rounded-full shadow-lg"
                />
                <Button className="absolute right-1.5 top-1.5 bg-faith-600 hover:bg-faith-700 rounded-full">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {popularTopics.map((topic, index) => (
                <Link key={index} href="#" className="block">
                  <div className="bg-gray-50 hover:bg-faith-50 p-4 rounded-lg transition-colors">
                    <p className="font-medium text-gray-800">{topic}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-faith-600" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.topics.map((topic, topicIndex) => {
                        // Convert the first category's links to actual pages we've created
                        let href = topic.link
                        if (index === 0) {
                          if (topicIndex === 0) {
                            href = "/help-center/getting-started"
                          } else if (topicIndex === 1) {
                            href = "/help-center/getting-started/adding-members"
                          }
                        }

                        return (
                          <li key={topicIndex}>
                            <Link href={href} className="text-gray-600 hover:text-faith-600 hover:underline text-sm">
                              {topic.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I add a new member to FaithLink?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    To add a new member, navigate to the Members section and click the "Add Member" button. Fill out the
                    required information and click "Save" to add the member to your database.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I import members from another system?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, FaithLink supports importing members via CSV file. Go to Members &gt; Import, download our
                    template, fill it with your data, and upload it back to the system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I set up automated email reminders?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Navigate to Communication &gt; Automation, create a new automation, select your trigger (e.g., event
                    reminder), customize your email template, set the timing, and activate the automation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I generate attendance reports?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Go to Reports &gt; Attendance, select your date range and event types, and click "Generate Report."
                    You can view the report online or export it to Excel or PDF.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I cancel my subscription?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    To cancel your subscription, go to Settings &gt; Billing &gt; Subscription Management and click
                    "Cancel Subscription." Your access will continue until the end of your current billing period.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="text-faith-600 border-faith-600 hover:bg-faith-50" asChild>
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need Additional Help?</h2>
              <p className="text-gray-600 mb-8">
                Our support team is here to assist you. Reach out to us via email, chat, or phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-faith-600 hover:bg-faith-700" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" className="text-faith-600 border-faith-600 hover:bg-faith-50">
                  Start Live Chat
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started with FaithLink?"
          subtitle="Join thousands of churches using our platform to grow their ministries."
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
