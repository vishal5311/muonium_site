import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxGallery = ({ items }: { items: { src: string; title: string; category: string; }[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 bg-black">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    style={{ y: index % 2 === 0 ? 0 : y }}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
                >
                    <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <span className="text-sm uppercase tracking-widest text-white/60 mb-2 block">{item.category}</span>
                        <h3 className="text-3xl font-instrument-serif text-white">{item.title}</h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ParallaxGallery;
