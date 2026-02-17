import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lanyard from '../components/ui/Lanyard';

const Contact = () => {
    return (
        <div className="bg-black text-white selection:bg-white/10 selection:text-white min-h-screen">
            <Navbar />

            <main className="relative pt-32 pb-20">
                {/* Background Glow */}
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-rose-500/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-rose-400 uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
                            >
                                Connect With Us
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-8xl font-instrument-serif italic leading-none mb-12"
                            >
                                Let's Build <br /> <span className="not-italic text-white">Something New.</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-12"
                            >
                                <form
                                    className="space-y-10 max-w-lg"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const btn = e.currentTarget.querySelector('button');
                                        if (btn) btn.innerText = "Sent Successfully!";
                                        setTimeout(() => { if (btn) btn.innerText = "Send Message"; }, 3000);
                                    }}
                                >
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold group-focus-within:text-white transition-colors">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-all text-xl font-light placeholder:text-zinc-800"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold group-focus-within:text-white transition-colors">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-all text-xl font-light placeholder:text-zinc-800"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold group-focus-within:text-white transition-colors">How can we help?</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-all text-xl font-light resize-none placeholder:text-zinc-800"
                                            placeholder="Tell us about your project"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="group relative w-full md:w-fit bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Send Message
                                            <motion.span
                                                className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-black border-b-[4px] border-b-transparent"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            />
                                        </span>
                                    </button>
                                </form>

                                <div className="pt-12 border-t border-zinc-900 grid grid-cols-2 gap-8">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 block mb-4">Direct</span>
                                        <a href="mailto:senthil@muonium.ai" className="text-zinc-400 hover:text-white transition-colors">senthil@muonium.ai</a>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 block mb-4">Social</span>
                                        <div className="flex gap-4">
                                            <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                                            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative h-[600px] lg:h-[800px] flex items-center justify-center">
                            {/* 3D Model Component */}
                            <div className="absolute inset-0 z-0">
                                <Lanyard />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
