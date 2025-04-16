import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter } from "lucide-react"
import { EventsList } from "@/components/admin/events-list"

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Events & Calendar</h1>
        <p className="text-muted-foreground">Manage church events, track RSVPs, and send reminders.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search events..."
            className="w-full min-w-[300px] rounded-md border border-input bg-background px-3 py-2 pl-8 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Tabs defaultValue="upcoming" className="col-span-2">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">Upcoming Events</CardTitle>
                <CardDescription>Showing the next 10 events</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <EventsList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">Past Events</CardTitle>
                <CardDescription>Showing events from the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <EventsList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="draft" className="space-y-4">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">Draft Events</CardTitle>
                <CardDescription>Events that are not yet published</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <EventsList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>View and manage events by date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
            <div className="mt-4 space-y-2">
              <h3 className="font-medium">Events on Selected Date</h3>
              <div className="rounded-md border p-3">
                <div className="font-medium">Sunday Service</div>
                <div className="text-sm text-muted-foreground">10:00 AM - Main Sanctuary</div>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium">Bible Study</div>
                <div className="text-sm text-muted-foreground">7:00 PM - Fellowship Hall</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
