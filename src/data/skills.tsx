import { Category } from "@/types/Skill";

const skillsCategories: Category[] = [
    {
        name: 'Front-End',
        skills: [
            { name: 'HTML', icon: 'html.svg' },
            { name: 'CSS', icon: 'css.svg' },
            { name: 'JavaScript', icon: 'js.svg' },
            { name: 'jQuery', icon: 'jquery.png' },
            { name: 'Bootstrap', icon: 'bootstrap.svg' },
            { name: 'Sass', icon: 'sass.png' },
            { name: 'Tailwind CSS', icon: 'tailwind-css.svg' },
            { name: 'React', icon: 'react.png' },
            { name: 'Redux', icon: 'redux.svg' },
            { name: 'TypeScript', icon: 'typescript.svg' },
            { name: 'Next.js', icon: 'nextjs.svg' },
        ]
    },
    {
        name: 'Back-End',
        skills: [
            { name: 'Node.js', icon: 'nodejs.svg' },
            { name: 'Express.js', icon: 'express-js.svg' },
            { name: 'MongoDB', icon: 'mongodb.svg' },
            { name: 'Redis', icon: 'redis.svg' },
            { name: 'Next.js', icon: 'nextjs.svg' },
        ]
    },
    {
        name: 'DevOps',
        skills: [
            { name: 'Git', icon: 'git.svg' },
            { name: 'CI/CD', icon: 'ci-cd.png' },
            { name: 'Cloudflare', icon: 'cloudflare.png' },
            { name: 'Serverless', icon: 'serverless.png' },
            { name: 'Microfrontends', icon: 'microfrontends.svg' },
        ]
    },
];

export default skillsCategories;