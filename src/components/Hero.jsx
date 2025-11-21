import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '0',
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
    <section id="hero" className="container" style={styles.section}>
      <h1 style={styles.intro} className="slide-up delay-100">Hi, I'm Jit</h1>
      <h2 style={styles.name} className="slide-up delay-200 color-wave">Software Engineer</h2>
      <h3 style={styles.subtitle} className="slide-up delay-300 color-wave-orange">Passionate about creating beautiful and functional web applications</h3>

      <div style={{
        backgroundColor: 'rgba(100, 255, 218, 0.1)',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '2rem',
        border: '1px solid #64ffda',
        display: 'inline-block',
        visibility: 'visible'
      }} className="slide-up delay-400 animate-float">
        <p style={{ color: '#64ffda', fontFamily: "'Fira Code', monospace", margin: 0 }}>
          🔍 Seeking Internship: 26 Jan 2026 - 12 Jul 2026
        </p>
      </div>

      <div className="slide-up delay-500">
        <a href="#contact" className="btn">Get In Touch</a>
      </div>
    </section>
  );
};

export default Hero;
