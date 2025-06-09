import type { Metadata } from "next";
import {  Mona_Sans } from "next/font/google";
import "./globals.css";

import { Inter } from 'next/font/google';

const inter = Mona_Sans({
  subsets: ['latin'],
  display: 'swap',     // optional
  weight: ['200', '300', '400', '500', '600', '700', '900'], // optional: choose specific weights
  variable: '--font-inter', // optional: use as a CSS variable
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} font-mona antialiased text-black`}
      >
        {children}
      </body>
    </html>
  );
}
