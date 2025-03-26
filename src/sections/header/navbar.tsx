import { NAVBAR_ITEMS } from '@/data/navbar-items'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <ul className='hidden items-center gap-14 text-sm font-medium sm:flex'>
      {NAVBAR_ITEMS.map(item => {
        return (
          <Link
            href={item.href}
            className='font-inter hover:text-primary-blue text-muted-foreground text-md p-3 font-semibold transition-colors duration-300'
            key={item.label}
          >
            <li>{item.label}</li>
          </Link>
        )
      })}
    </ul>
  )
}

export default Navbar
