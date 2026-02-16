import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface DivisionProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    services: string[];
    backgroundMode: 'studios' | 'gaming' | 'tech';
    imageUrl?: string;
}

const DivisionSection: React.FC<DivisionProps> = ({
    id, title, subtitle, description, services, backgroundMode, imageUrl
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const bgStyles = {
        studios: "bg-gradient-to-b from-zinc-950 via-zinc-900 to-black",
        gaming: "bg-gradient-to-b from-black via-purple-950/20 to-zinc-950",
        tech: "bg-zinc-50 text-zinc-900",
    };

    const textStyles = {
        studios: "text-white",
        gaming: "text-white",
        tech: "text-zinc-900",
    };

    const accentStyles = {
        studios: "text-zinc-500",
        gaming: "text-purple-400/60",
        tech: "text-zinc-400",
    };

    return (
        <section
            id={id}
            ref={ref}
            className={cn(
                "min-h-screen w-full flex flex-col justify-center py-24 relative transition-colors duration-1000",
                bgStyles[backgroundMode]
            )}
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={cn("uppercase tracking-[0.3em] text-xs font-semibold mb-6 block", accentStyles[backgroundMode])}>
                        {subtitle}
                    </span>
                    <h2 className={cn("text-6xl md:text-7xl lg:text-8xl font-instrument-serif leading-none mb-8", textStyles[backgroundMode])}>
                        {title}
                    </h2>
                    <p className={cn("text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-xl",
                        backgroundMode === 'tech' ? 'text-zinc-600' : 'text-zinc-400'
                    )}>
                        {description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service}
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="flex items-center gap-3 pt-4 border-t border-zinc-500/10"
                            >
                                <div className={cn("w-1.5 h-1.5 rounded-full", backgroundMode === 'tech' ? 'bg-zinc-900' : 'bg-white')}></div>
                                <span className="text-sm uppercase tracking-widest font-medium">{service}</span>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        to={`/${backgroundMode}`}
                        className={cn(
                            "inline-flex items-center gap-2 border-b-2 pb-1 transition-all hover:gap-4",
                            backgroundMode === 'tech' ? "border-zinc-900 text-zinc-900" : "border-white text-white"
                        )}
                    >
                        <span className="uppercase tracking-[0.2em] font-medium text-sm">Enter Division</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </motion.div>

                <Link to={`/${backgroundMode}`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden group cursor-pointer"
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                        ) : (
                            <div className={cn("w-full h-full flex items-center justify-center border border-white/5 bg-zinc-900/40 backdrop-blur-3xl")}>
                                <span className="font-instrument-serif text-4xl italic text-zinc-700">Visualizing {title}...</span>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                            <div className="flex justify-between items-center w-full">
                                <span className="text-white text-xl font-instrument-serif italic">Enter {title}</span>
                                <ArrowUpRight className="text-white w-8 h-8" />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>

            {/* Background glow effects for certain sections */}
            {backgroundMode === 'gaming' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] -z-10 rounded-full"></div>
            )}
        </section>
    );
};

export default DivisionSection;
