import Image from "next/image";
import Link from "next/link";
import {ProjectInfos} from "@/_data/projects";

export default function ProjectCard({project} : {project: ProjectInfos}) {
  return (
    <Link href={`/projects/${project.title.toLowerCase()}`} className="h-96 w-full flex flex-col group bg-white rounded-2xl border-cardBorder border-[0.35px] shadow-md">
      <div className="rounded-t-2xl overflow-hidden">
        <Image
          src={project.image}
          width={800}
          height={450}
          alt="Project card image"
          className="rounded-t-2xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 size-full flex flex-col justify-between text-xs md:text-base font-medium p-4 gap-3">
        <div className="flex flex-col">
          <span className="text-xl font-medium text-black">{project.title}</span>
          <p className="text-sm font-normal text-gray-600">{project.subtitle}</p>
        </div>

        <div className="w-fit flex flex-row items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all duration-300">
          <span className="link-hover-animation group-hover:link-hovered-animation">See more</span>
          <div className="relative size-3 svg-to-accent">
            <Image
              src={"/static/images/arrow.right.svg"}
              alt="arrow icon"
              fill
              style={{objectFit:"cover"}}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}