import { Article } from "@/types/Article";

const articles: Article[] = [
    {
        id: '1',
        title: 'Building Scalable React Applications with Modern Patterns',
        description: 'Explore advanced React patterns and architectural decisions that help build maintainable, scalable applications.',
        url: 'https://dev.to/ahmedsaber/building-scalable-react',
        platform: 'Dev.to',
        publishedAt: 'Jan 15, 2024',
        readTime: '8 min read',
        tags: ['React', 'Patterns', 'Architecture']
    },
    {
        id: '2',
        title: 'Mastering TypeScript: Advanced Types and Generics',
        description: 'Deep dive into TypeScript\'s type system, exploring advanced patterns and practical use cases.',
        url: 'https://medium.com/@ahmedsaber/typescript-advanced',
        platform: 'Medium',
        publishedAt: 'Dec 28, 2023',
        readTime: '12 min read',
        tags: ['TypeScript', 'Advanced', 'Types']
    },
    {
        id: '3',
        title: 'API Security Best Practices for Node.js Applications',
        description: 'Comprehensive guide to securing REST APIs, covering authentication, authorization, and common vulnerabilities.',
        url: 'https://medium.com/@ahmedsaber/api-security',
        platform: 'Medium',
        publishedAt: 'Nov 22, 2023',
        readTime: '10 min read',
        tags: ['Security', 'Node.js', 'API']
    },
    {
        id: '4',
        title: 'Performance Optimization in React Applications',
        description: 'Practical strategies for optimizing React app performance, from bundle size to runtime efficiency.',
        url: 'https://dev.to/ahmedsaber/react-performance',
        platform: 'Dev.to',
        publishedAt: 'Nov 5, 2023',
        readTime: '9 min read',
        tags: ['React', 'Performance', 'Optimization']
    }
];

export default articles;