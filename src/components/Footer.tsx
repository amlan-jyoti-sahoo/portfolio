import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Terminal } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "http://github.com/amlan-jyoti-sahoo", color: "hover:text-white hover:shadow-white/30" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amlanjyoti-sahoo/", color: "hover:text-neon-blue hover:shadow-neon-blue/40" },
    { icon: Twitter, href: "https://x.com/Amlan_2002", color: "hover:text-neon-cyan hover:shadow-neon-cyan/40" },
    { icon: Instagram, href: "https://www.instagram.com/amlan_jyoti_aj/", color: "hover:text-neon-pink hover:shadow-neon-pink/40" },
    { icon: Mail, href: "mailto:iamamlan2002@gmail.com", color: "hover:text-yellow-400 hover:shadow-yellow-400/40" }
  ];

  return (
    <footer className="py-10 relative overflow-hidden border-t border-white/5">
        {/* Top gradient line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-gray-500"
            >
                <Terminal size={14} className="text-neon-blue" />
                <p className="text-sm font-mono">
                    &copy; {new Date().getFullYear()}{' '}
                    <span className="text-gray-300">Amlanjyoti Sahoo</span>
                    {' '}· Built with{' '}
                    <span className="text-neon-cyan">React</span> &{' '}
                    <span className="text-neon-purple">Tailwind</span>
                </p>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex space-x-4"
            >
                {socialLinks.map((social, idx) => (
                    <motion.a 
                        key={idx} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-gray-500 transition-all duration-200 hover:shadow-lg ${social.color}`}
                    >
                        <social.icon size={20} />
                    </motion.a>
                ))}
            </motion.div>
        </div>
    </footer>
  );
};

export default Footer;
