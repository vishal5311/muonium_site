import { Shield, Eye, Lock, Globe, UserCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ethicsItems = [
    {
        title: "Consent-First Likeness Modeling",
        description: "Legal and ethical acquisition of data for digital avatars and voice synthesis.",
        icon: UserCheck
    },
    {
        title: "Transparent Synthetic Disclosures",
        description: "Clear labeling of AI-generated content to maintain trust and accountability.",
        icon: Eye
    },
    {
        title: "Watermarking",
        description: "Embedded digital footprints to ensure source verification and origin tracking.",
        icon: Shield
    },
    {
        title: "Cultural Sensitivity",
        description: "Diverse datasets that respect global cultures and prevent algorithmic bias.",
        icon: Globe
    },
    {
        title: "Secure Dataset Handling",
        description: "Enterprise-grade encryption for all client assets and training data.",
        icon: Lock
    },
    {
        title: "Responsibility",
        description: "Commitment to ethical AI development and deployment.",
        icon: CheckCircle
    }
];

const EthicsSection = () => {
    return (
        <section id="ethics" className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-24">
                    <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-500 mb-6 block">Our Manifesto</span>
                    <h2 className="text-5xl md:text-7xl font-instrument-serif text-white leading-tight">
                        Intelligence With Responsibility
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ethicsItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="p-10 rounded-[2rem] bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <item.icon className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EthicsSection;
