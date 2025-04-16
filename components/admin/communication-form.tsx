"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Check, Mail, MessageSquare, Phone } from "lucide-react"

export function CommunicationForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject/Title</Label>
            <Input id="subject" placeholder="Enter message subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="audience">Audience</Label>
            <Select>
              <SelectTrigger id="audience">
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Members</SelectItem>
                <SelectItem value="active">Active Members</SelectItem>
                <SelectItem value="leaders">Group Leaders</SelectItem>
                <SelectItem value="volunteers">Volunteers</SelectItem>
                <SelectItem value="youth">Youth Group</SelectItem>
                <SelectItem value="custom">Custom Group</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="message" className="space-y-4">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="message">
              <MessageSquare className="mr-2 h-4 w-4" />
              Message
            </TabsTrigger>
            <TabsTrigger value="email">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="sms">
              <Phone className="mr-2 h-4 w-4" />
              SMS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="message" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message-content">Message Content</Label>
              <Textarea id="message-content" placeholder="Type your message here" className="min-h-[200px]" />
            </div>
          </TabsContent>
          <TabsContent value="email" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-content">Email Content</Label>
              <Textarea id="email-content" placeholder="Type your email content here" className="min-h-[200px]" />
            </div>
          </TabsContent>
          <TabsContent value="sms" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sms-content">SMS Content</Label>
              <Textarea
                id="sms-content"
                placeholder="Type your SMS content here (160 characters max)"
                className="min-h-[100px]"
              />
              <p className="text-xs text-muted-foreground">0/160 characters</p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Send Options</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Send immediately" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="now">Send immediately</SelectItem>
                <SelectItem value="schedule">Schedule for later</SelectItem>
                <SelectItem value="draft">Save as draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Schedule Date/Time</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Pick a date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline">Save Draft</Button>
        <Button>
          <Check className="mr-2 h-4 w-4" />
          Send Message
        </Button>
      </div>
    </form>
  )
}
