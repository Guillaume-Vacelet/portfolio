import { Squircle } from "@squircle-js/react";
import Image from "next/image";
import HoverableButtonLink from "./hoverableButtonLink";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  techstack: string[];
}

export default function ProjectCard({project} : {project: ProjectCardProps}) {
  return (
    <div className="w-full flex flex-col">
      <div className="relative w-full aspect-w-16 aspect-h-8 rounded-lg">
        <Image
          src={project.image}
          alt="Project card image"
          fill
          className="rounded-lg"
          style={{objectFit:"cover"}}
        />
      </div>

      <div className="flex flex-col text-xs md:text-base font-medium p-3 gap-3">
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-black">{project.title}</span>
          <p className="text-gray-500">{project.desc}</p>
        </div>

        <HoverableButtonLink url="" label="See more" bgColor="white" hoverBgColor="var(--accent)" />
      </div>
    </div>
  )
}