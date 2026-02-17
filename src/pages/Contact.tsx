import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lanyard from '../components/ui/Lanyard';

const Contact = () => {
    return (
        <div className="bg-black text-white selection:bg-white/10 selection:text-white min-h-screen">
            <Navbar />

            <main className="relative pt-32">
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
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

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-10 max-w-lg mb-20 lg:mb-0"
                            onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! Our team will get back to you shortly."); }}
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
                        </motion.form>
                    </div>

                    <div className="relative h-[600px] md:h-screen lg:h-auto lg:aspect-square flex items-center justify-center">
                        {/* 3D Lanyard Component */}
                        <div className="absolute inset-0 z-0">
                            <Lanyard />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
