import { Metadata } from 'next'
import { Camera, Sparkles, Trophy, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GalleryGrid } from '@/components/portfolio/gallery-grid'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery - Blackbird Detailing | Premium Automotive Gallery Virginia Beach',
  description: 'Explore our stunning collection of automotive detailing transformations. Premium ceramic coating, paint correction, and interior detailing showcased in Virginia Beach.',
  keywords: 'automotive detailing gallery, car detailing photos, Virginia Beach detailing, paint correction gallery, ceramic coating results, premium auto detailing',
}

// Mock stats data - will be replaced with real data from Supabase
const galleryStats = {
  totalProjects: 847,
  featuredProjects: 124,
  videoShowcases: 47,
  averageRating: 4.9,
  happyCustomers: 692
}

const showcaseCategories = [
  {
    name: 'Exotic & Supercars',
    count: 89,
    description: 'Lamborghini, Ferrari, McLaren, and more',
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    name: 'Luxury Sedans',
    count: 156,
    description: 'BMW, Mercedes, Audi premium vehicles',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    name: 'Performance SUVs',
    count: 203,
    description: 'Porsche, Range Rover, performance SUVs',
    gradient: 'from-green-500/20 to-blue-500/20'
  },
  {
    name: 'Electric Vehicles',
    count: 124,
    description: 'Tesla, Lucid, premium electric vehicles',
    gradient: 'from-cyan-500/20 to-green-500/20'
  }
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/10 to-blackbird-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center"></div>
        </div>

        <div className="container relative">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
              <Camera className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                Premium Gallery
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-blackbird-off-white mb-6">
              Automotive{' '}
              <span className="text-blackbird-ignition-blue relative">
                Excellence
                <div className="absolute -inset-1 bg-blackbird-ignition-blue/20 blur-xl rounded-full"></div>
              </span>
              {' '}Gallery
            </h1>

            <p className="text-xl md:text-2xl text-blackbird-off-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our collection of automotive transformations. From exotic supercars to luxury sedans,
              witness the precision and artistry that defines Blackbird Detailing's premium services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button
                size="lg"
                className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl shadow-blackbird-ignition-blue/25"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blackbird-off-white/20 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black font-semibold px-8 py-4 rounded-xl backdrop-blur-sm"
                asChild
              >
                <Link href="/portfolio/before-after">View Before & After</Link>
              </Button>
            </div>

            {/* Gallery Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                  {galleryStats.totalProjects}+
                </div>
                <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                  Total Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                  {galleryStats.featuredProjects}+
                </div>
                <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                  Featured Works
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                  {galleryStats.videoShowcases}+
                </div>
                <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                  Video Showcases
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                  {galleryStats.averageRating}
                </div>
                <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                  {galleryStats.happyCustomers}+
                </div>
                <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Categories */}
      <section className="py-16 md:py-24 bg-blackbird-charcoal/5 relative">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                Vehicle Categories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-4">
              Precision Across{' '}
              <span className="text-blackbird-ignition-blue">Every Category</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              From exotic supercars to luxury SUVs, explore our work across diverse vehicle categories.
              Each project showcases our commitment to automotive excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {showcaseCategories.map((category, index) => (
              <Card
                key={index}
                className={`group bg-gradient-to-br ${category.gradient} backdrop-blur-sm border-blackbird-charcoal/30 hover:border-blackbird-ignition-blue/50 transition-all duration-500 cursor-pointer overflow-hidden`}
              >
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blackbird-charcoal/20 to-blackbird-charcoal/40 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-blackbird-off-white mb-2 text-lg">
                      {category.name}
                    </h3>
                    <p className="text-blackbird-off-white/70 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30 bg-blackbird-ignition-blue/10">
                        {category.count} Projects
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-4">
              <Trophy className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                Featured Gallery
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-4">
              Our Latest{' '}
              <span className="text-blackbird-ignition-blue">Masterpieces</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto mb-8">
              Explore our comprehensive gallery of automotive transformations. Click any image or video
              to see the full details, services performed, and customer testimonials.
            </p>
          </div>

          {/* Gallery Grid Component */}
          <GalleryGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blackbird-charcoal/20 via-blackbird-ignition-blue/10 to-blackbird-charcoal/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blackbird-ignition-blue/5 to-transparent"></div>

        <div className="container text-center relative">
          <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
            <Users className="h-4 w-4 text-blackbird-ignition-blue" />
            <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
              Join Our Portfolio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
            Ready to Join Our{' '}
            <span className="text-blackbird-ignition-blue relative">
              Gallery of Excellence?
              <div className="absolute -inset-1 bg-blackbird-ignition-blue/20 blur-xl rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the Blackbird difference and see your vehicle transformed into a work of art.
            Get your instant estimate and join hundreds of satisfied customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white font-semibold px-10 py-4 rounded-xl shadow-2xl shadow-blackbird-ignition-blue/25 transform transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">Get Instant Estimate</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blackbird-off-white/20 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black font-semibold px-10 py-4 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}