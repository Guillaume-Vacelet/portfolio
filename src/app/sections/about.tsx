import HoverableButtonLink from "../components/hoverableButtonLink";
import Image from "next/image";

export default function AboutSection() {
  const resumes = [
    { label: "French", url: "/static/documents/resume-english.pdf" },
    { label: "English", url: "/static/documents/resume-english.pdf" },
    { label: "Korean", url: "/static/documents/resume-korean.pdf" },
    // { label: "Portfolio", url: "/static/documents/portfolio.pdf" }
  ];

  const ResponsiveSquare = ({title, url} : {title: string, url: string}) => {
    return (
      <div className="relative w-full pt-[100%]">
        <a className="absolute top-0 left-0 size-full p-4 rounded-xl bg-white hover:scale-105 shadow-[0px_4px_12px_0px_#00000014]"
          href={url}
          target="_blank">
          <div className="flex items-start justify-between text-sm sm:text-base font-medium !leading-none">
            {title}
            <div className="relative size-3">
              <Image
                src={'/static/images/arrow.up.right.svg'}
                alt="Up right arrow icon"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <section id="about" className="section text-black p-6 pt-24">
      <div className="w-full flex flex-col gap-4 text-sm font-medium">
        <p className="text-sm">
          Mostly working around the Javascript ecosystem, I like contributing to meaningful projects with real world impact.
          <br />
          I am now seeking opportunities in Seoul, South-Korea.
        </p>
        <div className="size-[272px] bg-white rounded-xl grid grid-cols-2 grid-rows-2 gap-3 p-4">
          <div className="relative w-full pt-[100%]">
            <div className="absolute top-0 left-0 text-xl font-semibold !leading-none p-2">
              My resumes
            </div>
          </div>

          {resumes.map((resume) =>
            <ResponsiveSquare title={resume.label} url={resume.url} key={resume.label} />
          )}
        </div>
      </div>
    </section>



  );
}
