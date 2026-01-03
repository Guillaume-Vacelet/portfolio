'use client';

import {useState, useTransition} from 'react';
import {Locale} from '@/i18n/config';
import {setUserLocale} from '@/app/_services/locale';

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  dark
}: {
  defaultValue: string;
  items: string[];
  dark?: boolean
}) {
  const [listDown, setListDown] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const defaultColor = dark ? '' : 'text-appBlack'

  function onChange(value: string) {
    const locale = value as Locale;
    setListDown(false);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <ul className="flex flex-row items-center gap-4">
      {items.map(lang => 
        <li
          key={lang}
          className={`relative flex flex-col items-center ${defaultColor} cursor-pointer`}>
          <button className={`${lang === defaultValue ? 'text-accent' : defaultColor}`} onClick={() => {onChange(lang)}}>{lang}</button>
          <div className={`${lang === defaultValue ? 'bg-accent' : 'bg-none'} absolute top-full w-1 h-1 rounded-full`}></div>
        </li>
      )}
    </ul>
  );
}