import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/Project';

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: '01',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern payment integration',
      longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payment processing, admin dashboard, and mobile-responsive design.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
      images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3'],
      githubUrl: 'https://github.com/ahmedsaber/ecommerce',
      demoUrl: 'https://ecommerce-demo.com',
      story: 'This project started as a personal challenge to build a complete e-commerce solution from scratch. I wanted to understand every aspect of online retail - from user experience to payment processing.\n\nThe initial idea came when I was helping a local business owner who was struggling with expensive e-commerce solutions. I realized there was a gap for affordable, customizable platforms.\n\nDuring development, I faced several challenges:\n\n1. **Payment Integration**: Implementing Stripe was tricky, especially handling edge cases like failed payments and refunds. I spent weeks testing different scenarios.\n\n2. **Real-time Inventory**: Ensuring inventory accuracy across multiple concurrent users required implementing optimistic locking and queue systems.\n\n3. **Performance**: The product catalog needed to handle thousands of items efficiently. I implemented caching strategies and database indexing.\n\n4. **Security**: Protecting user data and payment information required extensive security measures, including CSRF protection and data encryption.\n\nThe most rewarding moment was when the local business owner made their first sale through the platform. Seeing the impact on their business made all the late nights worth it.\n\nThis project taught me the importance of user feedback - I iterated the design multiple times based on real user testing.'
    },
    {
      id: '02',
      title: 'AI Content Generator',
      description: 'AI-powered tool for generating marketing content',
      longDescription: 'An intelligent content generation tool that uses AI to create marketing copy, blog posts, and social media content. Built with Next.js and integrated with multiple AI APIs.',
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'Prisma', 'Vercel'],
      images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'],
      githubUrl: 'https://github.com/ahmedsaber/ai-content',
      demoUrl: 'https://ai-content-demo.com'
    },
    {
      id: '03',
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A powerful project management application with real-time collaboration, file sharing, time tracking, and comprehensive reporting features.',
      tags: ['Vue.js', 'Express', 'Socket.io', 'MongoDB', 'Docker'],
      images: ['/images/projects/task-management-system/01.jfif', '/images/projects/task-management-system/02.jfif'],
      githubUrl: 'https://github.com/ahmedsaber/taskapp',
      demoUrl: 'https://taskapp-demo.com',
      story: 'The Task Management App was born out of frustration with existing project management tools that were either too complex or too simple for my team\'s needs.\n\nWe were working on multiple projects simultaneously and struggled with:\n- Scattered communication across different platforms\n- Lack of real-time updates causing confusion\n- Difficulty tracking time spent on tasks\n- No clear overview of project progress\n\nI decided to build a solution that would address these specific pain points. The key was to keep it simple while providing powerful features.\n\n**Technical Challenges:**\n\n1. **Real-time Synchronization**: Implementing Socket.io for real-time updates across multiple users was complex. I had to handle connection drops, user permissions, and data consistency.\n\n2. **File Management**: Building a secure file sharing system required implementing proper access controls and file versioning.\n\n3. **Time Tracking**: Creating an accurate time tracking system that works offline and syncs when online was challenging.\n\n4. **Performance**: As teams grew larger, the app needed to handle hundreds of tasks efficiently. I implemented virtual scrolling and optimized database queries.\n\nThe breakthrough moment was when we started using it for our own projects and productivity increased by 40%. The real-time collaboration features eliminated the need for constant status meetings.\n\nThis project taught me the value of solving real problems you experience yourself - the motivation to build something great is much stronger when you\'re your own user.'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hobby and Side Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work across personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;