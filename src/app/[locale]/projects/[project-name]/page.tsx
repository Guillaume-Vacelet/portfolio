import Image from "next/image";
import { notFound } from "next/navigation";
import IconChip from "@/app/_components/iconChip";
import Navbar from "@/app/_components/navbar";
import ContactSection from "@/app/_sections/contact";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/app/_data/projects";
import type { Metadata } from "next";
import { isLocale } from "@/i18n/routing";
import { localizedAlternates, openGraphLocales } from "@/i18n/metadata";

// Pre-render every project (per locale, see the layout); other slugs return a 404
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(project => ({ 'project-name': project }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string, 'project-name': string }>
}): Promise<Metadata> {
  const { locale, 'project-name': slug } = await params;
  const projectName = decodeURIComponent(slug);
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'projectsPage' });
  if (!t.has(`${projectName}.title`)) return {};

  const path = `/projects/${projectName}`;
  return {
    title: t(`${projectName}.title`),
    description: t(`${projectName}.desc`),
    alternates: localizedAlternates(locale, path),
    openGraph: {
      type: 'article',
      siteName: 'Guillaume Vacelet',
      locale: openGraphLocales[locale],
      url: `/${locale}${path}`,
      title: t(`${projectName}.title`),
      description: t(`${projectName}.desc`),
      images: `/static/images/${projectName}-thumbnail.png`,
    },
    // Projects with an external website have no content of their own here
    robots: t(`${projectName}.url`) ? { index: false } : undefined,
  };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string, 'project-name': string }>
}) {
  const { locale, 'project-name': slug } = await params;
  setRequestLocale(locale);
  const projectName = decodeURIComponent(slug);
  const t = await getTranslations('projectsPage');

  if (!t.has(`${projectName}.title`)) {
    notFound();
  }
  const techstack = t.raw(`${projectName}.techstack`) as string[];

  return (
    <div className="w-full min-h-screen pt-[var(--sm-header-h)] sm:pt-[var(--header-h)] bg-zinc-900">
      <div className="size-full flex flex-col items-center justify-center px-3 sm:px-12 md:px-20 xl:px-40">
        <Navbar homePage={false} dark />
        <div className="size-full flex flex-col justify-start gap-8 sm:gap-12 mt-8 pb-20">
          <div className="flex flex-col gap-2 sm:gap-3 pt-8 sm:pt-24">
            <span className="text-sm sm:text-base font-medium text-gray-500">
              {t(`${projectName}.year`)}
              </span>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              {t(`${projectName}.title`)}
            </h1>
            <p className="text-sm sm:text-base font-medium text-gray-500">
              {t(`${projectName}.desc`)}
            </p>
          </div>

          <Image
            src={`/static/images/${projectName}-thumbnail.png`}
            width={800}
            height={450}
            sizes="100vw"
            priority
            alt={t(`${projectName}.title`)}
            className="w-full rounded-lg"
          />

          {/* Tech stack */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg sm:text-2xl font-medium text-white">
              {t('techstackLabel')}
            </h2>
            <div className="w-full flex flex-row gap-2 flex-wrap">
              {techstack.map(tech =>
                <IconChip key={tech} label={tech} />
              )}
            </div>
          </div>

          {/* Context */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg sm:text-2xl font-medium text-white">
              {t('contextLabel')}
            </h2>
            <p className="text-sm sm:text-base font-normal text-gray-400 whitespace-pre-wrap">
              {t(`${projectName}.context`)}
            </p>
          </div>

          {/* Concept */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg sm:text-2xl font-medium text-white">
              {t('conceptLabel')}
            </h2>
            <p className="text-sm sm:text-base font-normal text-gray-400 whitespace-pre-wrap">
              {t(`${projectName}.concept`)}
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
