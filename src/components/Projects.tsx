import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cloud, Globe } from 'lucide-react';
import ProjectModal from './ProjectModal';
import indiStep1 from '../assets/videos/indi-step-1.mp4';
import indiStep2 from '../assets/videos/indi-step-2.mp4';
import indiStep3 from '../assets/videos/indi-step-3.mp4';

const projects = {
    company: [
        {
            title: "Digit Insurance",
            company: "Go Digit General Insurance",
            logo: `${import.meta.env.BASE_URL}digit-insurance-icon.png`, 
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
            logo: `${import.meta.env.BASE_URL}digit-workshop.png`,
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
            logo: `${import.meta.env.BASE_URL}digit-partner.png`,
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
            logo: `${import.meta.env.BASE_URL}ltimindtree.png`,
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
            <AnimatePresence mode="wait">
                {isHovered && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20, width: 0, minWidth: 0 }}
                        animate={{ 
                            opacity: 1, 
                            x: 0, 
                            width: "auto",
                            minWidth: "250px",
                            transition: { duration: 0.3, delay: 0.1 } 
                        }}
                        exit={{ 
                            opacity: 0, 
                            x: 20, 
                            width: 0,
                            minWidth: 0,
                            transition: { duration: 0.2, delay: 0 } 
                        }}
                        className="flex-1 p-6 border-l border-white/10 flex flex-col justify-center gap-6 h-full overflow-hidden whitespace-normal"
                    >
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-neon-blue">About the Role</h4>
                            <p className="text-gray-300 text-sm text-left leading-relaxed">
                                {project.desc || "Key contributions and development work for this enterprise application."}
                            </p>
                        </div>
                        
                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold flex items-center justify-center gap-2 shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/40 transition-shadow"
                        >
                            Explore Project <ExternalLink size={16} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};




const PersonalProjectShowcase = () => {
    const steps = [
        { video: indiStep1, label: "Step 1: Identity" },
        { video: indiStep2, label: "Step 2: Verification" },
        { video: indiStep3, label: "Step 3: Approval" }
    ];

    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden relative group hover:border-neon-purple/50 transition-colors duration-500">
            <div className="flex flex-col xl:flex-row gap-10">
                {/* Videos Section - Displayed side by side */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-2xl bg-black/50 border border-white/5 group-hover:shadow-neon-purple/20 transition-all duration-500">
                             {/* Number Badge */}
                             <div className="absolute top-3 left-3 z-10">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-purple/20 backdrop-blur-md border border-neon-purple/50 text-white font-bold text-sm shadow-[0_0_10px_rgba(188,19,254,0.3)]">
                                    {index + 1}
                                </span>
                            </div>
                            
                            <video 
                                src={step.video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 min-h-[300px]"
                            />
                            
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-sm font-medium text-center">{step.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Description Section - Right Side */}
                <div className="xl:w-[400px] flex flex-col justify-center space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-xs font-bold uppercase tracking-widest border border-neon-purple/20">
                                Featured Project
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                            Identity <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">Verification Flow</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            A seamless, three-step identity verification process designed for high-conversion user onboarding. 
                            This flow integrates real-time video capture, liveness detection, and document scanning into a unified, 
                            user-friendly interface.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
                            <p className="text-sm text-gray-300"><span className="text-white font-semibold">Step 1:</span> User captures initial identity reference.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
                            <p className="text-sm text-gray-300"><span className="text-white font-semibold">Step 2:</span> Automated processing and validation.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
                            <p className="text-sm text-gray-300"><span className="text-white font-semibold">Step 3:</span> Final confirmation and approval.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {["React Native", "VisionCamera", "TensorFlow", "Reanimated"].map((tech) => (
                            <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-white/5 text-gray-400 border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="pt-2">
                         <button className="flex items-center gap-2 text-white hover:text-neon-purple transition-colors font-semibold group/btn">
                            View Case Study <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">Showcase</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Highlights from my journey in building digital products.
                    </p>
                </motion.div>

                {/* Company Projects Section - Expandable Cards */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-4 text-white/90">
                        <span className="w-12 h-px bg-neon-blue"></span>
                        Professional Experience
                    </h3>
                    
                    <div className="text-xs text-gray-500 mb-8 italic max-w-3xl border-l-2 border-neon-blue/30 pl-4 py-1">
                        <span className="font-bold not-italic text-neon-blue">Note:</span>
                        <ul className="list-disc pl-4 space-y-1 mt-1">
                            <li>The projects showcased below utilize only publicly available information, assets, and general descriptions of my role.</li>
                            <li>No sensitive, proprietary, or confidential company data has been included or exposed.</li>
                        </ul>
                    </div>
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
                    
                    <PersonalProjectShowcase />
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
