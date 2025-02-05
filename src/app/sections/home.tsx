'use client'
import React from "react";
import LightIndicator from "../components/lightIndicator";
import SocialLinks from "../components/socialLinks";
import HoverableButtonLink from "../components/hoverableButtonLink";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="section">
      <div className="relative w-full gap-8 p-4 sm:p-5 shrink-animation bg-black">
        <Navbar />

        <div className="size-full flex flex-col items-center justify-center gap-10 fade-in-right">          
          <div className="flex flex-col items-center gap-2">
            <div className="mb-8 w-fit flex flex-row items-center gap-2 py-1 px-2 md:px-3 rounded-full border bg-black border-gray-700">
              <LightIndicator />
              <span className="text-xs sm:text-sm leading-none mt-[2px]">Available to work in Seoul</span>
              <div className="relative size-3 sm:size-4 inline-block self-center">
                <Image
                  src="/static/images/korea-flag.svg"
                  alt="korean flag"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
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
            <HoverableButtonLink url="about" label="More about me" />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
