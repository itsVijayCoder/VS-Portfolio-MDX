'use client'
import React from 'react'
import { ThemeProvider } from './theme/theme-provider'
// import { useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { useThemeMount } from '@/hooks/use-theme-mount'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useThemeMount()

  return (
    <Toaster
      richColors
      // closeButton
      position='top-center'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}

export default Providers
