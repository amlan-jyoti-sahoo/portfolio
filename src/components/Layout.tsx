import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onResumeClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onResumeClick }) => {
  return (
    <div className="min-h-screen flex flex-col relative text-slate-200 selection:bg-neon-blue selection:text-white">
      <Navbar onResumeClick={onResumeClick} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
