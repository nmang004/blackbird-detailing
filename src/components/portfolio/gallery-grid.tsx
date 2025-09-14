'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Loader2, Search } from 'lucide-react'
import { GalleryItemCard } from './gallery-item-card'
import { GalleryModal } from './gallery-modal'
import { GalleryFilter } from './gallery-filter'
import { Button } from '@/components/ui/button'
import { GalleryItem, GalleryFilters } from '@/types/portfolio'

interface GalleryGridProps {
  initialItems?: GalleryItem[]
  className?: string
}

// Mock gallery data with more extensive examples
const mockGalleryItems: GalleryItem[] = [
  {
    id: '1',
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-01-20T10:00:00Z',
    title: 'McLaren 720S Ceramic Coating Transformation',
    description: 'Complete paint protection system applied to this stunning McLaren 720S. Multi-stage paint correction followed by premium ceramic coating application for unmatched gloss and protection.',
    completion_date: '2024-01-20T10:00:00Z',
    featured: true,
    vehicle_year: 2022,
    vehicle_make: 'McLaren',
    vehicle_model: '720S',
    vehicle_color: 'Volcano Orange',
    vehicle_type: 'exotic',
    media_type: 'image',
    media_url: '/images/portfolio/before-after/ceramic-coating/bmw-ceramic-coating-11.webp',
    thumbnail_url: '/images/portfolio/thumbnails/bmw-ceramic-coating-11.webp',
    alt_text: 'McLaren 720S after ceramic coating application',
    additional_images: [
      '/images/portfolio/before-after/ceramic-coating/bmw-ceramic-coating-2.webp',
      '/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-20.webp'
    ],
    services_performed: ['paint-correction', 'ceramic-coating', 'wheel-coating'],
    primary_service: 'ceramic-coating',
    package_used: 'trackhawk',
    duration_hours: 16.0,
    price_range: 'over-2000',
    difficulty_level: 'expert',
    customer_testimonial: 'Absolutely incredible work! The McLaren looks better than the day I bought it. The attention to detail is unmatched.',
    customer_name: 'Marcus R.',
    customer_location: 'Virginia Beach, VA',
    view_count: 1247,
    likes: 89,
    tags: ['mclaren', 'supercar', 'ceramic-coating', 'paint-correction', 'exotic'],
    slug: 'mclaren-720s-ceramic-coating-transformation',
    meta_description: 'McLaren 720S ceramic coating and paint correction transformation'
  },
  {
    id: '2',
    created_at: '2024-01-18T14:00:00Z',
    updated_at: '2024-01-18T14:00:00Z',
    title: 'Porsche 911 Turbo S Paint Correction Process',
    description: 'Watch our multi-stage paint correction process on this pristine Porsche 911 Turbo S. Removing years of swirl marks and micro scratches to achieve a flawless finish.',
    completion_date: '2024-01-18T14:00:00Z',
    featured: true,
    vehicle_year: 2023,
    vehicle_make: 'Porsche',
    vehicle_model: '911 Turbo S',
    vehicle_color: 'Guards Red',
    vehicle_type: 'coupe',
    media_type: 'video',
    media_url: '/videos/porsche-paint-correction.mp4',
    thumbnail_url: '/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-20.webp',
    video_duration: 147,
    video_poster: '/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-15.webp',
    alt_text: 'Porsche 911 Turbo S paint correction process video',
    services_performed: ['paint-correction', 'ceramic-coating'],
    primary_service: 'paint-correction',
    package_used: 'trackhawk',
    duration_hours: 14.0,
    price_range: 'over-2000',
    difficulty_level: 'expert',
    customer_testimonial: 'The transformation is absolutely stunning. Every surface looks perfect and the attention to detail is incredible.',
    customer_name: 'David K.',
    customer_location: 'Chesapeake, VA',
    view_count: 2156,
    likes: 142,
    tags: ['porsche', 'paint-correction', 'process', 'video', 'sports-car'],
    slug: 'porsche-911-turbo-s-paint-correction-process',
    meta_description: 'Porsche 911 Turbo S paint correction process video'
  },
  {
    id: '3',
    created_at: '2024-01-15T09:00:00Z',
    updated_at: '2024-01-15T09:00:00Z',
    title: 'BMW M3 Competition Interior Restoration',
    description: 'Complete interior detailing and leather restoration for this BMW M3 Competition. Deep cleaning, conditioning, and protection for all surfaces.',
    completion_date: '2024-01-15T09:00:00Z',
    featured: false,
    vehicle_year: 2021,
    vehicle_make: 'BMW',
    vehicle_model: 'M3 Competition',
    vehicle_color: 'Alpine White',
    vehicle_type: 'sedan',
    media_type: 'image',
    media_url: '/images/portfolio/before-after/interior-detailing/interior-detail-12.webp',
    thumbnail_url: '/images/portfolio/thumbnails/tesla-ceramic-coating-24.webp',
    alt_text: 'BMW M3 Competition interior after detailed cleaning',
    services_performed: ['interior-detailing', 'leather-treatment', 'sanitization'],
    primary_service: 'interior-detailing',
    package_used: 'grand-tourer',
    duration_hours: 8.0,
    price_range: '1000-2000',
    difficulty_level: 'advanced',
    customer_testimonial: 'Amazing work on the interior. Looks and smells like a brand new car!',
    customer_name: 'Jennifer M.',
    customer_location: 'Norfolk, VA',
    view_count: 856,
    likes: 67,
    tags: ['bmw', 'interior', 'leather', 'detailing', 'performance'],
    slug: 'bmw-m3-competition-interior-restoration',
    meta_description: 'BMW M3 Competition interior detailing and restoration'
  },
  {
    id: '4',
    created_at: '2024-01-12T16:00:00Z',
    updated_at: '2024-01-12T16:00:00Z',
    title: 'Tesla Model S Plaid Ceramic Coating',
    description: 'Premium ceramic coating application on this Tesla Model S Plaid. Advanced paint protection for the ultimate electric performance sedan.',
    completion_date: '2024-01-12T16:00:00Z',
    featured: false,
    vehicle_year: 2022,
    vehicle_make: 'Tesla',
    vehicle_model: 'Model S Plaid',
    vehicle_color: 'Pearl White',
    vehicle_type: 'sedan',
    media_type: 'image',
    media_url: '/images/portfolio/before-after/ceramic-coating/tesla-ceramic-coating-24.webp',
    thumbnail_url: '/images/portfolio/thumbnails/tesla-ceramic-coating-24.webp',
    alt_text: 'Tesla Model S Plaid with ceramic coating',
    services_performed: ['ceramic-coating', 'wheel-coating'],
    primary_service: 'ceramic-coating',
    package_used: 'grand-tourer',
    duration_hours: 10.0,
    price_range: '1000-2000',
    difficulty_level: 'advanced',
    customer_testimonial: 'Perfect work on my Tesla. The ceramic coating makes the white paint pop!',
    customer_name: 'Alex T.',
    customer_location: 'Virginia Beach, VA',
    view_count: 743,
    likes: 54,
    tags: ['tesla', 'electric', 'ceramic-coating', 'luxury', 'performance'],
    slug: 'tesla-model-s-plaid-ceramic-coating',
    meta_description: 'Tesla Model S Plaid ceramic coating application'
  },
  {
    id: '5',
    created_at: '2024-01-10T11:00:00Z',
    updated_at: '2024-01-10T11:00:00Z',
    title: 'Ford F-150 Raptor Full Detail Time-lapse',
    description: 'Complete detailing process for this rugged Ford F-150 Raptor. From muddy work truck to showroom condition in this satisfying time-lapse video.',
    completion_date: '2024-01-10T11:00:00Z',
    featured: true,
    vehicle_year: 2022,
    vehicle_make: 'Ford',
    vehicle_model: 'F-150 Raptor',
    vehicle_color: 'Avalanche Gray',
    vehicle_type: 'truck',
    media_type: 'video',
    media_url: '/videos/raptor-full-detail.mp4',
    thumbnail_url: '/images/portfolio/before-after/ceramic-coating/ford-ceramic-coating-29.webp',
    video_duration: 89,
    video_poster: '/images/portfolio/before-after/ceramic-coating/ford-ceramic-coating-4.webp',
    alt_text: 'Ford F-150 Raptor full detail time-lapse video',
    services_performed: ['exterior-wash', 'interior-detailing', 'paint-correction', 'ceramic-coating'],
    primary_service: 'full-detail',
    package_used: 'grand-tourer',
    duration_hours: 12.0,
    price_range: '1000-2000',
    difficulty_level: 'advanced',
    customer_testimonial: 'Incredible transformation! They made my work truck look like it just rolled off the showroom floor.',
    customer_name: 'Mike S.',
    customer_location: 'Virginia Beach, VA',
    view_count: 3421,
    likes: 287,
    tags: ['ford', 'truck', 'full-detail', 'transformation', 'time-lapse'],
    slug: 'ford-f150-raptor-full-detail-timelapse',
    meta_description: 'Ford F-150 Raptor complete detailing transformation time-lapse'
  },
  {
    id: '6',
    created_at: '2024-01-08T13:00:00Z',
    updated_at: '2024-01-08T13:00:00Z',
    title: 'Mercedes-AMG GT 63 S Paint Protection Film',
    description: 'Full front-end paint protection film installation on this Mercedes-AMG GT 63 S. Ultimate protection for high-performance driving.',
    completion_date: '2024-01-08T13:00:00Z',
    featured: false,
    vehicle_year: 2023,
    vehicle_make: 'Mercedes-Benz',
    vehicle_model: 'AMG GT 63 S',
    vehicle_color: 'Magnetite Black',
    vehicle_type: 'coupe',
    media_type: 'image',
    media_url: '/images/portfolio/before-after/ceramic-coating/bmw-ceramic-coating-2.webp',
    thumbnail_url: '/images/portfolio/thumbnails/bmw-ceramic-coating-11.webp',
    alt_text: 'Mercedes-AMG GT 63 S with paint protection film',
    services_performed: ['paint-protection-film', 'ceramic-coating'],
    primary_service: 'paint-correction',
    package_used: 'trackhawk',
    duration_hours: 18.0,
    price_range: 'over-2000',
    difficulty_level: 'expert',
    customer_testimonial: 'Flawless PPF installation. You can barely tell it\'s there but the protection is incredible.',
    customer_name: 'Robert L.',
    customer_location: 'Chesapeake, VA',
    view_count: 1089,
    likes: 76,
    tags: ['mercedes', 'amg', 'ppf', 'paint-protection', 'luxury'],
    slug: 'mercedes-amg-gt-63s-paint-protection-film',
    meta_description: 'Mercedes-AMG GT 63 S paint protection film installation'
  }
]

export function GalleryGrid({ initialItems = mockGalleryItems, className = '' }: GalleryGridProps) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems)
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(initialItems)
  const [filters, setFilters] = useState<GalleryFilters>({})
  const [isLoading, setIsLoading] = useState(false)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [displayCount, setDisplayCount] = useState(12)

  // Intersection observer for load more
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Filter items based on current filters
  useEffect(() => {
    let filtered = [...items]

    // Media type filter
    if (filters.mediaType && filters.mediaType !== 'all') {
      filtered = filtered.filter(item => item.media_type === filters.mediaType)
    }

    // Service type filter
    if (filters.serviceType && filters.serviceType !== 'all') {
      filtered = filtered.filter(item =>
        item.primary_service === filters.serviceType ||
        item.services_performed.includes(filters.serviceType!)
      )
    }

    // Vehicle make filter
    if (filters.vehicleMake && filters.vehicleMake !== 'all') {
      filtered = filtered.filter(item =>
        item.vehicle_make.toLowerCase() === filters.vehicleMake!.toLowerCase()
      )
    }

    // Vehicle type filter
    if (filters.vehicleType && filters.vehicleType !== 'all') {
      filtered = filtered.filter(item => item.vehicle_type === filters.vehicleType)
    }

    // Price range filter
    if (filters.priceRange && filters.priceRange !== 'all') {
      filtered = filtered.filter(item => item.price_range === filters.priceRange)
    }

    // Featured filter
    if (filters.featured) {
      filtered = filtered.filter(item => item.featured)
    }

    // Sort by featured first, then by completion date (newest first)
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.completion_date).getTime() - new Date(a.completion_date).getTime()
    })

    setFilteredItems(filtered)
  }, [items, filters])

  const handleFiltersChange = (newFilters: GalleryFilters) => {
    setIsLoading(true)
    setFilters(newFilters)

    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedItem) return

    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    let newIndex: number

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedItem(filteredItems[newIndex])
  }

  // Load more items when scrolling near bottom
  useEffect(() => {
    if (inView && displayCount < filteredItems.length) {
      setDisplayCount(prev => Math.min(prev + 12, filteredItems.length))
    }
  }, [inView, displayCount, filteredItems.length])

  const displayedItems = useMemo(() =>
    filteredItems.slice(0, displayCount),
    [filteredItems, displayCount]
  )

  const hasMore = displayCount < filteredItems.length

  if (items.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <Search className="h-16 w-16 text-blackbird-off-white/30 mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-2">
          No Gallery Items Found
        </h3>
        <p className="text-blackbird-off-white/70">
          We're currently building our gallery. Check back soon to see our amazing work!
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Filter Component */}
      <GalleryFilter
        filters={filters}
        onFiltersChange={handleFiltersChange}
        totalResults={filteredItems.length}
        isLoading={isLoading}
        className="mb-8"
      />

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 text-blackbird-ignition-blue animate-spin" />
          <span className="ml-2 text-blackbird-off-white/70">Loading gallery...</span>
        </div>
      )}

      {/* No Results */}
      {!isLoading && filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-blackbird-off-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-blackbird-off-white mb-2">
            No Items Match Your Filters
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

      {/* Gallery Grid */}
      {!isLoading && displayedItems.length > 0 && (
        <>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item) => (
                <GalleryItemCard
                  key={item.id}
                  item={item}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Trigger */}
          {hasMore && (
            <div ref={loadMoreRef} className="text-center py-8">
              <div className="flex items-center justify-center space-x-2 text-blackbird-off-white/60">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Loading more items...</span>
              </div>
            </div>
          )}

          {/* End Message */}
          {!hasMore && displayedItems.length >= 12 && (
            <div className="text-center py-8">
              <p className="text-blackbird-off-white/60">
                You've reached the end of our gallery. Check back soon for more amazing work!
              </p>
            </div>
          )}
        </>
      )}

      {/* Gallery Modal */}
      <GalleryModal
        item={selectedItem}
        items={filteredItems}
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
      />
    </div>
  )
}