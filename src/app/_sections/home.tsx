'use client'
import React from "react";
import LightIndicator from "@/app/_components/lightIndicator";
import SocialLinkList from "@/app/_components/socialLinkList";
import HoverableButtonLink from "@/app/_components/hoverableButtonLink";
import Navbar from "@/app/_components/navbar";
import { useTranslations } from "next-intl";
import Aurora from "../_components/aurora";
import { handleScrollToAnchor } from "@/app/_components/navbar";

export default function HomeSection() {
  const t = useTranslations('homePage.homeSection');
  
  return (
    <section id="home" className="section !p-0">
      <div className="relative w-full flex flex-col p-4 sm:p-5 shrink-animation bg-black">
        {/* <div className="dotted-grid"></div> */}
        
        <div className="absolute top-0 left-0 size-full overflow-hidden rounded-lg">
          <Aurora
            colorStops={["#CE4229", "#F2BA1F", "#D53124"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        <Navbar />

        <div className="size-full flex flex-col items-center justify-center gap-10 fade-in-top">
          <div className="flex flex-col items-center gap-2">
            <LightIndicator />

            <h1 className="text-[29px] sm:text-5xl md:text-6xl lg:text-6xl leading-none font-medium text-start mb-2">
              Guillaume Vacelet
            </h1>

            <h2 className="text-2xl leading-none font-normal text-start text-slate-400">
              {t('subtitle')}
            </h2>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <HoverableButtonLink label={t('contactButton')} url="mailto:guillaume.vacelet@gmail.com" primary />
              <HoverableButtonLink label={t('aboutButton')} url="about" onclick={handleScrollToAnchor} />
            </div>
            <SocialLinkList />
          </div>
        </div>
      </div>
    </section>
  );
}
