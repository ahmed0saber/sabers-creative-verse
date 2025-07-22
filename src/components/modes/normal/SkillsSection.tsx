import { Card } from '@/components/ui/card';
import skillsCategories from '@/data/skills';

const SkillsSection = () => {
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

        {skillsCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-foreground text-center">
              {category.name}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, index) => (
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
