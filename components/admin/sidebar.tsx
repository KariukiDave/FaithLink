"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Users,
  Home,
  Calendar,
  BarChart3,
  MessageSquare,
  Settings,
  UserCircle,
  LogOut,
  Menu,
  Users2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/admin",
    color: "text-faith-500",
  },
  {
    label: "Members",
    icon: Users,
    href: "/admin/members",
    color: "text-faith-500",
  },
  {
    label: "Small Groups",
    icon: Users2,
    href: "/admin/groups",
    color: "text-faith-500",
  },
  {
    label: "Communication",
    icon: MessageSquare,
    href: "/admin/communication",
    color: "text-faith-500",
  },
  {
    label: "Events",
    icon: Calendar,
    href: "/admin/events",
    color: "text-faith-500",
  },
  {
    label: "Reports",
    icon: BarChart3,
    href: "/admin/reports",
    color: "text-faith-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
    color: "text-faith-500",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden absolute left-4 top-4 z-50">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 pt-10 w-72">
          <div className="space-y-4 py-4 flex flex-col h-full">
            <div className="px-3 py-2 flex-1">
              <div className="space-y-1">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-faith-700 hover:bg-faith-50 rounded-lg transition",
                      pathname === route.href ? "text-faith-700 bg-faith-50" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-3 py-2 border-t">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="rounded-full bg-faith-100 p-1">
                  <UserCircle className="h-8 w-8 text-faith-700" />
                </div>
                <div>
                  <p className="text-sm font-medium">Pastor John Doe</p>
                  <p className="text-xs text-muted-foreground">Admin</p>
                </div>
              </div>
              <Button variant="ghost" className="w-full justify-start mt-2 text-muted-foreground">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex flex-col h-screen w-64 border-r bg-white">
        <div className="space-y-4 py-4 flex flex-col h-full">
          <div className="px-3 py-2 flex-1">
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-faith-700 hover:bg-faith-50 rounded-lg transition",
                    pathname === route.href ? "text-faith-700 bg-faith-50" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="px-3 py-2 border-t">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="rounded-full bg-faith-100 p-1">
                <UserCircle className="h-8 w-8 text-faith-700" />
              </div>
              <div>
                <p className="text-sm font-medium">Pastor John Doe</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start mt-2 text-muted-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
