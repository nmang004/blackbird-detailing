import { HeroSection } from '@/components/sections/hero-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { PortfolioShowcase } from '@/components/sections/portfolio-showcase'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div id="services">
        <ServicesOverview />
      </div>
      <div id="portfolio">
        <PortfolioShowcase />
      </div>
      <div id="about">
        <TestimonialsSection />
      </div>
    </>
  )
}