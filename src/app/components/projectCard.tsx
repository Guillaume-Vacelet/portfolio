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
    <div className="w-full flex flex-col">
      <div className="relative w-full aspect-w-16 aspect-h-8 rounded-lg ">
        <Image
          src={project.image}
          alt="Project card image"
          fill
          className="rounded-lg"
          style={{objectFit:"cover"}}
        />
      </div>

      <div className="flex flex-col text-xs md:text-base font-medium px-1 py-2 gap-3">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-black">{project.title}</span>
          <p className="text-gray-900">{project.desc}</p>
        </div>

        <a className="flex flex-row items-center gap-2 hover:gap-3 text-accent leading-none cursor-pointer">
          See more
          <div className="relative size-3 md:size-4">
            <Image
              src={'/static/images/arrow.right.svg'}
              alt="Right arrow icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </a>
      </div>
    </div>
  )
}