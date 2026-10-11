'use server';

import {cookies} from 'next/headers';
import {Locale, defaultLocale, isLocale} from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale(): Promise<Locale> {
  const locale = (await cookies()).get(COOKIE_NAME)?.value;
  return isLocale(locale) ? locale : defaultLocale;
}

// Server actions can be called with any payload, so the value is checked here too
export async function setUserLocale(locale: Locale) {
  if (!isLocale(locale)) return;
  (await cookies()).set(COOKIE_NAME, locale);
}