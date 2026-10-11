'use client';
import {Locale} from '@/i18n/routing';
import {Link, usePathname} from '@/i18n/navigation';

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
  // Current path without the locale prefix, e.g. "/projects/bento"
  const pathname = usePathname();

  return (
    <ul className="flex flex-row items-center gap-4">
      {items.map(lang => 
        <li
          key={lang}
          className={`relative flex flex-col items-center ${defaultColor} cursor-pointer`}>
          <Link
            href={pathname}
            locale={lang}
            scroll={false}
            className={`${lang === defaultValue ? 'text-accent' : defaultColor} transition-colors`}>
            {lang}
          </Link>
          <div className={`${lang === defaultValue ? 'bg-accent' : 'bg-transparent'} absolute top-full w-1 h-1 rounded-full`}></div>
        </li>
      )}
    </ul>
  );
}