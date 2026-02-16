import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    ChevronRight,
    ChevronLeft,
    Server,
    ShieldCheck,
    Cpu,
    Database,
    CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Sub-components (mimicking the structure provided) ---

const TechHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Morphing values
    const width = useTransform(scrollYProgress, [0, 0.6], ["100vw", "90vw"]);
    const height = useTransform(scrollYProgress, [0, 0.6], ["100vh", "60vh"]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["0px", "40px"]);
    const marginTop = useTransform(scrollYProgress, [0, 0.6], ["0px", "100px"]);
    const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-zinc-50">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden">
                {/* Final Header (visible after scroll) */}
                <motion.div
                    style={{ opacity }}
                    className="absolute top-[10%] w-full px-6 text-center z-10"
                >
                    <h2 className="text-4xl md:text-7xl font-instrument-serif text-zinc-900 tracking-tight max-w-5xl mx-auto italic">
                        The backbone of generative <br /> <span className="not-italic text-zinc-400">futures and enterprise scale.</span>
                    </h2>
                </motion.div>

                {/* Morphing Card */}
                <motion.div
                    style={{ width, height, borderRadius, marginTop }}
                    className="relative overflow-hidden shadow-2xl bg-zinc-900"
                >
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                        alt="Infrastructure"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Initial Content */}
                    <motion.div
                        style={{ opacity: initialTextOpacity }}
                        className="absolute inset-0 flex flex-col justify-end p-8 md:p-20"
                    >
                        <div className="max-w-[1600px] mx-auto w-full">
                            <span className="uppercase text-xs font-bold tracking-[0.3em] text-white/70 mb-4 block">Infrastructure Division</span>
                            <h1 className="text-4xl md:text-7xl font-instrument-serif text-white tracking-tight max-w-4xl leading-tight italic">
                                Scalable APIs. Generative Pipelines. <br />
                                <span className="not-italic opacity-60">Enterprise-Grade Security.</span>
                            </h1>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const TechAbout = () => {
    return (
        <section className="py-32 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-screen-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Big Card */}
                    <div className="lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[500px] group shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1558494949-ef5485037025?q=80&w=2689&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            alt="Network"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-transparent p-8 md:p-12">
                            <div className="max-w-2xl h-full flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 block">Our Legacy</span>
                                    <div className="w-20 h-px bg-zinc-400/30 mb-8" />
                                    <h3 className="text-4xl md:text-5xl font-instrument-serif italic text-white mb-8 leading-tight">
                                        A Foundation of Innovation & <br /> <span className="not-italic">Robust Engineering.</span>
                                    </h3>
                                    <p className="text-zinc-300 text-lg font-light leading-relaxed border-l border-white/20 pl-6 border-zinc-500/30">
                                        Muonium's Tech Division was born from the need for absolute reliability in AI deployment.
                                        What started as internal tooling for low-latency generation has evolved into a global
                                        infrastructure network serving millions of requests daily.
                                        <br /><br />
                                        We manage a significant portion of generative workloads for creative studios,
                                        mining project data to train specialized models and securing enterprise assets
                                        with hardware-level encryption.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Stats/Sectors */}
                    <div className="lg:col-span-4 bg-zinc-900 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-instrument-serif text-white mb-2 italic">Infrastructure</h3>
                            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-12">Key Sectors Served</p>

                            <div className="space-y-8">
                                {[
                                    { title: "Generative AI", icon: <Cpu className="w-5 h-5" /> },
                                    { title: "Enterprise Security", icon: <ShieldCheck className="w-5 h-5" /> },
                                    { title: "Scalable APIs", icon: <Database className="w-5 h-5" /> },
                                    { title: "Industrial SaaS", icon: <Server className="w-5 h-5" /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 transition-colors group-hover/item:bg-white group-hover/item:text-black">
                                            {item.icon}
                                        </div>
                                        <span className="text-zinc-300 font-medium group-hover/item:text-white transition-colors">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="relative z-10 w-full mt-12 py-4 border border-zinc-700 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group/btn">
                            Explore Our Stack
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-zinc-400/5 rounded-full blur-[100px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechAdvantages = () => {
    const [activeTab, setActiveTab] = useState(0);
    const advantages = [
        {
            title: "Market Leadership",
            description: "We hold the largest share of high-performance GPU clusters in the region, processing over 10T weekly tokens across our generative pipelines.",
            details: "Recognized as 'Best Infrastructure Provider 2024' by Global Tech Review."
        },
        {
            title: "Edge Innovation",
            description: "Proprietary low-latency edge nodes ensure that creative tools respond in real-time, regardless of the user's location.",
            details: "First to deploy hardware-accelerated text-to-video endpoints globally."
        },
        {
            title: "Zero-Trust Security",
            description: "Every request is validated through a multi-layered biometric and cryptographic mesh, ensuring complete data sovereignty.",
            details: "ASAE 3402 & SOC3 type II compliant infrastructure."
        },
        {
            title: "Global Reach",
            description: "With 24+ data centers strategically placed, we provide sub-50ms latency to all major creative hubs.",
            details: "Reliable distribution through 200+ peering partners."
        }
    ];

    return (
        <section className="py-32 bg-zinc-950 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
                <div className="flex flex-col border-white/10 border-b pb-12 mb-16">
                    <h2 className="text-4xl md:text-5xl font-instrument-serif tracking-tight mb-4 lowercase italic">
                        Competitive <span className="not-italic text-zinc-500">Advantage.</span>
                    </h2>
                    <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">Why Architect with Muonium?</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Nav */}
                    <div className="lg:col-span-4 flex flex-col space-y-4">
                        {advantages.map((adv, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`group flex items-center p-4 rounded-2xl transition-all duration-300 text-left ${activeTab === idx ? 'bg-white/10 backdrop-blur-md' : 'opacity-40 hover:opacity-100'}`}
                            >
                                <div className={`w-2 h-2 rounded-full mr-6 transition-all duration-500 ${activeTab === idx ? 'bg-white scale-100 shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'scale-0'}`} />
                                <span className={`text-xl font-instrument-serif italic tracking-tight transition-colors ${activeTab === idx ? 'text-white' : 'text-zinc-500'}`}>
                                    {adv.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-8 flex flex-col justify-between min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <h3 className="text-4xl md:text-6xl font-instrument-serif text-white tracking-tight leading-tight">
                                    {advantages[activeTab].title}
                                </h3>
                                <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light max-w-3xl">
                                    {advantages[activeTab].description}
                                </p>
                                <p className="text-zinc-500 italic border-l border-zinc-800 pl-6">
                                    {advantages[activeTab].details}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 border-t border-white/10 pt-12 mt-auto">
                            <button
                                onClick={() => setActiveTab(prev => (prev > 0 ? prev - 1 : advantages.length - 1))}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={() => setActiveTab(prev => (prev < advantages.length - 1 ? prev + 1 : 0))}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                            >
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechVision = () => {
    return (
        <section className="py-40 bg-zinc-50">
            <div className="container mx-auto px-6 max-w-screen-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left Sticky Column */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <h2 className="text-5xl md:text-8xl font-instrument-serif leading-[0.85] tracking-tight mb-8 italic">
                            Strategic <br /> <span className="not-italic text-zinc-300">Vision.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-xl">
                            We envision a world where high-fidelity generation and secure computing are
                            seamless utilities, fostering transformations in society, creative industries,
                            and the enterprise sector.
                        </p>
                    </div>

                    {/* Right Scrolling Cards */}
                    <div className="space-y-12">
                        {[
                            {
                                title: "Scale First",
                                desc: "Positioning infrastructure at the heart of our operations via dedicated hyperscale clusters.",
                                items: ["Distributed Compute", "High Bandwidth Peaks", "Cloud-Native Flow"]
                            },
                            {
                                title: "Resilient Security",
                                desc: "Aligning with global zero-trust protocols and bridging the gap between open-source and enterprise safety.",
                                items: ["Hardware Encryption", "Secure Data Lakes", "Privacy-Preserving Training"]
                            },
                            {
                                title: "Generative Platform",
                                desc: "An integrated ecosystem connecting creators, developers, and data providers through proprietary middleware.",
                                items: ["Unified API Access", "Low-Level Optimization", "Real-time Orchestration"]
                            }
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-zinc-100 rounded-[40px] p-10 md:p-14 hover:bg-zinc-100 transition-all duration-500 hover:-translate-y-2 group shadow-sm hover:shadow-xl"
                            >
                                <h3 className="text-4xl md:text-5xl font-instrument-serif text-zinc-900 mb-6 italic">{card.title}</h3>
                                <p className="text-zinc-500 text-lg mb-12 border-l border-zinc-200 pl-6">{card.desc}</p>

                                <div className="pt-8 border-t border-zinc-100 space-y-4">
                                    {card.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                                            <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechTimeline = () => {
    const [activeEra, setActiveEra] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const eras = [
        {
            years: "2018 – 2020",
            title: "Foundation & Prototype",
            bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
            milestones: [
                { year: "2018", text: "Founded as a compute cooperative in Chennai." },
                { year: "2019", text: "First isolated 100-GPU cluster operational." },
                { year: "2020", text: "Launched 'Muonium Base' private API beta." }
            ]
        },
        {
            years: "2021 – 2023",
            title: "Scaling & Industrialization",
            bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
            milestones: [
                { year: "2021", text: "Deployed edge-nodes in 5 major creative hubs." },
                { year: "2022", text: "Achieved SOC2 Type II compliance standards." },
                { year: "2023", text: "Public release of Generative API for enterprise." }
            ]
        },
        {
            years: "2024 – Future",
            title: "Global Mesh & Autonomous Flows",
            bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop",
            milestones: [
                { year: "2024", text: "Achieved sub-50ms latency across 24 regions." },
                { year: "2025", text: "Launch of autonomous pipeline orchestration." }
            ]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const scrollLeft = scrollRef.current.scrollLeft;
            const width = scrollRef.current.offsetWidth;
            const newIndex = Math.round(scrollLeft / (width * 0.8));
            if (newIndex >= 0 && newIndex < eras.length && newIndex !== activeEra) {
                setActiveEra(newIndex);
            }
        };

        const currentScrollRef = scrollRef.current;
        if (currentScrollRef) {
            currentScrollRef.addEventListener('scroll', handleScroll);
        }
        return () => currentScrollRef?.removeEventListener('scroll', handleScroll);
    }, [activeEra, eras.length]);

    return (
        <section className="relative h-screen bg-black overflow-hidden flex flex-col justify-end">
            {/* Background Transitions */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeEra}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <img src={eras[activeEra].bg} className="w-full h-full object-cover opacity-40" alt="Era BG" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Foreground */}
            <div className="relative z-10 w-full pb-20 px-6 md:px-12">
                <div className="max-w-screen-2xl mx-auto">

                    {/* Era Header */}
                    <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-12 mb-16">
                        <div className="max-w-4xl">
                            <span className="uppercase text-blue-400 font-bold tracking-[0.3em] block mb-4">{eras[activeEra].years}</span>
                            <h2 className="text-4xl md:text-7xl font-instrument-serif text-white italic tracking-tight leading-none">
                                {eras[activeEra].title}
                            </h2>
                        </div>

                        <div className="flex gap-4 mt-8 md:mt-0">
                            <button
                                onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Timeline Cards */}
                    <div
                        ref={scrollRef}
                        className="flex gap-16 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pr-[30vw]"
                    >
                        {eras.flatMap((era, eIdx) =>
                            era.milestones.map((m, mIdx) => (
                                <div
                                    key={`${eIdx}-${mIdx}`}
                                    className="min-w-[300px] md:min-w-[400px] border-t border-white/20 pt-8 group hover:border-blue-400 transition-colors snap-start"
                                >
                                    <span className="text-5xl md:text-6xl font-instrument-serif text-white/40 group-hover:text-blue-400 transition-all duration-500 italic block mb-6">
                                        {m.year}
                                    </span>
                                    <p className="text-zinc-400 text-xl font-light leading-relaxed">
                                        {m.text}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---

const Tech = () => {
    return (
        <div className="bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white">
            <Navbar />

            <main>
                <TechHero />
                <TechAbout />
                <TechAdvantages />
                <TechVision />
                <TechTimeline />

                {/* Partners Section (Final marquee effect) */}
                <section className="py-32 overflow-hidden bg-zinc-50 border-t border-zinc-200">
                    <div className="container mx-auto px-6 max-w-screen-2xl text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-instrument-serif italic text-zinc-400 mb-2">Global Network</h3>
                        <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold leading-relaxed">Our Technology Ecosystem & Partners</p>
                    </div>

                    <div className="relative flex overflow-x-hidden">
                        <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-12">
                            {["NVIDIA", "MICROSOFT", "GOOGLE CLOUD", "AWS", "INTEL", "DARKTRACE", "CLOUDFLARE", "OPENAI", "DATADOG", "SNOWFLAKE"].map((partner, i) => (
                                <span key={i} className="text-5xl md:text-8xl font-black text-zinc-200 hover:text-zinc-900 transition-colors cursor-default select-none tracking-tighter">
                                    {partner}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-24 py-12">
                            {["NVIDIA", "MICROSOFT", "GOOGLE CLOUD", "AWS", "INTEL", "DARKTRACE", "CLOUDFLARE", "OPENAI", "DATADOG", "SNOWFLAKE"].map((partner, i) => (
                                <span key={i} className="text-5xl md:text-8xl font-black text-zinc-200 hover:text-zinc-900 transition-colors cursor-default select-none tracking-tighter">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>

                    <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-100%); }
                        }
                        @keyframes marquee2 {
                            0% { transform: translateX(100%); }
                            100% { transform: translateX(0%); }
                        }
                        .animate-marquee {
                            animation: marquee 40s linear infinite;
                        }
                        .animate-marquee2 {
                            animation: marquee2 40s linear infinite;
                        }
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .no-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Tech;
