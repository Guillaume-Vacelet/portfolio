'use client'
import React, { useState } from "react";
import { locales, defaultLocale } from "@/i18n/config";
import { getUserLocale, setUserLocale } from "../_services/locale";

export default async function LangDropdownList() {
  const [language, setLanguage] = useState<string>(defaultLocale);
  const [listDown, setListDown] = useState<boolean>(false);

  function handleSwitchLanguage(selectedLang: string) {
    setLanguage(selectedLang);
    setListDown(false);
  }

  return (
    <div className="relative w-fit flex flex-col gap-0 text-xs md:text-sm cursor-pointer z-50"
      onBlur={(e) => {
        if (e.target === document.activeElement) return;
        if (e.relatedTarget === null)
          setListDown(false);
        }
      }>
      <button onClick={() => setListDown(!listDown)}
        className={`size-10 md:size-12 flex items-center justify-center rounded-md font-medium bg-gray-900 hover:bg-white hover:text-black ${listDown ? 'text-black bg-white rounded-b-none' : ''}`}>
        {language}
      </button>
      <ul className={`w-full absolute top-10 md:top-12 h-20 md:h-24 origin-top scale-y-0 flex flex-col items-center justify-center overflow-hidden text-black last:rounded-b-md transition-transform ${listDown ? 'scale-y-100' : ''}`} style={{transitionDuration: '100ms'}}>
        {locales.filter(lang => lang !== language).map(lang => 
          <li key={lang}
            className="size-10 md:size-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer">
            <button className="size-full" onClick={() => {handleSwitchLanguage(lang)}}>{lang}</button>
          </li>
        )}
      </ul>
    </div>
  )
}