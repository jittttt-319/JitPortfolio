import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold font-display tracking-tighter mix-blend-difference z-50 relative group">
                    JIT<span className="text-accent">.</span>DEV
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center gap-2 px-2 py-2 rounded-full border border-white/10 backdrop-blur-md bg-white/5 transition-all duration-500 ${scrolled ? 'bg-black/50' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-black hover:bg-accent transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a href="#contact" className="btn-magnetic text-xs px-6 py-3 border-white/20">
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl z-50 focus:outline-none mix-blend-difference"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-4xl font-display font-bold text-transparent stroke-text hover:text-accent transition-all duration-300 transform hover:scale-110"
                            style={{ transitionDelay: `${index * 100}ms`, WebkitTextStroke: '1px white' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
