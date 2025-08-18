'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Star, ArrowRight, Maximize2, X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BeforeAfterSlider } from './before-after-slider'
import { PortfolioItem } from '@/types/portfolio'

interface PortfolioItemCardProps {
  item: PortfolioItem
  className?: string
}

export function PortfolioItemCard({ item, className = '' }: PortfolioItemCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case 'under-500': return 'Under $500'
      case '500-1000': return '$500 - $1,000'
      case '1000-2000': return '$1,000 - $2,000'
      case 'over-2000': return 'Over $2,000'
      default: return 'Contact for pricing'
    }
  }

  const getServiceLabel = (service: string) => {
    switch (service) {
      case 'ceramic-coating': return 'Ceramic Coating'
      case 'paint-correction': return 'Paint Correction'
      case 'interior-detailing': return 'Interior Detailing'
      case 'full-detail': return 'Full Detail'
      case 'maintenance': return 'Maintenance'
      default: return service
    }
  }

  const getPackageLabel = (pkg?: string) => {
    switch (pkg) {
      case 'sport': return 'Sport Package'
      case 'grand-tourer': return 'Grand Tourer Package'
      case 'trackhawk': return 'Trackhawk Package'
      default: return null
    }
  }

  return (
    <>
      {/* Card */}
      <Card className={`group bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 overflow-hidden ${className}`}>
        <CardContent className="p-0">
          {/* Before/After Slider */}
          <div className="relative">
            <BeforeAfterSlider
              beforeImage={item.before_images[0]}
              afterImage={item.after_images[0]}
              alt={item.title}
              className="h-64 md:h-72"
            />
            
            {/* Featured Badge */}
            {item.featured && (
              <div className="absolute top-4 left-4 bg-blackbird-ignition-blue text-white text-xs px-2 py-1 rounded z-20">
                FEATURED
              </div>
            )}

            {/* Expand Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-blackbird-ignition-blue/80 text-white p-2 rounded-full transition-colors z-20"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-heading font-bold text-blackbird-off-white mb-1 text-lg group-hover:text-blackbird-ignition-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-blackbird-off-white/60 text-sm">
                  {item.vehicle_year} {item.vehicle_make} {item.vehicle_model}
                </p>
              </div>
              <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30 text-xs">
                {getServiceLabel(item.primary_service)}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-blackbird-off-white/70 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* Package Badge */}
            {item.package_used && (
              <div className="mb-4">
                <Badge className="bg-blackbird-ignition-blue/20 text-blackbird-ignition-blue border-blackbird-ignition-blue/30">
                  {getPackageLabel(item.package_used)}
                </Badge>
              </div>
            )}

            {/* Services Performed */}
            <div className="flex flex-wrap gap-1 mb-4">
              {item.services_performed.slice(0, 3).map((service, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blackbird-charcoal/50 text-blackbird-off-white/80 px-2 py-1 rounded"
                >
                  {getServiceLabel(service)}
                </span>
              ))}
              {item.services_performed.length > 3 && (
                <span className="text-xs bg-blackbird-charcoal/50 text-blackbird-off-white/80 px-2 py-1 rounded">
                  +{item.services_performed.length - 3} more
                </span>
              )}
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-blackbird-off-white/60">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(item.completion_date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{item.duration_hours}h</span>
              </div>
              {item.customer_location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{item.customer_location}</span>
                </div>
              )}
              <div className="text-blackbird-ignition-blue">
                {getPriceRangeLabel(item.price_range)}
              </div>
            </div>

            {/* Customer Testimonial */}
            {item.customer_testimonial && (
              <div className="bg-blackbird-charcoal/30 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  {item.customer_name && (
                    <span className="text-xs text-blackbird-off-white/60 ml-2">
                      - {item.customer_name}
                    </span>
                  )}
                </div>
                <p className="text-blackbird-off-white/80 text-sm italic line-clamp-2">
                  "{item.customer_testimonial}"
                </p>
              </div>
            )}

            {/* View Details Button */}
            <Button
              variant="ghost"
              className="w-full text-blackbird-ignition-blue hover:text-blackbird-ignition-blue/80 hover:bg-blackbird-charcoal/50 p-0"
              onClick={() => setIsModalOpen(true)}
            >
              View Full Details
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-blackbird-black border border-blackbird-charcoal rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            {/* Modal Header */}
            <div className="sticky top-0 bg-blackbird-black border-b border-blackbird-charcoal p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-heading font-bold text-blackbird-off-white mb-1">
                  {item.title}
                </h2>
                <p className="text-blackbird-off-white/60">
                  {item.vehicle_year} {item.vehicle_make} {item.vehicle_model}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-blackbird-off-white/60 hover:text-blackbird-off-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Large Before/After Slider */}
              <div className="mb-6">
                <BeforeAfterSlider
                  beforeImage={item.before_images[0]}
                  afterImage={item.after_images[0]}
                  alt={item.title}
                  className="h-96"
                />
              </div>

              {/* Full Description and Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-4">
                    Project Details
                  </h3>
                  <p className="text-blackbird-off-white/70 mb-6">
                    {item.description}
                  </p>

                  {/* All Services */}
                  <div className="mb-6">
                    <h4 className="font-heading font-bold text-blackbird-off-white mb-2">
                      Services Performed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.services_performed.map((service, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30"
                        >
                          {getServiceLabel(service)}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <div>
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-2">
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blackbird-charcoal/50 text-blackbird-off-white/80 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-4">
                    Project Information
                  </h3>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blackbird-off-white/60">Completion Date:</span>
                      <span className="text-blackbird-off-white">{formatDate(item.completion_date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blackbird-off-white/60">Duration:</span>
                      <span className="text-blackbird-off-white">{item.duration_hours} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blackbird-off-white/60">Price Range:</span>
                      <span className="text-blackbird-ignition-blue">{getPriceRangeLabel(item.price_range)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blackbird-off-white/60">Difficulty Level:</span>
                      <span className="text-blackbird-off-white capitalize">{item.difficulty_level}</span>
                    </div>
                    {item.customer_location && (
                      <div className="flex justify-between">
                        <span className="text-blackbird-off-white/60">Location:</span>
                        <span className="text-blackbird-off-white">{item.customer_location}</span>
                      </div>
                    )}
                  </div>

                  {/* Customer Testimonial */}
                  {item.customer_testimonial && (
                    <div className="mt-6 bg-blackbird-charcoal/30 rounded-lg p-4">
                      <h4 className="font-heading font-bold text-blackbird-off-white mb-3">
                        Customer Review
                      </h4>
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        {item.customer_name && (
                          <span className="text-sm text-blackbird-off-white/60 ml-2">
                            - {item.customer_name}
                          </span>
                        )}
                      </div>
                      <p className="text-blackbird-off-white/80 italic">
                        "{item.customer_testimonial}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}