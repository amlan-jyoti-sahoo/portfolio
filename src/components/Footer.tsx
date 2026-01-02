import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "http://github.com/amlan-jyoti-sahoo", color: "hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amlanjyoti-sahoo/", color: "hover:text-neon-blue" },
    { icon: Twitter, href: "https://x.com/Amlan_2002", color: "hover:text-neon-cyan" },
    { icon: Instagram, href: "https://www.instagram.com/amlan_jyoti_aj/", color: "hover:text-neon-pink" },
    { icon: Mail, href: "mailto:iamamlan2002@gmail.com", color: "hover:text-yellow-400" }
  ];

  return (
    <footer className="py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10 opacity-70">
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <p className="text-sm text-gray-400 font-mono">
                    &copy; {new Date().getFullYear()} Amlanjyoti Sahoo. Built with React & Tailwind.
                </p>
            </div>
            
            <div className="flex space-x-6">
                {socialLinks.map((social, idx) => (
                    <a 
                        key={idx} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-gray-400 transition-colors duration-300 transform hover:scale-110 ${social.color}`}
                    >
                        <social.icon size={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
