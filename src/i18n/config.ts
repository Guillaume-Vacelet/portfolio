export type Locale = (typeof locales)[number];

export const locales = ['en', 'fr', 'ko'] as const;
export const defaultLocale: Locale = 'en';

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}
