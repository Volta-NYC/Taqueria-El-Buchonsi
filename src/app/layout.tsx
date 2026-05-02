import type { Metadata } from "next"

import "./globals.css"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { site } from "@/data/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.sourceUrl),
  title: {
    default: `${site.name} | Mexican Restaurant in Staten Island`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Mexican Restaurant in Staten Island`,
    description: site.description,
    images: ["/taqueria-el-buchon-foods-08.jpg"],
    url: site.sourceUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Mexican Restaurant in Staten Island`,
    description: site.description,
    images: ["/taqueria-el-buchon-foods-08.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[color:var(--color-cream)] text-[color:var(--color-ink)] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
