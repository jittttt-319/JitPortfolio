import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp, FaAws, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiSpringboot, SiMysql, SiFirebase, SiFigma, SiMicrosoft, SiTensorflow } from 'react-icons/si';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const skillIcons = {
    'React': <FaReact />,
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'JavaScript': <SiJavascript />,
    'jQuery': <SiJquery />,
    'Java (JSP/Servlets)': <FaJava />,
    'Spring Boot': <SiSpringboot />,
    'PHP': <FaPhp />,
    'Python': <FaPython />,
    'SQL (MySQL)': <SiMysql />,
    'Firebase': <SiFirebase />,
    'AWS': <FaAws />,
    'GitHub': <FaGithub />,
    'Figma': <SiFigma />,
    'Microsoft 365': <SiMicrosoft />,
    'AI/ML models': <SiTensorflow />,
};

const Skills = () => {
    const { lang } = useLang();
    const t = translations[lang].skills;

    const skills = {
        "Frontend Development": ['React', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        "Backend Development": ['Java (JSP/Servlets)', 'Spring Boot', 'PHP', 'Python', 'C'],
        "Database Management": ['SQL (MySQL)', 'Firebase'],
        "Cloud & Tools": ['AWS', 'GitHub', 'Figma', 'Microsoft 365'],
        "Machine Learning": ['Python', 'AI/ML models', 'Computer Vision'],
        "Languages": ['English', 'Malay', 'Mandarin', 'Cantonese'],
    };

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem',
        },
        category: {
            marginBottom: '2rem',
        },
        categoryTitle: {
            color: '#ccd6f6',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #233554',
            paddingBottom: '0.5rem',
        },
        tagsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
        }
    };

    return (
        <motion.section
            id="skills"
            className="container"
            style={{ marginTop: '4rem', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="section-title"><span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>05.</span> {t.sectionTitle}</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items], catIndex) => (
                    <motion.div
                        key={category}
                        className="skill-category glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                    >
                        <h3 className="skill-category-title">{t.categories[category] || category}</h3>
                        <div className="skill-tags-container">
                            {items.map((item, index) => {
                                const displayName = category === 'Languages'
                                    ? (t.langItems[item] || item)
                                    : item;
                                return (
                                    <span key={index} className="skill-tag">
                                        {skillIcons[item] && (
                                            <span style={{ marginRight: '5px', verticalAlign: 'middle', fontSize: '0.85em' }}>
                                                {skillIcons[item]}
                                            </span>
                                        )}
                                        {displayName}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
