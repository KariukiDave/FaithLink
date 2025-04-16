import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, MapPin, Clock, ChevronRight } from "lucide-react"

export default function GroupsPage() {
  return (
    <div className="flex flex-col">
      <div className="faith-gradient p-4 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Groups</h1>
        </div>
        <p className="text-sm text-white/80 mt-1">Connect with others in community</p>
      </div>

      <div className="px-4 -mt-4">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search groups..." className="w-full pl-8" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 space-y-4">
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="all">All Groups</TabsTrigger>
            <TabsTrigger value="my">My Groups</TabsTrigger>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Young Adults</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>24 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Fellowship Hall</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Wednesdays at 7:00 PM</span>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Men's Bible Study</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>18 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Room 201</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Saturdays at 8:00 AM</span>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Worship Team</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>12 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Sanctuary</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Thursdays at 7:00 PM</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Joined
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="my" className="space-y-4">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Worship Team</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>12 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Thursdays at 7:00 PM</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Women's Bible Study</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>15 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Tuesdays at 10:00 AM</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Prayer Team</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>8 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Sundays at 9:00 AM</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="suggested" className="space-y-4">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Missions Team</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>16 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Room 105</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>First Monday at 6:30 PM</span>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Hospitality Team</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Users className="mr-1 h-3 w-3" />
                        <span>22 members</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Fellowship Hall</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Third Sunday at 12:00 PM</span>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
