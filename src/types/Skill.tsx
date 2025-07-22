interface Skill {
    name: string;
    icon: string;
}

interface Category {
    name: string;
    skills: Skill[];
}

export type { Skill, Category };