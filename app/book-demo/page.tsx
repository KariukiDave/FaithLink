"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"

export default function BookDemoPage() {
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
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Book a Demo</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Show You How It Works</h1>
              <p className="text-xl text-gray-600">
                Book a personalized demo with our team to explore how FaithLink can serve your church.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative z-10 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="FaithLink Demo"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-faith-200 rounded-full opacity-30 blur-3xl"></div>
              </div>

              {isSubmitted ? (
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ChevronRight className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Thanks! We've received your request.</h2>
                    <p className="text-gray-600 mb-6">
                      Our team will contact you shortly to confirm your demo and answer any questions you might have.
                    </p>
                    <p className="text-gray-600 mb-6">
                      In the meantime, feel free to explore our{" "}
                      <a href="/features" className="text-faith-600 underline">
                        features
                      </a>{" "}
                      or{" "}
                      <a href="/pricing" className="text-faith-600 underline">
                        pricing
                      </a>{" "}
                      pages.
                    </p>
                    <Button
                      className="bg-faith-600 hover:bg-faith-700 text-white"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Book Another Demo
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Schedule Your Personalized Demo</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="churchName">Church Name</Label>
                        <Input id="churchName" placeholder="Grace Community Church" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (optional)</Label>
                        <Input id="phone" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Role/Position</Label>
                      <Select>
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pastor">Pastor</SelectItem>
                          <SelectItem value="admin">Church Administrator</SelectItem>
                          <SelectItem value="tech">Technology Director</SelectItem>
                          <SelectItem value="ministry">Ministry Leader</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="churchSize">Church Size</Label>
                      <Select>
                        <SelectTrigger id="churchSize">
                          <SelectValue placeholder="Select church size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-100">1-100 members</SelectItem>
                          <SelectItem value="101-250">101-250 members</SelectItem>
                          <SelectItem value="251-500">251-500 members</SelectItem>
                          <SelectItem value="501-1000">501-1000 members</SelectItem>
                          <SelectItem value="1000+">1000+ members</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="demoDate" className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Preferred Demo Date
                        </Label>
                        <Input id="demoDate" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="demoTime" className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Preferred Time
                        </Label>
                        <Select>
                          <SelectTrigger id="demoTime">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="1pm">1:00 PM</SelectItem>
                            <SelectItem value="2pm">2:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="4pm">4:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information (optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your specific needs or questions"
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-faith-600 hover:bg-faith-700 text-white">
                      Book My Demo
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect in Your Demo</h2>
              <p className="text-xl text-gray-600">
                Our personalized demos are tailored to your church's specific needs and questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-faith-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Needs Assessment</h3>
                <p className="text-gray-600">
                  We'll start by understanding your church's unique needs, challenges, and goals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-faith-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Product Tour</h3>
                <p className="text-gray-600">
                  See a comprehensive walkthrough of FaithLink's features and how they can serve your ministry.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-faith-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Q&A and Next Steps</h3>
                <p className="text-gray-600">
                  Get answers to your questions and learn about implementation, pricing, and support options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Others Are Saying</h2>
              <p className="text-xl text-gray-600">
                Hear from church leaders who have transformed their ministries with FaithLink.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "The demo was incredibly helpful. The team took the time to understand our church's specific needs and
                  showed us exactly how FaithLink could help. We signed up immediately after the demo and haven't looked
                  back."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-bold">Pastor Michael Johnson</p>
                    <p className="text-sm text-gray-500">Grace Community Church</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "I was hesitant about switching our church management system, but the demo showed me how easy the
                  transition would be. The FaithLink team was patient with all our questions and made the process
                  seamless."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-bold">Sarah Williams</p>
                    <p className="text-sm text-gray-500">Church Administrator, Harvest Fellowship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-faith-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions Before Booking?</h2>
            <p className="text-xl text-faith-100 max-w-3xl mx-auto mb-8">
              Our team is here to help. Reach out with any questions about FaithLink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-faith-600 hover:bg-faith-50">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-faith-700">
                View FAQ
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
