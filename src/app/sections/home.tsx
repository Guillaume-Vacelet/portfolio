import SocialLinks, { SocialLink } from "@/app/components/socialLinks";
import DocumentLink from "@/app/components/documentLink";
import Image from "next/image";

export default function HomeSection() {
  const socialLinks: SocialLink[] = [
    { icon: 'linkedin.svg', label: 'linkedin', url: '' },
    { icon: 'github.svg', label: 'github', url: 'https://github.com/Guillaume-Vacelet' },
    { icon: 'envelope.fill.svg', label: 'email', url: 'mailto:guillaume.vacelet@gmail.com' },
  ]
  const resumes = [
    { label: "French", url: "/static/documents/resume-english.pdf" },
    { label: "English", url: "/static/documents/resume-english.pdf" },
    { label: "Korean", url: "/static/documents/resume-korean.pdf" },
    // { label: "Portfolio", url: "/static/documents/portfolio.pdf" }
  ];

  return (
    <section id="home" className="section flex flex-col justify-center box-border overflow-hidden"
      style={{minHeight: 0, height: "calc(100vh - var(--header-h) - 1.5rem)", paddingTop: "1.5rem" }}>
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="font-clash text-4xl font-light">Hello world, <br/>I'm <strong>Guillaume Vacelet</strong></h1>
            <h2 className="font-clash text-2xl font-light text-accent">Front-end engineer</h2>
          </div>
          <div className="w-full flex flex-col gap-2 justify-around text-sm">
            <span className="text-base">Resumes</span>
            <div className="flex flex-row gap-3">
              {resumes.map((resume, index) =>
                // <DocumentLink document={document} />
                <>
                  <div className="flex flex-row items-center gap-2">
                    {index ? '•' : ''}
                    <a className="w-full flex flex-row items-center gap-2 text-sm group hover:text-accent"
                      href={resume.url}
                      target="_blank">
                      {resume.label}
                      <svg width="10" height="10" viewBox="0 0 15 15">
                        <path className="group-hover:fill-accent" d="M14.4238 10.8008L14.4141 0.976562C14.4141 0.419922 14.0527 0.0292969 13.4668 0.0292969L3.64258 0.0292969C3.0957 0.0292969 2.72461 0.449219 2.72461 0.917969C2.72461 1.38672 3.14453 1.78711 3.60352 1.78711L7.00195 1.78711L11.7676 1.63086L9.95117 3.22266L0.273438 12.9199C0.0976562 13.0957 0 13.3203 0 13.5352C0 14.0039 0.419922 14.4434 0.908203 14.4434C1.13281 14.4434 1.34766 14.3652 1.52344 14.1797L11.2207 4.49219L12.832 2.66602L12.6562 7.22656L12.6562 10.8398C12.6562 11.2988 13.0566 11.7285 13.5352 11.7285C14.0039 11.7285 14.4238 11.3281 14.4238 10.8008Z" fill="#ffffff" fillOpacity="0.85"/>
                      </svg>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
    </section>
  );
}
