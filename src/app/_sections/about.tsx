import TechStackCard from "@/_components/techStackCard/techStackCard";
import ResumeListCard from "@/_components/resumeListCard";
import SchoolLinkCard, {SchoolCard} from "@/_components/schoolCard";

export default function AboutSection() {
  const schools: SchoolCard[] = [
    { 
      image: "/static/images/epitech.svg",
      imgW: "w-44",
      imgH: "h-11",
      url: "https://www.epitech.eu/",
      title: "Master degree in IT",
      desc: "From understanding Unix and low level coding principles, to learning the latest stacks and development frameworks."
    },
    { 
      image: "/static/images/cau.svg",
      imgW: "w-24",
      imgH: "h-24",
      url: "https://www.cau.ac.kr/index.do",
      title: "Exchange year in Seoul",
      desc: "Immersion in Korean culture at Chung-Ang University to explore fields such as Entrepreneurhsip, Big Data or AI."
    },
  ]

  return (
    <section id="about" className="section flex-col items-center gap-4 text-black px-6 py-16">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-4xl flex flex-col items-center gap-4">

        {/* <div className="w-full flex flex-col items-start gap-6 sm:gap-16">
          <h2 className="text-black text-5xl sm:text-5xl font-medium">Who am I?</h2>
          <p className="text-sm sm:text-base font-normal">
            Graduated from Epitech IT school, I am a software engineer who thrives on solving problems.
            Mostly working around the Javascript ecosystem, I create memorable websites through a polished user experience.
          </p>
        </div> */}

        <div className="w-full grid grid-rows-2 gap-4">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2">
              <ResumeListCard />
            </div>
            <div className="col-span-4">
              <TechStackCard />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ResumeListCard />
            <SchoolLinkCard schoolCard={schools[0]}/>
            <SchoolLinkCard schoolCard={schools[1]}/>
          </div>
        </div>
      </div>
    </section>
  );
}
