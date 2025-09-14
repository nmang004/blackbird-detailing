import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Check, Star, ArrowRight, Sparkles, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Interior Only Detailing Service | Blackbird Detailing Virginia Beach',
  description: 'Signature interior detailing service for vehicles needing extra care. Perfect for prepping to sell, cleaning up after kids/pets, or after years of daily buildup.',
  keywords: 'interior detailing, car interior cleaning, Virginia Beach, leather conditioning, carpet cleaning, steam cleaning, interior protection',
}

const interiorService = {
  name: 'Intro Interior Only Detail',
  subtitle: 'Level 2/Executive Only',
  description: 'Our signature interior package, made for cars that need extra love! Perfect if you\'re prepping to sell, cleaning up after kids, pets, or after years of daily buildup. Optional exterior wash can be added.',
  pricing: {
    sedan: '$250',
    midsize: '$300',
    large: '$350'
  },
  duration: '2-4 hours',
  services: [
    'Detailed Vacuum',
    'Detailed Wipe Down',
    'All Cracks + Crevices',
    'Steam Cleaning All Panels & Vents',
    'Steam Clean and Shampoo Carpets & Seats',
    'Light to Moderate Stain Removal',
    'Leather Conditioned & Protected',
    'Windows Cleaned',
    'Door Jambs Cleaned',
    'Trunk Cleaned'
  ],
  features: [
    'Professional steam cleaning equipment',
    'Pro-grade, non-toxic products',
    'Light to moderate stain removal',
    'Leather conditioning and protection',
    'UV protection for all surfaces',
    'Odor elimination treatment',
    'Deep vacuum extraction',
    'All cracks and crevices cleaned'
  ],
  ideal: 'Vehicles with heavy interior use, pet owners, families with children, pre-sale preparation, years of daily buildup'
}

const benefits = [
  {
    title: 'Deep Steam Cleaning',
    description: 'Professional steam cleaning for all panels, vents, carpets and seats removes embedded dirt and sanitizes surfaces.',
    icon: Sparkles
  },
  {
    title: 'Stain Removal',
    description: 'Light to moderate stain removal techniques restore your interior to like-new condition.',
    icon: Shield
  },
  {
    title: 'Leather Care',
    description: 'Professional leather conditioning and protection extends the life of your leather surfaces.',
    icon: Star
  },
  {
    title: 'Complete Coverage',
    description: 'Every crack, crevice, and surface is meticulously cleaned and protected.',
    icon: Car
  }
]

const process = [
  {
    step: '01',
    title: 'Initial Assessment',
    description: 'Thorough inspection to identify problem areas and staining.'
  },
  {
    step: '02',
    title: 'Deep Vacuuming',
    description: 'Complete vacuum of all surfaces, cracks, and crevices.'
  },
  {
    step: '03',
    title: 'Steam Cleaning',
    description: 'Professional steam cleaning of panels, vents, carpets, and seats.'
  },
  {
    step: '04',
    title: 'Stain Treatment',
    description: 'Targeted removal of light to moderate stains and spots.'
  },
  {
    step: '05',
    title: 'Protection & Conditioning',
    description: 'Leather conditioning and surface protection application.'
  }
]

export default function InteriorOnlyPage() {
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
                  Interior Only Detail
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Signature Interior{' '}
                <span className="text-blackbird-ignition-blue">Deep Clean</span>
              </h1>

              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Our signature interior package, made for cars that need extra love! Perfect if you're
                prepping to sell, cleaning up after kids, pets, or after years of daily buildup.
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
                <div className="h-full bg-[url('/images/portfolio/before-after/interior-detailing/porsche-interior-detail-13.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Car className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-heading font-bold text-blackbird-off-white">
                  {interiorService.name}
                </CardTitle>
                <p className="text-blackbird-ignition-blue font-medium">
                  {interiorService.subtitle}
                </p>
                <CardDescription className="text-blackbird-off-white/70 max-w-2xl mx-auto">
                  {interiorService.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Pricing */}
                <div className="mb-8">
                  <h3 className="font-semibold text-blackbird-off-white mb-4 text-center">Service Pricing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blackbird-charcoal/50 rounded-lg">
                      <div className="text-blackbird-ignition-blue font-bold text-2xl mb-2">
                        {interiorService.pricing.sedan}
                      </div>
                      <div className="text-blackbird-off-white/80">
                        Sedans & Coupes
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blackbird-charcoal/50 rounded-lg">
                      <div className="text-blackbird-ignition-blue font-bold text-2xl mb-2">
                        {interiorService.pricing.midsize}
                      </div>
                      <div className="text-blackbird-off-white/80">
                        Midsize Truck/SUV
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blackbird-charcoal/50 rounded-lg">
                      <div className="text-blackbird-ignition-blue font-bold text-2xl mb-2">
                        {interiorService.pricing.large}
                      </div>
                      <div className="text-blackbird-off-white/80">
                        Large Truck/SUV
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-blackbird-off-white/60 text-sm">
                      Service Duration: {interiorService.duration}
                    </p>
                  </div>
                </div>

                {/* Services Included */}
                <div className="mb-8">
                  <h3 className="font-semibold text-blackbird-off-white mb-4">What's Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interiorService.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-blackbird-ignition-blue mr-3 flex-shrink-0" />
                        <span className="text-blackbird-off-white/80">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="pt-6 border-t border-blackbird-charcoal/50 text-center">
                  <p className="text-blackbird-off-white/70">
                    <strong className="text-blackbird-off-white">Ideal for:</strong> {interiorService.ideal}
                  </p>
                  <p className="text-blackbird-off-white/60 text-sm mt-2">
                    All products are pro-grade, non-toxic, and designed to care for you, your car, and the environment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Why Choose Interior{' '}
              <span className="text-blackbird-ignition-blue">Only Service?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Focused interior care delivers exceptional results for vehicles that need
              specialized attention inside, without the added cost of exterior services.
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

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Our Interior{' '}
              <span className="text-blackbird-ignition-blue">Process</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Our proven 5-step interior detailing process ensures every surface
              is thoroughly cleaned, treated, and protected.
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
              Ready for Interior Transformation?
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Give your vehicle's interior the deep cleaning and protection it deserves.
              Perfect for heavy-use vehicles that need specialized interior attention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Book Interior Detail</Link>
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