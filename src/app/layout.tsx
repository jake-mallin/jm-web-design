import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JM Web Design | Modern Websites that Convert',
  description:
    'Portfolio of JM Web Design. I build fast, accessible, conversion-focused websites using React, TypeScript, and Tailwind.',
  metadataBase: new URL('https://www.example.com'), // ← update to your domain
  openGraph: {
    title: 'JM Web Design',
    description:
      'Fast, accessible, conversion-focused websites using React, TypeScript, and Tailwind.',
    url: 'https://www.example.com',
    siteName: 'JM Web Design',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'JM Web Design' }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JM Web Design',
    description:
      'Fast, accessible, conversion-focused websites using React, TypeScript, and Tailwind.',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  )
}
