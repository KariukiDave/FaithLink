"use client"
import { useState } from "react"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"
import { BackToTop } from "@/components/shared/back-to-top"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/shared/job-card"
import { Search } from "lucide-react"

// Sample job data
const jobs = [
  {
    id: "software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our engineering team to build innovative solutions for churches worldwide.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Lead product development initiatives and shape the future of our church management platform.",
  },
  {
    id: "customer-success",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Atlanta, GA",
    type: "Full-time",
    description: "Help our church partners succeed by providing exceptional support and guidance.",
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive and beautiful experiences for our users across web and mobile platforms.",
  },
  {
    id: "sales-representative",
    title: "Sales Representative",
    department: "Sales",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Connect churches with our platform and help them understand how FaithLink can transform their ministry.",
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    description: "Create engaging content that resonates with church leaders and helps them grow their ministries.",
  },
]

// Department and location filters
const departments = ["All Departments", "Engineering", "Product", "Customer Success", "Design", "Sales", "Marketing"]
const locations = ["All Locations", "San Francisco, CA", "Atlanta, GA", "Chicago, IL", "Remote"]

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")

  // Filter jobs based on search query and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDepartment = selectedDepartment === "All Departments" || job.department === selectedDepartment

    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation

    return matchesSearch && matchesDepartment && matchesLocation
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Join Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grow Your Career While Serving Churches
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At FaithLink, we're passionate about empowering churches with technology. Join our mission-driven team and
              make a difference in communities around the world.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">These core principles guide everything we do at FaithLink.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-faith-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-faith-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Faith-Centered</h3>
                <p className="text-gray-600">
                  We build technology that serves the unique needs of faith communities, with respect and understanding.
                </p>
              </div>

              <div className="bg-faith-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-faith-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We pursue excellence in everything we do, from code quality to customer service.
                </p>
              </div>

              <div className="bg-faith-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-faith-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to solve real problems for churches in meaningful ways.
                </p>
              </div>

              <div className="bg-faith-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-faith-600">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive, inclusive workplace where everyone can contribute and grow.
                </p>
              </div>

              <div className="bg-faith-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-faith-600">5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Impact</h3>
                <p className="text-gray-600">
                  We measure success by the positive impact we have on churches and their communities.
                </p>
              </div>

              <div className="bg-faith-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-faith-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-faith-600">6</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-gray-600">
                  We invest in personal and professional growth, helping our team members reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-600">
                We take care of our team so they can focus on taking care of our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Competitive Salary</h3>
                <p className="text-gray-600">
                  We offer competitive compensation packages based on experience and skills.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Health Benefits</h3>
                <p className="text-gray-600">
                  Comprehensive medical, dental, and vision coverage for you and your family.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Flexible Work</h3>
                <p className="text-gray-600">
                  Remote-friendly environment with flexible schedules to support work-life balance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Paid Time Off</h3>
                <p className="text-gray-600">Generous vacation policy, plus paid holidays and sick leave.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">401(k) Matching</h3>
                <p className="text-gray-600">Retirement plan with company matching to help you save for the future.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Professional Development</h3>
                <p className="text-gray-600">Budget for conferences, courses, and resources to help you grow.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Parental Leave</h3>
                <p className="text-gray-600">
                  Paid parental leave for all new parents, including adoption and foster care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Team Retreats</h3>
                <p className="text-gray-600">
                  Regular company retreats to connect, collaborate, and celebrate together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">
                Join our team and help us build technology that empowers churches.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search positions..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-faith-500"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-faith-500"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Job Listings */}
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      id={job.id}
                      title={job.title}
                      department={job.department}
                      location={job.location}
                      type={job.type}
                      description={job.description}
                    />
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">No positions match your search criteria.</p>
                    <Button
                      variant="link"
                      className="text-faith-600 mt-2"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedDepartment("All Departments")
                        setSelectedLocation("All Locations")
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Don't See a Fit Section */}
            <div className="max-w-3xl mx-auto text-center mt-16 p-8 bg-faith-50 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who are passionate about our mission. Send us your resume
                and tell us how you can contribute to our team.
              </p>
              <Button className="bg-faith-600 hover:bg-faith-700 text-white">Submit General Application</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Join Our Mission-Driven Team"
          subtitle="Be part of something meaningful. Help churches connect, grow, and serve their communities better."
          primaryButtonText="View Open Positions"
          primaryButtonLink="#open-positions"
          secondaryButtonText="Learn About Us"
          secondaryButtonLink="/about"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
