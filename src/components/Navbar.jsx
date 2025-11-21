import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
    };

    const linkStyle = {
        color: '#ccd6f6',
        margin: '0 1rem',
        fontSize: '0.9rem',
        fontFamily: "'Fira Code', monospace",
    };

    return (
        <nav style={navStyle}>
            <div style={{ color: '#64ffda', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Jit.
            </div>
            <div className="nav-links">
                <a href="#about" style={linkStyle}><span style={{ color: '#64ffda' }}>01.</span> About Me</a>
                <a href="#education" style={linkStyle}><span style={{ color: '#64ffda' }}>02.</span> Education</a>
                <a href="#experience" style={linkStyle}><span style={{ color: '#64ffda' }}>03.</span> Experience</a>
                <a href="#projects" style={linkStyle}><span style={{ color: '#64ffda' }}>04.</span> Projects</a>
                <a href="#skills" style={linkStyle}><span style={{ color: '#64ffda' }}>05.</span> Skills</a>
                <a href="#contact" style={linkStyle}><span style={{ color: '#64ffda' }}>06.</span> Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
