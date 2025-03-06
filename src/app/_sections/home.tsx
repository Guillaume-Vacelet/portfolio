'use client'
import React from "react";
import LightIndicator from "@/app/_components/lightIndicator";
import SocialLinkList from "@/app/_components/socialLinkList";
import HoverableButtonLink from "@/app/_components/hoverableButtonLink";
import Navbar from "@/app/_components/navbar";
import { useTranslations } from "next-intl";

export default function HomeSection() {
  const t = useTranslations('homePage.homeSection');
  
  return (
    <section id="home" className="section !p-0">
      <div className="relative w-full flex flex-col p-4 sm:p-5 shrink-animation bg-black">
        {/* <div className="dotted-grid"></div> */}
        <Navbar />

        <div className="size-full flex flex-col items-center justify-center gap-10 fade-in-top">
          <div className="flex flex-col items-center gap-2">
            <div className="mb-8 w-fit flex flex-row items-center gap-2 py-1 px-2 md:px-3 rounded-full border bg-black border-gray-700">
              <LightIndicator />
              <span className="text-xs sm:text-sm leading-none mt-[2px]">{t('status')}</span>
            </div>

            <div className="flex flex-col items-start gap-1">
              <span className="text-xs sm:text-base lg:text-lg font-medium">{t('preTitle')}</span>
              <h1 className="text-[29px] sm:text-5xl md:text-6xl lg:text-7xl leading-none font-bold text-start">
                Guillaume Vacelet
              </h1>
            </div>

            <span className="max-w-60 sm:max-w-none md:max-w-none text-center sm:text-start text-sm sm:text-base font-medium text-slate-400">
              {t('subtitle')}
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <HoverableButtonLink label={t('contactButton')} url="mailto:guillaume.vacelet@gmail.com" primary />
              <HoverableButtonLink label={t('aboutButton')} url="about" />
            </div>
            <SocialLinkList />
          </div>
        </div>
      </div>
    </section>
  );
}
