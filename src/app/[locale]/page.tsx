import React from "react";
import Navbar from "@/app/_components/navbar";
import HomeSection from "@/app/_sections/home";
import WorksSection from "@/app/_sections/works";
import ContactSection from "@/app/_sections/contact";
import NavbarModal from "@/app/_components/navbarModal";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  setRequestLocale((await params).locale);

  return (
    <div className="font-nuckle w-full h-full flex flex-col bg-[#FAFAFC]">
      <Navbar />
      <NavbarModal />
      <HomeSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
}
