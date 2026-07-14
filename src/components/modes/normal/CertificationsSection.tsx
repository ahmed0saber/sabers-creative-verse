import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import certifications from '@/data/certifications';
import { Card } from '@/components/ui/card';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Certifications
          </h2>
          <p className="text-muted-foreground">My professional certifications and licenses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group relative bg-card border-border p-6 hover:border-primary/50 transition-smooth overflow-hidden flex flex-col h-full card-elevated"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-smooth"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-smooth">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth leading-tight">
                {cert.title}
              </h3>

              <div className="space-y-2 mb-6 flex-1">
                <div className="flex items-center text-muted-foreground text-sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{cert.organization}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-smooth w-fit mt-auto"
              >
                Verify Credential
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
