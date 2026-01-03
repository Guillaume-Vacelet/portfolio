'use client'
import React from "react";
import { useTranslations } from "next-intl";
import BusinessCard from '@/app/_components/businessCard/businessCard';
import HoverableButtonLink from "@/app/_components/hoverableButtonLink";
import { calendlyLink, maltLink } from "@/app/_data/socialLinks";
import Avatar from "@/app/_components/avatar";

export default function HomeSection() {
  const t = useTranslations('homePage.homeSection');

  return (
    <section id="home" className="section h-screen pt-[var(--sm-header-h)] sm:pt-[var(--header-h)]">
      <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-end gap-10 lg:gap-10 xl:gap-16 [@media(max-height:750px)]:pt-8">
        <BusinessCard />

        <div className="w-full md:w-fit lg:w-1/2 lg:h-fit place-items-center md:place-items-start grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-8 lg:gap-x-0 gap-y-4 md:gap-y-0 lg:gap-y-8">
          <div className="col-start-1 place-content-center w-fit ">
            <Avatar />
          </div>

          <div className="col-start-1 md:col-start-2 lg:col-start-1 w-fit h-full flex items-center">
            <h1 className="max-w-none md:max-w-[500px] lg:max-w-[600px] text-center md:text-start text-2xl sm:text-3xl xl:text-4xl font-semibold text-appBlack whitespace-pre-line">
              {t('title')}
            </h1>
          </div>

          <div className="col-start-1 md:col-start-2 lg:col-start-1 w-full max-w-[400px] md:max-w-[500px]">
            <div className="w-full flex flex-col self-center md:self-end lg:self-start md:flex-row gap-4">
              <HoverableButtonLink label={t('bookACall')} url={calendlyLink.url} />
              <HoverableButtonLink label={t('hireMeOnMalt')} url={maltLink.url} primary />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
