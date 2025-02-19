'use client'
import React from "react";
import LightIndicator from "@/_components/lightIndicator";
import SocialLinks from "@/_components/socialLinks";
import HoverableButtonLink from "@/_components/hoverableButtonLink";
import Navbar from "@/_components/navbar";

export default function HomeSection() {
  return (
    <section id="home" className="section">
      <div className="relative w-full gap-8 p-4 sm:p-5 shrink-animation bg-black">
        <Navbar />

        <div className="size-full flex flex-col items-center justify-center gap-10 fade-in-right">          
          <div className="flex flex-col items-center gap-2">
            <div className="mb-8 w-fit flex flex-row items-center gap-2 py-1 px-2 md:px-3 rounded-full border bg-black border-gray-700">
              <LightIndicator />
              <span className="text-xs sm:text-sm leading-none mt-[2px]">Available to work</span>
            </div>

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
            <div className="grid grid-cols-2 gap-4">
              <HoverableButtonLink label="More about me" url="about" />
              <HoverableButtonLink label="Contact me" url="mailto:guillaume.vacelet@gmail.com" primary />
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
