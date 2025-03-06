import { handleScrollToAnchor } from "@/app/_components/navbar";
import Link from "next/link";
import LinkIcon from "./linkIcon";
import { useTranslations } from "next-intl";

export default function ScrollToProjectsCard() {
  const t = useTranslations("homePage.aboutSection.scrollToProjectsCard");

  return (
    <Link className="group size-full flex p-1 bg-white border-cardBorder border-[0.35px] shadow-sm rounded-2xl"
      href="#projects"
      onClick={(e) => handleScrollToAnchor(e, "projects")}>
      <div className="relative w-full flex flex-row justify-start items-center p-3 rounded-xl group-hover:bg-cardHover transition-colors duration-300">
        <span className="text-lg font-medium">{t('title')}</span>
        <div className="absolute right-[14px] rotate-45 group-hover:rotate-[135deg] transition-transform duration-300">
          <LinkIcon />
        </div>
      </div>
    </Link>
  );
}