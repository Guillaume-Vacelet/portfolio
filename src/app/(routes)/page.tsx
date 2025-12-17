import Navbar from "@/app/_components/navbar";
import HomeSection from "@/app/_sections/home";
import ProjectsSection from "@/app/_sections/projects";
import Footer from "@/app/_sections/footer";
import React from "react";
import AboutSection from "@/app/_sections/about";
import NavbarModal from "@/app/_components/navbarModal";

export default function Home() {

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="px-8 py-8 border-2 border-black flex flex-col items-center gap-4">
        <h1 className="text-black text-2xl font-semibold">🚧 Website under development</h1>
        <h2 className="text-black text-sm">📩 You can contact me at guillaume.vacelet@gmail.com</h2>
      </div>
    </div>
    // <div className="font-nuckle w-full h-full flex flex-col items-center relative">
    //   <Navbar hideOnScroll />
    //   <NavbarModal />
    //   <HomeSection />
    //   <AboutSection />
    //   <ProjectsSection />
    //   <Footer />
    // </div>
  );
}
