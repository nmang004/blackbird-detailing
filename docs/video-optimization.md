# Video Optimization Guide

## Current Status
- **Original Video**: `BlackbirdHomepageHeader.mov` (89.75 MB)
- **Status**: Too large for optimal web performance
- **GitHub Warning**: Exceeds 50MB recommendation

## Optimization Strategy

### 1. Install FFmpeg
```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt update && sudo apt install ffmpeg

# Windows
# Download from https://ffmpeg.org/download.html
```

### 2. Create Optimized Versions

#### HD Version (Desktop)
```bash
ffmpeg -i public/BlackbirdHomepageHeader.mov \
  -c:v libx264 -crf 28 -preset medium \
  -vf "scale=1920:1080" \
  -c:a aac -b:a 128k \
  public/hero-video-hd.mp4
```

#### Mobile Version (720p)
```bash
ffmpeg -i public/BlackbirdHomepageHeader.mov \
  -c:v libx264 -crf 32 -preset medium \
  -vf "scale=1280:720" \
  -c:a aac -b:a 96k \
  public/hero-video-mobile.mp4
```

#### WebM Version (Modern Browsers)
```bash
ffmpeg -i public/BlackbirdHomepageHeader.mov \
  -c:v libvpx-vp9 -crf 30 -b:v 0 \
  -vf "scale=1920:1080" \
  -c:a libopus -b:a 128k \
  public/hero-video-hd.webm
```

#### Poster Image
```bash
ffmpeg -i public/BlackbirdHomepageHeader.mov \
  -ss 00:00:05 -vframes 1 \
  -vf "scale=1920:1080" \
  public/hero-poster.jpg
```

### 3. Expected File Sizes
- HD MP4: ~15-20 MB (78% reduction)
- Mobile MP4: ~8-12 MB (87% reduction)
- HD WebM: ~12-18 MB (80% reduction)
- Poster JPG: ~200-500 KB

### 4. Implementation
The `OptimizedVideo` component will automatically:
- Choose the best format for the user's browser
- Load poster image while video buffers
- Show fallback image if video fails
- Implement lazy loading and progressive enhancement

### 5. Alternative Solutions

#### Cloud Hosting
- **Cloudinary**: Automatic optimization and CDN
- **AWS S3 + CloudFront**: Custom video delivery
- **Vercel Blob**: Integrated with deployment

#### Video Platforms
- **YouTube/Vimeo**: Embed optimized player
- **Mux**: Professional video infrastructure

## Usage

```bash
# Check current optimization status
npm run check-video

# See optimization instructions
npm run optimize-video
```

## Performance Benefits
- Faster initial page load
- Reduced bandwidth usage
- Better mobile experience
- Improved Core Web Vitals scores
- Lower hosting costs