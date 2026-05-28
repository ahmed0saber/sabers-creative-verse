import { Project } from "@/types/Project";

const projects: Project[] = [
  {
    id: "1",
    title: "Intern2Grow",
    description:
      "Virtual internship programs provider, which offers virtual internships with real tasks, so users can work on some real projects to gain work experience, and be job-ready.",
    tags: [
      "Next.js",
      "MongoDB",
      "Deno KV",
      "YouTube API",
      "Deno Runtime",
      "Deno Deploy",
      "Vercel",
      "Cloudflare",
    ],
    images: [
      "intern2grow/1.webp",
      "intern2grow/2.webp",
      "intern2grow/3.webp",
      "intern2grow/4.webp",
      "intern2grow/5.webp",
      "intern2grow/6.webp",
    ],
    demoUrl: "https://intern2grow.pages.dev",
    story: `On September 2022, I first conceived of the idea for Intern2Grow. Validating the idea and checking similar platforms took me months until I brought the Intern2Grow website online on March 2023.

In the first release, I used MongoDB as a database, Express.js to build the backend stuff, and EJS as a template engine, then deployed a simple black and white website on Render. That was the MVP of Intern2Grow containing only two virtual internship programs.

Multiple months later on July 2023, I have collaborated with a UI/UX Designer called Diaa Mohamed to redesign that black and white website into a more user-friendly interface.

On September 2023, I started thinking about improving the user experience of our website, which led me to start migrating the whole website from Express.js and EJS template engine into Next.js Full Stack Single Page Application deployed on Vercel in a serverless way.

The website started to encounter relatively-high traffic, that was going to reach the limits of Vercel's free plan, as we received 94,000/100,000 serverless function invocations monthly, so I quickly managed to get Intern2Grow out of Vercel, and successfully deployed it on cloudflare when we were so close to reach Vercel limits (98,000/100,000 invocations).

Then I started thinking about improving the performance of the website more and more, so I optimized the website to use SSG (Static Site Generation) technique with Next.js, and separated the backend into another project/repository, building it with Hono and Deno, and deploying it on deno deploy.

Which significantly improved the performance of both the backend API and the frontend website, and allowed to accept higher traffic. I also used Deno KV as a key-value database for caching.

Despite working with Deno and Hono, I preferred to build small services in Node.js to handle certificate generation and email sending.

I enjoyed handling redirects from domain to another and migrating from tech stack to another.`,
  },
  {
    id: "2",
    title: "ContentAt",
    description:
      "Content creation tool that allows users to create high-quality covers, thumbnails and PDF carousels for their social media posts, blogs, and other content.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React.js"],
    images: [
      "contentat/1.webp",
      "contentat/2.webp",
      "contentat/3.webp",
      "contentat/4.webp",
      "contentat/5.webp",
    ],
    demoUrl: "https://content-at.vercel.app",
    story: `As a content creator, I've always wanted an easy way to design high-quality covers and thumbnails for my social media posts and blogs. Most existing tools were either too complicated or lacked the features I needed, so I decided to build my own.

I envisioned a simple, free tool that required no design skills and could be used anytime, anywhere. While it started as a personal project, I realized it could benefit others too.

In April 2024, I began building ContentAt, a content creation tool that helps users design professional-looking covers, thumbnails, and PDF carousels for blogs, social posts, and more.

Building this tool was a rewarding experience. I tackled several interesting challenges: generating dynamic images with Next.js, building custom color pickers, ensuring accessible color contrast, generating PDFs, optimizing with debounce, implementing retry logic for API calls, using localStorage for thumbnail saving, and tracking storage space. I even added a sleek storage management modal, inspired by Google's Play Store, to help users manage their content when nearing quota limits.

My hope is that ContentAt empowers other content creators to craft high-quality visuals quickly and effortlessly.`,
  },
  {
    id: "3",
    title: "QGame",
    description:
      "Online game platform that allows users to play a collection of word, math, and memory games designed to sharpen their mind and improve their skills.",
    tags: [
      "Web Components",
      "MicroFrontends",
      "JavaScript",
      "HTML & CSS",
      "Cloudflare",
    ],
    images: ["qgame/1.webp", "qgame/2.webp", "qgame/3.webp"],
    demoUrl: "https://qgame.pages.dev",
    githubUrl: "https://github.com/ahmed0saber/qgame",
    story: `As a software developer passionate about gaming, I've always wanted to build something that blends entertainment with technical depth. After reading the book: "Micro Frontends In Action", I became inspired to apply the concept in a real-world project, and that's how QGame was born.

QGame is an online game platform that hosts a growing collection of word, math, and memory games, each game is designed to sharpen the mind and provide meaningful play. But beyond the gameplay, the platform itself is an architectural experiment. I built QGame as a microfrontend-driven system, where each game is developed as a standalone web component that can be loaded at runtime.

This approach gave me the flexibility to update, deploy, or maintain each game independently without touching the core platform. Want to release a new game or patch a bug? Just redeploy the game's own repository, with no need to rebuild or redeploy the entire platform.

Building QGame was a technically enriching experience. I explored various microfrontend integration strategies and gained insight into how each approach impacts performance and SEO. I also learned how to manage cross-repo versioning effectively and facilitate state communication between isolated components.

QGame isn't just a playground for users, it's also a playground for architectural experimentation. My hope is that it brings joy to players while inspiring developers to explore modular frontend systems in practice.`,
  },
  {
    id: "4",
    title: "Gym Tracker",
    description:
      "An offline-first gym tracking progressive web app (PWA) to log workouts, track body composition, and monitor progress without relying on a backend server.",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "PWA",
      "Cloudflare",
    ],
    images: [
      "gym-tracker/1.webp",
      "gym-tracker/2.webp",
      "gym-tracker/3.webp",
      "gym-tracker/4.webp",
      "gym-tracker/5.webp",
      "gym-tracker/6.webp",
      "gym-tracker/7.webp",
    ],
    demoUrl: "https://my-gym-tracker.pages.dev",
    story: `Every time I stepped into the gym, I realized I had a problem. Between figuring out what exercises to do, trying to remember the exact weights I lifted last week, and keeping track of when my subscription was due, my workouts were getting bogged down in mental math. I also wanted to keep tabs on my body composition—like muscle mass and fat percentages—to make sure my efforts were actually paying off.

At first, I tried a DIY approach. I started sending WhatsApp messages to myself to log every workout, weight, and stat. But scrolling through endless chat bubbles just to figure out my routine for 'chest day' quickly became exhausting. I was spending more time analyzing my own text messages than actually lifting weights.

I knew there had to be a better way, so I decided to build one. I coded a custom web application initially designed just for me. It became my personal command center—a place to seamlessly log targeted muscles, categorize exercises, organize my gym days (like Push, Pull, Legs), and track all my body stats and reps.

Once it started making my gym life so much easier, I thought, "Why keep this to myself?" I decided to polish it up and share it with the world. I expanded it to be fully customizable, allowing anyone to add their own unique exercises and categories. I added full English and Arabic support so you can log workouts in either language, threw in a dark mode (because who doesn't love dark mode?), and packaged it as a Progressive Web App (PWA) that you can install directly on your phone or laptop.

One of the biggest hurdles at the gym? Terrible internet connection. Or even worse, running out of mobile data right in the middle of a set. That's why I engineered the app to be completely offline-first. It works perfectly without a network. 

Because privacy is a huge deal to me, your data never touches a server—everything is stored strictly on your device. You can even export it with a single click if you get a new phone. And don't worry, I won't ever see how much you're benching!

Oh, and a fun fact: a massive chunk of this project was coded with the help of AI. It's amazing how that's just becoming the new normal for developers.

If you're someone who hates losing track of their gym progress, give it a try. If it saves you time and hassle, I'd be absolutely thrilled to hear your feedback!`,
  },
];

export default projects;
