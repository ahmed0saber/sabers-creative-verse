import { OpenSourceProject } from "@/types/OpenSourceProject";

const openSourceProjects: OpenSourceProject[] = [
    {
        id: '1',
        title: 'Glide.js',
        description: 'A dependency-free JavaScript ES6 slider and carousel. It\'s lightweight, flexible and fast. Designed to slide. No less, no more.',
        tags: ['JavaScript', 'Refactoring'],
        githubUrl: 'https://github.com/glidejs/glide',
        role: 'contributor',
        contributions: 'Refactored the entire codebase efficiently.',
        stars: 7628,
        forks: 780
    },
    {
        id: '2',
        title: 'TheAlgorithms',
        description: 'The Algorithms website providing GitHub\'s largest open-source algorithm library.',
        tags: ['Next.js', 'Material UI', 'i18n', 'React.js'],
        githubUrl: 'https://github.com/TheAlgorithms/website',
        role: 'contributor',
        contributions: 'Improved the website\'s accessibility and readability for Arabic-speaking users. Configured all external links to open in a new tab to preserve the integrity of the SPA routing. Standardized the height of algorithm cards within each row for a consistent layout.',
        stars: 936,
        forks: 202
    },
    {
        id: '3',
        title: 'Quran Mailer',
        description: 'Quran Mailer is an open-source Quran mailing free service, where you can subscribe with your email address to receive a Quranic verse daily.',
        tags: ['Next.js', 'Jest', 'MongoDB', 'Node.js', 'Logging', 'Cron Jobs', 'React.js'],
        githubUrl: 'https://github.com/ahmed0saber/quran_mailer',
        role: 'maintainer',
        contributions: 'In April 12, 2024: Quran Mailer has been accepted as an open-source project in JetBrains program.',
        stars: 8,
        forks: 12
    },
    {
        id: '4',
        title: 'Saber-Toast.js',
        description: 'Saber-Toast.js is an open-source JavaScript library built to handle all your toasts simply.',
        tags: ['HTML & CSS', 'JavaScript'],
        githubUrl: 'https://github.com/ahmed0saber/saber-toast',
        role: 'maintainer',
        contributions: 'In December 22, 2022: Saber-Toast.js has been recognized by CSS Script as a "Stylish Toast Notification Library" that supports RTL languages.',
        stars: 23,
        forks: 4
    }
];

export default openSourceProjects;