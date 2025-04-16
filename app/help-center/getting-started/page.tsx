"use client"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { BackToTop } from "@/components/shared/back-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ArrowLeft, Book, HelpCircle, ThumbsUp, ThumbsDown, Play } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/help-center">Help Center</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/help-center/getting-started">Getting Started</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Back button */}
            <Link href="/help-center" className="inline-flex items-center text-faith-600 mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Help Center
            </Link>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-4 rounded-lg sticky top-24">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Book className="h-4 w-4 mr-2" />
                    Getting Started
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/help-center/getting-started/account-setup" className="text-faith-600 font-medium">
                        Setting Up Your Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help-center/getting-started/adding-members"
                        className="text-gray-600 hover:text-faith-600"
                      >
                        Adding Your First Members
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help-center/getting-started/church-profile"
                        className="text-gray-600 hover:text-faith-600"
                      >
                        Creating Your Church Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help-center/getting-started/navigation"
                        className="text-gray-600 hover:text-faith-600"
                      >
                        Navigation Basics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3">
                <h1 className="text-3xl font-bold mb-6">Setting Up Your Account</h1>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    Welcome to FaithLink! This guide will walk you through the process of setting up your account and
                    getting started with our church management platform.
                  </p>

                  <h2 className="text-xl font-bold mt-8 mb-4">Step 1: Create Your Account</h2>
                  <p className="mb-4">
                    To get started with FaithLink, you'll need to create an administrator account. This account will
                    have full access to all features and settings.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>
                      Visit{" "}
                      <Link href="/auth" className="text-faith-600 hover:underline">
                        faithlink.com/auth
                      </Link>{" "}
                      and click "Sign Up"
                    </li>
                    <li>Enter your email address and create a secure password</li>
                    <li>Check your email for a verification link and click it to verify your account</li>
                    <li>Once verified, you'll be directed to the account setup wizard</li>
                  </ol>

                  <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Account Creation Screen"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Step 2: Complete Your Church Profile</h2>
                  <p className="mb-4">
                    After creating your account, you'll need to set up your church profile. This information will be
                    used throughout the platform.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Enter your church name, address, and contact information</li>
                    <li>Upload your church logo (recommended size: 200x200px)</li>
                    <li>Set your primary and secondary brand colors</li>
                    <li>Add a brief description of your church</li>
                  </ul>

                  <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Church Profile Setup"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Step 3: Configure Your Subscription</h2>
                  <p className="mb-4">
                    Choose the subscription plan that best fits your church's needs. You can start with a free trial to
                    explore all features before committing.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Select from Starter, Standard, or Premium plans</li>
                    <li>Choose between monthly or annual billing (save 40% with annual)</li>
                    <li>Enter your payment information (not charged until after trial period)</li>
                    <li>Review and confirm your subscription details</li>
                  </ul>

                  <div className="bg-faith-50 p-6 rounded-lg my-8">
                    <h3 className="font-bold flex items-center mb-2">
                      <HelpCircle className="h-5 w-5 mr-2 text-faith-600" />
                      Pro Tip
                    </h3>
                    <p className="text-gray-700">
                      Not sure which plan is right for you? Start with the 14-day free trial of our Premium plan to
                      explore all features, then downgrade if needed before the trial ends.
                    </p>
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Step 4: Invite Team Members</h2>
                  <p className="mb-4">
                    FaithLink works best when your entire ministry team is connected. Invite key staff members to join
                    your account.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Navigate to Settings &gt; Team Members</li>
                    <li>Click "Add Team Member" and enter their email address</li>
                    <li>Assign appropriate permission levels (Admin, Editor, or Viewer)</li>
                    <li>Customize access to specific modules if needed</li>
                  </ul>

                  <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Invite Team Members"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Next Steps</h2>
                  <p className="mb-4">
                    Now that your account is set up, you're ready to start using FaithLink! Here are some recommended
                    next steps:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <Link
                        href="/help-center/getting-started/adding-members"
                        className="text-faith-600 hover:underline"
                      >
                        Add your first members
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help-center/getting-started/church-profile"
                        className="text-faith-600 hover:underline"
                      >
                        Complete your church profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/help-center/getting-started/navigation" className="text-faith-600 hover:underline">
                        Learn navigation basics
                      </Link>
                    </li>
                    <li>
                      <Link href="/help-center/events/creating-events" className="text-faith-600 hover:underline">
                        Create your first event
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Video Tutorial */}
                <div className="mt-12 mb-8">
                  <h2 className="text-xl font-bold mb-4">Video Tutorial</h2>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <Button className="bg-faith-600 hover:bg-faith-700">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Tutorial
                    </Button>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="mt-12 mb-8">
                  <h2 className="text-xl font-bold mb-4">Related Articles</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <Link
                          href="/help-center/getting-started/adding-members"
                          className="text-faith-600 font-medium hover:underline"
                        >
                          Adding Your First Members
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Learn how to add and manage church members in FaithLink.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <Link
                          href="/help-center/getting-started/navigation"
                          className="text-faith-600 font-medium hover:underline"
                        >
                          Navigation Basics
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Get familiar with the FaithLink dashboard and navigation.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Feedback */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h3 className="font-medium mb-2">Was this article helpful?</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Yes
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      No
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
