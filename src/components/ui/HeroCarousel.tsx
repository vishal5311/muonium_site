import { motion } from 'framer-motion';

const HeroCarousel = ({ images }: { images: { src: string; alt: string; title?: string; videoUrl?: string; }[] }) => {
    return (
        <div className="w-full overflow-hidden py-12 bg-black pointer-events-none select-none">
            <motion.div
                className="flex gap-8 min-w-max"
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
                        className="relative w-[300px] md:w-[450px] aspect-[16/9] rounded-[2rem] overflow-hidden group shrink-0 border border-white/5"
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
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-8" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default HeroCarousel;
