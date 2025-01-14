import Navbar, { NavLink } from "./components/navbar";
import HomeSection from "./sections/home";
import ExperiencesSection from "./sections/experiences";
import ProjectsSection from "./sections/projects";
import ContactSection from "./sections/contact";
import React from "react";

export default function Home() {

  return (
    <div className="font-nuckle w-full h-full flex flex-col items-center relative">
      <Navbar />
      <HomeSection />
      {/* <ExperiencesSection /> */}
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
