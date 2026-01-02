import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Tablet } from 'lucide-react';

const projects = {
    company: [
        {
            title: "FinTech Mobile App",
            company: "TechCorp Inc.",
            logo: "TC",
            color: "bg-blue-500",
            storeLinks: { ios: "#", android: "#" }
        },
        {
            title: "E-Commerce Platform",
            company: "ShopifyPlus",
            logo: "SP",
            color: "bg-green-500",
            storeLinks: { ios: "#", android: "#" }
        },
        {
            title: "Health Tracker",
            company: "Wellness.io",
            logo: "W",
            color: "bg-pink-500",
            storeLinks: { ios: "#", android: "#" }
        },
        {
            title: "Delivery Driver App",
            company: "FastLogistics",
            logo: "FL",
            color: "bg-orange-500",
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
        <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:shadow-neon transition-all`}>
            {project.logo}
        </div>
        
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.company}</p>
        
        <div className="flex gap-4 mt-auto opacity-60 group-hover:opacity-100 transition-opacity">
            <a href={project.storeLinks.ios} className="hover:text-neon-blue transition-colors"><Tablet size={20} /></a>
            <a href={project.storeLinks.android} className="hover:text-neon-green transition-colors"><Smartphone size={20} /></a>
        </div>
    </motion.div>
);

const PersonalCard = ({ project, index }: { project: any, index: number }) => {
    // 3D Tilt Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const rX = (mouseY / height - 0.5) * -20; // Rotate X range: -10 to 10 deg
        const rY = (mouseX / width - 0.5) * 20;   // Rotate Y range: -10 to 10 deg
        
        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl bg-bg-dark border border-white/5 hover:border-neon-purple/50 transition-colors duration-500"
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

            {/* Glowing Border Gradient effect behind */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neon-blue/0 via-neon-purple/0 to-neon-pink/0 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 group-hover:via-neon-purple/30" />
        </motion.div>
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
