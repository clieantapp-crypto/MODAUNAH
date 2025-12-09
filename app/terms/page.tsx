import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
              <p className="text-lg text-muted-foreground">Last updated: December 9, 2025</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By accessing and using TelecomInsights ("the Website"), you accept and agree to be bound by these
                  Terms of Service. If you do not agree to these terms, please do not use our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">2. Use of Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree
                  not to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Use the Website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any portion of the Website</li>
                  <li>Interfere with or disrupt the Website or servers</li>
                  <li>Use automated systems to access the Website without permission</li>
                  <li>Impersonate any person or entity</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">3. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Website and its original content, features, and functionality are owned by TelecomInsights and are
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any
                  content from the Website without our express written permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">4. User-Generated Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you post comments or other content on the Website, you grant us a non-exclusive, worldwide,
                  royalty-free license to use, reproduce, and display that content.
                </p>
                <p>You are responsible for the content you post and agree that it will not:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Be false, misleading, or defamatory</li>
                  <li>Infringe any intellectual property rights</li>
                  <li>Contain hate speech, harassment, or threats</li>
                  <li>Include spam or unauthorized advertising</li>
                  <li>Violate anyone's privacy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">5. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that the Website will be uninterrupted, secure, or error-free, or that defects will
                  be corrected.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TELECOMINSIGHTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
                  INCURRED DIRECTLY OR INDIRECTLY.
                </p>
                <p>
                  Our total liability for any claims related to the Website shall not exceed the amount you paid us in
                  the twelve months prior to the claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">7. Advertising and Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Website displays advertisements through Google Ads and may contain links to third-party websites.
                  We are not responsible for the content, privacy policies, or practices of third-party websites.
                </p>
                <p>
                  Advertisers are solely responsible for ensuring their ads comply with applicable laws. We reserve the
                  right to reject or remove any advertisement at our discretion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">8. Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You agree to indemnify and hold harmless TelecomInsights and its affiliates, officers, agents, and
                  employees from any claim, demand, loss, or damage, including reasonable attorneys' fees, arising out
                  of your use of the Website or violation of these Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We reserve the right to terminate or suspend your access to the Website immediately, without prior
                  notice, for any reason, including violation of these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Website will immediately cease. All provisions that should
                  reasonably survive termination shall survive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
                  without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or use of the Website shall be resolved in the courts of [Your
                  Jurisdiction].
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting
                  the new Terms on this page and updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of the Website after changes are posted constitutes your acceptance of the modified
                  Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>For questions about these Terms of Service, please contact us:</p>
                <ul className="space-y-2">
                  <li>Email: legal@telecominsights.com</li>
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
