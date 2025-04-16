"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small churches just getting started",
      monthlyPrice: 49,
      annualPrice: 29,
      features: [
        "Up to 200 members",
        "Basic member management",
        "Email communication",
        "Simple event calendar",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Standard",
      description: "Ideal for growing churches with active ministries",
      monthlyPrice: 99,
      annualPrice: 59,
      features: [
        "Up to 500 members",
        "Advanced member profiles",
        "Email & SMS communication",
        "WhatsApp integration",
        "Small groups management",
        "Basic reporting & analytics",
      ],
      popular: true,
    },
    {
      name: "Premium",
      description: "For established churches with comprehensive needs",
      monthlyPrice: 199,
      annualPrice: 119,
      features: [
        "Unlimited members",
        "All Standard features",
        "Advanced reporting & analytics",
        "Multi-campus support",
        "API access & custom integrations",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ]

  const featureComparison = [
    {
      category: "Communication",
      features: [
        { name: "Email Messaging", starter: true, standard: true, premium: true },
        { name: "SMS Messaging", starter: false, standard: true, premium: true },
        { name: "WhatsApp Integration", starter: false, standard: true, premium: true },
        { name: "Message Templates", starter: true, standard: true, premium: true },
        { name: "Automated Reminders", starter: false, standard: true, premium: true },
        { name: "Mass Communication", starter: false, standard: true, premium: true },
      ],
    },
    {
      category: "Groups",
      features: [
        { name: "Basic Group Management", starter: true, standard: true, premium: true },
        { name: "Group Attendance Tracking", starter: true, standard: true, premium: true },
        { name: "Group Leader Tools", starter: false, standard: true, premium: true },
        { name: "Resource Sharing", starter: false, standard: true, premium: true },
        { name: "Discussion Forums", starter: false, standard: false, premium: true },
        { name: "Group Analytics", starter: false, standard: false, premium: true },
      ],
    },
    {
      category: "Member Tools",
      features: [
        { name: "Member Profiles", starter: true, standard: true, premium: true },
        { name: "Family Connections", starter: true, standard: true, premium: true },
        { name: "Custom Fields", starter: false, standard: true, premium: true },
        { name: "Discipleship Tracking", starter: false, standard: true, premium: true },
        { name: "Member Self-Service Portal", starter: false, standard: true, premium: true },
        { name: "Check-in System", starter: false, standard: true, premium: true },
      ],
    },
    {
      category: "Reporting",
      features: [
        { name: "Basic Reports", starter: true, standard: true, premium: true },
        { name: "Attendance Analytics", starter: false, standard: true, premium: true },
        { name: "Growth Metrics", starter: false, standard: true, premium: true },
        { name: "Custom Dashboards", starter: false, standard: false, premium: true },
        { name: "Data Export", starter: false, standard: true, premium: true },
        { name: "Advanced Analytics", starter: false, standard: false, premium: true },
      ],
    },
    {
      category: "Support",
      features: [
        { name: "Email Support", starter: true, standard: true, premium: true },
        { name: "Chat Support", starter: false, standard: true, premium: true },
        { name: "Phone Support", starter: false, standard: false, premium: true },
        { name: "Dedicated Account Manager", starter: false, standard: false, premium: true },
        { name: "Training Sessions", starter: false, standard: true, premium: true },
        { name: "Priority Support", starter: false, standard: false, premium: true },
      ],
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
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Pricing</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your church. Save 40% with an annual subscription.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${!isAnnual ? "font-bold text-faith-600" : "text-gray-500"}`}>Monthly</span>
              <div className="flex items-center">
                <Switch checked={isAnnual} onCheckedChange={setIsAnnual} id="billing-toggle" />
                <Label htmlFor="billing-toggle" className="sr-only">
                  Toggle billing period
                </Label>
              </div>
              <span className={`text-lg ${isAnnual ? "font-bold text-faith-600" : "text-gray-500"}`}>
                Annual <Badge className="ml-1 bg-green-100 text-green-700">Save 40%</Badge>
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                    plan.popular ? "bg-faith-600 text-white relative" : "bg-white"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold uppercase py-1 px-3 rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className={`mb-6 ${plan.popular ? "text-faith-100" : "text-gray-600"}`}>{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                      <span className={plan.popular ? "text-faith-100" : "text-gray-600"}>/month</span>
                      {isAnnual && (
                        <p className={`text-sm mt-1 ${plan.popular ? "text-faith-100" : "text-gray-500"}`}>
                          Billed annually (${isAnnual ? plan.annualPrice * 12 : plan.monthlyPrice * 12}/year)
                        </p>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                              plan.popular ? "text-white" : "text-faith-600"
                            }`}
                          />
                          <span>{feature}</span>
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
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Plans Side-by-Side</h2>
              <p className="text-xl text-gray-600">
                See exactly what's included in each plan to find the right fit for your ministry.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                {featureComparison.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-1/3">Feature</TableHead>
                          <TableHead className="text-center">Starter</TableHead>
                          <TableHead className="text-center">Standard</TableHead>
                          <TableHead className="text-center">Premium</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.features.map((feature, featureIndex) => (
                          <TableRow key={featureIndex}>
                            <TableCell className="font-medium">{feature.name}</TableCell>
                            <TableCell className="text-center">
                              {feature.starter ? (
                                <Check className="h-5 w-5 text-faith-600 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mx-auto" />
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {feature.standard ? (
                                <Check className="h-5 w-5 text-faith-600 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mx-auto" />
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {feature.premium ? (
                                <Check className="h-5 w-5 text-faith-600 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-gray-300 mx-auto" />
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions about our pricing and plans.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I switch plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the
                  remainder of your billing period. When downgrading, changes will take effect at the end of your
                  current billing period.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is there a free trial?</h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What happens if we exceed our member limit?</h3>
                <p className="text-gray-600">
                  We'll notify you when you're approaching your member limit. You can upgrade to a higher plan at any
                  time to accommodate your growth.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer discounts for non-profits?</h3>
                <p className="text-gray-600">
                  Yes, we offer additional discounts for registered non-profit organizations. Contact our sales team for
                  more information.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll have access to FaithLink
                  until the end of your current billing period.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  No, there are no setup fees for any of our plans. You only pay the advertised subscription price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-faith-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-faith-100 max-w-3xl mx-auto mb-8">
              Join thousands of churches that are growing their ministries with FaithLink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-faith-600 hover:bg-faith-50" asChild>
                <Link href="/auth">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-faith-700" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
