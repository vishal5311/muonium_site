import { Mail, MessageCircle } from 'lucide-react';
import Lanyard from './ui/Lanyard';

const ContactSection = () => {
    return (
        <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative z-10">
                        <span className="text-rose-400 text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                            Let's build together
                        </span>
                        <h2 className="text-5xl md:text-7xl font-instrument-serif text-white tracking-tight leading-tight italic mb-8">
                            Book a discovery session <br /> <span className="not-italic text-zinc-800">with the team.</span>
                        </h2>
                        <p className="text-zinc-500 text-lg font-light leading-relaxed mb-12 max-w-xl">
                            Share your brief, timeline, and channels. We'll return with an AI production roadmap and sample concepts tailored to your audience.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="mailto:senthil@muonium.ai"
                                className="flex items-center gap-6 p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-400 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
                                    senthil@muonium.ai
                                </div>
                            </a>

                            <a
                                href="https://wa.me/919600072457"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-400 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div className="text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
                                    WhatsApp +91 96000 72457
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 z-0">
                            <Lanyard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
