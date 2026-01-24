import React from 'react';

const Experience = () => {
    const jobs = [
        {
            company: 'Sitecore Malaysia Sdn. Bhd.',
            role: 'Associate Software Engineer - Internship',
            location: 'Kuala Lumpur, Malaysia',
            duration: 'January 2026 - Present',
            description: '',
            hash: 'b8e4d3f',
            points: []
        },
        {
            company: 'TCIT Solutions Sdn. Bhd.',
            role: 'IT Technician - Internship',
            location: 'Petaling Jaya, Malaysia',
            duration: 'November 2023 - January 2024',
            description: 'Provided comprehensive technical support and system maintenance services',
            hash: 'a7f3c2e',
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
        <section id="experience" className="container" style={styles.section}>
            <h2 className="section-title">
                <span style={{ color: '#9467FB', marginRight: '10px', fontFamily: "'Fira Code', monospace" }}>03.</span>
                Working Journey
            </h2>

            <div className="git-timeline">
                <div className="git-timeline-line"></div>

                {jobs.map((job, index) => (
                    <div key={index} className="git-commit slide-up delay-200">
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
