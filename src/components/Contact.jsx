import React, { useState } from 'react';

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);

    const styles = {
        section: {
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '100px 0',
        },
        title: {
            fontSize: 'clamp(40px, 5vw, 60px)',
            marginBottom: '1rem',
            color: '#ccd6f6',
        },
        text: {
            color: '#8892b0',
            fontSize: '1.1rem',
            marginBottom: '3rem',
        },
        email: {
            color: '#64ffda',
            fontFamily: "'Fira Code', monospace",
            fontSize: '1rem',
            marginBottom: '1.5rem',
            display: 'block',
        },
        notification: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#64ffda',
            color: '#0a192f',
            padding: '1rem 2rem',
            borderRadius: '4px',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-in-out',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontWeight: 'bold',
            fontFamily: "'Fira Code', monospace",
        }
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('jitxuan2021@gmail.com');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    return (
        <section id="contact" className="container" style={styles.section}>
            <p style={{ color: '#64ffda', fontFamily: "'Fira Code', monospace" }}>06. What's Next?</p>
            <h2 style={styles.title}>Let's Connect</h2>
            <p style={styles.text}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a href="mailto:jitxuan2021@gmail.com" className="btn" onClick={handleEmailClick}>Send Email</a>

            {showNotification && (
                <div style={styles.notification}>
                    Email copied to clipboard!
                </div>
            )}
        </section>
    );
};

export default Contact;
