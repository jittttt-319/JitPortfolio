import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { lang, toggleLang } = useLang();
    const t = translations[lang].nav;

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

    const langBtnStyle = {
        background: 'transparent',
        border: '1px solid #9467FB',
        color: '#9467FB',
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.8rem',
        padding: '0.3rem 0.7rem',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        marginLeft: '1rem',
        letterSpacing: '0.05em',
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                Jit.
            </div>
            <div className="nav-links desktop-nav" style={{ alignItems: 'center' }}>
                <a href="#about" className="nav-link"><span>01.</span> {t.about}</a>
                <a href="#education" className="nav-link"><span>02.</span> {t.education}</a>
                <a href="#experience" className="nav-link"><span>03.</span> {t.experience}</a>
                <a href="#projects" className="nav-link"><span>04.</span> {t.projects}</a>
                <a href="#skills" className="nav-link"><span>05.</span> {t.skills}</a>
                <a href="#hobbies" className="nav-link"><span>06.</span> {t.hobbies}</a>
                <a href="#contact" className="nav-link"><span>07.</span> {t.contact}</a>
                <button
                    onClick={toggleLang}
                    style={langBtnStyle}
                    onMouseOver={e => e.currentTarget.style.background = 'rgba(148,103,251,0.15)'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    aria-label="Toggle language"
                >
                    {lang === 'en' ? '中文' : 'EN'}
                </button>
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
            <div className={`mobile-menu-container ${mobileMenuOpen ? 'open' : ''}`}>
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="mobile-close-btn"
                    aria-label="Close menu"
                >
                    ✕
                </button>
                <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>01.</span> {t.about}</a>
                <a href="#education" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>02.</span> {t.education}</a>
                <a href="#experience" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>03.</span> {t.experience}</a>
                <a href="#projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>04.</span> {t.projects}</a>
                <a href="#skills" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>05.</span> {t.skills}</a>
                <a href="#hobbies" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>06.</span> {t.hobbies}</a>
                <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}><span>07.</span> {t.contact}</a>
                <button
                    onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
                    style={{ ...langBtnStyle, marginLeft: 0, marginTop: '1rem' }}
                    onMouseOver={e => e.currentTarget.style.background = 'rgba(148,103,251,0.15)'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                >
                    {lang === 'en' ? '中文' : 'EN'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
