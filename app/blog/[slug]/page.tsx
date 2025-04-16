"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { CTASection } from "@/components/shared/cta-section"
import { FacebookIcon, TwitterIcon, LinkedinIcon, MailIcon } from "lucide-react"

export default function BlogPostPage() {
  const { slug } = useParams()

  // This would normally fetch the blog post based on the slug
  // For now, we'll just hard-code a sample blog post
  const post = {
    slug: "growing-your-church-with-technology",
    title: "Growing Your Church with Technology: 5 Strategies That Work",
    excerpt:
      "Discover how churches are leveraging technology to reach more people, engage their congregations, and streamline operations.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 10, 2025",
    author: {
      name: "Pastor Michael Johnson",
      image: "/placeholder.svg?height=100&width=100",
      role: "Senior Pastor, Grace Community Church",
    },
    category: "Church Growth",
    content: `
      <p>In today's digital age, churches that effectively leverage technology are finding new ways to grow, engage their congregations, and extend their reach far beyond the walls of their buildings. The COVID-19 pandemic accelerated the adoption of digital tools, but many churches are still discovering the full potential of technology in ministry.</p>

      <p>This article explores five proven strategies that churches of all sizes can implement to grow their ministries using technology.</p>

      <h2>1. Create a Digital Front Door</h2>

      <p>Your church's online presence is often the first impression people have of your ministry. It's essential to create a welcoming, informative, and easy-to-navigate digital front door. This includes:</p>

      <ul>
        <li>A mobile-responsive website with clear information about service times, location, and what to expect</li>
        <li>Active and engaging social media profiles that showcase your church's personality and values</li>
        <li>Online service streaming options for those who can't attend in person</li>
      </ul>

      <p>Many churches report that 80% of first-time visitors check out their website before attending a service. Make sure your digital front door accurately represents your church and provides all the information a potential visitor might need.</p>

      <h2>2. Implement a Comprehensive Church Management System</h2>

      <p>A Church Management System (ChMS) like FaithLink can transform how you operate by centralizing member data, streamlining communications, and providing valuable insights about your congregation. Key benefits include:</p>

      <ul>
        <li>Simplified tracking of attendance, giving, and member engagement</li>
        <li>Easy management of small groups and ministry teams</li>
        <li>Targeted communication to specific segments of your congregation</li>
        <li>Data-driven insights that help identify trends and inform ministry decisions</li>
      </ul>

      <p>Churches that implement a ChMS typically see a 30% increase in member engagement and a 25% reduction in administrative workload, allowing staff and volunteers to focus more on ministry and less on paperwork.</p>

      <h2>3. Leverage Multi-Channel Communication</h2>

      <p>Effective church communication requires meeting people where they are. Different demographics prefer different communication channels, so it's important to utilize multiple platforms:</p>

      <ul>
        <li>Email for detailed announcements and newsletters</li>
        <li>SMS for immediate and important updates</li>
        <li>Social media for community building and outreach</li>
        <li>WhatsApp or other messaging apps for small group coordination</li>
        <li>Mobile app for on-the-go access to church resources</li>
      </ul>

      <p>Churches that implement a multi-channel communication strategy typically see a 40% increase in message engagement compared to those that rely on a single channel.</p>

      <h2>4. Embrace Digital Discipleship Tools</h2>

      <p>Spiritual growth doesn't only happen during weekend services. Digital discipleship tools can foster continuous growth throughout the week:</p>

      <ul>
        <li>Daily devotional content delivered via email or mobile app</li>
        <li>Online Bible study resources and reading plans</li>
        <li>Prayer request platforms that connect the congregation in prayer</li>
        <li>Discipleship tracking tools that help members see their spiritual journey</li>
      </ul>

      <p>Churches implementing digital discipleship tools report that members engage with faith content an average of 3.5 times more per week than churches without these resources.</p>

      <h2>5. Analyze and Adapt Based on Data</h2>

      <p>One of the most powerful aspects of technology is its ability to provide actionable data. Church leaders can make more informed decisions by:</p>

      <ul>
        <li>Tracking attendance trends to identify growth opportunities</li>
        <li>Analyzing engagement metrics to see what content resonates with the congregation</li>
        <li>Identifying ministry areas that need additional support or resources</li>
        <li>Understanding giving patterns to improve financial planning</li>
      </ul>

      <p>Churches that make data-informed decisions report 35% more effective resource allocation and ministry planning.</p>

      <h2>Conclusion</h2>

      <p>Technology is not a replacement for authentic, in-person ministry, but rather a powerful tool that can extend and enhance your church's impact. By strategically implementing these five approaches, churches of all sizes can experience growth in numbers, engagement, and spiritual depth.</p>

      <p>Remember that implementing technology should always serve your church's mission and values, not dictate them. Start with clear goals, implement solutions that address specific needs, and continuously evaluate and adjust based on results.</p>

      <p>With the right approach, technology can help your church reach more people, foster deeper connections, and make a greater impact for the Kingdom.</p>
    `,
    relatedPosts: [
      {
        slug: "digital-discipleship-guide",
        title: "The Complete Guide to Digital Discipleship",
        excerpt:
          "Learn how to use digital tools to foster genuine spiritual growth and discipleship in your congregation.",
        image: "/placeholder.svg?height=200&width=300",
        category: "Discipleship",
      },
      {
        slug: "church-communication-tactics",
        title: "Modern Church Communication Tactics",
        excerpt: "Effective ways to communicate with your congregation across multiple channels.",
        image: "/placeholder.svg?height=200&width=300",
        category: "Communication",
      },
      {
        slug: "streamlining-church-admin",
        title: "Streamlining Church Administration",
        excerpt: "How to reduce administrative burden and free up more time for ministry and outreach.",
        image: "/placeholder.svg?height=200&width=300",
        category: "Administration",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-8 px-4 md:pt-40 md:pb-12 bg-gradient-to-br from-white to-faith-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-faith-100 text-faith-700 hover:bg-faith-100">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 mb-8">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-500">
                    {post.author.role} • {post.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              <div className="lg:col-span-8">
                <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Share Links */}
                <div className="mt-12 border-t pt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-gray-700 font-medium">Share this article:</div>
                    <div className="flex gap-4">
                      <a href="#" className="text-gray-500 hover:text-gray-700">
                        <FacebookIcon className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-700">
                        <TwitterIcon className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-700">
                        <LinkedinIcon className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-700">
                        <MailIcon className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {post.author.role}. Passionate about helping churches leverage technology to expand their
                        ministry impact and reach more people with the gospel.
                      </p>
                      <div className="flex gap-4">
                        <a href="#" className="text-faith-600 hover:text-faith-700 text-sm font-medium">
                          View all posts
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Stay updated with the latest insights and tips for church leaders.
                    </p>
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      <Button className="w-full bg-faith-600 hover:bg-faith-700">Subscribe</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4">More Like This</h3>
                    <div className="space-y-4">
                      {post.relatedPosts.map((relatedPost, index) => (
                        <Link key={index} href={`/blog/${relatedPost.slug}`} className="flex gap-4 group">
                          <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-faith-600 transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-500 line-clamp-2">{relatedPost.excerpt}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Grow Your Church with Technology?"
          subtitle="Start your free trial of FaithLink today and see the difference technology can make in your ministry."
        />
      </main>

      <Footer />
    </div>
  )
}
