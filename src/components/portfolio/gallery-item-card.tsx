'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Heart, Eye, Clock, Star, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GalleryItem } from '@/types/portfolio'

interface GalleryItemCardProps {
  item: GalleryItem
  onOpenModal: (item: GalleryItem) => void
  className?: string
}

export function GalleryItemCard({ item, onOpenModal, className = '' }: GalleryItemCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (item.media_type === 'video' && videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (item.media_type === 'video' && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsVideoPlaying(false)
    }
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

  const getPackageColor = (pkg?: string) => {
    switch (pkg) {
      case 'sport': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'grand-tourer': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'trackhawk': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-blackbird-ignition-blue/20 text-blackbird-ignition-blue border-blackbird-ignition-blue/30'
    }
  }

  const formatDuration = (seconds?: number) => {
    if (!seconds) return null
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.25, 0, 1] }}
      className={className}
    >
      <Card
        className="group bg-blackbird-charcoal/20 border-blackbird-charcoal/30 hover:border-blackbird-ignition-blue/50 transition-all duration-500 overflow-hidden cursor-pointer backdrop-blur-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpenModal(item)}
      >
        {/* Media Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {item.media_type === 'image' ? (
            <>
              <Image
                src={item.media_url}
                alt={item.alt_text}
                fill
                className={`object-cover transition-all duration-700 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Image Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />
            </>
          ) : (
            <>
              {/* Video Poster/Thumbnail */}
              <Image
                src={item.thumbnail_url}
                alt={item.alt_text}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Video Element (hidden, used for hover preview) */}
              <video
                ref={videoRef}
                src={item.media_url}
                poster={item.video_poster || item.thumbnail_url}
                muted
                loop
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isVideoPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Video Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />

              {/* Video Duration */}
              {item.video_duration && (
                <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{formatDuration(item.video_duration)}</span>
                </div>
              )}

              {/* Play Button */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: !isVideoPlaying ? 1 : 0,
                  opacity: !isVideoPlaying ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-blackbird-ignition-blue/90 hover:bg-blackbird-ignition-blue text-white p-4 rounded-full shadow-2xl transform transition-all duration-300">
                  <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                </div>
              </motion.div>
            </>
          )}

          {/* Featured Badge */}
          {item.featured && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 left-3 bg-gradient-to-r from-blackbird-ignition-blue to-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg"
            >
              FEATURED
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute top-3 right-3 flex space-x-2"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsLiked(!isLiked)
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                isLiked
                  ? 'bg-red-500/90 text-white'
                  : 'bg-black/60 hover:bg-black/80 text-white/80 hover:text-white'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                onOpenModal(item)
              }}
              className="p-2 rounded-full bg-black/60 hover:bg-blackbird-ignition-blue/80 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Bottom Overlay Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge
                  className={`text-xs font-semibold ${getPackageColor(item.package_used)}`}
                >
                  {item.package_used ?
                    item.package_used.charAt(0).toUpperCase() + item.package_used.slice(1) :
                    getServiceLabel(item.primary_service)
                  }
                </Badge>

                {item.view_count && (
                  <div className="flex items-center space-x-1 text-xs text-white/80">
                    <Eye className="h-3 w-3" />
                    <span>{item.view_count.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <h3 className="font-heading font-bold text-sm leading-tight line-clamp-2">
                {item.title}
              </h3>

              <div className="flex items-center justify-between text-xs text-white/80">
                <span>{item.vehicle_year} {item.vehicle_make}</span>
                {item.customer_testimonial && (
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span>5.0</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}