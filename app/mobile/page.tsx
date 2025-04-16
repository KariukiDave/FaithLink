import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, ChevronRight, Users, Calendar, BookOpen, Video } from "lucide-react"
import { MobileAnnouncements } from "@/components/mobile/mobile-announcements"

export default function MobileHome() {
  return (
    <div className="flex flex-col">
      <div className="faith-gradient p-4 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center text-faith-700 font-bold">
                F
              </div>
            </div>
            <h1 className="text-xl font-bold text-white">FaithLink</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-6 text-white">
          <h2 className="text-2xl font-bold">Welcome, Sarah!</h2>
          <p className="text-sm text-white/80">May God bless your day</p>
        </div>
      </div>

      <div className="px-4 -mt-4">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto flex-col items-center justify-center py-4 space-y-2">
                <Users className="h-6 w-6 text-faith-600" />
                <span>My Groups</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-center justify-center py-4 space-y-2">
                <Calendar className="h-6 w-6 text-faith-600" />
                <span>Events</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-center justify-center py-4 space-y-2">
                <BookOpen className="h-6 w-6 text-faith-600" />
                <span>Devotionals</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col items-center justify-center py-4 space-y-2">
                <Video className="h-6 w-6 text-faith-600" />
                <span>Sermons</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Latest Announcements</h2>
          <Button variant="ghost" size="sm" className="text-faith-600">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <MobileAnnouncements />

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
          <Card className="mb-3">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center bg-faith-100 text-faith-700 rounded-lg p-2 w-14 h-14">
                  <span className="text-sm font-semibold">SUN</span>
                  <span className="text-lg font-bold">12</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Sunday Service</h3>
                  <p className="text-sm text-muted-foreground">10:00 AM - Main Sanctuary</p>
                </div>
                <Button variant="outline" size="sm">
                  RSVP
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-3">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center bg-faith-100 text-faith-700 rounded-lg p-2 w-14 h-14">
                  <span className="text-sm font-semibold">TUE</span>
                  <span className="text-lg font-bold">14</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Bible Study</h3>
                  <p className="text-sm text-muted-foreground">7:00 PM - Fellowship Hall</p>
                </div>
                <Button variant="outline" size="sm">
                  RSVP
                </Button>
              </div>
            </CardContent>
          </Card>
          <Button variant="outline" className="w-full">
            View All Events
          </Button>
        </div>
      </div>
    </div>
  )
}
