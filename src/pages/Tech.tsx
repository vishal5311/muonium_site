import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    ShieldCheck,
    Scale,
    Lock,
    Globe
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Sub-components ---

const TechHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const width = useTransform(scrollYProgress, [0, 0.6], ["100vw", "90vw"]);
    const height = useTransform(scrollYProgress, [0, 0.6], ["100vh", "65vh"]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["0px", "48px"]);
    const marginTop = useTransform(scrollYProgress, [0, 0.6], ["0px", "120px"]);
    const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden">
                {/* Final Header */}
                <motion.div
                    style={{ opacity }}
                    className="absolute top-[15%] w-full px-6 text-center z-10"
                >
                    <h2 className="text-4xl md:text-8xl font-instrument-serif text-white tracking-tight max-w-6xl mx-auto italic">
                        The backbone of generative <br /> <span className="not-italic text-zinc-600">futures and enterprise scale.</span>
                    </h2>
                </motion.div>

                {/* Morphing Card */}
                <motion.div
                    style={{ width, height, borderRadius, marginTop }}
                    className="relative overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.02)] bg-zinc-900 border border-white/5"
                >
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                        alt="Infrastructure"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                    {/* Initial Content */}
                    <motion.div
                        style={{ opacity: initialTextOpacity }}
                        className="absolute inset-0 flex flex-col justify-end p-8 md:p-24"
                    >
                        <div className="max-w-[1600px] mx-auto w-full">
                            <span className="uppercase text-[10px] font-bold tracking-[0.4em] text-white/40 mb-6 block">Infrastructure Division</span>
                            <h1 className="text-5xl md:text-9xl font-instrument-serif text-white tracking-tighter max-w-5xl leading-[0.85] italic">
                                Scalable APIs. Generative Pipelines. <br />
                                <span className="not-italic opacity-40">Enterprise Security.</span>
                            </h1>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const ServiceModels = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const models = [
        {
            id: "01",
            title: "Private GPU Clusters",
            desc: "Dedicated hyperscale clusters for consistent, low-latency generative workloads. Best for studios and labs requiring absolute data sovereignty.",
            features: [
                "100% Data Sovereignty",
                "Dedicated H100/A100 Nodes",
                "Direct Fiber Interconnect",
                "Hardware-level Encryption"
            ],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
        },
        {
            id: "02",
            title: "Global Distribution API",
            desc: "High-performance inference endpoints for scaling generative assets globally. Pay only for the compute you consume with guaranteed up-time.",
            features: [
                "Guaranteed Throughput",
                "Edge Inference Nodes",
                "Pay-per-Inference Billing",
                "Multi-region Redundancy"
            ],
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200"
        },
        {
            id: "03",
            title: "Muonium Neural Mesh",
            desc: "An integrated ecosystem connecting your local workstation to our global compute network. Amplification of local creative tools.",
            features: [
                "Hybrid-cloud Rendering",
                "Low-latency Syncing",
                "Automated Pipeline Orchestration",
                "Cross-border Acceleration"
            ],
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200"
        }
    ];

    return (
        <section className="py-32 px-6 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] block mb-20 text-center md:text-left">Compute Operations</span>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
                    {/* Left: Interactive Accordion */}
                    <div className="w-full lg:w-7/12 flex flex-col">
                        {models.map((model, idx) => (
                            <div
                                key={model.id}
                                className={`group border-b border-white/5 py-10 cursor-pointer transition-all duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                <div className="flex items-start gap-8 md:gap-16">
                                    <span className={`text-xl font-geist-mono transition-colors ${activeIndex === idx ? 'text-white' : 'text-zinc-700'}`}>
                                        {model.id}
                                    </span>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className={`text-3xl md:text-5xl font-instrument-serif italic tracking-tight transition-colors ${activeIndex === idx ? 'text-white' : 'text-zinc-500'}`}>
                                                {model.title}
                                            </h3>
                                            <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${activeIndex === idx ? 'bg-white text-black border-white' : 'border-white/10 text-zinc-600'}`}>
                                                <ArrowRight className={`w-5 h-5 transition-transform ${activeIndex === idx ? 'rotate-0' : '-rotate-45'}`} />
                                            </div>
                                        </div>

                                        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10 font-light">
                                                {model.desc}
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {model.features.map((feat, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                                                        <span className="text-sm text-zinc-500">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Visual Preview */}
                    <div className="hidden lg:block w-5/12 sticky top-48 aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 group shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                src={models[activeIndex].image}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 0.5, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="absolute inset-0 w-full h-full object-cover grayscale"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-4">Live Environment</p>
                                <h4 className="text-4xl font-instrument-serif text-white italic tracking-tighter">
                                    {models[activeIndex].title}
                                </h4>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureHighlight = () => {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Scalable Reach", desc: "One API. Multiple entry points. Compounding reach across global edge nodes.", icon: <Scale size={24} /> },
                    { title: "Verified Nodes", desc: "Only vetted GPU clusters. Vertical and geo targeting for controlled distribution.", icon: <ShieldCheck size={24} /> },
                    { title: "Clean Security", desc: "Hardware encryption with zero data leak protocols for enterprise privacy.", icon: <Lock size={24} /> },
                    { title: "Geo Targeting", desc: "Voted verticals and edge geo targeting across 24 strategic regions.", icon: <Globe size={24} /> }
                ].map((item, idx) => (
                    <div key={idx} className="p-8 rounded-[2rem] border border-white/5 bg-zinc-950/50 hover:bg-zinc-900 transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-500 mb-8 group-hover:bg-white group-hover:text-black transition-all">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed font-light">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const PartnersStrip = () => {
    const list = ["NVIDIA", "MICROSOFT", "GOOGLE CLOUD", "AWS", "INTEL", "DARKTRACE", "CLOUDFLARE", "OPENAI", "DATADOG", "SNOWFLAKE"];
    return (
        <section className="py-32 overflow-hidden bg-black border-t border-white/5">
            <div className="container mx-auto px-6 text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-instrument-serif italic text-zinc-500 mb-2 whitespace-nowrap">Global Network</h3>
                <p className="text-zinc-700 uppercase tracking-widest text-xs font-bold leading-relaxed">Our Technology Ecosystem & Partners</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-12">
                    {list.map((partner, i) => (
                        <span key={i} className="text-5xl md:text-8xl font-black text-zinc-900 hover:text-white transition-colors cursor-default select-none tracking-tighter opacity-50">
                            {partner}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-24 py-12">
                    {list.map((partner, i) => (
                        <span key={i} className="text-5xl md:text-8xl font-black text-zinc-900 hover:text-white transition-colors cursor-default select-none tracking-tighter opacity-50">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
                @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }
                .animate-marquee { animation: marquee 60s linear infinite; }
                .animate-marquee2 { animation: marquee2 60s linear infinite; }
            `}</style>
        </section>
    );
};

// --- Main Page Component ---

const Tech = () => {
    return (
        <div className="bg-black text-white selection:bg-white/10 selection:text-white min-h-screen font-geist antialiased">
            <Navbar />

            <main>
                <TechHero />
                <FeatureHighlight />
                <ServiceModels />

                {/* Visual Break */}
                <div className="w-full h-96 md:h-[600px] relative overflow-hidden bg-zinc-900 border-y border-white/5">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2700&auto=format&fit=crop"
                        alt="Infrastructure Overview"
                        className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <PartnersStrip />
            </main>

            <Footer />
        </div>
    );
};

export default Tech;
