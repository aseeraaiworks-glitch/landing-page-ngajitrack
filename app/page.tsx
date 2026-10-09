import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Audiences } from "@/components/audiences"
import { Status } from "@/components/status"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Audiences />
        <Status />
      </main>
      <SiteFooter />
    </>
  )
}
