
import React from 'react';

const skills = [
  { name: 'Angular', level: 90, category: 'Framework' },
  { name: 'React', level: 85, category: 'Framework' },
  { name: 'JavaScript', level: 90, category: 'Language' },
  { name: 'TypeScript', level: 85, category: 'Language' },
  { name: 'CSS/SASS', level: 90, category: 'Styling' },
  { name: 'Tailwind CSS', level: 85, category: 'Styling' },
  { name: 'Bootstrap', level: 80, category: 'Styling' },
  { name: 'Aceternity', level: 75, category: 'Animation' },
  { name: 'NX Monorepo', level: 70, category: 'Tools' },
  { name: 'PrimeNG', level: 80, category: 'UI Library' },
];

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  return (
    <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{skill.name}</h3>
        <span className="text-sm text-muted-foreground bg-accent px-2 py-1 rounded-full">
          {skill.category}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-purple-600 group-hover:to-primary"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern frontend technologies and frameworks with over 2 years of professional experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
