import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoModal from '../components/ui/VideoModal';

const VimeoPreview = ({ vimeoId }: { vimeoId: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '1000px' });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setTimeout(() => setIsLoaded(true), 1200);
    };

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full bg-black overflow-hidden">
            {isInView && (
                <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&quality=720p`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className={`absolute inset-[-8px] w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ background: 'black', colorScheme: 'dark', visibility: isLoaded ? 'visible' : 'hidden' }}
                    onLoad={handleLoad}
                />
            )}
            {!isLoaded && <div className="absolute inset-0 bg-black z-10" />}
        </div>
    );
};

const ProjectCard = ({ title, vimeoId, videoUrl, thumbnail, onClick }: any) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer group border border-white/5"
        onClick={onClick}
    >
        {vimeoId ? (
            <VimeoPreview vimeoId={vimeoId} />
        ) : videoUrl ? (
            <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
        ) : (
            <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
            />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-rose-500/20 group-hover:border-rose-500/30 transition-all duration-500">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-xl font-instrument-serif italic text-white group-hover:text-rose-400 transition-colors uppercase tracking-wider">{title}</h3>
        </div>
    </motion.div>
);

const Projects = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const sections = [
        {
            title: "Cinema",
            subtitle: "Cinematic Narratives",
            projects: [
                {
                    title: "KR Production",
                    vimeoId: "1166670413",
                    thumbnail: "https://images.unsplash.com/photo-1574267432644-f74f8ec1e0e0?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    title: "Thalaivar AI Promo",
                    vimeoId: "1166658136",
                    thumbnail: "https://images.unsplash.com/photo-1620641788421-3a1b34753be9?auto=format&fit=crop&w=1200&q=80"
                }
            ]
        },
        {
            title: "Gaming",
            subtitle: "Interactive Worlds",
            projects: [
                {
                    title: "Office Room Render",
                    vimeoId: "1166670294",
                    thumbnail: "https://images.unsplash.com/photo-1552820728-315697580bfb?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    title: "Military Camp",
                    vimeoId: "1166670210",
                    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    title: "Space Creator",
                    vimeoId: "1166670381",
                    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
                }
            ]
        }
    ];

    return (
        <div className="bg-black text-white selection:bg-rose-500/30">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12">
                    <header className="mb-24 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-rose-500 font-medium tracking-[0.3em] uppercase text-sm block mb-4"
                        >
                            Our Portfolio
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-instrument-serif leading-none italic"
                        >
                            All Projects.
                        </motion.h1>
                    </header>

                    <div className="space-y-32">
                        {sections.map((section, idx) => (
                            <section key={idx}>
                                <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
                                    <div>
                                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2 block">{section.subtitle}</span>
                                        <h2 className="text-4xl md:text-5xl font-instrument-serif">{section.title}</h2>
                                    </div>
                                    <div className="hidden md:block text-zinc-500 text-sm italic">
                                        Exploration {idx + 1}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {section.projects.map((project: any, pIdx) => (
                                        <ProjectCard
                                            key={pIdx}
                                            {...project}
                                            onClick={() => {
                                                if (project.vimeoId) setActiveVideo(`vimeo:${project.vimeoId}`);
                                                else if (project.youtubeId) setActiveVideo(`youtube:${project.youtubeId}`);
                                                else if (project.videoUrl) setActiveVideo(project.videoUrl);
                                            }}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>

            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoUrl={activeVideo || ''}
                title="Project Showcase"
            />

            <Footer />
        </div>
    );
};

export default Projects;
