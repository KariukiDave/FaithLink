import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Search, Filter } from "lucide-react"
import { MembersList } from "@/components/admin/members-list"

export default function MembersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Members Management</h1>
        <p className="text-muted-foreground">Manage your church members, view profiles, and track attendance.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search members..."
            className="w-full min-w-[300px] appearance-none pl-8 shadow-none"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Members</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="new">New Visitors</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Members Directory</CardTitle>
              <CardDescription>Showing all 1,248 members</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <MembersList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Active Members</CardTitle>
              <CardDescription>Showing 986 active members</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <MembersList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Inactive Members</CardTitle>
              <CardDescription>Showing 262 inactive members</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <MembersList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">New Visitors</CardTitle>
              <CardDescription>Showing 24 new visitors in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <MembersList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
