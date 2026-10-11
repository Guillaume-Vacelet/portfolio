import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteUrl } from '@/i18n/metadata';
import { projects } from '@/app/_data/projects';
import messages from '../../messages/fr.json';

// Projects with an external website have no page of their own worth indexing
const projectsPage = messages.projectsPage as Record<string, unknown>;
const indexedProjects = projects.filter(project =>
  !(projectsPage[project] as { url?: string } | undefined)?.url
);

function entry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: new URL(`/${routing.defaultLocale}${path}`, siteUrl).href,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map(locale => [locale, new URL(`/${locale}${path}`, siteUrl).href])
      ),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry(''),
    ...indexedProjects.map(project => entry(`/projects/${project}`)),
  ];
}
