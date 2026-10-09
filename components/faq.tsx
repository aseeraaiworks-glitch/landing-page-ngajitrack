"use client"

import { ChevronDown, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL } from "@/lib/i18n"

export function Faq() {
  const { t } = useLanguage()
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.faq.pilotSubject)}`

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-16 border-t border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <div>
            <p className="text-sm font-medium text-chart-2">{t.faq.eyebrow}</p>
            <h2 id="faq-heading" className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {t.faq.h}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.faq.body}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="font-medium">{t.faq.moreTitle}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.faq.moreBody}</p>
            <Button render={<a href={mailto} />} nativeButton={false} size="lg" className="mt-4 px-4">
              <Mail aria-hidden="true" />
              {t.faq.pilotCta}
            </Button>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group px-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium outline-none focus-visible:underline">
                <span className="text-pretty">{item.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="whitespace-pre-line pb-5 text-pretty leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
