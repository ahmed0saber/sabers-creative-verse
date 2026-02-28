import skillsCategories from '@/data/skills';
import projects from '@/data/projects';
import openSourceProjects from '@/data/opensource-projects';
import experience from '@/data/experience';
import education from '@/data/education';
import articles from '@/data/articles';
import youtubeContent from '@/data/youtube-content';
import socialPlatforms from '@/data/social-platforms';
import developerDetails from '@/data/developer-details';

export const prepareAIContext = (): string => {
  const jsonContext = {
    developerDetails,
    skillsCategories,
    projects,
    openSourceProjects,
    experience,
    education,
    articles,
    youtubeContent,
    socialPlatforms,
  };

  return JSON.stringify(jsonContext, null, 2);
};
