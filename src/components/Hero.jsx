<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import profileImg from '../assets/Jit.png';

const Hero = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const moveX = clientX - window.innerWidth / 2;
            const moveY = clientY - window.innerHeight / 2;
            const offset = 20;

            if (titleRef.current) {
                titleRef.current.style.transform = `translate(${moveX / offset}px, ${moveY / offset}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <div className="overflow-hidden mb-4">
                        <h2 className="text-accent font-display text-xl tracking-widest uppercase animate-slide-up">
                            Software Engineer
                        </h2>
                    </div>

                    <div className="relative mb-8" ref={titleRef}>
                        <h1 className="kinetic-text">
                            CREATIVE
                            <br />
                            DEVELOPER
                        </h1>
                    </div>

                    <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed fade-up" style={{ animationDelay: '0.5s' }}>
                        I craft digital experiences that blend <span className="text-white">technical precision</span> with <span className="text-white">artistic flair</span>. Specializing in React, Next.js, and interactive UI.
                    </p>

                    <div className="flex items-center gap-6 fade-up" style={{ animationDelay: '0.7s' }}>
                        <a href="#projects" className="btn-magnetic">
                            View Work
                        </a>
                        <div className="flex gap-6">
                            <a href="#" className="text-2xl hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"><FaGithub /></a>
                            <a href="#" className="text-2xl hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"><FaLinkedin /></a>
                            <a href="#" className="text-2xl hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"><FaDribbble /></a>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 lg:order-2 flex justify-center perspective-1000">
                    <div className="relative w-80 h-[500px] group">
                        <div className="absolute inset-0 border-2 border-white/20 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
                        <div className="absolute inset-0 border-2 border-accent/50 rounded-full transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700"></div>

                        <div className="relative w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105">
                            <img
                                src={profileImg}
                                alt="Jit Xuan"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
=======
import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/DSCF1512.png';

const Hero = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const openEmailClient = () => {
    window.location.href = 'mailto:jitxuan2021@gmail.com';
    setShowEmailModal(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('jitxuan2021@gmail.com').then(() => {
      setShowEmailModal(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    });
  };

  return (
    <>
      <section id="home" className="section hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img src={heroImage} alt="Jit" />
            </div>
            <h1>Hi, I'm Jit</h1>
            <p className="subtitle">Software Engineer</p>
            <p>Passionate about creating beautiful and functional web applications</p>
            <div className="hero-cta-row">
              <div className="internship-badge">
                <span className="badge-icon">🔍</span>
                <div className="badge-text">
                  <strong>Seeking Internship</strong>
                  <span className="badge-dates">26 Jan 2026 - 12 Jul 2026</span>
                </div>
              </div>
              <a href="#" onClick={handleEmailClick} className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <FaEnvelope style={{ marginRight: '10px' }} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Email Choice Modal */}
      {showEmailModal && (
        <div className="email-modal" onClick={() => setShowEmailModal(false)}>
          <div className="email-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowEmailModal(false)}>×</button>
            <h3>Contact Me</h3>
            <p className="email-address">jitxuan2021@gmail.com</p>
            <div className="email-options">
              <button className="email-option-btn" onClick={openEmailClient}>
                Open Email Client
              </button>
              <button className="email-option-btn" onClick={copyEmail}>
                Copy Email Address
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Copy Notification */}
      {showNotification && (
        <div className="copy-notification">
          ✓ Email copied to clipboard!
        </div>
      )}
    </>
  );
>>>>>>> parent of 06243ee (new ui update)
};

export default Hero;
