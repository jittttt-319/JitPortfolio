import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const socials = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/jittttt-319' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jit-xuan-ling-5051a8288' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/jitxuannnnnn/' },
];

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
            <div className="contact-ambient-orb" />
            <p style={{ color: '#9467FB', fontFamily: 'var(--font-mono)', position: 'relative', zIndex: 1 }}>{t.next}</p>
            <h2 className="contact-title color-wave-rainbow" style={{ position: 'relative', zIndex: 1 }}>{t.title}</h2>
            <p className="contact-text" style={{ position: 'relative', zIndex: 1 }}>{t.text}</p>

            <motion.a
                href="mailto:jitxuan2021@gmail.com"
                className="contact-cta-btn"
                onClick={handleEmailClick}
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <span className="contact-cta-shimmer" />
                <span className="contact-cta-label">{t.sendEmail}</span>
                <motion.span
                    className="contact-cta-icon"
                    variants={{
                        hover: { x: 5, y: -5, rotate: 15, transition: { type: 'spring', stiffness: 400, damping: 15 } },
                    }}
                    animate={isFlying ? { x: 80, y: -80, opacity: 0, rotate: 45, transition: { duration: 0.5, ease: 'easeIn' } } : {}}
                >
                    <FaPaperPlane />
                </motion.span>
            </motion.a>



            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        className="notification-toast"
                        initial={{ x: 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 120, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                        ✓ {t.copied}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Contact;
