import React from 'react';
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
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
