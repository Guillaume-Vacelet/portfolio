import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware versions of Next's navigation APIs: hrefs are written without
// the locale prefix (e.g. "/projects/bento") and the current locale is added.
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
