'use client'

import { useState, useEffect } from 'react'
import { Loader2, Search } from 'lucide-react'
import { PortfolioFilter } from './portfolio-filter'
import { PortfolioItemCard } from './portfolio-item-card'
import { PortfolioItem, PortfolioFilters } from '@/types/portfolio'
import { Button } from '@/components/ui/button'

interface PortfolioGridProps {
  initialItems?: PortfolioItem[]
  className?: string
}

// Mock portfolio data - in production this would come from Supabase
const mockPortfolioItems: PortfolioItem[] = [
  {
    id: '1',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    title: 'BMW M3 Paint Correction & Ceramic Coating',
    description: 'Complete paint restoration with multi-stage correction followed by premium ceramic coating application. The vehicle had significant swirl marks and light scratches from poor maintenance practices.',
    completion_date: '2024-01-15T10:00:00Z',
    featured: true,
    vehicle_year: 2020,
    vehicle_make: 'BMW',
    vehicle_model: 'M3',
    vehicle_color: 'Alpine White',
    vehicle_type: 'sedan',
    before_images: ['/images/portfolio/before-after/ceramic-coating/bmw-ceramic-coating-2.webp'],
    after_images: ['/images/portfolio/before-after/ceramic-coating/bmw-ceramic-coating-11.webp'],
    thumbnail_image: '/images/portfolio/thumbnails/bmw-ceramic-coating-11.webp',
    services_performed: ['paint-correction', 'ceramic-coating', 'wheel-coating'],
    primary_service: 'ceramic-coating',
    package_used: 'grand-tourer',
    duration_hours: 12.5,
    price_range: '1000-2000',
    difficulty_level: 'advanced',
    customer_testimonial: 'Absolutely incredible work! My M3 looks better than when I bought it new. The attention to detail is unmatched.',
    customer_name: 'John D.',
    customer_location: 'Virginia Beach, VA',
    tags: ['bmw', 'performance', 'paint-correction', 'ceramic-coating'],
    slug: 'bmw-m3-paint-correction-ceramic-coating',
    meta_description: 'BMW M3 paint correction and ceramic coating transformation'
  },
  {
    id: '2',
    created_at: '2024-01-10T14:00:00Z',
    updated_at: '2024-01-10T14:00:00Z',
    title: 'Porsche 911 Turbo S Full Restoration',
    description: 'Complete interior and exterior restoration of a 2019 Porsche 911 Turbo S. Included paint correction, ceramic coating, and full interior leather treatment.',
    completion_date: '2024-01-10T14:00:00Z',
    featured: true,
    vehicle_year: 2019,
    vehicle_make: 'Porsche',
    vehicle_model: '911 Turbo S',
    vehicle_color: 'Jet Black',
    vehicle_type: 'coupe',
    before_images: ['/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-15.webp'],
    after_images: ['/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-20.webp'],
    thumbnail_image: '/images/portfolio/thumbnails/porsche-ceramic-coating-20.webp',
    services_performed: ['paint-correction', 'ceramic-coating', 'interior-detailing', 'leather-treatment'],
    primary_service: 'full-detail',
    package_used: 'trackhawk',
    duration_hours: 18.0,
    price_range: 'over-2000',
    difficulty_level: 'expert',
    customer_testimonial: 'The transformation is absolutely stunning. Every surface looks perfect and the attention to detail is incredible.',
    customer_name: 'Michael R.',
    customer_location: 'Chesapeake, VA',
    tags: ['porsche', 'exotic', 'full-restoration', 'luxury'],
    slug: 'porsche-911-turbo-s-full-restoration',
    meta_description: 'Porsche 911 Turbo S complete restoration with paint correction and ceramic coating'
  },
  {
    id: '3',
    created_at: '2024-01-05T09:00:00Z',
    updated_at: '2024-01-05T09:00:00Z',
    title: 'Tesla Model S Interior Deep Clean',
    description: 'Comprehensive interior detailing for a family Tesla Model S. Focus on vegan leather seats, dashboard conditioning, and complete sanitization.',
    completion_date: '2024-01-05T09:00:00Z',
    featured: false,
    vehicle_year: 2021,
    vehicle_make: 'Tesla',
    vehicle_model: 'Model S',
    vehicle_color: 'Pearl White',
    vehicle_type: 'sedan',
    before_images: ['/images/portfolio/before-after/interior-detailing/interior-detail-12.webp'],
    after_images: ['/images/portfolio/before-after/ceramic-coating/tesla-ceramic-coating-24.webp'],
    thumbnail_image: '/images/portfolio/thumbnails/tesla-ceramic-coating-24.webp',
    services_performed: ['interior-detailing', 'sanitization', 'leather-treatment'],
    primary_service: 'interior-detailing',
    package_used: 'sport',
    duration_hours: 6.0,
    price_range: '500-1000',
    difficulty_level: 'intermediate',
    customer_testimonial: 'Amazing work on the interior. Looks and smells like a brand new car!',
    customer_name: 'Sarah L.',
    customer_location: 'Norfolk, VA',
    tags: ['tesla', 'interior', 'family-car', 'electric'],
    slug: 'tesla-model-s-interior-deep-clean',
    meta_description: 'Tesla Model S interior detailing and deep cleaning service'
  },
  {
    id: '4',
    created_at: '2024-01-01T16:00:00Z',
    updated_at: '2024-01-01T16:00:00Z',
    title: 'Ford F-150 Raptor Full Detail',
    description: 'Complete detailing package for an off-road Ford F-150 Raptor. Extensive cleaning, paint correction, and protective coating application.',
    completion_date: '2024-01-01T16:00:00Z',
    featured: false,
    vehicle_year: 2022,
    vehicle_make: 'Ford',
    vehicle_model: 'F-150 Raptor',
    vehicle_color: 'Avalanche Gray',
    vehicle_type: 'truck',
    before_images: ['/images/portfolio/before-after/ceramic-coating/ford-ceramic-coating-4.webp'],
    after_images: ['/images/portfolio/before-after/ceramic-coating/ford-ceramic-coating-29.webp'],
    thumbnail_image: '/images/portfolio/thumbnails/ford-ceramic-coating-29.webp',
    services_performed: ['exterior-wash', 'paint-correction', 'ceramic-coating', 'interior-detailing'],
    primary_service: 'full-detail',
    package_used: 'grand-tourer',
    duration_hours: 14.0,
    price_range: '1000-2000',
    difficulty_level: 'advanced',
    customer_testimonial: 'Incredible transformation! They made my work truck look like it just rolled off the showroom floor.',
    customer_name: 'David M.',
    customer_location: 'Virginia Beach, VA',
    tags: ['ford', 'truck', 'off-road', 'work-vehicle'],
    slug: 'ford-f150-raptor-full-detail',
    meta_description: 'Ford F-150 Raptor complete detailing with paint correction and ceramic coating'
  }
]

export function PortfolioGrid({ initialItems = mockPortfolioItems, className = '' }: PortfolioGridProps) {
  const [items, setItems] = useState<PortfolioItem[]>(initialItems)
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(initialItems)
  const [filters, setFilters] = useState<PortfolioFilters>({})
  const [isLoading, setIsLoading] = useState(false)
  const [displayCount, setDisplayCount] = useState(12)

  // Filter items based on current filters
  useEffect(() => {
    let filtered = [...items]

    if (filters.serviceType && filters.serviceType !== 'all') {
      filtered = filtered.filter(item => 
        item.primary_service === filters.serviceType ||
        item.services_performed.includes(filters.serviceType!)
      )
    }

    if (filters.vehicleMake && filters.vehicleMake !== 'all') {
      filtered = filtered.filter(item => 
        item.vehicle_make.toLowerCase() === filters.vehicleMake!.toLowerCase()
      )
    }

    if (filters.vehicleType && filters.vehicleType !== 'all') {
      filtered = filtered.filter(item => item.vehicle_type === filters.vehicleType)
    }

    if (filters.priceRange && filters.priceRange !== 'all') {
      filtered = filtered.filter(item => item.price_range === filters.priceRange)
    }

    if (filters.featured) {
      filtered = filtered.filter(item => item.featured)
    }

    // Sort by completion date (newest first) and featured items first
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.completion_date).getTime() - new Date(a.completion_date).getTime()
    })

    setFilteredItems(filtered)
  }, [items, filters])

  const handleFiltersChange = (newFilters: PortfolioFilters) => {
    setIsLoading(true)
    setFilters(newFilters)
    
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const loadMoreItems = () => {
    setDisplayCount(prev => prev + 12)
  }

  const displayedItems = filteredItems.slice(0, displayCount)
  const hasMore = displayCount < filteredItems.length

  if (items.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <Search className="h-16 w-16 text-blackbird-off-white/30 mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-2">
          No Portfolio Items Found
        </h3>
        <p className="text-blackbird-off-white/70">
          We're currently building our portfolio. Check back soon to see our amazing transformations!
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Filter Component */}
      <PortfolioFilter
        filters={filters}
        onFiltersChange={handleFiltersChange}
        totalResults={filteredItems.length}
        isLoading={isLoading}
      />

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 text-blackbird-ignition-blue animate-spin" />
          <span className="ml-2 text-blackbird-off-white/70">Filtering projects...</span>
        </div>
      )}

      {/* No Results */}
      {!isLoading && filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-blackbird-off-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-2">
            No Projects Match Your Filters
          </h3>
          <p className="text-blackbird-off-white/70 mb-4">
            Try adjusting your filters to see more results.
          </p>
          <Button
            variant="outline"
            onClick={() => handleFiltersChange({})}
            className="border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal"
          >
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Portfolio Grid */}
      {!isLoading && displayedItems.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedItems.map((item) => (
              <PortfolioItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center">
              <Button
                onClick={loadMoreItems}
                variant="outline"
                size="lg"
                className="border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal"
              >
                Load More Projects
                <span className="ml-2 text-blackbird-off-white/60">
                  ({filteredItems.length - displayCount} remaining)
                </span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}