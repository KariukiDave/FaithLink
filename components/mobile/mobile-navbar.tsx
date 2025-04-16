"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Calendar, BookOpen, User } from "lucide-react"
import { cn } from "@/lib/utils"

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/mobile",
  },
  {
    label: "Groups",
    icon: Users,
    href: "/mobile/groups",
  },
  {
    label: "Events",
    icon: Calendar,
    href: "/mobile/events",
  },
  {
    label: "Devotionals",
    icon: BookOpen,
    href: "/mobile/devotionals",
  },
  {
    label: "Profile",
    icon: User,
    href: "/mobile/profile",
  },
]

export function MobileNavbar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex h-full w-full flex-col items-center justify-center space-y-1",
            pathname === route.href ? "text-faith-600" : "text-muted-foreground hover:text-faith-600",
          )}
        >
          <route.icon className="h-5 w-5" />
          <span className="text-xs">{route.label}</span>
        </Link>
      ))}
    </div>
  )
}
