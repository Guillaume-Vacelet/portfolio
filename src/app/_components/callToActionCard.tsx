import Link from "next/link";
import Image from "next/image";
import { maltLink } from "@/app/_data/socialLinks";
import { useTranslations } from "next-intl";

export default function CallToActionCard() {
  const t = useTranslations("homePage.aboutSection.callToActionCard");

  return (
    <Link href={maltLink.url} target="_blank" className="h-full w-full relative overflow-hidden flex p-8 bg-black border-cardBorder border-[0.35px] rounded-2xl shadow-md card-hover-style hover:shadow-md">
      <div className="w-full flex flex-col justify-center gap-6">
        <span className="text-[32px] text-white font-medium">{t('title')}</span>
        <div className="w-fit flex items-center gap-2 rounded-md py-2 px-3 bg-accent text-sm sm:text-base text-black">
          {t('button')}
          <div className="relative size-2">
            <Image
              src="/static/images/arrow.up.right.svg"
              alt="Up right arrow icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}