import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ChevronLeft, ChevronRight, Star, GitFork } from 'lucide-react';
import openSourceProjects from '@/data/opensource-projects';

const OpenSourceSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Open-Source Contributions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Showcasing my work across open-source contributions I maintain and contribute to
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {openSourceProjects.map((project, index) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden bg-card border-border transition-fast shadow-sm animate-fade-up flex flex-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
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

                                <div className="flex flex-wrap items-stretch gap-1 mb-4 mt-auto">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <div className="relative group flex">
                                            <Badge variant="secondary" className="text-xs">
                                                +{project.tags.length - 3}
                                            </Badge>
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 text-foreground bg-card border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none whitespace-nowrap">
                                                {project.tags.slice(3).map(tag => (
                                                    <span key={tag} className="block">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-end space-x-2">
                                    <Button variant="ghost" size="sm" asChild className="p-2">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4" />
                                        </a>
                                    </Button>

                                    <div className="flex space-x-2">
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
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSourceSection;