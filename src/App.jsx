import React from 'react';
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

function App() {
  return (
    <>
      <SpotlightCursor />
      <ScrollProgress />
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
      <TerminalFooter />
    </>
  );
}

export default App;
