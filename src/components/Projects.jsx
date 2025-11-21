import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce V2',
      category: 'Web Application',
      description: 'Next-gen shopping experience with 3D product views.',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      title: 'AI Dashboard',
      category: 'SaaS Platform',
      description: 'Real-time analytics powered by machine learning.',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      title: 'Crypto Wallet',
      category: 'Mobile App',
      description: 'Secure and intuitive decentralized finance management.',
      image: 'https://via.placeholder.com/600x400'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-6 text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            SELECTED <br /> <span className="text-accent" style={{ WebkitTextStroke: '0px' }}>WORKS</span>
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="overflow-hidden rounded-2xl relative">
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <span className="text-accent font-mono text-sm tracking-widest mb-4 block">{project.category}</span>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 max-w-md">{project.description}</p>
                <div className="flex gap-6">
                  <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                    <FaGithub /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
