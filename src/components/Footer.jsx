import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            padding: '20px',
            textAlign: 'center',
            color: '#8892b0',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.8rem',
        },
        link: {
            color: '#8892b0',
            margin: '0 10px',
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={{ marginBottom: '10px' }}>
                <a href="https://www.linkedin.com/in/ling-jit-xuan-5051a8288" target="_blank" rel="noopener noreferrer" style={styles.link}>Linkedin</a>
                <a href="https://github.com/jittttt-319" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
                <a href="https://www.instagram.com/jitxuannnnnn/" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
            </div>
            <p style={{ fontSize: '0.7rem' }}>© 2025 Jit (林泽瑄). All rights reserved.</p>
        </footer>
    );
};

export default Footer;
