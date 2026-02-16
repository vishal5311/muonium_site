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
                            className="space-y-8 max-w-lg"
                        >
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors resize-none"
                                    placeholder="Tell us about your project"
                                />
                            </div>
                            <button className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
                                Send Message
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
