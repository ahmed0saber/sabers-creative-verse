import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ChevronLeft, ChevronRight, Star, GitFork } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    images: string[];
    githubUrl: string;
    stars: number;
    forks: number;
    role: 'maintainer' | 'contributor';
    contributions: string;
}

const OpenSourceSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

    const projects: Project[] = [
        {
            id: '01',
            title: 'React Query',
            description: 'Powerful data synchronization for React',
            longDescription: 'Contributed to React Query, a powerful library for data fetching, caching, and synchronization in React applications.',
            tags: ['React', 'TypeScript', 'Testing', 'Performance'],
            images: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee'],
            githubUrl: 'https://github.com/tanstack/react-query',
            role: 'contributor',
            contributions: 'Added TypeScript improvements and performance optimizations',
            stars: 35600,
            forks: 2400
        },
        {
            id: '02',
            title: 'Tailwind UI Components',
            description: 'Open-source component library',
            longDescription: 'A collection of beautiful, accessible React components built with Tailwind CSS.',
            tags: ['React', 'Tailwind', 'TypeScript', 'Storybook'],
            images: ['https://images.unsplash.com/photo-1555421689-d68471e189f2'],
            githubUrl: 'https://github.com/ahmedsaber/tailwind-components',
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
        <section id="opensource" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Open-Source Contributions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Showcasing my work across open-source contributions I maintain and contribute to
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden bg-card border-border transition-fast shadow-sm group animate-fade-up flex flex-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image Slider */}
                            <div className="relative h-48 overflow-hidden w-full">
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

                            <div className="p-6 w-full flex-1 flex flex-col">
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

                                <div className="flex flex-wrap gap-1 mb-4 mt-auto">
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
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSourceSection;