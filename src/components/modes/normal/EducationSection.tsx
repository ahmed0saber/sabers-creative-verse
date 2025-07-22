import education from '@/data/education';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Education & Certificates
          </h2>
          <p className="text-muted-foreground">My academic journey and achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on larger screens */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-8 sm:space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 self-start sm:self-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-border flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-lg border border-border p-4 sm:p-6 shadow-sm w-full">
                  <div className="flex flex-col gap-3 mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium">{item.institution}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-sm sm:text-base pl-6 sm:pl-0">{item.location}</span>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-medium">GPA: </span>
                    <span className="text-sm text-muted-foreground">{item.gpa}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-2"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default EducationSection;