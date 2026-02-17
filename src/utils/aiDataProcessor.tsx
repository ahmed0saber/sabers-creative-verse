import skillsCategories from '@/data/skills';
import projects from '@/data/projects';
import openSourceProjects from '@/data/opensource-projects';
import experience from '@/data/experience';
import education from '@/data/education';
import articles from '@/data/articles';
import youtubeContent from '@/data/youtube-content';
import socialPlatforms from '@/data/social-platforms';
import developerDetails from '@/data/developer-details';

export interface AIContext {
  aboutMe: string;
  skills: string;
  projects: string;
  openSource: string;
  experience: string;
  education: string;
  articles: string;
  youtube: string;
  social: string;
  fullContext: string;
}

export const prepareAIContext = (): AIContext => {
  const aboutMe = generateAboutMe();
  const skills = generateSkillsContext();
  const projectsContext = generateProjectsContext();
  const openSourceContext = generateOpenSourceContext();
  const experienceContext = generateExperienceContext();
  const educationContext = generateEducationContext();
  const articlesContext = generateArticlesContext();
  const youtubeContext = generateYoutubeContext();
  const socialContext = generateSocialContext();

  const fullContext = generateNarrativeContext();

  return {
    aboutMe,
    skills,
    projects: projectsContext,
    openSource: openSourceContext,
    experience: experienceContext,
    education: educationContext,
    articles: articlesContext,
    youtube: youtubeContext,
    social: socialContext,
    fullContext,
  };
};

function generateNarrativeContext(): string {
  const narrative = `
Meet ${developerDetails.name}, ${developerDetails.title}.

${developerDetails.description}

Ahmed's Journey:

Ahmed is currently a Mid-Level Frontend Developer with a passion for teaching, mentoring, and content creation. Throughout his career, he has worked with companies like Valinteca and EraaSoft, leading frontend development initiatives and mentoring junior developers. His work spans from freelance projects to full-time positions, always focusing on delivering user-friendly, performant web applications.

Technical Expertise:

Ahmed has developed strong expertise across modern web technologies. In the frontend world, he masters HTML, CSS, JavaScript, and TypeScript. He's highly proficient with React.js, Redux, and Next.js, and familiar with styling frameworks like Bootstrap, Sass, and Tailwind CSS.

On the backend, he has experience with Node.js, Express.js, and database solutions like MongoDB and Redis. His DevOps knowledge includes Git, CI/CD pipelines, Cloudflare, serverless architectures, and microfrontends.

Notable Projects:

Ahmed has built several impressive projects. Intern2Grow is his flagship platform offering virtual internships with real tasks, where users gain work experience and become job-ready. ContentAt is a content creation tool allowing users to design professional covers, thumbnails, and PDF carousels. QGame is another notable creation showcasing his ability to build engaging web applications.

Open Source Contributions:

Beyond his commercial work, Ahmed actively contributes to open source projects. He has contributed to Glide.js, a lightweight JavaScript slider and carousel, helped improve TheAlgorithms website for better accessibility, and worked on Quran Mailer, a free Quran mailing service.

Professional Growth:

Ahmed has led frontend training as an instructor at EraaSoft, conducting weekly online meetings and mentoring groups of aspiring developers. He participates in code reviews, refactors legacy code, and mentors junior developers throughout his positions, demonstrating his commitment to team growth and code quality.

Education & Continuous Learning:

Ahmed holds a Bachelor of Applied Science in Physics from Kafr El-Sheikh University, where he focused on laser circuits and device applications. He's also pursuing specialization diplomas in Software Engineering through Coursera, including IBM's Applied Software Engineering Fundamentals and DevOps courses.

Content Creation:

With over 1.66K YouTube subscribers and 24.2K total views, Ahmed shares knowledge through video content covering frontend features, open source contributions, and programming tutorials. He's published multiple technical articles on platforms like EqraaTech, discussing topics like multi-threading in JavaScript, cross-tab communication, and CSS optimization.

Connecting with Ahmed:

You can find Ahmed on GitHub (github.com/ahmed0saber) with 331 followers, LinkedIn (linkedin.com/in/ahmed0saber/) with 33.3K connections, YouTube (@ahmed0saber), Facebook, and Email. He's active across these platforms and loves connecting with other developers and content enthusiasts.

Ahmed believes in the power of knowledge sharing and continuous improvement, whether through mentoring, open source contributions, or creating educational content. His T-shaped skill set, combining deep frontend expertise with broad technical knowledge, makes him a valuable asset for building modern web applications and leading development teams.
`;

  return narrative;
}


function generateAboutMe(): string {
  return `ABOUT ME:
Name: ${developerDetails.name}
Title: ${developerDetails.title}
Description: ${developerDetails.description}`;
}

function generateSkillsContext(): string {
  let context = 'TECHNICAL SKILLS:\n';
  skillsCategories.forEach((category: any) => {
    context += `\n${category.name}:\n`;
    category.skills.forEach((skill: any) => {
      context += `- ${skill.name}\n`;
    });
  });
  return context;
}

function generateProjectsContext(): string {
  let context = 'NOTABLE PROJECTS:\n';
  projects.forEach((project: any) => {
    context += `\nProject: ${project.title}\n`;
    context += `Description: ${project.description}\n`;
    context += `Technologies: ${project.tags.join(', ')}\n`;
    context += `Demo: ${project.demoUrl}\n`;
  });
  return context;
}

function generateOpenSourceContext(): string {
  let context = 'OPEN SOURCE CONTRIBUTIONS:\n';
  openSourceProjects.forEach((project: any) => {
    context += `\nProject: ${project.title}\n`;
    context += `Description: ${project.description}\n`;
    context += `Role: ${project.role}\n`;
    context += `GitHub: ${project.githubUrl}\n`;
  });
  return context;
}

function generateExperienceContext(): string {
  let context = 'PROFESSIONAL EXPERIENCE:\n';
  experience.forEach((exp: any) => {
    context += `\nCompany: ${exp.company}\n`;
    context += `Position: ${exp.title}\n`;
    context += `Duration: ${exp.period}\n`;
    context += `Description: ${exp.description}\n`;
  });
  return context;
}

function generateEducationContext(): string {
  let context = 'EDUCATION:\n';
  education.forEach((edu: any) => {
    context += `\nInstitution: ${edu.institution}\n`;
    context += `Degree: ${edu.degree}\n`;
    context += `Field: ${edu.field}\n`;
    context += `Period: ${edu.period}\n`;
  });
  return context;
}

function generateArticlesContext(): string {
  let context = 'ARTICLES & PUBLICATIONS:\n';
  articles.forEach((article: any) => {
    context += `\nTitle: ${article.title}\n`;
    context += `Published: ${article.publishedAt}\n`;
    context += `Platform: ${article.platform}\n`;
    context += `URL: ${article.url}\n`;
  });
  return context;
}

function generateYoutubeContext(): string {
  let context = `YOUTUBE CHANNEL (${youtubeContent.channelStats.handle}):\n`;
  context += `Subscribers: ${youtubeContent.channelStats.subscribers}\n`;
  context += `Total Views: ${youtubeContent.channelStats.totalViews}\n`;
  context += `Videos: ${youtubeContent.channelStats.videosCount}\n\n`;
  context += 'Featured Videos:\n';
  youtubeContent.videos.slice(0, 5).forEach((video: any) => {
    context += `\nTitle: ${video.title}\n`;
    context += `Views: ${video.views}\n`;
    context += `Published: ${video.publishedAt}\n`;
  });
  return context;
}

function generateSocialContext(): string {
  let context = 'SOCIAL PLATFORMS:\n';
  socialPlatforms.forEach((platform: any) => {
    context += `${platform.name}: ${platform.url}\n`;
  });
  return context;
}
