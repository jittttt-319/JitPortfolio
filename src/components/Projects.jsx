import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Education System',
      description: 'Final Year Project designed for the education domain. Leverages Java Spring Boot for backend, React for frontend, and Python for extracting text.',
      tags: ['Spring Boot', 'React', 'Python', 'AI'],
      icon: '🤖'
    },
    {
      title: 'Coin Recognition and Counting System',
      description: 'Trained a custom Faster R-CNN model for coin detection and counting; built an interactive Streamlit app for inference and results display.',
      tags: ['Python', 'R-CNN', 'Streamlit', 'Machine Learning'],
      icon: '🪙'
    },
    {
      title: 'BananaSis',
      description: 'Developed a Java web app using JSP/Servlets with MVC architecture for clean separation of concerns.',
      tags: ['Java', 'JSP/Servlets', 'MVC', 'SQL'],
      icon: '🍌'
    },
    {
      title: 'Track and Field',
      description: 'A ticketing system for a Track and Field Society, enabling event registration and ticket management using XAMPP stack.',
      tags: ['PHP', 'HTML', 'CSS', 'XAMPP'],
      icon: '🏃'
    },
    {
      title: 'HopeWave',
      description: 'A web/mobile social platform for anonymous bottle messaging with light gamification and chat, built with PHP on the XAMPP stack and integrated with Firebase for real-time features.',
      tags: ['PHP', 'Firebase', 'XAMPP', 'Real-time'],
      icon: '🌊'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
