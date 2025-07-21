import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Keyboard } from 'lucide-react';

const HackerMode = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<string[]>([
    'Welcome to Ahmed Saber Portfolio Terminal v1.0.0',
    'Type "help" to see available commands',
    ''
  ]);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  whoami          - About Ahmed Saber',
      '  ls skills       - List technical skills',
      '  ls projects     - List projects',
      '  ls articles     - List published articles',
      '  ls youtube      - List YouTube videos',
      '  ls opensource   - List open source contributions',
      '  contact         - Get contact information',
      '  clear           - Clear terminal',
      '  history         - Show command history',
      ''
    ],
    whoami: () => [
      'Ahmed Saber',
      '============',
      'Full Stack Developer & Content Creator',
      'Experience: 5+ years',
      'Location: Remote',
      'Passion: Building innovative web applications and sharing knowledge',
      ''
    ],
    'ls skills': () => [
      'Technical Skills:',
      '├── Frontend: React (95%), TypeScript (90%), Vue.js (85%)',
      '├── Backend: Node.js (93%), Python (87%), PostgreSQL (85%)',
      '├── DevOps: Docker (88%), AWS (85%), CI/CD (82%)',
      '└── Other: Git (95%), UI/UX Design (75%), Content Creation (90%)',
      ''
    ],
    'ls projects': () => [
      'Featured Projects:',
      '├── E-Commerce Platform - React, Node.js, PostgreSQL',
      '├── AI Content Generator - Next.js, OpenAI, Tailwind',
      '├── Task Management App - Vue.js, Express, Socket.io',
      '└── Developer Portfolio CMS - React, Strapi, GraphQL',
      '',
      'Type "cat project_name" for details (coming soon)',
      ''
    ],
    contact: () => [
      'Contact Information:',
      '├── Email: ahmed@example.com',
      '├── GitHub: https://github.com/ahmedsaber',
      '├── LinkedIn: https://linkedin.com/in/ahmedsaber',
      '├── YouTube: https://youtube.com/@ahmedsaber',
      '└── Telegram: https://t.me/ahmedsaber',
      ''
    ],
    clear: () => {
      setOutput([]);
      return [];
    },
    history: () => [
      'Command History:',
      ...history.map((cmd, i) => `  ${i + 1}. ${cmd}`),
      ''
    ]
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const result = commands[trimmedCmd as keyof typeof commands];
    
    if (result) {
      const newOutput = result();
      setOutput(prev => [...prev, `$ ${cmd}`, ...newOutput]);
    } else if (trimmedCmd === '') {
      setOutput(prev => [...prev, '$']);
    } else {
      setOutput(prev => [...prev, `$ ${cmd}`, `Command not found: ${cmd}`, 'Type "help" for available commands', '']);
    }
    
    if (cmd.trim()) {
      setHistory(prev => [...prev, cmd.trim()]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    const terminal = document.getElementById('terminal-output');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [output]);

  return (
    <div className="h-screen pt-16 bg-black text-green-400 font-mono overflow-hidden">
      <div className="h-full flex flex-col p-4">
        {/* Terminal Output */}
        <div 
          id="terminal-output"
          className="flex-1 overflow-y-auto mb-4 leading-relaxed"
        >
          {output.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 outline-none font-mono"
            placeholder="Type a command..."
            autoFocus
          />
        </form>

        {/* Show Keyboard Button */}
        <Button
          onClick={() => setShowKeyboard(!showKeyboard)}
          className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-black"
          size="sm"
        >
          <Keyboard className="h-4 w-4 mr-2" />
          {showKeyboard ? 'Hide' : 'Show'} Keyboard
        </Button>

        {/* Virtual Keyboard (placeholder) */}
        {showKeyboard && (
          <div className="fixed bottom-16 right-4 bg-green-900/90 p-4 rounded border border-green-400">
            <div className="text-xs text-green-400 mb-2">Virtual Keyboard</div>
            <div className="text-xs text-green-300">
              Coming soon... Use physical keyboard for now
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackerMode;