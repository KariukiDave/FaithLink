import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Send, Users, Calendar, FileText, PlusCircle } from "lucide-react"
import { CommunicationForm } from "@/components/admin/communication-form"
import { MessageHistory } from "@/components/admin/message-history"

export default function CommunicationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Communication Center</h1>
        <p className="text-muted-foreground">
          Send announcements, messages, and manage communication with your church.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Compose Message</CardTitle>
            <CardDescription>Create and send messages to your church members</CardDescription>
          </CardHeader>
          <CardContent>
            <CommunicationForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used communication tools</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Button variant="outline" className="justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Send Email Newsletter
              </Button>
              <Button variant="outline" className="justify-start">
                <Phone className="mr-2 h-4 w-4" />
                Send SMS Reminder
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="mr-2 h-4 w-4" />
                Message Group Leaders
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Event Announcement
              </Button>
              <Button variant="outline" className="justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Create Feedback Form
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Message Templates</CardTitle>
              <CardDescription>Saved templates for quick messaging</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <div className="font-medium">Welcome Message</div>
                  <div className="text-sm text-muted-foreground">For new members</div>
                </div>
                <Button variant="ghost" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <div className="font-medium">Event Reminder</div>
                  <div className="text-sm text-muted-foreground">24h before event</div>
                </div>
                <Button variant="ghost" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <div className="font-medium">Weekly Update</div>
                  <div className="text-sm text-muted-foreground">Church announcements</div>
                </div>
                <Button variant="ghost" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full mt-2">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Template
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Message History</CardTitle>
          <CardDescription>View and manage past communications</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Messages</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="sms">SMS</TabsTrigger>
              <TabsTrigger value="app">In-App</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <MessageHistory />
            </TabsContent>
            <TabsContent value="email">
              <MessageHistory />
            </TabsContent>
            <TabsContent value="sms">
              <MessageHistory />
            </TabsContent>
            <TabsContent value="app">
              <MessageHistory />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
