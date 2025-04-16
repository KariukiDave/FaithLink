import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const announcements = [
  {
    id: 1,
    title: "Volunteer Sign-up for Easter Service",
    content: "We need volunteers for our Easter service. Please sign up at the welcome desk or through the app.",
    date: "2 hours ago",
    author: {
      name: "Pastor John",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PJ",
    },
  },
  {
    id: 2,
    title: "Youth Camp Registration Open",
    content: "Registration for summer youth camp is now open. Early bird pricing ends May 1st.",
    date: "Yesterday",
    author: {
      name: "Youth Ministry",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "YM",
    },
  },
]

export function MobileAnnouncements() {
  return (
    <div className="space-y-3">
      {announcements.map((announcement) => (
        <Card key={announcement.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={announcement.author.avatar || "/placeholder.svg"} alt={announcement.author.name} />
                <AvatarFallback>{announcement.author.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{announcement.title}</h3>
                  <span className="text-xs text-muted-foreground">{announcement.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{announcement.content}</p>
                <div className="text-xs text-faith-600 mt-2">From: {announcement.author.name}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
