import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroCarousel from '../components/ui/HeroCarousel';
import VideoModal from '../components/ui/VideoModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Studios = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // 🎥 CONFIGURATION: Add your Video URLs here
    // You can use local files (e.g., "/videos/studios/studio-1.mp4")
    // OR external URLs (e.g., "https://example.com/video.mp4")
    const studioVideos = [
        {
            id: 1,
            title: "KR Production",
            videoUrl: "https://formnsvrwptpmzme.public.blob.vercel-storage.com/kr_out.mov.mp4",
            thumbnail: "https://images.unsplash.com/photo-1574267432644-f74f8ec1e0e0?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Thalaivar AI Promo",
            videoUrl: "https://formnsvrwptpmzme.public.blob.vercel-storage.com/thalaivar.mp4",
            thumbnail: "https://images.unsplash.com/photo-1620641788421-3a1b34753be9?auto=format&fit=crop&w=1200&q=80"
        }
    ];

    return (
        <div className="bg-black text-white selection:bg-purple-500/30 selection:text-purple-200">
            <Navbar />

            <main>
                {/* Dynamic Hero Carousel */}
                <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-12">
                    <div className="container mx-auto px-6 mb-12 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-rose-500 font-medium tracking-[0.3em] uppercase text-sm block mb-4"
                        >
                            Muonium AI Studios
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-instrument-serif leading-none mix-blend-difference"
                        >
                            Redefining <br /><span className="italic text-zinc-600">Cinema</span>
                        </motion.h1>
                    </div>

                    <HeroCarousel
                        images={[
                            { src: "https://images.unsplash.com/photo-1598899134739-9609c96191b0?q=80&w=2681&auto=format&fit=crop", alt: "Cinematic 1", title: "Neo Noir" },
                            { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2670&auto=format&fit=crop", alt: "Cinematic 2", title: "Sci-Fi Landscapes" },
                            { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2670&auto=format&fit=crop", alt: "Cinematic 3", title: "Digital Humans" },
                            { src: "https://images.unsplash.com/photo-1512070632392-1823bc3a059a?q=80&w=2670&auto=format&fit=crop", alt: "Cinematic 4", title: "Abstract Motion" },
                            { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2670&auto=format&fit=crop", alt: "Cinematic 5", title: "VFX Synthesis" },
                        ]}
                    />
                </section>

                {/* Feature Grid */}
                <section className="py-32 bg-zinc-950">
                    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="sticky top-32 h-fit">
                            <h2 className="text-5xl font-instrument-serif mb-8">AI-Generated <br /> Narrative</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                                We use proprietary diffusion models to generate film-quality environments, characters, and storyboards in real-time. What used to take months now takes days.
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            {/* Video Grid with Auto-playing Previews */}
                            {studioVideos.map((video) => (
                                <div
                                    key={video.id}
                                    className="aspect-video bg-zinc-900 rounded-xl overflow-hidden group relative cursor-pointer border border-white/5 hover:border-rose-500/30 transition-all duration-500"
                                    onClick={() => setActiveVideo(video.videoUrl)}
                                >
                                    <video
                                        src={video.videoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:scale-105"
                                    />

                                    {/* Dynamic Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-20 h-20 rounded-full bg-rose-500/10 backdrop-blur-md flex items-center justify-center border border-rose-500/20 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all duration-500 shadow-2xl opacity-0 group-hover:opacity-100">
                                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2 drop-shadow-lg" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-8 left-8">
                                        <p className="text-rose-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                                            Click to Preview
                                        </p>
                                        <span className="text-white font-instrument-serif text-3xl italic block translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            {video.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <VideoModal
                    isOpen={!!activeVideo}
                    onClose={() => setActiveVideo(null)}
                    videoUrl={activeVideo || ''}
                    title="Studio Showcase"
                />
            </main>
            <Footer />
        </div>
    );
};

export default Studios;
