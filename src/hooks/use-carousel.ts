'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface UseCarouselOptions {
  itemCount: number
  autoPlay?: boolean
  autoPlayInterval?: number
  pauseOnHover?: boolean
}

export function useCarousel({
  itemCount,
  autoPlay = true,
  autoPlayInterval = 5000,
  pauseOnHover = true
}: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index % itemCount)
  }, [itemCount])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount)
  }, [itemCount])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1
    )
  }, [itemCount])

  const pause = useCallback(() => {
    setIsPaused(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const resume = useCallback(() => {
    setIsPaused(false)
  }, [])

  const play = useCallback(() => {
    setIsPlaying(true)
    setIsPaused(false)
  }, [])

  const stop = useCallback(() => {
    setIsPlaying(false)
    setIsPaused(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || isPaused || itemCount <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPlaying, isPaused, itemCount, autoPlayInterval, goToNext])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Handlers for mouse events (if pauseOnHover is enabled)
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && isPlaying) {
      pause()
    }
  }, [pauseOnHover, isPlaying, pause])

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && isPlaying) {
      resume()
    }
  }, [pauseOnHover, isPlaying, resume])

  return {
    currentIndex,
    isPlaying,
    isPaused,
    goToSlide,
    goToNext,
    goToPrevious,
    play,
    stop,
    pause,
    resume,
    handleMouseEnter,
    handleMouseLeave
  }
}