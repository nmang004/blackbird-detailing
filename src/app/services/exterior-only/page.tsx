import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Check, Star, ArrowRight, Sparkles, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Exterior Only Detailing Service | Blackbird Detailing Virginia Beach',
  description: 'Premium exterior detail designed to remove micro contaminants from your car\'s paint and protect it for up to 8 months. Professional clay bar and paint sealant service.',
  keywords: 'exterior detailing, paint decontamination, clay bar service, paint sealant, Virginia Beach, car exterior cleaning, trim restoration',
}

const exteriorService = {
  name: 'Intro Exterior Only Detail',
  subtitle: 'Level 2/Executive Only',
  description: 'This premium exterior detail is designed to remove micro contaminants from your cars paint, leave a silky smooth finish, and protect the paint for up to 8 months!',
  pricing: {
    sedan: '$150',
    midsize: '$170',
    large: '$190'
  },
  duration: '2-3 hours',
  protection: '8-12 months',
  services: [
    'Detailed Hand Wash + Foam Bath',
    'Bug Splatters Cleaned Off',
    'Clay Bar Service',
    'Micro Contaminants Removed from Paint',
    'Wheels & Tires Deep Cleaned',
    'Tires Shined',
    'Premium Paint Sealant (8-12mo Protection)',
    'Black Trim Restored & UV Protected',
    'Blow Dry & Microfiber Hand Dry'
  ],
  features: [
    'Professional clay bar decontamination',
    'Pro-grade, non-toxic products',
    'Premium paint sealant application',
    'Black trim restoration and UV protection',
    'Wheel and tire deep cleaning',
    'Hand wash and foam bath',
    'Microfiber hand drying',
    '8-12 months paint protection'
  ],
  ideal: 'Vehicles with exterior contamination, paint that feels rough, pre-ceramic coating prep, regular maintenance'
}

const benefits = [
  {
    title: 'Clay Bar Decontamination',
    description: 'Professional clay bar service removes embedded contaminants that washing alone cannot eliminate.',
    icon: Sparkles
  },
  {
    title: 'Paint Sealant Protection',
    description: 'Premium paint sealant provides 8-12 months of protection against UV damage and environmental contaminants.',
    icon: Shield
  },
  {
    title: 'Trim Restoration',
    description: 'Black trim restoration and UV protection brings faded trim back to life.',
    icon: Star
  },
  {
    title: 'Smooth Finish',
    description: 'Leaves your paint feeling silky smooth with enhanced gloss and clarity.',
    icon: Car
  }
]

const process = [
  {
    step: '01',
    title: 'Initial Wash',
    description: 'Detailed hand wash and foam bath to remove surface dirt and debris.'
  },
  {
    step: '02',
    title: 'Decontamination',
    description: 'Clay bar service removes embedded contaminants and bug splatters.'
  },
  {
    step: '03',
    title: 'Wheels & Tires',
    description: 'Deep cleaning of wheels and tires with tire shine application.'
  },
  {
    step: '04',
    title: 'Paint Protection',
    description: 'Premium paint sealant application for long-lasting protection.'
  },
  {
    step: '05',
    title: 'Finishing Touches',
    description: 'Trim restoration, UV protection, and microfiber hand dry.'
  }
]

const comparison = [
  {
    feature: 'Hand Wash & Foam Bath',
    basic: false,
    exterior: true
  },
  {
    feature: 'Clay Bar Decontamination',
    basic: false,
    exterior: true
  },
  {
    feature: 'Paint Sealant Protection',
    basic: false,
    exterior: true
  },
  {
    feature: 'Trim Restoration',
    basic: false,
    exterior: true
  },
  {
    feature: 'Protection Duration',
    basic: '1-2 weeks',
    exterior: '8-12 months'
  }
]

export default function ExteriorOnlyPage() {
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
                  Exterior Only Detail
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Premium Exterior{' '}
                <span className="text-blackbird-ignition-blue">Protection</span>
              </h1>

              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Premium exterior detail designed to remove micro contaminants from your car's paint,
                leave a silky smooth finish, and protect the paint for up to 8 months!
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
                <div className="h-full bg-[url('/api/placeholder/500/500')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Shield className="h-8 w-8 text-white" />
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
                  {exteriorService.name}
                </CardTitle>
                <p className="text-blackbird-ignition-blue font-medium">
                  {exteriorService.subtitle}
                </p>
                <CardDescription className="text-blackbird-off-white/70 max-w-2xl mx-auto">
                  {exteriorService.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Pricing */}
                <div className="mb-8">
                  <h3 className="font-semibold text-blackbird-off-white mb-4 text-center">Service Pricing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blackbird-charcoal/50 rounded-lg">
                      <div className="text-blackbird-ignition-blue font-bold text-2xl mb-2">
                        {exteriorService.pricing.sedan}
                      </div>
                      <div className="text-blackbird-off-white/80">
                        Sedans & Coupes
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blackbird-charcoal/50 rounded-lg">
                      <div className="text-blackbird-ignition-blue font-bold text-2xl mb-2">
                        {exteriorService.pricing.midsize}
                      </div>
                      <div className="text-blackbird-off-white/80">
                        Midsize Truck/SUV
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blackbird-charcoal/50 rounded-lg">
                      <div className="text-blackbird-ignition-blue font-bold text-2xl mb-2">
                        {exteriorService.pricing.large}
                      </div>
                      <div className="text-blackbird-off-white/80">
                        Large Truck/SUV
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 space-y-1">
                    <p className="text-blackbird-off-white/60 text-sm">
                      Service Duration: {exteriorService.duration}
                    </p>
                    <p className="text-blackbird-ignition-blue text-sm font-semibold">
                      Protection Lasts: {exteriorService.protection}
                    </p>
                  </div>
                </div>

                {/* Services Included */}
                <div className="mb-8">
                  <h3 className="font-semibold text-blackbird-off-white mb-4">What's Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exteriorService.services.map((service, idx) => (
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
                    <strong className="text-blackbird-off-white">Ideal for:</strong> {exteriorService.ideal}
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
              Why Choose Exterior{' '}
              <span className="text-blackbird-ignition-blue">Only Service?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Focused exterior care delivers professional-grade paint decontamination
              and protection without the cost of interior services.
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

      {/* Comparison Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              How It Compares to{' '}
              <span className="text-blackbird-ignition-blue">Basic Wash</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              See the difference between a basic car wash and our professional
              exterior detailing service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blackbird-charcoal/50">
                      <th className="text-left p-4 text-blackbird-off-white font-heading">Service</th>
                      <th className="text-center p-4 text-blackbird-off-white/60 font-heading">Basic Wash</th>
                      <th className="text-center p-4 text-blackbird-ignition-blue font-heading">Exterior Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-b border-blackbird-charcoal/30 hover:bg-blackbird-charcoal/20">
                        <td className="p-4 text-blackbird-off-white/80 font-medium">{item.feature}</td>
                        <td className="p-4 text-center">
                          {typeof item.basic === 'boolean' ? (
                            item.basic ? (
                              <Check className="h-5 w-5 text-blackbird-ignition-blue mx-auto" />
                            ) : (
                              <span className="text-blackbird-off-white/30">—</span>
                            )
                          ) : (
                            <span className="text-blackbird-off-white/60 text-sm">{item.basic}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof item.exterior === 'boolean' ? (
                            item.exterior ? (
                              <Check className="h-5 w-5 text-blackbird-ignition-blue mx-auto" />
                            ) : (
                              <span className="text-blackbird-off-white/30">—</span>
                            )
                          ) : (
                            <span className="text-blackbird-ignition-blue text-sm font-semibold">{item.exterior}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Our Exterior{' '}
              <span className="text-blackbird-ignition-blue">Process</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Our proven 5-step exterior detailing process ensures your vehicle's
              paint is properly decontaminated and protected.
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
      <section className="py-20 md:py-32 bg-blackbird-black">
        <div className="container">
          <div className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 rounded-2xl p-8 md:p-12 text-center border border-blackbird-charcoal/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Ready for Premium Exterior Care?
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Transform your vehicle's exterior with professional decontamination
              and long-lasting paint protection that keeps it looking its best.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Book Exterior Detail</Link>
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