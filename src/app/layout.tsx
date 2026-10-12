import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PerformanceMonitor } from "@/components/performance-monitor";

const display = localFont({
  src: "../../public/fonts/bricolage-grotesque-extra-bold.ttf",
  variable: "--font-display",
  weight: "800",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "../../public/fonts/dm-sans-regular.ttf", weight: "400" },
    { path: "../../public/fonts/dm-sans-bold.ttf", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nurço — Waffle, Kumpir & Bolca Mutluluk",
  description:
    "Tatlısıyla, tuzlusuyla hayatın keyifli tarafında. Nurço waffle ve kumpir dünyasına hoş geldin. Konsept önizleme; ürün görselleri temsilidir.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
