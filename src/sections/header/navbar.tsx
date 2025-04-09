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

  return (
    <>
      <ul className='flex flex-col items-center gap-6 sm:flex-row sm:gap-14'>
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
    <div className='flex space-x-3 sm:hidden'>
      <div className=''>
        <ThemeToggle />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='cursor-pointer transition-all duration-300'
          >
            <HamburgerMenuIcon className='size-5' />
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
