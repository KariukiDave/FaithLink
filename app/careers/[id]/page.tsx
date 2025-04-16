"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { BackToTop } from "@/components/shared/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Briefcase, Clock, ChevronRight } from "lucide-react"

// Sample job data - in a real app, this would come from an API or database
const jobs = [
  {
    id: "software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our engineering team to build innovative solutions for churches worldwide.",
    responsibilities: [
      "Design, develop, and maintain high-quality software for our church management platform",
      "Collaborate with product managers, designers, and other engineers to deliver features",
      "Write clean, maintainable, and well-tested code",
      "Participate in code reviews and provide constructive feedback to other developers",
      "Troubleshoot and resolve software defects",
      "Stay up-to-date with emerging trends and technologies",
    ],
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript/TypeScript and React",
      "Experience with Node.js and RESTful APIs",
      "Familiarity with cloud services (AWS, Azure, or GCP)",
      "Understanding of software development best practices",
      "Excellent problem-solving and communication skills",
      "BS/MS in Computer Science or equivalent experience",
    ],
    preferred: [
      "Experience with Next.js and server-side rendering",
      "Knowledge of database technologies (SQL and NoSQL)",
      "Understanding of CI/CD pipelines",
      "Experience with mobile app development",
      "Previous work in SaaS products",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Lead product development initiatives and shape the future of our church management platform.",
    responsibilities: [
      "Define product strategy and roadmap based on market research and customer feedback",
      "Work closely with engineering, design, and marketing teams to deliver features",
      "Gather and prioritize product requirements",
      "Define success metrics for product features",
      "Conduct user research and usability testing",
      "Present product demos to stakeholders and customers",
    ],
    requirements: [
      "3+ years of experience in product management",
      "Strong analytical and problem-solving skills",
      "Excellent communication and presentation abilities",
      "Experience with agile development methodologies",
      "Data-driven approach to decision making",
      "Bachelor's degree in Business, Computer Science, or related field",
    ],
    preferred: [
      "Experience with church management software or related industries",
      "Technical background or understanding of software development",
      "Experience with product analytics tools",
      "MBA or other advanced degree",
      "Experience in a SaaS environment",
    ],
  },
  // Additional job listings would be defined here
]

export default function JobDetailPage() {
  const params = useParams()
  const jobId = params.id as string

  // Find the job that matches the ID from the URL
  const job = jobs.find((j) => j.id === jobId)

  // If job not found, show a message
  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-8">The job posting you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link href="/careers">View All Positions</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link href="/careers" className="inline-flex items-center text-faith-600 mb-8 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Positions
            </Link>

            {/* Job header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge className="flex items-center gap-1 bg-faith-100 text-faith-700 hover:bg-faith-100">
                  <Briefcase className="h-3 w-3" />
                  {job.department}
                </Badge>
                <Badge className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-100">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </Badge>
                <Badge className="flex items-center gap-1 bg-blue-100 text-blue-700 hover:bg-blue-100">
                  <Clock className="h-3 w-3" />
                  {job.type}
                </Badge>
              </div>
              <p className="text-xl text-gray-600">{job.description}</p>
            </div>

            {/* Job details */}
            <div className="space-y-10">
              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preferred Qualifications */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Preferred Qualifications</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.preferred.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* About FaithLink */}
              <div>
                <h2 className="text-2xl font-bold mb-4">About FaithLink</h2>
                <p className="text-gray-700 mb-4">
                  FaithLink is a leading provider of church management software, helping churches of all sizes connect,
                  grow, and serve their communities. Our platform combines powerful tools with an intuitive interface to
                  simplify church administration and enhance ministry impact.
                </p>
                <p className="text-gray-700">
                  We're a mission-driven team passionate about empowering churches with technology. We value diversity,
                  innovation, and work-life balance, and we're committed to creating an inclusive workplace where
                  everyone can thrive.
                </p>
              </div>

              {/* Apply button */}
              <div className="pt-6">
                <Button size="lg" className="bg-faith-600 hover:bg-faith-700 text-white">
                  Apply for This Position
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
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
