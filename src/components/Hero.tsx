import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import TiltCard from './TiltCard';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block glass-panel px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-neon-blue text-sm font-mono tracking-wider"> &lt; Hello World /&gt;</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-display text-white mb-2"
                    >
                        Hi, I'm <span className="text-neon-cyan">Amlanjyoti Sahoo</span>
                    </motion.h2>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Mobile App <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                            Developer
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Building scalable mobile & web applications with modern technologies. 
                        Focused on performance, user experience, and clean code.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full overflow-hidden flex items-center gap-2 shadow-lg shadow-neon-blue/30"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.a>
                        
                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass-panel text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <span>Contact Me</span>
                            <Mail className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Abstract Visual / Tech Animation */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden md:flex items-center justify-center p-8"
                >
                     {/* Combined Tech Card with Profile */}
                    <TiltCard className="relative w-full max-w-[500px] aspect-square bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl glass-panel border border-white/5 p-8 overflow-hidden group hover:border-neon-purple/50 transition-colors duration-500">
                         
                         {/* Background Tech Animation (restored) */}
                         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
                         <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-40 pointer-events-none select-none">
                             <div className="space-y-4 font-mono text-xs">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                        className="h-1.5 bg-gradient-to-r from-neon-blue/30 to-transparent rounded w-2/3"
                                    />
                                ))}
                             </div>
                             <div className="text-right space-y-4 font-mono text-xs">
                                {[1, 2, 3].map((i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1 + (i * 0.1), duration: 1 }}
                                        className="h-1.5 bg-gradient-to-l from-neon-purple/30 to-transparent rounded w-1/2 ml-auto"
                                    />
                                ))}
                             </div>
                         </div>

                         {/* Profile Image Container */}
                        <div className="relative w-full h-full flex items-center justify-center z-10">
                             {/* Floating Image Wrapper */}
                             <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                             >
                                 {/* Glowing Backdrop behind Image */}
                                 <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/40 to-neon-purple/40 blur-[80px] rounded-full transform scale-110" />

                                 {/* Gradient Border Ring */}
                                 <div className="absolute -inset-1 bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple rounded-full opacity-80 blur-[2px]" />
                                 
                                 {/* Image Itself */}
                                 <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-black/80 shadow-2xl shadow-neon-blue/30 group-hover:scale-[1.02] transition-transform duration-500">
                                     <img 
                                        src={`${import.meta.env.BASE_URL}profile.png`} 
                                        alt="Amlanjyoti Sahoo" 
                                        className="w-full h-full object-cover"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                                 </div>

                                 {/* Social Links Dock */}
                                 <div 
                                    className="absolute -left-12 bottom-0 flex flex-col gap-3 z-20"
                                 >
                                     {[
                                         { icon: Github, href: "http://github.com/amlan-jyoti-sahoo", color: "hover:text-white" },
                                         { icon: Linkedin, href: "https://www.linkedin.com/in/amlanjyoti-sahoo/", color: "hover:text-neon-blue" },
                                         { icon: Twitter, href: "https://x.com/Amlan_2002", color: "hover:text-neon-cyan" },
                                         { icon: Instagram, href: "https://www.instagram.com/amlan_jyoti_aj/", color: "hover:text-neon-pink" },
                                         { icon: Mail, href: "mailto:iamamlan2002@gmail.com", color: "hover:text-yellow-400" }
                                     ].map((social, i) => (
                                         <motion.a
                                             key={i}
                                             href={social.href}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             initial={{ opacity: 0, x: -20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ delay: 1.5 + (i * 0.1) }}
                                             whileHover={{ scale: 1.1, x: 5 }}
                                             whileTap={{ scale: 0.95 }}
                                             className={`glass-panel p-3 rounded-full border border-white/10 text-gray-400 ${social.color} transition-colors shadow-lg shadow-black/20 backdrop-blur-md bg-black/40`}
                                         >
                                             <social.icon size={20} />
                                         </motion.a>
                                     ))}
                                 </div>

                                 {/* Status Badge */}
                                 <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute bottom-6 -right-2 glass-panel px-5 py-2.5 rounded-full border border-neon-green/30 shadow-lg shadow-neon-green/20 backdrop-blur-md bg-black/60 flex items-center gap-3"
                                 >
                                     <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
                                      </span>
                                     <span className="text-neon-green font-mono text-xs font-bold tracking-wide uppercase">Ready to Deploy</span>
                                 </motion.div>
                             </motion.div>
                        </div>
                    </TiltCard>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
