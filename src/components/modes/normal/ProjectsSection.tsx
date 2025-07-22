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
      demoUrl: 'https://ecommerce-demo.com'
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
      demoUrl: 'https://taskapp-demo.com'
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