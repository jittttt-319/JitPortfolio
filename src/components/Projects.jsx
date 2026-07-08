import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const projectIcons = ['🤖', '🪙', '🍌', '🏃', '🌊'];
const projectTech = [
    ['Spring Boot', 'React', 'Python', 'AI'],
    ['Python', 'R-CNN', 'Streamlit', 'Machine Learning'],
    ['Java', 'JSP/Servlets', 'MVC', 'SQL'],
    ['PHP', 'HTML', 'CSS', 'XAMPP'],
    ['PHP', 'Firebase', 'XAMPP', 'Real-time'],
];

const Projects = () => {
    const { lang } = useLang();
    const t = translations[lang].projects;

    const projects = t.items.map((item, i) => ({
        ...item,
        icon: projectIcons[i],
        tech: projectTech[i],
    }));



    return (
        <motion.section
            id="projects"
            className="container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="section-title"><span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>04.</span> {t.sectionTitle}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card hover-float glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <header>
                            <div className="project-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="project-folder-icon">{project.icon}</div>
                                <a
                                    href="https://github.com/jittttt-319"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#8892b0', fontSize: '1.3rem', transition: 'color 0.2s ease' }}
                                    onMouseOver={e => e.currentTarget.style.color = '#9467FB'}
                                    onMouseOut={e => e.currentTarget.style.color = '#8892b0'}
                                    title="View on GitHub"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                {project.tech.map((tech, i) => (
                                    <li key={i} className="project-tech-item">{tech}</li>
                                ))}
                            </ul>
                        </footer>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
