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
            marginBottom: '1rem',
        },
        categoryTitle: {
            color: '#ccd6f6',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #233554',
            paddingBottom: '0.5rem',
        },
        list: {
            listStyle: 'none',
        },
        item: {
            color: '#8892b0',
            marginBottom: '0.5rem',
            position: 'relative',
            paddingLeft: '20px',
        },
        bullet: {
            position: 'absolute',
            left: 0,
            color: '#64ffda',
        }
    };

    return (
        <section id="skills" className="container">
            <h2 className="section-title"><span style={{ color: '#64ffda', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>05.</span> Skills & Expertise</h2>
            <div style={styles.grid}>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} style={styles.category}>
                        <h3 style={styles.categoryTitle}>{category}</h3>
                        <ul style={styles.list}>
                            {items.map((item, index) => (
                                <li key={index} style={styles.item}>
                                    <span style={styles.bullet}>▹</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
