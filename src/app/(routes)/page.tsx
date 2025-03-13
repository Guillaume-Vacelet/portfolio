import Navbar from "@/app/_components/navbar";
import HomeSection from "@/app/_sections/home";
import ProjectsSection from "@/app/_sections/projects";
import Footer from "@/app/_sections/footer";
import React from "react";
import AboutSection from "@/app/_sections/about";
import NavbarModal from "@/app/_components/navbarModal";

export default function Home() {

  return (
    <div className="font-nuckle w-full h-full flex flex-col items-center relative">
      <Navbar hideOnScroll />
      <NavbarModal />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
