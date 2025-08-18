import { Metadata } from 'next'
import Link from 'next/link'
import { Crown, Star, CheckCircle, CalendarDays, Shield, Sparkles, Award, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { UrableBooking } from '@/components/integrations/urable-booking'

export const metadata: Metadata = {
  title: 'Blackbird Signature Membership | Exclusive Recurring Detailing | Virginia Beach',
  description: 'Join Blackbird\'s exclusive membership program for recurring luxury detailing services. Monthly and bi-weekly packages available with priority booking and VIP treatment.',
  keywords: 'auto detailing membership, recurring car detailing, luxury car care subscription, Virginia Beach, monthly detailing, bi-weekly detailing',
}

const membershipTiers = [
  {
    name: 'Exterior Excellence',
    subtitle: 'Monthly Exterior Care',
    price: '$149',
    period: '/month',
    popular: false,
    description: 'Premium exterior-only maintenance for the discerning owner who values consistent perfection.',
    features: [
      'Professional exterior wash & dry',
      'Premium ceramic spray protection',
      'Wheel & tire detailing',
      'Glass cleaning & treatment',
      'Trim restoration & protection',
      'Priority booking guaranteed',
      'Complimentary interior vacuum',
      '10% discount on additional services'
    ],
    icon: Sparkles,
    color: 'from-blackbird-ignition-blue/20 to-blackbird-charcoal/20'
  },
  {
    name: 'Elite Monthly',
    subtitle: 'Complete Monthly Service',
    price: '$299',
    period: '/month',
    popular: true,
    description: 'The ultimate luxury experience combining interior and exterior perfection every month.',
    features: [
      'Complete exterior detailing service',
      'Full interior deep cleaning',
      'Leather conditioning & protection',
      'Premium ceramic maintenance',
      'Engine bay detailing',
      'Priority booking & VIP treatment',
      'Complimentary vehicle pickup/delivery*',
      '15% discount on additional services',
      'Exclusive member events access'
    ],
    icon: Crown,
    color: 'from-blackbird-ignition-blue/30 to-yellow-400/20'
  },
  {
    name: 'Executive Bi-Weekly',
    subtitle: 'Ultimate Care Package',
    price: '$449',
    period: '/month',
    popular: false,
    description: 'For the ultimate enthusiast who demands perfection every two weeks.',
    features: [
      'Bi-weekly complete detailing',
      'Paint correction as needed',
      'Advanced ceramic maintenance',
      'Interior & exterior perfection',
      'White-glove concierge service',
      'Guaranteed same-day booking',
      'Complimentary pickup/delivery*',
      '20% discount on additional services',
      'Exclusive detailing consultations',
      'Annual paint protection review'
    ],
    icon: Award,
    color: 'from-yellow-400/20 to-blackbird-ignition-blue/30'
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
            
            <p className="text-xl text-blackbird-off-white/70 mb-12 max-w-3xl mx-auto">
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
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Each membership tier is carefully crafted to deliver exceptional value and uncompromising quality, 
              tailored to your specific automotive care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {membershipTiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`relative group bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 overflow-hidden ${tier.popular ? 'ring-2 ring-blackbird-ignition-blue/30 scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blackbird-ignition-blue to-yellow-400 text-blackbird-black text-center py-2 text-sm font-semibold">
                      Most Popular Choice
                    </div>
                  </div>
                )}
                
                <CardContent className="p-0">
                  {/* Tier Header */}
                  <div className={`relative p-8 bg-gradient-to-br ${tier.color}`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-blackbird-ignition-blue/20 rounded-full backdrop-blur-sm">
                        <tier.icon className="h-8 w-8 text-blackbird-ignition-blue" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-blackbird-off-white text-center mb-2">
                      {tier.name}
                    </h3>
                    
                    <p className="text-blackbird-ignition-blue text-center font-medium mb-4">
                      {tier.subtitle}
                    </p>
                    
                    <div className="text-center mb-4">
                      <span className="text-4xl font-bold text-blackbird-off-white">{tier.price}</span>
                      <span className="text-blackbird-off-white/70">{tier.period}</span>
                    </div>
                    
                    <p className="text-sm text-blackbird-off-white/70 text-center">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blackbird-ignition-blue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-blackbird-off-white/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${tier.popular ? 'bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90' : 'bg-blackbird-charcoal hover:bg-blackbird-charcoal/80'} text-white`}
                      asChild
                    >
                      <Link href="/contact">
                        Select {tier.name}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-blackbird-off-white/60">
            <p className="mb-2">* Pickup and delivery available within 15 miles of Virginia Beach location</p>
            <p>All memberships require a 6-month commitment. Cancel anytime thereafter with 30-day notice.</p>
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