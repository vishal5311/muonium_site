import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQSection = () => {
    const faqs = [
        {
            q: "Is synthetic media legally safe for global campaigns?",
            a: "Yes—when it is produced with the right permissions and disclosures. We operate with explicit consent, clear licensing, and guidance on responsible deployment for every project."
        },
        {
            q: "What is your typical turnaround for a generative sequence?",
            a: "Our pipeline delivers storyboards, initial renders, and voice tests within days. Fast iterations keep feedback loops tight and ideas aligned before we scale delivery."
        },
        {
            q: "Can you work with traditional live-action footage?",
            a: "Absolutely. Many partners tap us for hybrid workflows—augmenting existing footage with AI-driven enhancements, localized audio, or digital doubles to extend production value."
        }
    ];

    return (
        <section id="faq" className="py-32 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-24">
                    <span className="text-emerald-400 text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-6xl font-instrument-serif text-white tracking-tight italic">
                        Questions we <br /> <span className="not-italic text-zinc-600">hear the most.</span>
                    </h2>
                </div>

                <div className="space-y-4 max-w-4xl">
                    {faqs.map((faq, index) => (
                        <motion.details
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-zinc-900/50 rounded-2xl overflow-hidden transition-all duration-300 open:pb-6 border border-white/5 hover:border-emerald-400/20"
                        >
                            <summary className="flex justify-between items-center p-8 cursor-pointer list-none font-medium text-white hover:text-emerald-400 transition-colors">
                                <h3 className="text-xl md:text-2xl font-instrument-serif italic">{faq.q}</h3>
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                                    <Plus className="w-5 h-5" />
                                </div>
                            </summary>
                            <div className="px-8 pb-4">
                                <p className="text-zinc-400 font-light leading-relaxed max-w-3xl">
                                    {faq.a}
                                </p>
                            </div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
