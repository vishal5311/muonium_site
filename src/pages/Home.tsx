import Hero from '../components/Hero';
import DivisionSection from '../components/DivisionSection';
import EthicsSection from '../components/EthicsSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />

                <div id="divisions">
                    <DivisionSection
                        id="studios"
                        title="Muonium AI Studios"
                        subtitle="Cinematic AI Division"
                        description="Cinematic storytelling for campaigns, creators, and studios. We blend high-end art direction with intelligent automation."
                        services={[
                            "AI-Generated Film Content",
                            "Ethical Deepfake Studio",
                            "Digital Avatars",
                            "AI Voice & Audio",
                            "Campaign Localization",
                            "Rapid Previsualization"
                        ]}
                        backgroundMode="studios"
                        imageUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2670&auto=format&fit=crop"
                    />

                    <DivisionSection
                        id="gaming"
                        title="Muonium AI Gaming"
                        subtitle="Interactive Worlds Division"
                        description="AI-generated game environments and production-ready assets. Creating procedural complexity with artistic control."
                        services={[
                            "Procedural Worlds",
                            "3D Environments",
                            "Unreal & Unity Assets",
                            "NPC Dialogue Systems",
                            "Cinematic Game Trailers"
                        ]}
                        backgroundMode="gaming"
                        imageUrl="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
                    />

                    <DivisionSection
                        id="tech"
                        title="Muonium AI Tech"
                        subtitle="Infrastructure Division"
                        description="AI-powered software and infrastructure. Building the tools that drive the next generation of creative platforms."
                        services={[
                            "Web Apps",
                            "Mobile Apps",
                            "SaaS Platforms",
                            "Open Source Tools",
                            "API Systems",
                            "AI Automation"
                        ]}
                        backgroundMode="tech"
                        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop"
                    />
                </div>

                <EthicsSection />

                <section id="faq" className="py-32 bg-black">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-2xl mx-auto text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-instrument-serif text-white mb-6 italic">Frequently Asked Questions</h2>
                            <p className="text-zinc-500 font-light">Understanding the bridge between intelligence and creation.</p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-8">
                            {[
                                { q: "How does Muonium AI handle IP rights?", a: "All projects completed with Muonium AI include full commercial rights transfer to the client, backed by our ethical data sourcing guarantee." },
                                { q: "Can you integrate with existing studio pipelines?", a: "Yes, our Tech division specializes in custom API integrations and plugin development for Unreal Engine, Unity, and Adobe Creative Cloud." },
                                { q: "What is your approach to AI Ethics?", a: "We maintain a 'Human-in-the-loop' philosophy. AI accelerates the process, but creative direction remains firmly in the hands of human masters." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-900 group"
                                >
                                    <h3 className="text-xl font-medium text-white mb-4 group-hover:text-emerald-400 transition-colors">{item.q}</h3>
                                    <p className="text-zinc-500 font-light leading-relaxed">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
