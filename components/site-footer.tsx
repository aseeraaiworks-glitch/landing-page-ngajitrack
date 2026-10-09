import { ArrowUpRight } from "lucide-react"
import { AseeraLogo, NgajiTrackLogo } from "@/components/brand"

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Run a Qur&apos;an learning institution?
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/75">
              We&apos;d love to hear how you track progress today and what would help your educators most.
            </p>
          </div>
          <a
            href="https://aseerakarsa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Contact Aseera
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <NgajiTrackLogo className="text-primary-foreground" />
          <div className="flex items-center gap-3">
            <span>A product by</span>
            <a href="https://aseerakarsa.com" target="_blank" rel="noopener noreferrer" aria-label="Aseera website">
              <AseeraLogo />
            </a>
          </div>
          <p>{`© ${new Date().getFullYear()} Aseera. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  )
}
