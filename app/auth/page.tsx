"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl max-w-6xl mx-auto">
            <div className="relative w-full md:w-1/2 bg-faith-600">
              <div className="absolute inset-0 bg-faith-600 opacity-70"></div>
              <div className="relative h-64 md:h-full flex flex-col items-center justify-center text-white p-8">
                <div className="flex items-center mb-8">
                  <div className="relative h-10 w-10 mr-2">
                    <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center text-faith-700 font-bold">
                      F
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-white">FaithLink</h1>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                  Empowering Churches to Thrive Together
                </h2>
                <p className="text-center text-faith-100 max-w-md">
                  Join thousands of churches using FaithLink to connect, grow, and serve their communities more
                  effectively.
                </p>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Church Community"
                  width={800}
                  height={600}
                  className="mt-8 rounded-lg shadow-lg max-w-sm mx-auto hidden md:block"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
              <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2 text-center mb-8">
                    <h2 className="text-3xl font-bold">Welcome Back</h2>
                    <p className="text-gray-500">Sign in to your FaithLink account</p>
                  </div>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input id="login-email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link href="#" className="text-sm text-faith-600 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="login-password" type="password" placeholder="••••••••" required />
                    </div>
                    <Button type="submit" className="w-full bg-faith-600 hover:bg-faith-700 text-white">
                      Login
                    </Button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      Don't have an account?{" "}
                      <button
                        onClick={() => setActiveTab("signup")}
                        className="text-faith-600 hover:underline font-medium"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-2 text-center mb-8">
                    <h2 className="text-3xl font-bold">Create Account</h2>
                    <p className="text-gray-500">Join FaithLink to empower your ministry</p>
                  </div>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input id="signup-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-church">Church Name</Label>
                      <Input id="signup-church" placeholder="Grace Community Church" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" placeholder="••••••••" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                      <Input id="signup-confirm-password" type="password" placeholder="••••••••" required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="#" className="text-faith-600 hover:underline">
                          terms of service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-faith-600 hover:underline">
                          privacy policy
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-faith-600 hover:bg-faith-700 text-white">
                      Create Account
                    </Button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-faith-600 hover:underline font-medium"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
