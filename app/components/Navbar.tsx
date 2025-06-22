"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import ModeSwitch from "./ModeSwitch";

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (cpath !== "/projects/adda") {
      const navbar = document.querySelector(".navbar")!;
      const handler = (e: Event) => {
        //@ts-expect-error - target is not typed
        if (!navbar.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const cpath = usePathname();
  return (
    <>
      <div
        className={clsx(
          "navbar shadow-lg h-20 z-10 md:flex md:justify-center p-0"
        )}
      >
        <Image
          src="/img/logoBGRemoved.png"
          className="absolute left-8 top-2 z-20"
          alt="Logo"
          width={75}
          height={75}
        />
        <div
          className={clsx(
            "flex flex-col gap-8 transition-all duration-1000 absolute pt-24 pb-16 rounded-b-3xl w-full md:top-0 md:flex-row md:w-auto md:mt-6 md:py-0 md:rounded-none md:right-24",
            open ? "top-0 bg-slate-300 dark:bg-slate-800" : "top-[-100%]"
          )}
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              className={clsx(
                "w-full text-center text-xl hover:text-red-500",
                (cpath === item.href ||
                  (cpath.startsWith("/projects") &&
                    item.href === "/projects")) &&
                  "text-red-500"
              )}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <ModeSwitch />
        <div
          className="absolute right-4 top-6 md:hidden z-10 cursor-pointer flex flex-col gap-2"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div
            className={clsx(
              "rounded-3xl duration-500 h-2 w-12 bg-black dark:bg-white",
              open && "rotate-45 translate-y-4"
            )}
          ></div>
          <div
            className={clsx(
              "rounded-3xl duration-500 h-2 w-6 bg-black dark:bg-white",
              open && "hidden"
            )}
          ></div>
          <div
            className={clsx(
              "rounded-3xl duration-500 h-2 w-12 bg-black dark:bg-white",
              open && "-rotate-45"
            )}
          ></div>
        </div>
      </div>
    </>
  );
}
