import developerDetails from "@/data/developer-details"
import education from "@/data/education"
import experience from "@/data/experience"
import skillsCategories from "@/data/skills"
import socialPlatforms from "@/data/social-platforms"
import journey from "@/data/journey"

const generateReadmeContent = () => {
    return `# ${developerDetails.name} - ${developerDetails.title}

## About Me
${developerDetails.description}

## Skills
${skillsCategories.map(category => `- **${category.name}**: ${category.skills.map(skill => skill.name).join(', ')}`).join('\n')}

## Experience
${experience.map(exp => `- **${exp.title}** at ${exp.company} (${exp.period.join(' & ')})\n  ${exp.description}`).join('\n')}

## Education
${education.map(edu => `- **${edu.degree}** in ${edu.field} from ${edu.institution} (${edu.period})`).join('\n')}

## My Journey
${journey.headline}

${journey.story}

### References
${journey.references.map(ref => `- [${ref.label}](${ref.url})`).join('\n')}

## Contact
${socialPlatforms.map(platform => `- [${platform.name}](${platform.url}) - ${platform.description} (${platform.followers || 'N/A'} followers)`).join('\n')}`
}

export default generateReadmeContent;