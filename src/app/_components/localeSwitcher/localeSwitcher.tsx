import {useLocale} from 'next-intl';
import LocaleSwitcherSelect from './localeSwitcherSelect';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher({ dark } : {dark?: boolean}) {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} items={routing.locales} dark={dark} />
  );
}