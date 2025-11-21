import React from 'react';

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
      <h1 style={styles.intro} className="fade-in">Hi, I'm Jit</h1>
      <h2 style={styles.name} className="fade-in">Software Engineer</h2>
      <h3 style={styles.subtitle} className="fade-in">Passionate about creating beautiful and functional web applications</h3>

      <div style={{
        backgroundColor: 'rgba(100, 255, 218, 0.1)',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '2rem',
        border: '1px solid #64ffda',
        display: 'inline-block'
      }} className="fade-in">
        <p style={{ color: '#64ffda', fontFamily: "'Fira Code', monospace", margin: 0 }}>
          🔍 Seeking Internship: 26 Jan 2026 - 12 Jul 2026
        </p>
      </div>

      <a href="#contact" className="btn fade-in">Get In Touch</a>
    </section>
  );
};

export default Hero;
