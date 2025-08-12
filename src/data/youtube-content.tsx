import { YouTubeContent } from "@/types/YouTubeContent";

const youtubeContent: YouTubeContent = {
    channelStats: {
        subscribers: '1.66K',
        totalViews: '24.2K',
        videosCount: '92',
        handle: '@ahmed0saber'
    },
    videos: [
        {
            id: '1',
            title: 'Contributing to Open Source Projects',
            description: 'Complete guide to contributing to open source projects, including finding projects, making pull requests, and collaborating with other developers.',
            thumbnail: 'open-source.webp',
            views: '5.0K',
            publishedAt: 'July 26, 2023',
            duration: '01:52:13',
            url: 'https://youtube.com/playlist?list=PLNknCqb-phEjNHT607vp-4e4o3wgK9SoN&si=sd6GpwX2bJ_2RdV9',
            tags: ['Git', 'GitHub', 'Open Source']
        },
        {
            id: '2',
            title: 'Frontend Features to include in your Next Website',
            description: 'Explore various frontend features and techniques to enhance user experience and performance in your web applications.',
            thumbnail: 'frontend-features.webp',
            views: '1.7K',
            publishedAt: 'November 17, 2023',
            duration: '01:06:15',
            url: 'https://youtube.com/playlist?list=PLNknCqb-phEid1ReB-C51t4f_XP0uANES&si=gYuTISAlRXSvsclV',
            tags: ['HTML & CSS', 'JavaScript', 'Front-End']
        },
        {
            id: '3',
            title: 'Podcast for Software Developers',
            description: 'Join us for insightful discussions on software development, industry trends, and career advice for developers.',
            thumbnail: 'podcast.webp',
            views: '2.2K',
            publishedAt: 'November 15, 2023',
            duration: '03:54:01',
            url: 'https://youtube.com/playlist?list=PLNknCqb-phEjGKheIyrNwECpeE1C65nff&si=kdhxkoPypJ-ZNz01',
            tags: ['Tutorial Hell', 'Responsive Design', 'Tech Stack', 'Project Ideas', 'Software Development', 'Career Advice']
        }
    ]
};

export default youtubeContent;