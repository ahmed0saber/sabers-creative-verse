import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Youtube, Eye, Calendar, ExternalLink } from 'lucide-react';

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

const YouTubeSection = () => {
  const videos: YouTubeVideo[] = [
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
  ];

  const channelStats = {
    subscribers: '85.2K',
    totalViews: '2.1M',
    videosCount: '127'
  };

  return (
    <section id="youtube" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-glow">
              YouTube Content
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Educational programming content helping developers learn and grow
          </p>

          {/* Channel Stats */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{channelStats.subscribers}</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{channelStats.totalViews}</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{channelStats.videosCount}</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
          </div>

          <Button asChild className="neon-glow transition-smooth">
            <a href="https://youtube.com/@ahmedsaber" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe to Channel
            </a>
          </Button>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className="overflow-hidden bg-card/50 border-border transition-smooth card-elevated group animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden w-full">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-smooth"
                />

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              <div className="p-6 w-full flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {video.description}
                </p>

                {/* Video Stats */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 mt-auto">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {video.views} views
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {video.publishedAt}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Watch Button */}
                <Button
                  asChild
                  className="w-full transition-smooth"
                >
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Watch Video
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="inline-block p-8 bg-gradient-cyber border-primary/30">
            <Youtube className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Subscribe for weekly programming tutorials, tech talks, and development tips
            </p>
            <Button asChild size="lg" className="neon-glow">
              <a href="https://youtube.com/@ahmedsaber" target="_blank" rel="noopener noreferrer">
                Subscribe Now
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;