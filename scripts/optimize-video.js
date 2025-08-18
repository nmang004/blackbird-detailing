/**
 * Video Optimization Script for Blackbird Detailing Website
 * 
 * This script provides guidance for optimizing the hero video for web delivery.
 * For actual compression, use FFmpeg with the commands below.
 * 
 * Prerequisites:
 * - Install FFmpeg: https://ffmpeg.org/download.html
 * - Original video: public/BlackbirdHomepageHeader.mov (89.75 MB)
 * 
 * Recommended Compression Commands:
 * 
 * 1. Create optimized MP4 (web-friendly):
 *    ffmpeg -i public/BlackbirdHomepageHeader.mov -c:v libx264 -crf 28 -preset medium -vf "scale=1920:1080" -c:a aac -b:a 128k public/hero-video-hd.mp4
 * 
 * 2. Create compressed MP4 for mobile:
 *    ffmpeg -i public/BlackbirdHomepageHeader.mov -c:v libx264 -crf 32 -preset medium -vf "scale=1280:720" -c:a aac -b:a 96k public/hero-video-mobile.mp4
 * 
 * 3. Create WebM version (modern browsers):
 *    ffmpeg -i public/BlackbirdHomepageHeader.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -vf "scale=1920:1080" -c:a libopus -b:a 128k public/hero-video-hd.webm
 * 
 * 4. Create poster image:
 *    ffmpeg -i public/BlackbirdHomepageHeader.mov -ss 00:00:05 -vframes 1 -vf "scale=1920:1080" public/hero-poster.jpg
 * 
 * Expected Results:
 * - Original: 89.75 MB
 * - HD MP4: ~15-20 MB
 * - Mobile MP4: ~8-12 MB
 * - HD WebM: ~12-18 MB
 * - Poster JPG: ~200-500 KB
 * 
 * Alternative Cloud Solutions:
 * - Cloudinary (automatic optimization)
 * - AWS S3 + CloudFront
 * - Vercel Blob Storage
 * - YouTube/Vimeo embedding
 */

const fs = require('fs')
const path = require('path')

// Check if video files exist
const publicDir = path.join(process.cwd(), 'public')
const originalVideo = path.join(publicDir, 'BlackbirdHomepageHeader.mov')
const optimizedVideos = [
  'hero-video-hd.mp4',
  'hero-video-mobile.mp4', 
  'hero-video-hd.webm',
  'hero-poster.jpg'
]

console.log('🎬 Blackbird Detailing - Video Optimization Status\n')

// Check original video
if (fs.existsSync(originalVideo)) {
  const stats = fs.statSync(originalVideo)
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2)
  console.log(`✅ Original video found: ${fileSizeMB} MB`)
} else {
  console.log('❌ Original video not found')
}

console.log('\n📋 Optimization Checklist:')

// Check for optimized versions
optimizedVideos.forEach(filename => {
  const filePath = path.join(publicDir, filename)
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2)
    console.log(`✅ ${filename}: ${fileSizeMB} MB`)
  } else {
    console.log(`❌ ${filename}: Not optimized`)
  }
})

console.log('\n🛠️  To optimize videos, run the FFmpeg commands listed in this file.')
console.log('📚 For more info: https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs')

module.exports = {
  checkOptimization: () => {
    return optimizedVideos.every(filename => {
      return fs.existsSync(path.join(publicDir, filename))
    })
  }
}