import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [isFlying, setIsFlying] = useState(false);
    const { lang } = useLang();
    const t = translations[lang].contact;

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
        <motion.section
            id="contact"
            className="container contact-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <p style={{ color: '#9467FB', fontFamily: "'Fira Code', monospace" }}>{t.next}</p>
            <h2 className="contact-title color-wave-rainbow">{t.title}</h2>
            <p className="contact-text">{t.text}</p>

            <div className="contact-btn-container">
                <a
                    href="mailto:jitxuan2021@gmail.com"
                    className="btn"
                    onClick={handleEmailClick}
                >
                    {t.sendEmail}
                    <span className={`paper-plane-icon ${isFlying ? 'fly-away' : ''}`}>
                        ✈️
                    </span>
                </a>
            </div>

            {showNotification && (
                <div className="notification-toast">
                    {t.copied}
                </div>
            )}
        </motion.section>
    );
};

export default Contact;
