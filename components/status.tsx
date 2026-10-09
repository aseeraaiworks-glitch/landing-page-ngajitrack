"use client"

import { useLanguage } from "@/components/language-provider"

export function Status() {
  const { t } = useLanguage()

  return (
    <section id="status" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-chart-2">{t.status.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">{t.status.title}</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.status.body}</p>
        </div>
        <ol className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
          {t.status.stages.map((s, i) => (
            <li key={i} className="flex items-center justify-between gap-4 p-5">
              <span className="font-medium">{s.label}</span>
              <span
                className={
                  s.state === "planned"
                    ? "shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    : "shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
                }
              >
                {t.status.states[s.state]}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
