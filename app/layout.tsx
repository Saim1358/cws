import type { Metadata, Viewport } from "next";
import React from "react";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Scripts from "./components/Scripts";

const Font = Poppins({
  weight: ["500", "600", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  title: "CodeWithSaim",
  description: "My Portfolio Website !",
  openGraph: {
    title: "CodeWithSaim",
    description: "My Portfolio Website !",
    url: "https://cwsaim.vercel.app",
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
  metadataBase: new URL("https://cwsaim.vercel.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
