import type React from "react"
import { MobileNavbar } from "@/components/mobile/mobile-navbar"

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto pb-16">{children}</div>
      <MobileNavbar />
    </div>
  )
}
