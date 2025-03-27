import type { Metadata } from 'next'
import './globals.css'

import Header from '@/sections/header/Header'
import Footer from '@/sections/Footer'
import { cn } from '@/lib/utils'
import { calistoga, inter, playfair, poppins } from '@/utils/fonts'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'VS Portfolio',
  description: 'A portfolio website for Vijay Subramanian'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          rel='icon'
          // type='image/png'
          sizes='any'
          href='/favicon-light.png'
        />
      </head>
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
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
