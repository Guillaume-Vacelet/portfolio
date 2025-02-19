import Navbar from "@/_components/navbar";
import HomeSection from "@/_sections/home";
import ExperiencesSection from "@/_sections/experiences";
import ProjectsSection from "@/_sections/projects";
import Footer from "@/_sections/footer";
import React from "react";
import AboutSection from "@/_sections/about";
import NavbarModal from "@/_components/navbarModal";

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
