import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const SITE_URL = "https://ngajitrack.aseerakarsa.com"
const title = "NgajiTrack — Qur’an Learning Management"
const description =
  "NgajiTrack is an early-stage Qur’an Learning Management System, in development, to help Qur’an learning institutions track Tahfiz and Iqra progress and keep educators, leaders and guardians informed."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: SITE_URL, siteName: "NgajiTrack", type: "website", locale: "en_US", alternateLocale: ["id_ID"] },
  twitter: { card: "summary", title, description },
}
export const viewport: Viewport = { themeColor: "#173C2D" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
