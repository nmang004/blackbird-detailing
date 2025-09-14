import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { GalleryShowcase } from '@/components/sections/gallery-showcase'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export const metadata: Metadata = {
  title: 'Blackbird Detailing | Luxury Automotive Excellence in Virginia Beach',
  description: 'Experience the pinnacle of luxury automotive care. Premium ceramic coating, expert paint correction, and exclusive interior detailing services for discerning vehicle owners in Virginia Beach, Chesapeake, and Norfolk.',
  keywords: 'luxury auto detailing Virginia Beach, premium car detailing, ceramic coating, paint correction, luxury vehicle services, exclusive automotive care, high-end detailing, premium car care',
  openGraph: {
    title: 'Blackbird Detailing | Luxury Automotive Excellence',
    description: 'Luxury. Excellence. Distinction. Experience unparalleled automotive detailing services crafted for discerning vehicle owners who demand nothing but perfection.',
    url: 'https://blackbirddetailing.com',
    siteName: 'Blackbird Detailing',
    images: [
      {
        url: '/blackbirdlogo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Blackbird Detailing - Luxury Automotive Excellence in Virginia Beach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackbird Detailing | Luxury Automotive Excellence',
    description: 'Luxury. Excellence. Distinction. Premium automotive detailing services for discerning vehicle owners in Virginia Beach.',
    images: ['/blackbirdlogo.jpeg'],
    creator: '@BlackbirdDetail',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div id="services">
        <ServicesOverview />
      </div>
      <div id="portfolio">
        <GalleryShowcase />
      </div>
      <div id="about">
        <TestimonialsSection />
      </div>
    </>
  )
}