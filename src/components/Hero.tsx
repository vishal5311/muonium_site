import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <header className="relative w-full h-screen overflow-hidden bg-black font-sans selection:bg-white/20">
            {/* Background Video - Vimeo Embed */}
            <div className={`absolute inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden transition-opacity duration-1000 ${videoLoaded ? 'opacity-50' : 'opacity-0'}`}>
                <iframe
                    src="https://player.vimeo.com/video/1166674206?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Hero Background"
                    className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
                    onLoad={() => setVideoLoaded(true)}
                />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>

            {/* Main Content Area */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 pt-20 z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-[90vw] text-center"
                >
                    <h1 className="flex flex-col items-center justify-center font-instrument-serif text-white leading-[0.85] tracking-tight">
                        <span className="block text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] uppercase">Engineering Intelligence.</span>
                        <span className="block text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] text-white/70 italic uppercase">Designing Worlds.</span>
                        <span className="block text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] uppercase">Shaping Narrative.</span>
                    </h1>
                </motion.div>
            </div>

            {/* Bottom Bar Info */}
            <div className="absolute bottom-0 left-0 w-full px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row justify-between items-end gap-6 z-20">
                {/* Description - Bottom Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-md"
                >
                    <p className="text-zinc-400 text-sm md:text-base font-light uppercase tracking-wide leading-relaxed">
                        AI-Driven Creative & Technology Studio <br className="hidden md:block" /> based in Chennai.
                    </p>
                </motion.div>

                {/* CTA - Bottom Right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
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
        </header>
    );
};

export default Hero;
