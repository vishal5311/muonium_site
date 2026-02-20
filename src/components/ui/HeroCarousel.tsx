import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Load images earlier so they are ready when scrolled into view
        );

        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imgRef} className="absolute inset-0 w-full h-full bg-zinc-950">
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isLoaded ? 'opacity-80 scale-100' : 'opacity-0 scale-110'}`}
                />
            )}
            {!isLoaded && (
                <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
};

const HeroCarousel = ({ images }: { images: { src: string; alt: string; title?: string; videoUrl?: string; }[] }) => {
    return (
        <div className="w-full overflow-hidden py-6 md:py-12 bg-black select-none">
            <motion.div
                className="flex gap-4 md:gap-8 min-w-max px-4"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60, // Slower carousel for better image processing
                    ease: "linear",
                }}
            >
                {/* Duplicate slides for infinite seamless loop */}
                {[...images, ...images].map((img, index) => (
                    <div
                        key={index}
                        className="relative w-[240px] sm:w-[300px] md:w-[450px] aspect-[16/10] md:aspect-[16/9] rounded-[1.2rem] md:rounded-[2rem] overflow-hidden group shrink-0 border border-white/5"
                    >
                        {img.videoUrl ? (
                            <div className="absolute inset-0 w-full h-full bg-zinc-900">
                                <video
                                    src={img.videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ) : (
                            <LazyImage src={img.src} alt={img.alt} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-8" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default HeroCarousel;
