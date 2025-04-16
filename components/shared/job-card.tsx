import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, ChevronRight } from "lucide-react"

interface JobCardProps {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

export function JobCard({ id, title, department, location, type, description }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="flex items-center gap-1 bg-faith-100 text-faith-700 hover:bg-faith-100">
                <Briefcase className="h-3 w-3" />
                {department}
              </Badge>
              <Badge className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-100">
                <MapPin className="h-3 w-3" />
                {location}
              </Badge>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="md:ml-4">
            <Button className="bg-faith-600 hover:bg-faith-700 text-white whitespace-nowrap" asChild>
              <Link href={`/careers/${id}`}>
                View Details
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
