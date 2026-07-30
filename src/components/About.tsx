import { useMemo, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// Animated counter
const AnimatedCounter = ({ value, suffix = '' }: { value: number | string, suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const numeric = typeof value === 'number' ? value : parseFloat(value as string);
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, { stiffness: 60, damping: 15 });

    useEffect(() => {
        if (inView && !isNaN(numeric)) {
            motionVal.set(numeric);
        }
    }, [inView, numeric, motionVal]);

    useEffect(() => {
        if (isNaN(numeric)) return;
        const unsubscribe = spring.on('change', (v) => {
            if (ref.current) ref.current.textContent = Math.round(v) + suffix;
        });
        return unsubscribe;
    }, [spring, suffix, numeric]);

    return <span ref={ref}>{typeof value === 'number' ? '0' + suffix : value}</span>;
};

const About = () => {
    const stats = [
        { label: "Years Exp", value: 3, suffix: "+", color: "text-neon-blue", glow: "shadow-neon-blue/30" },
        { label: "Projects", value: 15, suffix: "+", color: "text-neon-purple", glow: "shadow-neon-purple/30" },
        { label: "Tech Stack", value: 20, suffix: "+", color: "text-neon-pink", glow: "shadow-neon-pink/30" },
        { label: "Coffee", value: "∞", suffix: "", color: "text-neon-green", glow: "shadow-neon-green/30" },
    ];

    const coreSkills = [
        { name: "React Native", level: 95, color: "from-neon-blue to-neon-cyan" },
        { name: "Redux", level: 90, color: "from-neon-purple to-neon-blue" },
        { name: "TypeScript", level: 90, color: "from-neon-cyan to-neon-blue" },
        { name: "JavaScript", level: 92, color: "from-neon-yellow to-neon-green" },
        { name: "Java", level: 80, color: "from-neon-pink to-neon-purple" },
        { name: "Flutter", level: 75, color: "from-neon-cyan to-neon-purple" },
        { name: "Kotlin", level: 60, color: "from-neon-green to-neon-cyan" },
    ];

    const otherSkills = useMemo(() => ({
        "Frameworks": ["React Native", "Redux", "Zustand", "Re.Pack", "Flutter"],
        "Languages": ["TypeScript", "JavaScript", "Java", "Kotlin", "Dart"],
        "Core Concepts": ["Hooks", "REST APIs", "State Management", "Performance Optimization", "Debugging","Playstore/Appstore Deployment", ],
        "Libraries": ["Reanimated", "FlashList", "Juspay", "DigiLocker", "OCR", "Firebase"],
        "Tools": ["Git", "BitBucket", "Android Studio", "Xcode", "CodePush", "Jest", ],
        "Cloud": ["AWS (EC2, S3, IAM)"]
    }), []);

    const TAG_COLORS = [
        'border-neon-blue/30 text-neon-blue/80 hover:border-neon-blue/60 hover:bg-neon-blue/10',
        'border-neon-purple/30 text-neon-purple/80 hover:border-neon-purple/60 hover:bg-neon-purple/10',
        'border-neon-cyan/30 text-neon-cyan/80 hover:border-neon-cyan/60 hover:bg-neon-cyan/10',
        'border-neon-pink/30 text-neon-pink/80 hover:border-neon-pink/60 hover:bg-neon-pink/10',
        'border-neon-green/30 text-neon-green/80 hover:border-neon-green/60 hover:bg-neon-green/10',
        'border-neon-yellow/30 text-neon-yellow/80 hover:border-neon-yellow/60 hover:bg-neon-yellow/10',
    ];

    return (
        <section id="about" className="py-12 px-6 relative overflow-visible">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden glow-border-animate"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/3 blur-[120px] rounded-full pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                        
                        {/* Left Column: Bio & Core Skills */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-3xl font-bold mb-4"
                                >
                                    Digital{' '}
                                    <span className="shimmer-text">Architect</span>
                                </motion.h2>

                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="text-gray-400 text-sm leading-relaxed mb-6"
                                >
                                    I'm not just a coder; I'm a digital architect. With a deep passion for clean architecture and pixel-perfect design, I bridge the gap between complex backend logic and beautiful frontend experiences.
                                    My mission is simple: to build software that is not only functional but also delightful to use.
                                </motion.p>

                                {/* Animated Stats */}
                                <div className="grid grid-cols-4 gap-3 mb-8">
                                    {stats.map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.7, y: 20 }}
                                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i, type: 'spring', stiffness: 200 }}
                                            whileHover={{ scale: 1.08, y: -3 }}
                                            className={`text-center p-3 rounded-xl bg-white/5 border border-white/8 cursor-default`}
                                        >
                                            <div className={`text-2xl font-bold ${stat.color}`}>
                                                {typeof stat.value === 'number'
                                                    ? <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                                    : stat.value
                                                }
                                            </div>
                                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Core Skills Progress Bars */}
                            <div className="space-y-4">
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-neon-cyan inline-block" />
                                    Core Proficiency
                                </motion.h3>
                                {coreSkills.map((skill, index) => (
                                    <div key={skill.name} className="space-y-1.5">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                                className="text-gray-400"
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </div>
                                        <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.2 + (index * 0.08), ease: [0.22, 1, 0.36, 1] }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full skill-bar-glow`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Other Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/3 rounded-2xl p-6 border border-white/8 backdrop-blur-sm"
                        >
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-neon-purple inline-block" />
                                Technical Arsenal
                            </h3>
                            <div className="space-y-5">
                                {Object.entries(otherSkills).map(([category, skills], catIndex) => (
                                    <motion.div 
                                        key={category}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + (catIndex * 0.08) }}
                                    >
                                        <div className="text-xs text-neon-cyan/80 mb-2 font-mono flex items-center gap-1.5">
                                            <span className="w-1 h-3 rounded-sm bg-neon-cyan/60 inline-block" />
                                            {category}
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills.map((skill, si) => (
                                                <motion.span 
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.15 + si * 0.04 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className={`text-xs px-2.5 py-1 rounded-lg border bg-white/5 transition-all cursor-default ${TAG_COLORS[catIndex % TAG_COLORS.length]}`}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
