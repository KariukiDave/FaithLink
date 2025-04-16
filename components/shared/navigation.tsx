"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-2">
            <div className="absolute inset-0 rounded-full bg-faith-500 flex items-center justify-center text-white font-bold">
              F
            </div>
          </div>
          <h1 className="text-xl font-bold text-faith-700">FaithLink</h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium ${
              isActive("/") ? "text-faith-600" : "text-gray-600 hover:text-faith-600 transition"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`text-sm font-medium ${
              isActive("/features") ? "text-faith-600" : "text-gray-600 hover:text-faith-600 transition"
            }`}
          >
            Features
          </Link>
          <Link
            href="/benefits"
            className={`text-sm font-medium ${
              isActive("/benefits") ? "text-faith-600" : "text-gray-600 hover:text-faith-600 transition"
            }`}
          >
            Benefits
          </Link>
          <Link
            href="/integrations"
            className={`text-sm font-medium ${
              isActive("/integrations") ? "text-faith-600" : "text-gray-600 hover:text-faith-600 transition"
            }`}
          >
            Integrations
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium ${
              isActive("/pricing") ? "text-faith-600" : "text-gray-600 hover:text-faith-600 transition"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium ${
              isActive("/blog") ? "text-faith-600" : "text-gray-600 hover:text-faith-600 transition"
            }`}
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-faith-600 border-faith-600 hover:bg-faith-50" asChild>
            <Link href="/auth">Login</Link>
          </Button>
          <Button className="bg-faith-600 hover:bg-faith-700 text-white" asChild>
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-faith-600">
                <User size={20} />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/auth">Login / Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4">
          <Link
            href="/"
            className={`text-sm font-medium p-2 ${isActive("/") ? "text-faith-600" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`text-sm font-medium p-2 ${isActive("/features") ? "text-faith-600" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/benefits"
            className={`text-sm font-medium p-2 ${isActive("/benefits") ? "text-faith-600" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href="/integrations"
            className={`text-sm font-medium p-2 ${isActive("/integrations") ? "text-faith-600" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Integrations
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium p-2 ${isActive("/pricing") ? "text-faith-600" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium p-2 ${isActive("/blog") ? "text-faith-600" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium p-2 ${isActive("/contact") ? "text-faith-600" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="flex flex-col space-y-2 pt-2 border-t">
            <Button variant="outline" className="text-faith-600 border-faith-600 hover:bg-faith-50 w-full" asChild>
              <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
                Login / Sign Up
              </Link>
            </Button>
            <Button className="bg-faith-600 hover:bg-faith-700 text-white w-full" asChild>
              <Link href="/book-demo" onClick={() => setIsMenuOpen(false)}>
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
