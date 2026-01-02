import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = {
    company: [
        {
            title: "Digit Insurance",
            company: "Go Digit General Insurance",
            logo: "/digit-insurance-icon.png", 
            color: "bg-black", // Match the logo's black background
            storeLinks: { 
                ios: "https://apps.apple.com/in/app/digit-insurance/id1453841964", 
                android: "https://play.google.com/store/apps/details?id=com.godigit.digit&hl=en_IN" 
            },
            highlights: ["KYC", "OCR", "Payment Gateway", "TS Migration", "Super App", "Life Insurance Module"]
        },
        {
            title: "Digit Partner App",
            company: "Go Digit General Insurance",
            logo: "/digit-partner.png",
            color: "bg-black",
            storeLinks: { 
                ios: "https://apps.apple.com/in/app/digit-partner/id1629409793", 
                android: "https://play.google.com/store/apps/details?id=com.godigit.posp&hl=en_IN" 
            }
        },
        {
            title: "Digit Workshop App",
            company: "Go Digit General Insurance",
            logo: "/digit-workshop.png",
            color: "bg-black",
            storeLinks: { 
                ios: "https://apps.apple.com/in/app/digit-insurance/id1453841964", 
                android: "https://play.google.com/store/apps/details?id=com.godigit.digitworkshop&hl=en_IN" 
            }
        },
        {
            title: "LTIMindtree",
            company: "LTIMindtree Ltd.",
            logo: "/ltimindtree.png",
            color: "bg-black",
            storeLinks: { ios: "#", android: "#" }
        }
    ],
    personal: [
        {
            title: "AI Code Assistant",
            desc: "A VS Code extension that uses AI to suggest code improvements.",
            tech: ["TypeScript", "OpenAI API", "React"],
            links: { github: "#", demo: "#" },
            video: null // Placeholder for video/gif
        },
        {
            title: "Crypto Dashboard",
            desc: "Real-time cryptocurrency tracking dashboard with advanced charts.",
            tech: ["Next.js", "Tailwind", "Recharts"],
            links: { github: "#", demo: "#" },
            video: null
        },
        {
            title: "3D Portfolio V1",
            desc: "Previous version of my portfolio using Three.js and WebGL.",
            tech: ["Three.js", "React Three Fiber"],
            links: { github: "#", demo: "#" },
            video: null
        }
    ]
};

const CompanyCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group border-transparent hover:border-neon-blue/30 transition-all duration-300 relative overflow-hidden"
    >
    <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
        
        <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:shadow-neon transition-all overflow-hidden relative`}>
            {project.logo.startsWith('http') || project.logo.startsWith('/') ? (
                <>
                    <img 
                        src={project.logo} 
                        alt={project.title} 
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }} 
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-800 font-bold">
                        {project.title.substring(0, 2).toUpperCase()}
                    </div>
                </>
            ) : (
                project.logo
            )}
        </div>
        
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.company}</p>

        {/* Project Highlights / Tags */}
        {project.highlights && (
            <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-[280px]">
                {project.highlights.map((tag: string, i: number) => (
                    <span 
                        key={i} 
                        className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:border-white/20 transition-colors cursor-default"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        )}
        
        <div className="flex gap-4 mt-auto opacity-60 group-hover:opacity-100 transition-opacity">
            <a href={project.storeLinks.ios} target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors" title="App Store">
                 {/* Apple Logo SVG */}
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 49.7-25.2 69.2 26.2 2 55.4-15.6 69.1-31.6z"/>
                </svg>
            </a>
            <a href={project.storeLinks.android} target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors" title="Play Store">
                 {/* Google Play Logo SVG */}
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
            </a>
        </div>
    </motion.div>
);

const PersonalCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <TiltCard className="group relative rounded-2xl bg-bg-dark border border-white/5 hover:border-neon-purple/50 transition-colors duration-500 h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
            >
                 {/* Continuous Floating / Breathing Animation for the card content */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1.5 }}
                    className="relative h-full flex flex-col"
                >
                    {/* Video Placeholder Area */}
                    <div className="h-48 bg-black/50 relative overflow-hidden rounded-t-2xl group-hover:shadow-[0_0_30px_rgba(188,19,254,0.2)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10" />
                        
                        {/* Animated Gradient Placeholder if no video */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 animate-blob mix-blend-overlay" />
                        
                        {/* Preview Badge */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <span className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 text-white shadow-lg">View Project</span>
                        </div>
                    </div>

                    <div className="p-6 relative z-10 flex-grow flex flex-col">
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{project.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-white/5 text-gray-400 border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-white/5">
                            <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                <Github size={16} /> <span className="text-xs uppercase tracking-widest">Code</span>
                            </a>
                            <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-neon-pink transition-colors ml-auto">
                                <ExternalLink size={16} /> <span className="text-xs uppercase tracking-widest">Live Demo</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </TiltCard>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 relative overflow-hidden">
             {/* Background decorative elements for the section */}
             <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Highlights from my journey in building digital products.
                    </p>
                </motion.div>

                {/* Company Projects Section */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold mb-12 flex items-center gap-4 text-white/90">
                        <span className="w-12 h-px bg-neon-blue"></span>
                        Professional Experience
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projects.company.map((project, index) => (
                            <CompanyCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Personal Projects Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-12 flex items-center gap-4 text-white/90">
                        <span className="w-12 h-px bg-neon-purple"></span>
                        Personal Innovations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[2000px]">
                        {projects.personal.map((project, index) => (
                            <PersonalCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
