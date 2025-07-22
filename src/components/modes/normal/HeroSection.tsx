import { Button } from '@/components/ui/button';
import developerDetails from '@/data/developer-details';
import { Github, Linkedin, Youtube, Mail, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/ahmedsaber',
      label: 'GitHub',
      color: 'hover:text-violet-500'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/ahmedsaber',
      label: 'LinkedIn',
      color: 'hover:text-teal-500'
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: 'https://youtube.com/@ahmedsaber',
      label: 'YouTube',
      color: 'hover:text-red-500'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:ahmed@example.com',
      label: 'Email',
      color: 'hover:text-yellow-500'
    },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-muted/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 mt-6">
              <span className="text-foreground">{developerDetails.name}</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-muted-foreground">
              {developerDetails.title}
            </h2>

            <p className="text-lg md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {developerDetails.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="animate-fade-up mb-12" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-secondary/50 border border-border rounded-full transition-fast ${link.color} group`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="shadow-md transition-fast px-8 py-6 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="transition-fast px-8 py-6 text-lg"
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;