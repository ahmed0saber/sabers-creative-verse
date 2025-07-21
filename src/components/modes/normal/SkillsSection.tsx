import React from 'react';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', category: 'Frontend', icon: '🔷' },
    { name: 'Next.js', category: 'Frontend', icon: '▲' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: '💨' },
    { name: 'Vue.js', category: 'Frontend', icon: '💚' },

    // Backend
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'PostgreSQL', category: 'Backend', icon: '🐘' },
    { name: 'MongoDB', category: 'Backend', icon: '🍃' },
    { name: 'Redis', category: 'Backend', icon: '🔴' },

    // DevOps & Tools
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'AWS', category: 'DevOps', icon: '☁️' },
    { name: 'Git', category: 'DevOps', icon: '📚' },
    { name: 'CI/CD', category: 'DevOps', icon: '🔄' },

    // Other
    { name: 'UI/UX Design', category: 'Design', icon: '🎨' },
    { name: 'Content Creation', category: 'Content', icon: '📹' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-foreground text-center">
              {category}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <Card 
                    key={skill.name} 
                    className="p-4 bg-card border-border transition-fast shadow-sm group animate-fade-up"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.1)}s` }}
                  >
                    <div className="text-center">
                      <span className="text-2xl mb-2 block group-hover:scale-110 transition-fast">
                        {skill.icon}
                      </span>
                      <h4 className="text-sm font-medium">{skill.name}</h4>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Also experienced with
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Figma', 
              'Photoshop', 'After Effects', 'Linux', 'Nginx', 'Kubernetes'
            ].map((tech, index) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-secondary/30 border border-border rounded-full text-sm transition-fast"
                style={{ animationDelay: `${0.9 + (index * 0.05)}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
