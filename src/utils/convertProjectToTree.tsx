import { Project } from "@/types/Project";
import { FileText, Image } from "lucide-react";

type TreeNode = {
    name: string;
    type: 'file' | 'folder';
    icon?: JSX.Element;
    content?: string;
    children?: TreeNode[];
};

function convertProjectsToTree(projects: Project[]): TreeNode {
    return {
        name: 'projects',
        type: 'folder',
        children: projects.map(project => {
            const folderName = project.title.toLowerCase().replace(/\s+/g, '-');

            const readmeContent = generateReadmeContent(project);

            const imagesFolder: TreeNode = {
                name: 'images',
                type: 'folder',
                children: project.images.map((img, i) => ({
                    name: `screenshot${i + 1}.png`,
                    url: img,
                    type: 'file',
                    icon: <Image className="h-4 w-4" />
                }))
            };

            const readmeFile: TreeNode = {
                name: 'README.md',
                type: 'file',
                icon: <FileText className="h-4 w-4" />,
                content: readmeContent
            };

            const children = [readmeFile];
            if (project.images.length) children.push(imagesFolder);

            return {
                name: folderName,
                type: 'folder',
                children
            };
        })
    };
}

function generateReadmeContent(project: Project): string {
    const {
        title,
        description,
        longDescription,
        tags,
        githubUrl,
        demoUrl,
        story
    } = project;

    const frontend = tags.find(t => /react|next|vue/i.test(t)) || 'Unknown';
    const backend = tags.find(t => /node|express/i.test(t)) || 'Unknown';
    const db = tags.find(t => /mongo|sql/i.test(t)) || 'Unknown';
    const ai = tags.find(t => /openai|claude/i.test(t)) || '';
    const deploy = tags.find(t => /vercel|docker|aws/i.test(t)) || 'Unknown';

    return `# ${title}

## Overview
${description.endsWith('.') ? description : description + '.'}

## Description
${longDescription}

## Tech Stack
- **Frontend**: ${frontend}
- **Backend**: ${backend}
${ai ? `- **AI Integration**: ${ai}` : ''}
- **Database**: ${db}
- **Deployment**: ${deploy}

## Demo
🔗 [Live Demo](${demoUrl})
📁 [GitHub Repository](${githubUrl})

${story ? `## Project Story\n${story}` : ''}
`;
}

export default convertProjectsToTree;