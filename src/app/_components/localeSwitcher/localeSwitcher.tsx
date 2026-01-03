import {useLocale} from 'next-intl';
import LocaleSwitcherSelect from './localeSwitcherSelect';
import { locales } from '@/i18n/config';

export default function LocaleSwitcher({ dark } : {dark: boolean}) {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} items={locales} dark={dark} />
  );
}