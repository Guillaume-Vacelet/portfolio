import Image from "next/image";
import Navbar, { NavLink } from "./components/navbar";
import SocialLinks, { SocialLink } from "./components/socialLinks";

export default function Home() {
  const navLinks: NavLink[] = [
    { label: 'Home', anchor: '' },
    { label: 'Experiences', anchor: 'experiences' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' },
  ]
  const socialLinks: SocialLink[] = [
    { icon: 'linkedin.svg', label: 'linkedin', url: '' },
    { icon: 'github.svg', label: 'github', url: '' },
    { icon: 'envelope.fill.svg', label: 'email', url: 'mailto:guillaume.vacelet@gmail.com' },
  ]

  return (
    <div className="w-full h-full flex flex-col bg-slate-700">
      <Navbar navLinks={navLinks} />

      <section id="home" className="w-full flex flex-col justify-between p-8 bg-green-400 pt-[var(--header-h)] box-border"
        style={{height: "calc(100vh - var(--header-h))"}}>
        <div>
          <h1 className="text-5xl font-bold pb-2">Guillaume <br /> Vacelet</h1>
          <h2 className="text-2xl font-medium pb-4">Software engineer</h2>
          {/* <h3 className="text-base">I seek quality</h3> */}
        </div>
        <div className="flex justify-end">
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </section>

      <section id="experiences" className="h-screen bg-red-300"></section>
      <section id="projects" className="h-screen bg-yellow-300"></section>
      <section id="contact" className="h-screen bg-blue-300"></section>
    </div>
  );
}
