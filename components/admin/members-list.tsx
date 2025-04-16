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
import { MoreHorizontal, Mail, Phone, Edit, Trash, Eye } from "lucide-react"

const members = [
  {
    id: "m1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 123-4567",
    status: "active",
    group: "Worship Team",
    joinDate: "Jan 15, 2022",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SJ",
  },
  {
    id: "m2",
    name: "Michael Chen",
    email: "michael.c@example.com",
    phone: "(555) 234-5678",
    status: "active",
    group: "Youth Ministry",
    joinDate: "Mar 3, 2021",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
  },
  {
    id: "m3",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "(555) 345-6789",
    status: "active",
    group: "Prayer Team",
    joinDate: "Nov 12, 2022",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "ER",
  },
  {
    id: "m4",
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "(555) 456-7890",
    status: "inactive",
    group: "Bible Study",
    joinDate: "Jun 7, 2020",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DW",
  },
  {
    id: "m5",
    name: "Lisa Thompson",
    email: "lisa.t@example.com",
    phone: "(555) 567-8901",
    status: "active",
    group: "Worship Team",
    joinDate: "Feb 22, 2023",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "LT",
  },
  {
    id: "m6",
    name: "James Martin",
    email: "james.m@example.com",
    phone: "(555) 678-9012",
    status: "new",
    group: "None",
    joinDate: "Apr 5, 2023",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JM",
  },
]

export function MembersList() {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Contact</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Group</TableHead>
            <TableHead className="hidden md:table-cell">Join Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground md:hidden">{member.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Mail className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge
                  variant={
                    member.status === "active" ? "default" : member.status === "inactive" ? "secondary" : "outline"
                  }
                  className={
                    member.status === "active"
                      ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                      : member.status === "inactive"
                        ? "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                  }
                >
                  {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{member.group}</TableCell>
              <TableCell className="hidden md:table-cell">{member.joinDate}</TableCell>
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
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Member
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete Member
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
