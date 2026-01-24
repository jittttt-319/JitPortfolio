import React from 'react';

const Skills = () => {
    const skills = {
        "Frontend Development": ['React', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
        "Backend Development": ['Java (JSP/Servlets)', 'Spring Boot', 'PHP', 'Python', 'C'],
        "Database Management": ['SQL (MySQL)', 'Firebase'],
        "Cloud & Tools": ['AWS', 'GitHub', 'Figma', 'Microsoft 365'],
        "Machine Learning": ['Python', 'AI/ML models', 'Computer Vision'],
        "Languages": ['English', 'Malay', 'Mandarin', 'Cantonese']
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
        <section id="skills" className="container" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
            <h2 className="section-title"><span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>05.</span> Skills & Expertise</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-category glass-panel">
                        <h3 className="skill-category-title">{category}</h3>
                        <div className="skill-tags-container">
                            {items.map((item, index) => (
                                <span key={index} className="skill-tag">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
