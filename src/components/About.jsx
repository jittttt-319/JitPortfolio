import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutme1 from '../assets/aboutme1.png';
import aboutme2 from '../assets/aboutme2.png';
import TypingAnimation from './TypingAnimation';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeImage, setFadeImage] = useState(true);
    const { lang } = useLang();
    const t = translations[lang].about;

    const images = [aboutme1, aboutme2];

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeImage(false); // Start fade out

            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFadeImage(true); // Fade in new image
            }, 500); // Wait for fade out to complete
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const styles = {
        content: {
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '50px',
        },
        text: {
            color: '#8892b0',
            fontSize: '1.1rem',
            marginBottom: '1rem',
        },
        imageContainer: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageWrapper: {
            position: 'relative',
            width: '100%',
            maxWidth: '360px',
            aspectRatio: '3 / 4',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(148, 103, 251, 0.25)',
            transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out',
            opacity: fadeImage ? 1 : 0,
        }
    };

    return (
        <motion.section
            id="about"
            className="container"
            style={{ marginTop: '4rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="section-title">
                <span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>01.</span> {t.sectionTitle}
            </h2>
            <div style={styles.content} className="about-content-grid">
                <div>
                    <TypingAnimation text={t.intro} lang={lang} />
                </div>
                <motion.div
                    style={styles.imageContainer}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div
                        style={styles.imageWrapper}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 0 0 2px rgba(148,103,251,0.5), 0 20px 50px rgba(148,103,251,0.25)';
                            e.currentTarget.style.borderColor = 'rgba(148,103,251,0.5)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                            e.currentTarget.style.borderColor = 'rgba(148,103,251,0.25)';
                        }}
                    >
                        <img
                            src={images[currentImage]}
                            alt="About Me"
                            style={styles.image}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;