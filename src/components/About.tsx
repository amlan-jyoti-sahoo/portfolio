import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: "Years Experience", value: "3+", color: "text-neon-blue" },
        { label: "Projects Completed", value: "15+", color: "text-neon-purple" },
        { label: "Technologies", value: "20+", color: "text-neon-pink" },
        { label: "Coffee Consumed", value: "∞", color: "text-neon-green" },
    ];

    const skills = [
        "React Native", "TypeScript", "React", "Android Development", "Kotlin", "Flutter", "Dart", "Ios Development","Swift-UI", "Node.js", "AWS", "Firebase", "GitHub", "Git", 
    ];

    return (
        <section id="about" className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column: Creative/Interactive Visual */}
                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 glass-panel p-8 rounded-2xl border border-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        
                        <div className="font-mono text-sm space-y-4 text-gray-300">
                            <div>
                                <span className="text-neon-purple">const</span> <span className="text-neon-blue">developer</span> = <span className="text-white">{"{"}</span>
                            </div>
                            <div className="pl-4">
                                <div>name: <span className="text-neon-green">'Amlanjyoti Sahoo'</span>,</div>
                                <div>role: <span className="text-neon-green">'Software Engineer'</span>,</div>
                                <div>passion: [<span className="text-neon-green">'Clean UI'</span>, <span className="text-neon-green">'Performance'</span>],</div>
                                <div>status: <span className="text-neon-blue">BUILDING_THE_FUTURE</span></div>
                            </div>
                            <div><span className="text-white">{"}"}</span>;</div>
                        </div>

                        {/* Floating Morphing blobs behind */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 blur-3xl rounded-full bg-gradient-to-r from-neon-blue/40 to-neon-purple/40 animate-blob" />
                    </motion.div>
                </div>

                {/* Right Column: Content */}
                <div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-6"
                    >
                        Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Masterpieces</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed mb-8"
                    >
                        I'm not just a coder; I'm a digital architect. With a deep passion for clean architecture and pixel-perfect design, I bridge the gap between complex backend logic and beautiful frontend experiences.
                        <br /><br />
                        My mission is simple: to build software that is not only functional but also delightful to use.
                    </motion.p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="glass-panel p-4 rounded-xl text-center"
                            >
                                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (i * 0.05) }}
                                className="px-3 py-1 glass-panel rounded-full text-sm text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan/10 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
