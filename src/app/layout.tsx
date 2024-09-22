import type { Metadata } from "next";
import "./globals.css";

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
      <body className="overflow-y-scroll">
        {children}
      </body>
    </html>
  );
}
