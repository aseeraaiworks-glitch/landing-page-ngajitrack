import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Audiences } from "@/components/audiences"
import { Status } from "@/components/status"
import { SiteFooter } from "@/components/site-footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Audiences />
        <Status />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
