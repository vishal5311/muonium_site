# Video Assets Guide

## 📁 Directory Structure

```
public/videos/
├── hero/
│   └── hero-video.mp4          (1 video for main hero section)
├── studios/
│   ├── studio-1.mp4            (First studios showcase video)
│   └── studio-2.mp4            (Second studios showcase video)
└── gaming/
    ├── gaming-1.mp4            (First gaming showcase video)
    ├── gaming-2.mp4            (Second gaming showcase video)
    ├── gaming-3.mp4            (Third gaming showcase video)
    └── gaming-4.mp4            (Fourth gaming showcase video)
```

## 📤 How to Upload Your Videos

### Step 1: Prepare Your Videos
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 (Full HD) or higher
- **File Size**: Keep under 50MB per video for optimal loading
- **Duration**: 30-90 seconds recommended for showcases

### Step 2: Upload to Directories
1. Place your **hero video** in `public/videos/hero/` as `hero-video.mp4`
2. Place your **2 studios videos** in `public/videos/studios/` as:
   - `studio-1.mp4`
   - `studio-2.mp4`
3. Place your **4 gaming videos** in `public/videos/gaming/` as:
   - `gaming-1.mp4`
   - `gaming-2.mp4`
   - `gaming-3.mp4`
   - `gaming-4.mp4`

### Step 3: Restart Dev Server
After adding videos, restart the development server:
```bash
npm run dev
```

## 🎬 Video Features

### Hero Section
- Auto-plays on page load
- Muted by default
- Loops continuously
- Serves as background for hero text

### Studios & Gaming Showcases
- Click thumbnail to open modal preview
- Full-screen modal with video controls
- **Download protection**: Right-click disabled, no download button
- Press ESC or click outside to close
- Smooth animations

## 🔒 Protection Features

Your videos are protected from easy downloading:
- ✅ Right-click disabled (no "Save video as...")
- ✅ Download button hidden in controls
- ✅ Picture-in-picture disabled
- ✅ Fullscreen disabled in modal

**Note**: While these measures prevent casual downloading, determined users can still access videos through browser dev tools. For maximum protection, consider:
- Watermarking your videos
- Using a video hosting service with DRM
- Compressing videos to lower quality for web previews

## 🎨 Thumbnail Generation

If you want custom thumbnails instead of video first frames:
1. Create thumbnail images (JPG/PNG)
2. Place in same directory as videos
3. Name them: `studio-1-thumb.jpg`, `gaming-1-thumb.jpg`, etc.
4. Update the component to use custom thumbnails

## ⚡ Optimization Tips

1. **Compress videos** before uploading:
   - Use HandBrake or FFmpeg
   - Target bitrate: 2-5 Mbps for 1080p

2. **Generate poster images**:
   - Extract a frame from your video
   - Use as poster attribute for faster loading

3. **Consider hosting**:
   - For large files, use Vimeo, YouTube, or Cloudflare Stream
   - Update video URLs in components

## 📝 Current Status

- ✅ Directory structure created
- ✅ VideoModal component implemented
- ✅ Download protection enabled
- ⏳ **Waiting for your video files**

Once you add the videos, they'll automatically appear on the site!
