import de from './de.json';
import en from './en.json';

export const languages = { de, en } as const;
export type Lang = keyof typeof languages;

export const t = (lang: Lang) => languages[lang];
export const homePath = (lang: Lang) => (lang === 'de' ? '/' : '/en/');
