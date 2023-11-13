import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { clsx } from 'clsx';
import Navbar from '@/app/ui/navbar';
import Loading from './loading';
import './globals.css';
import { Provider } from '@/config/themes/provider';
import { montserrat } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Jairo Martinez',
  description:
    "I'm a highly skilled software developer with over five years of experience, driven by a deep passion for achieving both personal and professional growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          montserrat.className,
          'bg-gradient-to-r from-secondary-100 from-10%  via-secondary-50 via-30% to-secondary-100 to-90%',
          'antialiased min-h-screen ',
        )}
      >
        <Navbar></Navbar>
        <Provider>
          <main
            className={clsx(
              'min-h-screen flex self-center items-center md:items-start lg:items-start xl:items-start content-start md:content-center lg:content-center justify-between px-12 md:px-24 lg:px-36 xl:px-48 mt-12 md:mt-6 py-2 md:py-6 lg:py-6',
            )}
          >
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </Provider>
        {/* </div> */}
      </body>
    </html>
  );
}
