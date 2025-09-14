import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Check, Star, ArrowRight, Eye, Zap, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Professional Paint Correction Services | Blackbird Detailing Virginia Beach',
  description: 'Expert paint correction and swirl removal in Virginia Beach. Multi-stage polishing to restore your vehicle\'s paint to showroom condition. Single, two, and three-stage options available.',
  keywords: 'paint correction, swirl removal, paint polishing, paint restoration, Virginia Beach, automotive paint repair, clear coat correction',
}

const packages = [
  {
    name: 'Single Stage',
    price: '$599',
    duration: '1 Day',
    description: 'Light correction for newer vehicles with minor imperfections.',
    ideal: 'Newer vehicles, light swirls, minor scratches',
    features: [
      'Complete wash and decontamination',
      'Single-step machine polishing',
      'Minor swirl removal',
      'Light scratch elimination',
      'Paint depth measurement',
      'Before/after documentation',
      'Protective wax application',
      'Interior vacuum and wipe down'
    ],
    results: 'Removes 60-70% of paint imperfections'
  },
  {
    name: 'Two Stage',
    price: '$899',
    duration: '2 Days',
    description: 'Comprehensive correction for moderate paint damage.',
    popular: true,
    ideal: 'Most vehicles, moderate swirls, deeper scratches',
    features: [
      'Complete wash and decontamination',
      'Two-step machine polishing',
      'Compound and polish stages',
      'Moderate to heavy swirl removal',
      'Scratch and oxidation removal',
      'Paint depth measurement',
      'Before/after documentation',
      'Paint protection application',
      'Trim and tire dressing',
      'Full interior detail'
    ],
    results: 'Removes 80-90% of paint imperfections'
  },
  {
    name: 'Three Stage',
    price: '$1,299',
    duration: '3 Days',
    description: 'Maximum correction for heavily damaged or neglected paint.',
    ideal: 'Older vehicles, heavy damage, show car preparation',
    features: [
      'Complete wash and decontamination',
      'Three-step machine polishing',
      'Heavy compound stage',
      'Medium polish stage',
      'Fine finishing polish',
      'Maximum defect removal',
      'Paint thickness monitoring',
      'Detailed before/after photography',
      'Premium paint protection',
      'Complete vehicle detail',
      'Quality assurance inspection'
    ],
    results: 'Removes 90-95% of paint imperfections'
  }
]

const commonIssues = [
  {
    title: 'Swirl Marks',
    description: 'Fine circular scratches caused by improper washing techniques',
    severity: 'Light to Moderate'
  },
  {
    title: 'Water Spots',
    description: 'Mineral deposits that etch into the clear coat',
    severity: 'Moderate'
  },
  {
    title: 'Oxidation',
    description: 'Dull, chalky appearance from UV damage',
    severity: 'Moderate to Heavy'
  },
  {
    title: 'Key Scratches',
    description: 'Deep scratches that penetrate the clear coat',
    severity: 'Heavy'
  },
  {
    title: 'Bird Dropping Damage',
    description: 'Acid etching from bird droppings left on paint',
    severity: 'Light to Heavy'
  },
  {
    title: 'Buffer Trails',
    description: 'Holograms and trails from improper machine polishing',
    severity: 'Moderate'
  }
]

const process = [
  {
    step: '01',
    title: 'Paint Assessment',
    description: 'Detailed inspection and paint thickness measurement to determine correction needs.',
    icon: Eye
  },
  {
    step: '02',
    title: 'Wash & Decontamination',
    description: 'Thorough cleaning and decontamination to prepare surface for correction.',
    icon: Sparkles
  },
  {
    step: '03',
    title: 'Masking & Protection',
    description: 'Careful masking of trim and sensitive areas to prevent damage.',
    icon: Target
  },
  {
    step: '04',
    title: 'Machine Polishing',
    description: 'Progressive polishing stages using professional compounds and pads.',
    icon: Zap
  },
  {
    step: '05',
    title: 'Final Inspection',
    description: 'Quality control inspection and before/after documentation.',
    icon: Check
  }
]

const beforeAfter = [
  {
    title: 'BMW M3 Paint Correction',
    before: '/images/portfolio/before-after/ceramic-coating/bmw-ceramic-coating-2.webp',
    after: '/images/portfolio/before-after/ceramic-coating/bmw-ceramic-coating-11.webp',
    description: 'Heavy swirl removal and scratch elimination on BMW M3'
  },
  {
    title: 'Porsche 911 Restoration',
    before: '/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-15.webp',
    after: '/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-20.webp',
    description: 'Complete paint restoration on classic Porsche 911'
  }
]

export default function PaintCorrectionPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-blackbird-ignition-blue" />
                <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                  Paint Correction
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Restore Your Paint to{' '}
                <span className="text-blackbird-ignition-blue">Perfection</span>
              </h1>
              
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Transform your vehicle's paint from dull and damaged to showroom perfection. 
                Our multi-stage paint correction process removes swirls, scratches, and 
                imperfections while restoring depth and clarity.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
                  <Link href="/contact">Get Free Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">See Transformations</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-46.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              What We{' '}
              <span className="text-blackbird-ignition-blue">Correct</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Our paint correction services address a wide range of paint imperfections, 
              from minor swirl marks to heavy oxidation and deep scratches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-2">
                    {issue.title}
                  </h3>
                  <p className="text-blackbird-off-white/70 text-sm mb-3">
                    {issue.description}
                  </p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      issue.severity.includes('Heavy') 
                        ? 'border-red-500/30 text-red-400' 
                        : issue.severity.includes('Moderate')
                        ? 'border-yellow-500/30 text-yellow-400'
                        : 'border-green-500/30 text-green-400'
                    }`}
                  >
                    {issue.severity}
                  </Badge>
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
              Choose Your{' '}
              <span className="text-blackbird-ignition-blue">Correction Level</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              From light touch-ups to complete paint restoration, we offer three levels 
              of correction to match your vehicle's needs and your budget.
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
                    {pkg.duration} Service
                  </div>
                  <CardDescription className="text-blackbird-off-white/70">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-blackbird-ignition-blue/10 rounded-lg border border-blackbird-ignition-blue/20">
                      <p className="text-blackbird-ignition-blue font-semibold text-sm text-center">
                        {pkg.results}
                      </p>
                    </div>

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

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Expert{' '}
              <span className="text-blackbird-ignition-blue">Restoration</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Every paint correction follows our proven methodology, ensuring optimal 
              results while preserving your vehicle's clear coat thickness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-blackbird-ignition-blue/20 border-2 border-blackbird-ignition-blue flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blackbird-ignition-blue" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blackbird-charcoal/50 rounded px-2 py-1">
                    <span className="text-xs text-blackbird-ignition-blue font-bold">
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

      {/* Before/After Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              See the{' '}
              <span className="text-blackbird-ignition-blue">Transformation</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Real results from recent paint correction projects. See how we transform 
              damaged paint back to showroom condition.
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
              Ready to Restore Your Paint?
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Don't let paint imperfections diminish your vehicle's appearance. 
              Get a free assessment and discover what paint correction can do for your car.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
                <Link href="/contact">Schedule Assessment</Link>
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