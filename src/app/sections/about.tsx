import HoverableButtonLink from "../components/hoverableButtonLink";

export default function AboutSection() {
  const resumes = [
    { label: "French", url: "/static/documents/resume-english.pdf" },
    { label: "English", url: "/static/documents/resume-english.pdf" },
    { label: "Korean", url: "/static/documents/resume-korean.pdf" },
    // { label: "Portfolio", url: "/static/documents/portfolio.pdf" }
  ];

  return (
    <section id="about" className="section text-black p-6 pt-20">
      <div className="w-full flex flex-col gap-4 text-sm font-medium">

        <p className="text-base">
          Mostly working around the Javascript ecosystem, I like contributing to meaningful projects with real world impact.
          <br />
          I am now seeking opportunities in Seoul, South-Korea.
        </p>

        <div className="w-fit flex flex-col justify-around gap-2 p-3 rounded-lg bg-white text-black font-medium shadow-[0px_4px_12px_0px_#00000014]">
          {/* <span className="text-lg">Resumes</span> */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 font-medium">
            {resumes.map((resume) =>
              <HoverableButtonLink
                key={resume.label}
                url={resume.url}
                label={resume.label}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
