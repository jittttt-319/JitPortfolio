import React, { useState, useEffect } from 'react';
import aboutme1 from '../assets/aboutme1.png';
import aboutme2 from '../assets/aboutme2.png';
import TypingAnimation from './TypingAnimation';

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeImage, setFadeImage] = useState(true);

    const images = [aboutme1, aboutme2];

    const introText = `Welcome to my portfolio! I'm a passionate software engineer who loves creating innovative solutions and bringing ideas to life through code.

With a strong foundation in web development, I focus on building user-friendly applications that solve real-world problems. I'm constantly learning and exploring new technologies to stay ahead in this ever-evolving field.

When I'm not coding, you can find me playing badminton or volleyball, staying active and enjoying life to the fullest. I also love capturing moments through filming and listening to a mix of English and Chinese songs that inspire my creative process.`;

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
        <section id="about" className="container">
            <h2 className="section-title">
                <span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>01.</span> About Me
            </h2>
            <div style={styles.content} className="about-content-grid">
                <div>
                    <TypingAnimation text={introText} />
                </div>
                <div style={styles.imageContainer}>
                    <div style={styles.imageWrapper}>
                        <img
                            src={images[currentImage]}
                            alt="About Me"
                            style={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;