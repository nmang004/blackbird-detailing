import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { OptimizedVideo } from '@/components/ui/optimized-video'
import { Play, Shield, Sparkles, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-0">
      {/* Background Video */}
      <div className="absolute inset-0">
        <OptimizedVideo
          src="/BlackbirdHomepageHeader.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Overlay gradient - lighter for better brightness */}
        <div className="absolute inset-0 bg-gradient-to-t from-blackbird-black/70 via-blackbird-black/40 to-blackbird-black/50 z-10" />
        
        {/* Additional overlay for text contrast - reduced */}
        <div className="absolute inset-0 bg-blackbird-black/20 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container text-center px-6 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blackbird-charcoal/80 rounded-full px-3 py-2 sm:px-4 sm:py-2 mb-6 sm:mb-8 backdrop-blur-sm border border-blackbird-ignition-blue/30">
            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-blackbird-ignition-blue" />
            <span className="text-xs sm:text-sm text-blackbird-off-white font-medium">
              Virginia Beach's Exclusive Luxury Detailing
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-blackbird-off-white block sm:inline">Luxury.</span>{' '}
            <span className="text-blackbird-ignition-blue block sm:inline">Excellence.</span>{' '}
            <span className="text-gradient bg-gradient-to-r from-blackbird-off-white to-blackbird-ignition-blue bg-clip-text text-transparent block sm:inline">
              Distinction.
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blackbird-off-white/85 mb-4 sm:mb-6 max-w-3xl mx-auto px-2 font-medium">
            Luxury Detailing. Exceptional Care. Uncompromising Excellence.
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-blackbird-off-white/75 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 leading-relaxed font-body">
            Experience the ultimate in luxury automotive care with our exclusive, 
            white-glove detailing services. Every detail perfected for discerning owners 
            across Virginia Beach, Chesapeake, and Norfolk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-12 sm:mb-16 px-2">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Get An Instant Estimate
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#services" className="flex items-center justify-center space-x-2">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Experience Luxury</span>
              </Link>
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2">
            <div className="flex flex-col items-center text-center p-6 bg-blackbird-charcoal/30 rounded-lg backdrop-blur-sm border border-blackbird-charcoal/50 hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
              <Shield className="h-8 w-8 text-blackbird-ignition-blue mb-3" />
              <h3 className="font-heading font-semibold text-blackbird-off-white mb-2 text-lg">
                Premium Protection
              </h3>
              <p className="text-base text-blackbird-off-white/80 font-body">
                Exclusive ceramic coatings for lasting beauty and protection
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-blackbird-charcoal/30 rounded-lg backdrop-blur-sm border border-blackbird-charcoal/50 hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
              <Sparkles className="h-8 w-8 text-blackbird-ignition-blue mb-3" />
              <h3 className="font-heading font-semibold text-blackbird-off-white mb-2 text-lg">
                Flawless Finish
              </h3>
              <p className="text-base text-blackbird-off-white/80 font-body">
                Expert paint restoration for showroom-perfect results
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-blackbird-charcoal/30 rounded-lg backdrop-blur-sm border border-blackbird-charcoal/50 hover:border-blackbird-ignition-blue/30 transition-colors duration-300">
              <Award className="h-8 w-8 text-blackbird-ignition-blue mb-3" />
              <h3 className="font-heading font-semibold text-blackbird-off-white mb-2 text-lg">
                Concierge Experience
              </h3>
              <p className="text-base text-blackbird-off-white/80 font-body">
                Exclusive service experience tailored to discerning clients
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