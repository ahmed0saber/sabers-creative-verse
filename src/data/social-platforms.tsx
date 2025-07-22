import { SocialPlatform } from "@/types/SocialPlatform";
import { BookOpen, Github, Linkedin, Mail, MessageCircle, Youtube } from "lucide-react";

const socialPlatforms: SocialPlatform[] = [
    {
        name: 'GitHub',
        icon: <Github className="h-8 w-8" />,
        url: 'https://github.com/ahmedsaber',
        description: 'Follow my open source work and code repositories',
        followers: '2.3k',
        handle: '@ahmedsaber',
        color: 'text-white',
        bgGradient: 'from-gray-800 to-gray-900'
    },
    {
        name: 'LinkedIn',
        icon: <Linkedin className="h-8 w-8" />,
        url: 'https://linkedin.com/in/ahmedsaber',
        description: 'Connect professionally and see my career journey',
        followers: '5.1k',
        handle: '/in/ahmedsaber',
        color: 'text-white',
        bgGradient: 'from-blue-600 to-blue-700'
    },
    {
        name: 'YouTube',
        icon: <Youtube className="h-8 w-8" />,
        url: 'https://youtube.com/@ahmedsaber',
        description: 'Subscribe for programming tutorials and tech content',
        followers: '85.2k',
        handle: '@ahmedsaber',
        color: 'text-white',
        bgGradient: 'from-red-600 to-red-700'
    },
    {
        name: 'Telegram',
        icon: <MessageCircle className="h-8 w-8" />,
        url: 'https://t.me/ahmedsaber',
        description: 'Join my channel for quick tips and updates',
        followers: '12.5k',
        handle: '@ahmedsaber',
        color: 'text-white',
        bgGradient: 'from-blue-500 to-blue-600'
    },
    {
        name: 'Dev.to',
        icon: <BookOpen className="h-8 w-8" />,
        url: 'https://dev.to/ahmedsaber',
        description: 'Read my technical articles and tutorials',
        followers: '3.2k',
        handle: '@ahmedsaber',
        color: 'text-white',
        bgGradient: 'from-green-600 to-green-700'
    },
    {
        name: 'Email',
        icon: <Mail className="h-8 w-8" />,
        url: 'mailto:ahmed@example.com',
        description: 'Get in touch for collaboration opportunities',
        handle: 'ahmed@example.com',
        color: 'text-white',
        bgGradient: 'from-purple-600 to-purple-700'
    }
];

export default socialPlatforms;