"use client"

import { NgajiTrackLogo } from "@/components/brand"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"

export function SiteHeader() {
  const { t } = useLanguage()
  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#audiences", label: t.nav.audiences },
    { href: "#status", label: t.nav.status },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 text-primary-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <a href="#top" aria-label={t.nav.home}>
          <NgajiTrackLogo />
        </a>
        <nav aria-label={t.nav.primary} className="hidden items-center gap-8 text-sm text-primary-foreground/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
