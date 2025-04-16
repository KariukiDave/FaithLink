import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Settings, User, Shield, BellRing, Globe, Save } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your church management system settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">
            <Settings className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="account">
            <User className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="permissions">
            <Shield className="mr-2 h-4 w-4" />
            Permissions
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <BellRing className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <Globe className="mr-2 h-4 w-4" />
            Integrations
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Church Information</CardTitle>
              <CardDescription>Basic information about your church</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="church-name">Church Name</Label>
                  <Input id="church-name" defaultValue="Grace Community Church" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="church-email">Email Address</Label>
                  <Input id="church-email" defaultValue="info@gracecommunity.org" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="church-phone">Phone Number</Label>
                  <Input id="church-phone" defaultValue="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="church-website">Website</Label>
                  <Input id="church-website" defaultValue="https://gracecommunity.org" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="church-address">Address</Label>
                <Input id="church-address" defaultValue="123 Faith Street" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="church-city">City</Label>
                  <Input id="church-city" defaultValue="Anytown" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="church-state">State</Label>
                  <Input id="church-state" defaultValue="CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="church-zip">ZIP Code</Label>
                  <Input id="church-zip" defaultValue="12345" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>System Preferences</CardTitle>
              <CardDescription>Configure system-wide settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="timezone">Time Zone</Label>
                <Select defaultValue="america_los_angeles">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america_los_angeles">Pacific Time (US & Canada)</SelectItem>
                    <SelectItem value="america_denver">Mountain Time (US & Canada)</SelectItem>
                    <SelectItem value="america_chicago">Central Time (US & Canada)</SelectItem>
                    <SelectItem value="america_new_york">Eastern Time (US & Canada)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="mm_dd_yyyy">
                  <SelectTrigger id="date-format">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm_dd_yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dd_mm_yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="yyyy_mm_dd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the admin dashboard</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Manage your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="account-name">Full Name</Label>
                  <Input id="account-name" defaultValue="Pastor John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-email">Email Address</Label>
                  <Input id="account-email" defaultValue="pastor.john@gracecommunity.org" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-phone">Phone Number</Label>
                  <Input id="account-phone" defaultValue="(555) 987-6543" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-role">Role</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger id="account-role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="pastor">Pastor</SelectItem>
                      <SelectItem value="staff">Staff Member</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-bio">Bio</Label>
                <Input id="account-bio" defaultValue="Senior Pastor at Grace Community Church" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your account password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Roles & Permissions</CardTitle>
              <CardDescription>Manage access levels for different user roles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="font-medium">Administrator</div>
                  <p className="text-sm text-muted-foreground mb-2">Full access to all system features</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-members">Members Management</Label>
                      <Switch id="admin-members" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-groups">Groups Management</Label>
                      <Switch id="admin-groups" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-events">Events Management</Label>
                      <Switch id="admin-events" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-communication">Communication</Label>
                      <Switch id="admin-communication" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-reports">Reports & Analytics</Label>
                      <Switch id="admin-reports" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-settings">System Settings</Label>
                      <Switch id="admin-settings" defaultChecked />
                    </div>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="font-medium">Pastor</div>
                  <p className="text-sm text-muted-foreground mb-2">Access to most features except system settings</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pastor-members">Members Management</Label>
                      <Switch id="pastor-members" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pastor-groups">Groups Management</Label>
                      <Switch id="pastor-groups" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pastor-events">Events Management</Label>
                      <Switch id="pastor-events" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pastor-communication">Communication</Label>
                      <Switch id="pastor-communication" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pastor-reports">Reports & Analytics</Label>
                      <Switch id="pastor-reports" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pastor-settings">System Settings</Label>
                      <Switch id="pastor-settings" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="font-medium">Email Notifications</div>
                  <p className="text-sm text-muted-foreground mb-2">Configure email notification preferences</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-new-member">New Member Registrations</Label>
                      <Switch id="email-new-member" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-event-rsvp">Event RSVPs</Label>
                      <Switch id="email-event-rsvp" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-group-request">Group Join Requests</Label>
                      <Switch id="email-group-request" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-prayer-request">Prayer Requests</Label>
                      <Switch id="email-prayer-request" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-system-updates">System Updates</Label>
                      <Switch id="email-system-updates" />
                    </div>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="font-medium">SMS Notifications</div>
                  <p className="text-sm text-muted-foreground mb-2">Configure SMS notification preferences</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-new-member">New Member Registrations</Label>
                      <Switch id="sms-new-member" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-event-rsvp">Event RSVPs</Label>
                      <Switch id="sms-event-rsvp" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-group-request">Group Join Requests</Label>
                      <Switch id="sms-group-request" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-prayer-request">Prayer Requests</Label>
                      <Switch id="sms-prayer-request" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-system-updates">System Updates</Label>
                      <Switch id="sms-system-updates" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Integrations</CardTitle>
              <CardDescription>Connect with external services and platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">WhatsApp Business API</div>
                      <p className="text-sm text-muted-foreground">Connect to send messages via WhatsApp</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">YouTube API</div>
                      <p className="text-sm text-muted-foreground">Connect to embed and share sermons</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Spotify API</div>
                      <p className="text-sm text-muted-foreground">Connect to embed and share podcasts</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Payment Gateway</div>
                      <p className="text-sm text-muted-foreground">Connect to process donations and payments</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Google Calendar</div>
                      <p className="text-sm text-muted-foreground">Sync events with Google Calendar</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
