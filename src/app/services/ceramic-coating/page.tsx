import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Check, X, Droplets, Sun, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Professional Ceramic Coating Services | Blackbird Detailing Virginia Beach',
  description: 'Premium ceramic coating protection for your vehicle in Virginia Beach. Professional-grade coatings with 5-10 year warranties. Sport, Grand Tourer, and Trackhawk packages available.',
  keywords: 'ceramic coating, paint protection, Virginia Beach, car ceramic coating, vehicle protection, paint coating, automotive ceramic coating',
}

const ceramicCoatingOptions = [
  {
    category: 'With Paint Enhancement',
    description: 'Complete paint correction and ceramic coating application for maximum results',
    popular: true,
    pricing: {
      coupe: '$1,000',
      sedan: '$1,200',
      midsize: '$1,400',
      large: '$1,600'
    },
    features: [
      'Complete paint decontamination',
      'Clay bar and contaminant removal',
      'Multi-stage paint correction',
      'Swirl and scratch removal',
      'Professional ceramic coating application',
      'Paint depth restoration',
      'Enhanced gloss and clarity',
      'Long-term protection warranty'
    ],
    ideal: 'Vehicles with paint imperfections, older vehicles, maximum enhancement desired'
  },
  {
    category: 'No Paint Enhancement',
    description: 'Ceramic coating application on well-maintained paint without correction',
    popular: false,
    pricing: {
      coupe: '$600',
      sedan: '$800',
      midsize: '$900',
      large: '$1,000'
    },
    features: [
      'Paint decontamination wash',
      'Clay bar treatment',
      'Surface preparation',
      'Professional ceramic coating application',
      'Surface inspection',
      'Protection warranty',
      'Maintenance instructions',
      'Quality guarantee'
    ],
    ideal: 'New vehicles, well-maintained paint, budget-conscious protection'
  }
]

const addOnServices = [
  {
    name: 'Glass Ceramic Coating',
    price: '$50 for Windshield, $20 per Window',
    description: 'Hydrophobic coating for improved visibility and easier cleaning'
  },
  {
    name: 'Trim Ceramic Coating',
    price: '$200',
    description: 'Protection and restoration for plastic trim and exterior accents'
  },
  {
    name: 'Wheel Ceramic Coating',
    price: '$400',
    description: 'Brake dust resistance and easier cleaning for wheels and calipers'
  },
  {
    name: 'Paint Protection Film',
    price: 'Pricing Varies',
    description: 'Clear protective film for high-impact areas - see PPF page for details'
  }
]

const benefits = [
  {
    icon: Droplets,
    title: 'Hydrophobic Protection',
    description: 'Water beads and rolls off the surface, making washing easier and preventing water spots.'
  },
  {
    icon: Sun,
    title: 'UV Protection',
    description: 'Blocks harmful UV rays that cause paint fading and oxidation over time.'
  },
  {
    icon: Shield,
    title: 'Chemical Resistance',
    description: 'Protects against bird droppings, tree sap, road salt, and environmental contaminants.'
  },
  {
    icon: Zap,
    title: 'Enhanced Gloss',
    description: 'Creates a deep, mirror-like finish that enhances your vehicle\'s appearance.'
  }
]

const process = [
  {
    step: '01',
    title: 'Assessment & Wash',
    description: 'Thorough inspection and decontamination wash to prepare the surface.'
  },
  {
    step: '02', 
    title: 'Paint Correction',
    description: 'Remove swirls, scratches, and imperfections for a perfect base.'
  },
  {
    step: '03',
    title: 'Surface Preparation',
    description: 'Clay bar treatment and final polish to ensure optimal coating adhesion.'
  },
  {
    step: '04',
    title: 'Coating Application',
    description: 'Professional application of ceramic coating at your location with mobile equipment.'
  },
  {
    step: '05',
    title: 'Curing & Inspection',
    description: 'Proper curing time and final quality inspection before delivery.'
  }
]

export default function CeramicCoatingPage() {
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
                  Ceramic Coating
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Professional Ceramic{' '}
                <span className="text-blackbird-ignition-blue">Coating</span>
              </h1>

              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Professional-grade ceramic coatings applied at your location with mobile equipment.
                Our service provides years of protection against environmental contaminants, UV damage,
                and everyday wear - all from the convenience of your driveway.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">View Results</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/images/services/ceramic-coating/porsche-ceramic-coating-20.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Why Choose{' '}
              <span className="text-blackbird-ignition-blue">Ceramic Coating?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Ceramic coatings provide superior protection compared to traditional wax or sealants, 
              with benefits that last for years, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Ceramic Coating{' '}
              <span className="text-blackbird-ignition-blue">Options</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Professional ceramic coating with or without paint enhancement.
              Choose based on your vehicle's current paint condition and desired results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {ceramicCoatingOptions.map((option, index) => (
              <Card key={index} className={`relative bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 ${option.popular ? 'ring-2 ring-blackbird-ignition-blue/50 scale-105' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blackbird-ignition-blue text-white">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading font-bold text-blackbird-off-white">
                    {option.category}
                  </CardTitle>
                  <CardDescription className="text-blackbird-off-white/70">
                    {option.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Pricing by Vehicle Type */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-blackbird-off-white mb-3">Pricing by Vehicle Type:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/80">Coupe:</span>
                        <span className="text-blackbird-ignition-blue font-bold">{option.pricing.coupe}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/80">Sedan:</span>
                        <span className="text-blackbird-ignition-blue font-bold">{option.pricing.sedan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/80">Midsize Truck/SUV:</span>
                        <span className="text-blackbird-ignition-blue font-bold">{option.pricing.midsize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/80">Large Truck/SUV:</span>
                        <span className="text-blackbird-ignition-blue font-bold">{option.pricing.large}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-blackbird-off-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-4 w-4 text-blackbird-ignition-blue mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-blackbird-charcoal/50">
                      <p className="text-xs text-blackbird-off-white/60">
                        <strong>Ideal for:</strong> {option.ideal}
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className={`w-full ${option.popular ? 'bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white' : 'bg-blackbird-charcoal hover:bg-blackbird-charcoal/80 text-blackbird-off-white'} transition-colors`}
                    asChild
                  >
                    <Link href="/contact">
                      Select {option.category}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-On Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-blackbird-off-white mb-4">
                Available Add-On Services
              </h3>
              <p className="text-lg text-blackbird-off-white/70">
                Enhance your ceramic coating with additional protection services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((addon, index) => (
                <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300 text-center">
                  <CardContent className="p-6">
                    <h4 className="font-heading font-bold text-blackbird-off-white mb-2">
                      {addon.name}
                    </h4>
                    <p className="text-blackbird-ignition-blue font-semibold mb-3">
                      {addon.price}
                    </p>
                    <p className="text-blackbird-off-white/70 text-sm">
                      {addon.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              The Luxury{' '}
              <span className="text-blackbird-ignition-blue">Experience</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Every ceramic coating application follows our proven 5-step process, 
              ensuring optimal adhesion and long-lasting protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-blackbird-ignition-blue/20 border-2 border-blackbird-ignition-blue flex items-center justify-center">
                    <span className="text-blackbird-ignition-blue font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blackbird-ignition-blue/50 to-transparent" />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-blackbird-off-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-blackbird-off-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 rounded-2xl p-8 md:p-12 text-center border border-blackbird-charcoal/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Protect Your Investment Today
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Don't wait for damage to occur. Ceramic coating provides the ultimate protection 
              for your vehicle's paint, maintaining its value and appearance for years to come.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Get Your Quote Today</Link>
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