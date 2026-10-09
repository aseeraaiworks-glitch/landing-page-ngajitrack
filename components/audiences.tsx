const audiences = [
  {
    role: "Educators",
    body: "Log a session in seconds and see exactly where each student left off before class begins.",
  },
  {
    role: "Leaders",
    body: "Understand progress across halaqah, spot who needs support and report with confidence.",
  },
  {
    role: "Guardians",
    body: "Stay informed about your child’s recitation and memorisation without chasing updates.",
  },
]

export function Audiences() {
  return (
    <section id="audiences" className="scroll-mt-16 border-y border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          One shared picture for everyone involved
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {audiences.map((a, i) => (
            <li key={a.role} className="border-t-2 border-primary pt-6">
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
