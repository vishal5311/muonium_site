import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VimeoEmbed = ({ vimeoId }: { vimeoId: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '1200px' });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        // Wait for player to settle to prevent white flashes
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
            {/* Prevent white flash during load */}
            {!isLoaded && <div className="absolute inset-0 bg-black z-10" />}
        </div>
    );
};

const HorizontalScroll = ({ items }: { items: { src: string; title: string; description: string; videoUrl?: string; onClick?: () => void; }[] }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Transform scroll so elements move horizontally
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 w-full h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-6 md:gap-12 px-6 md:px-32">
                    {items.map((card, i) => (
                        <div
                            key={i}
                            className="group relative w-[85vw] md:w-[600px] lg:w-[800px] aspect-[16/10] md:aspect-[16/9] shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-zinc-900 cursor-pointer"
                            onClick={card.onClick}
                        >
                            {card.videoUrl?.startsWith('vimeo:') ? (
                                <VimeoEmbed vimeoId={card.videoUrl.replace('vimeo:', '')} />
                            ) : card.videoUrl ? (
                                <video
                                    src={card.videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100"
                                />
                            ) : (
                                <img
                                    src={card.src}
                                    alt={card.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                                <h3 className="text-2xl md:text-4xl font-instrument-serif text-white mb-2">{card.title}</h3>
                                <p className="text-zinc-400 text-[10px] md:text-sm leading-relaxed max-w-[95%] font-light tracking-wide">{card.description}</p>
                            </div>

                            {/* Play Icon Placeholder for Videos */}
                            {card.videoUrl && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[10px] md:border-l-[14px] border-l-white border-b-[6px] md:border-b-[8px] border-b-transparent ml-1" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
