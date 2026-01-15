import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectCard({project} : {project: string}) {
  const t = useTranslations(`projectsPage.${project}`);
  
  return (
    <Link
      href={t('url').length != 0 ? t('url') : `/projects/${project}`}
      target={t('url').length != 0 ? "_blank" : ""}
      className="w-full flex flex-col group bg-white rounded-2xl border border-cardBorder">
      <div className="relative rounded-t-2xl overflow-hidden">
        <Image
          src={`/static/images/${project}-thumbnail.png`}
          width={1067}
          height={600}
          alt="Project card image"
          className="rounded-t-2xl object-cover"
        />
        <div className="image-bottom-fade"></div>
      </div>

      <div className="flex flex-col justify-between text-xs md:text-base font-medium p-4 sm:p-6 gap-2">
        <div className="flex flex-row items-center gap-3">
          <span className="text-xl font-medium text-black">{t('title')}</span>
          <Image
            src={"/static/icons/arrow.up.right.svg"}
            alt="arrow icon"
            width={10}
            height={10}
            className="hidden group-hover:block"
          />
        </div>
        <p className="text-sm font-normal text-gray-600">{t('desc')}</p>
      </div>
    </Link>
  )
}