import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NewHero = () => {
    return (
        <section id="hero" className="relative min-h-screen bg-black text-white pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <span className="text-emerald-400 text-sm font-medium tracking-[0.3em] uppercase">
                            AI-Driven Creative Studio
                        </span>

                        <h1 className="text-5xl md:text-7xl font-instrument-serif leading-tight">
                            Cinematic storytelling for campaigns, creators, and studios.
                        </h1>

                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                            Based in Chennai, our team of AI filmmakers, engineers, and artists shape persuasive narratives with deepfake video, lifelike audio, and multilingual avatars—always with transparency at the core.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2"
                            >
                                Start a project
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#services"
                                className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                Explore services
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Media */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 relative group">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                src="https://formnsvrwptpmzme.public.blob.vercel-storage.com/web_clip.mp4"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white text-sm font-medium">
                                    Generative sequences rendered in hours
                                </p>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-sm mt-6 leading-relaxed">
                            We deliver production-ready assets for film, political outreach, and branded content without compromising ethics or craft.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Marquee */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden py-6 border-t border-white/10">
                <div className="flex gap-12 animate-marquee whitespace-nowrap">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex gap-12 text-zinc-600 text-sm font-medium tracking-wider">
                            <span>Deepfake Films</span>
                            <span>Digital Avatars</span>
                            <span>AI Voice & Audio</span>
                            <span>Campaign Localization</span>
                            <span>Rapid Pre-visualization</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewHero;
