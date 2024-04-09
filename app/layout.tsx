import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"],
  variable: '--font-work-sans',
  weight: ['400', '600', '700']
 });

export const metadata: Metadata = {
  title: "Figma Analogue",
  description: "A minimalist figma analogue usting Fabric.js and Liveblocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>{children}</body>
      <Room>
        {children}
      </Room>
    </html>
  );
}
