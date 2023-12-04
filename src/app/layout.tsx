import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { clsx } from 'clsx';
import Navbar from '@/app/ui/navbar';
import Loading from './loading';
import './globals.css';
import { Provider } from '@/config/themes/provider';
import { montserrat } from './ui/fonts';
import Footer from './ui/footer';
import AnimatedCursor from 'react-animated-cursor';

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
          'bg-cover bg-no-repeat bg-gradient-to-r from-secondary-100 from-10%  via-secondary-50 via-30% to-secondary-100 to-90%',
          'antialiased min-h-screen ',
        )}
      >
        <AnimatedCursor 
          color='193, 11, 111'
          innerSize={8}
          innerScale={0.7}
          outerSize={20}
          outerScale={8}
          outerAlpha={0.2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]} />
        <Navbar></Navbar>
        <Provider>
          <main
            className={clsx(
              'px-12 md:px-24 lg:px-36 xl:px-48 | py-2 md:py-2 lg:py-6 xl:py-8',
              'mt-4 md:mt-2',
              'min-h-screen flex self-center items-center md:items-start lg:items-start xl:items-start content-start md:content-center lg:content-center justify-between',
            )}
          >
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}
