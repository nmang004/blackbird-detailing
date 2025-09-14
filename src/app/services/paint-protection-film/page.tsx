import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Check, Star, ArrowRight, Sparkles, Car, Crown, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Paint Protection Film (PPF) Services | Blackbird Detailing Virginia Beach',
  description: 'Professional Paint Protection Film installation in Virginia Beach. Crystal-clear, self-healing urethane protection for exotic cars and daily drivers. Full body, front end, and track packages available.',
  keywords: 'paint protection film, PPF, clear bra, paint protection, Virginia Beach, exotic car protection, self-healing film, automotive protection film',
}

const packages = [
  {
    name: 'Front Bumper',
    price: 'Starting at $700',
    costPrice: '$595',
    description: 'Essential protection for your vehicle\'s most vulnerable area.',
    popular: false,
    coverage: 'Front bumper coverage',
    ideal: 'Daily drivers, budget-conscious owners, basic protection',
    features: [
      'Computer-cut precision patterns',
      'Self-healing urethane film',
      'Crystal-clear finish',
      'Professional installation',
      'Manufacturer warranty',
      'Aftercare support'
    ],
    addOns: [
      'Add Headlights: Starting at $200'
    ]
  },
  {
    name: 'Partial Front End',
    price: 'Starting at $1,200',
    costPrice: '$995',
    description: 'Comprehensive protection for high-impact front areas.',
    popular: false,
    coverage: 'Front bumper, partial hood, and fenders',
    ideal: 'Frequent highway drivers, luxury vehicles, enhanced protection',
    features: [
      'Extended front coverage',
      'Self-healing technology',
      'Invisible protection',
      'Wrapped edges for seamless finish',
      'UV resistance',
      'Stain and acid resistance',
      'Professional installation'
    ],
    addOns: []
  },
  {
    name: 'Full Front End',
    price: 'Starting at $2,200',
    costPrice: '$1,795',
    description: 'Complete front-end protection for maximum coverage.',
    popular: true,
    coverage: 'Full hood, bumper, fenders, mirrors',
    ideal: 'Performance vehicles, frequent drivers, premium protection',
    features: [
      'Complete front-end coverage',
      'Self-healing surface technology',
      'Gloss or matte finish options',
      'Precision-cut patterns',
      'Paint decontamination included',
      'Panel alignment optimization',
      'Premium aftercare kit',
      'Extended warranty coverage'
    ],
    addOns: []
  },
  {
    name: 'Track Package',
    price: 'Starting at $2,600',
    costPrice: '$2,195',
    description: 'Enhanced protection for track and performance driving.',
    popular: false,
    coverage: 'Full Front + rockers, A-pillars, leading roof edge',
    ideal: 'Track enthusiasts, spirited driving, maximum front protection',
    features: [
      'Full front end coverage',
      'Rocker panel protection',
      'A-pillar coverage',
      'Leading roof edge protection',
      'Track-specific design',
      'High-impact area focus',
      'Performance-grade installation',
      'Comprehensive maintenance guide'
    ],
    addOns: []
  },
  {
    name: 'Full Body PPF',
    price: 'Starting at $6,500',
    costPrice: 'Custom Quote',
    description: 'Wall-to-wall protection for the ultimate showroom finish.',
    popular: false,
    coverage: 'Complete vehicle coverage',
    ideal: 'Exotic cars, show vehicles, collectors, ultimate protection',
    features: [
      'Complete vehicle coverage',
      'Custom pattern creation',
      'Seamless installation',
      'Clean-room preparation',
      'Multi-stage paint correction',
      'Professional photography session',
      'Comprehensive warranty',
      'White-glove aftercare service'
    ],
    addOns: []
  }
]

const benefits = [
  {
    title: 'Self-Healing Technology',
    description: 'Warmth from sun or water melts away light swirls and scuffs, maintaining that deep, just-delivered gloss.',
    icon: Sparkles
  },
  {
    title: 'Invisible Armor',
    description: 'Crystal-clear, low orange peel film with wrapped edges that disappear on complex curves.',
    icon: Shield
  },
  {
    title: 'Chemical Resistance',
    description: 'Protects against rock chips, sand, salt, bug acids, bird droppings, and environmental contaminants.',
    icon: Car
  },
  {
    title: 'Confidence to Drive',
    description: 'Enjoy your vehicle as intended without flinching at every pebble or parking lot door.',
    icon: Star
  }
]

const whyChooseUs = [
  {
    title: 'For Exotic Owners',
    points: [
      'Preserve perfection on low splitters, wide hips, and carbon fiber',
      'Show-car clarity with premium film and wrapped edges',
      'Protection from track rash and highway debris',
      'Documented protection for resale confidence'
    ]
  },
  {
    title: 'For New Vehicle Owners',
    points: [
      'Keep it new, for real - stop chips before they start',
      'Daily-driver durability resisting swirls from washes and parking lots',
      'Lower lifetime cost by protecting now vs. repainting later',
      'Lease-friendly - removable without harming OEM paint'
    ]
  }
]

const features = [
  'Self-healing & stain resistant to bug acids, bird droppings, salt, and UV',
  'Gloss or matte finishes to match or transform the look',
  'Manufacturer-backed warranty with professional installation',
  'Computer-cut precision patterns for perfect fit'
]

export default function PaintProtectionFilmPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-blackbird-ignition-blue" />
                <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                  Paint Protection Film
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Invisible Armor{' '}
                <span className="text-blackbird-ignition-blue">Protection</span>
              </h1>

              <p className="text-xl text-blackbird-off-white/70 mb-6">
                Invisible armor for the cars you love—whether it's an exotic or brand-new daily.
                Crystal-clear, self-healing urethane shield that absorbs the abuse so your finish doesn't.
              </p>

              <div className="flex justify-center sm:justify-start mb-8">
                <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 border border-blackbird-ignition-blue/20">
                  <Shield className="h-4 w-4 text-blackbird-ignition-blue flex-shrink-0" />
                  <span className="text-sm text-blackbird-ignition-blue font-medium text-center sm:text-left">
                    In Partnership with<br className="sm:hidden" /> Coastal Details Virginia Beach
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">See Protection Results</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/images/services/ceramic-coating/aston-martin-ceramic-coating-26.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              What You'll{' '}
              <span className="text-blackbird-ignition-blue">Feel and See</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-blackbird-charcoal/30 p-6 rounded-lg border border-blackbird-charcoal">
                <Check className="h-5 w-5 text-blackbird-ignition-blue flex-shrink-0 mt-0.5" />
                <span className="text-blackbird-off-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Why Choose{' '}
              <span className="text-blackbird-ignition-blue">PPF Protection?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Every mile throws something at your paint—rock chips, sand, salt, bug acids, careless doors.
              PPF is your invisible shield against it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-blackbird-ignition-blue" />
                  </div>
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-blackbird-off-white/70 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why It Matters */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {whyChooseUs.map((section, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
                <CardHeader>
                  <CardTitle className="text-xl font-heading font-bold text-blackbird-off-white">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-blackbird-ignition-blue mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-blackbird-off-white/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Smart Coverage{' '}
              <span className="text-blackbird-ignition-blue">Options</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              From essential protection to complete coverage, choose the perfect level
              of protection for your vehicle and driving style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blackbird-ignition-blue/50 scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blackbird-ignition-blue text-white">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-heading font-bold text-blackbird-off-white">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blackbird-ignition-blue mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-blackbird-off-white/60 text-sm">
                    {pkg.coverage}
                  </div>
                  <CardDescription className="text-blackbird-off-white/70 text-sm">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-blackbird-off-white mb-3 text-sm">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-blackbird-off-white/80">
                            <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {pkg.features.length > 4 && (
                          <li className="text-xs text-blackbird-off-white/60 ml-5">
                            +{pkg.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {pkg.addOns.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-blackbird-off-white mb-2 text-sm">Add-ons:</h4>
                        <ul className="space-y-1">
                          {pkg.addOns.map((addon, idx) => (
                            <li key={idx} className="text-xs text-blackbird-ignition-blue">
                              + {addon}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-3 border-t border-blackbird-charcoal/50">
                      <p className="text-xs text-blackbird-off-white/60">
                        <strong>Ideal for:</strong> {pkg.ideal}
                      </p>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className={`w-full ${pkg.popular ? 'bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white' : 'bg-blackbird-off-white hover:bg-blackbird-off-white/90 text-blackbird-black border border-blackbird-charcoal/20'} transition-colors`}
                    asChild
                  >
                    <Link href="/contact">
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Service Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-6 py-3 border border-blackbird-ignition-blue/20">
              <Car className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium">
                Pickup/Drop Off Service: +$200
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership & Process */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Professional PPF{' '}
              <span className="text-blackbird-ignition-blue">Partnership</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              We partner exclusively with Coastal Details Virginia Beach for PPF installation
              because we never compromise on quality. Only the best for your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Process */}
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-blackbird-off-white mb-6">
                  Our Complete PPF Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blackbird-ignition-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blackbird-ignition-blue font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Assessment & Quote</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        We evaluate your vehicle's needs and provide detailed pricing for your chosen coverage level.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blackbird-ignition-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blackbird-ignition-blue font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Partner Coordination</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        We coordinate directly with Coastal Details for professional installation scheduling.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blackbird-ignition-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blackbird-ignition-blue font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Professional Installation</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        Expert installation at Coastal Details' facility with precision patterns and clean-room environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blackbird-ignition-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blackbird-ignition-blue font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Ongoing Support</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        Complete aftercare support and maintenance guidance for long-lasting protection.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why This Partnership */}
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-blackbird-off-white mb-6">
                  Why Coastal Details?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Crown className="h-6 w-6 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Certified Excellence</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        Factory-trained installers with years of experience on luxury and exotic vehicles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-6 w-6 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Premium Facility</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        Clean-room environment with climate control for perfect installation conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Quality Standards</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        The same uncompromising standards we apply to our own work - no shortcuts, ever.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">Warranty Confidence</h4>
                      <p className="text-blackbird-off-white/70 text-sm">
                        Full manufacturer warranties backed by professional installation standards.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Drop-off Service */}
          <div className="bg-gradient-to-r from-blackbird-ignition-blue/10 to-blackbird-charcoal/20 rounded-2xl p-8 border border-blackbird-ignition-blue/20">
            <div className="text-center mb-6">
              <Car className="h-12 w-12 text-blackbird-ignition-blue mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-blackbird-off-white mb-4">
                Seamless Drop-off Service Available
              </h3>
              <p className="text-blackbird-off-white/80 max-w-2xl mx-auto mb-6">
                Can't make it to the installation appointment? We'll handle the coordination.
                Professional pickup and delivery service available for PPF installations.
              </p>
              <p className="text-blackbird-ignition-blue font-semibold">
                Drop-off & Pickup Service: +$200
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blackbird-black">
        <div className="container">
          <div className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 rounded-2xl p-8 md:p-12 text-center border border-blackbird-charcoal/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Book a consultation, choose your coverage, and drive away with showroom
              confidence—every single day.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <a
                href="tel:+1-757-500-1393"
                className="flex items-center text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
              >
                <span className="mr-2">📞</span>
                <span className="font-semibold">(757) 500-1393</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}