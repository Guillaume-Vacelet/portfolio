import { Squircle } from "@squircle-js/react";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  techstack: string[];
}

export default function ProjectCard({project} : {project: ProjectCardProps}) {
  return (
    <div className="w-full md:w-[324px] sm:h-[350px] flex flex-col overflow-hidden">
      <div className="relative w-full sm:h-1/2 h-[175px]">
        <Image
          src={project.image}
          alt="Project card image"
          fill
          className="rounded-lg"
          style={{objectFit:"cover"}}
        />
      </div>
      <div className="h-1/2 flex flex-col sm:justify-between sm:p-4 p-2 gap-3">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-black">{project.title}</span>
          <p className="text-xs font-medium text-gray-900">{project.desc}</p>
        </div>
        <a className="flex flex-row items-center gap-2 text-xs font-semibold text-accent">
          See more
          <div className="relative w-[16px] h-[14px]">
            <Image
              src={'/static/images/arrow.right.svg'}
              alt="Right arrow icon"
              fill
            />
          </div>
        </a>
      </div>
    </div>
  )
}