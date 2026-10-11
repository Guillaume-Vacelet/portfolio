import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/_styles/globals.css";
import "@/app/_styles/animations.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from "next/navigation";
import {isLocale, routing} from "@/i18n/routing";
import {openGraphLocales, siteUrl} from "@/i18n/metadata";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const nuckle = localFont({
  src: [
    {
      path: '../../../public/static/fonts/Nuckle/Nuckle-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/Nuckle/Nuckle-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/Nuckle/Nuckle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/Nuckle/Nuckle-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/Nuckle/Nuckle-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/Nuckle/Nuckle-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-nuckle'
}) 

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: siteUrl,
    title: {
      default: t('title'),
      template: '%s · Guillaume Vacelet',
    },
    description: t('description'),
    openGraph: {
      type: 'website',
      siteName: 'Guillaume Vacelet',
      locale: openGraphLocales[locale],
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary',
    },
  };
}

// Pre-render every page once per locale at build time
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  // Lets next-intl read the locale without headers/cookies, which keeps rendering static
  setRequestLocale(locale);

  const messages = await getMessages();
  // Only client components need messages in the browser. Add the namespace here
  // when a client component starts using a new one (e.g. the About section).
  const clientMessages = { navbar: messages.navbar };

  return (
    <html lang={locale}>
      {/* Browser extensions inject attributes on <body> before hydration */}
      <body className={`${nuckle.className} antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider messages={clientMessages}>
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
