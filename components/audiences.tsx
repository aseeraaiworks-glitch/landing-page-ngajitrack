"use client"

import { useLanguage } from "@/components/language-provider"

export function Audiences() {
  const { t } = useLanguage()

  return (
    <section id="audiences" className="scroll-mt-16 border-y border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {t.audiences.title}
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {t.audiences.items.map((a, i) => (
            <li key={i} className="border-t-2 border-primary pt-6">
              <span className="text-sm font-medium text-chart-2">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold">{a.role}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
