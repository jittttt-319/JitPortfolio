import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-bold tracking-tighter">
          JIT<span className="text-accent">.</span>DEV
        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Jit Xuan. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
