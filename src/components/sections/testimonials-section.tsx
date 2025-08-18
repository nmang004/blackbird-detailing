'use client'

import { TestimonialCard } from '@/components/ui/testimonial-card'
import { Carousel } from '@/components/ui/carousel'
import { useCarousel } from '@/hooks/use-carousel'
import { Users, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Elizabeth Snyder',
    location: 'Local Guide - Virginia Beach',
    rating: 5,
    testimonial: 'I was absolutely blown away at the results from Judah detailing the interior of my Ford Explorer!!! This man worked serious magic on my (semi) neglected car! After half the summer going by it needed some love because my 3 kids are messy, and we had a lot of sand, and pet hair in there. Not only was my vehicle in seemingly new condition, Judah was kind, professional, punctual, and has very reasonable pricing! Highly, HIGHLY recommend!!!',
    vehicleType: 'Ford Explorer'
  },
  {
    name: 'Jesse Gomez',
    location: 'Virginia Beach',
    rating: 5,
    testimonial: 'Blackbird detailing hands down is the best mobile detailing company I have ever used. Judah and his team took time and care into every step of the process of getting my F250 detailed inside and out. If you want top shelf quality at an affordable price give them a call.',
    vehicleType: 'Ford F-250'
  },
  {
    name: 'Mara Bostelman',
    location: 'Hampton Roads',
    rating: 5,
    testimonial: 'Blackbird Detailing did an amazing job with my car! The attention to detail was top-notch, and the results were beyond my expectations. I couldn\'t be happier with how clean and refreshed everything looks. They take pride in the quality and service that they provide. I highly recommend this company to anyone looking for high-quality auto detailing!',
    vehicleType: 'Vehicle Owner'
  },
  {
    name: 'Bobby',
    location: 'Local Guide - Virginia Beach',
    rating: 5,
    testimonial: 'Blackbird mobile detailing is on point! Thorough, extremely detailed, punctual, and highly professional. Made our Suburban look brand new on the inside. Truly a master of his craft, Judah used meticulous care in cleaning our vehicle. He explained thoroughly what he wasn\'t able to do, and the reasons behind it. His price was extremely fair, and he even gave us a discount because the initial scope was less than what he needed to do. That\'s complete honesty right there! 100% satisfied.',
    vehicleType: 'Suburban'
  },
  {
    name: 'Lorena Decker',
    location: 'Hampton Roads',
    rating: 5,
    testimonial: 'My SUV needed a lot of love as I had never gotten it professionally detailed. Judah did a great job with the inside and outside. He went above and beyond to leave it to a high standard. Now to have my children not get it dirty so fast! I\'ll be setting up some sort of maintenance so I can keep it looking this beautiful!',
    vehicleType: 'SUV'
  },
  {
    name: 'Aaron Stewart',
    location: 'Virginia Beach',
    rating: 5,
    testimonial: 'This is a company that goes above and beyond your expectations! If you want your most prized possession in your garage or driveway looking brand new again this is the company you\'re looking for! Would 100% recommend!',
    vehicleType: 'Vehicle Owner'
  },
  {
    name: 'Tony Cox',
    location: 'Local Guide - Virginia Beach',
    rating: 5,
    testimonial: 'I am very happy with the service provided by Blackbird detailing. I was able to set up a year long wash plan for my company\'s work van. We set up a monthly payment schedule and I get an electronic invoice that is super easy to pay. Scheduling the detailing service has been very easy and having him come out to my job sites is super convenient. 100% will continue with a wash plan when this expires.',
    vehicleType: 'Work Van'
  },
  {
    name: 'Lindsay Reed',
    location: 'Virginia Beach',
    rating: 5,
    testimonial: 'Shout out to Judah Cates & Blackbird Detailing for an outstanding job restoring our Toyota 4Runner to its original showroom shine. Highly recommend!',
    vehicleType: 'Toyota 4Runner'
  },
  {
    name: 'Rec Kirschner',
    location: 'Hampton Roads',
    rating: 5,
    testimonial: 'If you care about your vehicle and want it to look showroom-ready again, this is the place. Worth every penny. I\'ll definitely be returning every few months for maintenance detailing.',
    vehicleType: 'Vehicle Owner'
  }
]

export function TestimonialsSection() {
  const carousel = useCarousel({
    itemCount: testimonials.length,
    autoPlay: true,
    autoPlayInterval: 5500,
    pauseOnHover: true
  })

  return (
    <section className="py-20 md:py-32 bg-blackbird-charcoal/10">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
            <Users className="h-4 w-4 text-blackbird-ignition-blue" />
            <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
              Client Reviews
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
            What Our Clients{' '}
            <span className="text-blackbird-ignition-blue">Say</span>
          </h2>
          
          <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto mb-12">
            Don't just take our word for it. Here's what vehicle owners across 
            Virginia Beach, Chesapeake, and Norfolk say about our work.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 text-blackbird-ignition-blue fill-blackbird-ignition-blue"
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-blackbird-off-white">5.0</p>
              <p className="text-sm text-blackbird-off-white/60">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blackbird-off-white">200+</p>
              <p className="text-sm text-blackbird-off-white/60">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blackbird-off-white">100%</p>
              <p className="text-sm text-blackbird-off-white/60">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          currentIndex={carousel.currentIndex}
          onNext={carousel.goToNext}
          onPrevious={carousel.goToPrevious}
          onMouseEnter={carousel.handleMouseEnter}
          onMouseLeave={carousel.handleMouseLeave}
          itemsPerView={{
            mobile: 1,
            tablet: 2, 
            desktop: 3
          }}
          showArrows={true}
          showDots={false}
          gap="gap-8"
          className="mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              className="h-full"
            />
          ))}
        </Carousel>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-blackbird-off-white/70 mb-6">
            Ready to experience the Blackbird difference?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Schedule Your Service
            </a>
            <a
              href="tel:+1-757-123-4567"
              className="inline-flex items-center px-8 py-3 border border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black font-semibold rounded-lg transition-all duration-300"
            >
              Call (757) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}