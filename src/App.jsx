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
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <WelcomeScreen />
      <div className="animated-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
