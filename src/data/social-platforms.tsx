import { SocialPlatform } from "@/types/SocialPlatform";
import { Facebook, Github, Linkedin, Mail, MessageCircle, Youtube } from "lucide-react";

const socialPlatforms: SocialPlatform[] = [
    {
        name: 'GitHub',
        icon: <Github className="h-8 w-8" />,
        url: 'https://github.com/ahmed0saber',
        description: 'Follow my open source work and code repositories',
        followers: '331',
        handle: '@ahmed0saber',
        color: 'text-white',
        bgGradient: 'from-violet-700 to-violet-900'
    },
    {
        name: 'LinkedIn',
        icon: <Linkedin className="h-8 w-8" />,
        url: 'https://www.linkedin.com/in/ahmed0saber/',
        description: 'Connect professionally and see my career journey',
        followers: '33.3K',
        handle: '/in/ahmed0saber',
        color: 'text-white',
        bgGradient: 'from-emerald-700 to-emerald-900'
    },
    {
        name: 'YouTube',
        icon: <Youtube className="h-8 w-8" />,
        url: 'https://youtube.com/@ahmed0saber',
        description: 'Subscribe for programming tutorials and tech content',
        followers: '1.66K',
        handle: '@ahmed0saber',
        color: 'text-white',
        bgGradient: 'from-red-700 to-red-900'
    },
    {
        name: 'Telegram',
        icon: <MessageCircle className="h-8 w-8" />,
        url: 'https://t.me/ahmed0saber_channel',
        description: 'Join my channel for quick tips and updates',
        followers: '4.66K',
        handle: '@ahmed0saber_channel',
        color: 'text-white',
        bgGradient: 'from-lime-700 to-lime-900'
    },
    {
        name: 'Facebook',
        icon: <Facebook className="h-8 w-8" />,
        url: 'https://www.facebook.com/profile.php?id=100092736532709',
        description: 'Connect with me on Facebook for updates and discussions',
        followers: '8.75K',
        handle: '@Ahmed Saber',
        color: 'text-white',
        bgGradient: 'from-sky-700 to-sky-900'
    },
    {
        name: 'Email',
        icon: <Mail className="h-8 w-8" />,
        url: 'mailto:ahmed0saber33@gmail.com',
        description: 'Contact me for collaborations or inquiries',
        handle: 'ahmed0saber33@gmail.com',
        color: 'text-white',
        bgGradient: 'from-amber-700 to-amber-900'
    }
];

export default socialPlatforms;