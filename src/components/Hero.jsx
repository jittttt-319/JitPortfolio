import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/DSCF1512.JPG';

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
};

export default Hero;
