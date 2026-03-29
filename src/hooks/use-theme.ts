import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

export type Theme = 'dark' | 'light'

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const v = localStorage.getItem(STORAGE_KEY)
  if (v === 'light' || v === 'dark') return v
  return null
}

function applyDomTheme(next: Theme) {
  document.documentElement.classList.toggle('dark', next === 'dark')
}

function readTheme(): Theme {
  return getStoredTheme() ?? 'dark'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readTheme)

  useEffect(() => {
    applyDomTheme(theme)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggle = useCallback(() => {
    setThemeState((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { theme, setTheme, toggle }
}
