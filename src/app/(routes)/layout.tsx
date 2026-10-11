import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/_styles/globals.css";
import "@/app/_styles/animations.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
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

export const metadata: Metadata = {
  title: "Guillaume Vacelet",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
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
