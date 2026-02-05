import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TechVision - Premium IT Services & Web Development',
  description: 'Transform your business with premium IT services, web development, and digital solutions. Expert team delivering innovative technology for startups and enterprises.',
  keywords: 'web development, IT services, web apps, UI/UX design, digital solutions, agency',
  generator: 'v0.app',
  icons: {
    icon: '/techvision-logo.jpg',
    shortcut: '/techvision-logo.jpg',
    apple: '/techvision-logo.jpg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body  suppressHydrationWarning className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
