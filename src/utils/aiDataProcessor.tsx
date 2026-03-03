import skillsCategories from '@/data/skills';
import projects from '@/data/projects';
import openSourceProjects from '@/data/opensource-projects';
import experience from '@/data/experience';
import education from '@/data/education';
import articles from '@/data/articles';
import youtubeContent from '@/data/youtube-content';
import socialPlatforms from '@/data/social-platforms';
import developerDetails from '@/data/developer-details';
import buildYourOwnXProjects from '@/data/build-x-projects';

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
    buildYourOwnXProjects,
  };

  return JSON.stringify(jsonContext, null, 2);
};

export const getSkillsAnswer = (): string => {
  let answer = "Here is an overview of Ahmed's skills:<br/><br/>";
  skillsCategories.forEach(category => {
    answer += `${category.name}: ${category.skills.map(s => s.name).join(', ')}<br/>`;
  });
  answer += "<br/>I hope this gives you a good idea of his technical expertise!";
  return answer;
};

export const getProjectsAnswer = (): string => {
  let answer = "Here are some of Ahmed's notable projects:<br/><br/>";
  projects.forEach(project => {
    answer += `- ${project.title}: ${project.description}<br/>`;
  });
  answer += "<br/>You can find more details about these in his portfolio.";
  return answer;
};

export const getExperienceAnswer = (): string => {
  let answer = "Here is Ahmed's professional experience:<br/><br/>";
  experience.forEach(exp => {
    answer += `- ${exp.title} at ${exp.company} (${exp.period})<br/>`;
  });
  answer += "<br/>Feel free to ask for more details on any specific role.";
  return answer;
};

export const getEducationAnswer = (): string => {
  let answer = "Here is Ahmed's educational background:<br/><br/>";
  education.forEach(edu => {
    answer += `- ${edu.degree} in ${edu.field} from ${edu.institution} (${edu.period})<br/>`;
  });
  answer += "<br/>He is constantly learning and taking new specializations as well.";
  return answer;
};

