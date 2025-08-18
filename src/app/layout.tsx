import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Blackbird Detailing - Motorsport-Grade Precision for Your Automobile',
  description: 'Premium automotive detailing services in Virginia Beach, Chesapeake, and Norfolk. Ceramic coating, paint correction, and interior detailing with motorsport-grade precision.',
  keywords: 'auto detailing, ceramic coating, paint correction, Virginia Beach, Chesapeake, Norfolk, car detailing, automotive care',
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