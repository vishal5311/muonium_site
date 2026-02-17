import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://go.screenpal.com/player/appearance/cOnb2xn0OO3";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <header className="relative w-full h-screen overflow-hidden bg-black font-sans selection:bg-white/20">
            {/* Background Video - ScreenPal Embed */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-50 select-none pointer-events-none">
                <div className="sp-embed-player" data-id="cOnb2xn0OO3" data-aspect-ratio="1.777778" data-padding-top="56.250000%" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <iframe
                        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0', objectFit: 'cover' }}
                        scrolling="no"
                        src="https://go.screenpal.com/player/cOnb2xn0OO3?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1"
                        allowFullScreen={true}
                    ></iframe>
                </div>
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
