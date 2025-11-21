import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit that I use to bring ideas to life. I'm always learning and exploring new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                    <span className="text-gray-300 hover:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
