/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const Scripts = () => {
  const { theme } = useTheme();

  // DARK MODE

  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html")?.setAttribute("data-theme", "dark");
      document
        ?.querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#020817");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "light");
      document
        ?.querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#ffffff");
    }
  }, [theme]);

  return <></>;
};
export default Scripts;
