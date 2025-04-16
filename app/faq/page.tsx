"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("general")

  const faqs = {
    general: [
      {
        question: "What is FaithLink?",
        answer:
          "FaithLink is a comprehensive church management system designed to help churches of all sizes connect, grow, and serve their communities more effectively. It combines tools for membership management, communication, small groups, events, and more in one easy-to-use platform.",
      },
      {
        question: "Is FaithLink suitable for churches of all sizes?",
        answer:
          "Yes! FaithLink offers different plans to accommodate churches of all sizes, from small congregations to large multi-campus organizations. Our Starter plan is perfect for smaller churches, while our Standard and Premium plans offer additional features for growing and established ministries.",
      },
      {
        question: "Do you offer a free trial?",
        answer:
          "Yes, we offer a 14-day free trial on all plans with no credit card required. This allows you to explore FaithLink and see how it can benefit your church before making a commitment.",
      },
      {
        question: "Is training included with FaithLink?",
        answer:
          "Yes, all plans include access to our Knowledge Base and video tutorials. Our Standard and Premium plans also include live training sessions to help you get the most out of FaithLink. Additionally, our support team is always available to answer questions and provide guidance.",
      },
      {
        question: "Can I migrate our data from another system?",
        answer:
          "We offer data migration services to help you transition smoothly from your current system to FaithLink. Our team will work with you to ensure all your important data is transferred accurately.",
      },
    ],
    features: [
      {
        question: "What devices can access FaithLink?",
        answer:
          "FaithLink is accessible on any device with an internet connection, including desktops, laptops, tablets, and smartphones. We also offer native mobile apps for iOS and Android for an optimized mobile experience.",
      },
      {
        question: "Can FaithLink help with small group management?",
        answer:
          "Yes! FaithLink includes robust tools for creating and managing small groups, tracking attendance, facilitating communication between group members, and providing resources to group leaders. You can also generate reports to monitor group health and engagement.",
      },
      {
        question: "How does the communication system work?",
        answer:
          "FaithLink offers multi-channel communication tools including email, SMS, and in-app messaging. You can send targeted messages to specific groups, automate event reminders, and track engagement. Our WhatsApp integration is coming soon for even more communication options.",
      },
      {
        question: "Can I track attendance with FaithLink?",
        answer:
          "Yes, FaithLink provides comprehensive attendance tracking for services, events, and small groups. You can record attendance via check-in stations, mobile devices, or manual entry. The system also generates attendance reports and identifies attendance trends.",
      },
      {
        question: "Does FaithLink integrate with our church website?",
        answer:
          "FaithLink can integrate with your existing church website through our API. We also provide embeddable widgets for events, giving, and member registration that you can add to your website.",
      },
    ],
    pricing: [
      {
        question: "How much does FaithLink cost?",
        answer:
          "FaithLink offers three pricing tiers: Starter ($49/month), Standard ($99/month), and Premium ($199/month). We also offer annual billing with a 40% discount. Visit our pricing page for a detailed breakdown of what's included in each plan.",
      },
      {
        question: "Can I upgrade or downgrade my plan later?",
        answer:
          "Yes, you can change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing period. When downgrading, changes will take effect at the end of your current billing period.",
      },
      {
        question: "Do you offer discounts for non-profit organizations?",
        answer:
          "Yes, we offer additional discounts for registered non-profit organizations. Please contact our sales team for more information about our non-profit pricing.",
      },
      {
        question: "Is there a setup fee?",
        answer: "No, there are no setup fees for any of our plans. You only pay the advertised subscription price.",
      },
      {
        question: "What happens if we exceed our member limit?",
        answer:
          "We'll notify you when you're approaching your member limit. You can upgrade to a higher plan at any time to accommodate your growth.",
      },
    ],
    security: [
      {
        question: "How secure is our church data with FaithLink?",
        answer:
          "FaithLink employs enterprise-grade security measures including data encryption at rest and in transit, regular security audits, and secure authentication. We follow industry best practices to ensure your data remains safe and private.",
      },
      {
        question: "Is FaithLink GDPR compliant?",
        answer:
          "Yes, FaithLink is fully GDPR compliant. We provide tools to help you manage member consent, data access requests, and the right to be forgotten in accordance with GDPR regulations.",
      },
      {
        question: "How often is our data backed up?",
        answer:
          "Your data is automatically backed up multiple times daily. We maintain backups for 30 days, ensuring your data can be recovered in case of any issues.",
      },
      {
        question: "Can we control who has access to different features?",
        answer:
          "FaithLink offers role-based permissions that allow you to control exactly what each staff member or volunteer can access and modify within the system.",
      },
    ],
    support: [
      {
        question: "What kind of support does FaithLink offer?",
        answer:
          "All FaithLink plans include email support. Our Standard plan adds chat support, while our Premium plan includes phone support and a dedicated account manager.",
      },
      {
        question: "What are your support hours?",
        answer:
          "Our email support is available 24/7. Chat support is available Monday through Friday, 8am to 8pm ET. Phone support for Premium customers is available Monday through Friday, 9am to 6pm ET.",
      },
      {
        question: "Do you offer implementation assistance?",
        answer:
          "Yes, we offer implementation assistance for all plans. Our team will help you set up your account, configure your settings, and get started with FaithLink. Premium plans include enhanced implementation support with dedicated onboarding specialists.",
      },
      {
        question: "Is there a community forum for FaithLink users?",
        answer:
          "Yes, we have an active community forum where FaithLink users can share ideas, ask questions, and connect with other church leaders. The forum is moderated by our support team to ensure quality responses.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">FAQ</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about FaithLink and how it can serve your church.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              {Object.entries(faqs).map(([category, questions]) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    {questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center mt-12 max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                Still have questions? Our team is here to help you find the answers you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/help-center"
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-faith-600 bg-faith-50 hover:bg-faith-100"
                >
                  Visit Help Center
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-faith-600 hover:bg-faith-700"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Church Management?"
          subtitle="Start your free trial today and experience the difference FaithLink can make for your ministry."
        />
      </main>

      <Footer />
    </div>
  )
}
