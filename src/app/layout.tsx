import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Blackbird Detailing - Luxury Automotive Excellence for Discerning Owners',
  description: 'Exclusive luxury automotive detailing services in Virginia Beach, Chesapeake, and Norfolk. Ceramic coating, paint correction, and interior detailing with uncompromising excellence.',
  keywords: 'luxury auto detailing, premium car detailing, ceramic coating, paint correction, Virginia Beach, Chesapeake, Norfolk, exclusive automotive care, luxury vehicle services, high-end detailing',
  authors: [{ name: 'Blackbird Detailing' }],
  creator: 'Blackbird Detailing',
  publisher: 'Blackbird Detailing',
  icons: {
    icon: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Blackbird Detailing - Luxury Automotive Excellence',
    description: 'Experience unparalleled luxury automotive detailing services. Ceramic coating, paint correction, and interior restoration for discerning vehicle owners in Virginia Beach.',
    url: 'https://blackbirddetailing.com',
    siteName: 'Blackbird Detailing',
    images: [
      {
        url: '/blackbirdlogo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Blackbird Detailing - Luxury Automotive Excellence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackbird Detailing - Luxury Automotive Excellence',
    description: 'Experience unparalleled luxury automotive detailing services. Ceramic coating, paint correction, and interior restoration for discerning vehicle owners.',
    images: ['/blackbirdlogo.jpeg'],
    creator: '@BlackbirdDetail',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-blackbird-black text-blackbird-off-white antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}