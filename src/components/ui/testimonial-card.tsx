import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  testimonial: string
  vehicleType?: string
  className?: string
}

export function TestimonialCard({
  name,
  location,
  rating,
  testimonial,
  vehicleType,
  className
}: TestimonialCardProps) {
  return (
    <Card className={cn(
      "bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/30 transition-all duration-300 relative overflow-hidden",
      className
    )}>
      <CardContent className="p-6">
        {/* Quote Icon */}
        <Quote className="h-8 w-8 text-blackbird-ignition-blue/30 mb-4" />
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn(
                "h-4 w-4",
                index < rating
                  ? "text-blackbird-ignition-blue fill-blackbird-ignition-blue"
                  : "text-blackbird-charcoal"
              )}
            />
          ))}
          <span className="text-sm text-blackbird-off-white/60 ml-2">
            {rating}/5
          </span>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-blackbird-off-white/90 mb-6 leading-relaxed">
          "{testimonial}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-blackbird-off-white">{name}</p>
            <p className="text-sm text-blackbird-off-white/60">{location}</p>
          </div>
          {vehicleType && (
            <div className="text-right">
              <p className="text-xs text-blackbird-ignition-blue font-medium uppercase tracking-wider">
                {vehicleType}
              </p>
            </div>
          )}
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blackbird-ignition-blue/10 to-transparent rounded-bl-full" />
      </CardContent>
    </Card>
  )
}