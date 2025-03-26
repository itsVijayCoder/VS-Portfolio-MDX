import { Calistoga, Inter, Playfair_Display, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-calistoga',
  weight: ['400']
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})

export { inter, poppins, calistoga, playfair }
