import React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechVision - Premium IT Services & Web Development",
  description:
    "Transform your business with premium IT services, web development, and digital solutions. Expert team delivering innovative technology for startups and enterprises.",
  keywords:
    "web development, IT services, web apps, UI/UX design, digital solutions, agency",
  generator: "v0.app",
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

/* ✅ Next.js 13+ correct viewport export */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}