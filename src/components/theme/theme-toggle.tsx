'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { setLocalStorage } from '@/utils/localStorage'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  setLocalStorage('theme', resolvedTheme === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    setMounted(true)
  }, [])

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
