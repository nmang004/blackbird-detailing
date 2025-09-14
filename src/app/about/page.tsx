import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Award, Users, Target, Heart, Clock, Shield, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About Blackbird Detailing | Professional Auto Detailing Virginia Beach',
  description: 'Learn about Blackbird Detailing\'s commitment to luxury automotive excellence. Professional team, certifications, and values serving Virginia Beach, Chesapeake, and Norfolk.',
  keywords: 'about Blackbird Detailing, professional auto detailing team, Virginia Beach detailing company, automotive care specialists, certified detailing professionals',
}

const stats = [
  { number: '2000+', label: 'Vehicles Detailed', icon: Star },
  { number: '8+', label: 'Years Experience', icon: Clock },
  { number: '98%', label: 'Customer Satisfaction', icon: Heart },
  { number: '15+', label: 'Certifications', icon: Award },
]

const values = [
  {
    icon: Target,
    title: 'Meticulous Care',
    description: 'Every detail matters. We approach each vehicle with unwavering attention to detail and commitment to excellence.',
    color: 'text-red-400'
  },
  {
    icon: Shield,
    title: 'Protection',
    description: 'We don\'t just clean - we protect. Our advanced treatments safeguard your investment against environmental damage.',
    color: 'text-blue-400'
  },
  {
    icon: CheckCircle,
    title: 'Perfection',
    description: 'Nothing leaves our care until it meets our uncompromising standards. Excellence isn\'t a goal - it\'s our baseline.',
    color: 'text-green-400'
  }
]

const timeline = [
  {
    year: '2016',
    title: 'The Beginning',
    description: 'Founded with a passion for automotive excellence and a vision to bring luxury-level care to every vehicle.',
    milestone: 'Company Founded'
  },
  {
    year: '2018',
    title: 'Certification Focus',
    description: 'Invested heavily in professional training and certifications, becoming one of the most qualified teams in Hampton Roads.',
    milestone: 'IDA Certified'
  },
  {
    year: '2020',
    title: 'Technology Integration',
    description: 'Introduced advanced ceramic coating technologies and state-of-the-art paint correction equipment.',
    milestone: '500+ Vehicles Detailed'
  },
  {
    year: '2022',
    title: 'Community Recognition',
    description: 'Named "Best Auto Detailing Service" by local automotive enthusiasts and professional recognition programs.',
    milestone: 'Industry Awards'
  },
  {
    year: '2024',
    title: 'Continued Excellence',
    description: 'Expanding services while maintaining our commitment to luxury, protection, and perfection for every client.',
    milestone: '2000+ Happy Customers'
  }
]

const teamMembers = [
  {
    name: 'Judah Cates',
    role: 'Founder & Lead Technician',
    bio: 'Lifelong automotive enthusiast with a passion for fast cars and motorsport precision. Judah founded Blackbird Detailing to bring the same uncompromising standards he applies to his own vehicles to fellow enthusiasts who understand that quality cars deserve quality care.',
    certifications: ['IDA Certified', 'Ceramic Pro Certified', 'Advanced Paint Correction'],
    image: '/images/portfolio/thumbnails/tesla-ceramic-coating-24.webp',
    specialty: 'Mobile Luxury Vehicle Care'
  }
]

const certifications = [
  { name: 'International Detailing Association (IDA)', level: 'Certified Professionals', description: 'Industry-leading certification for professional detailing standards' },
  { name: 'Ceramic Pro', level: 'Authorized Installer', description: 'Factory-trained in premium ceramic coating application' },
  { name: 'GYEON Quartz', level: 'Certified Applicator', description: 'Advanced training in Japanese ceramic coating technology' },
  { name: 'Gtechniq', level: 'Accredited Detailer', description: 'British engineering excellence in paint protection' },
  { name: 'SystemX', level: 'Certified Installer', description: 'Revolutionary ceramic coating technology certification' },
  { name: 'Paint Protection Film', level: 'Expert Installation', description: 'Advanced training in clear bra and PPF application' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blackbird-black">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/20 to-blackbird-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
                <Users className="h-4 w-4 text-blackbird-ignition-blue" />
                <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                  About Blackbird
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
                Luxury Automotive{' '}
                <span className="text-blackbird-ignition-blue">Excellence</span>
              </h1>
              
              <p className="text-xl text-blackbird-off-white/70 mb-8 leading-relaxed">
                Born from a passion for fast cars and automotive excellence, Blackbird Detailing
                was created by enthusiasts who understand that true car lovers never compromise on quality.
                We bring that same uncompromising standard to every vehicle we service - because your car
                deserves the same attention to detail you put into choosing it.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
                  <Link href="/contact">Experience the Difference</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-2xl p-8 border border-blackbird-charcoal/50">
                <div className="h-full bg-[url('/images/vehicles/luxury/bmw-ceramic-coating-38.webp')] bg-cover bg-center rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blackbird-ignition-blue rounded-lg p-4">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blackbird-ignition-blue" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-blackbird-ignition-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-blackbird-off-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Our{' '}
              <span className="text-blackbird-ignition-blue">Story</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70">
              What started as a love for fast cars and motorsport precision has evolved into
              Hampton Roads' premier mobile luxury detailing service, built for enthusiasts
              who demand nothing but the best for their automotive investments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-invert max-w-none">
                <p className="text-blackbird-off-white/70 mb-6 text-lg leading-relaxed">
                  Blackbird Detailing was born from a passion for high-performance vehicles and the belief
                  that enthusiasts who invest in quality cars deserve the same level of excellence in their care.
                  Our founder, a devoted automotive enthusiast with a love for fast cars and motorsport precision,
                  created a mobile service that brings luxury-level detailing directly to your location.
                </p>

                <p className="text-blackbird-off-white/70 mb-6 leading-relaxed">
                  We understand our clients because we are our clients. Whether you drive an exotic weekend toy
                  or a luxury daily driver, we know the attention these vehicles demand. Just like you don't
                  cut corners when choosing your cars, we never cut corners in caring for them. Quality equipment,
                  premium products, professional technique - no compromises, ever.
                </p>

                <p className="text-blackbird-off-white/70 leading-relaxed">
                  This philosophy drives everything we do: from our fully mobile operation that brings professional-grade
                  equipment to your location, to our ongoing maintenance programs designed for enthusiasts who want
                  their vehicles maintained at the highest level automatically. Because true automotive passion
                  deserves nothing less than perfection.
                </p>
              </div>
            </div>
            
            <div className="bg-blackbird-charcoal/30 rounded-lg p-8 border border-blackbird-charcoal">
              <h3 className="text-2xl font-heading font-bold text-blackbird-off-white mb-6">
                Built for Enthusiasts, By Enthusiasts
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-blackbird-off-white">100% Mobile Luxury</h4>
                    <p className="text-blackbird-off-white/70 text-sm">Professional-grade equipment and expertise brought directly to your location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-blackbird-off-white">No Compromises Philosophy</h4>
                    <p className="text-blackbird-off-white/70 text-sm">Premium products and techniques - we never cut corners, just like our clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-blackbird-off-white">Enthusiast Understanding</h4>
                    <p className="text-blackbird-off-white/70 text-sm">We know your passion because we share it - from exotics to daily drivers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blackbird-ignition-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-blackbird-off-white">Automated Excellence</h4>
                    <p className="text-blackbird-off-white/70 text-sm">Maintenance programs and drop-off service for seamless automotive care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Our Core{' '}
              <span className="text-blackbird-ignition-blue">Values</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Three principles guide everything we do at Blackbird Detailing. 
              They're not just words on a wall - they're the foundation of every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300 text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blackbird-ignition-blue/20 rounded-full mb-6">
                    <value.icon className={`h-10 w-10 ${value.color}`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-blackbird-off-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-blackbird-off-white/70">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Meet Our{' '}
              <span className="text-blackbird-ignition-blue">Expert Team</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience and a shared passion 
              for automotive excellence. Every team member is committed to delivering the luxury 
              and perfection that defines the Blackbird standard.
            </p>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="bg-blackbird-ignition-blue text-white text-xs">
                      {member.specialty}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-blackbird-off-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blackbird-ignition-blue text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-blackbird-off-white/70 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Certifications */}
                  <div className="space-y-1">
                    {member.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="text-xs bg-blackbird-charcoal/50 text-blackbird-off-white/80 px-2 py-1 rounded">
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Professional{' '}
              <span className="text-blackbird-ignition-blue">Certifications</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
              Our commitment to excellence is validated by industry-leading certifications 
              and continuous professional development. We invest in the best training 
              to deliver the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-blackbird-ignition-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-blackbird-ignition-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-blackbird-off-white mb-1">
                        {cert.name}
                      </h3>
                      <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30 text-xs mb-2">
                        {cert.level}
                      </Badge>
                      <p className="text-blackbird-off-white/70 text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional certifications note */}
          <div className="text-center mt-12">
            <p className="text-blackbird-off-white/60 text-sm">
              Our team continuously pursues additional certifications and training to stay at the forefront of automotive detailing technology and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
              Our{' '}
              <span className="text-blackbird-ignition-blue">Journey</span>
            </h2>
            <p className="text-xl text-blackbird-off-white/70 max-w-2xl mx-auto">
              From humble beginnings to becoming Hampton Roads' premier detailing service, 
              here's how we've grown while staying true to our core mission.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blackbird-ignition-blue/30" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blackbird-ignition-blue rounded-full border-4 border-blackbird-black z-10" />
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge className="bg-blackbird-ignition-blue text-white text-xs">
                              {item.year}
                            </Badge>
                            <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30 text-xs">
                              {item.milestone}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-heading font-bold text-blackbird-off-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-blackbird-off-white/70 text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blackbird-charcoal/30 to-blackbird-ignition-blue/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blackbird-off-white mb-6">
            Ready to Experience{' '}
            <span className="text-blackbird-ignition-blue">Blackbird Excellence?</span>
          </h2>
          <p className="text-xl text-blackbird-off-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Blackbird Detailing 
            with their most valuable automotive investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90" asChild>
              <Link href="/contact">Get Your Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}