import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Cloud, Smartphone } from 'lucide-react';

interface ProjectModalProps {
    project: any;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl relative"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Header / Banner */}
                        <div className="relative h-48 bg-gradient-to-r from-gray-900 to-black overflow-hidden flex items-center justify-center flex-shrink-0">
                            <div className={`absolute inset-0 opacity-20 ${project.color} blur-[100px]`} />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className={`w-20 h-20 ${project.color} rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg mb-4`}>
                                    {project.logo.startsWith('/') || project.logo.startsWith('http') ? (
                                        <div className="w-full h-full p-2 bg-black rounded-2xl flex items-center justify-center">
                                            <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                                        </div>
                                    ) : project.logo}
                                </div>
                                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                <p className="text-gray-400 text-sm">{project.company}</p>
                            </div>
                        </div>

                        {/* Body Content */}
                        <div className="p-8 space-y-8">
                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-bold text-neon-blue mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-neon-blue rounded-full" />
                                    Project Overview
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {project.detailedDesc || project.desc}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            {project.techStack && (
                                <div>
                                    <h3 className="text-lg font-bold text-neon-purple mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-neon-purple rounded-full" />
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech: string, i: number) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-medium font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Key Achievements */}
                            {project.achievements && (
                                <div>
                                    <h3 className="text-lg font-bold text-neon-green mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-neon-green rounded-full" />
                                        Key Achievements
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.achievements.map((achievement: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                                                <span className="leading-relaxed">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Links Footer */}
                            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                                {project.customIcons ? (
                                    project.customIcons.map((icon: any, i: number) => (
                                        <a 
                                            key={i} 
                                            href={icon.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:scale-105"
                                        >
                                            {icon.type === 'web' ? <Globe size={18} /> : <Cloud size={18} />}
                                            {icon.title}
                                        </a>
                                    ))
                                ) : (
                                    Object.entries(project.storeLinks || {}).map(([key, url]: [string, any], i) => (
                                        url !== '#' && (
                                            <a 
                                                key={i} 
                                                href={url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:scale-105 capitalize"
                                            >
                                                <Smartphone size={18} />
                                                {key} App
                                            </a>
                                        )
                                    ))
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
