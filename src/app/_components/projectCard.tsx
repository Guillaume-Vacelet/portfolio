import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { Project } from "@/app/_data/projects";

export default function ProjectCard({project} : {project: Project}) {
  const t = useTranslations(`projectsPage.${project.slug}`);
  const externalUrl = project.url;
  // External projects open their website, the others their page on this site
  const CardLink = externalUrl ? NextLink : Link;

  return (
    <CardLink
      href={externalUrl || `/projects/${project.slug}`}
      target={externalUrl ? "_blank" : undefined}
      rel={externalUrl ? "noopener noreferrer" : undefined}
      className="w-full flex flex-col group bg-white rounded-2xl border border-cardBorder">
      <div className="relative rounded-t-2xl overflow-hidden">
        <Image
          src={`/static/images/${project.slug}-thumbnail.png`}
          width={1067}
          height={600}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt=""
          className="rounded-t-2xl object-cover"
        />
      </div>

      <div className="flex flex-col justify-between text-xs md:text-base font-medium p-4 sm:p-6 gap-2">
        <div className="flex flex-row items-center gap-3">
          <h3 className="text-xl font-medium text-black">{project.title}</h3>
          <Image
            src={"/static/icons/arrow.up.right.svg"}
            alt=""
            width={10}
            height={10}
            className="hidden group-hover:block"
          />
        </div>
        <p className="text-sm font-normal text-gray-600">{t('desc')}</p>
      </div>
    </CardLink>
  )
}