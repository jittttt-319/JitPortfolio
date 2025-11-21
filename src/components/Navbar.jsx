import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        textDecoration: 'none',
        transition: 'all 0.3s ease',
    };

    const mobileMenuStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(10, 25, 47, 0.98)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        paddingTop: '5rem',
        zIndex: 9999,
        overflowY: 'auto',
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        opacity: mobileMenuOpen ? 1 : 0,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
        pointerEvents: mobileMenuOpen ? 'auto' : 'none',
    };

    const mobileLinkStyle = {
        ...linkStyle,
        margin: '1rem 0',
        padding: '1rem',
        fontSize: '1.1rem',
        borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
        width: '100%',
        textAlign: 'left',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        background: 'none',
        border: 'none',
        color: '#64ffda',
        fontSize: '2rem',
        cursor: 'pointer',
        zIndex: 10000,
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <nav style={navStyle}>
            <div style={{ color: '#64ffda', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Jit.
            </div>
            <div className="nav-links desktop-nav">
                <a href="#about" style={linkStyle}><span style={{ color: '#64ffda' }}>01.</span> About Me</a>
                <a href="#education" style={linkStyle}><span style={{ color: '#64ffda' }}>02.</span> Education</a>
                <a href="#experience" style={linkStyle}><span style={{ color: '#64ffda' }}>03.</span> Experience</a>
                <a href="#projects" style={linkStyle}><span style={{ color: '#64ffda' }}>04.</span> Projects</a>
                <a href="#skills" style={linkStyle}><span style={{ color: '#64ffda' }}>05.</span> Skills</a>
                <a href="#hobbies" style={linkStyle}><span style={{ color: '#64ffda' }}>06.</span> Hobbies</a>
                <a href="#contact" style={linkStyle}><span style={{ color: '#64ffda' }}>07.</span> Contact</a>
            </div>
            <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    color: '#64ffda',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 1001,
                }}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? '✕' : '☰'}
            </button>
            <div 
                className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : 'mobile-nav-closed'}`} 
                style={mobileMenuStyle}
            >
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    style={closeButtonStyle}
                    aria-label="Close menu"
                >
                    ✕
                </button>
                    <a href="#about" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}><span style={{ color: '#64ffda' }}>01.</span> About Me</a>
                    <a href="#education" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}><span style={{ color: '#64ffda' }}>02.</span> Education</a>
                    <a href="#experience" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}><span style={{ color: '#64ffda' }}>03.</span> Experience</a>
                    <a href="#projects" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}><span style={{ color: '#64ffda' }}>04.</span> Projects</a>
                    <a href="#skills" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}><span style={{ color: '#64ffda' }}>05.</span> Skills</a>
                    <a href="#hobbies" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}><span style={{ color: '#64ffda' }}>06.</span> Hobbies</a>
                    <a href="#contact" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}><span style={{ color: '#64ffda' }}>07.</span> Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
