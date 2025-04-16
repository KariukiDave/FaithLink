"use client"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { BackToTop } from "@/components/shared/back-to-top"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Book, HelpCircle, ThumbsUp, ThumbsDown, Play } from "lucide-react"

export default function AddingMembersPage() {
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
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/help-center/getting-started/adding-members">Adding Members</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Back button */}
            <Link
              href="/help-center/getting-started"
              className="inline-flex items-center text-faith-600 mb-6 hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Getting Started
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
                      <Link
                        href="/help-center/getting-started/account-setup"
                        className="text-gray-600 hover:text-faith-600"
                      >
                        Setting Up Your Account
                      </Link>
                    </li>
                    <li>
                      <Link href="/help-center/getting-started/adding-members" className="text-faith-600 font-medium">
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
                <h1 className="text-3xl font-bold mb-6">Adding Your First Members</h1>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    Building your church database is an essential step in getting started with FaithLink. This guide
                    will show you how to add members individually or import them in bulk.
                  </p>

                  <h2 className="text-xl font-bold mt-8 mb-4">Method 1: Adding Members Individually</h2>
                  <p className="mb-4">
                    For smaller churches or when adding new members one at a time, you can use the individual member
                    creation form.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>Navigate to the Members section from the main dashboard</li>
                    <li>Click the "Add Member" button in the top right corner</li>
                    <li>Fill out the required information (name, contact details, etc.)</li>
                    <li>
                      Add any additional information like family connections, ministry involvement, or custom fields
                    </li>
                    <li>Click "Save" to add the member to your database</li>
                  </ol>

                  <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Adding a Member Form"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Method 2: Bulk Import</h2>
                  <p className="mb-4">
                    If you're migrating from another system or have a large number of members to add, the bulk import
                    feature will save you time.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>Navigate to Members > Import</li>
                    <li>Download our CSV template by clicking "Download Template"</li>
                    <li>Fill out the template with your member data (follow the format exactly)</li>
                    <li>Save your file as a CSV</li>
                    <li>Return to the Import page and click "Upload CSV"</li>
                    <li>Review the data preview to ensure everything looks correct</li>
                    <li>Click "Import Members" to complete the process</li>
                  </ol>

                  <div className="bg-faith-50 p-6 rounded-lg my-8">
                    <h3 className="font-bold flex items-center mb-2">
                      <HelpCircle className="h-5 w-5 mr-2 text-faith-600" />
                      Pro Tip
                    </h3>
                    <p className="text-gray-700">
                      When importing members, make sure your CSV file uses UTF-8 encoding to avoid issues with special
                      characters in names. Also, double-check that date formats match our template (YYYY-MM-DD).
                    </p>
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Creating Family Connections</h2>
                  <p className="mb-4">
                    FaithLink allows you to connect members as families, which helps with communication and ministry
                    planning.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>After adding members, go to the Members section</li>
                    <li>Select a member and click "Edit"</li>
                    <li>Scroll to the "Family Connections" section</li>
                    <li>Click "Add Family Member" and search for existing members</li>
                    <li>Select the relationship type (spouse, child, parent, etc.)</li>
                    <li>Save the changes</li>
                  </ol>

                  <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Family Connections Interface"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Adding Custom Fields</h2>
                  <p className="mb-4">
                    Every church has unique information they need to track. Custom fields allow you to tailor member
                    profiles to your specific needs.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>Go to Settings > Custom Fields</li>
                    <li>Click "Add Custom Field"</li>
                    <li>Choose the field type (text, date, dropdown, checkbox, etc.)</li>
                    <li>Name your field and set any default values</li>
                    <li>Choose whether the field is required or optional</li>
                    <li>Save the new field</li>
                  </ol>

                  <div className="bg-faith-50 p-6 rounded-lg my-8">
                    <h3 className="font-bold flex items-center mb-2">
                      <HelpCircle className="h-5 w-5 mr-2 text-faith-600" />
                      Pro Tip
                    </h3>
                    <p className="text-gray-700">
                      Common custom fields include baptism date, spiritual gifts, ministry interests, and emergency
                      contact information. Think about what information would be most valuable for your ministry.
                    </p>
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">Next Steps</h2>
                  <p className="mb-4">Now that you've added your members, here are some recommended next steps:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <Link href="/help-center/groups/creating-groups" className="text-faith-600 hover:underline">
                        Create small groups and assign members
                      </Link>
                    </li>
                    <li>
                      <Link href="/help-center/communication/email-basics" className="text-faith-600 hover:underline">
                        Send your first communication
                      </Link>
                    </li>
                    <li>
                      <Link href="/help-center/events/creating-events" className="text-faith-600 hover:underline">
                        Set up church events
                      </Link>
                    </li>
                    <li>
                      <Link href="/help-center/reports/attendance" className="text-faith-600 hover:underline">
                        Track attendance
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
                          href="/help-center/members/member-tags"
                          className="text-faith-600 font-medium hover:underline"
                        >
                          Using Member Tags
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Learn how to organize members with tags for better filtering and communication.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <Link
                          href="/help-center/members/attendance-tracking"
                          className="text-faith-600 font-medium hover:underline"
                        >
                          Tracking Member Attendance
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          Set up attendance tracking for services and events.
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
