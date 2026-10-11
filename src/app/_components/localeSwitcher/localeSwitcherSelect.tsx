'use client';
import {Locale} from '@/i18n/config';
import {setUserLocale} from '@/app/_services/locale';

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  dark
}: {
  defaultValue: string;
  items: readonly Locale[];
  dark?: boolean
}) {
  const defaultColor = dark ? '' : 'text-appBlack'

  function onChange(locale: Locale) {
    setUserLocale(locale);
  }

  return (
    <ul className="flex flex-row items-center gap-4">
      {items.map(lang => 
        <li
          key={lang}
          className={`relative flex flex-col items-center ${defaultColor} cursor-pointer`}>
          <button className={`${lang === defaultValue ? 'text-accent' : defaultColor} transition-colors`} onClick={() => {onChange(lang)}}>{lang}</button>
          <div className={`${lang === defaultValue ? 'bg-accent' : 'bg-transparent'} absolute top-full w-1 h-1 rounded-full`}></div>
        </li>
      )}
    </ul>
  );
}