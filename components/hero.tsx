"use client"

import { ArrowRight } from "lucide-react"
import { ProgressPreview } from "@/components/progress-preview"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 md:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-primary-foreground/90">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t.hero.badge}
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.hero.titleLead} <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">{t.hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.primary}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <ProgressPreview />
      </div>
    </section>
  )
}
