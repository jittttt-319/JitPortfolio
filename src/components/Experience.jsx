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
        section: {
            padding: '100px 0',
        },
        timeline: {
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            paddingLeft: '30px',
        },
        line: {
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: '#233554',
        },
        jobItem: {
            position: 'relative',
            marginBottom: '50px',
        },
        marker: {
            position: 'absolute',
            left: '-36px', // Adjust based on paddingLeft of timeline (30px) + half marker width
            top: '0',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: '#64ffda',
            border: '2px solid #0a192f', // Creates a gap effect
            boxShadow: '0 0 0 2px #64ffda', // Outer glow ring
            zIndex: 10,
        },
        card: {
            backgroundColor: '#112240',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
            transition: 'transform 0.2s ease-in-out',
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
            color: '#64ffda',
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
            color: '#64ffda',
        }
    };

    return (
        <section id="experience" className="container" style={styles.section}>
            <h2 className="section-title">
                <span style={{ color: '#64ffda', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>03.</span>
                Working Journey
            </h2>

            <div style={styles.timeline}>
                <div style={styles.line}></div>

                {jobs.map((job, index) => (
                    <div key={index} style={styles.jobItem} className="slide-up delay-200">
                        <div style={styles.marker}></div>
                        <div style={styles.card} className="hover-card hover-float">
                            <div style={styles.header}>
                                <h3 style={styles.role}>{job.role}</h3>
                                <div style={styles.company}>@ {job.company}</div>
                                <div style={styles.meta}>
                                    <span>{job.duration}</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            <p style={styles.description}>{job.description}</p>

                            <ul style={styles.list}>
                                {jobs[index].points.map((point, i) => (
                                    <li key={i} style={styles.listItem}>
                                        <span style={styles.bullet}>▹</span> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
