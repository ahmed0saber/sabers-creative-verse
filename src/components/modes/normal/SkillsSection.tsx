import React from 'react';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 90, category: 'Frontend', icon: '🔷' },
    { name: 'Next.js', level: 88, category: 'Frontend', icon: '▲' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '💨' },
    { name: 'Vue.js', level: 85, category: 'Frontend', icon: '💚' },

    // Backend
    { name: 'Node.js', level: 93, category: 'Backend', icon: '🟢' },
    { name: 'Python', level: 87, category: 'Backend', icon: '🐍' },
    { name: 'PostgreSQL', level: 85, category: 'Backend', icon: '🐘' },
    { name: 'MongoDB', level: 82, category: 'Backend', icon: '🍃' },
    { name: 'Redis', level: 78, category: 'Backend', icon: '🔴' },

    // DevOps & Tools
    { name: 'Docker', level: 88, category: 'DevOps', icon: '🐳' },
    { name: 'AWS', level: 85, category: 'DevOps', icon: '☁️' },
    { name: 'Git', level: 95, category: 'DevOps', icon: '📚' },
    { name: 'CI/CD', level: 82, category: 'DevOps', icon: '🔄' },

    // Other
    { name: 'UI/UX Design', level: 75, category: 'Design', icon: '🎨' },
    { name: 'Content Creation', level: 90, category: 'Content', icon: '📹' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="text-primary">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <Card 
                    key={skill.name} 
                    className="p-6 bg-card/50 border-border hover:border-primary/50 transition-smooth hover:scale-105 card-elevated group animate-fade-up"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.1)}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3 group-hover:scale-110 transition-smooth">
                        {skill.icon}
                      </span>
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Proficiency</span>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-glow-pulse"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`
                          }}
                        />
                      </div>
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
                className="px-4 py-2 bg-secondary/30 border border-border rounded-full text-sm transition-smooth hover:bg-primary/20 hover:border-primary/50 hover:scale-105"
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
