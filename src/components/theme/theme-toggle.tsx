'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { setLocalStorage } from '@/utils/localStorage'
import { useThemeMount } from '@/hooks/use-theme-mount'

export function ThemeToggle() {
  const { setTheme, resolvedTheme, mounted } = useThemeMount()

  setLocalStorage('theme', resolvedTheme === 'dark' ? 'dark' : 'light')

  if (!mounted) return null
  return (
    <>
      <Button
        variant='outline'
        size='icon'
        className='cursor-pointer transition-all duration-300'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        aria-label='Toggle theme'
      >
        {resolvedTheme === 'dark' ? (
          <SunIcon className='size-4 text-orange-300' />
        ) : (
          <MoonIcon className='size-4 text-sky-950' />
        )}

        <span className='sr-only'>Toggle theme</span>
      </Button>
    </>
  )
}
