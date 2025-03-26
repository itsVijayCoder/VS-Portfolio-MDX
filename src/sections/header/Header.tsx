'use client'
import Container from '@/components/layout/container'
import Navbar from '@/sections/header/navbar'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
// import { getLocalStorage } from '@/utils/localStorage'
import { useTheme } from 'next-themes'

const Header = () => {
  const [mounted, setMounted] = useState(false)

  const { resolvedTheme } = useTheme()

  const logoImage =
    resolvedTheme === 'dark'
      ? '/images/logo/logo-dark.png'
      : '/images/logo/logo-light.png'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <header className='bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-md'>
        <Container>
          <nav className='flex items-center justify-between'>
            <Link href={'/'}>
              <Image
                src={logoImage}
                alt='Vijay Subramanian'
                width={50}
                height={50}
              />
            </Link>

            <Navbar />

            <div className='flex items-center justify-between gap-6'>
              <ThemeToggle />
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
