"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { dictionary, type Dictionary, type Lang } from "@/lib/i18n"

const STORAGE_KEY = "ngajitrack-lang"

type LanguageContextValue = { lang: Lang; t: Dictionary; setLang: (lang: Lang) => void }

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "id" || stored === "en") setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], setLang }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
