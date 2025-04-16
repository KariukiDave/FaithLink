"use client"

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
import { MoreHorizontal, Edit, Trash, Eye, Bell } from "lucide-react"

const events = [
  {
    id: "e1",
    title: "Sunday Service",
    date: "Apr 16, 2023",
    time: "10:00 AM",
    location: "Main Sanctuary",
    rsvps: 145,
    status: "upcoming",
  },
  {
    id: "e2",
    title: "Bible Study",
    date: "Apr 18, 2023",
    time: "7:00 PM",
    location: "Fellowship Hall",
    rsvps: 28,
    status: "upcoming",
  },
  {
    id: "e3",
    title: "Youth Group",
    date: "Apr 19, 2023",
    time: "6:30 PM",
    location: "Youth Room",
    rsvps: 35,
    status: "upcoming",
  },
  {
    id: "e4",
    title: "Prayer Meeting",
    date: "Apr 20, 2023",
    time: "7:00 PM",
    location: "Chapel",
    rsvps: 12,
    status: "upcoming",
  },
  {
    id: "e5",
    title: "Worship Team Practice",
    date: "Apr 20, 2023",
    time: "8:00 PM",
    location: "Sanctuary",
    rsvps: 15,
    status: "upcoming",
  },
]

export function EventsList() {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead className="hidden md:table-cell">Date & Time</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead className="hidden md:table-cell">RSVPs</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm text-muted-foreground md:hidden">
                    {event.date} • {event.time}
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {event.date} • {event.time}
              </TableCell>
              <TableCell className="hidden md:table-cell">{event.location}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="outline">{event.rsvps}</Badge>
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
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Event
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell className="mr-2 h-4 w-4" />
                      Send Reminder
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Cancel Event
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
