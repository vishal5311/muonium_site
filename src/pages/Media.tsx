import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoModal from '../components/ui/VideoModal';
import { Play, Calendar, ArrowRight, Share2, Heart, MessageCircle, BarChart3, Database, Zap, Quote } from 'lucide-react';

const Media = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [videoTitle, setVideoTitle] = useState("");
    const sliderRef = useRef<HTMLDivElement>(null);

    const mediaCarousel = [
        {
            id: 1,
            title: "Ramayanam AI",
            subtitle: "Cinematic Promo",
            description: "A deep dive into hyper-realistic AI character generation and cinematic lighting.",
            url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/RAMAYANAM_AI_PROMO.mp4",
            thumbnail: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1200",
            category: "Studios"
        },
        {
            id: 2,
            title: "Thalaivar 173 AI",
            subtitle: "Motion Study",
            description: "Advanced motion synthesis and facial mapping for digital humans.",
            url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/THALAIVAR173_AI_PROMO.mp4",
            thumbnail: "https://images.unsplash.com/photo-1620641788421-3a1b34753be9?auto=format&fit=crop&w=1200",
            category: "Studios"
        },
        {
            id: 3,
            title: "Abandoned School",
            subtitle: "Environment Render",
            description: "Procedural asset generation for high-fidelity gaming environments.",
            url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Abandoned-School.mp4",
            thumbnail: "https://images.unsplash.com/photo-1614728853911-0428d084338d?auto=format&fit=crop&w=1200",
            category: "Gaming"
        },
        {
            id: 4,
            title: "Military Camp",
            subtitle: "Level Design",
            description: "Large-scale terrain generation and real-time military asset synthesis.",
            url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/MILITARY_CAMP.mp4",
            thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200",
            category: "Gaming"
        },
        {
            id: 5,
            title: "Office Room",
            subtitle: "Interior Render",
            description: "Detailed office interior with ray-traced reflections and realistic lighting.",
            url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Office-Room_3.avi%20Render.mp4",
            thumbnail: "https://images.unsplash.com/photo-1552820728-315697580bfb?auto=format&fit=crop&w=1200",
            category: "Gaming"
        },
        {
            id: 6,
            title: "Space Creator",
            subtitle: "Cosmic Environment",
            description: "Expansive space creation tools for building vast cosmic environments.",
            url: "https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Space-Creator-Environment.mov",
            thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200",
            category: "Gaming"
        }
    ];

    const openVideo = (url: string, title: string) => {
        setActiveVideo(url);
        setVideoTitle(title);
    };

    return (
        <div className="bg-black text-white selection:bg-white/10 selection:text-white min-h-screen font-geist antialiased overflow-x-hidden">
            <Navbar />

            {/* --- HERO SECTION (Inspired by Social Grow) --- */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 lg:pt-48 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col gap-8 max-w-xl relative z-10">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg z-[10]">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-900" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Processing 50M+ Frames Weekly</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-white"
                        >
                            Media that <br />
                            <span className="font-instrument-serif italic font-medium text-zinc-500">transcends.</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-md font-light"
                        >
                            We synergize generative AI with high-end production pipelines to create visuals that were once impossible.
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2"
                        >
                            <button
                                onClick={() => openVideo(mediaCarousel[0].url, mediaCarousel[0].title)}
                                className="bg-white text-black text-sm px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-2xl shadow-white/5"
                            >
                                View Showreel
                                <Play size={18} fill="currentColor" />
                            </button>
                            <a href="/contact" className="px-6 py-4 text-zinc-400 font-bold uppercase tracking-widest text-[10px] hover:text-white flex items-center gap-2 transition-colors">
                                <Calendar size={18} />
                                Schedule Demo
                            </a>
                        </motion.div>

                        {/* Stats Decoration */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 pt-8 border-t border-white/5 flex gap-12"
                        >
                            <div>
                                <p className="text-3xl font-bold tracking-tight text-white">4K Native</p>
                                <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Generation Depth</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold tracking-tight text-white">100ms</p>
                                <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Latency Peak</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual (Phone Mockup - Inspired by Social Grow) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex lg:justify-end relative justify-center"
                    >
                        {/* Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-zinc-800/20 via-white/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                        {/* Phone Mockup Frame */}
                        <div className="relative w-[300px] h-[600px] bg-zinc-950 rounded-[3rem] shadow-[0_0_100px_rgba(255,255,255,0.05)] border-[8px] border-zinc-900 overflow-hidden transform group transition-transform duration-500">
                            {/* Dynamic Island */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30"></div>

                            {/* Content */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    src="https://74invwz5eh2od4uw.public.blob.vercel-storage.com/web_clip.mp4"
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-cover grayscale opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
                            </div>

                            {/* UI Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden">
                                        <img src="https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Muonium.png" className="w-full h-full object-contain p-1" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold tracking-tight">muonium.ai</p>
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Sponsored</p>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-instrument-serif italic mb-6">Generative Cinematic <br /> Infrastructure</h3>
                                <button className="w-full py-4 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest shadow-xl">
                                    Launch Interface
                                </button>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute right-4 bottom-40 flex flex-col gap-6 z-20">
                                <Heart className="text-white/40 hover:text-white transition-colors cursor-pointer" size={20} />
                                <MessageCircle className="text-white/40 hover:text-white transition-colors cursor-pointer" size={20} />
                                <Share2 className="text-white/40 hover:text-white transition-colors cursor-pointer" size={20} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* --- MEDIA CAROUSEL (Inspired by Notion Template) --- */}
            <section className="py-24 bg-zinc-900/10 border-t border-white/5">
                <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
                    <div>
                        <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-4 block">Archive Collection</span>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Project <span className="font-instrument-serif italic text-zinc-500">Showcase</span></h2>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => sliderRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                        >
                            <ArrowRight className="rotate-180" size={20} />
                        </button>
                        <button
                            onClick={() => sliderRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-all"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-[10%] no-scrollbar pb-12"
                >
                    {mediaCarousel.map((item) => (
                        <div
                            key={item.id}
                            className="snap-center shrink-0 w-[85vw] md:w-[450px] aspect-[4/5] bg-zinc-950 rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-white/5 select-none hover:border-white/10 transition-colors cursor-pointer group"
                            onClick={() => openVideo(item.url, item.title)}
                        >
                            {/* Header */}
                            <div className="p-8 flex justify-between items-center relative z-20">
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{item.category}</span>
                                <div className="h-10 w-10 bg-white/5 backdrop-blur-md text-white rounded-full flex items-center justify-center font-semibold text-lg border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <Play size={16} fill="currentColor" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-end p-8 relative z-20">
                                <h3 className="text-4xl font-semibold tracking-tighter leading-[1.1] mb-2">{item.title}</h3>
                                <p className="text-zinc-500 text-sm mb-6 uppercase tracking-widest font-bold">{item.subtitle}</p>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {item.description}
                                </p>
                            </div>

                            {/* Background Image/Video Preview */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.thumbnail}
                                    className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FEATURES SECTION (Inspired by Reachy/Aura.Build) --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
                            High-Fidelity <br /> <span className="font-instrument-serif italic text-zinc-500">Distribution.</span>
                        </h2>
                        <p className="text-zinc-500 max-w-md font-light text-lg">
                            Muonium Media doesn't just create; we architect. Every pixel is processed through our hyperscale GPU clusters for absolute clarity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border bg-white/5 border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                        {[
                            { title: "Neural Synthesis", desc: "Proprietary diffusion models trained on curated high-fidelity cinematic data.", icon: <Zap /> },
                            { title: "Hyperscale Compute", desc: "Processing over 50M frames weekly across 24 global edge-nodes.", icon: <BarChart3 /> },
                            { title: "Zero Latency Flow", desc: "Live streaming of generated environments with sub-100ms response.", icon: <Database /> }
                        ].map((feat, i) => (
                            <div key={i} className="p-12 group transition-colors bg-black hover:bg-zinc-900/50">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all border border-white/5">
                                    {feat.icon}
                                </div>
                                <h3 className="text-xl font-medium tracking-tight mb-4">{feat.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIAL SECTION --- */}
            <section className="py-32 px-6 bg-zinc-950/50 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote className="mx-auto mb-10 text-zinc-800" size={48} />
                    <h3 className="text-3xl md:text-5xl font-instrument-serif italic text-white leading-tight mb-12">
                        "They took the complexity of generative pipelines and turned it into a seamless <span className="not-italic font-geist text-zinc-500">creative tool for our studio.</span>"
                    </h3>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 mb-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100" />
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest">James Cohen</p>
                        <p className="text-xs text-zinc-500 mt-1">Founding Partner, Stellar VFX</p>
                    </div>
                </div>
            </section>

            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoUrl={activeVideo || ''}
                title={videoTitle}
            />

            <Footer />
        </div>
    );
};

export default Media;
