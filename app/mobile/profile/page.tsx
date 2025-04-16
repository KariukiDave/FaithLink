import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Settings, Bell, HelpCircle, LogOut, Users, Calendar, Heart } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      <div className="faith-gradient p-4 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">My Profile</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 -mt-4">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">Sarah Johnson</h2>
                <p className="text-sm text-muted-foreground">Member since January 2022</p>
                <Button variant="link" className="p-0 h-auto text-faith-600">
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 space-y-4">
        <Tabs defaultValue="info" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="journey">Journey</TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span>sarah.j@example.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone</span>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Address</span>
                  <span>123 Faith St, Anytown</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Family</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Spouse</span>
                  <span>Michael Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Children</span>
                  <span>Emma (12), Noah (8)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Bell className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Notifications</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <HelpCircle className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Help & Support</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between py-2 text-destructive">
                  <div className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="groups" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">My Groups</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-faith-600" />
                    <div>
                      <p className="font-medium">Worship Team</p>
                      <p className="text-xs text-muted-foreground">Meets Thursdays at 7:00 PM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-faith-600" />
                    <div>
                      <p className="font-medium">Women's Bible Study</p>
                      <p className="text-xs text-muted-foreground">Meets Tuesdays at 10:00 AM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-faith-600" />
                    <div>
                      <p className="font-medium">Prayer Team</p>
                      <p className="text-xs text-muted-foreground">Meets Sundays at 9:00 AM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full">Browse All Groups</Button>
          </TabsContent>
          <TabsContent value="journey" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Discipleship Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Bible Reading Plan</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Prayer Challenge</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Serving Hours</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-faith-600" />
                    <div>
                      <p className="font-medium">Attended Sunday Service</p>
                      <p className="text-xs text-muted-foreground">April 7, 2023</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-faith-600" />
                    <div>
                      <p className="font-medium">Volunteered at Food Pantry</p>
                      <p className="text-xs text-muted-foreground">April 5, 2023</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-faith-600" />
                    <div>
                      <p className="font-medium">Joined Prayer Team</p>
                      <p className="text-xs text-muted-foreground">March 28, 2023</p>
                    </div>
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
