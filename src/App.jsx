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
<<<<<<< HEAD
<<<<<<< HEAD
import ThemeSwitcher from './components/ThemeSwitcher';
import { Analytics } from "@vercel/analytics/react"
=======
>>>>>>> parent of 2df9214 (analytics)
=======
import { Analytics } from "@vercel/analytics/next"
>>>>>>> parent of de729ef (Update App.jsx)

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
<<<<<<< HEAD
      <ThemeSwitcher />
      <Analytics />
=======
>>>>>>> parent of de729ef (Update App.jsx)
    </>
  );
}

export default App;
