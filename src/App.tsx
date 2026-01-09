import { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Badges from './components/Badges';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <BackgroundCanvas />
      <Layout onResumeClick={() => setIsResumeOpen(true)}>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Badges />
        <Contact />
      </Layout>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

export default App;
