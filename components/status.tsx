const stages = [
  { label: "Research with institutions", state: "In progress" },
  { label: "Core Tahfiz & Iqra records", state: "In development" },
  { label: "Guardian updates", state: "Planned" },
  { label: "Pilot programme", state: "Planned" },
]

export function Status() {
  return (
    <section id="status" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-chart-2">Where we are</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Built carefully, together with educators
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            NgajiTrack is early and not yet available for general use. We&apos;re shaping it alongside Qur&apos;an
            learning institutions so it fits real classrooms from day one.
          </p>
        </div>
        <ol className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
          {stages.map((s) => (
            <li key={s.label} className="flex items-center justify-between gap-4 p-5">
              <span className="font-medium">{s.label}</span>
              <span
                className={
                  s.state === "Planned"
                    ? "rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    : "rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
                }
              >
                {s.state}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
