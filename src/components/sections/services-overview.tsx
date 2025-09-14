import { Shield, Sparkles, Car, Package } from 'lucide-react'
import { ServiceCard } from '@/components/ui/service-card'

const services = [
  {
    title: 'Full Vehicle Care Programs',
    description: 'Ongoing weekly and bi-weekly maintenance programs for luxury and high-performance vehicles. Complete care tailored to enthusiasts who demand nothing but the best for their automotive investments.',
    href: '/services/packages',
    icon: Package,
    features: [
      'Weekly luxury vehicle maintenance',
      'Bi-weekly comprehensive care',
      'Priority scheduling and member pricing',
      'Automated service coordination'
    ],
    popular: true
  },
  {
    title: 'Ceramic Coating',
    description: 'Ultimate paint protection with hydrophobic properties and multi-year durability. Our professional-grade ceramic coatings create an invisible shield that repels water, dirt, and UV rays.',
    href: '/services/ceramic-coating',
    icon: Shield,
    features: [
      'Multi-layer protection system',
      '5-10 year warranty options',
      'Hydrophobic and self-cleaning',
      'UV protection and gloss enhancement'
    ]
  },
  {
    title: 'Paint Correction',
    description: 'Professional swirl removal and paint restoration using advanced polishing techniques. Transform your vehicle\'s finish to showroom condition with our multi-stage correction process.',
    href: '/services/paint-correction',
    icon: Sparkles,
    features: [
      'Multi-stage correction process',
      'Swirl and scratch removal',
      'Paint depth analysis',
      'Professional grade compounds'
    ]
  },
  {
    title: 'Interior Detailing',
    description: 'Complete interior restoration and protection for leather, fabric, and trim surfaces. Deep cleaning, conditioning, and protection for a like-new cabin experience.',
    href: '/services/interior-detailing',
    icon: Car,
    features: [
      'Leather cleaning & conditioning',
      'Fabric protection treatment',
      'Trim restoration and protection',
      'Deep vacuum and sanitization'
    ]
  }
]

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/30 to-blackbird-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
            <Package className="h-4 w-4 text-blackbird-ignition-blue" />
            <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
            Luxury Detailing{' '}
            <span className="text-blackbird-ignition-blue">Excellence</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-blackbird-off-white/80 max-w-3xl mx-auto font-body leading-relaxed">
            100% mobile luxury detailing for enthusiasts who never compromise on quality.
            From weekly maintenance programs to complete protection systems, we bring
            professional-grade equipment and expertise directly to your location.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-blackbird-charcoal/20 rounded-2xl p-8 md:p-12 border border-blackbird-charcoal/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-blackbird-off-white mb-4">
              The Blackbird Experience
            </h3>
            <p className="text-lg text-blackbird-off-white/80 max-w-2xl mx-auto font-body leading-relaxed">
              Every vehicle receives our signature mobile white-glove treatment. We bring the detail shop
              to you, complete with professional equipment and the expertise you'd expect from the finest
              luxury vehicle specialists. No compromises, ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Personalized assessment and luxury service customization'
              },
              {
                step: '02',
                title: 'Preparation',
                description: 'Meticulous on-location setup with professional mobile equipment'
              },
              {
                step: '03',
                title: 'Transformation',
                description: 'Expert application of premium treatments and finishes'
              },
              {
                step: '04',
                title: 'Mobile Completion',
                description: 'Final inspection and luxury presentation - all at your location'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blackbird-ignition-blue/20 border-2 border-blackbird-ignition-blue flex items-center justify-center">
                    <span className="text-blackbird-ignition-blue font-bold text-lg">
                      {process.step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blackbird-ignition-blue/50 to-transparent" />
                  )}
                </div>
                <h4 className="font-heading font-semibold text-blackbird-off-white mb-2 text-lg">
                  {process.title}
                </h4>
                <p className="text-base text-blackbird-off-white/75 font-body">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}