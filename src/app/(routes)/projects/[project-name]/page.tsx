'use client'
import Footer from "@/_sections/footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import projects from "@/_data/projects";

export default function Projects() {
  const router = useRouter()
  const pathName = usePathname()
  const [projectIndex, setProjectIndex] = useState(-1);

  useEffect(() => {
    const urlSegment = pathName.split('/');

    setProjectIndex(projects.findIndex(project => {
      return project.title.toLowerCase() === urlSegment[urlSegment.length - 1].toLowerCase()
    }));
  }, []);

  return (
    <div className="size-full min-h-screen  bg-black">
      <div className="size-full flex flex-col items-center justify-center px-6">
        <div className="relative w-full flex flex-row items-center justify-between h-16">
          <Link href="/#projects" className="absolute p-0 left-0">
            <div className="relative size-6 svg-to-white rotate-180">
              <Image
                src={`/static/images/arrow.right.svg`}
                alt="arrow icon"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </Link>

          <div className="w-full flex justify-center items-center">
            <Link href="/" onClick={() => router.replace('/')}>
              <div className="relative size-12 svg-to-white">
                <Image
                  src={`/static/images/logo-perso.svg`}
                  alt="menu icon"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </Link>
          </div>
        </div>

        {projectIndex === -1
          ? <div className="w-full h-screen flex items-center justify-center">Loading</div>
          : <div className="max-w-[800px] flex flex-col gap-8 sm:gap-12 mt-8 sm:mt-16 md:mt-[150px] px-4 sm:px-6 pb-20">
              <div className="flex flex-col gap-2 sm:gap-3 pt-8 sm:pt-12">
                <span className="text-base sm:text-lg font-medium text-gray-400">{projects[projectIndex].year}</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-white">{projects[projectIndex].title}</h1>
                <h2 className="text-base sm:text-lg font-medium text-gray-400">{projects[projectIndex].subtitle}</h2>
              </div>

              <Image
                src={projects[projectIndex].image}
                width={800}
                height={450}
                alt="project cover"
                style={{borderRadius: "8px"}}
              />

              {/* Tech stack */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg sm:text-2xl font-medium text-white">Tech stack</h3>
                <div className="flex flex-row gap-2">
                  {projects[projectIndex].techstack.map(tech => 
                    <div key={tech} className="px-5 py-1 rounded-full bg-gray-900 text-sm font-normal text-white border-gray-700 border-[0.35px]">
                      {tech}
                    </div>
                  )}
                </div>
              </div>

              {/* Context */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg sm:text-2xl font-medium text-white">Context</h3>
                <p className="text-sm sm:text-base font-normal text-gray-400">{projects[projectIndex].context}</p>
              </div>

              {/* Concept */}
              <div className="flex flex-col gap-4">
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
