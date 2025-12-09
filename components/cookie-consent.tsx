"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-8 md:left-8 md:right-auto md:max-w-md">
      <Card className="border-border bg-card p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-card-foreground">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. By
              clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={acceptCookies} size="sm">
                Accept All
              </Button>
              <Button onClick={declineCookies} variant="outline" size="sm">
                Decline
              </Button>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={declineCookies}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}
