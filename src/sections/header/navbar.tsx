'use client';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { NAVBAR_ITEMS } from '@/data/navbar-items';
import { cn } from '@/lib/utils';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
// import { useThemeMount } from '@/hooks/use-theme-mount'
// import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
};

export default Navbar;

// type NavbarViewProps = {
//   pathName: string;
// };

const Navigation = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      <ul className='items-center gap-14 sm:flex'>
        {NAVBAR_ITEMS.map((item) => {
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
              <span>{item.label}</span>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

const DesktopView = () => {
  return (
    <div className='hidden items-center justify-between gap-40 sm:flex'>
      <Navigation />
      <div className='mr-1 flex items-center justify-between'>
        <ThemeToggle />
      </div>
    </div>
  );
};

const MobileView = () => {
  return (
    <div className='sm:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>
            <HamburgerMenuIcon className='size-4' />
          </Button>
        </SheetTrigger>

        <SheetContent className=''>
          <SheetHeader>
            <SheetTitle>
              <ThemeToggle />
            </SheetTitle>
          </SheetHeader>
          <Navigation />
        </SheetContent>
      </Sheet>
    </div>
  );
};
