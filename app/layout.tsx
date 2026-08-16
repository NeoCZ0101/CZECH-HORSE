import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { platformName } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${platformName} | Tělo a psychika bez zkratek`,
  description: "Platforma pro muže, kteří chtějí pojmenovat konkrétní problém, zorientovat se v možnostech a později najít vhodnou pomoc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
