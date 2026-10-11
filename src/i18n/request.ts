import { getRequestConfig } from 'next-intl/server';
import { isLocale, routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Comes from the [locale] segment, validated by the middleware and the layout
  const requested = await requestLocale;
  const locale = isLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
