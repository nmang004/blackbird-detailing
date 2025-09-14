import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Check, Shield, Droplets, Zap, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Professional Interior Detailing Services | Blackbird Detailing Virginia Beach',
  description: 'Expert interior detailing in Virginia Beach. Deep cleaning, leather conditioning, fabric protection, and odor elimination. Essential, Premium, and Ultimate packages available.',
  keywords: 'interior detailing, leather cleaning, fabric protection, car interior cleaning, Virginia Beach, automotive interior care, seat cleaning',
}

const packages = [
  {
    name: 'Essential Package',
    price: '$299',
    duration: '3-4 Hours',
    description: 'Complete interior refresh for regular maintenance.',
    ideal: 'Regular cleaning, newer vehicles, maintenance',
    features: [
      'Thorough vacuum (seats, carpets, crevices)',
      'Dashboard and trim cleaning',
      'Window cleaning (interior)',
      'Cup holders and console detail',
      'Floor mat cleaning',
      'Basic leather conditioning',
      'Fabric spot treatment',
      'Air freshening'
    ]
  },
  {
    name: 'Premium Package',
    price: '$449',
    duration: '5-6 Hours',
    description: 'Deep cleaning with protection for enhanced durability.',
    popular: true,
    ideal: 'Most vehicles, families, moderate wear',
    features: [
      'Everything in Essential Package',
      'Steam cleaning of all surfaces',
      'Deep leather cleaning & conditioning',
      'Fabric protection application',
      'Carpet and upholstery extraction',
      'Plastic and vinyl restoration',
      'UV protection treatment',
      'Odor elimination treatment',
      'Trim restoration and protection'
    ]
  },
  {
    name: 'Ultimate Package',
    price: '$649',
    duration: '7-8 Hours',
    description: 'Complete interior restoration and maximum protection.',
    ideal: 'Luxury vehicles, heavy soiling, complete restoration',
    features: [
      'Everything in Premium Package',
      'Professional grade extraction cleaning',
      'Multi-stage leather restoration',
      'Advanced stain removal treatment',
      'Headliner cleaning and protection',
      'Door jamb and threshold detail',
      'Complete sanitization service',
      'Premium protection application',
      'Detailed before/after documentation',
      'Quality assurance inspection'
    ]
  }
]

const specialties = [
  {
    icon: Shield,
    title: 'Leather Care',
    description: 'Professional cleaning, conditioning, and protection for all leather surfaces.',
    services: ['Deep cleaning', 'Conditioning', 'UV protection', 'Crack prevention']
  },
  {
    icon: Droplets,
    title: 'Fabric Protection',
    description: 'Advanced stain resistance and protection for cloth and fabric surfaces.',
    services: ['Stain removal', 'Protection coating', 'Water resistance', 'Soil resistance']
  },
  {
    icon: RefreshCw,
    title: 'Odor Elimination',
    description: 'Complete odor removal using professional-grade treatments and techniques.',
    services: ['Smoke removal', 'Pet odor elimination', 'Food odor removal', 'Sanitization']
  },
  {
    icon: Zap,
    title: 'Stain Removal',
    description: 'Expert removal of even the toughest stains from all interior surfaces.',
    services: ['Food stains', 'Beverage spills', 'Ink removal', 'Grease stains']
  }
]

const materials = [
  {
    name: 'Leather Surfaces',
    description: 'Seats, door panels, dashboard, steering wheel',
    process: 'Clean → Condition → Protect → UV Treatment'
  },
  {
    name: 'Fabric Upholstery',
    description: 'Seats, carpets, headliner, door cards',
    process: 'Vacuum → Pre-treat → Extract → Protect'
  },
  {
    name: 'Plastic & Vinyl',
    description: 'Dashboard, trim pieces, door handles',
    process: 'Clean → Restore → Protect → UV Guard'
  },
  {
    name: 'Glass Surfaces',
    description: 'Windows, mirrors, touchscreens',
    process: 'Clean → Polish → Anti-fog Treatment'
  }
]

const beforeAfter = [
  {
    title: 'Ford Explorer Family Vehicle',
    before: '/images/portfolio/before-after/interior-detailing/interior-detail-12.webp',
    after: '/images/portfolio/before-after/interior-detailing/ford-interior-detail-4.webp',
    description: 'Complete interior restoration after heavy family use with kids and pets'
  },
  {
    title: 'BMW Leather Interior',
    before: '/images/portfolio/before-after/interior-detailing/bmw-interior-detail-2.webp',
    after: '/images/portfolio/before-after/interior-detailing/porsche-interior-detail-9.webp',
    description: 'Luxury leather cleaning and conditioning bringing back original appearance'
  }
]

export default function InteriorDetailingPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
                <Car className="h-4 w-4 text-blackbird-ignition-blue" />
                <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                  Interior Detailing
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Restore Your Interior to{' '}
                <span className="text-blackbird-ignition-blue">Like-New</span>
              </h1>
              
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Transform your vehicle's interior with our comprehensive detailing services. 
                From deep cleaning and stain removal to leather conditioning and fabric protection, 
                we restore your cabin to pristine condition.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">See Results</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/images/portfolio/before-after/interior-detailing/porsche-interior-detail-11.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Car className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Our Interior{' '}
              <span className="text-blackbird-ignition-blue">Specialties</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              We specialize in comprehensive interior care, addressing every surface 
              and material in your vehicle with luxury care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4">
                    <specialty.icon className="h-8 w-8 text-blackbird-ignition-blue" />
                  </div>
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-blackbird-off-white/70 text-sm mb-4">
                    {specialty.description}
                  </p>
                  <ul className="space-y-1">
                    {specialty.services.map((service, idx) => (
                      <li key={idx} className="text-xs text-blackbird-off-white/60">
                        • {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Every Surface{' '}
              <span className="text-blackbird-ignition-blue">Perfected</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Different materials require different approaches. Our specialized techniques 
              ensure optimal results for every surface in your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-2">
                    {material.name}
                  </h3>
                  <p className="text-blackbird-off-white/70 text-sm mb-4">
                    {material.description}
                  </p>
                  <div className="bg-blackbird-ignition-blue/10 rounded-lg p-3 border border-blackbird-ignition-blue/20">
                    <p className="text-blackbird-ignition-blue font-mono text-sm text-center">
                      {material.process}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Choose Your{' '}
              <span className="text-blackbird-ignition-blue">Interior Package</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              From routine maintenance to complete restoration, we offer three levels 
              of interior detailing to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blackbird-ignition-blue/50' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blackbird-ignition-blue text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading font-bold text-blackbird-off-white">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-blackbird-ignition-blue mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-blackbird-off-white/60">
                    {pkg.duration}
                  </div>
                  <CardDescription className="text-blackbird-off-white/70">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-blackbird-off-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-4 w-4 text-blackbird-ignition-blue mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-blackbird-charcoal/50">
                      <p className="text-xs text-blackbird-off-white/60">
                        <strong>Best for:</strong> {pkg.ideal}
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className={`w-full ${pkg.popular ? 'bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white' : 'bg-blackbird-off-white hover:bg-blackbird-off-white/90 text-blackbird-black border border-blackbird-charcoal/20'} transition-colors`}
                    asChild
                  >
                    <Link href="/contact">
                      Select {pkg.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Real{' '}
              <span className="text-blackbird-ignition-blue">Transformations</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              See the dramatic difference our interior detailing makes. From family vehicles 
              to luxury cars, we restore every interior to like-new condition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfter.map((project, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative">
                      <img src={project.before} alt="Before" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs px-2 py-1 rounded">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <img src={project.after} alt="After" className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-green-600/90 text-white text-xs px-2 py-1 rounded">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-blackbird-off-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blackbird-off-white/70 text-sm">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 rounded-2xl p-8 md:p-12 text-center border border-blackbird-charcoal/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Transform Your Interior Today
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Don't let a dirty or worn interior diminish your driving experience. 
              Let us restore your vehicle's cabin to pristine condition.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Book Your Detail</Link>
              </Button>
              <a
                href="tel:+1-757-123-4567"
                className="flex items-center text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
              >
                <span className="mr-2">📞</span>
                <span className="font-semibold">(757) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}