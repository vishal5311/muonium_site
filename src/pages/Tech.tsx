import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ShieldCheck,
    Cpu,
    Database,
    Zap,
    Globe,
    Lock,
    Workflow
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TechHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="h-[120vh] relative bg-black flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ scale, opacity }}
                className="text-center z-10 px-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                >
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Core Infrastructure v2.0</span>
                </motion.div>

                <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter leading-none mb-8">
                    The Engine of <br />
                    <span className="font-instrument-serif italic text-zinc-500">Intelligence.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
                    Muonium's proprietary neural architecture scales beyond traditional transformers,
                    processing cinematic-grade imagery at sub-millisecond latencies.
                </p>
            </motion.div>

            {/* Background Grid/Abstract */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black" />
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>
        </section>
    );
};

const TechStats = () => {
    return (
        <section className="py-32 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { label: "Token Processing", val: "50T+", detail: "Monthly Parameter Operations" },
                        { label: "Latency", val: "100ms", detail: "Global Round-trip Peak" },
                        { label: "GPU Clusters", val: "2,048", detail: "H100/H200 Nodes" },
                        { label: "Stability", val: "99.99%", detail: "Enterprise SLA Promise" }
                    ].map((stat, i) => (
                        <div key={i} className="group cursor-default">
                            <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4">{stat.label}</p>
                            <h3 className="text-5xl font-semibold tracking-tight mb-2 group-hover:text-white transition-colors">{stat.val}</h3>
                            <p className="text-sm text-zinc-500 font-light">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechSection = ({ title, subtitle, items }: { title: string, subtitle: string, items: any[] }) => {
    return (
        <section className="py-32 px-6 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-[1.1]">
                            {title.split(' ').slice(0, -1).join(' ')} <br />
                            <span className="font-instrument-serif italic text-zinc-500">{title.split(' ').slice(-1)}</span>
                        </h2>
                        <p className="text-zinc-500 font-light text-lg leading-relaxed">
                            {subtitle}
                        </p>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {items.map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-medium mb-3 tracking-tight">{item.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Tech = () => {
    return (
        <div className="bg-black text-white selection:bg-white/10 selection:text-white min-h-screen font-geist antialiased overflow-x-hidden">
            <Navbar />

            <TechHero />

            <TechStats />

            <TechSection
                title="Neural Foundation"
                subtitle="We've rebuilt the inference engine from the silicon up to handle the massive data throughput of high-fidelity video."
                items={[
                    { title: "Proprietary Latent Space", desc: "Encoded using custom variational autoencoders for maximum detail retention.", icon: <Cpu /> },
                    { title: "Dynamic Attention", desc: "Sparsely activated pathways that reduce compute waste by 60%.", icon: <Zap /> },
                    { title: "Cross-Modal Sync", desc: "Perfect temporal alignment between audio, motion, and visual streams.", icon: <Workflow /> },
                    { title: "Zero-Shot Detail", desc: "Upscaling logic that hallucinates textures with physical accuracy.", icon: <Database /> }
                ]}
            />

            <section className="py-32 px-6 bg-zinc-950/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-black rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-1000" />

                        <div className="relative z-10 max-w-3xl">
                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-8 block">Projected Roadmap</span>
                            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-12">
                                Building the <br /> <span className="font-instrument-serif italic text-zinc-500">Autonomous Creative.</span>
                            </h2>
                            <p className="text-zinc-400 text-xl font-light leading-relaxed mb-12">
                                Our vision extends beyond assisted generation. We are training models to understand
                                cinematography, rhythm, and narrative structure at a cognitive level.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="mt-1 h-5 w-5 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center">
                                        <div className="h-2 w-2 rounded-full bg-white" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium mb-1">Muon-2 Rollout</h5>
                                        <p className="text-sm text-zinc-500">10x parameter increase with 3x efficiency gains.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 h-5 w-5 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center">
                                        <div className="h-2 w-2 rounded-full bg-white/20" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium mb-1 text-zinc-500">Real-time VFX</h5>
                                        <p className="text-sm text-zinc-600">Zero-latency generation for interactive live events.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TechSection
                title="Security Architecture"
                subtitle="In the age of synthesis, trust is the primary currency. Our stack is hardened to protect IP and ensure ethical deployment."
                items={[
                    { title: "Neural Watermarking", desc: "Invisible cryptographic signatures embedded in every generated frame.", icon: <ShieldCheck /> },
                    { title: "Private Compute", desc: "Fully isolated tensor clusters for enterprise client data.", icon: <Lock /> },
                    { title: "Ethical Guardrails", desc: "Real-time moderation layers that prevent non-consensual synthesis.", icon: <Globe /> },
                    { title: "Compliance Core", desc: "SOC2 Type II and GDPR ready infrastructure for global deployment.", icon: <Database /> }
                ]}
            />

            <Footer />
        </div>
    );
};

export default Tech;
