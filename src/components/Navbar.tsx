import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useMode } from '@/contexts/ModeContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Terminal, Code, User } from 'lucide-react';

const Navbar = () => {
  const { mode, setMode } = useMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">
              Ahmed Saber
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Mode Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant={mode === 'normal' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setMode('normal')}
                className="transition-fast"
              >
                <User className="h-4 w-4 mr-2" />
                Normal
              </Button>
              <Button
                variant={mode === 'dev' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setMode('dev')}
                className="transition-fast"
              >
                <Code className="h-4 w-4 mr-2" />
                Dev
              </Button>
              <Button
                variant={mode === 'hacker' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setMode('hacker')}
                className="transition-fast"
              >
                <Terminal className="h-4 w-4 mr-2" />
                Hacker
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => setMode('normal')}>
                  <User className="h-4 w-4 mr-2" />
                  Normal Mode
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMode('dev')}>
                  <Code className="h-4 w-4 mr-2" />
                  Dev Mode
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMode('hacker')}>
                  <Terminal className="h-4 w-4 mr-2" />
                  Hacker Mode
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;