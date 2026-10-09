import { Check } from "lucide-react"

const students = [
  { name: "Aisyah", track: "Tahfiz", detail: "Juz 30 · An-Naba’", progress: 82 },
  { name: "Umar", track: "Iqra", detail: "Iqra 4 · Page 18", progress: 60 },
  { name: "Hafsah", track: "Tahfiz", detail: "Juz 29 · Al-Mulk", progress: 35 },
]

export function ProgressPreview() {
  return (
    <figure className="relative">
      <div className="rounded-2xl bg-card p-5 text-card-foreground shadow-2xl shadow-black/30 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Class overview</p>
            <p className="mt-1 font-semibold">Halaqah Al-Falah</p>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Concept preview
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-4">
          {students.map((s) => (
            <li key={s.name} className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
                    aria-hidden="true"
                  >
                    {s.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.detail}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-muted-foreground">{s.track}</span>
              </div>
              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={s.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${s.name} progress`}
              >
                <div className="h-full rounded-full bg-chart-2" style={{ width: `${s.progress}%` }} />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3 rounded-xl bg-secondary p-3 text-sm text-secondary-foreground">
          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-3.5" aria-hidden="true" />
          </span>
          Weekly summary ready to share with guardians
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-primary-foreground/60">
        Illustrative mock-up. Interface subject to change.
      </figcaption>
    </figure>
  )
}
