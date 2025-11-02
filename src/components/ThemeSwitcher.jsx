import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  
  const themes = [
    { 
      name: 'purple', 
      primary: '#a855f7', 
      secondary: '#7c3aed', 
      dark: '#6b21a8',
      bg: '#0a0a0a',
      bgSecondary: '#1a1a1a',
      glassBg: 'rgba(139, 92, 246, 0.1)',
      glassBorder: 'rgba(168, 85, 247, 0.2)',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)',
      rgb: '168, 85, 247',
      textColor: '#ffffff',
      isDark: true
    },
    { 
      name: 'orange', 
      primary: '#ff6b35', 
      secondary: '#ff8c42', 
      dark: '#ff5722',
      bg: '#1a0f08',
      bgSecondary: '#2e1f10',
      glassBg: 'rgba(255, 107, 53, 0.1)',
      glassBorder: 'rgba(255, 107, 53, 0.2)',
      gradient: 'linear-gradient(135deg, #1a0f08 0%, #2e1408 50%, #1a0f08 100%)',
      rgb: '255, 107, 53',
      textColor: '#ff6b35',
      isDark: true
    },
    { 
      name: 'blue', 
      primary: '#3b82f6', 
      secondary: '#2563eb', 
      dark: '#1d4ed8',
      bg: '#0a0f1a',
      bgSecondary: '#1a1f2e',
      glassBg: 'rgba(59, 130, 246, 0.1)',
      glassBorder: 'rgba(59, 130, 246, 0.2)',
      gradient: 'linear-gradient(135deg, #0a0f1a 0%, #1a1f3e 50%, #0a0f1a 100%)',
      rgb: '59, 130, 246',
      textColor: '#ffffff',
      isDark: true
    },
    { 
      name: 'green', 
      primary: '#10b981', 
      secondary: '#059669', 
      dark: '#047857',
      bg: '#0a1a0f',
      bgSecondary: '#1a2e1f',
      glassBg: 'rgba(16, 185, 129, 0.1)',
      glassBorder: 'rgba(16, 185, 129, 0.2)',
      gradient: 'linear-gradient(135deg, #0a1a0f 0%, #1a2e1f 50%, #0a1a0f 100%)',
      rgb: '16, 185, 129',
      textColor: '#ffffff',
      isDark: true
    },
    { 
      name: 'gold', 
      primary: '#f59e0b', 
      secondary: '#d97706', 
      dark: '#b45309',
      bg: '#1a1208',
      bgSecondary: '#2e2210',
      glassBg: 'rgba(245, 158, 11, 0.1)',
      glassBorder: 'rgba(245, 158, 11, 0.2)',
      gradient: 'linear-gradient(135deg, #1a1208 0%, #2e2210 50%, #1a1208 100%)',
      rgb: '245, 158, 11',
      textColor: '#ffffff',
      isDark: true
    },
    { 
      name: 'cyan', 
      primary: '#06b6d4', 
      secondary: '#0891b2', 
      dark: '#0e7490',
      bg: '#0a1618',
      bgSecondary: '#1a2e33',
      glassBg: 'rgba(6, 182, 212, 0.1)',
      glassBorder: 'rgba(6, 182, 212, 0.2)',
      gradient: 'linear-gradient(135deg, #0a1618 0%, #1a2e33 50%, #0a1618 100%)',
      rgb: '6, 182, 212',
      textColor: '#ffffff',
      isDark: true
    }
  ];

  const applyTheme = (theme) => {
    const root = document.documentElement;
    
    // Core colors - Update CSS variables
    root.style.setProperty('--purple-primary', theme.primary);
    root.style.setProperty('--purple-secondary', theme.secondary);
    root.style.setProperty('--purple-dark', theme.dark);
    root.style.setProperty('--black-bg', theme.bg);
    root.style.setProperty('--black-secondary', theme.bgSecondary);
    root.style.setProperty('--glass-bg', theme.glassBg);
    root.style.setProperty('--glass-border', theme.glassBorder);
    
    // Update welcome screen gradient
    const welcomeScreen = document.querySelector('.welcome-screen');
    if (welcomeScreen) {
      welcomeScreen.style.background = theme.gradient;
    }
    
    // Update all rgba colors dynamically
    const style = document.createElement('style');
    style.id = 'dynamic-theme-style';
    
    // Remove old dynamic style if exists
    const oldStyle = document.getElementById('dynamic-theme-style');
    if (oldStyle) oldStyle.remove();
    
    // Adjust opacity for light vs dark themes
    const particleOpacity = theme.isDark ? 0.3 : 0.15;
    const shadowOpacity = theme.isDark ? 0.5 : 0.3;
    const glassOpacity = theme.isDark ? 0.1 : 0.2;
    
    style.innerHTML = `
      /* Dynamic theme colors */
      html {
        background: ${theme.bg} !important;
      }
      
      body {
        background: ${theme.gradient} !important;
        background-color: ${theme.bg} !important;
        color: ${theme.textColor} !important;
      }
      
      #root {
        background: transparent !important;
      }
      
      .hero-content h1,
      .about-content h2,
      .skills h2,
      .education h2,
      .projects h2,
      .hobbies h2,
      .contact h2,
      .skill-card h3,
      .project-card h3,
      .hobby-card h3,
      .section h2,
      .nav-links a,
      .education-item h3 {
        color: ${theme.textColor} !important;
      }
      
      .hero-content .typing-text,
      .hero-content p,
      .about-content .typing-text,
      .about-content p,
      .skill-card p,
      .project-card p,
      .hobby-card p,
      .contact-info p,
      .contact-info a,
      .education-item p,
      .tag,
      .internship-badge {
        color: ${theme.isDark ? '#ffffff' : theme.textColor} !important;
      }
      
      .hero-image {
        box-shadow: 0 0 30px rgba(${theme.rgb}, ${shadowOpacity}) !important;
      }
      .hero-image:hover {
        box-shadow: 0 0 50px rgba(${theme.rgb}, ${shadowOpacity * 1.6}) !important;
      }
      .navbar.glass:hover {
        box-shadow: 0 8px 32px 0 rgba(${theme.rgb}, 0.25) !important;
      }
      .glass {
        background: ${theme.glassBg} !important;
        border: 1px solid ${theme.glassBorder} !important;
        box-shadow: 0 8px 32px 0 rgba(${theme.rgb}, ${glassOpacity}) !important;
      }
      .internship-badge {
        background: rgba(${theme.rgb}, 0.15) !important;
        border: 1px solid rgba(${theme.rgb}, 0.5) !important;
        box-shadow: 0 4px 15px rgba(${theme.rgb}, 0.2) !important;
      }
      .tag {
        background: rgba(${theme.rgb}, 0.2) !important;
        border: 1px solid rgba(${theme.rgb}, 0.2) !important;
      }
      .skill-card {
        background: rgba(${theme.rgb}, 0.1) !important;
        border: 1px solid rgba(${theme.rgb}, 0.2) !important;
      }
      .skill-card:hover {
        box-shadow: 0 20px 60px rgba(${theme.rgb}, 0.4) !important;
      }
      .skill-card .icon {
        color: ${theme.primary} !important;
      }
      .skill-card .icon::before {
        background: radial-gradient(circle, rgba(${theme.rgb}, 0.2), transparent) !important;
      }
      .skill-card:hover .icon {
        filter: drop-shadow(0 0 15px rgba(${theme.rgb}, 0.8)) !important;
      }
      .project-card:hover {
        box-shadow: 0 25px 50px rgba(${theme.rgb}, 0.5) !important;
      }
      .scroll-to-top {
        box-shadow: 0 5px 20px rgba(${theme.rgb}, 0.5) !important;
      }
      .scroll-to-top:hover {
        box-shadow: 0 10px 30px rgba(${theme.rgb}, 0.7) !important;
      }
      .theme-switcher {
        box-shadow: 0 5px 20px rgba(${theme.rgb}, 0.5) !important;
      }
      .theme-switcher:hover {
        box-shadow: 0 10px 30px rgba(${theme.rgb}, 0.7) !important;
      }
      .education-logo img {
        filter: drop-shadow(0 2px 10px rgba(${theme.rgb}, 0.3)) !important;
      }
      .education-logo:hover img {
        filter: drop-shadow(0 5px 20px rgba(${theme.rgb}, 0.6)) !important;
      }
      .hobby-image {
        border: 3px solid ${theme.primary} !important;
        box-shadow: 0 0 20px rgba(${theme.rgb}, 0.5) !important;
      }
      body::before {
        background-image: 
          radial-gradient(2px 2px at 20% 30%, rgba(${theme.rgb}, ${particleOpacity}), transparent),
          radial-gradient(2px 2px at 60% 70%, rgba(${theme.rgb}, ${particleOpacity}), transparent),
          radial-gradient(2px 2px at 50% 50%, rgba(${theme.rgb}, ${particleOpacity}), transparent),
          radial-gradient(2px 2px at 80% 10%, rgba(${theme.rgb}, ${particleOpacity}), transparent),
          radial-gradient(2px 2px at 90% 60%, rgba(${theme.rgb}, ${particleOpacity}), transparent) !important;
      }
      body::after {
        background: radial-gradient(circle, rgba(${theme.rgb}, ${glassOpacity}), transparent) !important;
      }
      
      /* Additional elements */
      .navbar {
        border-bottom: 1px solid rgba(${theme.rgb}, 0.2) !important;
      }
      .nav-links a:hover,
      .nav-links a.active {
        color: ${theme.primary} !important;
      }
      .nav-links a::after {
        background: ${theme.primary} !important;
      }
      .hero-content h1 {
        text-shadow: 0 0 30px rgba(${theme.rgb}, 0.5) !important;
      }
      .hero-content h1::after {
        background: linear-gradient(90deg, transparent, ${theme.primary}, transparent) !important;
      }
      .btn-primary,
      .cta-button {
        background: ${theme.primary} !important;
        box-shadow: 0 5px 20px rgba(${theme.rgb}, 0.4) !important;
      }
      .btn-primary:hover,
      .cta-button:hover {
        background: ${theme.secondary} !important;
        box-shadow: 0 8px 30px rgba(${theme.rgb}, 0.6) !important;
      }
      .project-card {
        background: rgba(${theme.rgb}, 0.1) !important;
        border: 1px solid rgba(${theme.rgb}, 0.2) !important;
      }
      .hobby-card {
        background: rgba(${theme.rgb}, 0.1) !important;
        border: 1px solid rgba(${theme.rgb}, 0.2) !important;
      }
      .contact-card {
        background: rgba(${theme.rgb}, 0.1) !important;
        border: 1px solid rgba(${theme.rgb}, 0.2) !important;
      }
      a:hover {
        color: ${theme.primary} !important;
      }
      ::selection {
        background: ${theme.primary} !important;
        color: ${theme.isDark ? '#ffffff' : '#000000'} !important;
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.primary} !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.secondary} !important;
      }
      .section h2::after {
        background: ${theme.primary} !important;
      }
      .typing-text {
        border-right: 2px solid ${theme.primary} !important;
      }
      .education-item {
        background: rgba(${theme.rgb}, 0.1) !important;
        border: 1px solid rgba(${theme.rgb}, 0.2) !important;
      }
      .education-item:hover {
        box-shadow: 0 10px 40px rgba(${theme.rgb}, 0.3) !important;
      }
      .degree-link {
        color: ${theme.primary} !important;
      }
      .degree-link:hover {
        text-shadow: 0 0 10px rgba(${theme.rgb}, 0.8) !important;
      }
    `;
    
    document.head.appendChild(style);
  };

  useEffect(() => {
    // Apply default theme on mount
    applyTheme(themes[0]);
  }, []);

  const changeTheme = () => {
    const nextTheme = (currentTheme + 1) % themes.length;
    setCurrentTheme(nextTheme);
    applyTheme(themes[nextTheme]);
  };

  return (
    <button 
      className="theme-switcher"
      onClick={changeTheme}
      aria-label="Change theme color"
      title={`Current: ${themes[currentTheme].name}`}
    >
      <div className="theme-color-preview" style={{ background: themes[currentTheme].primary }}></div>
    </button>
  );
};

export default ThemeSwitcher;
