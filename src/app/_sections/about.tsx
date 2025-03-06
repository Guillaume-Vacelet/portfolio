'use client'
import TechStackCard from "@/app/_components/techStackCard/techStackCard";
import ResumeListCard from "@/app/_components/resumeListCard";
import SchoolLinkCard, {SchoolCard} from "@/app/_components/schoolCard";
import CallToActionCard from "@/app/_components/callToActionCard";
import ScrollToProjectsCard from "@/app/_components/scrollToProjectsCard";

export default function AboutSection() {
  const schools: SchoolCard[] = [
    { 
      image: "/static/images/epitech-thumbnail.svg",
      url: "https://www.epitech.eu/",
      title: "Master degree in IT",
      desc: "From understanding Unix and low level coding principles, to learning the latest stacks & development frameworks."
    },
    { 
      image: "/static/images/cau-thumbnail.svg",
      url: "https://www.cau.ac.kr/index.do",
      title: "Exchange year in Seoul",
      desc: "Immersion in Korean culture at Chung-Ang University to explore fields such as Entrepreneurhsip, Big Data or AI."
    },
  ]

  return (
    <section id="about" className="section flex-col items-center gap-5 text-black px-4 sm:px-12 md:px-20 xl:px-40 pt-8 pb-16">
      <div className="flex flex-col items-center gap-5"> 
        <div className="w-full grid max-[592px]:grid-cols-1 grid-cols-5 gap-5">
          <div className="max-[592px]:col-span-1 col-span-3 bg-white rounded-2xl border-cardBorder border-[0.35px] shadow-sm">
            <p className="text-base md:text-xl font-normal p-8">
              I am a <strong>software engineer</strong> specializing in <strong>frontend</strong> development, passionate about crafting <strong>engaging user experiences</strong>.
              <br/>
              <br/>
              I am open to work on new projects!
            </p>
          </div>

          <div className="max-[592px]:col-span-1 col-span-2">
            <ResumeListCard />
          </div>
        </div>

        <div className="grid max-[592px]:grid-cols-1 grid-cols-2 gap-5">
          <div className="col-span-1 grid grid-rows-4 gap-5">
            <div className="max-[592px]:col-span-1 row-span-3">
              <CallToActionCard />
            </div>
            <div className="max-[592px]:col-span-1 row-span-1">
              <ScrollToProjectsCard />
            </div>
          </div>

          <div className="max-[592px]:col-span-1 col-span-1">
            <TechStackCard />
          </div>
        </div>

        <div className="w-full grid max-[592px]:grid-cols-1 max-[592px]:grid-rows-2 grid-cols-2 gap-5">
          <SchoolLinkCard schoolCard={schools[0]}/>
          <SchoolLinkCard schoolCard={schools[1]}/>
        </div>      
      </div>
    </section>
  );
}
