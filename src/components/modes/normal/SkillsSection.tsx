import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    { name: 'HTML', category: 'Front-End', icon: 'html.svg' },
    { name: 'CSS', category: 'Front-End', icon: 'css.svg' },
    { name: 'JavaScript', category: 'Front-End', icon: 'js.svg' },
    { name: 'jQuery', category: 'Front-End', icon: 'jquery.png' },
    { name: 'Bootstrap', category: 'Front-End', icon: 'bootstrap.svg' },
    { name: 'Sass', category: 'Front-End', icon: 'sass.png' },
    { name: 'Tailwind CSS', category: 'Front-End', icon: 'tailwind-css.svg' },
    { name: 'React', category: 'Front-End', icon: 'react.png' },
    { name: 'Redux', category: 'Front-End', icon: 'redux.svg' },
    { name: 'TypeScript', category: 'Front-End', icon: 'typescript.svg' },
    { name: 'Next.js', category: 'Front-End', icon: 'nextjs.svg' },

    { name: 'Node.js', category: 'Back-End', icon: 'nodejs.svg' },
    { name: 'Express.js', category: 'Back-End', icon: 'express-js.svg' },
    { name: 'MongoDB', category: 'Back-End', icon: 'mongodb.svg' },
    { name: 'Redis', category: 'Back-End', icon: 'redis.svg' },
    { name: 'Next.js', category: 'Back-End', icon: 'nextjs.svg' },

    { name: 'Git', category: 'DevOps', icon: 'git.svg' },
    { name: 'CI/CD', category: 'DevOps', icon: 'ci-cd.png' },
    { name: 'Cloudflare', category: 'DevOps', icon: 'cloudflare.png' },
    { name: 'Serverless', category: 'DevOps', icon: 'serverless.png' },
    { name: 'Microfrontends', category: 'DevOps', icon: 'microfrontends.svg' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
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
                    className="p-4 bg-card border-border transition-fast shadow-sm group animate-fade-up flex flex-col items-center justify-center cursor-default hover:border-primary/50"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.1)}s` }}
                  >
                    <div className="text-center flex flex-col items-center justify-center gap-4">
                      <img src={`/images/skills/${skill.icon}`} alt={`${skill.name} icon`} className="inline-block h-12" />
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
              'REST APIs', 'GraphQL', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Figma', 
              'Sanity', 'MySQL', 'SQLite', 'Socket.IO', 'ElectronJS', 'Styled Components',
              'Framer Motion', 'GSAP', 'Three.js', 'D3.js', 'Chart.js',
              'Deno', 'Deno Deploy', 'Vercel', 'React Native', 'Expo',
            ].map((tech, index) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-secondary/30 border border-border rounded-full text-sm transition-fast hover:border-primary/50 cursor-default"
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
