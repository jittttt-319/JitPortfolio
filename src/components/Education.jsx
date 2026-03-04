import React from 'react';
import { motion } from 'framer-motion';
import schoolLogo from '../assets/schoollogo.png';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const Education = () => {
    const { lang } = useLang();
    const t = translations[lang].education;

    const cgpaValues = ['3.92', '3.88'];
    const schools = t.schools.map((s, i) => ({
        ...s,
        school: 'Tunku Abdul Rahman University of Management and Technology',
        cgpa: cgpaValues[i],
    }));

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
            color: '#9467FB',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.9rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
        }
    };

    return (
        <motion.section
            id="education"
            className="container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="section-title"><span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>02.</span> {t.sectionTitle}</h2>
            <div>
                {schools.map((item, index) => (
                    <motion.div
                        key={index}
                        style={styles.card}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <div style={styles.header}>
                            <img src={schoolLogo} alt="School Logo" style={styles.logo} />
                            <h3 style={styles.degreeName}>{item.name}</h3>
                        </div>
                        <h4 style={styles.school}>{item.school}</h4>
                        <div style={styles.meta}>
                            <span>{item.location}</span>
                            <span>{item.duration}</span>
                            <span>{t.cgpa}: {item.cgpa}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Education;
