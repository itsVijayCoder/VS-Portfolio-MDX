'use client';
import Container from '@/components/layout/container';
import Navbar from '@/sections/header/navbar';
// import { ThemeToggle } from '@/components/theme/theme-toggle';
import Link from 'next/link';
import Image from 'next/image';
import { useThemeMount } from '@/hooks/use-theme-mount';

const Header = () => {
  const { resolvedTheme, mounted } = useThemeMount();

  const logoImage =
    resolvedTheme === 'dark'
      ? '/images/logo/logo-dark.png'
      : '/images/logo/logo-light.png';

  if (!mounted) return null;

  return (
    <header>
      <Container className='group fixed inset-x-0 top-0 z-50 rounded-xl bg-transparent backdrop-blur'>
        <div className='hover:bg-foreground/15 mt-2 rounded-xl px-2 py-1 shadow transition-colors duration-300'>
          <nav className='flex items-center justify-between'>
            <Link href={'/'}>
              <Image
                src={logoImage}
                alt='Vijay Subramanian'
                width={75}
                height={75}
                className='size-12 cursor-pointer'
              />
            </Link>

            <Navbar />

            {/* <div className='mr-1 flex items-center justify-between'>
              <ThemeToggle />
            </div> */}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
