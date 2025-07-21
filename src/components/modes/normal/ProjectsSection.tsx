import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  images: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern payment integration',
      longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payment processing, admin dashboard, and mobile-responsive design.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
      images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3'],
      githubUrl: 'https://github.com/ahmedsaber/ecommerce',
      demoUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: '2',
      title: 'AI Content Generator',
      description: 'AI-powered tool for generating marketing content',
      longDescription: 'An intelligent content generation tool that uses AI to create marketing copy, blog posts, and social media content. Built with Next.js and integrated with multiple AI APIs.',
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'Prisma', 'Vercel'],
      images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'],
      githubUrl: 'https://github.com/ahmedsaber/ai-content',
      demoUrl: 'https://ai-content-demo.com',
      featured: true
    },
    {
      id: '3',
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A powerful project management application with real-time collaboration, file sharing, time tracking, and comprehensive reporting features.',
      tags: ['Vue.js', 'Express', 'Socket.io', 'MongoDB', 'Docker'],
      images: ['https://images.unsplash.com/photo-1611224923853-80b023f02d71', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'],
      githubUrl: 'https://github.com/ahmedsaber/taskapp',
      demoUrl: 'https://taskapp-demo.com',
      featured: false
    },
    {
      id: '4',
      title: 'Developer Portfolio CMS',
      description: 'Headless CMS specifically designed for developer portfolios',
      longDescription: 'A headless CMS solution tailored for developers to showcase their work, manage blog content, and track portfolio analytics.',
      tags: ['React', 'Strapi', 'GraphQL', 'AWS', 'CloudFront'],
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f', 'https://images.unsplash.com/photo-1555421689-d68471e189f2'],
      githubUrl: 'https://github.com/ahmedsaber/portfolio-cms',
      demoUrl: 'https://portfolio-cms-demo.com',
      featured: false
    }
  ];

  const nextImage = (projectId: string, maxImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages
    }));
  };

  const prevImage = (projectId: string, maxImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxImages) % maxImages
    }));
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my best work and technical achievements
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden bg-card/50 border-border hover:border-primary/50 transition-smooth card-elevated group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Slider */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.images[currentImageIndex[project.id] || 0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(project.id, project.images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-smooth hover:bg-black/70"
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </button>
                    <button
                      onClick={() => nextImage(project.id, project.images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-smooth hover:bg-black/70"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </button>
                  </>
                )}
                
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.longDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild className="transition-smooth hover:bg-primary/10">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="transition-smooth hover:scale-105">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden bg-card/30 border-border hover:border-primary/30 transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
