import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://primetechsolutions.se'),
  title: {
    default: 'Primetech Solutions — Reliable IT for Growing Businesses',
    template: '%s | Primetech Solutions',
  },
  description:
    'Primetech Solutions delivers structured, transparent IT services to small and mid-sized organisations — Microsoft 365, Intune, network infrastructure, security, and strategic IT operations.',
  keywords: [
    'IT consultancy',
    'Microsoft 365',
    'Intune',
    'IT operations',
    'vCIO',
    'managed IT',
    'endpoint management',
    'network infrastructure',
    'IT security',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://primetechsolutions.se',
    siteName: 'Primetech Solutions',
    title: 'Primetech Solutions — Reliable IT for Growing Businesses',
    description:
      'Structured, transparent IT services for organisations that cannot afford disruption.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Primetech Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primetech Solutions — Reliable IT for Growing Businesses',
    description:
      'Structured, transparent IT services for organisations that cannot afford disruption.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
