"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"
import { Search } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    slug: "growing-your-church-with-technology",
    title: "Growing Your Church with Technology: 5 Strategies That Work",
    excerpt:
      "Discover how churches are leveraging technology to reach more people, engage their congregations, and streamline operations.",
    image: "/placeholder.svg?height=400&width=800",
    date: "April 10, 2025",
    author: "Pastor Michael Johnson",
    category: "Church Growth",
  }

  const blogPosts = [
    {
      slug: "digital-discipleship-guide",
      title: "The Complete Guide to Digital Discipleship",
      excerpt:
        "Learn how to use digital tools to foster genuine spiritual growth and discipleship in your congregation.",
      image: "/placeholder.svg?height=300&width=500",
      date: "April 5, 2025",
      author: "Sarah Thompson",
      category: "Discipleship",
    },
    {
      slug: "youth-ministry-engagement",
      title: "Engaging Gen Z in Youth Ministry",
      excerpt:
        "Practical tips for connecting with today's youth through technology and authentic relationship building.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 28, 2025",
      author: "David Chen",
      category: "Youth Ministry",
    },
    {
      slug: "streamlining-church-admin",
      title: "Streamlining Church Administration",
      excerpt: "How to reduce administrative burden and free up more time for ministry and outreach.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 22, 2025",
      author: "Lisa Rodriguez",
      category: "Administration",
    },
    {
      slug: "small-groups-strategy",
      title: "Building a Thriving Small Groups Ministry",
      excerpt: "Strategies for creating, managing, and growing meaningful small groups in your church.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 15, 2025",
      author: "Pastor James Wilson",
      category: "Small Groups",
    },
    {
      slug: "church-communication-tactics",
      title: "Modern Church Communication Tactics",
      excerpt: "Effective ways to communicate with your congregation across multiple channels.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 8, 2025",
      author: "Michelle Garcia",
      category: "Communication",
    },
    {
      slug: "volunteer-management",
      title: "Volunteer Management Best Practices",
      excerpt: "Learn how to recruit, train, and retain volunteers while creating a fulfilling experience for them.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 1, 2025",
      author: "Robert Taylor",
      category: "Leadership",
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
              <Badge className="bg-faith-100 text-faith-700 hover:bg-faith-100 px-3 py-1 mb-4">Blog</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insights for Church Leaders</h1>
              <p className="text-xl text-gray-600">
                Resources, tips, and strategies to help your church grow and thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Categories Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search articles..." className="pl-10 w-full md:w-[300px]" />
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">All</Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">Church Growth</Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">Technology</Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">Leadership</Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">Discipleship</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 order-2 lg:order-1 p-6 lg:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-faith-100 text-faith-700">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-faith-600 transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-medium">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Button className="mt-2 w-fit bg-faith-600 hover:bg-faith-700" asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                  </Button>
                </div>
                <div className="lg:col-span-3 order-1 lg:order-2 relative h-60 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4 bg-faith-100 text-faith-700">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-faith-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-faith-600 text-sm font-medium hover:underline">
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="text-faith-600 border-faith-600 hover:bg-faith-50">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest insights, tips, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Your email address" className="sm:flex-1" />
                <Button className="bg-faith-600 hover:bg-faith-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Church Management?"
          subtitle="Join thousands of churches using FaithLink to grow their ministries and engage their communities."
        />
      </main>

      <Footer />
    </div>
  )
}
