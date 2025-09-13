import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Sparkles, Car, Package, ArrowRight, Check, Star, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Premium Auto Detailing Services | Blackbird Detailing Virginia Beach',
  description: 'Professional automotive detailing services in Virginia Beach. Ceramic coating, paint correction, interior detailing, and full detail packages with luxury excellence.',
  keywords: 'auto detailing services, ceramic coating, paint correction, interior detailing, Virginia Beach, Chesapeake, Norfolk, car detailing packages',
}

const services = [
  {
    title: 'Ceramic Coating',
    description: 'Professional-grade ceramic coating protection with or without paint enhancement. Crystal-clear, long-lasting protection against environmental contaminants.',
    icon: Shield,
    href: '/services/ceramic-coating',
    popular: true,
    startingPrice: 'Starting at $600',
    features: [
      'With/without paint enhancement options',
      'Multi-year protection warranty',
      'Hydrophobic self-cleaning properties',
      'UV protection and gloss enhancement',
      'Chemical and scratch resistance',
      'Professional application process'
    ],
    packages: ['With Paint Enhancement', 'No Paint Enhancement'],
    image: '/images/services/ceramic-coating/porsche-ceramic-coating-20.webp'
  },
  {
    title: 'Paint Protection Film',
    description: 'Invisible armor for your vehicle\'s paint. Self-healing, crystal-clear urethane protection that absorbs damage so your finish doesn\'t.',
    icon: Shield,
    href: '/services/paint-protection-film',
    popular: false,
    startingPrice: 'Starting at $700',
    features: [
      'Self-healing urethane technology',
      'Crystal-clear, invisible protection',
      'Manufacturer-backed warranty',
      'Computer-cut precision patterns',
      'Stain and acid resistance',
      'Removable without paint damage'
    ],
    packages: ['Front Bumper', 'Partial Front', 'Full Front', 'Track Package', 'Full Body'],
    image: '/images/services/paint-protection-film/aston-martin-ceramic-coating-26.webp'
  },
  {
    title: 'Full Detail Packages',
    description: 'Complete interior and exterior detailing services. Professional cleaning designed to reach every inch of your vehicle.',
    icon: Package,
    href: '/services/packages',
    startingPrice: 'Starting at $280',
    popular: true,
    features: [
      'Level 1 (Express) and Level 2 (Executive) options',
      'Complete interior and exterior service',
      'Professional-grade, non-toxic products',
      'Pricing based on vehicle size',
      'Extensive add-on options available',
      'Quality guarantee included'
    ],
    packages: ['Level 1 Express', 'Level 2 Executive', 'Interior Only', 'Exterior Only'],
    image: '/images/portfolio/before-after/process/mercedes-benz-process-1.webp'
  },
  {
    title: 'Membership Plans',
    description: 'Recurring maintenance plans for consistent vehicle care. Choose from interior/exterior or exterior-only memberships with significant savings.',
    icon: Crown,
    href: '/membership',
    startingPrice: 'Starting at $100/month',
    features: [
      'In & Out or Exterior Only options',
      'Bi-weekly, monthly, or bi-monthly service',
      'Paid-in-full annual discounts available',
      'Priority booking and VIP treatment',
      'Add-on services at member rates',
      'Flexible cancellation terms'
    ],
    packages: ['Bi-Weekly', 'Monthly', 'Bi-Monthly'],
    image: '/images/vehicles/luxury/bmw-ceramic-coating-38.webp'
  }
]

const whyChooseUs = [
  {
    title: 'Luxury Excellence',
    description: 'Every service exemplifies our commitment to luxury and uncompromising quality.',
    icon: '💎'
  },
  {
    title: 'Premium Products',
    description: 'We use only the highest quality products from industry-leading manufacturers.',
    icon: '⭐'
  },
  {
    title: 'Certified Technicians',
    description: 'Our team is trained and certified in the latest detailing techniques.',
    icon: '🎯'
  },
  {
    title: 'Satisfaction Guarantee',
    description: '100% satisfaction guarantee on all services with comprehensive warranties.',
    icon: '✅'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blackbird-charcoal/20 via-blackbird-black to-blackbird-charcoal/20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
              <Package className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                Our Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-blackbird-off-white mb-6">
              Professional{' '}
              <span className="text-blackbird-ignition-blue">Automotive Care</span>
            </h1>

            <p className="text-xl text-blackbird-off-white/70 mb-12 max-w-3xl mx-auto">
              From complete detail packages to advanced protection services, we offer
              comprehensive automotive care solutions. Choose from our ceramic coatings,
              paint protection film, detail packages, and membership plans.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.title} className="group bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blackbird-black/80 to-transparent" />
                    
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-blackbird-ignition-blue text-white">
                        Most Popular
                      </Badge>
                    )}

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-blackbird-ignition-blue/20 rounded-lg backdrop-blur-sm">
                          <service.icon className="h-6 w-6 text-blackbird-ignition-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold text-blackbird-off-white">
                            {service.title}
                          </h3>
                          <p className="text-blackbird-ignition-blue font-semibold">
                            {service.startingPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-blackbird-off-white/70 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-blackbird-off-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-4 w-4 text-blackbird-ignition-blue mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Packages */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-blackbird-off-white mb-3">Available Packages:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.packages.map((pkg, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blackbird-charcoal/50 text-blackbird-off-white/80 px-3 py-1 rounded-full"
                          >
                            {pkg}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 group/button"
                    >
                      <Link href={service.href} className="flex items-center justify-center">
                        Learn More & Get Quote
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Why Choose{' '}
              <span className="text-blackbird-ignition-blue">Blackbird Detailing?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              We deliver an unparalleled luxury experience with meticulous attention to detail 
              for every exclusive vehicle that entrusts us with their care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-blackbird-off-white/70 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blackbird-black">
        <div className="container">
          <div className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 rounded-2xl p-8 md:p-12 text-center border border-blackbird-charcoal/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Ready to Experience the Blackbird Difference?
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Get a personalized quote for your vehicle and discover why vehicle owners 
              across Virginia Beach trust Blackbird Detailing with their most prized possessions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Get Your Free Estimate</Link>
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