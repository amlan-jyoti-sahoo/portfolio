import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { badges } from '../data/badges';
import TiltCard from './TiltCard';

const Badges = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 relative z-10" id="badges">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                        Google Developer Badges
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        Recognitions and milestones from my journey in the Google Developer ecosystem.
                    </p>

                    <motion.a 
                        href="https://developers.google.com/profile/u/amlanjyotisahoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full mt-8 group relative overflow-hidden"
                    >
                        <span className="relative z-10">Visit Google Developer Profile</span>
                        <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.a>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <TiltCard className="h-full bg-glass-dark border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-neon-blue/50 transition-colors duration-300">
                                <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                                    <img
                                        src={badge.image_url}
                                        alt={badge.title}
                                        className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {badge.title}
                                </h3>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Badges;
