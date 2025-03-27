'use client'
import { NAVBAR_ITEMS } from '@/data/navbar-items'
import { cn } from '@/lib/utils'
// import { useThemeMount } from '@/hooks/use-theme-mount'
// import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname()
  console.log(pathName)

  // const { resolvedTheme } = useThemeMount()

  // const logoImage =
  //   resolvedTheme && resolvedTheme === 'dark'
  //     ? '/images/logo/logo-dark.png'
  //     : '/images/logo/logo-light.png'

  return (
    <div className='flex items-center justify-between gap-10'>
      {/* <Link href={'/'} className='flex items-start'>
        <Image
          src={logoImage}
          alt='Vijay Subramanian'
          width={175}
          height={50}
          className='size-12 cursor-pointer'
        />
      </Link> */}
      <ul className='hidden items-center gap-14 sm:flex'>
        {NAVBAR_ITEMS.map(item => {
          return (
            <Link
              href={item.href}
              className={cn(
                'nav-hover-btn',
                pathName.includes(item.href)
                  ? 'border-primary-blue text-primary-blue border-b-[3px]'
                  : ''
              )}
              key={item.label}
            >
              <li>{item.label}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
