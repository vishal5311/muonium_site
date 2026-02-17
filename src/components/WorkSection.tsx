import { motion } from 'framer-motion';
import { Languages, Film, Users } from 'lucide-react';

const WorkSection = () => {
    const works = [
        {
            icon: <Languages className="w-8 h-8 text-emerald-400" />,
            title: "Campaign deepfakes that travel in every Indian language.",
            description: "We create fully licensed likeness models to deliver regional speeches faster than traditional production—while keeping legal compliance in check."
        },
        {
            icon: <Film className="w-8 h-8 text-blue-400" />,
            title: "AI-generated sequences for directors and showrunners.",
            description: "From de-aging to digital doubles, we collaborate with studios to extend visual storytelling without ballooning shoot schedules."
        },
        {
            icon: <Users className="w-8 h-8 text-purple-400" />,
            title: "Immersive avatar hosts for launches and product stories.",
            description: "Multi-lingual spokespeople and interactive character pipelines help global brands unlock culturally nuanced content at scale."
        }
    ];

    return (
        <section id="work" className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <span className="text-emerald-400 text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                        Proof of craft
                    </span>
                    <h2 className="text-4xl md:text-6xl font-instrument-serif text-white tracking-tight leading-tight italic">
                        Proof of craft across <br /> <span className="not-italic text-zinc-500">media & influence.</span>
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl text-lg font-light">
                        Muonium AI Studios blends cinematic language with persuasive messaging. Here’s how our recent partnerships leveraged synthetic media.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-emerald-400/30 transition-all duration-500 group"
                        >
                            <div className="mb-8 p-4 bg-black rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/20">
                                {work.icon}
                            </div>
                            <h3 className="text-2xl font-instrument-serif text-white mb-4 italic group-hover:text-emerald-400 transition-colors">
                                {work.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed font-light">
                                {work.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
