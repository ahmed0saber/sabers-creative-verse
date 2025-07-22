interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    views: string;
    publishedAt: string;
    duration: string;
    url: string;
    tags: string[];
}

interface YouTubeContent {
    channelStats: {
        subscribers: string;
        totalViews: string;
        videosCount: string;
        handle: string;
    };
    videos: YouTubeVideo[];
}

export type { YouTubeContent };