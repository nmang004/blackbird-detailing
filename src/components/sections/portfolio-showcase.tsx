import Link from 'next/link'
import Image from 'next/image'
import { Camera, ArrowRight, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

// Mock portfolio data - using gradient placeholders temporarily
const portfolioItems = [
  {
    id: 1,
    title: 'BMW M3 Paint Correction & Ceramic Coating',
    category: 'Paint Correction',
    beforeImage: null,
    afterImage: null,
    description: 'Complete paint restoration with multi-stage correction followed by premium ceramic coating application.',
    services: ['Paint Correction', 'Ceramic Coating'],
    vehicle: 'BMW M3'
  },
  {
    id: 2,
    title: 'Ford F-250 Full Detail Package',
    category: 'Full Detail',
    beforeImage: null,
    afterImage: null,
    description: 'Comprehensive interior and exterior detailing for work truck restoration.',
    services: ['Interior Detail', 'Exterior Detail'],
    vehicle: 'Ford F-250'
  },
  {
    id: 3,
    title: 'Toyota 4Runner Interior Restoration',
    category: 'Interior Detail',
    beforeImage: null,
    afterImage: null,
    description: 'Deep interior cleaning and conditioning bringing family SUV back to like-new condition.',
    services: ['Interior Detail', 'Leather Treatment'],
    vehicle: 'Toyota 4Runner'
  },
  {
    id: 4,
    title: 'Suburban Family Vehicle Detail',
    category: 'Full Service',
    beforeImage: null,
    afterImage: null,
    description: 'Complete transformation of family vehicle with kids and pet hair removal.',
    services: ['Deep Clean', 'Interior Detail', 'Exterior Detail'],
    vehicle: 'Chevrolet Suburban'
  }
]

export function PortfolioShowcase() {
  return (
    <section className="py-20 md:py-32 bg-blackbird-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
            <Camera className="h-4 w-4 text-blackbird-ignition-blue" />
            <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
              Our Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
            Recent{' '}
            <span className="text-blackbird-ignition-blue">Transformations</span>
          </h2>
          
          <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
            See the dramatic before and after results from our recent projects. 
            Every vehicle tells a story of precision, care, and exceptional craftsmanship.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card key={item.id} className="group bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Before/After Images */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    {/* Before Image */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blackbird-black/20 z-10" />
                      <div className="w-full h-full bg-gradient-to-br from-blackbird-charcoal via-blackbird-black to-blackbird-charcoal/50 transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs px-2 py-1 rounded">
                        BEFORE
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blackbird-black/20 z-10" />
                      <div className="w-full h-full bg-gradient-to-br from-blackbird-ignition-blue/20 via-blackbird-charcoal to-blackbird-black transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 bg-green-600/90 text-white text-xs px-2 py-1 rounded">
                        AFTER
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider Line */}
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-blackbird-ignition-blue transform -translate-x-px" />
                  
                  {/* Center Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blackbird-ignition-blue rounded-full flex items-center justify-center z-20">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Vehicle */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-blackbird-off-white/60">{item.vehicle}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-3 group-hover:text-blackbird-ignition-blue transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blackbird-off-white/70 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blackbird-charcoal/50 text-blackbird-off-white/80 px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="inline-flex items-center text-blackbird-ignition-blue hover:text-blackbird-ignition-blue/80 transition-colors text-sm font-medium"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-blackbird-off-white/70 mb-6">
            Want to see your vehicle transformed like these?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90"
              asChild
            >
              <Link href="/portfolio">
                View Full Portfolio
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black"
              asChild
            >
              <Link href="/contact">
                Get Your Estimate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}