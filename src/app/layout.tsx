import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import NavbarComponent from "./Navbar";
import Loading from "./loading";
import { Suspense } from "react";
import { clsx } from "clsx";

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
        <Providers>
          <NavbarComponent></NavbarComponent>
          <main className="min-h-screen flex flex-col items-center justify-between p-4 md:px-24 lg:px-24 md:py-12 lg:py-12  | bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </Providers>
      </body>
    </html>
  );
}
