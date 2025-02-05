import Navbar from "./components/navbar";
import HomeSection from "./sections/home";
import ExperiencesSection from "./sections/experiences";
import ProjectsSection from "./sections/projects";
import Footer from "./sections/footer";
import React from "react";
import AboutSection from "./sections/about";
import NavbarModal from "./components/navbarModal";

export default function Home() {

  return (
    <div className="font-nuckle w-full h-full flex flex-col items-center relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar hideOnScroll />
      </div>
      <NavbarModal />
      <HomeSection />
      <AboutSection />
      {/* <ExperiencesSection /> */}
      <ProjectsSection />
      <Footer />
    </div>
  );
}
