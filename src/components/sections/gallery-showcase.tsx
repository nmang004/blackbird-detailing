'use client'

import Link from 'next/link'
import { Camera, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GalleryItemCard } from '@/components/portfolio/gallery-item-card'
import { GalleryModal } from '@/components/portfolio/gallery-modal'
import { GalleryItem } from '@/types/portfolio'
import { useState, useMemo } from 'react'

// Featured gallery items for homepage (subset of the full gallery)
const featuredGalleryItems: GalleryItem[] = [
  {
    id: '1',
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-01-20T10:00:00Z',
    title: 'McLaren 720S Ceramic Coating Transformation',
    description: 'Complete paint protection system applied to this stunning McLaren 720S. Multi-stage paint correction followed by premium ceramic coating application.',
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
    customer_testimonial: 'Absolutely incredible work! The McLaren looks better than the day I bought it.',
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
    description: 'Multi-stage paint correction process on this pristine Porsche 911 Turbo S. Removing years of swirl marks and micro scratches.',
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
    customer_testimonial: 'The transformation is absolutely stunning. Every surface looks perfect.',
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
    description: 'Complete interior detailing and leather restoration for this BMW M3 Competition. Deep cleaning, conditioning, and protection.',
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
    description: 'Complete detailing process for this rugged Ford F-150 Raptor. From muddy work truck to showroom condition.',
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

export function GalleryShowcase() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  // Show only first 6 items for homepage showcase
  const showcaseItems = useMemo(() => featuredGalleryItems.slice(0, 6), [])

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedItem) return

    const currentIndex = showcaseItems.findIndex(item => item.id === selectedItem.id)
    let newIndex: number

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : showcaseItems.length - 1
    } else {
      newIndex = currentIndex < showcaseItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedItem(showcaseItems[newIndex])
  }

  return (
    <section className="py-20 md:py-32 bg-blackbird-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blackbird-ignition-blue/10 rounded-full px-4 py-2 mb-6">
            <Camera className="h-4 w-4 text-blackbird-ignition-blue" />
            <span className="text-sm text-blackbird-ignition-blue font-medium uppercase tracking-wider">
              Our Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-blackbird-off-white mb-6">
            Recent{' '}
            <span className="text-blackbird-ignition-blue">Transformations</span>
          </h2>

          <p className="text-xl text-blackbird-off-white/70 max-w-3xl mx-auto">
            Explore our latest automotive transformations featuring premium ceramic coatings,
            expert paint correction, and comprehensive detailing services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {showcaseItems.map((item) => (
            <GalleryItemCard
              key={item.id}
              item={item}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-blackbird-off-white/70 mb-6">
            Want to see your vehicle transformed like these?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90"
              asChild
            >
              <Link href="/portfolio/gallery">
                View Full Gallery
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black"
              asChild
            >
              <Link href="/contact">
                Get Your Estimate
              </Link>
            </Button>
          </div>
        </div>

        {/* Gallery Modal */}
        <GalleryModal
          item={selectedItem}
          items={showcaseItems}
          isOpen={!!selectedItem}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      </div>
    </section>
  )
}