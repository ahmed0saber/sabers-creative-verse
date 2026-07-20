import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import data
import developerDetails from '../src/data/developer-details';
import skillsCategories from '../src/data/skills';
import experience from '../src/data/experience';
import education from '../src/data/education';
import certifications from '../src/data/certifications';
import projects from '../src/data/projects';
import openSourceProjects from '../src/data/opensource-projects';
import socialPlatforms from '../src/data/social-platforms';
import { Skill } from '../src/types/Skill';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateMarkdown = () => {
  let md = `# ${developerDetails.name} - Portfolio\n\n`;
  md += `> ${developerDetails.description}\n\n`;
  md += `Welcome to my portfolio! This file provides context for Large Language Models (LLMs) interacting with this website or its source code.\n\n`;

  // Tech Stack & Architecture
  md += `## Tech Stack\n`;
  md += `- **Framework**: React 18 + TypeScript\n`;
  md += `- **Build Tool**: Vite 5 (React SWC plugin)\n`;
  md += `- **Styling**: Tailwind CSS 3 (+ tailwindcss-animate)\n`;
  md += `- **UI Primitives**: Radix UI\n`;
  md += `- **Icons**: lucide-react\n`;
  md += `- **Routing**: react-router-dom\n\n`;

  md += `## Architecture & Data\n`;
  md += `The portfolio features unique display modes:\n`;
  md += `1. **Normal Mode**: A modern, clean, and interactive UI.\n`;
  md += `2. **Dev Mode**: A VS Code-inspired interface for developers.\n`;
  md += `3. **Hacker Mode**: A command-line terminal interface.\n`;
  md += `4. **AI Mode**: An AI-powered interactive chat interface.\n\n`;
  
  md += `All portfolio content is strongly typed and completely decoupled from the UI. It lives in \`src/data/\` and relies on type definitions in \`src/types/\`.\n\n`;

  // Skills
  md += `## Skills\n`;
  skillsCategories.forEach(category => {
    md += `### ${category.name}\n`;
    md += category.skills.map((skill: Skill) => `- ${skill.name}`).join('\n') + '\n\n';
  });

  // Experience
  md += `## Experience\n`;
  experience.forEach(exp => {
    md += `### ${exp.title} at ${exp.company}\n`;
    md += `**Duration**: ${exp.period.join(' & ')}\n`;
    md += `**Description**: ${exp.description}\n\n`;
  });

  // Education & Certifications
  md += `## Education\n`;
  education.forEach(edu => {
    md += `- **${edu.degree}** from ${edu.institution} (${edu.period})\n`;
  });
  md += '\n';

  md += `## Certifications\n`;
  certifications.forEach(cert => {
    md += `- **${cert.title}** from ${cert.organization} (${cert.date})\n`;
  });
  md += '\n';

  // Projects
  md += `## Selected Projects\n`;
  projects.slice(0, 5).forEach(project => {
    md += `### ${project.title}\n`;
    md += `${project.description}\n`;
    md += `- Tech: ${project.tags.join(', ')}\n`;
    md += `- Link: ${project.demoUrl || project.githubUrl}\n\n`;
  });

  // Open Source
  md += `## Open Source Contributions\n`;
  openSourceProjects.forEach(project => {
    md += `- **${project.title}**: [GitHub](${project.githubUrl})\n`;
  });
  md += '\n';

  // Links & Contact
  md += `## Links & Contact\n`;
  socialPlatforms.forEach(platform => {
    md += `- **${platform.name}**: ${platform.url}\n`;
  });

  return md;
};

const outputPath = path.join(__dirname, '../public/llms.txt');
fs.writeFileSync(outputPath, generateMarkdown(), 'utf-8');
console.log(`Successfully generated llms.txt at ${outputPath}`);
