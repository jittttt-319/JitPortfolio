import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: 'Senior Frontend Engineer',
      company: 'Tech Corp',
      period: '2023 - Present',
      description: 'Spearheading the migration to Next.js 14 and implementing a new design system.'
    },
    {
      role: 'Creative Developer',
      company: 'Digital Agency',
      period: '2021 - 2023',
      description: 'Built award-winning promotional sites for Fortune 500 clients using WebGL.'
    },
    {
      role: 'Full Stack Developer',
      company: 'StartUp Inc',
      period: '2019 - 2021',
      description: 'Developed core product features and optimized database performance.'
    }
  ];

  return (
    <section id="experience" className="py-32 bg-surface relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-20 text-center">EXPERIENCE</h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2"></div>

          <div className="space-y-20">
            {jobs.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-2 border-accent rounded-full transform -translate-x-[7px] md:-translate-x-1/2 z-10"></div>

                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                  <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} group`}>
                    <span className="text-accent font-mono text-sm mb-2 block">{job.period}</span>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{job.role}</h3>
                    <h4 className="text-gray-400 mb-4 font-display">{job.company}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {job.description}
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
