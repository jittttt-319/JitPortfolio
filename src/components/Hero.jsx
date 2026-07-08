import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import BinaryRain from './BinaryRain';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const Hero = () => {
  const { lang } = useLang();
  const t = translations[lang].hero;

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
      color: '#9467FB',
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
      <div className="hero-ambient-orb" />
      <div className="container hero-container">
        <h1 className="hero-intro slide-up delay-100" style={{ position: 'relative', zIndex: 1 }}>{t.greeting}</h1>
        <h2 className="hero-name slide-up delay-200 color-wave" style={{ position: 'relative', zIndex: 1 }}>{t.title}</h2>
        <h3 className="hero-subtitle slide-up delay-300 color-wave-orange" style={{ position: 'relative', zIndex: 1 }}>{t.subtitle}</h3>

        <div className="slide-up delay-500" style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href="#contact"
            className="contact-cta-btn"
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
          >
            <span className="contact-cta-shimmer" />
            <span className="contact-cta-label">{t.cta1}</span>
            <motion.span
              className="contact-cta-icon"
              variants={{
                hover: { x: 5, y: -5, rotate: 15, transition: { type: 'spring', stiffness: 400, damping: 15 } },
              }}
            >
              <FaPaperPlane />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
