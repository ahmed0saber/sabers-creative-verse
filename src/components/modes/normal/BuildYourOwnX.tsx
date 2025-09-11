import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import buildYourOwnXProjects from '@/data/build-x-projects';

const BuildYourOwnXSection = () => {
    return (
        <section id="buildyourownx" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Build Your Own X
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Hands-on projects where I rebuild popular tools and systems from scratch to understand how they work
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {buildYourOwnXProjects.map((project, index) => (
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
                                </div>

                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-end space-x-2">
                                    <Button variant="ghost" size="sm" asChild className="p-2">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub repository">
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

export default BuildYourOwnXSection;