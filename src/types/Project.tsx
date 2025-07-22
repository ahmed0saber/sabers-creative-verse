interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    images: string[];
    githubUrl?: string;
    demoUrl: string;
    story?: string;
}

export type { Project };
