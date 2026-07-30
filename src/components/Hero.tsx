import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const ROLES = ['Mobile App Developer', 'React Native Engineer', 'TypeScript Expert', 'UI/UX Enthusiast'];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    // Typewriter logic
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && charIndex < currentRole.length) {
            timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
        } else if (!isDeleting && charIndex === currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex(c => c - 1), 45);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex(r => (r + 1) % ROLES.length);
        }

        setDisplayText(currentRole.slice(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    // Mouse parallax for floating orbs
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
    const orbX = useMotionValue(0);
    const orbSpringX = useSpring(orbX, { stiffness: 30, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = (currentTarget as HTMLElement).getBoundingClientRect();
        mouseX.set(((clientX - rect.left) / rect.width - 0.5) * 30);
        mouseY.set(((clientY - rect.top) / rect.height - 0.5) * 30);
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20"
            onMouseMove={handleMouseMove}
        >
            {/* Decorative floating orbs behind content */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/8 rounded-full blur-[80px] pointer-events-none"
            />
            <motion.div
                style={{ x: orbSpringX, y: springY }}
                className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-neon-purple/10 rounded-full blur-[60px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Greeting badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center gap-2 glass-panel-bright px-4 py-2 rounded-full mb-6 border border-neon-blue/30"
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, -10, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Sparkles className="w-4 h-4 text-neon-cyan" />
                        </motion.div>
                        <span className="text-neon-blue text-sm font-mono tracking-wider">&lt; Hello World /&gt;</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-2xl md:text-3xl font-display text-white mb-2"
                    >
                        Hi, I'm{' '}
                        <span className="shimmer-text font-bold">Amlanjyoti Sahoo</span>
                    </motion.h2>

                    {/* Typewriter headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight min-h-[4.5rem] md:min-h-[7rem]"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                            {displayText}
                        </span>
                        <span className="typewriter-cursor" />
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
                    >
                        Building scalable mobile & web applications with modern technologies. 
                        Focused on <span className="text-neon-cyan font-medium">performance</span>, user experience, and{' '}
                        <span className="text-neon-purple font-medium">clean architecture</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.06, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-glow group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full overflow-hidden flex items-center gap-2 shadow-lg shadow-neon-blue/40"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-200" />
                            <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.a>
                        
                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.06, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="gradient-border-card px-8 py-4 text-white font-bold rounded-full flex items-center gap-2 border border-white/10 hover:border-neon-purple/50 transition-colors bg-white/5 backdrop-blur-sm"
                        >
                            <span>Contact Me</span>
                            <Mail className="w-5 h-5" />
                        </motion.a>
                    </motion.div>

                    {/* Tech tags row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap gap-2 mt-8"
                    >
                        {['React Native', 'TypeScript', 'Redux', 'Flutter', 'AWS'].map((tag, i) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.75 + i * 0.08 }}
                                whileHover={{ scale: 1.08, y: -2 }}
                                className="text-xs px-3 py-1.5 rounded-full border border-neon-blue/25 text-neon-cyan/80 bg-neon-blue/5 font-mono cursor-default hover:border-neon-blue/60 hover:bg-neon-blue/10 transition-all"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Abstract Visual / Tech Animation */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative hidden md:flex items-center justify-center p-8"
                >
                     {/* Combined Tech Card with Profile */}
                    <TiltCard className="relative w-full max-w-[500px] aspect-square bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl glass-panel border border-white/5 p-8 overflow-hidden group hover:border-neon-purple/50 transition-colors duration-500 glow-border-animate">
                         
                         {/* Background Tech Animation */}
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

                         {/* Rotating orbit rings */}
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <motion.div
                                 animate={{ rotate: 360 }}
                                 transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                 className="absolute w-[380px] h-[380px] rounded-full border border-neon-blue/10"
                             />
                             <motion.div
                                 animate={{ rotate: -360 }}
                                 transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                 className="absolute w-[420px] h-[420px] rounded-full border border-neon-purple/8"
                             />
                             {/* Orbit dots */}
                             {[0, 90, 180, 270].map((deg, i) => (
                                 <motion.div
                                     key={i}
                                     animate={{ rotate: 360 }}
                                     transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                     className="absolute w-[380px] h-[380px]"
                                     style={{ transform: `rotate(${deg}deg)` }}
                                 >
                                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                 </motion.div>
                             ))}
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
                                 <motion.div
                                     animate={{ rotate: 360 }}
                                     transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                     className="absolute -inset-1.5 rounded-full opacity-90"
                                     style={{
                                         background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #a78bfa, #f472b6, #6366f1)',
                                     }}
                                 />
                                 
                                 {/* Image Itself */}
                                 <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-black/80 shadow-2xl shadow-neon-blue/30 group-hover:scale-[1.02] transition-transform duration-500 z-10">
                                     <img 
                                        src={`${import.meta.env.BASE_URL}profile.png`} 
                                        alt="Amlanjyoti Sahoo" 
                                        className="w-full h-full object-cover"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                                 </div>

                                 {/* Social Links Dock */}
                                 <div className="absolute -left-12 bottom-0 flex flex-col gap-3 z-20">
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
                                             whileHover={{ scale: 1.15, x: 6 }}
                                             whileTap={{ scale: 0.95 }}
                                             className={`glass-panel p-3 rounded-full border border-white/10 text-gray-400 ${social.color} transition-colors shadow-lg shadow-black/20 backdrop-blur-md bg-black/40`}
                                         >
                                             <social.icon size={20} />
                                         </motion.a>
                                     ))}
                                 </div>

                                 {/* Status Badge */}
                                 <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute bottom-6 -right-4 glass-panel px-4 py-2 rounded-full border border-neon-green/40 shadow-lg shadow-neon-green/20 backdrop-blur-md bg-black/60 flex items-center gap-2"
                                 >
                                     <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
                                     </span>
                                     <span className="text-neon-green font-mono text-xs font-bold tracking-wide uppercase">Open to Work</span>
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
