import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'IT Technician Internship',
      company: 'TCIT Solutions Sdn. Bhd.',
      location: 'Malaysia',
      period: 'November 2023 - January 2024',
      description: 'Provided comprehensive technical support and system maintenance services',
      responsibilities: [
        'Provided technical support to clients by troubleshooting and resolving hardware and software issues',
        'Performed system maintenance including PC formatting, operating system reinstallation, and software setup'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card glass"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <div className="experience-details">
                  <span className="location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                  <span className="period">
                    <FaCalendar /> {exp.period}
                  </span>
                </div>
                <p>{exp.description}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
