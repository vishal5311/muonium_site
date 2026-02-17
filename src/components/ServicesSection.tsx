import { motion } from 'framer-motion';
import { Film, Sparkles, ShieldCheck, Mic2, Users, Tent } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: <Film className="w-6 h-6" />,
            title: "AI-Generated Film Content",
            description: "High-fidelity visuals, cinematic environments, and character animation designed to integrate seamlessly with traditional production."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "VFX & CGI Enhancements",
            description: "Automate color, compositing, and post workflows with AI augmentation so your teams can focus on direction and craft."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Ethical Deepfake Studio",
            description: "Craft consent-driven likeness models, de-aging, and synthetic doubles that meet legal and brand safety requirements."
        },
        {
            icon: <Mic2 className="w-6 h-6" />,
            title: "Avatar & Voice Lab",
            description: "Build multilingual avatars and personalized audio to keep your campaigns engaging across geographies and demographics."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Creator Collaborations",
            description: "Partner with our artists and engineers to prototype ideas, visualize concepts, and launch experimental storytelling."
        },
        {
            icon: <Tent className="w-6 h-6" />,
            title: "Immersive Experiences",
            description: "Extend your project into interactive, VR, and AR worlds with AI-assisted pipelines that accelerate iteration."
        }
    ];

    return (
        <section id="services" className="py-32 bg-black">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-emerald-400 text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                        What We Deliver
                    </span>
                    <h2 className="text-4xl md:text-6xl font-instrument-serif text-white tracking-tight italic">
                        AI-native production built for <br /> <span className="not-italic text-zinc-600">speed, scale, and story.</span>
                    </h2>
                    <p className="text-zinc-500 mt-6 text-lg font-light">
                        Every engagement is tailored, yet anchored in clear capabilities that keep your project on budget and on message.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:bg-zinc-900 transition-colors duration-500 group"
                        >
                            <div className="w-12 h-12 bg-zinc-800 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-black transition-all duration-500 shadow-lg shadow-black/20">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-instrument-serif text-white mb-4 italic group-hover:text-emerald-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed font-light text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
