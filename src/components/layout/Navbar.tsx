import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Terminal, Code, User, Zap } from 'lucide-react';

const modes = [
  { path: '/', label: 'Normal', icon: User },
  { path: '/dev', label: 'Dev', icon: Code },
  { path: '/hacker', label: 'Hacker', icon: Terminal },
  { path: '/ai', label: 'AI', icon: Zap },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-foreground">
              Ahmed Saber
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {modes.map(({ path, label, icon: Icon }) => (
                <Button
                  key={path}
                  variant={pathname === path ? 'default' : 'ghost'}
                  size="sm"
                  className="transition-fast"
                  asChild
                >
                  <Link to={path}>
                    <Icon className="h-4 w-4 mr-2" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" aria-label='Open menu'>
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {modes.map(({ path, label, icon: Icon }) => (
                  <DropdownMenuItem key={path} asChild>
                    <Link
                      to={path}
                      className={pathname === path ? 'font-bold' : ''}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {label} Mode
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;