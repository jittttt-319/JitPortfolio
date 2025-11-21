import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your actual EmailJS service ID, template ID, and public key
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

    // Simulating success for now
    setTimeout(() => {
      setStatus('success');
      form.current.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-gray-400">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:bg-white/10 transition-all peer"
                  placeholder="Name"
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs peer-valid:-top-6 peer-valid:text-xs">
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:bg-white/10 transition-all peer"
                  placeholder="Email"
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs peer-valid:-top-6 peer-valid:text-xs">
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:bg-white/10 transition-all peer resize-none"
                placeholder="Message"
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs peer-valid:-top-6 peer-valid:text-xs">
                Message
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2 mx-auto"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-green-400 mt-4 animate-fade-in">Message sent successfully!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
