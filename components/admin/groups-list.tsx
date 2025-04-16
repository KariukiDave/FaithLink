"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Users, MapPin, Calendar, Edit, Trash, Eye } from "lucide-react"

const groups = [
  {
    id: "g1",
    name: "Young Adults",
    type: "Ministry",
    leader: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    members: 24,
    location: "Fellowship Hall",
    meetingTime: "Wednesdays at 7:00 PM",
    status: "active",
  },
  {
    id: "g2",
    name: "Men's Bible Study",
    type: "Home Group",
    leader: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DW",
    },
    members: 18,
    location: "Room 201",
    meetingTime: "Saturdays at 8:00 AM",
    status: "active",
  },
  {
    id: "g3",
    name: "Women's Bible Study",
    type: "Home Group",
    leader: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    members: 15,
    location: "Room 105",
    meetingTime: "Tuesdays at 10:00 AM",
    status: "active",
  },
  {
    id: "g4",
    name: "Worship Team",
    type: "Ministry",
    leader: {
      name: "Lisa Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "LT",
    },
    members: 12,
    location: "Sanctuary",
    meetingTime: "Thursdays at 7:00 PM",
    status: "active",
  },
  {
    id: "g5",
    name: "Prayer Team",
    type: "Ministry",
    leader: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
    },
    members: 8,
    location: "Chapel",
    meetingTime: "Sundays at 9:00 AM",
    status: "active",
  },
]

export function GroupsList() {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Group Name</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead className="hidden md:table-cell">Leader</TableHead>
            <TableHead className="hidden md:table-cell">Members</TableHead>
            <TableHead className="hidden md:table-cell">Meeting Info</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups.map((group) => (
            <TableRow key={group.id}>
              <TableCell>
                <div className="font-medium">{group.name}</div>
                <div className="text-sm text-muted-foreground md:hidden">{group.type}</div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge
                  variant="outline"
                  className={
                    group.type === "Ministry"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                      : "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                  }
                >
                  {group.type}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={group.leader.avatar || "/placeholder.svg"} alt={group.leader.name} />
                    <AvatarFallback>{group.leader.initials}</AvatarFallback>
                  </Avatar>
                  <span>{group.leader.name}</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex items-center">
                  <Users className="mr-1 h-3 w-3 text-muted-foreground" />
                  <span>{group.members}</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex flex-col text-sm">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{group.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{group.meetingTime}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Group
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Group
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete Group
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
