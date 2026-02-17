import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoModal from '../components/ui/VideoModal';

const Media = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [videoTitle, setVideoTitle] = useState("");

    const allMedia = [
        {
            category: "Studios",
            items: [
                { title: "Ramayanam AI Promo", url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/RAMAYANAM_AI_PROMO.mp4", thumbnail: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1200" },
                { title: "Thalaivar AI Promo", url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/THALAIVAR173_AI_PROMO.mp4", thumbnail: "https://images.unsplash.com/photo-1620641788421-3a1b34753be9?auto=format&fit=crop&w=1200" }
            ]
        },
        {
            category: "Gaming",
            items: [
                { title: "Abandoned School", url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Abandoned-School.mp4", thumbnail: "https://images.unsplash.com/photo-1614728853911-0428d084338d?auto=format&fit=crop&w=1200" },
                { title: "Military Camp", url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/MILITARY_CAMP.mp4", thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200" },
                { title: "Office Render", url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Office-Room_3.avi%20Render.mp4", thumbnail: "https://images.unsplash.com/photo-1552820728-315697580bfb?auto=format&fit=crop&w=1200" },
                { title: "Space Environment", url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Space-Creator-Environment.mov", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200" }
            ]
        },
        {
            category: "Experience",
            items: [
                { title: "Official Web Clip", url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/web_clip.mp4", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200" }
            ]
        }
    ];

    const openVideo = (url: string, title: string) => {
        setActiveVideo(url);
        setVideoTitle(title);
    };

    return (
        <div className="bg-black text-white selection:bg-white/20 min-h-screen">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-6xl md:text-8xl font-instrument-serif mb-6 italic">Showreel & <span className="not-italic">Media</span></h1>
                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
                            A curated gallery of Muonium AI's cinematic experiments, game environments, and core engine demonstrations.
                        </p>
                    </motion.div>

                    {allMedia.map((group, idx) => (
                        <div key={idx} className="mb-24">
                            <h2 className="text-xs uppercase tracking-[0.5em] text-zinc-600 mb-10 font-bold border-b border-zinc-900 pb-4">
                                {group.category} <span className="text-zinc-800 ml-2">/ Archive</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {group.items.map((media, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="group relative aspect-video bg-zinc-950 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500"
                                        onClick={() => openVideo(media.url, media.title)}
                                    >
                                        <img
                                            src={media.thumbnail}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-100"
                                            alt={media.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                                                <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-current border-b-[7px] border-b-transparent ml-1" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                            <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
                                                {media.title}
                                            </span>
                                            <span className="text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400">
                                                Play
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <VideoModal
                    isOpen={!!activeVideo}
                    onClose={() => setActiveVideo(null)}
                    videoUrl={activeVideo || ''}
                    title={videoTitle}
                />
            </main>

            <Footer />
        </div>
    );
};

export default Media;
