export type I18nString = { en: string; pt: string };

/** Resolve a bilingual or plain string for the current language */
export function t(value: I18nString | string, lang: 'en' | 'pt'): string {
  if (typeof value === 'string') return value;
  return value[lang];
}

export interface HeaderData {
  name: string;
  description: I18nString;
  imgPath: string;
  links: { name: string; link: string }[];
}

export interface ExperienceItem {
  company: string;
  role: I18nString;
  dateRange: I18nString;
  description?: I18nString;
  companyUrl: string;
  logoUrl?: string;
}

export interface SkillsCategory {
  category: I18nString;
  icon: string;
  skills: string[];
}

export interface AchievementItem {
  title: I18nString;
  description: I18nString;
  link?: string;
  date?: string;
  iconUrl?: string;
}

export interface BlogItem {
  title: I18nString;
  excerpt: I18nString;
  url: string;
  date: I18nString;
}

export interface BookItem {
  title: string;
  author: string;
  url?: string;
  coverUrl?: string;
  status?: 'reading' | 'read' | 'want-to-read';
}

export interface ContactData {
  email?: string;
  linkedin?: string;
  github?: string;
  substack?: string;
}

export interface AboutSection {
  type: 'about';
  title: I18nString;
  body: I18nString;
}

export interface ExperienceSection {
  type: 'experience';
  title: I18nString;
  items: ExperienceItem[];
}

export interface SkillsSection {
  type: 'skills';
  title: I18nString;
  categories: SkillsCategory[];
}

export interface AchievementSection {
  type: 'achievements';
  title: I18nString;
  items: AchievementItem[];
}

export interface BlogSection {
  type: 'blog';
  title: I18nString;
  moreUrl?: string;
  items: BlogItem[];
}

export interface BooksSection {
  type: 'books';
  title: I18nString;
  moreLabel?: string;
  items: BookItem[];
}

export interface ContactSection {
  type: 'contact';
  title: I18nString;
  data: ContactData;
}

export type Section =
  | AboutSection
  | ExperienceSection
  | SkillsSection
  | AchievementSection
  | BlogSection
  | BooksSection
  | ContactSection;

export interface PortfolioContent {
  header: HeaderData;
  sections: Section[];
  closingQuote?: I18nString;
}
