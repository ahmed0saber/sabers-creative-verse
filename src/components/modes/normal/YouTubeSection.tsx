import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Youtube, Eye, Calendar, ExternalLink } from 'lucide-react';
import youtubeContent from '@/data/youtube-content';

const YouTubeSection = () => {
  return (
    <section id="youtube" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-glow">
              YouTube Content
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Educational programming content helping developers learn and grow
          </p>

          {/* Channel Stats */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{youtubeContent.channelStats.subscribers}</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{youtubeContent.channelStats.totalViews}</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{youtubeContent.channelStats.videosCount}</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
          </div>

          <Button asChild className="neon-glow transition-smooth">
            <a href="https://youtube.com/@ahmed0saber" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe to Channel
            </a>
          </Button>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeContent.videos.map((video, index) => (
            <Card
              key={video.id}
              className="bg-card/50 border-border transition-smooth card-elevated animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden w-full group overflow-y-hidden rounded-t-lg">
                <img
                  src={`images/youtube/${video.thumbnail}`}
                  alt={video.title}
                  className="w-full transition-smooth"
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
                <div className="flex flex-wrap items-stretch gap-1 mb-4 mt-auto">
                  {video.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {video.tags.length > 3 && (
                    <div className="relative group flex">
                      <Badge variant="secondary" className="text-xs">
                        +{video.tags.length - 3}
                      </Badge>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 text-foreground bg-card border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none whitespace-nowrap">
                        {video.tags.slice(3).map(tag => (
                          <span key={tag} className="block">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Watch Button */}
                <Button
                  asChild
                  className="w-full transition-smooth"
                >
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Watch Now
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
              Subscribe for various programming tutorials, tech talks, and development tips
            </p>
            <Button asChild size="lg" className="neon-glow">
              <a href="https://youtube.com/@ahmed0saber" target="_blank" rel="noopener noreferrer">
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