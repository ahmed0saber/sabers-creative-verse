import React, { useState } from 'react';
import { Moon, Sun, Monitor, Terminal, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useMode, PortfolioMode } from '@/contexts/ModeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { mode, setMode } = useMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modes: { key: PortfolioMode; label: string; icon: React.ReactNode }[] = [
    { key: 'normal', label: 'Normal', icon: <User className="h-4 w-4" /> },
    { key: 'dev', label: 'Dev', icon: <Monitor className="h-4 w-4" /> },
    { key: 'hacker', label: 'Hacker', icon: <Terminal className="h-4 w-4" /> },
  ];

  const handleModeChange = (newMode: PortfolioMode) => {
    setMode(newMode);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Name/Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary text-glow">
              Ahmed Saber
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Mode Buttons */}
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-lg p-1">
              {modes.map((modeOption) => (
                <Button
                  key={modeOption.key}
                  variant={mode === modeOption.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleModeChange(modeOption.key)}
                  className={`transition-smooth ${
                    mode === modeOption.key 
                      ? 'neon-glow bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {modeOption.icon}
                  <span className="ml-2">{modeOption.label}</span>
                </Button>
              ))}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="transition-smooth hover:bg-muted"
            >
              {theme === 'dark' ? 
                <Sun className="h-5 w-5" /> : 
                <Moon className="h-5 w-5" />
              }
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="transition-smooth"
            >
              {theme === 'dark' ? 
                <Sun className="h-5 w-5" /> : 
                <Moon className="h-5 w-5" />
              }
            </Button>

            {/* Mode Dropdown */}
            <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="transition-smooth">
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card border-border">
                {modes.map((modeOption) => (
                  <DropdownMenuItem
                    key={modeOption.key}
                    onClick={() => handleModeChange(modeOption.key)}
                    className={`cursor-pointer transition-smooth ${
                      mode === modeOption.key 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    {modeOption.icon}
                    <span className="ml-2">{modeOption.label}</span>
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