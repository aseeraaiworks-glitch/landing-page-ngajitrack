"use client"

import { ArrowUpRight, Mail } from "lucide-react"
import { AseeraLogo, NgajiTrackLogo } from "@/components/brand"
import { useLanguage } from "@/components/language-provider"
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{t.footer.title}</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/75">{t.footer.body}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/85 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
            >
              <Mail className="size-4" aria-hidden="true" />
              <span className="sr-only">{t.footer.emailLabel}: </span>
              {CONTACT_EMAIL}
            </a>
          </div>
          <a
            href={whatsappUrl(t.footer.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.ctaLabel}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {t.footer.cta}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <NgajiTrackLogo className="text-primary-foreground" />
          <div className="flex items-center gap-3">
            <span>{t.footer.byline}</span>
            <a href="https://aseerakarsa.com" target="_blank" rel="noopener noreferrer" aria-label={t.footer.website}>
              <AseeraLogo />
            </a>
          </div>
          <p>{`© ${new Date().getFullYear()} Aseera. ${t.footer.rights}`}</p>
        </div>
      </div>
    </footer>
  )
}
