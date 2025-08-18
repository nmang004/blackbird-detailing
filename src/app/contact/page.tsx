import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { InstantEstimateForm } from '@/components/forms/instant-estimate-form'
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
    content: '(757) 123-4567',
    description: 'Call us for immediate assistance',
    action: 'tel:+1-757-123-4567'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@blackbirddetailing.com',
    description: 'Email us your questions',
    action: 'mailto:info@blackbirddetailing.com'
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
    content: 'Mon-Sat: 8am-6pm',
    description: 'Sun: By Appointment',
    action: null
  }
]

const whyChooseUs = [
  {
    title: 'Free Estimates',
    description: 'Get detailed pricing with no obligation'
  },
  {
    title: 'Quick Response',
    description: 'We respond within 24 hours'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprises'
  },
  {
    title: 'Expert Consultation',
    description: 'Professional advice for your vehicle'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-blackbird-black py-20">
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
            Get a personalized quote for your vehicle in just a few minutes. 
            Our instant estimate engine provides accurate pricing based on your 
            specific needs and vehicle condition.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Estimate Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <InstantEstimateForm />
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
              <CardHeader>
                <CardTitle className="text-blackbird-off-white">Contact Information</CardTitle>
                <CardDescription className="text-blackbird-off-white/70">
                  Prefer to speak with us directly? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-blackbird-ignition-blue/20 rounded-lg">
                      <item.icon className="h-5 w-5 text-blackbird-ignition-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blackbird-off-white mb-1">
                        {item.title}
                      </h3>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-blackbird-ignition-blue hover:text-blackbird-ignition-blue/80 transition-colors font-medium"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-blackbird-off-white font-medium">
                          {item.content}
                        </p>
                      )}
                      <p className="text-sm text-blackbird-off-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
              <CardHeader>
                <CardTitle className="text-blackbird-off-white">Why Choose Blackbird?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blackbird-ignition-blue rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blackbird-off-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-blackbird-off-white/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-to-br from-blackbird-ignition-blue/20 to-blackbird-charcoal/50 border-blackbird-ignition-blue/30">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading font-bold text-blackbird-off-white mb-3">
                  Need to Speak with Someone?
                </h3>
                <p className="text-blackbird-off-white/80 text-sm mb-4">
                  Our detailing experts are standing by to answer your questions 
                  and provide personalized recommendations.
                </p>
                <a
                  href="tel:+1-757-123-4567"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now: (757) 123-4567
                </a>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
              <CardHeader>
                <CardTitle className="text-blackbird-off-white">Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blackbird-off-white">Virginia Beach</span>
                    <span className="text-blackbird-ignition-blue text-sm font-medium">Primary</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blackbird-off-white">Chesapeake</span>
                    <span className="text-blackbird-off-white/60 text-sm">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blackbird-off-white">Norfolk</span>
                    <span className="text-blackbird-off-white/60 text-sm">Available</span>
                  </div>
                </div>
                <p className="text-xs text-blackbird-off-white/60 mt-4">
                  Mobile service available throughout Hampton Roads
                </p>
              </CardContent>
            </Card>
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
                Every vehicle is unique, and we're here to provide personalized 
                recommendations. Don't hesitate to reach out with any questions 
                about our detailing services or packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1-757-123-4567"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (757) 123-4567
                </a>
                <a
                  href="mailto:info@blackbirddetailing.com"
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