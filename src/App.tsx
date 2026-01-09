import { useState, memo } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Badges from './components/Badges';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import BackgroundCanvas from './components/BackgroundCanvas';

// Memoize sections to prevent re-renders when App state (modal) changes
const MemoHero = memo(Hero);
const MemoAbout = memo(About);
const MemoProjects = memo(Projects);
const MemoCertificates = memo(Certificates);
const MemoBadges = memo(Badges);
const MemoContact = memo(Contact);
const MemoBackgroundCanvas = memo(BackgroundCanvas);

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <MemoBackgroundCanvas />
      <Layout onResumeClick={() => setIsResumeOpen(true)}>
        <MemoHero />
        <MemoAbout />
        <MemoProjects />
        <MemoCertificates />
        <MemoBadges />
        <MemoContact />
      </Layout>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

export default App;
