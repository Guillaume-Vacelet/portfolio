import SocialLinks, { SocialLink } from "@/app/components/socialLinks";

export default function HomeSection() {
  const socialLinks: SocialLink[] = [
    { icon: 'linkedin.svg', label: 'linkedin', url: '' },
    { icon: 'github.svg', label: 'github', url: 'https://github.com/Guillaume-Vacelet' },
    { icon: 'envelope.fill.svg', label: 'email', url: 'mailto:guillaume.vacelet@gmail.com' },
  ]

  return (
    <section id="home" className="w-full flex flex-col justify-between p-8 box-border"
        style={{height: "calc(100vh - var(--header-h))"}}>
      <div>
        <h1 className="text-5xl font-bold pb-2">Guillaume <br /> Vacelet</h1>
        <h2 className="text-2xl font-semibold pb-4">Software engineer</h2>
        <h3 className="text-base">I seek quality</h3>
      </div>
      <div className="flex justify-end">
        <SocialLinks socialLinks={socialLinks} />
      </div>
    </section>
  );
}
