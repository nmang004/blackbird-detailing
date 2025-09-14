'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Eye, Move3D } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  alt: string
  className?: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt, className = '' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    e.preventDefault()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    e.preventDefault()
  }

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-ew-resize select-none group ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* After Image (background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage || '/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-20.webp'}
          alt={`${alt} - After`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-green-600/90 text-white text-xs px-2 py-1 rounded z-20">
          AFTER
        </div>
      </div>

      {/* Before Image (foreground with clip) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        <Image
          src={beforeImage || '/images/portfolio/before-after/ceramic-coating/porsche-ceramic-coating-15.webp'}
          alt={`${alt} - Before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs px-2 py-1 rounded z-20">
          BEFORE
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-30"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize border-2 border-blackbird-ignition-blue group-hover:border-blackbird-ignition-blue/80 transition-colors"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <Move3D className="h-4 w-4 text-blackbird-ignition-blue" />
        </div>
      </div>

      {/* Instruction Overlay (shows on hover) */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
        <div className="bg-black/60 rounded-lg px-4 py-2 flex items-center space-x-2 text-white text-sm">
          <Eye className="h-4 w-4" />
          <span>Drag to compare</span>
        </div>
      </div>

      {/* Loading Placeholder */}
      {(!beforeImage || !afterImage) && (
        <div className="absolute inset-0 bg-blackbird-charcoal/50 flex items-center justify-center">
          <div className="text-blackbird-off-white/60 text-center">
            <Eye className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Loading comparison...</p>
          </div>
        </div>
      )}
    </div>
  )
}