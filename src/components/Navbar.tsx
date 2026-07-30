import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
    onResumeClick: () => void;
}

const NAV_ITEMS = ['About', 'Journey', 'Projects', 'Contact'];

const Navbar = ({ onResumeClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = NAV_ITEMS.map(i => i.toLowerCase());
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, width: '100%' }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-dark/85 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            >
              <Terminal className="text-neon-blue w-6 h-6" />
            </motion.div>
            <span className="font-display text-lg font-bold tracking-wider text-white">
              AMLANJYOTI<span className="text-neon-purple">.DEV</span>
            </span>
          </motion.div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item, i) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <motion.a
                  key={item}
                  href={`#${id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className={`relative text-sm font-medium transition-colors py-2 group ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full"
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
                </motion.a>
              );
            })}

            {/* Resume Button */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={onResumeClick}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMobileOpen(v => !v)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-bg-dark/95 backdrop-blur-xl border-t border-white/8"
            >
              <div className="flex flex-col px-6 py-4 gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-gray-300 hover:text-white font-medium border-b border-white/5 last:border-0 transition-colors flex items-center justify-between group"
                  >
                    {item}
                    <span className="text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => { onResumeClick(); setMobileOpen(false); }}
                  className="mt-3 w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-sm font-bold text-white"
                >
                  Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
