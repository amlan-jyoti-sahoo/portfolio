import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
    onResumeClick: () => void;
}

const Navbar = ({ onResumeClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Terminal className="text-neon-blue w-6 h-6" />
          <span className="font-display text-lg font-bold tracking-wider text-white">
            AMLANJYOTI<span className="text-neon-purple">.DEV</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
            {/* Standard Links */}
          {['About', 'Journey', 'Projects', 'Contact'].map((item) => (
            <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
            </a>
          ))}

            {/* Resume Button */}
            <button 
                onClick={onResumeClick}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-sm font-bold text-black hover:opacity-90 hover:shadow-neon transition-all duration-300"
            >
                Resume
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
