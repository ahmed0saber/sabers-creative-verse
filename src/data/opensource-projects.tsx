import { OpenSourceProject } from "@/types/OpenSourceProject";

const openSourceProjects: OpenSourceProject[] = [
    {
        id: '01',
        title: 'React Query',
        description: 'Powerful data synchronization for React',
        longDescription: 'Contributed to React Query, a powerful library for data fetching, caching, and synchronization in React applications.',
        tags: ['React', 'TypeScript', 'Testing', 'Performance'],
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
        githubUrl: 'https://github.com/ahmedsaber/tailwind-components',
        role: 'maintainer',
        contributions: 'Created and maintain 50+ reusable components',
        stars: 892,
        forks: 156
    }
];

export default openSourceProjects;