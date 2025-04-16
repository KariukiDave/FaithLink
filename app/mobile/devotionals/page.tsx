import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, ChevronRight, Heart, Share2 } from "lucide-react"

export default function DevotionalsPage() {
  return (
    <div className="flex flex-col">
      <div className="faith-gradient p-4 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Daily Devotionals</h1>
        </div>
        <p className="text-sm text-white/80 mt-1">Grow in your faith daily</p>
      </div>

      <div className="p-4 space-y-4">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-faith-600 mr-2" />
                <span className="text-sm text-muted-foreground">Today's Reading</span>
              </div>
              <span className="text-sm font-medium">April 10, 2023</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Finding Peace in Chaos</h2>
            <p className="text-sm text-muted-foreground mb-3">Philippians 4:6-7</p>
            <div className="text-sm mb-4">
              <p className="mb-2">
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving,
                present your requests to God. And the peace of God, which transcends all understanding, will guard your
                hearts and your minds in Christ Jesus."
              </p>
              <p>
                In today's fast-paced world, anxiety can easily overwhelm us. But God offers a better way - bringing our
                concerns to Him in prayer and receiving His peace that surpasses understanding.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-faith-600">
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button variant="ghost" size="sm" className="text-faith-600">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="daily" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="plans">Reading Plans</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          <TabsContent value="daily" className="space-y-4">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>April 9, 2023</span>
                      </div>
                      <h3 className="font-medium">Trusting God's Timing</h3>
                      <p className="text-xs text-muted-foreground">Ecclesiastes 3:1-8</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>April 8, 2023</span>
                      </div>
                      <h3 className="font-medium">The Power of Gratitude</h3>
                      <p className="text-xs text-muted-foreground">1 Thessalonians 5:16-18</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>April 7, 2023</span>
                      </div>
                      <h3 className="font-medium">Living with Purpose</h3>
                      <p className="text-xs text-muted-foreground">Jeremiah 29:11-13</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="plans" className="space-y-4">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">30 Days of Prayer</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <BookOpen className="mr-1 h-3 w-3" />
                        <span>30 days • 65% complete</span>
                      </div>
                    </div>
                    <Button size="sm">Continue</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">Psalms for Comfort</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <BookOpen className="mr-1 h-3 w-3" />
                        <span>21 days • Not started</span>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">New Testament in 90 Days</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <BookOpen className="mr-1 h-3 w-3" />
                        <span>90 days • Not started</span>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="saved" className="space-y-4">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>March 15, 2023</span>
                      </div>
                      <h3 className="font-medium">The Good Shepherd</h3>
                      <p className="text-xs text-muted-foreground">Psalm 23</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>February 28, 2023</span>
                      </div>
                      <h3 className="font-medium">Faith Over Fear</h3>
                      <p className="text-xs text-muted-foreground">Isaiah 41:10</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
