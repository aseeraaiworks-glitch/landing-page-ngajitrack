"use client"

import { cn } from "@/lib/utils"
import { LANGS } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div role="group" aria-label={t.nav.language} className="flex rounded-full border border-white/15 p-0.5 text-xs font-medium">
      {LANGS.map((option) => {
        const active = option.code === lang
        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            aria-pressed={active}
            aria-label={option.name}
            onClick={() => setLang(option.code)}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active ? "bg-primary-foreground text-primary" : "text-primary-foreground/70 hover:text-primary-foreground",
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
