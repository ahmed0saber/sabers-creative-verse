import journey from '@/data/journey';
import { Rocket, Calendar, ExternalLink } from 'lucide-react';
import JourneyReaderWidget from './components/JourneyReaderWidget';

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 bg-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{journey.headline}</p>
        </div>

        {/* Story */}
        <div className="bg-card rounded-lg border border-border p-6 sm:p-8 shadow-sm mb-12 sm:mb-16">
          <JourneyReaderWidget text={journey.story} />
          
          <div className="prose prose-sm sm:prose-base max-w-none">
            {journey.story.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed mb-4 last:mb-0 text-sm sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 sm:mb-16">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-6 sm:space-y-8">
            {journey.milestones.map((milestone, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 self-start sm:self-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-border flex items-center justify-center">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card rounded-lg border border-border p-4 sm:p-6 shadow-sm w-full">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="font-semibold text-foreground">{milestone.year}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">References</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {journey.references.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card rounded-lg border border-border p-4 shadow-sm hover:border-foreground/30 transition-smooth group"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground flex-shrink-0 transition-smooth" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth leading-snug">
                  {ref.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
