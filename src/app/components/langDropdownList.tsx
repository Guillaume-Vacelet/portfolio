'use client'
import React, { useContext, useState } from "react";
import LanguageContext, { LanguageProvider } from "@/app/contexts/LanguageContext";

export default function LangDropdownList() {
  const { languages, setLanguages } = useContext(LanguageContext);
  const [listDown, setListDown] = useState<boolean>(false);

  function handleSwitchLanguage(index: number) {
    let i = index + 1;
    let tmp = languages;
    let prevLang = tmp[0];

    tmp[0] = tmp[i];
    tmp[i] = prevLang;
    setLanguages(tmp);
    setListDown(false);
  }

  return (
    <LanguageProvider>
      <div className="relative w-fit flex flex-col gap-0 text-xs sm:text-sm cursor-pointer z-50"
        onBlur={(e) => {
          if (e.target !== document.activeElement) {
            e.relatedTarget === null && setListDown(false);
          }
        }}>
        <button onClick={() => setListDown(!listDown)}
          className={`size-8 md:size-12 flex items-center justify-center rounded-md font-medium bg-gray-900 hover:bg-white hover:text-black ${listDown ? 'text-black bg-white rounded-b-none' : ''}`}>
          {languages[0]}
        </button>
        <ul className={`w-full absolute top-8 md:top-12 h-16 md:h-24 origin-top scale-y-0 flex flex-col items-center justify-center overflow-hidden text-black last:rounded-b-md transition-transform ${listDown ? 'scale-y-100' : ''}`} style={{transitionDuration: '100ms'}}>
          {languages.slice(1).map((lang, i) => 
            <li key={i}
              className="size-8 md:size-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <button className="size-full" onClick={() => {handleSwitchLanguage(i)}}>{lang}</button>
            </li>
          )}
        </ul>
      </div>
    </LanguageProvider>
  )
}