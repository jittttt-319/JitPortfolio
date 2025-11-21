import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Frontend Engineer",
      period: "2022 - Present",
      description: "Leading the frontend team in rebuilding the core product using React and Next.js. Improved performance by 40% and established a new design system."
    },
    {
      company: "Digital Agency",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed custom web applications for various clients using MERN stack. Collaborated with designers to implement pixel-perfect UIs."
    },
    {
      company: "StartUp Hub",
      role: "Junior Web Developer",
      period: "2019 - 2020",
      description: "Assisted in the development of the company's main product. Fixed bugs and implemented new features using Vue.js."
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className={`glass-card p-6 hover:border-primary/50 transition-all duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
