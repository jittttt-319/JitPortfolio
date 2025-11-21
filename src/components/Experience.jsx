import React from 'react';

const Experience = () => {
    const jobs = [
        {
            company: 'TCIT Solutions Sdn. Bhd.',
            role: 'IT Technician Internship',
            location: 'Malaysia',
            duration: 'November 2023 - January 2024',
            description: 'Provided comprehensive technical support and system maintenance services',
            points: [
                'Provided technical support to clients by troubleshooting and resolving hardware and software issues',
                'Performed system maintenance including PC formatting, operating system reinstallation, and software setup',
            ]
        }
    ];

    const styles = {
        jobContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        jobHeader: {
            marginBottom: '1rem',
        },
        role: {
            color: '#ccd6f6',
            fontSize: '1.3rem',
            fontWeight: '500',
        },
        company: {
            color: '#64ffda',
        },
        meta: {
            color: '#8892b0',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.9rem',
            marginBottom: '1rem',
            display: 'block',
        },
        description: {
            color: '#8892b0',
            marginBottom: '1rem',
            fontStyle: 'italic',
        },
        list: {
            marginTop: '1rem',
        },
        listItem: {
            position: 'relative',
            paddingLeft: '20px',
            marginBottom: '10px',
            color: '#8892b0',
        },
        bullet: {
            position: 'absolute',
            left: 0,
            color: '#64ffda',
        }
    };

    return (
        <section id="experience" className="container">
            <h2 className="section-title"><span style={{ color: '#64ffda', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>03.</span> Work Experience</h2>
            <div style={styles.jobContainer}>
                {jobs.map((job, index) => (
                    <div key={index}>
                        <div style={styles.jobHeader}>
                            <h3 style={styles.role}>{job.role} <span style={styles.company}>@ {job.company}</span></h3>
                            <span style={styles.meta}>{job.location} | {job.duration}</span>
                        </div>
                        <p style={styles.description}>{job.description}</p>
                        <ul style={styles.list}>
                            {job.points.map((point, i) => (
                                <li key={i} style={styles.listItem}>
                                    <span style={styles.bullet}>▹</span> {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
