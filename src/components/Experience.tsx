import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Go Digit General Insurance",
        date: "2023 - Present",
        location: "Bengaluru, India",
        description: "Spearheaded the development of core insurance modules including Life Insurance from scratch. Led the TypeScript migration and integrated critical features like KYC, OCR, and Payment Gateways into the Super App ecosystem.",
        skills: ["React Native", "TypeScript", "Redux Saga", "Java", "Swift"],
        color: "neon-blue",
    },
    {
        id: 2,
        role: "Software Engineer Intern",
        company: "LTIMindtree",
        date: "2023",
        location: "Pune, India",
        description: "Worked on large-scale digital transformation projects for global enterprise clients. Leveraged Cloud Technologies and AWS to build scalable web solutions.",
        skills: ["AWS", "React", "Node.js", "Microservices"],
        color: "neon-purple",
    },
    {
        id: 3,
        role: "GDSC Android Lead",
        company: "Google Developer Student Clubs",
        date: "2022",
        location: "Bhubaneswar, India",
        description: "Led a community of student developers, focused on Android Development with Kotlin. Organized workshops, hackathons, and study jams to foster technical growth on campus.",
        skills: ["Android", "Kotlin", "Java", "Community Building", "Public Speaking"],
        color: "neon-cyan",
    }
];

const SKILL_COLOR_MAP: Record<string, string> = {
    "neon-blue": "border-neon-blue/30 text-neon-blue/80 bg-neon-blue/8",
    "neon-purple": "border-neon-purple/30 text-neon-purple/80 bg-neon-purple/8",
    "neon-cyan": "border-neon-cyan/30 text-neon-cyan/80 bg-neon-cyan/8",
};

const DOT_COLOR_MAP: Record<string, string> = {
    "neon-blue": "bg-neon-blue border-neon-blue shadow-[0_0_12px_rgba(99,102,241,0.8)]",
    "neon-purple": "bg-neon-purple border-neon-purple shadow-[0_0_12px_rgba(167,139,250,0.8)]",
    "neon-cyan": "bg-neon-cyan border-neon-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)]",
};

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
    const isEven = index % 2 === 0;
    return (
        <motion.div 
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
                    className={`absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 timeline-dot-pulse ${DOT_COLOR_MAP[experience.color]}`}
                />
            </div>
            
            {/* Timeline Line (Mobile) */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent">
                <div className={`absolute top-8 left-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${DOT_COLOR_MAP[experience.color]}`} />
            </div>

            <div className={`md:flex items-start justify-between gap-10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date/Period (Desktop) */}
                <div className={`hidden md:block w-1/2 pt-8 ${isEven ? 'text-left pl-10' : 'text-right pr-10'}`}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="text-neon-cyan font-mono text-sm tracking-wider inline-flex items-center gap-2"
                    >
                        <Calendar size={14} /> {experience.date}
                    </motion.span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 mb-12 relative">
                    <div className={`absolute top-8 ${isEven ? 'right-full mr-4' : 'left-full ml-4'} hidden md:block w-6 h-px bg-gradient-to-r from-white/20 to-transparent`} />

                    <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className="gradient-border-card glass-panel p-6 rounded-2xl group cursor-default"
                    >
                        {/* Top accent line */}
                        <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-${experience.color}/60 to-transparent rounded-full`} />

                        <div className="flex items-start gap-4 mb-4">
                            <motion.div
                                whileHover={{ rotate: 15 }}
                                className={`w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0 bg-gradient-to-br from-white/8 to-transparent`}
                            >
                                <Briefcase size={20} className="text-gray-300" />
                            </motion.div>
                            <div>
                                <h3 className={`text-xl font-bold text-white group-hover:text-${experience.color} transition-colors duration-300`}>
                                    {experience.role}
                                </h3>
                                <div className="text-gray-300 font-medium text-sm">{experience.company}</div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                    <span className="md:hidden flex items-center gap-1"><Calendar size={12} /> {experience.date}</span>
                                    <span className="flex items-center gap-1"><MapPin size={12} /> {experience.location}</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                            {experience.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * i }}
                                    whileHover={{ scale: 1.08 }}
                                    className={`px-2.5 py-1 text-[10px] border rounded-lg font-mono transition-all ${SKILL_COLOR_MAP[experience.color]}`}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

    return (
        <section id="journey" className="py-20 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan/70 border border-neon-cyan/20 rounded-full px-4 py-1.5 mb-4 bg-neon-cyan/5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                        Career Timeline
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional{' '}
                        <span className="shimmer-text">Journey</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-lg mx-auto">
                        My career path and the milestones I've achieved along the way.
                    </p>
                </motion.div>

                <div className="relative">
                    <AnimatePresence>
                        {visibleExperiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} experience={exp} index={index} />
                        ))}
                    </AnimatePresence>
                </div>

                {experiences.length > 2 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-8"
                    >
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/12 hover:bg-neon-blue/10 hover:border-neon-blue/40 transition-all duration-300 backdrop-blur-sm"
                        >
                            <span className="text-white font-semibold text-sm">
                                {showAll ? "Show Less" : "View More Experience"}
                            </span>
                            {showAll ? (
                                <ChevronUp size={16} className="text-neon-blue group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown size={16} className="text-neon-blue group-hover:translate-y-1 transition-transform" />
                            )}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Experience;
