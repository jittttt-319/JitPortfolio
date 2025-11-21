import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
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
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-content">
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
            
            <a href="#" onClick={handleEmailClick} className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              <FaEnvelope style={{ marginRight: '10px' }} />
              Send Email
            </a>

            <div className="social-links">
              <a href="https://github.com/jittttt-319" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ling-jit-xuan-5051a8288" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/jitxuannnnnn/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" onClick={handleEmailClick} className="social-link">
                <FaEnvelope />
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

export default Contact;
