import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import profileImg from '../assets/Jit.png'; // Ensure this path is correct

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
            <span className="text-primary font-semibold">Available for work</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Jit Xuan</span>
            <br />
            <span className="text-white">Software Engineer</span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Building digital experiences with a focus on performance, aesthetics, and user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#projects" className="btn btn-primary group">
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start text-gray-400">
            <a href="https://github.com/jittttt-319" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/jit-xuan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="mailto:jitxuan123@gmail.com" className="hover:text-white transition-colors text-2xl">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Image/Visual */}
        <div className="flex-1 flex justify-center items-center relative z-10">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Abstract Shapes behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>

            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden glass-card p-2 animate-float">
              <img
                src={profileImg}
                alt="Jit Xuan"
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
              <span className="text-2xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
