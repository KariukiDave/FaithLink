"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Users, MessageSquare } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "rsvp",
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    content: "RSVP'd to Sunday Service",
    time: "10 minutes ago",
    icon: Calendar,
  },
  {
    id: 2,
    type: "group",
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    content: "Joined Youth Ministry group",
    time: "1 hour ago",
    icon: Users,
  },
  {
    id: 3,
    type: "message",
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
    },
    content: "Sent a prayer request",
    time: "3 hours ago",
    icon: MessageSquare,
  },
  {
    id: 4,
    type: "rsvp",
    user: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DW",
    },
    content: "RSVP'd to Bible Study",
    time: "5 hours ago",
    icon: Calendar,
  },
  {
    id: 5,
    type: "group",
    user: {
      name: "Lisa Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "LT",
    },
    content: "Joined Worship Team",
    time: "Yesterday",
    icon: Users,
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-muted/50">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <activity.icon className="mr-1 h-3 w-3" />
              <span>{activity.content}</span>
            </div>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
