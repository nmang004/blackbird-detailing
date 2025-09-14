import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Star, Shield, Trees, Home, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Professional Auto Detailing Chesapeake VA | Blackbird Detailing',
  description: 'Premium automotive detailing services in Chesapeake, Virginia. Ceramic coating, paint correction, interior detailing. Serving Great Bridge, Western Branch, Deep Creek and all Chesapeake areas.',
  keywords: 'auto detailing Chesapeake, car detailing Chesapeake VA, ceramic coating Chesapeake, paint correction Chesapeake, mobile detailing Chesapeake, automotive detailing',
}

const localBenefits = [
  {
    icon: Trees,
    title: 'Tree Sap & Pollen Protection',
    description: 'Specialized treatments for Chesapeake\'s heavily wooded areas that protect against tree sap, pollen, and organic debris that can stain and damage your vehicle.'
  },
  {
    icon: Home,
    title: 'Suburban Excellence',
    description: 'Perfect for Chesapeake\'s family-friendly suburban communities with services tailored for daily drivers, family vehicles, and weekend warriors.'
  },
  {
    icon: Shield,
    title: 'Water & Humidity Shield',
    description: 'Advanced protection against Chesapeake\'s humid climate and frequent rain that can cause water spots and accelerated wear.'
  },
  {
    icon: Car,
    title: 'Commuter-Ready',
    description: 'Keep your vehicle pristine for daily commutes to Virginia Beach, Norfolk, and the greater Hampton Roads area.'
  }
]

const serviceAreas = [
  'Great Bridge',
  'Western Branch',
  'Deep Creek',
  'Hickory',
  'Greenbrier',
  'Camelot',
  'Churchland',
  'Portsmouth Boulevard',
  'Battlefield Boulevard',
  'South Norfolk',
  'Grassfield',
  'Indian River'
]

const testimonials = [
  {
    name: 'Robert Thompson',
    location: 'Great Bridge',
    rating: 5,
    text: 'Outstanding work on my truck! Living in Chesapeake means dealing with a lot of pollen and tree debris. Blackbird\'s protection package keeps my vehicle looking clean year-round.',
    service: 'Ceramic Coating'
  },
  {
    name: 'Lisa Chen',
    location: 'Western Branch',
    rating: 5,
    text: 'The interior detailing was amazing - they got all the pet hair and family mess out of my SUV. Perfect for busy Chesapeake families!',
    service: 'Interior Detailing'
  },
  {
    name: 'Mark Williams',
    location: 'Deep Creek',
    rating: 5,
    text: 'Professional service right at my home. The paint correction work removed years of wear and tear. Highly recommend to anyone in the Chesapeake area.',
    service: 'Paint Correction'
  }
]

const nearbyLandmarks = [
  'Great Dismal Swamp National Wildlife Refuge',
  'Chesapeake City Park',
  'Great Bridge Lock Park',
  'Chesapeake Arboretum',
  'Battlefield Park',
  'Deep Creek Recreation Center',
  'Great Bridge Bridge',
  'South Norfolk Jordan Bridge',
  'Greenbrier Mall',
  'Indian River Park'
]

export default function ChesapeakePage() {
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
                  Chesapeake, VA
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Expert Auto Detailing{' '}
                <span className="text-blackbird-ignition-blue">Chesapeake</span>
              </h1>
              
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Protect your vehicle from Chesapeake's suburban challenges with our mobile
                detailing services. From Great Bridge to Deep Creek, we bring professional
                equipment and meticulous care directly to your driveway or workplace.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">View Our Work</Link>
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
                  <span>Serving Chesapeake Daily</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/images/portfolio/before-after/ceramic-coating/chevrolet-tahoe-ceramic-coating-22.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Trees className="h-8 w-8 text-white" />
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
              <span className="text-blackbird-ignition-blue">Chesapeake?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Chesapeake's suburban landscape and natural beauty create specific automotive care needs. 
              Our services are tailored for the unique challenges of Virginia's largest city by land area.
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
                <span className="text-blackbird-ignition-blue">Chesapeake</span>{' '}
                Communities
              </h2>
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                From the historic Great Bridge area to the growing communities of Western Branch, 
                we provide professional automotive detailing throughout Chesapeake's diverse neighborhoods.
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
                Near Chesapeake Attractions
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
                <Link href="/contact">Book Service</Link>
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
              What Chesapeake{' '}
              <span className="text-blackbird-ignition-blue">Residents Say</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-2xl mx-auto">
              Trusted by families and professionals throughout Chesapeake's communities.
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
              Professional Automotive Detailing Services in Chesapeake, Virginia
            </h2>
            
            <div className="text-blackbird-off-white/70 space-y-6">
              <p className="text-lg">
                Chesapeake, Virginia's largest city by land area, presents unique challenges for vehicle owners. 
                The heavily wooded suburban landscape means vehicles are constantly exposed to tree sap, pollen, 
                bird droppings, and organic debris that can permanently stain and damage automotive finishes.
              </p>
              
              <p>
                Our ceramic coating services are particularly beneficial for Chesapeake residents. The hydrophobic 
                properties of ceramic coatings make it much easier to remove tree sap and pollen, while providing 
                long-term protection against UV damage and oxidation common in Virginia's humid climate.
              </p>
              
              <p>
                Paint correction is essential for vehicles in Chesapeake due to the combination of organic contaminants 
                and frequent exposure to rain and humidity. Our multi-stage correction process removes embedded 
                contaminants and restores the deep gloss that attracts many residents to call Chesapeake home.
              </p>
              
              <p>
                We proudly serve all Chesapeake neighborhoods, from the historic Great Bridge district to the newer 
                developments in Western Branch and Greenbrier. Our mobile detailing service is perfect for 
                Chesapeake's suburban setting, bringing professional equipment directly to your driveway whether 
                you're near the Great Dismal Swamp or closer to the Norfolk border.
              </p>
              
              <p>
                Interior detailing is especially popular among Chesapeake families. Our comprehensive interior 
                services remove pet hair, food stains, and everyday wear while protecting against future damage. 
                We understand that your vehicle is more than transportation - it's your family's second home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blackbird-charcoal/30 to-blackbird-ignition-blue/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
            Protect Your Investment in{' '}
            <span className="text-blackbird-ignition-blue">Chesapeake</span>
          </h2>
          <p className="text-xl text-blackbird-off-white/70 mb-8 max-w-2xl mx-auto">
            Don't let tree sap, pollen, and humidity damage your vehicle. 
            Experience the Blackbird difference in your neighborhood.
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