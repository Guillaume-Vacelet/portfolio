import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  techstack: string[];
}

export default function ProjectCard({project} : {project: ProjectCardProps}) {
  return (
    <div className="w-full h-[350px] flex flex-col border border-slate-700 rounded-md overflow-hidden">
      <div className="relative w-full h-1/2">
        <Image
          src={project.image}
          alt="Project card image"
          fill
          objectPosition="top"
          style={{objectFit:"cover"}}
        />
      </div>
      <div className="h-1/2 flex flex-col justify-between p-4 gap-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">{project.title}</span>
          <p className="text-xs text-gray-200">{project.desc}</p>
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