import articles from '@/data/articles';
import developerDetails from '@/data/developer-details';
import education from '@/data/education';
import experience from '@/data/experience';
import openSourceProjects from '@/data/opensource-projects';
import projects from '@/data/projects';
import skillsCategories from '@/data/skills';
import socialPlatforms from '@/data/social-platforms';
import youtubeContent from '@/data/youtube-content';
import { useState, useRef, useEffect } from 'react';

const HackerMode = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<string[]>([
    'Welcome to Ahmed Saber Portfolio Terminal v1.0.0',
    'Type "help" to see available commands',
    'Use tab to autocomplete commands, or press up/down arrows to navigate command history',
    'Tab focus navigation works when command is empty',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  whoami          - About Ahmed Saber',
      '  ls skills       - List technical skills',
      '  ls experience   - List work experience',
      '  ls education    - List educational background',
      '  ls projects     - List projects',
      '  cat <project>   - View project details',
      '  ls open-source  - List open source contributions',
      '  ls youtube      - List YouTube videos',
      '  ls articles     - List published articles',
      '  contact         - Get contact information',
      '  clear           - Clear terminal',
      '  history         - Show command history',
      '  pwd             - Show current directory',
      '  date            - Show current date',
      '  uname           - System information',
      ''
    ],
    whoami: () => [
      developerDetails.name,
      '============',
      developerDetails.title,
      developerDetails.description,
      ''
    ],
    'ls skills': () => [
      'Technical Skills:',
      skillsCategories.map((category, i) => [
        `${i === skillsCategories.length - 1 ? '└──' : '├──'} ${category.name}:\n`,
        ...category.skills.map((skill, j) => [
          `${j === category.skills.length - 1 ? '    └──' : '    ├──'} ${skill.name}\n`
        ]).flat()
      ]).flat(),
      ''
    ],
    'ls experience': () => [
      'Experience:',
      ...experience.map((exp, i) => [
        `${i === experience.length - 1 ? '└──' : '├──'} ${exp.company} (${exp.title})`,
        `    Duration: ${exp.period}`,
        `    Description: ${exp.description}`
      ]).flat(),
      ''
    ],
    'ls education': () => [
      'Education:',
      ...education.map((edu, i) => [
        `${i === education.length - 1 ? '└──' : '├──'} ${edu.institution} (${edu.degree})`,
        `    Duration: ${edu.period}`
      ]).flat(),
      ''
    ],
    'ls projects': () => [
      'Projects:',
      ...projects.map((project, i) =>
        `${i === projects.length - 1 ? '└──' : '├──'} ${project.title}/`
      ),
      '',
      'Use "cat <project-name>" for details',
      ''
    ],
    'ls open-source': () => [
      'Open Source Contributions:',
      ...openSourceProjects.map((project, i) =>
        `${i === openSourceProjects.length - 1 ? '└──' : '├──'} ${project.title} (${project.githubUrl})`
      ),
      ''
    ],
    'ls youtube': () => [
      'YouTube Content:',
      `📺 Channel: ${youtubeContent.channelStats.handle}`,
      '📊 Channel Stats:',
      `  Subscribers: ${youtubeContent.channelStats.subscribers}`,
      `  Total Views: ${youtubeContent.channelStats.totalViews}`,
      `  Videos: ${youtubeContent.channelStats.videosCount}`,
      '',
      'Recent Videos:',
      ...youtubeContent.videos.map((video, i) => [
        `${i === youtubeContent.videos.length - 1 ? '└──' : '├──'} ${video.title}`,
        `    Views: ${video.views} | Duration: ${video.duration}`,
        `    Published: ${video.publishedAt}`,
      ]).flat(),
      ''
    ],
    'ls articles': () => [
      'Published Articles:',
      ...articles.map((article, i) => [
        `${i === articles.length - 1 ? '└──' : '├──'} ${article.title}`,
        `    Platform: ${article.platform}`,
        `    Date: ${article.publishedAt}`,
        `    URL: ${article.url}`,
      ]).flat(),
      ''
    ],
    contact: () => [
      'Contact Information:',
      ...socialPlatforms.map((platform, i) =>
        `${i === socialPlatforms.length - 1 ? '└──' : '├──'} ${platform.name}: ${platform.url} (${platform.handle})`
      ),
      ''
    ],
    clear: () => {
      setOutput([]);
      return [];
    },
    history: () => [
      'Command History:',
      history.length > 0 ? history.map((cmd, i) => `  ${i + 1}. ${cmd}`) : '  No commands executed yet.',
      ''
    ],
    pwd: () => ['/home/ahmed/portfolio', ''],
    date: () => [new Date().toString(), ''],
    uname: () => ['Ahmed Saber Portfolio Terminal v1.0.0 (Linux x86_64)', '']
  };

  // Handle cat command for project details
  const handleCatCommand = (projectName: string) => {
    const project = projects.find(p => p.title.toLowerCase() === projectName || p.title.toLowerCase().includes(projectName));
    if (project) {
      return [
        `# ${project.title}`,
        '',
        `Description: ${project.description}`,
        `Technologies: ${project.tags.join(', ')}`,
        '',
        `GitHub: ${project.githubUrl}`,
        `Demo: ${project.demoUrl}`,
        '\n',
        `Project Story:\n${project.story}`,
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
    if (e.key === 'Tab' && input.trim()) {
      e.preventDefault();
      const lowerCaseInput = input.trim().toLowerCase();
      const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(lowerCaseInput));
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      } else if (matchingCommands.length > 1) {
        setOutput(prev => [...prev, `Available commands: ${matchingCommands.join(', ')}`, '']);
      }
    } else if (e.key === 'ArrowUp') {
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
    <div className="h-svh pt-16 bg-black text-green-400 font-mono overflow-hidden">
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
      </div>
    </div>
  );
};

export default HackerMode;