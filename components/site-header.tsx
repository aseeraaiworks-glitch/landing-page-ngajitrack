import { NgajiTrackLogo } from "@/components/brand"

const links = [
  { href: "#features", label: "Features" },
  { href: "#audiences", label: "Who it’s for" },
  { href: "#status", label: "Status" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 text-primary-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" aria-label="NgajiTrack home">
          <NgajiTrackLogo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm text-primary-foreground/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
