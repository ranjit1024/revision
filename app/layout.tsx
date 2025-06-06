import type { Metadata } from "next";
import {  Mona_Sans } from "next/font/google";
import "./globals.css";
const inter = Mona_Sans({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$ ${inter.className } antialiased text-black`}
      >
        {children}
      </body>
    </html>
  );
}
