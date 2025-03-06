export type Locale = (typeof locales)[number];

export const locales = ['en', 'fr', 'ko'];
export const defaultLocale: Locale = 'en';