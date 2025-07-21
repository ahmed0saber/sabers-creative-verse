import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Star, GitFork, ExternalLink, User, UserCheck } from 'lucide-react';

interface OpenSourceProject {
  id: string;
  title: string;
  description: string;
  contributionDescription: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  role: 'maintainer' | 'contributor';
  featured: boolean;
}

const OpenSourceSection = () => {
  const projects: OpenSourceProject[] = [
    {
      id: '1',
      title: 'React Admin Dashboard',
      description: 'A comprehensive admin dashboard template built with React, TypeScript, and Tailwind CSS',
      contributionDescription: 'Lead maintainer - Built the entire project from scratch, implemented authentication system, data visualization components, and responsive design.',
      url: 'https://github.com/ahmedsaber/react-admin-dashboard',
      stars: 1250,
      forks: 340,
      language: 'TypeScript',
      role: 'maintainer',
      featured: true
    },
    {
      id: '2',
      title: 'API Rate Limiter',
      description: 'Express.js middleware for implementing rate limiting with Redis backend support',
      contributionDescription: 'Core contributor - Added Redis integration, improved performance by 40%, and implemented sliding window algorithm for more accurate rate limiting.',
      url: 'https://github.com/community/api-rate-limiter',
      stars: 890,
      forks: 156,
      language: 'JavaScript',
      role: 'contributor',
      featured: true
    },
    {
      id: '3',
      title: 'CSS Grid Generator',
      description: 'Visual tool for generating CSS Grid layouts with an intuitive drag-and-drop interface',
      contributionDescription: 'Project maintainer - Created the entire application, implemented grid visualization, export functionality, and responsive preview modes.',
      url: 'https://github.com/ahmedsaber/css-grid-generator',
      stars: 567,
      forks: 89,
      language: 'Vue',
      role: 'maintainer',
      featured: false
    },
    {
      id: '4',
      title: 'Docker Node.js Starter',
      description: 'Production-ready Docker setup for Node.js applications with best practices',
      contributionDescription: 'Regular contributor - Added multi-stage builds, security improvements, and comprehensive documentation for deployment strategies.',
      url: 'https://github.com/community/docker-nodejs-starter',
      stars: 423,
      forks: 78,
      language: 'Dockerfile',
      role: 'contributor',
      featured: false
    },
    {
      id: '5',
      title: 'TypeScript Utilities',
      description: 'Collection of useful TypeScript utility types and helper functions',
      contributionDescription: 'Co-maintainer - Contributed advanced utility types, improved type safety, and added comprehensive test coverage.',
      url: 'https://github.com/community/typescript-utilities',
      stars: 2100,
      forks: 298,
      language: 'TypeScript',
      role: 'contributor',
      featured: true
    },
    {
      id: '6',
      title: 'Markdown Blog Engine',
      description: 'Static site generator for markdown-based blogs with themes support',
      contributionDescription: 'Project creator and maintainer - Built the entire engine, theme system, plugin architecture, and deployment automation.',
      url: 'https://github.com/ahmedsaber/markdown-blog-engine',
      stars: 345,
      forks: 67,
      language: 'JavaScript',
      role: 'maintainer',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': 'bg-blue-600',
      'JavaScript': 'bg-yellow-600',
      'Vue': 'bg-green-600',
      'React': 'bg-cyan-600',
      'Dockerfile': 'bg-blue-800',
      'Python': 'bg-green-700',
    };
    return colors[language] || 'bg-gray-600';
  };

  return (
    <section id="opensource" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-6">
            <Github className="h-12 w-12 text-primary mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-glow">
              Open Source <span className="text-primary">Contributions</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the developer community through open source projects
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="flex items-center justify-center space-x-8 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Contributions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5.8k</div>
            <div className="text-sm text-muted-foreground">Total Stars</div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="p-6 bg-card/50 border-border hover:border-primary/50 transition-smooth hover:scale-105 card-elevated group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                  <span className="text-sm text-muted-foreground">{project.language}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {project.role === 'maintainer' ? (
                    <Badge className="bg-primary text-primary-foreground">
                      <UserCheck className="h-3 w-3 mr-1" />
                      Maintainer
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <User className="h-3 w-3 mr-1" />
                      Contributor
                    </Badge>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="bg-secondary/30 p-4 rounded-lg mb-4">
                <h4 className="text-sm font-semibold mb-2 text-accent">My Contributions:</h4>
                <p className="text-sm text-muted-foreground">
                  {project.contributionDescription}
                </p>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  {formatNumber(project.stars)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <GitFork className="h-4 w-4 mr-1" />
                  {formatNumber(project.forks)}
                </div>
              </div>

              <Button asChild className="w-full transition-smooth hover:scale-105">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="p-4 bg-card/30 border-border hover:border-primary/30 transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getLanguageColor(project.language)}`}></div>
                    <span className="text-xs text-muted-foreground">{project.language}</span>
                  </div>
                  {project.role === 'maintainer' ? (
                    <UserCheck className="h-4 w-4 text-primary" />
                  ) : (
                    <User className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                <h4 className="text-lg font-semibold mb-2 line-clamp-1">
                  {project.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center space-x-3 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {formatNumber(project.stars)}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <GitFork className="h-3 w-3 mr-1" />
                    {formatNumber(project.forks)}
                  </div>
                </div>

                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    View
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribution CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="inline-block p-8 bg-gradient-cyber border-primary/30">
            <Github className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Interested in contributing to open source or collaborating on a project?
            </p>
            <Button asChild size="lg" className="neon-glow">
              <a href="https://github.com/ahmedsaber" target="_blank" rel="noopener noreferrer">
                Follow on GitHub
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
