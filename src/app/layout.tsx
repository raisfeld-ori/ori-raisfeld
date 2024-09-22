import type { Metadata } from "next";
import "./globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const metadata: Metadata = {
  title: "Ori raisfeld",
  description: "My personal porfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-y-scroll">
        {children}
      </body>
    </html>
  );
}
