import type { Metadata } from "next";
import React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Narcissism on Screen",
  description:
    "A psychology and cinema analysis of narcissistic traits in fictional film and television characters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className="antialiased overflow-x-hidden"
        style={{ backgroundColor: "#0A0A0A", color: "#F1EFEA" }}
      >
        {children}
      </body>
    </html>
  );
}
