"use client"

import { BookOpenCheck, ClipboardList, LineChart, MessageSquareText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const icons = [BookOpenCheck, ClipboardList, LineChart, MessageSquareText]

export function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-chart-2">{t.features.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">{t.features.title}</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.features.body}</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.features.items.map(({ title, body }, i) => {
            const Icon = icons[i]
            return (
              <li key={i} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
