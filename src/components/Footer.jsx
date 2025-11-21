import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Made with <FaHeart className="text-red-500 animate-pulse" /> by <span className="text-white font-semibold">Jit Xuan</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
