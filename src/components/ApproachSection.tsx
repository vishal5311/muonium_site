import { motion } from 'framer-motion';

const ApproachSection = () => {
    const steps = [
        {
            number: "01",
            title: "Strategize the narrative",
            description: "Align on goals, audiences, and authenticity guardrails before a single frame is generated."
        },
        {
            number: "02",
            title: "Prototype at thoughtspeed",
            description: "Rapid storyboards, test renders, and multilingual voice samples keep stakeholders aligned."
        },
        {
            number: "03",
            title: "Deliver for distribution",
            description: "We hand off polished assets with documentation, usage rights, and localized variants ready to deploy."
        }
    ];

    return (
        <section id="approach" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                    <div className="max-w-2xl">
                        <span className="text-emerald-400 text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                            Our Process
                        </span>
                        <h2 className="text-5xl md:text-7xl font-instrument-serif text-white tracking-tight leading-none italic">
                            Co-create, <br /> <span className="not-italic text-zinc-800">prototype, iterate.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-lg max-w-sm font-light mb-2">
                        Muonium AI Studios help storytellers harness generative tools responsibly with a focused team of ten AI creatives.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-white/5 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative z-10 group"
                        >
                            <div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center text-3xl font-instrument-serif italic mb-10 group-hover:bg-emerald-400 group-hover:text-black transition-all duration-500 shadow-xl shadow-black/40 border border-white/5">
                                {step.number}
                            </div>
                            <h3 className="text-3xl font-instrument-serif text-white mb-6 italic group-hover:text-emerald-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed font-light border-l border-zinc-800 pl-6 group-hover:border-emerald-400 transition-colors duration-500">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        </section>
    );
};

export default ApproachSection;
