import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import schoolLogo from '../assets/schoollogo.png';
import { useLang } from '../context/LanguageContext';
import translations from '../translations';

const CountUp = ({ target, duration = 1200 }) => {
    const [value, setValue] = useState(0);
    const ref = useRef();
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const targetNum = parseFloat(target);
                    const totalFrames = Math.round(duration / 16);
                    let frame = 0;
                    const timer = setInterval(() => {
                        frame++;
                        const progress = frame / totalFrames;
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setValue(eased * targetNum);
                        if (frame >= totalFrames) {
                            setValue(targetNum);
                            clearInterval(timer);
                        }
                    }, 16);
                }
            },
            { threshold: 0.6 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>{value.toFixed(2)}</span>;
};

const CgpaBar = ({ value, max = 4.0, label }) => {
    const percentage = (value / max) * 100;
    const barRef = useRef();
    const [width, setWidth] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    setTimeout(() => setWidth(percentage), 200);
                }
            },
            { threshold: 0.5 }
        );
        if (barRef.current) observer.observe(barRef.current);
        return () => observer.disconnect();
    }, [percentage]);

    return (
        <div ref={barRef} style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                <span style={{ color: '#8892b0' }}>{label}</span>
                <span style={{ color: '#9467FB', fontWeight: '600' }}>
                    <CountUp target={value.toFixed(2)} /> / {max.toFixed(1)}
                </span>
            </div>
            <div style={{ background: 'rgba(148,103,251,0.08)', borderRadius: '20px', height: '4px', overflow: 'hidden', border: '1px solid rgba(148,103,251,0.1)' }}>
                <div style={{
                    height: '100%',
                    width: `${width}%`,
                    background: 'linear-gradient(90deg, #9467FB, #4169e1)',
                    borderRadius: '20px',
                    transition: 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 0 12px rgba(148,103,251,0.4)',
                }} />
            </div>
        </div>
    );
};

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
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
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
                        className="education-card glass-panel"
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
                        </div>
                        <CgpaBar value={parseFloat(item.cgpa)} max={4.0} label={t.cgpa} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Education;
