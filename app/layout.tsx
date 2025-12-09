import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TelecomInsights - Latest Telecommunications News & Analysis",
  description:
    "Stay informed with the latest telecom industry news, 5G technology updates, network infrastructure insights, and telecommunications analysis.",
  keywords: ["telecom", "telecommunications", "5G", "network infrastructure", "wireless technology", "telecom news"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
