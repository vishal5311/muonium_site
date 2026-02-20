import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import HeroCarousel from '../components/ui/HeroCarousel';
import VideoModal from '../components/ui/VideoModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VimeoEmbed = ({ vimeoId, title }: { vimeoId: string; title: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={`absolute inset-0 w-full h-full bg-zinc-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-40'}`}>
            {isInView && (
                <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={title}
                    className="absolute inset-[-8px] w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none"
                    style={{ background: 'black' }}
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
};

const Studios = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // 🎥 CONFIGURATION: Add your Video URLs here
    // You can use local files (e.g., "/videos/studios/studio-1.mp4")
    // OR external URLs (e.g., "https://example.com/video.mp4")
    const studioVideos = [
        {
            id: 1,
            title: "KR Production",
            videoUrl: "",
            vimeoId: "1166670413",
            thumbnail: "https://images.unsplash.com/photo-1574267432644-f74f8ec1e0e0?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Thalaivar AI Promo",
            videoUrl: "",
            vimeoId: "1166658136",
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
                            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-instrument-serif leading-none mix-blend-difference px-4"
                        >
                            Redefining <br /><span className="italic text-zinc-600">Cinema</span>
                        </motion.h1>
                    </div>

                    <HeroCarousel
                        images={[
                            { src: "https://i.ibb.co/bjGTRNHF/13.png", alt: "Studio Shot 10" },
                            { src: "https://i.ibb.co/dwdsjpPy/9.png", alt: "Studio Shot 9" },
                            { src: "https://i.ibb.co/8n9Qjp4y/8.png", alt: "Studio Shot 8" },
                            { src: "https://i.ibb.co/HfxZ9QXd/7.png", alt: "Studio Shot 7" },
                            { src: "https://i.ibb.co/btPXFKM/6.png", alt: "Studio Shot 6" },
                            { src: "https://i.ibb.co/9mNjW5sF/5.png", alt: "Studio Shot 5" },
                            { src: "https://i.ibb.co/sZsXbqG/4.png", alt: "Studio Shot 4" },
                            { src: "https://i.ibb.co/0VWZhWQC/3.png", alt: "Studio Shot 3" },
                            { src: "https://i.ibb.co/GQ6CNh99/2.png", alt: "Studio Shot 2" },
                            { src: "https://i.ibb.co/6C99zxw/1.png", alt: "Studio Shot 1" },
                        ]}
                    />
                </section>

                {/* Feature Grid */}
                <section className="py-32 bg-zinc-950">
                    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="sticky top-32 h-fit mb-12 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-instrument-serif mb-8 leading-tight">AI-Generated <br className="hidden md:block" /> Narrative</h2>
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
                                We use proprietary diffusion models to generate film-quality environments, characters, and storyboards in real-time. What used to take months now takes days.
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            {/* Video Grid with Auto-playing Previews */}
                            {studioVideos.map((video) => (
                                <div
                                    key={video.id}
                                    className="aspect-video bg-zinc-900 rounded-xl overflow-hidden group relative cursor-pointer border border-white/5 hover:border-rose-500/30 transition-all duration-500"
                                    onClick={() => setActiveVideo(video.vimeoId ? `vimeo:${video.vimeoId}` : video.videoUrl)}
                                >
                                    {video.vimeoId ? (
                                        <VimeoEmbed vimeoId={video.vimeoId} title={video.title} />
                                    ) : (
                                        <video
                                            src={video.videoUrl}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:scale-105"
                                        />
                                    )}

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
