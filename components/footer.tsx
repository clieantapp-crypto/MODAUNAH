import Link from "next/link"
import { Radio } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Radio className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">TelecomInsights</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for telecommunications industry news and analysis.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Content</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#latest" className="text-sm text-muted-foreground hover:text-foreground">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/#featured" className="text-sm text-muted-foreground hover:text-foreground">
                  Featured Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@telecominsights.com"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  info@telecominsights.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TelecomInsights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
