import React from 'react';
import { motion } from 'framer-motion';
import BinaryRain from './BinaryRain';

const Hero = () => {
  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '0',
      position: 'relative',
    },
    intro: {
      color: '#64ffda',
      fontFamily: "'Fira Code', monospace",
      fontSize: '1rem',
      marginBottom: '1.5rem',
    },
    name: {
      fontSize: 'clamp(40px, 8vw, 80px)',
      fontWeight: '600',
      color: '#ccd6f6',
      lineHeight: '1.1',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: 'clamp(40px, 8vw, 80px)',
      fontWeight: '600',
      color: '#8892b0',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
    },
    description: {
      maxWidth: '540px',
      fontSize: '1.1rem',
      marginBottom: '3rem',
    },
  };

  return (
    <section id="hero" className="hero-section" style={styles.section}>
      <BinaryRain />
      <div className="container hero-container">
        <h1 className="hero-intro slide-up delay-100" style={{ position: 'relative', zIndex: 1 }}>Hi, I'm Jit</h1>
        <h2 className="hero-name slide-up delay-200 color-wave" style={{ position: 'relative', zIndex: 1 }}>Software Engineer</h2>
        <h3 className="hero-subtitle slide-up delay-300 color-wave-orange" style={{ position: 'relative', zIndex: 1 }}>Passionate about creating beautiful and functional web applications</h3>

        <div className="hero-status-box slide-up delay-400 animate-float" style={{ position: 'relative', zIndex: 1 }}>
          <p className="hero-status-text">
            🔍 Seeking Internship: 26 Jan 2026 - 12 Jul 2026
          </p>
        </div>

        <div className="slide-up delay-500" style={{ position: 'relative', zIndex: 1 }}>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
