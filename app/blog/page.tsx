import { Header } from "@/components/header"
import { AdSpace } from "@/components/ad-space"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Understanding 5G Network Architecture and Implementation",
      description:
        "A comprehensive guide to the technical aspects of 5G networks and their real-world deployment challenges.",
      category: "5G Technology",
      date: "Dec 8, 2025",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Fiber Optic vs Copper: The Infrastructure Debate",
      description:
        "Comparing the benefits, costs, and future prospects of fiber optic and traditional copper telecommunications infrastructure.",
      category: "Infrastructure",
      date: "Dec 7, 2025",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "IoT and Telecommunications: Enabling Smart Cities",
      description:
        "How telecom networks are powering the Internet of Things revolution and transforming urban environments.",
      category: "Innovation",
      date: "Dec 6, 2025",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Network Security in the Age of Cyber Threats",
      description:
        "Essential security practices and emerging threats facing telecommunications providers and their customers.",
      category: "Security",
      date: "Dec 5, 2025",
      readTime: "9 min read",
    },
    {
      id: 5,
      title: "The Economics of Telecom Infrastructure Investment",
      description:
        "Analyzing the financial considerations and return on investment for major telecommunications projects.",
      category: "Business",
      date: "Dec 4, 2025",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Edge Computing and its Impact on Telecom Networks",
      description: "Exploring how edge computing is changing network architecture and service delivery models.",
      category: "Technology",
      date: "Dec 3, 2025",
      readTime: "7 min read",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
                Telecom Industry Insights & Analysis
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Expert commentary, technical deep-dives, and industry news from the world of telecommunications
              </p>
              <div className="relative mx-auto max-w-xl">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Search articles..." className="pl-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Ad Section */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 py-8">
            <AdSpace className="h-[150px] w-full" />
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="border-b border-border">
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">All Articles</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Latest
                </Button>
                <Button variant="ghost" size="sm">
                  Popular
                </Button>
                <Button variant="ghost" size="sm">
                  Trending
                </Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <div key={post.id} className="space-y-6">
                  <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-3 flex items-center justify-between">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl text-balance text-card-foreground">{post.title}</CardTitle>
                      <CardDescription className="text-pretty leading-relaxed">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ad space every 3 posts */}
                  {(index + 1) % 3 === 0 && index !== posts.length - 1 && (
                    <AdSpace className="h-[250px] w-full md:col-span-2 lg:col-span-3" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
