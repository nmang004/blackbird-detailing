'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Calendar,
  Clock,
  MapPin,
  Star,
  User
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GalleryItem } from '@/types/portfolio'

interface GalleryModalProps {
  item: GalleryItem | null
  items: GalleryItem[]
  isOpen: boolean
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
}

export function GalleryModal({ item, items, isOpen, onClose, onNavigate }: GalleryModalProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Reset state when item changes
  useEffect(() => {
    if (item) {
      setIsVideoPlaying(false)
      setCurrentImageIndex(0)
      setIsLiked(false)
    }
  }, [item])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onNavigate('prev')
          break
        case 'ArrowRight':
          onNavigate('next')
          break
        case ' ':
          e.preventDefault()
          if (item?.media_type === 'video') {
            toggleVideo()
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, item, onClose, onNavigate])

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getServiceLabel = (service: string) => {
    switch (service) {
      case 'ceramic-coating': return 'Ceramic Coating'
      case 'paint-correction': return 'Paint Correction'
      case 'interior-detailing': return 'Interior Detail'
      case 'full-detail': return 'Full Detail'
      case 'maintenance': return 'Maintenance'
      default: return service
    }
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

  if (!item) return null

  const allImages = [item.media_url, ...(item.additional_images || [])]
  const currentIndex = items.findIndex(i => i.id === item.id)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Navigation Buttons */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate('prev')
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300 z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate('next')
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300 z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Action Buttons */}
          <div className="absolute top-4 left-4 flex space-x-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsLiked(!isLiked)
              }}
              className={`p-3 rounded-full transition-all duration-300 ${
                isLiked
                  ? 'bg-red-500/90 text-white'
                  : 'bg-black/60 hover:bg-black/80 text-white/80 hover:text-white'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-black/60 hover:bg-black/80 text-white/80 hover:text-white rounded-full transition-all duration-300"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full max-w-7xl mx-4 grid grid-cols-1 lg:grid-cols-3 gap-6 h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Section */}
            <div className="lg:col-span-2 relative flex items-center justify-center">
              <div className="relative w-full h-full max-h-[70vh] lg:max-h-full">
                {item.media_type === 'image' ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={allImages[currentImageIndex]}
                      alt={item.alt_text}
                      fill
                      className="object-contain"
                      priority
                    />

                    {/* Image Navigation */}
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex(prev =>
                            prev > 0 ? prev - 1 : allImages.length - 1
                          )}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                          onClick={() => setCurrentImageIndex(prev =>
                            prev < allImages.length - 1 ? prev + 1 : 0
                          )}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* Image Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {allImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                  ? 'bg-white'
                                  : 'bg-white/40 hover:bg-white/60'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src={item.media_url}
                      poster={item.video_poster || item.thumbnail_url}
                      className="w-full h-full object-contain"
                      controls={false}
                      muted={isMuted}
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />

                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={toggleVideo}
                          className="p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300"
                        >
                          {isVideoPlaying ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                          )}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300"
                        >
                          {isMuted ? (
                            <VolumeX className="h-5 w-5" />
                          ) : (
                            <Volume2 className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Info Panel */}
            <div className="bg-blackbird-black/95 border border-blackbird-charcoal/50 rounded-lg p-6 overflow-y-auto">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blackbird-ignition-blue/20 text-blackbird-ignition-blue border-blackbird-ignition-blue/30">
                      {getServiceLabel(item.primary_service)}
                    </Badge>
                    {item.featured && (
                      <Badge className="bg-gradient-to-r from-blackbird-ignition-blue to-blue-500 text-white">
                        FEATURED
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-2xl font-heading font-bold text-blackbird-off-white mb-2">
                    {item.title}
                  </h1>

                  <p className="text-blackbird-off-white/60 mb-4">
                    {item.vehicle_year} {item.vehicle_make} {item.vehicle_model}
                  </p>

                  <p className="text-blackbird-off-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-blackbird-off-white/60">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(item.completion_date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blackbird-off-white/60">
                    <Clock className="h-4 w-4" />
                    <span>{item.duration_hours}h</span>
                  </div>
                  {item.customer_location && (
                    <div className="flex items-center space-x-2 text-blackbird-off-white/60">
                      <MapPin className="h-4 w-4" />
                      <span>{item.customer_location}</span>
                    </div>
                  )}
                  <div className="text-blackbird-ignition-blue font-semibold">
                    {getPriceRangeLabel(item.price_range)}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-heading font-bold text-blackbird-off-white mb-3">
                    Services Performed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.services_performed.map((service, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-blackbird-off-white/80 border-blackbird-charcoal"
                      >
                        {getServiceLabel(service)}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Customer Review */}
                {item.customer_testimonial && (
                  <div className="bg-blackbird-charcoal/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      {item.customer_name && (
                        <div className="flex items-center space-x-2 text-sm text-blackbird-off-white/60">
                          <User className="h-4 w-4" />
                          <span>{item.customer_name}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-blackbird-off-white/80 italic">
                      "{item.customer_testimonial}"
                    </p>
                  </div>
                )}

                {/* Tags */}
                {item.tags.length > 0 && (
                  <div>
                    <h3 className="font-heading font-bold text-blackbird-off-white mb-3">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blackbird-charcoal/50 text-blackbird-off-white/70 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4 border-t border-blackbird-charcoal/30">
                  <Button
                    size="lg"
                    className="w-full bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90"
                  >
                    Get Similar Results
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Item Counter */}
          {items.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} of {items.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}