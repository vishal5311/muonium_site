import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Hero should start loading almost immediately
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black font-sans selection:bg-white/20">
            {/* Background Video - Vimeo Embed */}
            <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden bg-black">
                {isInView && (
                    <iframe
                        src="https://player.vimeo.com/video/1166674206?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&byline=0&title=0&portrait=0&quality=540p&playsinline=1&dnt=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        title="Hero Background"
                        className={`absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${videoLoaded ? 'opacity-50' : 'opacity-0'}`}
                        onLoad={() => setVideoLoaded(true)}
                    />
                )}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>

            {/* Bottom Bar Info */}
            <div className="absolute bottom-0 left-0 w-full px-6 py-8 md:px-12 md:py-10 z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-12">
                    {/* Description - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hidden md:block"
                    >
                        <p className="text-zinc-400 text-sm md:text-base font-light uppercase tracking-wide leading-relaxed">
                            AI-Driven Creative & Technology Studio <br /> based in Chennai.
                        </p>
                    </motion.div>

                    {/* Main Content - Center */}
                    <div className="flex flex-col items-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-sans text-white text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase text-center"
                        >
                            Engineering Intelligence <span className="text-zinc-600 mx-1 md:mx-2">|</span> Designing Worlds <span className="text-zinc-600 mx-1 md:mx-2">|</span> Shaping Narrative
                        </motion.h1>
                    </div>

                    {/* CTA - Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex justify-center md:justify-end"
                    >
                        <a
                            href="#contact"
                            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-sm w-fit uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="md:hidden mt-8 text-center"
                >
                    <p className="text-zinc-400 text-[10px] font-light uppercase tracking-widest">
                        AI-Driven Creative & Technology Studio based in Chennai.
                    </p>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
