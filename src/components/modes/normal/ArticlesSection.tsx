import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  platform: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

const ArticlesSection = () => {
  const articles: Article[] = [
    {
      id: '1',
      title: 'Building Scalable React Applications with Modern Patterns',
      description: 'Explore advanced React patterns including compound components, render props, and custom hooks for building maintainable applications.',
      url: 'https://dev.to/ahmedsaber/building-scalable-react',
      platform: 'Dev.to',
      publishedAt: 'Jan 15, 2024',
      readTime: '8 min read',
      tags: ['React', 'Patterns', 'Architecture'],
      featured: true
    },
    {
      id: '2',
      title: 'Mastering TypeScript: Advanced Types and Generics',
      description: 'Deep dive into TypeScript advanced features that will make your code more type-safe and maintainable.',
      url: 'https://medium.com/@ahmedsaber/typescript-advanced',
      platform: 'Medium',
      publishedAt: 'Dec 28, 2023',
      readTime: '12 min read',
      tags: ['TypeScript', 'Advanced', 'Types'],
      featured: true
    },
    {
      id: '3',
      title: 'Modern CSS Techniques for Better User Interfaces',
      description: 'Learn about CSS Grid, Flexbox, and modern layout techniques to create beautiful and responsive designs.',
      url: 'https://dev.to/ahmedsaber/modern-css',
      platform: 'Dev.to',
      publishedAt: 'Dec 10, 2023',
      readTime: '6 min read',
      tags: ['CSS', 'UI/UX', 'Design'],
      featured: false
    },
    {
      id: '4',
      title: 'API Security Best Practices for Node.js Applications',
      description: 'Comprehensive guide to securing your Node.js APIs with authentication, authorization, and data validation.',
      url: 'https://medium.com/@ahmedsaber/api-security',
      platform: 'Medium',
      publishedAt: 'Nov 22, 2023',
      readTime: '10 min read',
      tags: ['Security', 'Node.js', 'API'],
      featured: false
    },
    {
      id: '5',
      title: 'Performance Optimization in React Applications',
      description: 'Techniques and strategies to optimize React app performance including code splitting, memoization, and lazy loading.',
      url: 'https://dev.to/ahmedsaber/react-performance',
      platform: 'Dev.to',
      publishedAt: 'Nov 5, 2023',
      readTime: '9 min read',
      tags: ['React', 'Performance', 'Optimization'],
      featured: true
    },
    {
      id: '6',
      title: 'Building RESTful APIs with Express and MongoDB',
      description: 'Step-by-step guide to creating robust APIs with proper error handling, validation, and documentation.',
      url: 'https://medium.com/@ahmedsaber/express-mongodb-api',
      platform: 'Medium',
      publishedAt: 'Oct 18, 2023',
      readTime: '15 min read',
      tags: ['Express', 'MongoDB', 'API'],
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Dev.to':
        return 'bg-green-600';
      case 'Medium':
        return 'bg-orange-600';
      default:
        return 'bg-primary';
    }
  };

  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Featured <span className="text-primary">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge through technical writing and tutorials
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="p-6 bg-card/50 border-border hover:border-primary/50 transition-smooth hover:scale-105 card-elevated group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge className={`${getPlatformColor(article.platform)} text-white`}>
                  {article.platform}
                </Badge>
                <Badge variant="outline" className="text-primary border-primary">
                  Featured
                </Badge>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.publishedAt}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button asChild className="w-full transition-smooth hover:scale-105">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Article
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Regular Articles Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="p-4 bg-card/30 border-border hover:border-primary/30 transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${getPlatformColor(article.platform)} text-white text-xs`}>
                    {article.platform}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h4 className="text-lg font-semibold mb-2 line-clamp-2">
                  {article.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {article.description}
                </p>

                <div className="flex items-center text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  {article.publishedAt}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {article.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{article.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Read
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Writing Platforms CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="inline-block p-8 bg-gradient-cyber border-primary/30">
            <h3 className="text-2xl font-bold mb-4">Follow My Writing</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Stay updated with my latest articles and tutorials
            </p>
            <div className="flex space-x-4 justify-center">
              <Button asChild variant="outline">
                <a href="https://dev.to/ahmedsaber" target="_blank" rel="noopener noreferrer">
                  Dev.to
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://medium.com/@ahmedsaber" target="_blank" rel="noopener noreferrer">
                  Medium
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;