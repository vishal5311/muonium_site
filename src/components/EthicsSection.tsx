import { motion } from 'framer-motion';
import { Cpu, PenTool, ShieldCheck, Heart } from 'lucide-react';

const EthicsSection = () => {
    const values = [
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Cutting-edge tooling",
            description: "We deploy the latest generative workflows, custom-trained models, and proprietary automation tailored to your production needs."
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Tailored execution",
            description: "Every engagement is bespoke, from dataset construction to rollout strategy, ensuring AI aligns with your creative voice."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Ethical safeguards",
            description: "Informed consent, watermarking, and transparent workflows keep stakeholders protected and audiences informed."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Interdisciplinary team",
            description: "AI engineers, filmmakers, designers, and writers collaborate daily from our Chennai studio to ship work that resonates."
        }
    ];

    return (
        <section id="ethics" className="py-32 bg-black border-y border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                    <div>
                        <span className="text-emerald-400 text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                            Governance
                        </span>
                        <h2 className="text-4xl md:text-6xl font-instrument-serif text-white tracking-tight leading-tight italic">
                            Innovation balanced <br /> <span className="not-italic text-zinc-500">with governance.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-xl">
                        We build transparent pipelines that respect likeness, voice, and cultural nuance—because synthetic media must earn trust.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:border-emerald-400/20 group transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-instrument-serif text-white mb-4 italic group-hover:text-emerald-400 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-zinc-500 font-light leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EthicsSection;

