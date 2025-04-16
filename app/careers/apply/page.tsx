"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { BackToTop } from "@/components/shared/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload } from "lucide-react"

// Sample job data - in a real app, this would come from an API or database
const jobs = [
  {
    id: "software-engineer",
    title: "Senior Software Engineer",
  },
  {
    id: "product-manager",
    title: "Product Manager",
  },
  {
    id: "customer-success",
    title: "Customer Success Manager",
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
  },
  {
    id: "ux-designer",
    title: "UX Designer",
  },
]

export default function JobApplicationPage() {
  const searchParams = useSearchParams()
  const [selectedJob, setSelectedJob] = useState<string>("")

  useEffect(() => {
    // Get the job ID from the URL query parameter
    const jobId = searchParams.get("job")
    if (jobId) {
      setSelectedJob(jobId)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    alert("Application submitted successfully! We'll be in touch soon.")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <Link href="/careers" className="inline-flex items-center text-faith-600 mb-8 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-faith-50 rounded-t-lg">
                <CardTitle className="text-2xl md:text-3xl">Job Application</CardTitle>
                <CardDescription>Please fill out the form below to apply for a position at FaithLink.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Position Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For</Label>
                    <Select value={selectedJob} onValueChange={setSelectedJob} required>
                      <SelectTrigger id="position" className="w-full">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobs.map((job) => (
                          <SelectItem key={job.id} value={job.id}>
                            {job.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Current Location</Label>
                    <Input id="location" placeholder="City, State/Province, Country" required />
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select defaultValue="1-3">
                      <SelectTrigger id="experience" className="w-full">
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-2">Drag and drop your resume here, or click to browse</p>
                      <p className="text-xs text-gray-400">PDF, DOCX, or TXT (Max 5MB)</p>
                      <Input id="resume" type="file" className="hidden" accept=".pdf,.docx,.doc,.txt" required />
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4"
                        onClick={() => document.getElementById("resume")?.click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      className="min-h-[150px]"
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div className="space-y-2">
                    <Label htmlFor="source">How did you hear about us?</Label>
                    <Select defaultValue="linkedin">
                      <SelectTrigger id="source" className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="indeed">Indeed</SelectItem>
                        <SelectItem value="glassdoor">Glassdoor</SelectItem>
                        <SelectItem value="referral">Employee Referral</SelectItem>
                        <SelectItem value="website">Company Website</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-faith-600 hover:bg-faith-700 text-white">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
