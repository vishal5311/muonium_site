import { motion } from 'framer-motion';

const HeroCarousel = ({ images }: { images: { src: string; alt: string; title?: string; videoUrl?: string; }[] }) => {
    return (
        <div className="w-full overflow-hidden py-8 md:py-12 bg-black select-none">
            <motion.div
                className="flex gap-4 md:gap-8 min-w-max px-4"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                }}
            >
                {/* Duplicate slides for infinite seamless loop */}
                {[...images, ...images].map((img, index) => (
                    <div
                        key={index}
                        className="relative w-[260px] sm:w-[320px] md:w-[450px] aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shrink-0 border border-white/5 bg-zinc-900"
                    >
                        {img.videoUrl ? (
                            <video
                                src={img.videoUrl}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                            />
                        ) : (
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                onLoad={(e) => {
                                    (e.target as HTMLImageElement).classList.add('opacity-100');
                                }}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4 md:p-8" />

                        {/* Optimization: Add a subtle loading shimmer while images/videos load */}
                        <div className="absolute inset-0 bg-zinc-900 -z-10 animate-pulse" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default HeroCarousel;
