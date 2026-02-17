import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink, Download, Newspaper, FileText } from 'lucide-react';

const Media = () => {
    const featuredArticles = [
        {
            badge: "Feature",
            icon: <Newspaper className="w-12 h-12" />,
            title: "How AI is resurrecting dead Indian politicians as elections loom",
            outlet: "Al Jazeera",
            date: "Feb 12, 2024",
            description: "Al Jazeera explores Muonium AI Studios' role in multilingual campaign content and the safeguards the team follows.",
            url: "https://www.aljazeera.com/economy/2024/2/12/how-ai-is-used-to-resurrect-dead-indian-politicians-as-elections-loom",
            color: "from-red-500/20 to-orange-500/20"
        },
        {
            badge: "Feature",
            icon: <Newspaper className="w-12 h-12" />,
            title: "AI companies are making millions producing election content in India",
            outlet: "Rest of World",
            date: "Jan 20, 2024",
            description: "Rest of World profiles Senthil Nayagam and the Muonium AI Studios team inside India's booming election AI ecosystem.",
            url: "https://restofworld.org/2024/india-elections-ai-content/",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            badge: "Global",
            icon: <Newspaper className="w-12 h-12" />,
            title: "AI is changing how elections are fought, from deepfake endorsements to chatbots",
            outlet: "ABC News (Australia)",
            date: "Feb 20, 2024",
            description: "ABC News covers Muonium AI Studios' work on ethical political outreach and the transparency measures behind each project.",
            url: "https://www.abc.net.au/news/science/2024-02-21/ai-elections-deepfakes-generative-campaign-endorsement-democracy/103483710",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            badge: "National",
            icon: <Newspaper className="w-12 h-12" />,
            title: "Dead leaders \"rise\" in Tamil Nadu as deepfake tools warp poll campaign",
            outlet: "NDTV (AFP)",
            date: "Apr 3, 2024",
            description: "NDTV/Afp highlights Muonium AI Studios' consent-driven likeness models for political storytelling.",
            url: "https://www.ndtv.com/india-news/late-jayalalithaa-karunanidhi-campaign-for-polls-amid-deepfake-surge-5365616",
            color: "from-green-500/20 to-emerald-500/20"
        },
        {
            badge: "Profile",
            icon: <FileText className="w-12 h-12" />,
            title: "Love You: AI மூலம் மட்டுமே உருவான தமிழ் படம்—Senthil Nayagam explains",
            outlet: "BBC News தமிழ்",
            date: "2025",
            description: "BBC News தமிழ் interviews Senthil on using AI to rethink production for cinema and branded content.",
            url: "https://www.bbc.com/tamil/articles/cevz0m74vm9o",
            color: "from-yellow-500/20 to-amber-500/20"
        },
        {
            badge: "Industry",
            icon: <FileText className="w-12 h-12" />,
            title: "Raanjhanaa reimagined: how AI is changing Indian films script to screen",
            outlet: "BOOM News",
            date: "Aug 22, 2025",
            description: "BOOM News follows Muonium AI Studios' cinematic pipelines and the safeguards used to deliver distribution-ready visuals.",
            url: "https://www.boomlive.in/law/raanjhanaa-reimagined-how-ai-is-changing-indian-films-script-to-screen-29308",
            color: "from-rose-500/20 to-red-500/20"
        }
    ];

    const broadcasts = [
        {
            title: "IndiaGlitz: AI editor interview on Kaavaalaa",
            description: "Senthil discusses the viral Simran/Tamannaah recreation and the craft behind cinematic deepfakes.",
            videoId: "2__freA62ro"
        },
        {
            title: "Sun News: DeepSeek and the next wave of AI",
            description: "A 2025 prime-time segment on how Muonium AI Studios evaluates new models and safeguards adoption.",
            videoId: "ECQdX0XJEEE"
        },
        {
            title: "Kumudam Reporter: Is AI essential or risky?",
            description: "Tamil interview covering responsible deployment, ethics, and opportunities for creators.",
            videoId: "XYfV0NEFhWw"
        },
        {
            title: "DW News: Inside India's AI-powered election stories",
            description: "International coverage of Muonium AI Studios' multilingual avatars and the safeguards that keep audiences informed.",
            videoId: "YUPNbbh82Sc"
        }
    ];

    const additionalCoverage = [
        { title: "Another AI deepfake: Tamannaah replaced by Simran in Jailer's Kaavaalaa song", outlet: "The News Minute", date: "Jul 13, 2023", url: "https://www.thenewsminute.com/tamil-nadu/another-ai-deepfake-tamannaah-replaced-simran-jailer-s-kaavaalaa-song-179689" },
        { title: "Morphed AI generated video of Simran on Tamannaah's dance video shocks netizens", outlet: "The Times of India", date: "Jul 15, 2023", url: "https://timesofindia.indiatimes.com/life-style/spotlight/morphed-ai-generated-video-of-simran-on-tamannaahs-dance-video-shocks-netizens/articleshow/101785183.cms" },
        { title: "AI used to resurrect dead Indian politician M. Karunanidhi ahead of elections", outlet: "SCREENSHOT Media", date: "Feb 12, 2024", url: "https://screenshot-media.com/politics/global-politics/ai-resurrect-dead-indian-politician-karunanidhi/" },
        { title: "Deepfake videos and images grow ahead of Indian polls, stirring unease", outlet: "The Straits Times", date: "Mar 8, 2024", url: "https://www.straitstimes.com/asia/south-asia/deepfake-videos-and-images-grow-ahead-of-indian-polls-stirring-unease" },
        { title: "Ghost in the machine: Deepfake tools warp India election", outlet: "France 24 (AFP)", date: "Apr 3, 2024", url: "https://www.france24.com/en/live-news/20240403-ghost-in-the-machine-deepfake-tools-warp-india-election" },
        { title: "Ghost in the machine: Deepfake tools warp India election", outlet: "Dawn (AFP)", date: "Apr 3, 2024", url: "https://www.dawn.com/news/1825444" },
        { title: "Can Deepfake Jeopardize Elections 2024? Startups Come Up With Coping Mechanism", outlet: "Entrepreneur India", date: "Apr 23, 2024", url: "https://www.entrepreneur.com/en-in/news-and-trends/can-deepfake-jeopardize-elections-2024-startups-come-up/473088" },
        { title: "Strategic Illusion: How AI is transforming Indian politics in the 2024 Lok Sabha elections", outlet: "Outlook India", date: "May 27, 2024", url: "https://www.outlookindia.com/national/strategic-illusion-how-ai-is-transforming-indian-political-landscape-in-the-run-up-to-2024-elections" },
        { title: "How AI is changing elections around the world", outlet: "NBC News", date: "Jun 6, 2024", url: "https://www.nbcnews.com/tech/tech-news/ai-changing-elections-world-rcna87329" },
        { title: "From politics to cinema: Senthil Nayagam on the power and pitfalls of AI in India", outlet: "Swarajya Magazine", date: "Apr 1, 2024", url: "https://swarajyamag.com/technology/from-politics-to-cinema-viral-ai-content-creator-senthil-nayagam-talks-power-and-pitfalls-of-ai-in-india" }
    ];

    return (
        <div className="bg-neutral-950 text-white selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden">
            <Navbar />

            <main className="pt-32">
                {/* Hero Carousel Style */}
                <section className="pb-20">
                    <div className="container mx-auto px-6 md:px-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="inline-block px-4 py-2 bg-rose-500/10 text-rose-400 text-xs font-medium rounded-full mb-6 uppercase tracking-wider">
                                Media Coverage
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                Muonium AI Studios<br />in the news.
                            </h1>
                            <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">
                                Broadcasters, business journals, and tech outlets spotlight how the Muonium AI Studios team is shaping ethical synthetic media—from campaigning deepfakes to multilingual avatars and film collaborations.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="mailto:senthil@muonium.ai"
                                    className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all"
                                >
                                    Press inquiry
                                </a>
                                <a
                                    href="#featured"
                                    className="px-8 py-4 border border-neutral-700 rounded-full font-medium hover:bg-neutral-900 transition-all"
                                >
                                    Browse highlights
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Horizontal Scroll - Featured Articles */}
                    <div id="featured" className="relative">
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-[10%] pb-8 hide-scrollbar">
                            {featuredArticles.map((article, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[600px] bg-neutral-900 rounded-3xl border border-neutral-800 flex flex-col overflow-hidden group hover:border-neutral-700 transition-all"
                                >
                                    {/* Header */}
                                    <div className="p-8 flex justify-between items-start">
                                        <div className={`h-12 w-12 bg-gradient-to-br ${article.color} rounded-2xl flex items-center justify-center text-white`}>
                                            {article.icon}
                                        </div>
                                        <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-xs font-medium rounded-full uppercase tracking-wider">
                                            {article.badge}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 px-8 flex flex-col">
                                        <h3 className="text-2xl font-semibold tracking-tight mb-4 leading-tight group-hover:text-rose-400 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-neutral-400 text-sm mb-6 leading-relaxed flex-1">
                                            {article.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-neutral-500 mb-6">
                                            <span className="font-medium">{article.outlet}</span>
                                            <span>{article.date}</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="p-8 pt-0">
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all"
                                        >
                                            Read article
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Download Press Kit Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[600px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl border border-neutral-700 flex flex-col items-center justify-center p-8 text-center"
                            >
                                <Download className="w-16 h-16 text-rose-400 mb-6" />
                                <h3 className="text-3xl font-bold mb-4">Press Resources</h3>
                                <p className="text-neutral-400 mb-8 max-w-sm">
                                    Download logos, brand guidelines, and executive bios.
                                </p>
                                <a
                                    href="/assets/press-kit/muonium-press-kit.zip"
                                    download
                                    className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all inline-flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download press kit
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* TV & Broadcast - Grid Layout */}
                <section className="py-20 bg-zinc-950">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-rose-400 text-sm font-medium tracking-[0.3em] uppercase">TV & Broadcast</span>
                            <h2 className="text-4xl md:text-5xl font-instrument-serif mt-4 mb-6">Interviews and coverage captured on air.</h2>
                            <p className="text-zinc-500 max-w-2xl mx-auto">Swap the sample embeds with your actual TV clips, podcast videos, or webinar recordings to showcase Muonium AI Studios in action.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {broadcasts.map((broadcast, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${broadcast.videoId}`}
                                            title={broadcast.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">{broadcast.title}</h3>
                                        <p className="text-zinc-400 text-sm">{broadcast.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Coverage - Black & White Theme */}
                <section className="py-32 bg-black">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="mb-16">
                            <span className="inline-block bg-white/10 border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">
                                Additional Coverage
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[0.95]">
                                More stories from
                                <span className="font-instrument-serif italic font-medium"> around the globe.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {additionalCoverage.map((item, index) => (
                                <motion.details
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group bg-neutral-900 rounded-2xl overflow-hidden transition-all duration-300 open:pb-4 border border-neutral-800 hover:border-neutral-700"
                                >
                                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-white hover:text-rose-400">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                                            <div className="flex items-center gap-4 text-xs text-neutral-500">
                                                <span className="font-medium">{item.outlet}</span>
                                                <span>•</span>
                                                <span>{item.date}</span>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 ml-4">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M10 5v10M5 10h10" />
                                            </svg>
                                        </div>
                                    </summary>
                                    <div className="px-6">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all"
                                        >
                                            Read full article
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Media;
