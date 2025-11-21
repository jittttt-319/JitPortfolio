import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-8">
          LET'S <span className="text-accent">TALK</span>
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Got a project in mind? I'm always open to discussing new ideas and opportunities.
        </p>

        <form className="space-y-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-accent transition-colors">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-accent transition-colors">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="group">
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-accent transition-colors">Message</label>
            <textarea rows="4" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
          </div>

          <div className="text-center pt-8">
            <button type="submit" className="btn-magnetic bg-white text-black border-none hover:bg-accent">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
