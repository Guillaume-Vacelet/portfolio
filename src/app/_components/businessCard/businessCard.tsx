'use client';
import InteractiveCard from "@/app/_components/businessCard/interactiveCard";
import Image from "next/image";
import SocialLinkList from '@/app/_components/socialLinkList';
import { useTranslations } from "next-intl";

export default function BusinessCard() {
    const t = useTranslations('homePage.homeSection');
    
    return (
        <InteractiveCard
            front={
                <div className="w-full h-full flex flex-col text-appBlack p-4 sm:p-5 xl:p-6 bg-[#F2F2F2]">
                    <div className="w-full flex flex-row items-center justify-between">
                        <Image
                            src={`/static/icons/logo-perso-2.svg`}
                            alt="personal logo"
                            width={60}
                            height={24}
                            className="w-auto h-3.5 sm:h-4 xl:h-5"
                        />
                        <div className="flex flex-row items-center gap-2 border border-[#D9D9D9] py-[3px] px-2 sm:px-3 rounded-full whitespace-nowrap">
                            <div className="relative flex-shrink-0 size-1.5 sm:size-2">
                                <div className="absolute top-0 left-0 size-full rounded-full bg-green-500 opacity-80 animate-ping"></div>
                                <div className="size-full rounded-full bg-green-500 shadow-[0px_0px_4px_1px_#48bb78]"></div>
                            </div>
                            <span className="text-xs sm:text-sm">{t('openToWork')}</span>
                        </div>
                    </div>

                    <div className="h-full flex flex-col justify-center">
                        <h1 className="text-lg sm:text-xl xl:text-2xl font-semibold">Guillaume Vacelet</h1>
                        <h2 className="text-xs sm:text-sm xl:text-base">{t('jobTitle')}</h2>
                    </div>

                    <Image
                        src={`/static/icons/360.svg`}
                        alt="360 icon"
                        width={24}
                        height={24}
                        className="select-none self-end"
                    />
                </div>
            }
            back={
                <div className="w-full h-full flex flex-row text-appBlack p-4 sm:p-5 xl:p-6 bg-[#F2F2F2] gap-4">
                    <div className="w-full flex flex-col items-start gap-2">
                        <SocialLinkList />
                    </div>
                    
                    <div className="flex items-end">
                        <Image
                            src={`/static/icons/360.svg`}
                            alt="360 icon"
                            width={24}
                            height={24}
                            className="select-none"
                        />
                    </div>
                </div>
            }
        />
    );
}