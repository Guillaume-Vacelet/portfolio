import { useTranslations } from "next-intl";

export default function LightIndicator() {
  const t = useTranslations('homePage.homeSection');
  
  return (
    <div className="mb-8 w-fit flex flex-row items-center gap-2 py-1 px-2 md:px-3 rounded-full border bg-black border-gray-700">
      <div className="relative flex-shrink-0 size-3">
        <div className="absolute top-0 left-0 size-full rounded-full bg-green-500 opacity-80 animate-ping"></div>
        <div className="size-full rounded-full bg-green-500 shadow-[0px_0px_20px_4px_#48bb78]"></div>
      </div>
      <span className="text-xs sm:text-sm leading-none mt-[2px]">{t('status')}</span>
    </div>
  )
}