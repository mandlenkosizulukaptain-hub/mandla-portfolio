import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LuckyCursor from "./components/LuckyCursor";
import ScrollProgressLine from "./components/ScrollProgressLine";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandlenkosi Zulu | Software Engineer",
  description:
    "Mandlenkosi Zulu is a software engineer building thoughtful, accessible digital experiences for the web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="video-background" aria-hidden="true">
          <video
            className="page-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/video-bg.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay" />
        </div>
        <LuckyCursor />
        <ScrollProgressLine />
        {children}
      </body>
    </html>
  );
}