import { Locale, routing } from './routing';

// Absolute base for canonical, Open Graph and sitemap URLs. Must be the domain that
// serves the site: guillaumevacelet.com redirects to www. NEXT_PUBLIC_SITE_URL overrides it.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.guillaumevacelet.com'
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
