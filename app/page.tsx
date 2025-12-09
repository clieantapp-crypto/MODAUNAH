import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { AdSpace } from "@/components/ad-space"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Radio, Signal, Wifi, Smartphone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredPosts = [
    {
      id: 1,
      title: "5G Network Rollout Accelerates Across Major Cities",
      description:
        "Leading telecom providers are expanding 5G infrastructure at an unprecedented pace, bringing ultra-fast connectivity to millions.",
      category: "5G Technology",
      date: "Dec 8, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Future of Fiber Optic Networks in Rural Areas",
      description:
        "Analyzing government initiatives and private investments bringing high-speed internet to underserved communities.",
      category: "Infrastructure",
      date: "Dec 7, 2025",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Satellite Internet: Bridging the Digital Divide",
      description:
        "How low-earth orbit satellite constellations are revolutionizing global internet access and connectivity.",
      category: "Innovation",
      date: "Dec 6, 2025",
      readTime: "6 min read",
    },
  ]

  const categories = [
    { name: "5G Networks", icon: Signal, count: 24 },
    { name: "Infrastructure", icon: Radio, count: 18 },
    { name: "Wireless Tech", icon: Wifi, count: 31 },
    { name: "Mobile Devices", icon: Smartphone, count: 15 },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-primary text-primary-foreground">Latest Industry News</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
                  The Future of Telecommunications
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Stay ahead with in-depth analysis, breaking news, and expert insights on the rapidly evolving
                  telecommunications industry.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/blog">
                      Explore Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/#latest">Latest Updates</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center">
                <AdSpace className="h-[400px] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="border-b border-border bg-card">
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Card key={category.name} className="transition-colors hover:bg-accent">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-card-foreground">{category.name}</CardTitle>
                    <CardDescription>{category.count} articles</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section id="featured" className="border-b border-border">
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="mb-12 space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
              <p className="text-lg text-muted-foreground">Deep dives into the most important telecom topics</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="flex flex-col transition-shadow hover:shadow-lg">
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
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Section */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 py-8">
            <AdSpace className="h-[200px] w-full" />
          </div>
        </section>

        {/* Latest News */}
        <section id="latest" className="border-b border-border">
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground">Latest Updates</h2>
              <Button variant="outline" asChild>
                <Link href="/blog">View All</Link>
              </Button>
            </div>

            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">News</Badge>
                          <span className="text-sm text-muted-foreground">Dec {9 - i}, 2025</span>
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          Telecom Industry Update: Major Developments This Week
                        </h3>
                        <p className="text-muted-foreground">
                          Breaking down the latest announcements and their impact on the telecommunications landscape.
                        </p>
                      </div>
                      <Button variant="ghost" className="shrink-0">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  )
}
