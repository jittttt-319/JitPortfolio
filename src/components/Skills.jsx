import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Three.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'GraphQL', level: 70 }
  ];

  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              MY <br />
              <span className="text-accent">ARSENAL</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              A curated stack of technologies I use to push the boundaries of what's possible on the web.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Creative Coding', 'Performance', 'Accessibility', 'Animation'].map((tag, i) => (
                <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-display font-bold tracking-wider">{skill.name}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/10 w-full overflow-hidden">
                  <div
                    className="h-full bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
