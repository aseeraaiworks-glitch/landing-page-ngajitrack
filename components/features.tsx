import { BookOpenCheck, ClipboardList, LineChart, MessageSquareText } from "lucide-react"

const features = [
  {
    icon: BookOpenCheck,
    title: "Tahfiz tracking",
    body: "Record memorisation by surah, juz and ayah, with sabaq, sabqi and manzil reviews in one place.",
  },
  {
    icon: ClipboardList,
    title: "Iqra progression",
    body: "Follow each learner through Iqra levels page by page, so no one is held back or rushed ahead.",
  },
  {
    icon: LineChart,
    title: "Institution insights",
    body: "Give leaders a clear view of progress across classes and educators to support better decisions.",
  },
  {
    icon: MessageSquareText,
    title: "Guardian updates",
    body: "Share simple, regular progress summaries so families can encourage learning at home.",
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-chart-2">What we&apos;re building</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Designed around how Qur&apos;an is actually taught
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Replacing paper logbooks and scattered chats with one structured record of every learner&apos;s journey.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
