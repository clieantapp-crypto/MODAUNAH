import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">Last updated: December 9, 2025</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Name and contact information when you subscribe to our newsletter</li>
                  <li>Comments and feedback you provide on our blog posts</li>
                  <li>Information collected through cookies and similar technologies</li>
                  <li>Usage data and analytics about how you interact with our website</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you newsletters and updates (with your consent)</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Display relevant advertisements through Google Ads</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">3. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain
                  information. Types of cookies we use:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Used to deliver relevant advertisements through Google Ads
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your preferences and settings
                  </li>
                </ul>
                <p>You can control cookie preferences through our cookie consent banner or your browser settings.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">4. Google Ads and Third-Party Advertising</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We use Google Ads to display advertisements on our website. Google may use cookies to serve ads based
                  on your prior visits to our website or other websites. You can opt out of personalized advertising by
                  visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Ads Settings
                  </a>
                  .
                </p>
                <p>
                  Third-party vendors, including Google, may use cookies to serve ads based on your past visits to this
                  website. This allows them to show you relevant advertisements across the web.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">5. Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Service providers who assist in operating our website</li>
                  <li>Analytics providers like Google Analytics</li>
                  <li>Advertising partners like Google Ads</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">6. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information. However, no method of transmission over the Internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">7. Your Rights (GDPR/CCPA)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p>To exercise these rights, please contact us at privacy@telecominsights.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you believe we have collected information from a child under
                  13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">9. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure appropriate safeguards are in place to protect your information in compliance
                  with this Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
