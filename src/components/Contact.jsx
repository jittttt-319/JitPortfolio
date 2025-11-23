import React, { useState } from 'react';

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [isFlying, setIsFlying] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();
        setIsFlying(true);

        // Simulate email action (copy to clipboard)
        navigator.clipboard.writeText('jitxuan2021@gmail.com');

        // Show notification after a slight delay to match animation
        setTimeout(() => {
            setShowNotification(true);
            setIsFlying(false);
        }, 800);

        setTimeout(() => setShowNotification(false), 3800);
    };

    return (
        <section id="contact" className="container contact-section">
            <p style={{ color: '#64ffda', fontFamily: "'Fira Code', monospace" }}>07. What's Next?</p>
            <h2 className="contact-title color-wave-rainbow">Let's Connect</h2>
            <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-btn-container">
                <a
                    href="mailto:jitxuan2021@gmail.com"
                    className="btn"
                    onClick={handleEmailClick}
                >
                    Send Email
                    <span className={`paper-plane-icon ${isFlying ? 'fly-away' : ''}`}>
                        ✈️
                    </span>
                </a>
            </div>

            {showNotification && (
                <div className="notification-toast">
                    Email copied to clipboard!
                </div>
            )}
        </section>
    );
};

export default Contact;
