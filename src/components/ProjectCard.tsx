import { ChevronLeft, ChevronRight, ExternalLink, Github, BookOpen } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Project } from "@/types/Project";

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const nextImage = () => {
        setCurrentImageIndex(prev => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <Card
            key={project.id}
            className="bg-card border-border transition-fast shadow-sm animate-fade-up flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Image Slider */}
            <div className="relative w-full group overflow-hidden rounded-t-lg">
                <img
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-fast"
                />

                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={() => prevImage()}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full md:opacity-0 opacity-1 group-hover:opacity-100 transition-fast"
                        >
                            <ChevronLeft className="h-4 w-4 text-white" />
                        </button>
                        <button
                            onClick={() => nextImage()}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full md:opacity-0 opacity-1 group-hover:opacity-100 transition-fast"
                        >
                            <ChevronRight className="h-4 w-4 text-white" />
                        </button>
                    </>
                )}

                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {currentImageIndex + 1} / {project.images.length}
                </div>
            </div>

            <div className="p-6 w-auto flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">
                        {project.title}
                    </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

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

                <div className="flex space-x-2 max-w-full">
                    {project.story && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" className="p-2">
                                    <BookOpen className="h-4 w-4" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>{project.title} - Project Story</DialogTitle>
                                    <DialogDescription>
                                        The story behind this project
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4 text-sm leading-relaxed whitespace-pre-wrap">
                                    {project.story}
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                    {project.githubUrl && (
                        <Button variant="ghost" size="sm" asChild className="p-2">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                            </a>
                        </Button>
                    )}
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
    )
}
