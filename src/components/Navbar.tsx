import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '/' },
        { name: 'Studios', href: '/studios' },
        { name: 'Gaming', href: '/gaming' },
        { name: 'Media', href: '/media' },
        { name: 'Tech', href: '/tech' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-[100] flex justify-between items-center py-4 px-8 rounded-full transition-all duration-500 ${isScrolled ? 'glass_nav scale-100' : 'bg-transparent scale-[1.02]'
                }`}
        >
            <a href="/" className="flex items-center gap-3 z-50 group">
                <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg">
                    <img
                        src="/Muonium.png"
                        alt="Muonium AI Logo"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm md:text-base font-bold tracking-[0.2em] text-white">MUONIUM</span>
                    <span className="text-[8px] md:text-[10px] font-medium tracking-[0.4em] text-white/40 uppercase -mt-1">Intelligence</span>
                </div>
            </a>

            {/* Desktop Menu Pill */}
            <div className="hidden lg:flex items-center gap-6 py-2 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <a
                    href="/contact"
                    className="hidden md:flex px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest"
                >
                    Contact
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed top-20 right-0 w-[280px] bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl z-50 origin-top-right"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xl font-instrument-serif text-zinc-300 hover:text-white transition-colors italic"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-px bg-white/10 w-full my-2" />
                        <a
                            href="#book"
                            className="bg-white text-black py-4 rounded-full text-center font-bold text-xs uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a Session
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
