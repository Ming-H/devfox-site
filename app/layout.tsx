import "./globals.css";
import "@fontsource/noto-serif-sc/600.css";
import "@fontsource/noto-serif-sc/900.css";
import "@fontsource/noto-sans-sc/400.css";
import "@fontsource/noto-sans-sc/500.css";
import "@fontsource/noto-sans-sc/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/playfair-display/500-italic.css";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/products";

export const metadata = {
  title: "DevFox — 起于自用，成于开放",
  description:
    "DevFox 的独立产品工作室：灯塔 Lighthouse、句读 judou、GrowthGym、月老 Yinyuan 与 20+ Claude Code 技能。每件作品都始于一个真实问题。",
  metadataBase: new URL(site.url),
  openGraph: {
    title: "DevFox — 起于自用，成于开放",
    description:
      "独立开发 · AI 工程。灯塔、句读、GrowthGym、月老与 Skills 家族，每件作品都始于一个真实问题。",
    url: site.url,
    siteName: site.name,
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
