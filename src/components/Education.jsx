import React from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import tarumtLogo from '../assets/V1-tar_umt_logo_(full_colour).png';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering (Honours)',
      school: 'Tunku Abdul Rahman University of Management and Technology',
      location: 'Kuala Lumpur, Malaysia',
      period: 'July 2024 - July 2026',
      description: 'CGPA: 3.89',
      link: 'https://focs.tarc.edu.my/programmes/bachelor-degree/bachelor-of-software-engineering-honours-rsw'
    },
    {
      degree: 'Diploma in Information Technology',
      school: 'Tunku Abdul Rahman University of Management and Technology',
      location: 'Kuala Lumpur, Malaysia',
      period: 'June 2022 - June 2024',
      description: 'CGPA: 3.88',
      link: 'https://focs.tarc.edu.my/programmes/diploma/diploma-in-information-technology-dft'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="education-card glass"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a 
                href="https://www.tarc.edu.my/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="education-logo"
              >
                <img src={tarumtLogo} alt="TAR UMT Logo" />
              </a>
              <div className="education-content">
                <a 
                  href={edu.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="degree-link"
                >
                  <h3>{edu.degree}</h3>
                </a>
                <h4>{edu.school}</h4>
                <div className="education-details">
                  <span className="location">
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                  <span className="period">
                    <FaCalendar /> {edu.period}
                  </span>
                </div>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
