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

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                Jit.
            </div>
            <div className="nav-links desktop-nav">
                <a href="#about" className="nav-link"><span>01.</span> About Me</a>
                <a href="#education" className="nav-link"><span>02.</span> Education</a>
                <a href="#experience" className="nav-link"><span>03.</span> Experience</a>
                <a href="#projects" className="nav-link"><span>04.</span> Projects</a>
                <a href="#skills" className="nav-link"><span>05.</span> Skills</a>
                <a href="#hobbies" className="nav-link"><span>06.</span> Hobbies</a>
                <a href="#contact" className="nav-link"><span>07.</span> Contact</a>
            </div>
            <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    color: '#9467FB',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 1001,
                }}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? '✕' : '☰'}
            </button>
            <div
                className={`mobile-menu-container ${mobileMenuOpen ? 'open' : ''}`}
            >
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="mobile-close-btn"
                    aria-label="Close menu"
                >
                    ✕
                </button>
                <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>01.</span> About Me</a>
                <a href="#education" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>02.</span> Education</a>
                <a href="#experience" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>03.</span> Experience</a>
                <a href="#projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>04.</span> Projects</a>
                <a href="#skills" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>05.</span> Skills</a>
                <a href="#hobbies" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>06.</span> Hobbies</a>
                <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>07.</span> Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
