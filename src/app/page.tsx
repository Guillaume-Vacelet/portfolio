import Navbar, { NavLink } from "./components/navbar";
import HomeSection from "./sections/home";
import ExperiencesSection from "./sections/experiences";
import ProjectsSection from "./sections/projects";
import ContactSection from "./sections/contact";
import React from "react";

export default function Home() {
  const navLinks: NavLink[] = [
    { label: 'Home', anchor: '' },
    { label: 'Experiences', anchor: 'experiences' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Contact', anchor: 'contact' },
  ]

  return (
    <div className="w-full h-full flex flex-col bg-slate-600">
      <Navbar navLinks={navLinks} />
      <HomeSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
