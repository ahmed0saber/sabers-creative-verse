import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Folder, 
  FolderOpen, 
  File, 
  FileText, 
  Image, 
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: FileNode[];
  icon?: React.ReactNode;
}

const DevMode = () => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root', 'projects']));
  const [selectedFile, setSelectedFile] = useState<string>('README.md');

  const fileStructure: FileNode[] = [
    {
      name: 'README.md',
      type: 'file',
      icon: <FileText className="h-4 w-4" />,
      content: `# Ahmed Saber - Full Stack Developer & Content Creator

## About Me
I'm a passionate Full Stack Developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and TypeScript, with a strong focus on creating scalable and maintainable code.

## Skills
- **Frontend**: React, Vue.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, Python, PostgreSQL, MongoDB
- **DevOps**: Docker, AWS, CI/CD, Kubernetes
- **Tools**: Git, VS Code, Figma, Adobe Creative Suite

## Experience
### Senior Full Stack Developer | TechCorp (2021 - Present)
- Lead development of microservices architecture serving 100k+ users
- Implemented CI/CD pipeline reducing deployment time by 60%
- Mentored junior developers and conducted code reviews

### Full Stack Developer | StartupXYZ (2019 - 2021)
- Built customer-facing web application from MVP to production
- Integrated payment systems and real-time notifications
- Optimized database queries improving response time by 40%

## Education
**Bachelor of Computer Science** - University of Technology (2015-2019)

## Contact
- Email: ahmed@example.com
- LinkedIn: /in/ahmedsaber
- GitHub: /ahmedsaber`
    },
    {
      name: 'skills.json',
      type: 'file',
      icon: <File className="h-4 w-4" />,
      content: `{
  "frontend": [
    { "name": "React", "level": 95, "years": 4 },
    { "name": "TypeScript", "level": 90, "years": 3 },
    { "name": "Vue.js", "level": 85, "years": 2 },
    { "name": "Tailwind CSS", "level": 92, "years": 3 }
  ],
  "backend": [
    { "name": "Node.js", "level": 93, "years": 4 },
    { "name": "Python", "level": 87, "years": 3 },
    { "name": "PostgreSQL", "level": 85, "years": 3 },
    { "name": "MongoDB", "level": 82, "years": 2 }
  ],
  "devops": [
    { "name": "Docker", "level": 88, "years": 2 },
    { "name": "AWS", "level": 85, "years": 3 },
    { "name": "CI/CD", "level": 82, "years": 2 }
  ]
}`
    },
    {
      name: 'projects',
      type: 'folder',
      children: [
        {
          name: 'ecommerce-platform',
          type: 'folder',
          children: [
            {
              name: 'README.md',
              type: 'file',
              icon: <FileText className="h-4 w-4" />,
              content: `# E-Commerce Platform

## Overview
A full-stack e-commerce solution built with modern technologies, featuring real-time inventory management, secure payment processing, and a comprehensive admin dashboard.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, PostgreSQL
- **Payment**: Stripe Integration
- **Deployment**: Docker, AWS

## Features
- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart and checkout process
- Payment processing with Stripe
- Admin dashboard for inventory management
- Real-time order tracking
- Responsive design for mobile and desktop

## Architecture
The application follows a microservices architecture with:
- Authentication service
- Product service  
- Order service
- Payment service
- Notification service

## Demo
🔗 [Live Demo](https://ecommerce-demo.com)
📁 [GitHub Repository](https://github.com/ahmedsaber/ecommerce)

## Key Achievements
- Processed $50k+ in transactions
- 99.9% uptime
- 40% faster page load times`
            },
            {
              name: 'images',
              type: 'folder',
              children: [
                { name: 'screenshot1.png', type: 'file', icon: <Image className="h-4 w-4" /> },
                { name: 'screenshot2.png', type: 'file', icon: <Image className="h-4 w-4" /> },
                { name: 'architecture.png', type: 'file', icon: <Image className="h-4 w-4" /> }
              ]
            }
          ]
        },
        {
          name: 'ai-content-generator',
          type: 'folder',
          children: [
            {
              name: 'README.md',
              type: 'file',
              icon: <FileText className="h-4 w-4" />,
              content: `# AI Content Generator

## Overview
An intelligent content generation tool powered by AI that creates marketing copy, blog posts, and social media content. Built with Next.js and integrated with multiple AI APIs.

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma
- **AI Integration**: OpenAI GPT-4, Anthropic Claude
- **Database**: PostgreSQL
- **Deployment**: Vercel

## Features
- Multiple content types (blog posts, social media, emails)
- Tone and style customization
- Content optimization suggestions
- Bulk content generation
- Export to various formats
- Content analytics and performance tracking

## AI Models Integrated
- OpenAI GPT-4 for creative writing
- Claude for analytical content
- Custom fine-tuned models for specific use cases

## Demo
🔗 [Live Demo](https://ai-content-demo.com)
📁 [GitHub Repository](https://github.com/ahmedsaber/ai-content)

## Impact
- Generated 10k+ pieces of content
- Saved users 500+ hours of writing time
- 95% user satisfaction rate`
            }
          ]
        }
      ]
    },
    {
      name: 'youtube-content.md',
      type: 'file',
      icon: <FileText className="h-4 w-4" />,
      content: `# YouTube Content

## Channel Statistics
- **Subscribers**: 85.2K
- **Total Views**: 2.1M
- **Videos**: 127
- **Upload Schedule**: Weekly

## Popular Videos

### Building a Full-Stack App with React & Node.js
- **Views**: 125K
- **Duration**: 45:30
- **Published**: 2 weeks ago
- **Topics**: React, Node.js, Full-Stack Development

### Advanced TypeScript Patterns
- **Views**: 89K  
- **Duration**: 32:15
- **Published**: 1 month ago
- **Topics**: TypeScript, Advanced Concepts, Patterns

### Deploying Apps with Docker & AWS
- **Views**: 67K
- **Duration**: 38:42
- **Published**: 3 weeks ago
- **Topics**: Docker, AWS, DevOps

## Content Strategy
- Weekly tutorials on modern web development
- Live coding sessions
- Tech news and discussions
- Q&A sessions with viewers
- Collaboration with other creators

## Upcoming Content
- GraphQL with React and Apollo
- Microservices with Node.js
- Advanced CSS animations
- Database optimization techniques`
    },
    {
      name: 'articles.json',
      type: 'file',
      icon: <File className="h-4 w-4" />,
      content: `{
  "featured": [
    {
      "title": "Building Scalable React Applications with Modern Patterns",
      "platform": "Dev.to",
      "url": "https://dev.to/ahmedsaber/building-scalable-react",
      "publishedAt": "Jan 15, 2024",
      "readTime": "8 min read",
      "tags": ["React", "Patterns", "Architecture"]
    },
    {
      "title": "Mastering TypeScript: Advanced Types and Generics",
      "platform": "Medium", 
      "url": "https://medium.com/@ahmedsaber/typescript-advanced",
      "publishedAt": "Dec 28, 2023",
      "readTime": "12 min read",
      "tags": ["TypeScript", "Advanced", "Types"]
    }
  ],
  "recent": [
    {
      "title": "API Security Best Practices for Node.js Applications",
      "platform": "Medium",
      "publishedAt": "Nov 22, 2023",
      "readTime": "10 min read"
    },
    {
      "title": "Performance Optimization in React Applications", 
      "platform": "Dev.to",
      "publishedAt": "Nov 5, 2023",
      "readTime": "9 min read"
    }
  ]
}`
    }
  ];

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileTree = (nodes: FileNode[], path = '') => {
    return nodes.map((node) => {
      const currentPath = path ? `${path}/${node.name}` : node.name;
      const isExpanded = expandedFolders.has(currentPath);

      return (
        <div key={currentPath} className="select-none">
          <div
            className={`flex items-center py-1 px-2 hover:bg-muted/50 cursor-pointer transition-smooth ${
              selectedFile === currentPath ? 'bg-primary/20 text-primary' : ''
            }`}
            onClick={() => {
              if (node.type === 'folder') {
                toggleFolder(currentPath);
              } else {
                setSelectedFile(currentPath);
              }
            }}
          >
            <div className="flex items-center space-x-2 flex-1">
              {node.type === 'folder' && (
                <span className="transition-smooth">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </span>
              )}
              
              <span>
                {node.type === 'folder' ? (
                  isExpanded ? (
                    <FolderOpen className="h-4 w-4 text-blue-400" />
                  ) : (
                    <Folder className="h-4 w-4 text-blue-400" />
                  )
                ) : (
                  node.icon || <File className="h-4 w-4" />
                )}
              </span>
              
              <span className="text-sm">{node.name}</span>
            </div>
          </div>
          
          {node.type === 'folder' && isExpanded && node.children && (
            <div className="ml-6 border-l border-border">
              {renderFileTree(node.children, currentPath)}
            </div>
          )}
        </div>
      );
    });
  };

  const getFileContent = (fileName: string): string => {
    const findFile = (nodes: FileNode[], target: string): FileNode | null => {
      for (const node of nodes) {
        if (node.name === target || `${node.name}` === target) {
          return node;
        }
        if (node.children) {
          const found = findFile(node.children, target);
          if (found) return found;
        }
      }
      return null;
    };

    const file = findFile(fileStructure, fileName);
    return file?.content || 'File content not available';
  };

  return (
    <div className="h-screen pt-16 bg-[#1e1e1e] text-gray-300 font-mono">
      <div className="flex h-full flex-col md:flex-row">
        {/* File Explorer Sidebar */}
        <div className="w-full md:w-80 bg-[#252526] border-r border-[#3e3e42] flex flex-col relative z-10 md:z-auto">
          <div className="p-4 border-b border-[#3e3e42]">
            <h2 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
              Explorer
            </h2>
          </div>
          
          <ScrollArea className="flex-1 p-2">
            <div className="text-xs text-gray-400 mb-2 px-2">AHMED SABER PORTFOLIO</div>
            {renderFileTree(fileStructure, '')}
          </ScrollArea>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <div className="bg-[#2d2d30] border-b border-[#3e3e42] flex overflow-x-auto">
            <div className="flex items-center px-2 md:px-4 py-2 bg-[#1e1e1e] border-r border-[#3e3e42] text-sm whitespace-nowrap">
              <FileText className="h-4 w-4 mr-2" />
              <span className="truncate">{selectedFile}</span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 h-4 w-4 p-0 hover:bg-red-500/20 flex-shrink-0"
                onClick={() => setSelectedFile('README.md')}
              >
                ×
              </Button>
            </div>
          </div>

          {/* File Content */}
          <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-3 md:p-6">
                <pre className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-gray-300 break-words">
                  {getFileContent(selectedFile)}
                </pre>
              </div>
            </ScrollArea>
          </div>

          {/* Status Bar */}
          <div className="bg-[#007acc] text-white px-2 md:px-4 py-1 text-xs flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="truncate">Ahmed Saber Portfolio</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Dev Mode</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span>UTF-8</span>
              <span className="hidden md:inline">Markdown</span>
              <span>Ln 1, Col 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevMode;