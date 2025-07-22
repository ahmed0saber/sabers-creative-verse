import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Cairo University",
    location: "Cairo, Egypt",
    period: "2018 - 2022",
    gpa: "3.8/4.0",
    achievements: [
      "Graduated with Honors",
      "Dean's List for 3 consecutive semesters",
      "Best Graduation Project Award"
    ]
  },
  {
    degree: "High School Diploma",
    institution: "Al-Azhar High School",
    location: "Cairo, Egypt", 
    period: "2015 - 2018",
    gpa: "95%",
    achievements: [
      "Valedictorian",
      "Mathematics Olympiad Winner",
      "Science Fair First Place"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">My academic journey and achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-lg border border-border p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{item.institution}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-medium">GPA: </span>
                    <span className="text-sm text-muted-foreground">{item.gpa}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0"></div>
                          {achievement}
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