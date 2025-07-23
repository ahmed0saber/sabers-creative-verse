interface OpenSourceProject {
    id: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    stars: number;
    forks: number;
    role: 'maintainer' | 'contributor';
    contributions: string;
}

export type { OpenSourceProject };