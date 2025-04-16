import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Plus } from "lucide-react"
import { GroupsList } from "@/components/admin/groups-list"

export default function GroupsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Small Groups</h1>
        <p className="text-muted-foreground">Manage church groups, track attendance, and monitor engagement.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search groups..."
            className="w-full min-w-[300px] appearance-none pl-8 shadow-none"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Group
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Groups</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="home">Home Groups</TabsTrigger>
          <TabsTrigger value="ministry">Ministries</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Groups Directory</CardTitle>
              <CardDescription>Showing all 42 groups</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <GroupsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Active Groups</CardTitle>
              <CardDescription>Showing 38 active groups</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <GroupsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="home" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Home Groups</CardTitle>
              <CardDescription>Showing 24 home groups</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <GroupsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ministry" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Ministries</CardTitle>
              <CardDescription>Showing 18 ministries</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <GroupsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
