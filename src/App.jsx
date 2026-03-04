import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TerminalFooter from './components/TerminalFooter';
import ScrollProgress from './components/ScrollProgress';
import SpotlightCursor from './components/SpotlightCursor';
import EasterEggs from './components/EasterEggs';
import SnakeGame from './components/SnakeGame';

function App() {
  const [showSnakeGame, setShowSnakeGame] = useState(false);

  useEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Always start at the top of the page
    window.scrollTo(0, 0);
    
    // Clear any hash from URL that might cause auto-scroll
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  return (
    <LanguageProvider>
      <SpotlightCursor />
      <ScrollProgress />
      <EasterEggs />
      <WelcomeScreen />
      <div className="animated-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Hobbies />
      <Contact />
      <TerminalFooter onStartGame={() => setShowSnakeGame(true)} />
      {showSnakeGame && <SnakeGame onClose={() => setShowSnakeGame(false)} />}
    </LanguageProvider>
  );
}

export default App;
