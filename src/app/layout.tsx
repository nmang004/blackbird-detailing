import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Blackbird Detailing - Motorsport-Grade Precision for Your Automobile',
  description: 'Premium automotive detailing services in Virginia Beach, Chesapeake, and Norfolk. Ceramic coating, paint correction, and interior detailing with motorsport-grade precision.',
  keywords: 'auto detailing, ceramic coating, paint correction, Virginia Beach, Chesapeake, Norfolk, car detailing, automotive care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-blackbird-black text-blackbird-off-white antialiased">
        {children}
      </body>
    </html>
  )
}