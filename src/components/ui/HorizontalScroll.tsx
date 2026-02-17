import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = ({ items }: { items: { src: string; title: string; description: string; videoUrl?: string; onClick?: () => void; }[] }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Transform scroll so elements move horizontally
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 w-full h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-12 md:px-32">
                    {items.map((card, i) => (
                        <div
                            key={i}
                            className="group relative h-[450px] w-[300px] md:h-[600px] md:w-[450px] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 cursor-pointer"
                            onClick={card.onClick}
                        >
                            {card.videoUrl ? (
                                <video
                                    src={card.videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    style={{
                                        backgroundImage: `url(${card.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                                <h3 className="text-3xl md:text-4xl font-instrument-serif text-white mb-2">{card.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed max-w-[90%] font-light tracking-wide">{card.description}</p>
                            </div>

                            {/* Play Icon Placeholder for Videos */}
                            {card.videoUrl && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
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
