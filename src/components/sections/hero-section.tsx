import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play, Shield, Sparkles, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/BlackbirdHomepageHeader.mov" type="video/mp4" />
          <source src="/BlackbirdHomepageHeader.mov" type="video/quicktime" />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blackbird-black/90 via-blackbird-black/60 to-blackbird-black/70" />
        
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-blackbird-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blackbird-charcoal/80 rounded-full px-4 py-2 mb-8 backdrop-blur-sm border border-blackbird-ignition-blue/30">
            <Award className="h-4 w-4 text-blackbird-ignition-blue" />
            <span className="text-sm text-blackbird-off-white font-medium">
              Virginia Beach's Premier Detailing Service
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
            <span className="text-blackbird-off-white">Precision.</span>{' '}
            <span className="text-blackbird-ignition-blue">Protection.</span>{' '}
            <span className="text-gradient bg-gradient-to-r from-blackbird-off-white to-blackbird-ignition-blue bg-clip-text text-transparent">
              Perfection.
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blackbird-off-white/80 mb-4 max-w-3xl mx-auto">
            Motorsport-Grade Precision for Your Automobile
          </p>

          {/* Description */}
          <p className="text-lg text-blackbird-off-white/60 mb-12 max-w-2xl mx-auto">
            Experience premium automotive detailing that combines cutting-edge technology 
            with meticulous craftsmanship. Serving Virginia Beach, Chesapeake, and Norfolk 
            with uncompromising excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button
              size="lg"
              className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Get An Instant Estimate
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#services" className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Our Process</span>
              </Link>
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-blackbird-charcoal/30 rounded-lg backdrop-blur-sm border border-blackbird-charcoal/50 hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
              <Shield className="h-8 w-8 text-blackbird-ignition-blue mb-3" />
              <h3 className="font-heading font-semibold text-blackbird-off-white mb-2">
                Ceramic Protection
              </h3>
              <p className="text-sm text-blackbird-off-white/70">
                Industry-leading ceramic coatings with multi-year warranties
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-blackbird-charcoal/30 rounded-lg backdrop-blur-sm border border-blackbird-charcoal/50 hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
              <Sparkles className="h-8 w-8 text-blackbird-ignition-blue mb-3" />
              <h3 className="font-heading font-semibold text-blackbird-off-white mb-2">
                Paint Correction
              </h3>
              <p className="text-sm text-blackbird-off-white/70">
                Professional swirl removal and paint restoration
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-blackbird-charcoal/30 rounded-lg backdrop-blur-sm border border-blackbird-charcoal/50 hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
              <Award className="h-8 w-8 text-blackbird-ignition-blue mb-3" />
              <h3 className="font-heading font-semibold text-blackbird-off-white mb-2">
                Premium Service
              </h3>
              <p className="text-sm text-blackbird-off-white/70">
                White-glove treatment with attention to every detail
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blackbird-off-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blackbird-ignition-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}