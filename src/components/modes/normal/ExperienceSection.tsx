import experience from '@/data/experience';
import { Briefcase, Calendar, Building } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Experience
          </h2>
          <p className="text-muted-foreground">My professional journey and contributions</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline connector for non-first items - hidden on mobile */}
              {index !== 0 && (
                <div className="hidden sm:block absolute top-0 left-6 w-px h-8 bg-border -translate-y-8"></div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Timeline marker */}
                <div className="flex-shrink-0 relative self-start sm:self-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border-2 border-foreground flex items-center justify-center">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  {/* Timeline line continuation - hidden on mobile */}
                  {index !== experience.length - 1 && (
                    <div className="hidden sm:block absolute top-12 left-1/2 w-px h-8 bg-border -translate-x-px"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card rounded-lg border border-border p-4 sm:p-6 lg:p-8 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Left column - Basic info */}
                    <div className="lg:col-span-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>

                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium">{item.company}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>{item.period}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs sm:text-sm mb-4">
                        <span className="px-2 py-1 bg-secondary rounded-md">{item.type}</span>
                        <span className="px-2 py-1 bg-secondary rounded-md">{item.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-muted text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column - Details */}
                    <div className="lg:col-span-2 mt-4 lg:mt-0">
                      <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">{item.description}</p>

                      <div>
                        <h4 className="font-medium mb-3 text-sm sm:text-base">Key Responsibilities:</h4>
                        <div className="space-y-2 sm:space-y-3">
                          {item.responsibilities.map((responsibility, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-2"></div>
                              <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{responsibility}</span>
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