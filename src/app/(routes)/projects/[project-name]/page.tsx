'use client'
import Footer from "@/_sections/footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import projects from "@/_data/projects";
import IconChip from "@/_components/iconChip";

export default function Projects() {
  const router = useRouter()
  const pathName = usePathname()
  const [projectIndex, setProjectIndex] = useState(-1);

  useEffect(() => {
    const urlSegment = pathName.split('/');

    setProjectIndex(projects.findIndex(project => {
      return project.title.toLowerCase() === urlSegment[urlSegment.length - 1].toLowerCase()
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-950">
      <div className="size-full flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="relative w-full flex flex-row items-center justify-between h-16">
          <Link href="/"
            scroll={false}
            onClick={() => router.back()}
            className="absolute p-0 left-0">
            <div className="relative size-4 sm:size-5 md:size-6 svg-to-white rotate-180">
              <Image
                src={`/static/images/arrow.right.svg`}
                alt="arrow icon"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </Link>

          <div className="w-full flex justify-center items-center">
            <Link href="/">
              <div className="relative size-12 svg-to-white">
                <Image
                  src={`/static/images/logo-perso.svg`}
                  alt="personal logo"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </Link>
          </div>
        </div>

        {projectIndex === -1
          ? <div className="w-full h-screen flex items-center justify-center">Loading</div>
          : <div className="size-full md:max-w-[800px] flex flex-col justify-start gap-8 sm:gap-12 mt-8 pb-20">
              <div className="flex flex-col gap-2 sm:gap-3 pt-8 sm:pt-12">
                <span className="text-base sm:text-md font-medium text-gray-500">{projects[projectIndex].year}</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-white">{projects[projectIndex].title}</h1>
                <h2 className="text-base sm:text-md font-medium text-gray-500">{projects[projectIndex].subtitle}</h2>
              </div>

              <Image
                src={projects[projectIndex].image}
                width={800}
                height={450}
                alt="project cover"
                className="rounded-lg"
              />

              {/* Tech stack */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-2xl font-medium text-white">Tech stack</h3>
                <div className="w-full flex flex-row gap-2 flex-wrap">
                  {projects[projectIndex].techstack.map(tech => 
                    <IconChip key={tech} label={tech} />
                  )}
                </div>
              </div>

              {/* Context */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-2xl font-medium text-white">Context</h3>
                <p className="text-sm sm:text-base font-normal text-gray-400">{projects[projectIndex].context}</p>
              </div>

              {/* Concept */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-2xl font-medium text-white">Concept</h3>
                <p className="text-sm sm:text-base font-normal text-gray-400">{projects[projectIndex].concept}</p>
              </div>
            </div>
        }
      </div>
      <Footer />
    </div>
  );
}
