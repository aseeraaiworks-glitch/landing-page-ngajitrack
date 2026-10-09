import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const SITE_URL = "https://ngajitrack.aseerakarsa.com"
const title = "NgajiTrack — Sistem Manajemen Pembelajaran Al-Qur’an"
const description =
  "NgajiTrack adalah Sistem Manajemen Pembelajaran Al-Qur’an tahap awal yang sedang dikembangkan untuk membantu lembaga memantau perkembangan Tahfiz dan Iqra. Tersedia dalam Bahasa Indonesia dan English."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: SITE_URL, siteName: "NgajiTrack", type: "website", locale: "id_ID", alternateLocale: ["en_US"] },
  twitter: { card: "summary", title, description },
}
export const viewport: Viewport = { themeColor: "#173C2D" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
