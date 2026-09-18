export type SkillCategory = "Frontend" | "Backend" | "Database" | "DevOps";

export type Skill = {
    name: string;
    level: number;
    hex: string;
    category: SkillCategory;
};

export type Project = {
    title: string;
    description: string;
    tech: string[];
    hex: string;
    status: string;
};

export type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    desc: string;
    hex: string;
};

export type Stat = {
    label: string;
    value: string;
};

export type LanguageBadge = {
    lang: string;
    hex: string;
    icon: string;
};

export type ContactChannel = {
    label: string;
    value: string;
    hex: string;
};

export type HexBadge = {
    label: string;
    color: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
};
