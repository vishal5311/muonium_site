import { motion } from 'framer-motion';

const TeamSection = () => {
    return (
        <section id="team" className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-emerald-400 text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                        Studio
                    </span>
                    <h2 className="text-4xl md:text-6xl font-instrument-serif text-white tracking-tight leading-tight italic">
                        Meet the people shaping <br /> <span className="not-italic text-zinc-500">the future of media.</span>
                    </h2>
                    <p className="text-zinc-400 mt-6 text-lg font-light leading-relaxed">
                        Muonium AI Studios is headquartered at Shanthi Towers in Vadapalani, Chennai. Our cross-functional team brings together deep tech, digital art, and campaign strategy to deliver measurable results.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        { label: "10+", value: "AI specialists", sub: "Filmmakers and strategists working in-house." },
                        { label: "2023", value: "Established", sub: "Founded to help creators harness AI responsibly." },
                        { label: "Global", value: "Footprint", sub: "Serving filmmakers, agencies, and leaders across continents." }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2.5rem] bg-zinc-900 border border-white/5 text-center group hover:bg-zinc-800 transition-colors duration-500 shadow-xl"
                        >
                            <div className="text-5xl font-instrument-serif text-emerald-400 mb-4 italic group-hover:scale-110 transition-transform duration-500">
                                {stat.label}
                            </div>
                            <div className="text-xl text-white font-medium mb-2">{stat.value}</div>
                            <div className="text-zinc-500 text-sm font-light leading-relaxed">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Team Visual Placeholder */}
                <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                        alt="Muonium Studio Team Environment"
                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    <div className="absolute bottom-12 left-12 right-12 text-center">
                        <p className="text-zinc-400 text-sm font-medium tracking-[0.2em] uppercase">
                            Crafting from Chennai • Deploying Globally
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
