import React from 'react';
import schoolLogo from '../assets/schoollogo.png';

const Education = () => {
    const schools = [
        {
            name: 'Bachelor of Software Engineering (Honours)',
            school: 'Tunku Abdul Rahman University of Management and Technology',
            location: 'Kuala Lumpur, Malaysia',
            duration: 'July 2024 - July 2026',
            cgpa: '3.90',
        },
        {
            name: 'Diploma in Information Technology',
            school: 'Tunku Abdul Rahman University of Management and Technology',
            location: 'Kuala Lumpur, Malaysia',
            duration: 'June 2022 - June 2024',
            cgpa: '3.88',
        }
    ];

    const styles = {
        card: {
            backgroundColor: '#112240',
            padding: '2rem',
            borderRadius: '4px',
            marginBottom: '1.5rem',
            transition: 'transform 0.2s ease',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '0.5rem',
        },
        logo: {
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            borderRadius: '4px',
        },
        degreeName: {
            color: '#ccd6f6',
            fontSize: '1.3rem',
            margin: 0,
        },
        school: {
            color: '#8892b0',
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
        },
        meta: {
            color: '#64ffda',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.9rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
        }
    };

    return (
        <section id="education" className="container">
            <h2 className="section-title"><span style={{ color: '#64ffda', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>02.</span> Education</h2>
            <div>
                {schools.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.header}>
                            <img src={schoolLogo} alt="School Logo" style={styles.logo} />
                            <h3 style={styles.degreeName}>{item.name}</h3>
                        </div>
                        <h4 style={styles.school}>{item.school}</h4>
                        <div style={styles.meta}>
                            <span>{item.location}</span>
                            <span>{item.duration}</span>
                            <span>CGPA: {item.cgpa}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
