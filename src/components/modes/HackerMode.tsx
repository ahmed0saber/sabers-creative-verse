import { useState, useRef, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Keyboard } from 'lucide-react';
// import VirtualKeyboard from '../VirtualKeyboard';

const HackerMode = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<string[]>([
    'Welcome to Ahmed Saber Portfolio Terminal v1.0.0',
    'Type "help" to see available commands',
    ''
  ]);
  // const [showKeyboard, setShowKeyboard] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const projects = [
    {
      name: 'ecommerce-platform',
      description: 'Full-stack e-commerce solution with React & Node.js',
      tech: 'React, Node.js, PostgreSQL, Stripe',
      status: 'Production'
    },
    {
      name: 'ai-content-generator',
      description: 'AI-powered content generation tool',
      tech: 'Next.js, OpenAI, Tailwind',
      status: 'Production'
    },
    {
      name: 'task-management-app',
      description: 'Collaborative project management tool',
      tech: 'Vue.js, Express, Socket.io',
      status: 'Production'
    }
  ];

  const articles = [
    {
      title: 'Building Scalable React Applications',
      platform: 'Dev.to',
      date: 'Jan 15, 2024',
      url: 'https://dev.to/ahmedsaber/building-scalable-react'
    },
    {
      title: 'Mastering TypeScript: Advanced Types',
      platform: 'Medium',
      date: 'Dec 28, 2023',
      url: 'https://medium.com/@ahmedsaber/typescript-advanced'
    }
  ];

  const youtubeVideos = [
    {
      title: 'Building a Full-Stack App with React & Node.js',
      views: '125K',
      duration: '45:30',
      date: '2 weeks ago'
    },
    {
      title: 'Advanced TypeScript Patterns',
      views: '89K',
      duration: '32:15',
      date: '1 month ago'
    }
  ];

  const commands = {
    help: () => [
      'Available commands:',
      '  whoami          - About Ahmed Saber',
      '  ls skills       - List technical skills',
      '  ls projects     - List projects',
      '  ls articles     - List published articles',
      '  ls youtube      - List YouTube videos',
      '  cat <project>   - View project details',
      '  contact         - Get contact information',
      '  clear           - Clear terminal',
      '  history         - Show command history',
      '  pwd             - Show current directory',
      '  date            - Show current date',
      '  uname           - System information',
      ''
    ],
    whoami: () => [
      'Ahmed Saber',
      '============',
      'Full Stack Developer & Content Creator',
      'Experience: 5+ years',
      'Location: Remote',
      'Passion: Building innovative web applications and sharing knowledge',
      'Specialties: React, Node.js, TypeScript, Cloud Architecture',
      ''
    ],
    'ls skills': () => [
      'Technical Skills:',
      '├── Frontend:',
      '│   ├── React (Expert)',
      '│   ├── TypeScript (Advanced)',
      '│   ├── Vue.js (Proficient)',
      '│   └── Tailwind CSS (Expert)',
      '├── Backend:',
      '│   ├── Node.js (Expert)', 
      '│   ├── Python (Advanced)',
      '│   ├── PostgreSQL (Advanced)',
      '│   └── MongoDB (Proficient)',
      '├── DevOps:',
      '│   ├── Docker (Advanced)',
      '│   ├── AWS (Advanced)',
      '│   └── CI/CD (Proficient)',
      '└── Other:',
      '    ├── Git (Expert)',
      '    ├── UI/UX Design (Intermediate)',
      '    └── Content Creation (Expert)',
      ''
    ],
    'ls projects': () => [
      'Projects:',
      ...projects.map((project, i) => 
        `${i === projects.length - 1 ? '└──' : '├──'} ${project.name}/`
      ),
      '',
      'Use "cat <project-name>" for details',
      ''
    ],
    'ls articles': () => [
      'Published Articles:',
      ...articles.map((article, i) => [
        `${i === articles.length - 1 ? '└──' : '├──'} ${article.title}`,
        `    Platform: ${article.platform}`,
        `    Date: ${article.date}`,
        `    URL: ${article.url}`,
      ]).flat(),
      ''
    ],
    'ls youtube': () => [
      'YouTube Content:',
      '📺 Channel: @ahmedsaber',
      '👥 Subscribers: 85.2K',
      '👀 Total Views: 2.1M',
      '',
      'Recent Videos:',
      ...youtubeVideos.map((video, i) => [
        `${i === youtubeVideos.length - 1 ? '└──' : '├──'} ${video.title}`,
        `    Views: ${video.views} | Duration: ${video.duration}`,
        `    Published: ${video.date}`,
      ]).flat(),
      ''
    ],
    contact: () => [
      'Contact Information:',
      '├── Email: ahmed@example.com',
      '├── GitHub: https://github.com/ahmedsaber',
      '├── LinkedIn: https://linkedin.com/in/ahmedsaber',
      '├── YouTube: https://youtube.com/@ahmedsaber',
      '├── Telegram: https://t.me/ahmedsaber',
      '├── Dev.to: https://dev.to/ahmedsaber',
      '└── Medium: https://medium.com/@ahmedsaber',
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
    ],
    pwd: () => ['/home/ahmed/portfolio', ''],
    date: () => [new Date().toString(), ''],
    uname: () => ['Ahmed Saber Portfolio Terminal v1.0.0 (Linux x86_64)', '']
  };

  // Handle cat command for project details
  const handleCatCommand = (projectName: string) => {
    const project = projects.find(p => p.name === projectName || p.name.includes(projectName));
    if (project) {
      return [
        `# ${project.name}`,
        '',
        `Description: ${project.description}`,
        `Technologies: ${project.tech}`,
        `Status: ${project.status}`,
        '',
        `GitHub: https://github.com/ahmedsaber/${project.name}`,
        `Demo: https://${project.name}-demo.com`,
        ''
      ];
    }
    return [`cat: ${projectName}: No such file or directory`, ''];
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Handle cat command
    if (trimmedCmd.startsWith('cat ')) {
      const projectName = trimmedCmd.substring(4).trim();
      const result = handleCatCommand(projectName);
      setOutput(prev => [...prev, `$ ${cmd}`, ...result]);
    } else if (commands[trimmedCmd as keyof typeof commands]) {
      const result = commands[trimmedCmd as keyof typeof commands]();
      setOutput(prev => [...prev, `$ ${cmd}`, ...result]);
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

  const handleVirtualKeyPress = (key: string) => {
    if (key === 'Backspace') {
      setInput(prev => prev.slice(0, -1));
    } else if (key === 'Enter') {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else {
      setInput(prev => prev + key);
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
        {/* <Button
          onClick={() => setShowKeyboard(!showKeyboard)}
          className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-black"
          size="sm"
        >
          <Keyboard className="h-4 w-4 mr-2" />
          {showKeyboard ? 'Hide' : 'Show'} Keyboard
        </Button> */}

        {/* Virtual Keyboard */}
        {/* {showKeyboard && (
          <VirtualKeyboard
            onKeyPress={handleVirtualKeyPress}
            onClose={() => setShowKeyboard(false)}
          />
        )} */}
      </div>
    </div>
  );
};

export default HackerMode;