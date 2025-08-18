'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'

interface OptimizedVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  playsInline?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  onLoadStart?: () => void
  onCanPlay?: () => void
  onError?: () => void
  fallbackImage?: string
}

export function OptimizedVideo({
  src,
  poster,
  className,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  playsInline = true,
  preload = 'metadata',
  onLoadStart,
  onCanPlay,
  onError,
  fallbackImage
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadStart = () => {
      setIsLoading(true)
      onLoadStart?.()
    }

    const handleCanPlay = () => {
      setIsLoading(false)
      onCanPlay?.()
    }

    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
      onError?.()
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [onLoadStart, onCanPlay, onError])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch(() => {
        setHasError(true)
      })
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  // Show fallback if video fails to load
  if (hasError) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {fallbackImage ? (
          <img
            src={fallbackImage}
            alt="Video fallback"
            className="w-full h-full object-cover"
          />
        ) : (
          // Gradient fallback if no image provided
          <div className="w-full h-full bg-gradient-to-br from-blackbird-black via-blackbird-charcoal/50 to-blackbird-black">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_theme(colors.blackbird.ignition-blue/10)_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_theme(colors.blackbird.charcoal/10)_25%,_transparent_25%),_linear-gradient(-45deg,_theme(colors.blackbird.charcoal/10)_25%,_transparent_25%)]" 
                   style={{ backgroundSize: '60px 60px' }} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-blackbird-black/30" />
      </div>
    )
  }

  return (
    <div 
      className={cn("relative overflow-hidden group", className)}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-blackbird-black flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blackbird-ignition-blue"></div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
        preload={preload}
        poster={poster}
      >
        {/* Multiple source formats for better compatibility */}
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mov', '.webm')} type="video/webm" />
        <source src={src.replace('.mov', '.mp4')} type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls Overlay */}
      {!controls && (
        <div className={cn(
          "absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300",
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-white" />
              ) : (
                <Play className="h-6 w-6 text-white ml-1" />
              )}
            </button>
            
            <button
              onClick={toggleMute}
              className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-white" />
              ) : (
                <Volume2 className="h-4 w-4 text-white" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Video Quality Notice */}
      <div className="absolute bottom-2 right-2 text-xs text-white/60 bg-black/30 px-2 py-1 rounded">
        HD
      </div>
    </div>
  )
}