import { Briefcase, Calendar, Building } from 'lucide-react';

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    type: "Full-time",
    location: "Remote",
    period: "2023 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
    responsibilities: [
      "Built microservices architecture serving 1M+ users",
      "Mentored 5 junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Collaborated with product team to define technical requirements"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    type: "Full-time", 
    location: "Cairo, Egypt",
    period: "2022 - 2023",
    description: "Developed and maintained full-stack applications for fintech startup focused on digital payments.",
    responsibilities: [
      "Created responsive web applications using React and Next.js",
      "Designed and implemented RESTful APIs with Express.js",
      "Integrated payment gateways and third-party services",
      "Optimized database queries improving performance by 40%"
    ],
    technologies: ["React", "Next.js", "Express.js", "MongoDB", "Stripe"]
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Agency Pro",
    type: "Internship",
    location: "Cairo, Egypt", 
    period: "2021 - 2022",
    description: "Worked on client projects building modern web interfaces and learning industry best practices.",
    responsibilities: [
      "Converted designs to responsive React components",
      "Implemented state management using Redux",
      "Collaborated with design team on UI/UX improvements",
      "Participated in agile development process"
    ],
    technologies: ["React", "Redux", "Sass", "JavaScript", "Figma"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey and contributions</p>
        </div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline connector for non-first items */}
              {index !== 0 && (
                <div className="absolute top-0 left-6 w-px h-8 bg-border -translate-y-8"></div>
              )}
              
              <div className="flex gap-6">
                {/* Timeline marker */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-foreground flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  {/* Timeline line continuation */}
                  {index !== experience.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-px h-8 bg-border -translate-x-px"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card rounded-lg border border-border p-8 shadow-sm">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left column - Basic info */}
                    <div className="md:col-span-1">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{item.company}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>

                      <div className="flex gap-2 text-sm mb-4">
                        <span className="px-2 py-1 bg-secondary rounded-md">{item.type}</span>
                        <span className="px-2 py-1 bg-secondary rounded-md">{item.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-4">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-muted text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column - Details */}
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      <div>
                        <h4 className="font-medium mb-3">Key Responsibilities:</h4>
                        <div className="grid gap-2">
                          {item.responsibilities.map((responsibility, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;