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
import { MoreHorizontal, Copy, BarChart2, Trash, Eye } from "lucide-react"

const messages = [
  {
    id: "m1",
    subject: "Sunday Service Reminder",
    date: "Apr 14, 2023",
    time: "8:00 AM",
    type: "email",
    audience: "All Members",
    status: "sent",
    opens: 423,
    clicks: 156,
  },
  {
    id: "m2",
    subject: "Prayer Meeting Tonight",
    date: "Apr 13, 2023",
    time: "2:00 PM",
    type: "sms",
    audience: "Prayer Team",
    status: "sent",
    opens: 18,
    clicks: 5,
  },
  {
    id: "m3",
    subject: "Volunteer Sign-up for Easter",
    date: "Apr 10, 2023",
    time: "10:30 AM",
    type: "email",
    audience: "Active Members",
    status: "sent",
    opens: 312,
    clicks: 87,
  },
  {
    id: "m4",
    subject: "Youth Camp Registration",
    date: "Apr 8, 2023",
    time: "3:15 PM",
    type: "app",
    audience: "Youth Group",
    status: "sent",
    opens: 45,
    clicks: 32,
  },
  {
    id: "m5",
    subject: "Weekly Newsletter",
    date: "Apr 7, 2023",
    time: "9:00 AM",
    type: "email",
    audience: "All Members",
    status: "sent",
    opens: 398,
    clicks: 124,
  },
]

export function MessageHistory() {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead className="hidden md:table-cell">Date & Time</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead className="hidden md:table-cell">Audience</TableHead>
            <TableHead className="hidden md:table-cell">Stats</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => (
            <TableRow key={message.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{message.subject}</div>
                  <div className="text-sm text-muted-foreground md:hidden">
                    {message.date} • {message.type}
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {message.date} • {message.time}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge
                  variant="outline"
                  className={
                    message.type === "email"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                      : message.type === "sms"
                        ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                        : "bg-purple-100 text-purple-800 hover:bg-purple-100 hover:text-purple-800"
                  }
                >
                  {message.type}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{message.audience}</TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="text-sm">
                  <span className="font-medium">{message.opens}</span> opens •{" "}
                  <span className="font-medium">{message.clicks}</span> clicks
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
                      View Message
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BarChart2 className="mr-2 h-4 w-4" />
                      View Analytics
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
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
