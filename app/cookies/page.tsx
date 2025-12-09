import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Cookie Policy</h1>
              <p className="text-lg text-muted-foreground">Last updated: December 9, 2025</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They help
                  websites remember your preferences and improve your browsing experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how you use our website</li>
                  <li>To deliver relevant advertisements</li>
                  <li>To ensure the security of our website</li>
                  <li>To improve our content and services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation and access to secure areas. The website cannot function properly without these
                    cookies.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Analytics Cookies</h3>
                  <p>
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. We use Google Analytics to track page views, bounce rates, and user
                    behavior.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Advertising Cookies</h3>
                  <p>
                    These cookies are used to deliver advertisements that are relevant to you. They also limit the
                    number of times you see an ad and help measure the effectiveness of advertising campaigns. We use
                    Google Ads for advertising purposes.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Preference Cookies</h3>
                  <p>
                    These cookies enable the website to remember choices you make (such as your language or region) and
                    provide enhanced, more personal features.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We use third-party services that may set cookies on your device:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Google Analytics:</strong> Used to track website usage and performance
                  </li>
                  <li>
                    <strong>Google Ads:</strong> Used to display personalized advertisements
                  </li>
                  <li>
                    <strong>Social Media Platforms:</strong> May set cookies when you interact with social sharing
                    buttons
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Cookie Consent Banner:</strong> Use our cookie consent banner to accept or decline
                    non-essential cookies
                  </li>
                  <li>
                    <strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete cookies that
                    have already been set
                  </li>
                  <li>
                    <strong>Opt-Out Tools:</strong> Use tools like Google's Ad Settings to opt out of personalized
                    advertising
                  </li>
                </ul>
                <p className="mt-4">
                  Please note that blocking certain cookies may impact your experience on our website and limit the
                  functionality of some features.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Browser-Specific Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>To manage cookies in your browser, please visit:</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or
                  our business practices. Please check this page regularly for updates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>If you have questions about our use of cookies, please contact us:</p>
                <ul className="space-y-2">
                  <li>Email: privacy@telecominsights.com</li>
                  <li>Website: www.telecominsights.com/contact</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
