'use client'

import React, { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface CarouselProps {
  children: React.ReactNode[]
  currentIndex: number
  onNext: () => void
  onPrevious: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  className?: string
  itemsPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  showArrows?: boolean
  showDots?: boolean
  gap?: string
}

export function Carousel({
  children,
  currentIndex,
  onNext,
  onPrevious,
  onMouseEnter,
  onMouseLeave,
  className,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  showArrows = true,
  showDots = false,
  gap = 'gap-6'
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Touch/swipe handling
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      onNext()
    }
    if (isRightSwipe) {
      onPrevious()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onPrevious()
      } else if (event.key === 'ArrowRight') {
        onNext()
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('keydown', handleKeyDown)
      return () => container.removeEventListener('keydown', handleKeyDown)
    }
  }, [onNext, onPrevious])

  return (
    <div
      ref={containerRef}
      className={cn('relative group', className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
    >
      {/* Main carousel container */}
      <div className="overflow-hidden">
        <div
          className={cn(
            'flex transition-transform duration-500 ease-in-out',
            gap
          )}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={cn(
                'flex-shrink-0',
                // Mobile: Full width divided by mobile items
                itemsPerView.mobile === 1 ? 'w-full' : `w-1/${itemsPerView.mobile}`,
                // Tablet: Width based on tablet items  
                itemsPerView.tablet === 1 ? 'md:w-full' : 
                itemsPerView.tablet === 2 ? 'md:w-1/2' : 
                itemsPerView.tablet === 3 ? 'md:w-1/3' : 'md:w-full',
                // Desktop: Width based on desktop items
                itemsPerView.desktop === 1 ? 'lg:w-full' :
                itemsPerView.desktop === 2 ? 'lg:w-1/2' :
                itemsPerView.desktop === 3 ? 'lg:w-1/3' : 'lg:w-full'
              )}
              aria-hidden={
                index < currentIndex || 
                index >= currentIndex + itemsPerView.desktop
              }
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {showArrows && children.length > itemsPerView.desktop && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-blackbird-charcoal/80 hover:bg-blackbird-ignition-blue text-blackbird-off-white hover:text-white border border-blackbird-ignition-blue/30 hover:border-blackbird-ignition-blue opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
            onClick={onPrevious}
            aria-label="Previous item"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blackbird-charcoal/80 hover:bg-blackbird-ignition-blue text-blackbird-off-white hover:text-white border border-blackbird-ignition-blue/30 hover:border-blackbird-ignition-blue opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
            onClick={onNext}
            aria-label="Next item"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && children.length > itemsPerView.desktop && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ 
            length: Math.ceil(children.length / itemsPerView.desktop) 
          }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === Math.floor(currentIndex / itemsPerView.desktop)
                  ? 'bg-blackbird-ignition-blue'
                  : 'bg-blackbird-charcoal hover:bg-blackbird-ignition-blue/50'
              )}
              onClick={() => onNext()}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export interface CarouselItemProps {
  children: React.ReactNode
  className?: string
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  return <div className={className}>{children}</div>
}