import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Go Digit General Insurance",
        date: "2023 - Present",
        location: "Bengaluru, India",
        description: "Spearheaded the development of core insurance modules including Life Insurance from scratch. Led the TypeScript migration and integrated critical features like KYC, OCR, and Payment Gateways into the Super App ecosystem.",
        skills: ["React Native", "TypeScript", "Redux Saga", "Java", "Swift"],
        logo: "https://media.licdn.com/dms/image/v2/C560BAQFm8-aXvQnQ8g/company-logo_200_200/company-logo_200_200/0/1630646194273?e=2147483647&v=beta&t=H-3Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0" // Placeholder or mapped from assets if valid
    },
    {
        id: 2,
        role: "Software Engineer Intern",
        company: "LTIMindtree",
        date: "2023",
        location: "Pune, India",
        description: "Worked on large-scale digital transformation projects for global enterprise clients. Leveraged Cloud Technologies and AWS to build scalable web solutions.",
        skills: ["AWS", "React", "Node.js", "Microservices"],
        logo: "https://media.licdn.com/dms/image/v2/C560BAQG1_1_1_1/company-logo_200_200/company-logo_200_200/0/1630646194273?e=2147483647&v=beta&t=H-3Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0" 
    },
    {
        id: 3,
        role: "GDSC Android Lead",
        company: "Google Developer Student Clubs",
        date: "2022",
        location: "Bhubaneswar, India",
        description: "Led a community of student developers, focused on Android Development with Kotlin. Organized workshops, hackathons, and study jams to foster technical growth on campus.",
        skills: ["Android", "Kotlin", "Java", "Community Building", "Public Speaking"],
        logo: "" 
    }
];

const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${index === 0 ? 'border-neon-blue bg-neon-blue shadow-[0_0_10px_rgba(5,213,250,0.5)]' : 'border-gray-600 bg-black'}`} />
            </div>
            
             {/* Timeline Line (Mobile) */}
             <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10">
                <div className={`absolute top-8 left-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${index === 0 ? 'border-neon-blue bg-neon-blue shadow-[0_0_10px_rgba(5,213,250,0.5)]' : 'border-gray-600 bg-black'}`} />
            </div>

            <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date/Period (Desktop: Opposite side) */}
                <div className={`hidden md:block w-1/2 pt-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <span className="text-neon-cyan font-mono text-sm tracking-wider inline-flex items-center gap-2">
                        <Calendar size={14} /> {experience.date}
                    </span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 mb-12 relative">
                     <div className={`absolute top-8 ${index % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'} hidden md:block w-8 h-px bg-white/10`} />

                    <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                                {/* Use first letter if no logo, or try to load logo */}
                                <span className="text-xl font-bold text-gray-400">{experience.company.charAt(0)}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{experience.role}</h3>
                                <div className="text-gray-400 font-medium">{experience.company}</div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                    <span className="md:hidden flex items-center gap-1"><Calendar size={12} /> {experience.date}</span>
                                    <span className="flex items-center gap-1"><MapPin size={12} /> {experience.location}</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill: string, i: number) => (
                                <span key={i} className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-gray-400">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Journey</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
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
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center mt-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-blue/50 transition-all duration-300 backdrop-blur-sm"
                        >
                            <span className="text-white font-semibold text-sm">
                                {showAll ? "Show Less" : "View More Experience"}
                            </span>
                            {showAll ? (
                                <ChevronUp size={16} className="text-neon-blue group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown size={16} className="text-neon-blue group-hover:translate-y-1 transition-transform" />
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Experience;
