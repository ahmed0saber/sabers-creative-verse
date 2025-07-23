import { Article } from "@/types/Article";

const articles: Article[] = [
    {
        id: '1',
        title: 'Multi-Threading With The Single-Threaded JavaScript',
        description: 'Exploring how JavaScript handles multi-threading using Web Workers, with practical examples and performance considerations.',
        url: 'https://eqraatech.com/multi-threading-with-the-single-threaded-javascript/',
        platform: 'EqraaTech',
        publishedAt: '28 Mar, 2024',
        readTime: '2 min read',
        tags: ['JavaScript', 'Multi-Threading', 'Web Workers']
    },
    {
        id: '2',
        title: 'Cross-Tab Communication with Broadcast Channel API',
        description: 'Exploring the Broadcast Channel API for seamless communication between browser tabs, with practical examples and use cases.',
        url: 'https://eqraatech.com/cross-tab-communication-with-broadcast-channel-api/',
        platform: 'EqraaTech',
        publishedAt: '27 Feb, 2025',
        readTime: '5 min read',
        tags: ['JavaScript', 'Web APIs', 'Broadcast Channel']
    },
    {
        id: '3',
        title: 'CSS Sprites',
        description: 'Comprehensive guide to CSS sprites, covering techniques, benefits, and implementation strategies.',
        url: 'https://eqraatech.com/css-sprites/',
        platform: 'EqraaTech',
        publishedAt: '5 Mar, 2024',
        readTime: '3 min read',
        tags: ['CSS', 'Web Design', 'Performance']
    },
    {
        id: '4',
        title: 'Flexbox vs. Grid in CSS',
        description: 'Comparative analysis of Flexbox and Grid layout systems in CSS, with practical examples and use cases.',
        url: 'https://eqraatech.com/flexbox-vs-grid-in-css/',
        platform: 'EqraaTech',
        publishedAt: '9 Dec, 2024',
        readTime: '5 min read',
        tags: ['CSS', 'Web Design']
    },
    {
        id: '5',
        title: 'How to write better Git commit messages',
        description: 'Comprehensive guide to writing effective Git commit messages, covering best practices and common pitfalls.',
        url: 'https://dev.to/ahmed0saber/how-to-write-better-git-commit-messages--40al',
        platform: 'Dev.to',
        publishedAt: 'Mar 26, 2023',
        readTime: '2 min read',
        tags: ['Git', 'Version Control']
    },
    {
        id: '6',
        title: 'How to gain experience without work',
        description: 'Practical strategies for gaining experience and building skills without traditional employment.',
        url: 'https://ahmed0saber.medium.com/how-to-gain-experience-without-work-4dc954627a45',
        platform: 'Medium',
        publishedAt: 'Mar 23, 2023',
        readTime: '2 min read',
        tags: ['Career Development', 'Experience']
    }
];

export default articles;