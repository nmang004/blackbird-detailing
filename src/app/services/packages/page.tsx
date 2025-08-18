import { Metadata } from 'next'
import Link from 'next/link'
import { Package, Check, Star, ArrowRight, Shield, Sparkles, Car, Zap, Crown, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Complete Detail Packages | Blackbird Detailing Virginia Beach',
  description: 'Comprehensive auto detailing packages in Virginia Beach. Sport, Grand Tourer, and Trackhawk packages combining interior, exterior, and protection services with package savings.',
  keywords: 'detail packages, complete car detailing, Virginia Beach, auto detail packages, full service detailing, car care packages',
}

const packages = [
  {
    name: 'Sport Package',
    price: '$799',
    originalPrice: '$899',
    savings: 'Save $100',
    duration: '1-2 Days',
    description: 'Complete detail for the driving enthusiast who demands performance and protection.',
    icon: Zap,
    popular: false,
    ideal: 'Sports cars, daily drivers, performance vehicles',
    exteriorServices: [
      'Complete exterior wash and decontamination',
      'Clay bar treatment',
      'Single-stage paint correction',
      'Tire and wheel cleaning',
      'Trim restoration',
      'Glass cleaning and treatment',
      '6-month paint sealant'
    ],
    interiorServices: [
      'Complete interior vacuum',
      'Dashboard and trim cleaning',
      'Leather cleaning and conditioning',
      'Fabric spot treatment',
      'Interior glass cleaning',
      'Air freshening treatment'
    ],
    additionalServices: [
      'Engine bay cleaning',
      'Door jamb detailing',
      'Before/after documentation'
    ]
  },
  {
    name: 'Grand Tourer Package',
    price: '$1,299',
    originalPrice: '$1,499',
    savings: 'Save $200',
    duration: '2-3 Days',
    description: 'Premium protection and restoration for luxury and touring vehicles.',
    icon: Crown,
    popular: true,
    ideal: 'Luxury vehicles, frequent travelers, premium cars',
    exteriorServices: [
      'Complete exterior wash and decontamination',
      'Clay bar and iron removal',
      'Two-stage paint correction',
      'Wheel and tire deep cleaning',
      'Trim restoration and protection',
      'Glass ceramic coating application',
      'Single-layer ceramic coating',
      '2-year protection warranty'
    ],
    interiorServices: [
      'Deep interior extraction cleaning',
      'Steam cleaning of all surfaces',
      'Leather deep cleaning and conditioning',
      'Fabric protection application',
      'Plastic and vinyl restoration',
      'UV protection treatment',
      'Odor elimination service'
    ],
    additionalServices: [
      'Engine bay detailing and protection',
      'Complete door jamb service',
      'Maintenance kit included',
      'Annual inspection service'
    ]
  },
  {
    name: 'Trackhawk Package',
    price: '$1,999',
    originalPrice: '$2,399',
    savings: 'Save $400',
    duration: '3-5 Days',
    description: 'Ultimate protection and perfection for exotic and high-performance vehicles.',
    icon: Trophy,
    popular: false,
    ideal: 'Exotic cars, supercars, show vehicles, collectors',
    exteriorServices: [
      'Complete multi-stage decontamination',
      'Clay, iron, and tar removal',
      'Three-stage paint correction',
      'Wheel and caliper deep restoration',
      'Trim and plastic restoration',
      'Complete glass ceramic coating',
      'Triple-layer ceramic coating system',
      '5-year protection warranty'
    ],
    interiorServices: [
      'Professional grade extraction cleaning',
      'Multi-stage leather restoration',
      'Advanced stain removal treatment',
      'Complete fabric protection system',
      'Headliner cleaning and protection',
      'UV protection for all surfaces',
      'Complete sanitization service'
    ],
    additionalServices: [
      'Complete engine bay restoration',
      'Undercarriage cleaning and protection',
      'Professional photography session',
      'Comprehensive maintenance system',
      'Quarterly inspection service',
      'Priority booking status'
    ]
  }
]

const comparison = [
  { feature: 'Exterior Wash & Decontamination', sport: true, grand: true, trackhawk: true },
  { feature: 'Clay Bar Treatment', sport: true, grand: true, trackhawk: true },
  { feature: 'Paint Correction', sport: '1-Stage', grand: '2-Stage', trackhawk: '3-Stage' },
  { feature: 'Ceramic Coating', sport: false, grand: '1-Layer', trackhawk: '3-Layer' },
  { feature: 'Interior Deep Cleaning', sport: true, grand: true, trackhawk: true },
  { feature: 'Leather Treatment', sport: 'Basic', grand: 'Premium', trackhawk: 'Restoration' },
  { feature: 'Fabric Protection', sport: false, grand: true, trackhawk: true },
  { feature: 'Glass Coating', sport: false, grand: true, trackhawk: true },
  { feature: 'Engine Bay Service', sport: 'Cleaning', grand: 'Detail', trackhawk: 'Restoration' },
  { feature: 'Warranty Period', sport: '6 Months', grand: '2 Years', trackhawk: '5 Years' },
  { feature: 'Maintenance Kit', sport: false, grand: true, trackhawk: true },
  { feature: 'Inspection Service', sport: false, grand: 'Annual', trackhawk: 'Quarterly' }
]

const addOns = [
  {
    name: 'Paint Protection Film',
    price: 'From $899',
    description: 'Clear protective film for high-impact areas'
  },
  {
    name: 'Headlight Restoration',
    price: '$199',
    description: 'Restore clarity and protection to foggy headlights'
  },
  {
    name: 'Wheel Coating',
    price: '$299',
    description: 'Ceramic coating for wheels and calipers'
  },
  {
    name: 'Pet Hair Removal',
    price: '$149',
    description: 'Specialized removal of embedded pet hair'
  }
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
              <Package className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                Complete Packages
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-blackbird-off-white mb-6">
              Complete Vehicle{' '}
              <span className="text-blackbird-ignition-blue">Transformation</span>
            </h1>
            
            <p className="text-xl text-blackbird-off-white/70 mb-12 max-w-3xl mx-auto">
              Our comprehensive detail packages combine interior, exterior, and protection 
              services for complete vehicle care. Save money while getting the ultimate 
              in automotive perfection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Get Package Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                <Link href="/portfolio">See Package Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Choose Your{' '}
              <span className="text-blackbird-ignition-blue">Performance Level</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Like high-performance vehicles, our packages are designed for different 
              driving styles and protection needs. Each package builds upon the last 
              with enhanced services and longer-lasting protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blackbird-ignition-blue/50 scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blackbird-ignition-blue text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4 mx-auto">
                    <pkg.icon className="h-8 w-8 text-blackbird-ignition-blue" />
                  </div>
                  
                  <CardTitle className="text-2xl font-heading font-bold text-blackbird-off-white">
                    {pkg.name}
                  </CardTitle>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-blackbird-ignition-blue">
                        {pkg.price}
                      </span>
                      <div className="text-right">
                        <div className="text-blackbird-off-white/50 line-through text-sm">
                          {pkg.originalPrice}
                        </div>
                        <div className="text-green-400 text-xs font-semibold">
                          {pkg.savings}
                        </div>
                      </div>
                    </div>
                    <div className="text-blackbird-off-white/60">
                      {pkg.duration}
                    </div>
                  </div>
                  
                  <CardDescription className="text-blackbird-off-white/70">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6 mb-6">
                    {/* Exterior Services */}
                    <div>
                      <h4 className="font-semibold text-blackbird-off-white mb-3 flex items-center">
                        <Shield className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                        Exterior Services
                      </h4>
                      <ul className="space-y-1">
                        {pkg.exteriorServices.slice(0, 4).map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                        {pkg.exteriorServices.length > 4 && (
                          <li className="text-xs text-blackbird-off-white/60 ml-5">
                            +{pkg.exteriorServices.length - 4} more services
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Interior Services */}
                    <div>
                      <h4 className="font-semibold text-blackbird-off-white mb-3 flex items-center">
                        <Car className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                        Interior Services
                      </h4>
                      <ul className="space-y-1">
                        {pkg.interiorServices.slice(0, 3).map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                        {pkg.interiorServices.length > 3 && (
                          <li className="text-xs text-blackbird-off-white/60 ml-5">
                            +{pkg.interiorServices.length - 3} more services
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-blackbird-charcoal/50">
                      <p className="text-xs text-blackbird-off-white/60">
                        <strong>Ideal for:</strong> {pkg.ideal}
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className={`w-full ${pkg.popular ? 'bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90' : 'bg-blackbird-charcoal hover:bg-blackbird-charcoal/80'} transition-colors`}
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

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Package{' '}
              <span className="text-blackbird-ignition-blue">Comparison</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Compare features across all packages to find the perfect level 
              of protection and service for your vehicle.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-blackbird-charcoal/30 rounded-lg border border-blackbird-charcoal">
              <thead>
                <tr className="border-b border-blackbird-charcoal/50">
                  <th className="text-left p-4 text-blackbird-off-white font-heading">Feature</th>
                  <th className="text-center p-4 text-blackbird-off-white font-heading">Sport</th>
                  <th className="text-center p-4 text-blackbird-off-white font-heading">Grand Tourer</th>
                  <th className="text-center p-4 text-blackbird-off-white font-heading">Trackhawk</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-blackbird-charcoal/30 hover:bg-blackbird-charcoal/20">
                    <td className="p-4 text-blackbird-off-white/80 font-medium">{item.feature}</td>
                    <td className="p-4 text-center">
                      {typeof item.sport === 'boolean' ? (
                        item.sport ? (
                          <Check className="h-5 w-5 text-blackbird-ignition-blue mx-auto" />
                        ) : (
                          <span className="text-blackbird-off-white/30">—</span>
                        )
                      ) : (
                        <span className="text-blackbird-off-white/80 text-sm">{item.sport}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.grand === 'boolean' ? (
                        item.grand ? (
                          <Check className="h-5 w-5 text-blackbird-ignition-blue mx-auto" />
                        ) : (
                          <span className="text-blackbird-off-white/30">—</span>
                        )
                      ) : (
                        <span className="text-blackbird-off-white/80 text-sm">{item.grand}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.trackhawk === 'boolean' ? (
                        item.trackhawk ? (
                          <Check className="h-5 w-5 text-blackbird-ignition-blue mx-auto" />
                        ) : (
                          <span className="text-blackbird-off-white/30">—</span>
                        )
                      ) : (
                        <span className="text-blackbird-off-white/80 text-sm">{item.trackhawk}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Optional{' '}
              <span className="text-blackbird-ignition-blue">Add-Ons</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Enhance any package with additional specialized services 
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-2">
                    {addon.name}
                  </h3>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 rounded-2xl p-8 md:p-12 text-center border border-blackbird-charcoal/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Ready for Complete Protection?
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Get the ultimate value with our comprehensive packages. Save money 
              while giving your vehicle the complete care it deserves.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Get Your Package Quote</Link>
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