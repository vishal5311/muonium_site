import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black pt-32 pb-12 border-t border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
                    {/* Logo & Info */}
                    <div>
                        <a href="/" className="flex items-center gap-4 mb-8 group">
                            <img
                                src="https://i.ibb.co/4ZbnJgdC/Muonium.png"
                                alt="Muonium AI Logo"
                                className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform duration-500"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-[0.2em] text-white">MUONIUM</span>
                                <span className="text-xs font-medium tracking-[0.4em] text-white/30 uppercase">Intelligence</span>
                            </div>
                        </a>
                        <p className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed mb-6">
                            AI-Driven Creative & Technology Studio based in Chennai.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-zinc-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-1 text-zinc-600" />
                                <div>
                                    <p>Ground floor G Flat, II Block Shanthi Towers</p>
                                    <p>88 Arcot Road, Vadapalani</p>
                                    <p>Chennai, Tamil Nadu 600026, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-zinc-600" />
                                <a href="mailto:senthil@muonium.ai" className="hover:text-white transition-colors">
                                    senthil@muonium.ai
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-zinc-600" />
                                <a href="https://wa.me/919600072457" className="hover:text-white transition-colors">
                                    +91 96000 72457 (WhatsApp)
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Divisions</h4>
                            <ul className="space-y-4">
                                <li><a href="/studios" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Studios</a></li>
                                <li><a href="/gaming" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Gaming</a></li>
                                <li><a href="/tech" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Tech</a></li>
                                <li><a href="/media" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Media</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Company</h4>
                            <ul className="space-y-4">
                                <li><a href="/#hero" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">About</a></li>
                                <li><a href="/#services" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Services</a></li>
                                <li><a href="/#ethics" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Ethics</a></li>
                                <li><a href="/#faq" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">FAQ</a></li>
                                <li><a href="/#contact" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Social</h4>
                            <ul className="space-y-4">
                                <li><a href="https://linkedin.com/in/senthilnayagam" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">LinkedIn</a></li>
                                <li><a href="https://www.instagram.com/senthilnayagamchettiyar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Instagram</a></li>
                                <li><a href="https://x.com/senthilnayagam" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">X (Twitter)</a></li>
                                <li><a href="https://www.facebook.com/senthil.n.9480" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Facebook</a></li>
                                <li><a href="https://maps.app.goo.gl/j79J4bPDnHeZWZhf6?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Google Maps</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-8">
                    <p className="text-zinc-600 text-xs font-light tracking-widest uppercase">
                        © 2026 Muonium AI. All rights reserved.
                    </p>
                    <div className="flex gap-10">
                        <a href="/assets/press-kit/muonium-press-kit.zip" download className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest">Press Kit</a>
                        <a href="mailto:senthil@muonium.ai" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest">Press Inquiry</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
