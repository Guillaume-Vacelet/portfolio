import Image from "next/image";
import LinkIcon from "@/app/_components/linkIcon";
import { useTranslations } from "next-intl";

export interface SchoolCard {
  image: string;
  url: string;
  i18nKey: string;
}

export default function SchoolLinkCard({schoolCard} : {schoolCard: SchoolCard}) {
  const t = useTranslations(`homePage.aboutSection.${schoolCard.i18nKey}`);

  return (
    <div className="h-full w-full flex flex-col p-[2px] bg-cardBackground rounded-2xl border-cardBorder border-[0.35px] shadow-sm">
      <a href={schoolCard.url} target="_blank" className="flex flex-col bg-white p-1 rounded-[14px] border-cardBorder border-[0.35px]">
        <div className="relative p-2 md:p-[14px] rounded-[10px] hover:bg-cardHover transition-colors duration-300">
          <div className="absolute top-2 right-2 flex flex-row justify-end">
            <LinkIcon />
          </div>
          <div className="flex flex-col items-center justify-center h-28">
            <div className="relative size-40 ">
              <Image
                src={schoolCard.image}
                alt="school logo"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </div>
      </a>

      <div className="p-3 md:p-4">
        <h3 className="text-lg font-medium pb-2">{t('title')}</h3>
        <h3 className="text-sm font-normal text-gray-600">{t('desc')}</h3>
      </div>
    </div>
  )
}