import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import profileImg from '../assets/Jit.png';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offset = 20;

      if (titleRef.current) {
        titleRef.current.style.transform = `translate(${moveX / offset}px, ${moveY / offset}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden mb-4">
            <h2 className="text-accent font-display text-xl tracking-widest uppercase animate-slide-up">
              Software Engineer
            </h2>
          </div>

          <div className="relative mb-8" ref={titleRef}>
            <h1 className="kinetic-text">
              CREATIVE
              <br />
              DEVELOPER
            </h1>
          </div>

          <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed fade-up" style={{ animationDelay: '0.5s' }}>
            I craft digital experiences that blend <span className="text-white">technical precision</span> with <span className="text-white">artistic flair</span>. Specializing in React, Next.js, and interactive UI.
          </p>

          <div className="flex items-center gap-6 fade-up" style={{ animationDelay: '0.7s' }}>
            <a href="#projects" className="btn-magnetic">
              View Work
            </a>
            <div className="flex gap-6">
              <a href="#" className="text-2xl hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"><FaGithub /></a>
              <a href="#" className="text-2xl hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"><FaDribbble /></a>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 lg:order-2 flex justify-center perspective-1000">
          <div className="relative w-80 h-[500px] group">
            <div className="absolute inset-0 border-2 border-white/20 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
            <div className="absolute inset-0 border-2 border-accent/50 rounded-full transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105">
              <img
                src={profileImg}
                alt="Jit Xuan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
