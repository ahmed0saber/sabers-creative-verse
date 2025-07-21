import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Star, GitFork, Heart } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  images: string[];
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
  type: 'project' | 'opensource';
  role?: 'maintainer' | 'contributor';
  contributions?: string;
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
      type: 'project',
      stars: 245,
      forks: 67
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
      type: 'project',
      stars: 189,
      forks: 34
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
      type: 'project',
      stars: 156,
      forks: 28
    },
    {
      id: '4',
      title: 'React Query',
      description: 'Powerful data synchronization for React',
      longDescription: 'Contributed to React Query, a powerful library for data fetching, caching, and synchronization in React applications.',
      tags: ['React', 'TypeScript', 'Testing', 'Performance'],
      images: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee'],
      githubUrl: 'https://github.com/tanstack/react-query',
      type: 'opensource',
      role: 'contributor',
      contributions: 'Added TypeScript improvements and performance optimizations',
      stars: 35600,
      forks: 2400
    },
    {
      id: '5',
      title: 'Tailwind UI Components',
      description: 'Open-source component library',
      longDescription: 'A collection of beautiful, accessible React components built with Tailwind CSS.',
      tags: ['React', 'Tailwind', 'TypeScript', 'Storybook'],
      images: ['https://images.unsplash.com/photo-1555421689-d68471e189f2'],
      githubUrl: 'https://github.com/ahmedsaber/tailwind-components',
      type: 'opensource',
      role: 'maintainer',
      contributions: 'Created and maintain 50+ reusable components',
      stars: 892,
      forks: 156
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

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects & Contributions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work across personal projects and open-source contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden bg-card border-border transition-fast shadow-sm group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Slider */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.images[currentImageIndex[project.id] || 0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-fast"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(project.id, project.images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-fast"
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </button>
                    <button
                      onClick={() => nextImage(project.id, project.images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-fast"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </button>
                  </>
                )}
                
                <div className="absolute top-4 left-4">
                  {project.type === 'opensource' ? (
                    <Badge className="bg-orange text-white">
                      <Heart className="h-3 w-3 mr-1" />
                      Open Source
                    </Badge>
                  ) : (
                    <Badge className="bg-blue text-white">Project</Badge>
                  )}
                </div>

                {/* GitHub Stats */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.stars && (
                    <Badge variant="secondary" className="text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      {project.stars > 1000 ? `${(project.stars / 1000).toFixed(1)}k` : project.stars}
                    </Badge>
                  )}
                  {project.forks && (
                    <Badge variant="secondary" className="text-xs">
                      <GitFork className="h-3 w-3 mr-1" />
                      {project.forks}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>
                  {project.role && (
                    <Badge variant="outline" className="text-xs">
                      {project.role}
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {project.contributions && (
                  <p className="text-xs text-muted-foreground mb-4 italic">
                    {project.contributions}
                  </p>
                )}
                
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
                  <Button variant="ghost" size="sm" asChild className="p-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button variant="ghost" size="sm" asChild className="p-2">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;