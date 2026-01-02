import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cloud, Globe } from 'lucide-react';
import TiltCard from './TiltCard';
import ProjectModal from './ProjectModal';

const projects = {
    company: [
        {
            title: "Digit Insurance",
            company: "Go Digit General Insurance",
            logo: "/digit-insurance-icon.png", 
            color: "bg-black",
            storeLinks: { 
                ios: "https://apps.apple.com/in/app/digit-insurance/id1453841964", 
                android: "https://play.google.com/store/apps/details?id=com.godigit.digit&hl=en_IN" 
            },
            highlights: ["KYC", "OCR", "Payment Gateway", "TS Migration", "Super App", "Life Insurance Module"],
            desc: "Spearheaded the development of core insurance modules including Life Insurance from scratch. Led the TypeScript migration and integrated critical features like KYC, OCR, and Payment Gateways into the Super App ecosystem.",
            detailedDesc: "As a core developer for the Digit Insurance Super App, I led the complete lifecycle development of the Life Insurance module, building it from the ground up. I also managed a critical migration of the codebase to TypeScript, significantly improving reliability and maintainability. My role involved integrating complex third-party services for KYC (Know Your Customer) and OCR (Optical Character Recognition) to streamline user onboarding, as well as hardening the Payment Gateway integration for secure transactions.",
            techStack: ["React Native", "TypeScript", "Redux Saga", "Java (Android Native)", "Swift (iOS Native)", "REST APIs"],
            achievements: [
                "Built the Life Insurance module from scratch, driving a 15% increase in policy sales.",
                "Successfully migrated 100+ screens to TypeScript, reducing runtime errors by 40%.",
                "Optimized the OCR document upload process, reducing user drop-off during KYC by 20%."
            ]
        },
        {
            title: "Digit Workshop App",
            company: "Go Digit General Insurance",
            logo: "/digit-workshop.png",
            color: "bg-black",
            storeLinks: {
                ios: "https://apps.apple.com/in/app/digit-insurance/id1453841964",
                android: "https://play.google.com/store/apps/details?id=com.godigit.digitworkshop&hl=en_IN"
            },
            desc: "Streamlined workshop operations for faster claim processing and vehicle service management.",
            highlights: ["Native Java project", "project upgrade migration", "Sdk 35 migration", "16 kb memory page size optimization"],
            detailedDesc: "Worked on the specialized Digit Workshop App, a tool designed for partner garages to manage claims and services efficiently. My primary focus was on modernizing the legacy codebase, including a major upgrade to Native Java and migrating to SDK 35 to ensure compliance with the latest Play Store requirements. I also tackled performance bottlenecks, notably optimizing memory page sizing to 16kb.",
            techStack: ["Java (Android)", "XML Layouts", "Gradle", "Android SDK 35", "Memory Profiling"],
            achievements: [
                "Completed the SDK 35 migration ahead of the deadline, ensuring uninterrupted app availability.",
                "Optimized memory usage with 16kb page size alignment, improving app stability on lower-end devices.",
                "Refactored legacy code to improve build times by 25%."
            ]
        },
        {
            title: "Digit Partner App",
            company: "Go Digit General Insurance",
            logo: "/digit-partner.png",
            color: "bg-black",
            storeLinks: { 
                ios: "https://apps.apple.com/in/app/digit-partner/id1629409793", 
                android: "https://play.google.com/store/apps/details?id=com.godigit.posp&hl=en_IN" 
            },
            desc: "Empowering partners with a dedicated mobile solution for managing policies and claims.",
            highlights: ["Webview addition", "Camera App optimization"],
            detailedDesc: "Collaborated on the Digit Partner App, enabling insurance agents to issue policies on the go. I implemented a robust WebView bridge to support dynamic web-based flows within the native app wrapper and optimized the custom camera module for faster document scanning and uploading.",
            techStack: ["React Native", "WebView Bridge", "Android/iOS Camera APIs", "JavaScript"],
            achievements: [
                "Integrated a seamless WebView interface that allowed instant deployment of new insurance products without app updates.",
                "Optimized the in-app camera, reducing image capture and processing latency by 30%."
            ]
        },
        
        {
            title: "LTIMindtree",
            company: "LTIMindtree Ltd.",
            logo: "/ltimindtree.png",
            color: "bg-black",
            storeLinks: { ios: "#", android: "#" },
            desc: "Delivered enterprise-scale digital solutions for global clients.",
            highlights: ["Amazon Web Services", "Cloud Technology"],
            customIcons: [
                { type: "web", url: "https://www.ltimindtree.com/", title: "Web Solutions" },
                { type: "cloud", url: "https://www.ltimindtree.com/", title: "Cloud Services" }
            ],
            detailedDesc: "At LTIMindtree, I worked on large-scale digital transformation projects for global enterprise clients. My work focused on leveraging Cloud Technologies and Amazon Web Services (AWS) to build scalable, resilient, and high-performance web solutions. I participated in architectural decisions and implemented best practices for cloud-native development.",
            techStack: ["AWS (Lambda, S3, EC2)", "React", "Node.js", "Microservices", "Docker"],
            achievements: [
                "Contributed to the migration of a legacy on-premise application to AWS, resulting in 99.9% uptime.",
                "Developed reusable UI components for a global design system used across multiple client projects."
            ]
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

const CompanyCard = ({ 
    project, 
    isHovered, 
    onHover, 
    onLeave,
    onSelect
}: { 
    project: any, 
    isHovered: boolean, 
    onHover: () => void, 
    onLeave: () => void,
    onSelect: () => void
}) => {
    return (
        <motion.div
            layout
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ layout: { duration: 0.4, type: "spring", bounce: 0.2 } }}
            className={`
                relative rounded-2xl overflow-hidden glass-panel border-transparent hover:border-neon-blue/30 transition-colors duration-300
                flex flex-col lg:flex-row items-center cursor-pointer group
                ${isHovered ? 'lg:flex-[3]' : 'lg:flex-1'}
                h-[480px] lg:h-[380px]
            `}
            onClick={() => {
                // If it's already hovered or on mobile, clicking should open details
                // Otherwise (on desktop), first click usually just expands if not hovered, but here we hover to expand.
                // Let's make interaction simple: clicking always opens details.
                onSelect();
            }}
        >
            <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

            {/* Default State: Icon & Title (Always visible, shifts layout) */}
            <motion.div layout className="flex flex-col items-center justify-between py-8 px-6 w-full lg:w-auto flex-1 min-w-0 h-full z-10 gap-2">
                <div className="flex flex-col items-center gap-4 w-full">
                    <div className={`w-20 h-20 ${project.color} rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-neon transition-all overflow-hidden relative flex-shrink-0`}>
                        {project.logo.startsWith('http') || project.logo.startsWith('/') ? (
                            <div className="w-full h-full p-2 bg-black flex items-center justify-center">
                                <img 
                                    src={project.logo} 
                                    alt={project.title} 
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.nextElementSibling?.classList.remove('hidden');
                                    }} 
                                />
                                <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-800 font-bold">
                                    {project.title.substring(0, 2).toUpperCase()}
                                </div>
                            </div>
                        ) : (
                            project.logo
                        )}
                    </div>
                    
                    <div className="text-center">
                        <motion.h3 layout="position" className="text-xl font-bold mb-1 whitespace-nowrap">{project.title}</motion.h3>
                        <motion.p layout="position" className="text-gray-400 text-sm">{project.company}</motion.p>
                    </div>
                </div>
                
                {/* Highlights / Tags (Visible in default view) */}
                {project.highlights && (
                    <motion.div layout className="flex flex-wrap justify-center gap-2 max-w-[240px] my-2">
                        {project.highlights.map((tag: string, i: number) => (
                            <span 
                                key={i} 
                                className="px-2 py-1 text-[9px] uppercase tracking-wider font-semibold rounded bg-white/5 text-gray-400 border border-white/5"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                )}

                {/* Store Links / Custom Icons (Always visible) */}
                <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity z-20" onClick={(e) => e.stopPropagation()}>
                    {/* Note: stopPropagation added to prevent modal open when clicking links */}
                    {project.customIcons ? (
                         project.customIcons.map((icon: any, i: number) => (
                            <a key={i} href={icon.url} target="_blank" rel="noopener noreferrer" className={`transition-colors ${icon.type === 'web' ? 'hover:text-neon-blue' : 'hover:text-neon-green'}`} title={icon.title}>
                                {icon.type === 'web' && <Globe className="w-6 h-6" />}
                                {icon.type === 'cloud' && <Cloud className="w-6 h-6" />}
                            </a>
                        ))
                    ) : (
                        <>
                            <a href={project.storeLinks.ios != "#" ? project.storeLinks.ios : undefined} target="_blank" rel="noopener noreferrer" className={`hover:text-neon-blue transition-colors ${project.storeLinks.ios == "#" ? "pointer-events-none opacity-50" : ""}`} title="App Store">
                                <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 49.7-25.2 69.2 26.2 2 55.4-15.6 69.1-31.6z"/>
                                </svg>
                            </a>
                            <a href={project.storeLinks.android != "#" ? project.storeLinks.android : undefined} target="_blank" rel="noopener noreferrer" className={`hover:text-neon-green transition-colors ${project.storeLinks.android == "#" ? "pointer-events-none opacity-50" : ""}`} title="Play Store">
                                <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                                </svg>
                            </a>
                        </>
                    )}
                </div>
            </motion.div>

            {/* Expanded Content: Description Only */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex-1 p-6 border-l border-white/10 flex flex-col justify-center h-full min-w-[250px] overflow-hidden"
                    >
                        <h4 className="text-lg font-bold text-neon-blue mb-4">About the Role</h4>
                        <p className="text-gray-300 text-sm text-left leading-relaxed line-clamp-4">
                            {project.desc || "Key contributions and development work for this enterprise application."}
                        </p>
                        
                        {/* Fake "View Details" CTA - now triggers the modal via parent click */}
                        <div className="mt-8 flex items-center text-sm font-bold text-neon-purple group-hover:translate-x-2 transition-transform cursor-pointer">
                            View Details <ExternalLink size={14} className="ml-2" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<any>(null);

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

                {/* Company Projects Section - Expandable Cards */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold mb-12 flex items-center gap-4 text-white/90">
                        <span className="w-12 h-px bg-neon-blue"></span>
                        Professional Experience
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {projects.company.map((project, index) => (
                            <CompanyCard 
                                key={index} 
                                project={project} 
                                isHovered={hoveredIndex === index}
                                onHover={() => setHoveredIndex(index)}
                                onLeave={() => setHoveredIndex(null)}
                                onSelect={() => setSelectedProject(project)}
                            />
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

            {/* Project Details Modal */}
            <ProjectModal 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
};

export default Projects;
