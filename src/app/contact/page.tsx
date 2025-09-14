import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { InstantEstimateForm } from '@/components/forms/instant-estimate-form'
import { UrableBooking } from '@/components/integrations/urable-booking'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contact & Get Instant Estimate | Blackbird Detailing Virginia Beach',
  description: 'Get your instant estimate for professional auto detailing services in Virginia Beach. Contact Blackbird Detailing for ceramic coating, paint correction, and interior detailing.',
  keywords: 'contact blackbird detailing, auto detailing estimate, Virginia Beach detailing quote, car detailing pricing, instant estimate',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(757) 500-1393',
    description: 'Call us for immediate assistance',
    action: 'tel:+1-757-500-1393'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'blackbirddetailingva@gmail.com',
    description: 'Email us your questions',
    action: 'mailto:blackbirddetailingva@gmail.com'
  },
  {
    icon: MapPin,
    title: 'Service Area',
    content: 'Virginia Beach, VA',
    description: 'Serving Hampton Roads',
    action: null
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Fri: 9am-6pm',
    description: 'Sat: 9am-3pm, Sun: Closed',
    action: null
  }
]

const whyChooseUs = [
  {
    title: '100% Mobile Service',
    description: 'Professional equipment brought to your location'
  },
  {
    title: 'Automated Scheduling',
    description: 'Set up maintenance programs that run automatically'
  },
  {
    title: 'Drop-off Service Available',
    description: 'We handle pickup and delivery for your convenience'
  },
  {
    title: 'No Compromises Quality',
    description: 'Premium products and techniques, always'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blackbird-charcoal/20 via-blackbird-black to-blackbird-charcoal/20 py-20">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="h-4 w-4 text-blackbird-ignition-blue" />
            <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
              Get Your Estimate
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-blackbird-off-white mb-6">
            Instant{' '}
            <span className="text-blackbird-ignition-blue">Estimate</span>
          </h1>
          
          <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto mb-12">
            Get a personalized quote for your luxury mobile detailing service in just a few minutes.
            Our automated system provides accurate pricing and scheduling for all our services -
            from one-time details to ongoing maintenance programs.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Estimate Form - Full width */}
          <div className="max-w-6xl mx-auto">
            <InstantEstimateForm />
          </div>

          {/* Contact Information - Below form */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Contact Info Cards */}
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-blackbird-ignition-blue/20 rounded-lg inline-flex mb-4">
                      <item.icon className="h-6 w-6 text-blackbird-ignition-blue" />
                    </div>
                    <h3 className="font-semibold text-blackbird-off-white mb-2">
                      {item.title}
                    </h3>
                    {item.action ? (
                      <a
                        href={item.action}
                        className="text-blackbird-ignition-blue hover:text-blackbird-ignition-blue/80 transition-colors font-medium block mb-2"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-blackbird-off-white font-medium mb-2">
                        {item.content}
                      </p>
                    )}
                    <p className="text-sm text-blackbird-off-white/60">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us - Full width below contact cards */}
            <div className="mt-12">
              <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
                <CardHeader className="text-center">
                  <CardTitle className="text-blackbird-off-white text-2xl">Why Choose Blackbird?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-3 h-3 bg-blackbird-ignition-blue rounded-full mx-auto mb-3" />
                        <h4 className="font-semibold text-blackbird-off-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-blackbird-off-white/70">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* URABLE Booking System */}
            <div className="mt-8">
              <UrableBooking variant="compact" />
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-blackbird-charcoal/50 to-blackbird-ignition-blue/20 border-blackbird-charcoal/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-heading font-bold text-blackbird-off-white mb-4">
                Questions About Our Services?
              </h2>
              <p className="text-blackbird-off-white/80 mb-6 max-w-2xl mx-auto">
                Every vehicle is unique, and every enthusiast has different needs. We&apos;re here
                to provide personalized recommendations for mobile services, maintenance programs,
                and automated scheduling that fits your lifestyle. No compromises, ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1-757-500-1393"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (757) 500-1393
                </a>
                <a
                  href="mailto:blackbirddetailingva@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black font-semibold rounded-lg transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}