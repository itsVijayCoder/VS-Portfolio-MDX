'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type ThemeMountResult = {
  mounted: boolean
  resolvedTheme: string | null
  setTheme: (theme: string) => void
}
export const useThemeMount = (): ThemeMountResult => {
  const [mounted, setMounted] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  //   if (!mounted) return null

  return {
    mounted,
    resolvedTheme: mounted ? resolvedTheme || null : null,
    setTheme
  }
}
