'use client'
import React, { useEffect } from "react";
import LangDropdownList from "../components/langDropdownList";
import LightIndicator from "../components/lightIndicator";
import SocialLinks from "../components/socialLinks";
import HoverableButtonLink from "../components/hoverableButtonLink";
import Navbar from "../components/navbar";

export default function HomeSection() {
  
  // useEffect(() => {
  //   const homeSectionEl = document.getElementById('dot-grid');

  //   if (!homeSectionEl) return;
    
  //   const handleMouseMove = (e: MouseEvent) => {
  //     homeSectionEl.style.setProperty('--x', `${e.clientX}px`);
  //     homeSectionEl.style.setProperty('--y', `${e.clientY}px`);
  //   };
  
  //   window.addEventListener('mousemove', handleMouseMove);
  
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <section id="home" className="section">
      <div className="absolute top-0 right-0 w-full z-50">
        <Navbar />
      </div>
      
      <div className="relative w-full gap-8 p-4 sm:p-5 shrink-animation">
        <div id="dot-grid" className="absolute top-0 left-0 size-full round-corners-animation"></div>

        <div className="size-full flex flex-col items-center justify-center gap-10 fade-in-right">
          <div className="w-fit flex flex-row items-center gap-2 py-1 px-2 md:px-3 rounded-full border bg-black border-gray-700">
            <LightIndicator />
            <span className="text-xs sm:text-sm leading-none mt-[2px]">
              Available to work in
              <span style={{fontFamily: "NotoColorEmoji"}}> 🇰🇷</span>
              Seoul
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs sm:text-base lg:text-lg font-bold">Hello, I'm</span>
              <h1 className="text-[29px] sm:text-5xl md:text-6xl lg:text-7xl leading-none font-bold text-start">
                Guillaume Vacelet
              </h1>
            </div>
            <span className="max-w-80 sm:max-w-none md:max-w-none text-center sm:text-start text-sm sm:text-base font-medium text-slate-400">
              A software engineer building applications that matters.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <HoverableButtonLink url="#about" label="More about me" />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
