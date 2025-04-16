"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { BackToTop } from "@/components/shared/back-to-top"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600">
                We'd love to hear from you. Reach out with any questions about FaithLink.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-6">
                    Our team is here to help. Reach out through any of the channels below or fill out the form.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-faith-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-faith-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-gray-600">support@faithlink.com</p>
                      <p className="text-sm text-gray-500">For general inquiries and support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-faith-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-faith-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday-Friday, 9am-5pm ET</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-faith-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-faith-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-gray-600">123 Faith Street, Suite 300</p>
                      <p className="text-gray-600">Nashville, TN 37203</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-faith-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-faith-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-gray-600">Monday-Friday: 9am-5pm ET</p>
                      <p className="text-gray-600">Saturday-Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Office Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 w-8 text-green-600"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button className="bg-faith-600 hover:bg-faith-700" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" placeholder="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="church">Church Name (Optional)</Label>
                        <Input id="church" placeholder="Grace Community Church" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topic">How can we help?</Label>
                      <Select>
                        <SelectTrigger id="topic">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="feedback">Product Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-faith-600 hover:bg-faith-700">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find quick answers to common questions. For more in-depth help, visit our Help Center.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">What are your support hours?</h3>
                <p className="text-gray-600">
                  Our support team is available Monday through Friday from 9am to 5pm Eastern Time. Email support is
                  available 24/7.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">How quickly will you respond to my inquiry?</h3>
                <p className="text-gray-600">
                  We strive to respond to all inquiries within 24 business hours. Premium plan customers receive
                  priority support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Do you offer phone support?</h3>
                <p className="text-gray-600">
                  Phone support is available for customers on our Standard and Premium plans. All customers have access
                  to email and chat support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Can I request a custom demo?</h3>
                <p className="text-gray-600">
                  Yes! You can schedule a personalized demo that focuses on the specific features most relevant to your
                  church's needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
