import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const Experience = () => {
    const { lang } = useLang();
    const t = translations[lang].experience;

    const companies = ['Sitecore Malaysia Sdn. Bhd.', 'TCIT Solutions Sdn. Bhd.'];
    const hashes = ['b8e4d3f', 'a7f3c2e'];

    const jobs = t.jobs.map((job, i) => ({
        ...job,
        company: companies[i],
        hash: hashes[i],
    }));

    const styles = {
        section: {
            padding: '100px 0',
        },
        header: {
            marginBottom: '1rem',
            borderBottom: '1px solid #233554',
            paddingBottom: '1rem',
        },
        role: {
            color: '#ccd6f6',
            fontSize: '1.4rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
        },
        company: {
            color: '#9467FB',
            fontSize: '1.1rem',
            fontFamily: "'Fira Code', monospace",
        },
        meta: {
            display: 'flex',
            justifyContent: 'space-between',
            color: '#8892b0',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.85rem',
            marginTop: '0.5rem',
        },
        description: {
            color: '#ccd6f6',
            marginBottom: '1.5rem',
            fontSize: '1rem',
            lineHeight: '1.6',
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        listItem: {
            position: 'relative',
            paddingLeft: '20px',
            marginBottom: '10px',
            color: '#8892b0',
            fontSize: '0.95rem',
            lineHeight: '1.5',
        },
        bullet: {
            position: 'absolute',
            left: 0,
            color: '#9467FB',
        }
    };

    return (
        <motion.section
            id="experience"
            className="container"
            style={styles.section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="section-title">
                <span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>03.</span>
                {t.sectionTitle}
            </h2>

            <div className="git-timeline">
                <motion.div
                    className="git-timeline-line"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    style={{ transformOrigin: 'top' }}
                />

                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        className="git-commit"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="git-commit-marker"></div>
                        <div className="git-commit-card hover-float">
                            <div className="git-commit-hash">commit {job.hash}</div>
                            <div style={styles.header}>
                                <h3 className="git-commit-message">{job.role}</h3>
                                <div style={styles.company}>@ {job.company}</div>
                                <div style={styles.meta}>
                                    <span>{job.duration}</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            {job.description ? (
                                <p style={styles.description}>{job.description}</p>
                            ) : null}

                            {jobs[index].points.length > 0 ? (
                                <ul style={styles.list}>
                                    {jobs[index].points.map((point, i) => (
                                        <li key={i} style={styles.listItem}>
                                            <span style={styles.bullet}>▹</span> {point}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ ...styles.description, opacity: 0.45, fontStyle: 'italic', fontFamily: "'Fira Code', monospace", fontSize: '0.9rem' }}>
                                    // details coming soon...
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;
