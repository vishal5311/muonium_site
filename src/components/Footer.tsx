const Footer = () => {
    return (
        <footer className="bg-black pt-32 pb-12 border-t border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
                    <div>
                        <a href="/" className="flex items-center gap-4 mb-8 group">
                            <img
                                src="https://74invwz5eh2od4uw.public.blob.vercel-storage.com/Muonium.png"
                                alt="Muonium AI Logo"
                                className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform duration-500"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-[0.2em] text-white">MUONIUM</span>
                                <span className="text-xs font-medium tracking-[0.4em] text-white/30 uppercase">Intelligence</span>
                            </div>
                        </a>
                        <p className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed">
                            Cinematic • Gaming • Technology
                        </p>
                        <p className="text-zinc-600 mt-4 font-light">
                            Chennai, India
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Navigation</h4>
                            <ul className="space-y-4">
                                <li><a href="#work" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Work</a></li>
                                <li><a href="#services" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Services</a></li>
                                <li><a href="#approach" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Approach</a></li>
                                <li><a href="#ethics" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Ethics</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Company</h4>
                            <ul className="space-y-4">
                                <li><a href="#team" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Team</a></li>
                                <li><a href="#faq" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">FAQ</a></li>
                                <li><a href="#media" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Media</a></li>
                                <li><a href="#book" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Book Session</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Social</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">LinkedIn</a></li>
                                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Instagram</a></li>
                                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">X (Twitter)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-8">
                    <p className="text-zinc-600 text-xs font-light tracking-widest uppercase">
                        © 2026 Muonium AI. All rights reserved.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest">Privacy Policy</a>
                        <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
