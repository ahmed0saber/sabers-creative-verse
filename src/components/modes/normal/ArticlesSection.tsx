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
}

const ArticlesSection = () => {
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

  return (
    <section id="articles" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
              className="p-6 bg-card border-border transition-fast shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
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
              
              <div className="flex flex-wrap gap-2 mb-4">
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