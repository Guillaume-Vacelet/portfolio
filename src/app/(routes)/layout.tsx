import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/_styles/globals.css";
import "@/app/_styles/animations.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react"

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
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${nuckle.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  );
}
