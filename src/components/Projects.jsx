import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Based Education System',
            description: 'Final Year Project designed for the education domain. Leverages Java Spring Boot for backend, React for frontend, and Python for extracting text.',
            tech: ['Spring Boot', 'React', 'Python', 'AI'],
            icon: '🤖'
        },
        {
            title: 'Coin Recognition and Counting System',
            description: 'Trained a custom Faster R-CNN model for coin detection and counting; built an interactive Streamlit app for inference and results display.',
            tech: ['Python', 'R-CNN', 'Streamlit', 'Machine Learning'],
            icon: '🪙'
        },
        {
            title: 'BananaSis',
            description: 'Developed a Java web app using JSP/Servlets with MVC architecture for clean separation of concerns.',
            tech: ['Java', 'JSP/Servlets', 'MVC', 'SQL'],
            icon: '🍌'
        },
        {
            title: 'Track and Field',
            description: 'A ticketing system for a Track and Field Society, enabling event registration and ticket management using XAMPP stack.',
            tech: ['PHP', 'HTML', 'CSS', 'XAMPP'],
            icon: '🏃'
        },
        {
            title: 'HopeWave',
            description: 'A web/mobile social platform for anonymous bottle messaging with light gamification and chat, built with PHP on the XAMPP stack and integrated with Firebase for real-time features.',
            tech: ['PHP', 'Firebase', 'XAMPP', 'Real-time'],
            icon: '🌊'
        }
    ];

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
        },
        card: {
            backgroundColor: '#112240',
            padding: '2rem',
            borderRadius: '4px',
            transition: 'transform 0.2s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
        },
        folderIcon: {
            color: '#64ffda',
            fontSize: '40px',
        },
        title: {
            color: '#ccd6f6',
            fontSize: '1.4rem',
            marginBottom: '1rem',
        },
        description: {
            color: '#8892b0',
            fontSize: '1rem',
            marginBottom: '1.5rem',
        },
        techList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: 'auto',
        },
        techItem: {
            color: '#64ffda',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.8rem',
        }
    };

    return (
        <section id="projects" className="container">
            <h2 className="section-title"><span style={{ color: '#64ffda', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>04.</span> Projects</h2>
            <div style={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} style={{ ...styles.card, animationDelay: `${index * 100}ms` }} className="project-card pop-in hover-float">
                        <header>
                            <div style={styles.header}>
                                <div style={styles.folderIcon}>{project.icon}</div>
                            </div>
                            <h3 style={styles.title}>{project.title}</h3>
                            <div style={styles.description}>
                                <p>{project.description}</p>
                            </div>
                        </header>
                        <footer>
                            <ul style={styles.techList}>
                                {project.tech.map((tech, i) => (
                                    <li key={i} style={styles.techItem}>{tech}</li>
                                ))}
                            </ul>
                        </footer>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
