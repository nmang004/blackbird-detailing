import { Metadata } from 'next'
import Link from 'next/link'
import { Crown, Star, CheckCircle, CalendarDays, Shield, Sparkles, Award, Phone, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { UrableBooking } from '@/components/integrations/urable-booking'

export const metadata: Metadata = {
  title: 'Blackbird Signature Membership | Exclusive Recurring Detailing | Virginia Beach',
  description: 'Join Blackbird\'s exclusive membership program for recurring luxury detailing services. Monthly and bi-weekly packages available with priority booking and VIP treatment.',
  keywords: 'auto detailing membership, recurring car detailing, luxury car care subscription, Virginia Beach, monthly detailing, bi-weekly detailing',
}

const membershipPlans = {
  inAndOut: {
    title: 'In & Out Membership',
    subtitle: 'Complete Interior & Exterior Care',
    plans: [
      {
        name: 'Bi-Monthly Plan',
        frequency: 'Every 2 Months',
        pricing: {
          sedan: { monthly: '$240', annual: '$1,300' },
          midsize: { monthly: '$260', annual: '$1,400' },
          large: { monthly: '$280', annual: '$1,650' }
        },
        popular: false,
        description: 'Complete interior and exterior care every two months for consistent protection.',
        features: [
          'Complete exterior wash & detailing',
          'Full interior deep cleaning',
          'Leather conditioning & protection',
          'Fabric cleaning & protection',
          'Wheel & tire cleaning',
          'Glass cleaning inside & out',
          'Trim restoration & protection',
          'Door jamb cleaning'
        ]
      },
      {
        name: 'Monthly Plan',
        frequency: 'Every Month',
        pricing: {
          sedan: { monthly: '$180', annual: '$2,000' },
          midsize: { monthly: '$210', annual: '$2,400' },
          large: { monthly: '$240', annual: '$2,700' }
        },
        popular: true,
        description: 'Monthly complete care for vehicles that demand consistent perfection.',
        features: [
          'Monthly complete detailing service',
          'Interior & exterior perfection',
          'Premium product protection',
          'Leather conditioning treatment',
          'Advanced cleaning techniques',
          'Priority booking status',
          'Quality inspection guarantee',
          'Maintenance recommendations'
        ]
      },
      {
        name: 'Bi-Weekly Plan',
        frequency: 'Every 2 Weeks',
        pricing: {
          sedan: { monthly: '$140', annual: '$3,150' },
          midsize: { monthly: '$160', annual: '$3,650' },
          large: { monthly: '$180', annual: '$4,150' }
        },
        popular: false,
        description: 'Ultimate care for enthusiasts who demand showroom condition every two weeks.',
        features: [
          'Bi-weekly complete service',
          'Paint correction as needed',
          'Interior deep cleaning',
          'Exterior paint protection',
          'Wheel & tire maintenance',
          'Premium product application',
          'White-glove service',
          'Guaranteed availability'
        ]
      }
    ]
  },
  exteriorOnly: {
    title: 'Exterior Only Membership',
    subtitle: 'Premium Exterior Care & Protection',
    plans: [
      {
        name: 'Bi-Monthly Exterior',
        frequency: 'Every 2 Months',
        pricing: {
          sedan: { monthly: '$140', annual: '$800' },
          midsize: { monthly: '$160', annual: '$900' },
          large: { monthly: '$180', annual: '$1,000' }
        },
        popular: false,
        description: 'Professional exterior-only care for the discerning owner.',
        features: [
          'Professional exterior wash',
          'Premium paint protection',
          'Wheel & tire detailing',
          'Glass cleaning & treatment',
          'Trim restoration',
          'Paint decontamination',
          'Ceramic spray protection',
          'Quality guarantee'
        ]
      },
      {
        name: 'Monthly Exterior',
        frequency: 'Every Month',
        pricing: {
          sedan: { monthly: '$100', annual: '$1,100' },
          midsize: { monthly: '$120', annual: '$1,200' },
          large: { monthly: '$140', annual: '$1,400' }
        },
        popular: true,
        description: 'Monthly exterior perfection for consistent showroom appearance.',
        features: [
          'Monthly exterior detailing',
          'Paint protection application',
          'Wheel & tire care',
          'Glass ceramic treatment',
          'Trim protection',
          'Quality inspection',
          'Priority scheduling',
          'Maintenance tracking'
        ]
      },
      {
        name: 'Bi-Weekly Exterior',
        frequency: 'Every 2 Weeks',
        pricing: {
          sedan: { monthly: '$100', annual: '$2,200' },
          midsize: { monthly: '$110', annual: '$2,500' },
          large: { monthly: '$120', annual: '$2,600' }
        },
        popular: false,
        description: 'Ultimate exterior maintenance for maximum protection and appearance.',
        features: [
          'Bi-weekly exterior service',
          'Advanced paint protection',
          'Premium wheel care',
          'Specialized glass treatment',
          'Paint enhancement',
          'Contaminant removal',
          'Guaranteed scheduling',
          'Performance tracking'
        ]
      }
    ]
  }
}

const addOnServices = [
  {
    name: 'Mechanical/Cosmetic Service (Scheduled)',
    price: '$100',
    description: 'Coordinate mechanical or cosmetic service appointments'
  },
  {
    name: 'Full Service Coordination',
    price: '$250',
    description: 'Complete drop-off and pick-up coordination for services'
  },
  {
    name: 'Engine Bay Detail',
    price: '$40',
    description: 'Professional engine bay cleaning and detailing'
  },
  {
    name: 'Pet Hair Removal',
    price: '$50',
    description: 'Specialized removal of embedded pet hair'
  },
  {
    name: 'Clay Bar Treatment',
    price: '$50',
    description: 'Paint decontamination and smoothness restoration'
  },
  {
    name: 'Leather Conditioning',
    price: '$40',
    description: 'Premium leather treatment and protection'
  }
]

const membershipBenefits = [
  {
    title: 'Priority Booking',
    description: 'Skip the wait with guaranteed availability and priority scheduling.',
    icon: CalendarDays
  },
  {
    title: 'VIP Treatment',
    description: 'Exclusive white-glove service with dedicated account management.',
    icon: Star
  },
  {
    title: 'Member Discounts',
    description: 'Substantial savings on additional services and upgrades.',
    icon: Badge
  },
  {
    title: 'Consistent Excellence',
    description: 'Regular care maintains your vehicle in pristine condition year-round.',
    icon: Shield
  }
]

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blackbird-charcoal/20 via-blackbird-black to-blackbird-charcoal/20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/30 to-blackbird-black">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6 border border-blackbird-ignition-blue/20">
              <Crown className="h-4 w-4 text-blackbird-ignition-blue" />
              <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                Exclusive Membership Program
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-blackbird-off-white mb-6">
              Blackbird Signature{' '}
              <span className="text-blackbird-ignition-blue">Membership</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blackbird-off-white/80 mb-12 max-w-3xl mx-auto font-body leading-relaxed">
              Join our exclusive membership program and experience the ultimate in recurring luxury 
              automotive care. Designed for discerning owners who demand consistent perfection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Join the Club</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                <Link href="#tiers">View Membership Tiers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="tiers" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Choose Your{' '}
              <span className="text-blackbird-ignition-blue">Experience Level</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/80 max-w-3xl mx-auto font-body leading-relaxed">
              Each membership tier is carefully crafted to deliver exceptional value and uncompromising quality, 
              tailored to your specific automotive care needs.
            </p>
          </div>

          {/* In & Out Membership Plans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-blackbird-off-white mb-4">
                {membershipPlans.inAndOut.title}
              </h3>
              <p className="text-lg text-blackbird-ignition-blue mb-6">
                {membershipPlans.inAndOut.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {membershipPlans.inAndOut.plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative group bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 overflow-hidden ${plan.popular ? 'ring-2 ring-blackbird-ignition-blue/30 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-blackbird-ignition-blue to-yellow-400 text-blackbird-black text-center py-2 text-sm font-semibold">
                        Most Popular Choice
                      </div>
                    </div>
                  )}

                  <CardContent className="p-0">
                    {/* Plan Header */}
                    <div className="relative p-6 bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/20">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-blackbird-ignition-blue/20 rounded-full backdrop-blur-sm">
                          <Crown className="h-6 w-6 text-blackbird-ignition-blue" />
                        </div>
                      </div>

                      <h4 className="text-xl font-heading font-bold text-blackbird-off-white text-center mb-2">
                        {plan.name}
                      </h4>

                      <p className="text-blackbird-ignition-blue text-center font-medium mb-4">
                        {plan.frequency}
                      </p>

                      <p className="text-sm text-blackbird-off-white/70 text-center">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="p-6">
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-blackbird-off-white/80">Sedans & Coupes:</span>
                          <div className="text-right">
                            <div className="text-blackbird-ignition-blue font-bold">{plan.pricing.sedan.monthly}/month</div>
                            <div className="text-blackbird-off-white/60 text-xs">or {plan.pricing.sedan.annual}/year PIF</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-blackbird-off-white/80">Midsize Truck/SUV:</span>
                          <div className="text-right">
                            <div className="text-blackbird-ignition-blue font-bold">{plan.pricing.midsize.monthly}/month</div>
                            <div className="text-blackbird-off-white/60 text-xs">or {plan.pricing.midsize.annual}/year PIF</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-blackbird-off-white/80">Large Truck/SUV:</span>
                          <div className="text-right">
                            <div className="text-blackbird-ignition-blue font-bold">{plan.pricing.large.monthly}/month</div>
                            <div className="text-blackbird-off-white/60 text-xs">or {plan.pricing.large.annual}/year PIF</div>
                          </div>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {plan.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-blackbird-ignition-blue mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-blackbird-off-white/85">{feature}</span>
                            </li>
                          ))}
                          {plan.features.length > 4 && (
                            <li className="text-xs text-blackbird-off-white/60 ml-6">
                              +{plan.features.length - 4} more services
                            </li>
                          )}
                        </ul>
                      </div>

                      <Button
                        className={`w-full ${plan.popular ? 'bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white' : 'bg-blackbird-off-white hover:bg-blackbird-off-white/90 text-blackbird-black border border-blackbird-charcoal/20'}`}
                        asChild
                      >
                        <Link href="/contact">
                          Select {plan.name}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Exterior Only Membership Plans */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-blackbird-off-white mb-4">
                {membershipPlans.exteriorOnly.title}
              </h3>
              <p className="text-lg text-blackbird-ignition-blue mb-6">
                {membershipPlans.exteriorOnly.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {membershipPlans.exteriorOnly.plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative group bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 overflow-hidden ${plan.popular ? 'ring-2 ring-blackbird-ignition-blue/30 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-blackbird-ignition-blue to-yellow-400 text-blackbird-black text-center py-2 text-sm font-semibold">
                        Most Popular Choice
                      </div>
                    </div>
                  )}

                  <CardContent className="p-0">
                    {/* Plan Header */}
                    <div className="relative p-6 bg-gradient-to-br from-blackbird-ignition-blue/10 to-blackbird-charcoal/20">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-blackbird-ignition-blue/20 rounded-full backdrop-blur-sm">
                          <Sparkles className="h-6 w-6 text-blackbird-ignition-blue" />
                        </div>
                      </div>

                      <h4 className="text-xl font-heading font-bold text-blackbird-off-white text-center mb-2">
                        {plan.name}
                      </h4>

                      <p className="text-blackbird-ignition-blue text-center font-medium mb-4">
                        {plan.frequency}
                      </p>

                      <p className="text-sm text-blackbird-off-white/70 text-center">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="p-6">
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-blackbird-off-white/80">Sedans & Coupes:</span>
                          <div className="text-right">
                            <div className="text-blackbird-ignition-blue font-bold">{plan.pricing.sedan.monthly}/month</div>
                            <div className="text-blackbird-off-white/60 text-xs">or {plan.pricing.sedan.annual}/year PIF</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-blackbird-off-white/80">Midsize Truck/SUV:</span>
                          <div className="text-right">
                            <div className="text-blackbird-ignition-blue font-bold">{plan.pricing.midsize.monthly}/month</div>
                            <div className="text-blackbird-off-white/60 text-xs">or {plan.pricing.midsize.annual}/year PIF</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-blackbird-off-white/80">Large Truck/SUV:</span>
                          <div className="text-right">
                            <div className="text-blackbird-ignition-blue font-bold">{plan.pricing.large.monthly}/month</div>
                            <div className="text-blackbird-off-white/60 text-xs">or {plan.pricing.large.annual}/year PIF</div>
                          </div>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {plan.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-blackbird-ignition-blue mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-blackbird-off-white/85">{feature}</span>
                            </li>
                          ))}
                          {plan.features.length > 4 && (
                            <li className="text-xs text-blackbird-off-white/60 ml-6">
                              +{plan.features.length - 4} more services
                            </li>
                          )}
                        </ul>
                      </div>

                      <Button
                        className={`w-full ${plan.popular ? 'bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white' : 'bg-blackbird-off-white hover:bg-blackbird-off-white/90 text-blackbird-black border border-blackbird-charcoal/20'}`}
                        asChild
                      >
                        <Link href="/contact">
                          Select {plan.name}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Membership Add-Ons */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-blackbird-off-white mb-4">
                Available Add-On Services
              </h3>
              <p className="text-lg text-blackbird-off-white/70">
                Enhance your membership with additional specialized services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOnServices.map((addon, index) => (
                <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-heading font-bold text-blackbird-off-white mb-2">
                      {addon.name}
                    </h4>
                    <p className="text-blackbird-ignition-blue font-semibold text-lg mb-3">
                      +{addon.price}
                    </p>
                    <p className="text-blackbird-off-white/70 text-sm">
                      {addon.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-blackbird-charcoal/20 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-4">
                Additional Member Benefits
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-blackbird-ignition-blue mb-3">Discounts Available:</h4>
                <ul className="space-y-2 text-blackbird-off-white/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                    Paint Enhancement/Ceramic Coating: 10-20% off
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                    Paint Protection Film: 10% off
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blackbird-ignition-blue mb-3">Membership Terms:</h4>
                <ul className="space-y-2 text-blackbird-off-white/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                    All memberships require 6-month minimum commitment
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                    Cancel anytime after minimum with 30-day notice
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-blackbird-ignition-blue mr-2" />
                    PIF (Paid In Full) plans offer significant savings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Portal Access */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
                Member Portal{' '}
                <span className="text-blackbird-ignition-blue">Access</span>
              </h2>
              <p className="text-xl text-blackbird-off-white/70">
                Current members can access their exclusive portal to manage appointments, 
                view service history, and enjoy priority booking privileges.
              </p>
            </div>
            
            <UrableBooking variant="membership" />
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Exclusive Member{' '}
              <span className="text-blackbird-ignition-blue">Benefits</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Beyond exceptional detailing services, membership includes exclusive perks designed 
              to enhance your luxury automotive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <benefit.icon className="h-8 w-8 text-blackbird-ignition-blue mx-auto mb-4" />
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blackbird-black">
        <div className="container">
          <div className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 rounded-2xl p-8 md:p-12 text-center border border-blackbird-charcoal/50">
            <Crown className="h-12 w-12 text-blackbird-ignition-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-6">
              Ready to Join the Elite?
            </h2>
            <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl mx-auto">
              Experience the ultimate in luxury automotive care with Blackbird&apos;s exclusive membership program. 
              Limited memberships available for discerning clients.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white" asChild>
                <Link href="/contact">Apply for Membership</Link>
              </Button>
              <a
                href="tel:+1-757-123-4567"
                className="flex items-center text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">(757) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}