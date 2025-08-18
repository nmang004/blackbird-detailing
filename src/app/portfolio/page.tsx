import { Metadata } from 'next'
import { Camera, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - Blackbird Detailing | Before & After Gallery Virginia Beach',
  description: 'View our stunning before and after transformations. Professional automotive detailing results from ceramic coating, paint correction, and interior services in Virginia Beach.',
  keywords: 'automotive detailing portfolio, before after photos, car detailing results, Virginia Beach detailing, paint correction gallery, ceramic coating results',
}

// Mock stats data - will be replaced with real data from Supabase
const portfolioStats = {
  totalProjects: 847,
  totalVehicles: 692,
  averageRating: 4.9,
  yearsExperience: 8,
  servicesOffered: 12
}

const featuredCategories = [
  {
    name: 'Ceramic Coating',
    count: 324,
    icon: '🛡️',
    description: 'Ultimate paint protection with stunning gloss'
  },
  {
    name: 'Paint Correction',
    count: 289,
    icon: '✨',
    description: 'Swirl removal and finish perfection'
  },
  {
    name: 'Interior Detailing',
    count: 156,
    icon: '🧽',
    description: 'Deep cleaning and restoration'
  },
  {
    name: 'Full Service',
    count: 78,
    icon: '🔧',
    description: 'Complete vehicle transformation'
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
              <Camera className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                Our Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-blackbird-off-white mb-6">
              Luxury{' '}
              <span className="text-blackbird-ignition-blue">Transformations</span>
            </h1>
            
            <p className="text-xl text-blackbird-off-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every vehicle tells a story. From daily drivers to exotic supercars, witness the 
              dramatic before and after results that showcase our luxury excellence 
              and commitment to perfection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
                <Link href="/contact">Get Your Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black">
                <Filter className="mr-2 h-4 w-4" />
                Filter Projects
              </Button>
            </div>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                {portfolioStats.totalProjects}+
              </div>
              <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                {portfolioStats.totalVehicles}+
              </div>
              <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                Vehicles Serviced
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                {portfolioStats.averageRating}
              </div>
              <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                {portfolioStats.yearsExperience}
              </div>
              <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                {portfolioStats.servicesOffered}+
              </div>
              <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                Services Offered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-4">
              Browse by{' '}
              <span className="text-blackbird-ignition-blue">Service Type</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-2xl mx-auto">
              Explore our work across different service categories to see the specific 
              results you can expect for your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <Card key={index} className="group bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-2 text-lg">
                    {category.name}
                  </h3>
                  <p className="text-blackbird-off-white/70 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30">
                      {category.count} Projects
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-4">
              Recent{' '}
              <span className="text-blackbird-ignition-blue">Transformations</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-2xl mx-auto">
              Witness the dramatic before and after results from our latest projects.
            </p>
          </div>

          {/* Portfolio Grid Component */}
          <PortfolioGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blackbird-charcoal/30 to-blackbird-ignition-blue/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
            Ready for Your{' '}
            <span className="text-blackbird-ignition-blue">Transformation?</span>
          </h2>
          <p className="text-xl text-blackbird-off-white/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have experienced the Blackbird difference. 
            Get your instant estimate today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
              <Link href="/contact">Get Instant Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}