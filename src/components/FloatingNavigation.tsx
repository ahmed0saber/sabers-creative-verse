import React, { useEffect, useState } from 'react';
import { 
  User, 
  Wrench, 
  Briefcase, 
  Youtube, 
  FileText, 
  Github, 
  MessageCircle 
} from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { id: 'hero', icon: <User className="h-5 w-5" />, label: 'About' },
    { id: 'skills', icon: <Wrench className="h-5 w-5" />, label: 'Skills' },
    { id: 'projects', icon: <Briefcase className="h-5 w-5" />, label: 'Projects' },
    { id: 'youtube', icon: <Youtube className="h-5 w-5" />, label: 'YouTube' },
    { id: 'articles', icon: <FileText className="h-5 w-5" />, label: 'Articles' },
    { id: 'opensource', icon: <Github className="h-5 w-5" />, label: 'Open Source' },
    { id: 'connect', icon: <MessageCircle className="h-5 w-5" />, label: 'Connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-2 bg-card/90 backdrop-blur-md border border-border rounded-full px-3 py-2 card-elevated">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`p-2 rounded-full transition-smooth group relative ${
              activeSection === item.id
                ? 'bg-primary text-primary-foreground neon-glow'
                : 'hover:bg-muted text-muted-foreground hover:text-foreground'
            }`}
            title={item.label}
          >
            {item.icon}
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-card border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none whitespace-nowrap">
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavigation;