import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Clock } from 'lucide-react';
import articles from '@/data/articles';

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Articles & Writings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights through technical writing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Card 
              key={article.id} 
              className="p-6 bg-card border-border transition-fast shadow-sm animate-fade-up flex flex-col items-start"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4 w-full">
                <Badge className="text-xs bg-muted text-muted-foreground">
                  {article.platform}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground space-x-3">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.publishedAt}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button variant="ghost" size="sm" asChild className="p-0 h-auto font-medium">
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Read Article
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;