import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  MessageCircle,
  ExternalLink,
  Users,
  BookOpen
} from 'lucide-react';

interface SocialPlatform {
  name: string;
  icon: ReactNode;
  url: string;
  description: string;
  followers?: string;
  handle: string;
  color: string;
  bgGradient: string;
}

const ConnectSection = () => {
  const socialPlatforms: SocialPlatform[] = [
    {
      name: 'GitHub',
      icon: <Github className="h-8 w-8" />,
      url: 'https://github.com/ahmedsaber',
      description: 'Follow my open source work and code repositories',
      followers: '2.3k',
      handle: '@ahmedsaber',
      color: 'text-white',
      bgGradient: 'from-gray-800 to-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-8 w-8" />,
      url: 'https://linkedin.com/in/ahmedsaber',
      description: 'Connect professionally and see my career journey',
      followers: '5.1k',
      handle: '/in/ahmedsaber',
      color: 'text-white',
      bgGradient: 'from-blue-600 to-blue-700'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-8 w-8" />,
      url: 'https://youtube.com/@ahmedsaber',
      description: 'Subscribe for programming tutorials and tech content',
      followers: '85.2k',
      handle: '@ahmedsaber',
      color: 'text-white',
      bgGradient: 'from-red-600 to-red-700'
    },
    {
      name: 'Telegram',
      icon: <MessageCircle className="h-8 w-8" />,
      url: 'https://t.me/ahmedsaber',
      description: 'Join my channel for quick tips and updates',
      followers: '12.5k',
      handle: '@ahmedsaber',
      color: 'text-white',
      bgGradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Dev.to',
      icon: <BookOpen className="h-8 w-8" />,
      url: 'https://dev.to/ahmedsaber',
      description: 'Read my technical articles and tutorials',
      followers: '3.2k',
      handle: '@ahmedsaber',
      color: 'text-white',
      bgGradient: 'from-green-600 to-green-700'
    },
    {
      name: 'Email',
      icon: <Mail className="h-8 w-8" />,
      url: 'mailto:ahmed@example.com',
      description: 'Get in touch for collaboration opportunities',
      handle: 'ahmed@example.com',
      color: 'text-white',
      bgGradient: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <section id="connect" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, creators, and tech enthusiasts.
            Reach out on any platform you prefer!
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <Card
              key={platform.name}
              className="overflow-hidden border-border hover:border-primary/50 transition-smooth card-elevated group animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`p-6 bg-gradient-to-br ${platform.bgGradient} ${platform.color} relative overflow-hidden w-full flex-1 flex flex-col`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 w-full">
                  <div className="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16">
                    {platform.icon}
                  </div>
                </div>

                <div className="relative z-10 w-full flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {platform.icon}
                      <h3 className="text-xl font-semibold">{platform.name}</h3>
                    </div>
                    {platform.followers && (
                      <div className="text-right">
                        <div className="text-sm opacity-80">Followers</div>
                        <div className="font-semibold">{platform.followers}</div>
                      </div>
                    )}
                  </div>

                  <p className="text-sm opacity-90 mb-4">
                    {platform.description}
                  </p>

                  <div className="text-sm opacity-80 mb-4">
                    {platform.handle}
                  </div>

                  <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 transition-smooth mt-auto"
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {platform.name === 'Email' ? 'Send Email' : `Follow on ${platform.name}`}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Form Alternative */}
        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="p-8 bg-gradient-cyber border-primary/30 text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're interested in discussing a project, have a question about my content,
              or just want to chat about technology, I'd love to hear from you. Choose your
              preferred platform above or send me a direct email.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild size="lg" className="neon-glow">
                <a href="mailto:ahmed@example.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50">
                <a href="https://linkedin.com/in/ahmedsaber" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;