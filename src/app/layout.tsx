import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { clsx } from "clsx";
import { Providers } from "@/config/themes";
import Navbar from "@/components/navbar";
import Loading from "./loading";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jairo Martinez",
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
      <body className={clsx(inter.className, "")}>
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <Navbar></Navbar>
          <Providers>
            <main className="teal-dark h-screen flex self-center items-center md:items-start lg:items-start xl:items-start content-start md:content-center lg:content-center justify-between px-12 md:px-24 lg:px-36 xl:px-48 mt-24 md:mt-6 py-4 md:py-6 lg:py-6">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
