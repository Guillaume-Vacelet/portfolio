import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/animations.css";

const nuckle = localFont({
  src: [
    {
      path: '../../public/static/fonts/Nuckle/Nuckle-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/static/fonts/Nuckle/Nuckle-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/static/fonts/Nuckle/Nuckle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/static/fonts/Nuckle/Nuckle-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/static/fonts/Nuckle/Nuckle-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/static/fonts/Nuckle/Nuckle-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-nuckle'
}) 

export const metadata: Metadata = {
  title: "Guillaume Vacelet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nuckle.variable}`}>
      <body className="antialiased font-switzer">
        {children}
      </body>
    </html>
  );
}
