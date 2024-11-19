import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import Providers from "./components/Providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import Scripts from "./components/Scripts";

const Font = Poppins({
  weight: ["500", "600", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeWithSaim",
  description: "My Portfolio Website !",
  themeColor: " #0f172a",
  openGraph: {
    title: "CodeWithSaim",
    description: "My Portfolio Website !",
    url: "https://codewithsaim.vercel.app",
    siteName: "CodeWithSaim",
    type: "profile",
  },
  icons: {
    icon: "/img/logoBGRemoved.png",
    shortcut: "/img/logoBGRemoved.png",
    other: {
      rel: "apple-touch-icon",
      url: "/img/favicons/apple-touch-icon.png",
    },
  },
  manifest: "/webmanifest.json",
  metadataBase: new URL("https://codewithsaim.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("h-full", Font.className)}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-full">
        <Providers>
          <Navbar />
          {children}
          <Scripts />
        </Providers>
      </body>
    </html>
  );
}
