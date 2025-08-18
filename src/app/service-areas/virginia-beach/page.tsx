import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Star, Shield, Waves, Sun, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Professional Auto Detailing Virginia Beach | Blackbird Detailing',
  description: 'Premium automotive detailing services in Virginia Beach, VA. Ceramic coating, paint correction, interior detailing. Serving Oceanfront, Hilltop, Red Mill Commons and all Virginia Beach neighborhoods.',
  keywords: 'auto detailing Virginia Beach, car detailing Virginia Beach, ceramic coating Virginia Beach, paint correction Virginia Beach, mobile detailing Virginia Beach, automotive detailing VB',
}

const localBenefits = [
  {
    icon: Waves,
    title: 'Salt Air Protection',
    description: 'Specialized treatments to protect your vehicle from Virginia Beach\'s coastal salt air and humidity that can damage paint and metal surfaces.'
  },
  {
    icon: Sun,
    title: 'UV Defense',
    description: 'Advanced ceramic coatings and paint protection specifically designed for Virginia Beach\'s intense summer sun exposure.'
  },
  {
    icon: Shield,
    title: 'Sand & Debris Shield',
    description: 'Protection against beach sand, salt, and coastal debris that can scratch and damage your vehicle\'s finish.'
  },
  {
    icon: Car,
    title: 'Tourism-Ready',
    description: 'Keep your vehicle looking pristine for Virginia Beach\'s busy tourist season and special events year-round.'
  }
]

const serviceAreas = [
  'Oceanfront District',
  'Hilltop Shopping Area',
  'Red Mill Commons',
  'Lynnhaven',
  'Kempsville',
  'Princess Anne',
  'Great Neck',
  'Sandbridge',
  'Chesapeake Bay Bridge Area',
  'Town Center',
  'Pembroke',
  'Salem'
]

const testimonials = [
  {
    name: 'Mike Johnson',
    location: 'Oceanfront District',
    rating: 5,
    text: 'Living near the beach, my BMW was getting destroyed by salt air. Blackbird\'s ceramic coating has been a game changer - my car still looks amazing after 8 months!',
    service: 'Ceramic Coating'
  },
  {
    name: 'Jennifer Lee',
    location: 'Hilltop',
    rating: 5,
    text: 'The paint correction work on my Mercedes was incredible. You can\'t even tell it had scratches. Worth every penny for the quality of work.',
    service: 'Paint Correction'
  },
  {
    name: 'David Rodriguez',
    location: 'Town Center',
    rating: 5,
    text: 'Professional, punctual, and the results speak for themselves. My F-150 looks showroom fresh. Highly recommend for anyone in Virginia Beach.',
    service: 'Full Detail Package'
  }
]

const nearbyLandmarks = [
  'Virginia Beach Oceanfront',
  'First Landing State Park',
  'Virginia Aquarium & Marine Science Center',
  'Cape Henry Lighthouse',
  'Military Aviation Museum',
  'Sandbridge Beach',
  'Back Bay National Wildlife Refuge',
  'Virginia Beach Town Center',
  'Mount Trashmore Park',
  'King Neptune Statue'
]

export default function VirginiaBeachPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 text-blackbird-ignition-blue" />
                <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                  Virginia Beach, VA
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Premium Auto Detailing{' '}
                <span className="text-blackbird-ignition-blue">Virginia Beach</span>
              </h1>
              
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Protect your vehicle from Virginia Beach's harsh coastal environment with our 
                professional automotive detailing services. From the Oceanfront to Town Center, 
                we bring motorsport-grade precision to every neighborhood.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">View Local Results</Link>
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center space-x-6 text-sm text-blackbird-off-white/70">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(757) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>7 Days a Week</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/api/placeholder/500/500')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Why Choose Blackbird in{' '}
              <span className="text-blackbird-ignition-blue">Virginia Beach?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Living by the ocean presents unique challenges for vehicle maintenance. 
              Our specialized services are designed specifically for Virginia Beach's coastal environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localBenefits.map((benefit, index) => (
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

      {/* Service Areas */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
                Serving All{' '}
                <span className="text-blackbird-ignition-blue">Virginia Beach</span>{' '}
                Neighborhoods
              </h2>
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                From the bustling Oceanfront to the quiet neighborhoods of Great Neck, 
                we provide premium automotive detailing services throughout Virginia Beach.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blackbird-ignition-blue rounded-full" />
                    <span className="text-blackbird-off-white/80 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blackbird-charcoal/30 rounded-lg p-8 border border-blackbird-charcoal">
              <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-4">
                Near Popular Landmarks
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {nearbyLandmarks.slice(0, 8).map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-3 w-3 text-blackbird-ignition-blue" />
                    <span className="text-blackbird-off-white/70">{landmark}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal" asChild>
                <Link href="/contact">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              What Virginia Beach{' '}
              <span className="text-blackbird-ignition-blue">Customers Say</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-2xl mx-auto">
              Real reviews from satisfied customers across Virginia Beach neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-blackbird-off-white/80 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-blackbird-charcoal pt-4">
                    <div className="font-heading font-bold text-blackbird-off-white">
                      {testimonial.name}
                    </div>
                    <div className="text-blackbird-off-white/60 text-sm">
                      {testimonial.location} • {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blackbird-off-white mb-8">
              Professional Auto Detailing Services in Virginia Beach, Virginia
            </h2>
            
            <div className="text-blackbird-off-white/70 space-y-6">
              <p className="text-lg">
                Virginia Beach presents unique challenges for vehicle owners. The coastal salt air, intense UV exposure, 
                and sandy conditions can wreak havoc on your car's paint, interior, and metal components. That's why 
                Blackbird Detailing has developed specialized automotive care services specifically designed for the 
                Virginia Beach environment.
              </p>
              
              <p>
                Our ceramic coating services provide superior protection against salt corrosion, a common problem for 
                vehicles in Virginia Beach. Whether you live near the Oceanfront or in inland neighborhoods like 
                Kempsville or Great Neck, salt air can travel miles inland and damage your vehicle's finish.
              </p>
              
              <p>
                Paint correction is particularly important in Virginia Beach due to the combination of salt, sand, 
                and UV exposure. Our multi-stage paint correction process removes oxidation, swirl marks, and 
                micro-scratches that are accelerated by the coastal environment.
              </p>
              
              <p>
                We proudly serve all Virginia Beach neighborhoods, from the tourist-heavy Oceanfront district to 
                residential areas like Hilltop, Princess Anne, and Sandbridge. Our mobile detailing service brings 
                professional-grade equipment directly to your location, whether you're at home, work, or visiting 
                one of Virginia Beach's many attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blackbird-charcoal/30 to-blackbird-ignition-blue/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
            Ready to Protect Your Vehicle in{' '}
            <span className="text-blackbird-ignition-blue">Virginia Beach?</span>
          </h2>
          <p className="text-xl text-blackbird-off-white/70 mb-8 max-w-2xl mx-auto">
            Don't let Virginia Beach's coastal environment damage your investment. 
            Get professional automotive protection today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
              <Link href="tel:+1-757-123-4567">Call (757) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}