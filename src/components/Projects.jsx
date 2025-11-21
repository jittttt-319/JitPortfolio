import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      image: 'https://via.placeholder.com/400x250' // Replace with actual image
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered tool that helps creators generate blog posts, social media captions, and marketing copy in seconds.',
      tags: ['OpenAI API', 'Next.js', 'TypeScript', 'Stripe'],
      github: '#',
      demo: '#',
      image: 'https://via.placeholder.com/400x250' // Replace with actual image
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with drag-and-drop boards, team chat, and file sharing capabilities.',
      tags: ['Vue.js', 'Firebase', 'Vuex', 'Sass'],
      github: '#',
      demo: '#',
      image: 'https://via.placeholder.com/400x250' // Replace with actual image
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary transition-colors text-white">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.demo} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary transition-colors text-white">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
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
