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
            thumbnail: "https://images.unsplash.com/photo-1614728853911-0428d084338d?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Military Camp",
            videoUrl: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/MILITARY_CAMP.mp4",
            thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3,
            title: "Office Room Render",
            videoUrl: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Office-Room_3.avi%20Render.mp4",
            thumbnail: "https://images.unsplash.com/photo-1552820728-315697580bfb?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4,
            title: "Space Creator",
            videoUrl: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Space-Creator-Environment.mov",
            thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
        }
    ];

    return (
        <div className="bg-black text-white selection:bg-purple-500/30 selection:text-purple-200">
            <Navbar />

            <main>
                {/* Cyberpunk Hero */}
                <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    >
                        <source src="https://74invwz5eh2od4uw.public.blob.vercel-storage.com/web_clip.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/20 to-black z-10"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-20 text-center px-6"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-instrument-serif tracking-tight mb-6 text-white">
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
