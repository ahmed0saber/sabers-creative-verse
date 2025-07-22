import { YouTubeContent } from "@/types/YouTubeContent";

const youtubeContent: YouTubeContent = {
    channelStats: {
        subscribers: '85.2K',
        totalViews: '2.1M',
        videosCount: '127',
        handle: '@ahmed0saber'
    },
    videos: [
        {
            id: '1',
            title: 'Building a Full-Stack App with React & Node.js',
            description: 'Complete tutorial on creating a modern web application from scratch, covering authentication, database design, and deployment.',
            thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
            views: '125K',
            publishedAt: '2 weeks ago',
            duration: '45:30',
            url: 'https://youtube.com/watch?v=example1',
            tags: ['React', 'Node.js', 'Tutorial']
        },
        {
            id: '2',
            title: 'Advanced TypeScript Patterns',
            description: 'Deep dive into advanced TypeScript concepts including generics, conditional types, and utility types for better code quality.',
            thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
            views: '89K',
            publishedAt: '1 month ago',
            duration: '32:15',
            url: 'https://youtube.com/watch?v=example2',
            tags: ['TypeScript', 'Advanced', 'Patterns']
        },
        {
            id: '3',
            title: 'Deploying Apps with Docker & AWS',
            description: 'Learn how to containerize your applications and deploy them to AWS using modern DevOps practices and CI/CD pipelines.',
            thumbnail: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800',
            views: '67K',
            publishedAt: '3 weeks ago',
            duration: '38:42',
            url: 'https://youtube.com/watch?v=example3',
            tags: ['Docker', 'AWS', 'DevOps']
        },
        {
            id: '4',
            title: 'State Management with Redux Toolkit',
            description: 'Modern approach to Redux using Redux Toolkit, including best practices for large-scale React applications.',
            thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
            views: '156K',
            publishedAt: '1 month ago',
            duration: '41:20',
            url: 'https://youtube.com/watch?v=example4',
            tags: ['Redux', 'React', 'State Management']
        },
        {
            id: '5',
            title: 'CSS Grid & Flexbox Masterclass',
            description: 'Master modern CSS layout techniques with practical examples and real-world use cases for responsive design.',
            thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
            views: '203K',
            publishedAt: '2 months ago',
            duration: '52:18',
            url: 'https://youtube.com/watch?v=example5',
            tags: ['CSS', 'Layout', 'Responsive']
        },
        {
            id: '6',
            title: 'API Design Best Practices',
            description: 'Learn how to design scalable and maintainable APIs with proper authentication, error handling, and documentation.',
            thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
            views: '98K',
            publishedAt: '3 months ago',
            duration: '36:55',
            url: 'https://youtube.com/watch?v=example6',
            tags: ['API', 'Backend', 'Best Practices']
        }
    ]
};

export default youtubeContent;