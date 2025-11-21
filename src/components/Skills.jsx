import React from 'react';
import { FaReact, FaJava, FaDatabase, FaAws, FaPython, FaGithub } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      icon: <FaReact />,
      title: 'Frontend Development',
      description: 'React, HTML, CSS, JavaScript, jQuery'
    },
    {
      icon: <FaJava />,
      title: 'Backend Development',
      description: 'Java (JSP/Servlets), Spring Boot, PHP, Python, C'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'SQL (MySQL), Firebase'
    },
    {
      icon: <FaAws />,
      title: 'Cloud & Tools',
      description: 'AWS, GitHub, Figma, Microsoft 365'
    },
    {
      icon: <FaPython />,
      title: 'Machine Learning',
      description: 'Python, AI/ML models, Computer Vision'
    },
    {
      icon: <SiSpring />,
      title: 'Languages',
      description: 'English, Malay, Mandarin, Cantonese'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
