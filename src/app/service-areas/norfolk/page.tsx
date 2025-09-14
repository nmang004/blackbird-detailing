import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Star, Shield, Anchor, Building, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Professional Auto Detailing Norfolk VA | Blackbird Detailing',
  description: 'Premium automotive detailing services in Norfolk, Virginia. Ceramic coating, paint correction, interior detailing. Serving Downtown, Ghent, Ocean View and all Norfolk areas.',
  keywords: 'auto detailing Norfolk, car detailing Norfolk VA, ceramic coating Norfolk, paint correction Norfolk, mobile detailing Norfolk, automotive detailing',
}

const localBenefits = [
  {
    icon: Anchor,
    title: 'Naval-Grade Protection',
    description: 'Military-inspired excellence and protection standards designed for Norfolk\'s naval community and the unique challenges of coastal military life.'
  },
  {
    icon: Building,
    title: 'Urban Excellence',
    description: 'Specialized care for city driving conditions, parking garage exposure, and the demanding environment of Norfolk\'s bustling downtown and business districts.'
  },
  {
    icon: Shield,
    title: 'Maritime Defense',
    description: 'Advanced protection against salt air, humidity, and marine environment exposure that\'s essential for vehicles in Norfolk\'s waterfront city.'
  },
  {
    icon: Car,
    title: 'Professional Ready',
    description: 'Keep your vehicle looking sharp for Norfolk\'s professional community, from downtown business meetings to Ghent social events.'
  }
]

const serviceAreas = [
  'Downtown Norfolk',
  'Ghent District',
  'Ocean View',
  'Larchmont',
  'Colonial Place',
  'Park Place',
  'Ballentine Place',
  'Norfolk Botanical Garden Area',
  'Old Dominion University',
  'Military Circle',
  'Norfolk International Airport',
  'Lafayette River Area'
]

const testimonials = [
  {
    name: 'Commander Sarah Mitchell',
    location: 'Larchmont',
    rating: 5,
    text: 'As a naval officer, I appreciate attention to detail and excellence. Blackbird delivers military-grade quality. My vehicle looks immaculate despite Norfolk\'s harsh maritime conditions.',
    service: 'Ceramic Coating'
  },
  {
    name: 'Dr. James Foster',
    location: 'Ghent',
    rating: 5,
    text: 'Excellent work on my BMW. Living in downtown Norfolk means dealing with city grime and salt air. The paint correction completely transformed my vehicle.',
    service: 'Paint Correction'
  },
  {
    name: 'Maria Rodriguez',
    location: 'Ocean View',
    rating: 5,
    text: 'Outstanding interior detailing! They removed years of wear and tear from my family SUV. Perfect for busy Norfolk families.',
    service: 'Interior Detailing'
  }
]

const nearbyLandmarks = [
  'Norfolk Botanical Garden',
  'Chrysler Museum of Art',
  'Norfolk Tides Baseball',
  'USS Wisconsin Battleship',
  'Norfolk Naval Station',
  'Old Dominion University',
  'NEON District',
  'Norfolk International Airport',
  'MacArthur Center',
  'Norfolk Premium Outlets'
]

export default function NorfolkPage() {
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
                  Norfolk, VA
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Military-Grade Auto Detailing{' '}
                <span className="text-blackbird-ignition-blue">Norfolk</span>
              </h1>
              
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                Elite mobile automotive care for Norfolk's naval community and urban professionals.
                From downtown to Ocean View, we bring military-grade equipment and excellence
                directly to your location with the same precision Norfolk's heritage demands.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">View Norfolk Results</Link>
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
                  <span>Military Scheduling Available</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/images/vehicles/luxury/tesla-ceramic-coating-24.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Anchor className="h-8 w-8 text-white" />
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
              <span className="text-blackbird-ignition-blue">Norfolk?</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Norfolk's unique combination of naval heritage, urban environment, and coastal location 
              requires specialized automotive care. Our services honor the attention to detail and excellence 
              that define this historic maritime city.
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
                <span className="text-blackbird-ignition-blue">Norfolk</span>{' '}
                Districts
              </h2>
              <p className="text-xl text-blackbird-off-white/70 mb-8">
                From the vibrant Ghent arts district to the bustling downtown business core, 
                we provide premium automotive detailing throughout Norfolk's diverse neighborhoods 
                and military installations.
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
                Near Norfolk Landmarks
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
              What Norfolk{' '}
              <span className="text-blackbird-ignition-blue">Professionals Say</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-2xl mx-auto">
              Trusted by military personnel, healthcare professionals, and business leaders throughout Norfolk.
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
              Professional Automotive Detailing Services in Norfolk, Virginia
            </h2>
            
            <div className="text-blackbird-off-white/70 space-y-6">
              <p className="text-lg">
                Norfolk, Virginia, home to the world's largest naval station, demands automotive care that meets 
                the highest standards of excellence and durability. The combination of maritime climate, urban 
                pollution, and salt air exposure creates unique challenges for vehicle maintenance in the 757 area.
              </p>
              
              <p>
                Our ceramic coating services are essential for Norfolk residents, especially those living near 
                the waterfront or working at naval installations. The advanced hydrophobic and corrosion-resistant 
                properties of ceramic coatings provide superior protection against salt air damage that can quickly 
                deteriorate unprotected automotive finishes.
              </p>
              
              <p>
                Paint correction is particularly important in Norfolk's urban environment. City driving conditions, 
                parking garage exposure, and marine atmosphere can cause oxidation, water spots, and micro-scratches. 
                Our professional-grade correction process restores the deep gloss and clarity that Norfolk's 
                professional community demands.
              </p>
              
              <p>
                We proudly serve all Norfolk districts, from the historic Ghent neighborhood with its tree-lined 
                streets to the modern downtown business district and the family-friendly Ocean View area. Our 
                mobile detailing service is perfect for busy military personnel and healthcare professionals who 
                need convenient, professional automotive care.
              </p>
              
              <p>
                Interior detailing services are especially popular among Norfolk's military families and commuting 
                professionals. Our comprehensive interior restoration removes wear patterns, stains, and odors 
                while providing protective treatments that extend the life of your vehicle's interior surfaces.
              </p>
              
              <p>
                Whether you're stationed at Norfolk Naval Base, work at Sentara Norfolk General Hospital, attend 
                Old Dominion University, or live in any of Norfolk's vibrant neighborhoods, Blackbird Detailing 
                brings military-grade excellence to every vehicle we service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blackbird-charcoal/30 to-blackbird-ignition-blue/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
            Experience Military-Grade Excellence in{' '}
            <span className="text-blackbird-ignition-blue">Norfolk</span>
          </h2>
          <p className="text-xl text-blackbird-off-white/70 mb-8 max-w-2xl mx-auto">
            Your vehicle deserves the same level of excellence that Norfolk's naval heritage represents. 
            Discover the Blackbird difference today.
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