import { Lexend_Deca } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // choose weights you need
  variable: '--font-lexend-deca',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JM Web Design | Modern Websites that Convert',
  description:
    'Portfolio of JM Web Design. I build fast, accessible, conversion-focused websites that both look and feel great.',
  metadataBase: new URL('https://www.example.com'),
  openGraph: {
    title: 'JM Web Design',
    description: 'Fast, accessible, conversion-focused websites that both look and feel great.',
    url: 'https://www.example.com',
    siteName: 'JM Web Design',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'JM Web Design' }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JM Web Design',
    description: 'Fast, accessible, conversion-focused websites that both look and feel great.',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lexendDeca.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
