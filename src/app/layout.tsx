import type { Metadata } from 'next';
import './globals.css';

import Header from '@/sections/header/Header';
import Footer from '@/sections/Footer';
import { cn } from '@/lib/utils';
import { calistoga, inter, playfair, poppins } from '@/utils/fonts';
import Providers from '@/components/Providers';
import Container from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'VS Portfolio',
  description: 'A portfolio website for Vijay Subramanian'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <head />
      <body
        className={cn(
          'font-inter flex min-h-screen flex-col antialiased',
          inter.variable,
          playfair.variable,
          poppins.variable,
          calistoga.variable
        )}
      >
        <Providers>
          <Header />
          <main className='mt-16 grow scroll-smooth'>
            <Container>{children}</Container>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
