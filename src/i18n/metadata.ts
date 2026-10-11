import { Locale, routing } from './routing';

// Absolute base for canonical, Open Graph and sitemap URLs. Set NEXT_PUBLIC_SITE_URL
// to your domain; on Vercel the production domain is used automatically otherwise.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL
    ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
);

export const openGraphLocales: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  ko: 'ko_KR',
};

// Canonical URL of `path` in `locale`, plus its other language versions (hreflang).
// `path` is written without the locale prefix, e.g. "" for home or "/projects/bento".
export function localizedAlternates(locale: Locale, path = '') {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(routing.locales.map(l => [l, `/${l}${path}`])),
      'x-default': path || '/',
    },
  };
}
