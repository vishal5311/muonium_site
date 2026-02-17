import { motion } from 'framer-motion';
import { useState } from 'react';
import HorizontalScroll from '../components/ui/HorizontalScroll';
import VideoModal from '../components/ui/VideoModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gaming = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // 🎮 CONFIGURATION: Add your Video URLs here
    // You can use local files (e.g., "/videos/gaming/gaming-1.mp4")
    // OR external URLs (e.g., "https://example.com/video.mp4")
    const gamingVideos = [
        {
            id: 1,
            title: "Abandoned School",
            videoUrl: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Abandoned-School.mp4",
            thumbnail: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Military Camp",
            videoUrl: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/MILITARY_CAMP.mp4",
            thumbnail: "https://images.unsplash.com/photo-1590431358682-628d67295797?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3,
            title: "Office Room Render",
            videoUrl: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Office-Room_3.avi%20Render.mp4",
            thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4,
            title: "Space Creator",
            videoUrl: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Space-Creator-Environment.mov",
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
        }
    ];

    return (
        <div className="bg-black text-white selection:bg-purple-500/30 selection:text-purple-200">
            <Navbar />

            <main>
                {/* Cyberpunk Hero */}
                <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/20 to-black z-0"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 text-center px-6"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-instrument-serif tracking-tight mb-6">
                            Infinite <br /><span className="text-purple-500 italic">Worlds</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl font-light">
                            Procedural generation meets artistic intent. We build the metaverse layer by layer.
                        </p>
                    </motion.div>
                </section>

                {/* 3D Asset Showcase - Horizontal Scroll with Direct Video Support */}
                <HorizontalScroll
                    items={gamingVideos.map(video => ({
                        src: video.thumbnail,
                        title: video.title,
                        description: video.id === 1 ? "Abandoned school environment with cinematic lighting and realistic textures." :
                            video.id === 2 ? "High-performance military camp assets designed for real-time engines." :
                                video.id === 3 ? "Detailed office interior with ray-traced reflections and lighting." :
                                    "Expansive space creation tools for building vast cosmic environments.",
                        videoUrl: video.videoUrl,
                        onClick: () => setActiveVideo(video.videoUrl)
                    }))}
                />

                <VideoModal
                    isOpen={!!activeVideo}
                    onClose={() => setActiveVideo(null)}
                    videoUrl={activeVideo || ''}
                    title="Gameplay Showcase"
                />
            </main>
            <Footer />
        </div>
    );
};

export default Gaming;
