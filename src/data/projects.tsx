import { Project } from "@/types/Project";

const projects: Project[] = [
    {
        id: '1',
        title: 'Intern2Grow',
        description: 'Virtual internship programs provider, which offers virtual internships with real tasks, so users can work on some real projects to gain work experience, and be job-ready.',
        tags: ['Next.js', 'MongoDB', 'Deno KV', 'YouTube API', 'Deno Runtime', 'Deno Deploy', 'Vercel', 'Cloudflare'],
        images: ['/images/projects/intern2grow/1.png', '/images/projects/intern2grow/2.png', '/images/projects/intern2grow/3.png', '/images/projects/intern2grow/4.png', '/images/projects/intern2grow/5.png'],
        demoUrl: 'https://intern2grow.pages.dev',
        story: `On September 2022, I first conceived of the idea for Intern2Grow. Validating the idea and checking similar platforms took me months until I brought the Intern2Grow website online on March 2023.

In the first release, I used MongoDB as a database, Express.js to build the backend stuff, and EJS as a template engine, then deployed a simple black and white website on Render. That was the MVP of Intern2Grow containing only two virtual internship programs.

Multiple months later on July 2023, I have collaborated with a UI/UX Designer called Diaa Mohamed to redesign that black and white website into a more user-friendly interface.

On September 2023, I started thinking about improving the user experience of our website, which led me to start migrating the whole website from Express.js and EJS template engine into Next.js Full Stack Single Page Application deployed on Vercel in a serverless way.

The website started to encounter relatively-high traffic, that was going to reach the limits of Vercel's free plan, as we received 94,000/100,000 serverless function invocations monthly, so I quickly managed to get Intern2Grow out of Vercel, and successfully deployed it on cloudflare when we were so close to reach Vercel limits (98,000/100,000 invocations).

Then I started thinking about improving the performance of the website more and more, so I optimized the website to use SSG (Static Site Generation) technique with Next.js, and separated the backend into another project/repository, building it with Hono and Deno, and deploying it on deno deploy.

Which significantly improved the performance of both the backend API and the frontend website, and allowed to accept higher traffic. I also used Deno KV as a key-value database for caching.

Despite working with Deno and Hono, I preferred to build small services in Node.js to handle certificate generation and email sending.

I enjoyed handling redirects from domain to another and migrating from tech stack to another.`
    },
    {
        id: '2',
        title: 'ContentAt',
        description: 'Content creation tool that allows users to create high-quality covers, thumbnails and PDF carousels for their social media posts, blogs, and other content.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'React.js'],
        images: ['/images/projects/contentat/1.png', '/images/projects/contentat/2.png', '/images/projects/contentat/3.png', '/images/projects/contentat/4.png', '/images/projects/contentat/5.png'],
        demoUrl: 'https://content-at.vercel.app',
        story: `As a content creator, I've always wanted an easy way to design high-quality covers and thumbnails for my social media posts and blogs. Most existing tools were either too complicated or lacked the features I needed, so I decided to build my own.

I envisioned a simple, free tool that required no design skills and could be used anytime, anywhere. While it started as a personal project, I realized it could benefit others too.

In April 2024, I began building ContentAt, a content creation tool that helps users design professional-looking covers, thumbnails, and PDF carousels for blogs, social posts, and more.

Building this tool was a rewarding experience. I tackled several interesting challenges: generating dynamic images with Next.js, building custom color pickers, ensuring accessible color contrast, generating PDFs, optimizing with debounce, implementing retry logic for API calls, using localStorage for thumbnail saving, and tracking storage space. I even added a sleek storage management modal, inspired by Google's Play Store, to help users manage their content when nearing quota limits.

My hope is that ContentAt empowers other content creators to craft high-quality visuals quickly and effortlessly.`
    }
];

export default projects;