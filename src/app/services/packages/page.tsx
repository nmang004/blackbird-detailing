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

const detailPackages = [
  {
    name: 'Level 1 Intro Full Detail',
    subtitle: 'Express Full Detail',
    description: 'Complete interior & exterior detail, designed to clean every inch of your car! Perfect for vehicles 1-3 years old or newer.',
    icon: Zap,
    popular: false,
    ideal: 'Newer vehicles (1-3 years), vehicles in average condition',
    pricing: {
      sedan: '$280',
      midsize: '$300',
      large: '$320'
    },
    note: 'Pricing based on vehicles in average condition. Vehicle will be inspected prior to service for any additional recommendations.',
    exteriorServices: [
      'Detailed Hand Wash + Foam Bath',
      'Bug Splatters Cleaned Off',
      'Wheels + Rims Deep Cleaned',
      'Tires Shined + Dressed',
      'Clean Gas Cap Area',
      'Premium Spray Wax/Paint Sealant',
      'Blow Dry and Microfiber Hand Dry'
    ],
    interiorServices: [
      'Detailed Vacuum',
      'Detailed Wipe Down',
      'All Cracks + Crevices',
      'Floor Mats Cleaned',
      'Windows Cleaned',
      'Door Jambs Cleaned',
      'Trunk Cleaned',
      'Floor Mats Dressed (Non-Slick)'
    ],
    addOns: [
      { name: 'Leather Conditioning', price: '1 Row $40, 2 Row $60, 3 Row $80' },
      { name: 'Steam Clean & Ozone Odor Treatment', price: '$250' },
      { name: 'Engine Bay Detail', price: '$60' },
      { name: 'Steam Clean Carpet/Seats', price: '$60, $80, $120' },
      { name: 'Clay Bar/Paint Decontamination', price: '$60, $75, $90' },
      { name: 'Black Trim Restoration', price: '$250 (Ceramic Coating)' },
      { name: 'Trash/Item Removal', price: '$50 Fee' }
    ]
  },
  {
    name: 'Level 2 Intro Full Detail',
    subtitle: 'Executive Full Detail',
    description: 'Our most intensive deep cleaning package that reaches every crack, corner and crevice of your vehicle, leaving you with a cleaner vehicle than when you drove it off the lot! Perfect for vehicles 3-5 years old or older.',
    icon: Crown,
    popular: true,
    ideal: 'Older vehicles (3-5+ years), vehicles needing intensive cleaning',
    pricing: {
      sedan: '$400',
      midsize: '$450',
      large: '$500'
    },
    note: 'Pricing based on vehicles in average condition. Vehicle will be inspected prior to service for any additional recommendations.',
    exteriorServices: [
      'Detailed Hand Wash + Foam Bath',
      'Clay Bar & Paint Decontamination (as needed)',
      'Bug Splatters Cleaned Off',
      'Wheels + Rims Deep Cleaned',
      'Wheel Wells Cleaned',
      'Tires Shined + Dressed',
      'Clean Gas Cap Area',
      'Premium Paint Sealant (8-12mo Protection)',
      'Blow Dry and Microfiber Hand Dry',
      'Black Trim Restored & UV Protected'
    ],
    interiorServices: [
      'Detailed Vacuum',
      'Detailed Wipe Down',
      'All Cracks + Crevices',
      'Floor Mats Cleaned',
      'Leather Conditioned & Protected',
      'Windows Cleaned (Streak Free)',
      'Door Jambs Cleaned',
      'Trunk Cleaned',
      'Steam Clean All Panels & Vents',
      'Steam Clean Carpets & Seats'
    ],
    addOns: [
      { name: '1 Year Ceramic Coating', price: '$250, $300, $400' },
      { name: 'Black Trim Restoration', price: '$250 (Ceramic Coating)' },
      { name: 'Glass Ceramic Coating', price: '$40 for Windshield, $20 per Window' },
      { name: 'Hard Water Spot Removal on Windows', price: '$40 for Windshield, $20 per Window' },
      { name: 'Trash/Item Removal', price: '$50 Fee' },
      { name: 'Engine Bay Detail', price: '$60' },
      { name: 'Ozone Odor Treatment', price: '$100' }
    ]
  }
]

const specialtyServices = [
  {
    name: 'Intro Exterior Only Detail',
    subtitle: 'Level 2/Executive Only',
    description: 'Premium exterior detail designed to remove micro contaminants from your cars paint, leave a silky smooth finish, and protect the paint for up to 8 months!',
    pricing: {
      sedan: '$150',
      midsize: '$170',
      large: '$190'
    },
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
    ]
  },
  {
    name: 'Intro Interior Only Detail',
    subtitle: 'Level 2/Executive Only',
    description: 'Our signature interior package, made for cars that need extra love! Perfect if you\'re prepping to sell, cleaning up after kids, pets, or after years of daily buildup. Optional exterior wash can be added.',
    pricing: {
      sedan: '$250',
      midsize: '$300',
      large: '$350'
    },
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

// Add-ons will be displayed per package

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
              Professional Detail{' '}
              <span className="text-blackbird-ignition-blue">Packages</span>
            </h1>

            <p className="text-xl text-blackbird-off-white/70 mb-12 max-w-3xl mx-auto">
              Complete interior and exterior detailing services designed to clean every inch
              of your vehicle. From ongoing maintenance programs to full detail packages,
              we provide the level of care your investment deserves.
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

      {/* Maintenance Programs Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Full Vehicle Care{' '}
              <span className="text-blackbird-ignition-blue">Programs</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Ongoing maintenance programs designed for enthusiasts who demand consistent luxury care.
              Your vehicle maintained at the highest level, automatically scheduled at your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Weekly Luxury Program */}
            <Card className="relative bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 ring-2 ring-blackbird-ignition-blue/50 scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blackbird-ignition-blue text-white">
                For Exotics & Track Cars
              </Badge>

              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4 mx-auto">
                  <Crown className="h-8 w-8 text-blackbird-ignition-blue" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-blackbird-off-white">
                  Weekly Luxury Care
                </CardTitle>
                <p className="text-blackbird-ignition-blue font-medium mb-4">
                  Ultimate Protection Program
                </p>
                <CardDescription className="text-blackbird-off-white/70">
                  For high-performance and exotic vehicles requiring pristine condition maintenance.
                  Complete mobile care at your location every week.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-blackbird-off-white mb-3">Weekly Services Include:</h4>
                  <ul className="space-y-2">
                    {[
                      'Complete wash and decontamination',
                      'Paint protection maintenance',
                      'Interior deep clean and conditioning',
                      'Wheel and tire detailing',
                      'Glass and trim restoration',
                      'Engine bay maintenance (monthly)',
                      'Priority scheduling and member rates'
                    ].map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                        <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-blackbird-ignition-blue/10 rounded-lg border border-blackbird-ignition-blue/20">
                  <h4 className="font-semibold text-blackbird-off-white mb-2">Investment:</h4>
                  <p className="text-blackbird-ignition-blue font-bold text-lg">Starting at $400/week</p>
                  <p className="text-blackbird-off-white/60 text-sm">Pricing based on vehicle type and service location</p>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 transition-colors"
                  asChild
                >
                  <Link href="/contact">
                    Enroll in Weekly Program
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bi-Weekly Program */}
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4 mx-auto">
                  <Package className="h-8 w-8 text-blackbird-ignition-blue" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-blackbird-off-white">
                  Bi-Weekly Care
                </CardTitle>
                <p className="text-blackbird-ignition-blue font-medium mb-4">
                  Luxury Daily Driver Program
                </p>
                <CardDescription className="text-blackbird-off-white/70">
                  Perfect for luxury daily drivers and weekend enthusiasts. Consistent care
                  every two weeks to maintain that showroom condition.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-blackbird-off-white mb-3">Bi-Weekly Services Include:</h4>
                  <ul className="space-y-2">
                    {[
                      'Full exterior wash and dry',
                      'Paint sealant maintenance',
                      'Interior vacuum and wipe-down',
                      'Leather conditioning (as needed)',
                      'Wheel cleaning and tire dressing',
                      'Window cleaning inside and out',
                      'Member pricing on add-ons'
                    ].map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                        <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-blackbird-charcoal/50 rounded-lg">
                  <h4 className="font-semibold text-blackbird-off-white mb-2">Investment:</h4>
                  <p className="text-blackbird-ignition-blue font-bold text-lg">Starting at $180/bi-weekly</p>
                  <p className="text-blackbird-off-white/60 text-sm">Pricing based on vehicle type and service location</p>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blackbird-charcoal hover:bg-blackbird-charcoal/80 transition-colors"
                  asChild
                >
                  <Link href="/contact">
                    Enroll in Bi-Weekly Program
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Maintenance */}
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-blackbird-ignition-blue" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-blackbird-off-white">
                  Monthly Protection
                </CardTitle>
                <p className="text-blackbird-ignition-blue font-medium mb-4">
                  Maintenance Program
                </p>
                <CardDescription className="text-blackbird-off-white/70">
                  Monthly protection renewal and maintenance for ceramic-coated vehicles
                  or those needing regular upkeep.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-blackbird-off-white mb-3">Monthly Services Include:</h4>
                  <ul className="space-y-2">
                    {[
                      'Ceramic coating maintenance wash',
                      'Paint protection inspection',
                      'Interior maintenance clean',
                      'Trim and plastic restoration',
                      'Protection product top-ups',
                      'Condition assessment report'
                    ].map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                        <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-blackbird-charcoal/50 rounded-lg">
                  <h4 className="font-semibold text-blackbird-off-white mb-2">Investment:</h4>
                  <p className="text-blackbird-ignition-blue font-bold text-lg">Starting at $120/month</p>
                  <p className="text-blackbird-off-white/60 text-sm">Perfect for maintained vehicles</p>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blackbird-charcoal hover:bg-blackbird-charcoal/80 transition-colors"
                  asChild
                >
                  <Link href="/contact">
                    Enroll in Monthly Program
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Program Benefits */}
          <div className="bg-blackbird-charcoal/20 rounded-2xl p-8 md:p-12 border border-blackbird-charcoal/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-blackbird-off-white mb-4">
                Program Member Benefits
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Crown,
                  title: 'Priority Scheduling',
                  description: 'Members get first access to premium time slots'
                },
                {
                  icon: Trophy,
                  title: 'Member Pricing',
                  description: '15-20% savings on all additional services'
                },
                {
                  icon: Car,
                  title: 'Drop-off Service',
                  description: 'Complimentary vehicle pickup and delivery'
                },
                {
                  icon: Shield,
                  title: 'Automated Care',
                  description: 'Set it and forget it - we handle the scheduling'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-blackbird-ignition-blue" />
                  </div>
                  <h4 className="font-heading font-semibold text-blackbird-off-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-blackbird-off-white/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Full Detail{' '}
              <span className="text-blackbird-ignition-blue">Packages</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Professional interior and exterior detailing designed for different vehicle
              ages and conditions. All products are pro-grade, non-toxic, and designed
              to care for you, your car, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {detailPackages.map((pkg, index) => (
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

                  <p className="text-blackbird-ignition-blue font-medium mb-4">
                    {pkg.subtitle}
                  </p>

                  <CardDescription className="text-blackbird-off-white/70">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-blackbird-off-white mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/80">Sedans & Coupes:</span>
                        <span className="text-blackbird-ignition-blue font-bold">{pkg.pricing.sedan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/80">Midsize Truck/SUV:</span>
                        <span className="text-blackbird-ignition-blue font-bold">{pkg.pricing.midsize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/80">Large Truck/SUV:</span>
                        <span className="text-blackbird-ignition-blue font-bold">{pkg.pricing.large}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 mb-6">
                    {/* Exterior Services */}
                    <div>
                      <h4 className="font-semibold text-blackbird-off-white mb-3 flex items-center">
                        <Shield className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                        Exterior Services
                      </h4>
                      <ul className="space-y-1">
                        {pkg.exteriorServices.slice(0, 5).map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                        {pkg.exteriorServices.length > 5 && (
                          <li className="text-xs text-blackbird-off-white/60 ml-5">
                            +{pkg.exteriorServices.length - 5} more services
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
                        {pkg.interiorServices.slice(0, 5).map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                        {pkg.interiorServices.length > 5 && (
                          <li className="text-xs text-blackbird-off-white/60 ml-5">
                            +{pkg.interiorServices.length - 5} more services
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-blackbird-charcoal/50">
                      <p className="text-xs text-blackbird-off-white/60">
                        <strong>Ideal for:</strong> {pkg.ideal}
                      </p>
                      <p className="text-xs text-blackbird-off-white/50 mt-2">
                        {pkg.note}
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

          {/* Specialty Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-blackbird-off-white mb-4">
                Specialty Detail Services
              </h3>
              <p className="text-lg text-blackbird-off-white/70">
                Focused interior or exterior services for specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {specialtyServices.map((service, index) => (
                <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-heading font-bold text-blackbird-off-white">
                      {service.name}
                    </CardTitle>
                    <p className="text-blackbird-ignition-blue font-medium">
                      {service.subtitle}
                    </p>
                    <CardDescription className="text-blackbird-off-white/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-blackbird-off-white mb-3">Pricing:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-blackbird-off-white/80">Sedans & Coupes:</span>
                          <span className="text-blackbird-ignition-blue font-bold">{service.pricing.sedan}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blackbird-off-white/80">Midsize Truck/SUV:</span>
                          <span className="text-blackbird-ignition-blue font-bold">{service.pricing.midsize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blackbird-off-white/80">Large Truck/SUV:</span>
                          <span className="text-blackbird-ignition-blue font-bold">{service.pricing.large}</span>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-blackbird-off-white mb-3">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.services.slice(0, 6).map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blackbird-off-white/80">
                            <Check className="h-3 w-3 text-blackbird-ignition-blue mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                        {service.services.length > 6 && (
                          <li className="text-xs text-blackbird-off-white/60 ml-5">
                            +{service.services.length - 6} more services
                          </li>
                        )}
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-blackbird-charcoal hover:bg-blackbird-charcoal/80 transition-colors"
                      asChild
                    >
                      <Link href="/contact">
                        Select {service.name}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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

      {/* Package Add-Ons Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Available{' '}
              <span className="text-blackbird-ignition-blue">Add-Ons</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Enhance your detail package with additional specialized services.
              Add-on availability and pricing may vary by package level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {detailPackages.map((pkg, pkgIndex) => (
              <div key={pkgIndex}>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-2">
                    {pkg.name} Add-Ons
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.addOns.map((addon, index) => (
                    <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blackbird-off-white mb-2 text-sm">
                          {addon.name}
                        </h4>
                        <p className="text-blackbird-ignition-blue font-semibold text-sm mb-2">
                          {addon.price}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-blackbird-off-white/60">
              All products are pro-grade, non-toxic, and designed to care for you, your car, and the environment.
            </p>
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