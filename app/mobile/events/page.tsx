import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      <div className="faith-gradient p-4 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Events</h1>
        </div>
        <p className="text-sm text-white/80 mt-1">Upcoming church events and activities</p>
      </div>

      <div className="p-4 space-y-4">
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-faith-100 text-faith-700 rounded-lg p-2 w-14 h-14">
                      <span className="text-sm font-semibold">SUN</span>
                      <span className="text-lg font-bold">16</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Sunday Service</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>10:00 AM</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Main Sanctuary</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>145 attending</span>
                      </div>
                    </div>
                    <Button size="sm">RSVP</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-faith-100 text-faith-700 rounded-lg p-2 w-14 h-14">
                      <span className="text-sm font-semibold">TUE</span>
                      <span className="text-lg font-bold">18</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Bible Study</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>7:00 PM</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Fellowship Hall</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>28 attending</span>
                      </div>
                    </div>
                    <Button size="sm">RSVP</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-faith-100 text-faith-700 rounded-lg p-2 w-14 h-14">
                      <span className="text-sm font-semibold">WED</span>
                      <span className="text-lg font-bold">19</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Youth Group</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>6:30 PM</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Youth Room</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>35 attending</span>
                      </div>
                    </div>
                    <Button size="sm">RSVP</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="mb-4">
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className={`
                          aspect-square flex items-center justify-center rounded-full text-sm
                          ${i === 15 ? "bg-faith-500 text-white" : "hover:bg-faith-50"}
                          ${[2, 4, 9, 15, 16, 18, 19, 23, 30].includes(i) ? "font-bold" : ""}
                        `}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Events on April 16</h3>
                  <div className="rounded-md border p-3">
                    <div className="font-medium">Sunday Service</div>
                    <div className="text-sm text-muted-foreground">10:00 AM - Main Sanctuary</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
