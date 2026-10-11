import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Redirects unprefixed URLs to a locale (from the NEXT_LOCALE cookie, then the
// browser language, then the default) and adds hreflang alternate links.
export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next internals, Vercel internals and files with an extension
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
