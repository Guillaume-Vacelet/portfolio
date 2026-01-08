'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import IconChip from "@/app/_components/iconChip";
import Navbar from "@/app/_components/navbar";
import ContactSection from "@/app/_sections/contact";
import { useTranslations } from "next-intl";

export default function Projects() {
  const pathName = usePathname()
  const projectName = pathName.split('/').reverse()[0];
  const t = useTranslations('projectsPage');
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
            <h2 className="text-sm sm:text-base font-medium text-gray-500">
              {t(`${projectName}.desc`)}
            </h2>
          </div>

          <Image
            src={`/static/images/${projectName}-thumbnail.png`}
            width={800}
            height={450}
            alt="project cover"
            className="w-full rounded-lg"
          />

          {/* Tech stack */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-2xl font-medium text-white">
              {t('techstackLabel')}
            </h3>
            <div className="w-full flex flex-row gap-2 flex-wrap">
              {techstack.map(tech => 
                <IconChip key={tech} label={tech} />
              )}
            </div>
          </div>

          {/* Context */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-2xl font-medium text-white">
              {t('contextLabel')}
            </h3>
            <p className="text-sm sm:text-base font-normal text-gray-400 whitespace-pre-wrap">
              {t(`${projectName}.context`)}
            </p>
          </div>

          {/* Concept */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-2xl font-medium text-white">
              {t('conceptLabel')}
            </h3>
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
