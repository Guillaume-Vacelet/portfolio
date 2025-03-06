import Image from "next/image";
import Link from "next/link";
import {ProjectInfos} from "@/app/_data/projects";
import { useTranslations } from "next-intl";

export default function ProjectCard({project} : {project: ProjectInfos}) {
  const t = useTranslations(`homePage.projectsSection.${project.title.toLowerCase()}`);
  
  return (
    <Link href={`/projects/${project.title.toLowerCase()}`} className="w-full flex flex-col group bg-white rounded-2xl border-cardBorder border-[0.35px] shadow-sm card-hover-style hover:shadow-md">
      <div className="relative rounded-t-2xl overflow-hidden">
        <Image
          src={project.image}
          width={800}
          height={450}
          alt="Project card image"
          className="rounded-t-2xl object-cover"
        />
        <div className="image-bottom-fade"></div>
      </div>

      <div className="flex flex-col justify-between text-xs md:text-base font-medium p-4 gap-3">
        <div className="flex flex-col">
          <span className="text-xl font-medium text-black">{t('title')}</span>
          <p className="text-sm font-normal text-gray-600">{t('desc')}</p>
        </div>

        {/* <div className="w-fit flex flex-row items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all duration-300">
          <span className="link-hover-animation group-hover:link-hovered-animation">See more</span>
          <div className="relative size-3 svg-to-accent">
            <Image
              src={"/static/images/arrow.right.svg"}
              alt="arrow icon"
              fill
              style={{objectFit:"cover"}}
            />
          </div>
        </div> */}
      </div>
    </Link>
  )
}